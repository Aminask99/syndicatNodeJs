
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AppartementSchema = new Schema({
    Name_Client: {
        type: String,   
    },
    Recidance: {
        type: String,  
    },
    Nb_etage: {
        type: String,   
    },
    ville: {
        type: String, 
    },
    prix: {
        type: Number,
    },
    address: {
        type: String,
       
    },

    role: {
        type: mongoose.Types.ObjectId,
        ref: "paiement"  
    }

});

const Appartement = mongoose.model('Appartement', AppartementSchema)

module.exports = Appartement