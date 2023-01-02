const router = require("express").Router();
const User=require('../models/users.model')
const passport = require("passport");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
function generateToken(user) {
  if (user.password) {
    delete user.password;
  }
  return jwt.sign(user, config.JWT_SECRET_KEY);
}

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success",async (req, res) => {
  if (req.user) {
   
    let name=req.user.displayName;
    let email=req.user.emails[0].value;
    let avatar=req.user.photos[0].value;
    console.log(name,email,avatar);
    let exitisUser = await User.findOne({ email });
    if (exitisUser) {
       exitisUser=exitisUser.toJSON();
       let token= generateToken(exitisUser);
       res.send({
        token:token
       });
    }else{
       let user = await User.create({
         name,
         email,
         avatar,
         authType: "google",
       });
       user = user.toJSON();
       let token= generateToken(user);
       res.send({
        token:token
       });
        
    }
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ['email', 'profile'] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router