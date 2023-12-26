const Route= require('express').Router();
const {creationPaiement,updatePaiement,deletePaiment,getAllPaiements} =require("../Controllers/PaiementController")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/creationPaiement',creationPaiement)
Route.put('/updatePaiement/:id',updatePaiement)
Route.delete('/deletePaiment/:id',deletePaiment)
Route.get('/getAllPaiements',getAllPaiements)

module.exports=Route;