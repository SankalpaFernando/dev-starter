const open = require('open');
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const Cryptr = require('cryptr');
const { exec } = require('child_process');
const cryptr = new Cryptr('myTotalySecretKey');

class Controller {
    constructor(){

    }
    async identifyRepo(req,res){
       const data = await exec('cd ../../ & basename `git rev-parse --show-toplevel`') 
       res.json({data})
    }    
}

module.exports = new Controller()
