const express = require("express")
const app = express()
const  dotenv = require('dotenv');
const config = require('./Config_Db/Config')
const routerAppartement = require("./Routes/AppartementRouter")
const routerPaiement = require("./Routes/PaiementRouters")
const routerProfil = require("./Routes/profil")
const Auth = require("./Routes/AuthRouter")
const roleModal = require("./Models/role")
const cookiepaeser= require("cookie-parser")
const ApiError = require("./Utils/apiError")
const cors = require('cors');
const auth = require("./middleware/auth");

dotenv.config();
app.use(express.json())
app.use(cookiepaeser()) 
app.use(express.urlencoded({extended:false}))
app.use(cors()); 
  
 //*routes middleware
app.use('/api', routerProfil);
app.use('/api', routerAppartement);
app.use('/api', routerPaiement );
app.use('/api', Auth );



app.all('*',(req,res,next) => {
    next(new ApiError(`can't find this route: ${req.originalUrl}`,400))
});

// * handling middleware
app.use((err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.status=err.status || "error"

    res.status( err.statusCode).json({ 
        status:err.status,
        error:err,
        message:err.message,
        stack:err.stack,
     });
    });

const PORT = process.env.PORT || 8000

app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})
module.exports=app;