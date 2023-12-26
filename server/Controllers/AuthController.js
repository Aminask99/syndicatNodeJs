const db = require("../Models/AuthModl")
const bcrypt = require("bcryptjs")
const Role = require("../Models/role")


const Register = (req, res ) => {
   
    
    bcrypt.hash(req.body.Password, 10,  function (err, hashedPass) { //hash Pass   index type

        if (err) {

            return res.send({
                error: err
            })
        }
        let role = req.body.role ;

        let { _id } =  Role.findOne({ role})
        let admin =  new db ({
            UserName: req.body.UserName,
            Password: hashedPass,
            role: _id
           
        })
        admin.save()
        if (admin){
            return  res.status(200).json({
                message: 'User Creat '
            });
        }else{
            return  res.status(400).json({
                        message: "error not creat user"
                    })
        }
    })
};


const Login =async (req, res) => {

    try {
        res.cookie('access-token', cookie) //access cookie
        const user = await db.findOne({ UserName: req.body.UserName }).populate("role")
        console.log(user);
        if (user) {
          const cmp =  bcrypt.compare(req.body.Password, user.Password);
          if (cmp) {
            
            const token = user.generateAuthTokenAndSaveUser();
            return res.status(200).json({
                      user,
                      token         
            })
          } else {
            
            return res.status(400).json({
             message: 'Password is not matched '
                 });
          }
        } else {
        
            return res.status(400).json({
               message: 'Wrong username or password.'
             });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
      }
}   

module.exports = {
    Login,
    Register
} 