
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProfiltSchema = new Schema({
    firstName: {
        type: String,    
    },
    lastName: {
        type: String,  
    },
    gmail: {
        type: String,    
    },
    address: {
        type: String,  
    },
    ville: {
        type: String,
    },
    dommaine: {
        type: String,
    },

});

const Profil = mongoose.model('Profil', ProfiltSchema
)

module.exports = Profil