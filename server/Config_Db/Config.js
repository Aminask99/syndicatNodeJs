const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://aminasalik012:psBJZ5od196o9666@cluster0.oobt8es.mongodb.net/')
    .then(() => {
        console.log("Connect to Db")
    })
    .catch(((error) => {
        console.log(error)
    }))