#!/usr/bin/env node
const { mkdir,readdir } = require('fs');
const server = require('./server');

const [,,...args]=process.argv;
if(args[0]==="--init"){ 
    mkdir('./.dev', { recursive: true }, (err) => {
        if (err) throw err;
    });  
  
}else if(args[0]==="start"){
    readdir('./', (err, files) => {
        if(err) throw err
        files.forEach(file => {
        console.log("🚀 ~ file: index.js ~ line 14 ~ readdir ~ file", file)
            if(file===".dev"){
                server.start();
            }else{
                console.error("Need Init dev in the Folder First")
            }
        });
      });
}