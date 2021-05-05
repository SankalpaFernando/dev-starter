const Router = require('express').Router();
const controller = require('../controllers/home');

//Routes For Aunthecation
Router.get('/home',controller.home);
Router.get('/identify',(req,res)=>{
    res.json({data:["Hello","World"]})
})

module.exports=Router;