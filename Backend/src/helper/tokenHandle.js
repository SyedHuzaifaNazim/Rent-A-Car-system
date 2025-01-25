// import jwt from "jsonwebtoken";
// import "dotenv/config";

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    // return res.status(401).json({ message: "Token missing" });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user;
    console.log(user);
    next();
  });
};

// export default authentication;
module.exports = authentication;