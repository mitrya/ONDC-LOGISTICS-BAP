const jwt = require("jsonwebtoken");

const JWT_SECRET = 'secRET';// require(process.env)
const User = require('../models/person');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userID = decoded.id;
    
        if (req.body.email) {
            const email = req.body.email
            saveduser =  await User.findOne({email:email})
            if(!saveduser || !saveduser.otp_verified || String(saveduser._id) !== String(userID) )
            {   
                throw 'Invalid user';
            }
        } 
        return next();
  } catch (err) {
        return res.status(401).send("Invalid Token");
  }
};

module.exports = verifyToken;
