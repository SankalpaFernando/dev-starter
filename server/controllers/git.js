const open = require('open');
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

class Controller {
    constructor(){

    }
    auth(req,res){
        const {code} =req.query;
        axios.post("https://github.com/login/oauth/access_token",{client_id:"73e3f44a6fc2d3598e8c",client_secret:"9c97126a3b95f98ef9ce347e21ad95e73383d34d",code}).then(async data=>{
            try{
                const access_token= await cryptr.encrypt((data.data).split("access_token=")[1].split("&scope=&token_type=bearer"))
                await fs.writeFile((path.join(__dirname,'../../.dev/')+"token"),access_token,(err)=>{})
                res.redirect('/home')
            }catch{
                res.render('gitPage',{error:"Error on Trying to Authenticate Github.Retry"})
            }
        }
        ).catch(err=>{
            console.log(err)
        })
    }
    gitAuth(req,res){
        open("https://github.com/login/oauth/authorize?client_id=73e3f44a6fc2d3598e8c&scope=['user','repo']")
        res.end()
    }
    gitPage(req,res){
        res.render('gitPage')
    }
}

module.exports = new Controller()