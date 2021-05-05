const Router = require('express').Router();
const controller = require('../controllers/git');

//Routes For Aunthecation
Router.get('/auth',controller.auth);
Router.get('/gitPage',controller.gitPage)
Router.get('/git-auth',controller.gitAuth);

module.exports=Router;