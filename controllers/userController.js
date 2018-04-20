// require express to use router
const express = require('express');
// instantiate router with router constructor
const router = express.Router();
//Require models to use schema and db
const User = require('../models/user');


//Get route to render add page
router.get('/add', (req, res)=>{
	res.render('user/add.ejs');
})

//Get route to render login-signup page
router.get('/', (req, res)=>{
	res.render('user/login-signup.ejs')
})

//Get route to render index page
router.get('/index', (req, res)=>{
	res.render('user/index.ejs')
})


















module.exports = router;
