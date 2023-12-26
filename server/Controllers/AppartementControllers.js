const db = require("../Models/appartement")

const craeteAppartement = (req, res) => {

    console.log(req.body);
    let Appartement = new db({
        Name_Client: req.body.Name_Client,
        Recidance: req.body.Recidance,
        Nb_etage: req.body.Nb_etage,
        ville: req.body.ville,
        prix: req.body.prix,
        address: req.body.address,
    })
    Appartement.save()
        .then(Appartement => {
            return res.status(200).json({
                message: 'User Creat '
            });
        })

        .catch(error => {
            return res.status(400).json({
                message: error.message
            })
        })
}

const updateAppartement = (async (req, res) => {

    const { id } = req.params
    const NewClient = req.body.Name_Client
    const NewRecidance = req.body.Recidance
    const NewNb_etage = req.body.Nb_etage
    const NewVille = req.body.ville
    const NewPrix = req.body.prix
    const NewAddress = req.body.address

    db.findById(id)
        .then((e) => {
            db.updateOne({ _id: id }, { Name_Client: NewClient, Recidance: NewRecidance, Nb_etage: NewNb_etage, ville: NewVille, prix: NewPrix, address: NewAddress })
                .then((e) => {

                    return res.json({ message: 'PAARTEMENT UPDATED' })
                })
        })
        .catch((error) => { res.json({ message: 'ERROR UPDATING APPARTEMENT' }) })
})

const deleteAppartement = (async (req, res) => {
    const id = req.params.id;
    try {
        await db.deleteOne({ _id: id })
        return res.status(200).json({ message: "delete success" })

    } catch (err) {
        return res.status(400).json({ message: "Not delet code promo" })
    }
})

const getOneAppartement = (async (req, res) => {
    const { id } = req.params
    try {
        const OneAppartement = await db.findById(id)
        console.log(OneAppartement)
        res.status(200).send(OneAppartement)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }

})

const getAllAppartemnet = (async (req, res) => {
    try {
        const allAppartement = await db.find()
        res.status(200).send(allAppartement)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = {
    craeteAppartement,
    updateAppartement,
    deleteAppartement,
    getOneAppartement,
    getAllAppartemnet
}