const Route= require('express').Router();
const {getAllProfil} =require("../Controllers/profil")

//! Method = Post , URL = créationAppartement , Access = public
Route.get('/getProfil',getAllProfil)

module.exports=Route;