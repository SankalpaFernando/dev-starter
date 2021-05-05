const open = require('open');
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const config = {
    method: 'get',
    url: 'https://api.github.com/user',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer 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', 
    },  };
class Controller {
    constructor(){

    }
    async home(req,res){
        const details= {}
        await Promise.all([
            axios(config).then(data=>data.data).then(data=>details.user=data).catch(err=>console.log(err))
        ])
        console.log("🚀 ~ file: home.js ~ line 14 ~ Controller ~ home ~ details", details)
        res.render('home',{details}) 
    }
    
}

module.exports = new Controller()