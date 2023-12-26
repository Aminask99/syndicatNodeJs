
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const paiementSchema = new Schema({
    Name_Client: {
        type: String,
        required: true,

    },
    date_facteur: {
        type: Date,
        required: true,
    },
    date_payment: {
        type: Date,
        required: true,
    },
    Recidance: {
        type: String,
        required: true,

    },
    prix: {
        type: Number,
        required: true,

    },
    role: {
        type: mongoose.Types.ObjectId,
        ref: "Appartement"  // refernse table 
    }

});

const Paiement = mongoose.model('paiement', paiementSchema)

module.exports = Paiement