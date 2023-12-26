const Route= require('express').Router();
const {Login,Register} =require("../Controllers/AuthController")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/login',Login)
Route.post('/register',Register)

module.exports=Route;