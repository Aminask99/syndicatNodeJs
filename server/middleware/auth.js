const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = async (req, res, next) => {

  const token =
    req.cookies['access-token'] || req.headers["set-cookie"];

  if (token) {

    const validatoken = jwt.verify(token, config.TOKEN_KEY)
    if (validatoken) {

      res.admin.validatoken.id
      // next()
    } else {
      console.log('token expires')
    }
  } else {
    console.log('token not found')
  }

  return next();
};

module.exports = verifyToken;
