const Router = require('express').Router();
const controller = require('../controllers/rest');

//Rest Api to engage
Router.get('/identify-repo',controller.identifyRepo);


module.exports=Router;