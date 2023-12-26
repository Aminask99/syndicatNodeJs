const Route = require('express').Router();
const { craeteAppartement, updateAppartement, deleteAppartement, getAllAppartemnet, getOneAppartement } = require("../Controllers/AppartementControllers")

//! Method = Post , URL = creationAppartement , Access = public
Route.post('/craeteAppartement', craeteAppartement)

Route.put('/updateAppartement/:id', updateAppartement)

Route.delete('/delete/:id', deleteAppartement)

Route.get('/getOneAppartement/:id', getOneAppartement)

Route.get('/getAllAppartemnet', getAllAppartemnet)


module.exports = Route;