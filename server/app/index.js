const express = require('express');
const simpleGit = require('simple-git');
const git = simpleGit();
const gitRoute = require('../routes/git');
const homeRoute = require('../routes/home')
const restRoute = require('../routes/rest')
const path = require('path')
class Server {
    constructor(){
        this.app=express()
    }
    async config(){
        this.app.set('views',path.join(__dirname,'../public/views'));
        this.app.set('view engine','ejs')
        this.app.use(gitRoute)
        this.app.use(homeRoute)
        this.app.use(restRoute)

    }
    start(){
        this.config();
        this.app.listen(4785,(err)=>{
            if (err) throw err;
            console.log(`Server Started at PORT 4785`)
        })
    }
}
if(process.env.NODE_ENV==="dev"){
    new Server().start()
}
module.exports = new Server();