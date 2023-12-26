const db = require("../Models/paiement")


const creationPaiement = (req, res) => {
    let Paiement = new db({
        Name_Client: req.body.Name_Client,
        date_facteur: req.body.date_facteur,
        date_payment: req.body.date_payment,
        Recidance: req.body.Recidance,
        prix: req.body.prix,
    })
    Paiement.save()
        .then(Paiement => {
            return res.status(200).json({
                message: 'factor Creat '
            });
        })

        .catch(error => {
            return res.status(400).json({
                message: "error not creat paiement"
            })
        })
}

const updatePaiement = (async (req, res) => {

    const { Name_Client, date_facteur, date_payment, Recidance, prix } = req.body
    const id = req.params.id;

    try {
        const updatePaiements = await db.findOne({ where: { id: id } })

        if (updatePaiements) {
            updatePaiements.Name_Client = Name_Client
            updatePaiements.date_facteur = date_facteur
            updatePaiements.date_payment = date_payment
            updatePaiements.Recidance = Recidance
            updatePaiements.prix = prix

            updatePaiements.save()

            res.status(200).send('update success')
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
const deletePaiment = (async (req, res) => {
    const id = req.params.id;
    try {
        await db.deleteOne({ _id: id })
        return res.status(200).json({ message: "delete success" })

    } catch (err) {
        return res.status(400).json({ message: "Not delet factor" })
    }
})

const getAllPaiements = (async (req, res) => {
    try {
        const allPaiement = await db.find()
        res.status(200).send(allPaiement)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = {
    creationPaiement,
    updatePaiement,
    deletePaiment,
    getAllPaiements
}