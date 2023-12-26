const db = require("../Models/profil")

const getAllProfil = (async (req, res) => {
    try {
        const allProfill = await db.find()
        res.status(200).send(allProfill)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports = {
    getAllProfil
}