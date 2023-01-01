const User = require("../models/users.model");
const bscryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const axios = require("axios");
function generateToken(user) {
  if (user.password) {
    delete user.password;
  }
  return jwt.sign(user, config.JWT_SECRET_KEY);
}

const getAllUser = () => {
  return User.find();
};
const getUserByID = (id) => {
  return User.findById(id);
};
const deleteUserByID = (id) => {
  return User.findOneAndDelete(id);
};
const patchUserByID = async (id, dataa, users) => {
  let user = await User.find({ id });
  if (user) {
    return User.findByIdAndUpdate(id, patch, { new: true });
  } else {
    return "User Not Found";
  }
};
const registeredNewUser = async ({ name, email, password, avatar }) => {
  const exitisUser = await User.findOne({ email });
  console.log(email);
  if (exitisUser) {
    return " Users Alrady exists with the given email";
  }
  password = bscryptjs.hashSync(password);

  let user = await User.create({
    name,
    email,
    password,
    avatar,
    authType: "email-password",
  });
  user = user.toJSON();
  delete user.password;
  return user;
};
const loginUser = async ({ email, password }) => {
  const exist = await User.findOne({
    email,
    authType: "email-password",
  }).select("name email password");
  console.log(exist);
  if (!exist) {
    return " User Not Found with this email";
  }
  const match = bscryptjs.compareSync(password, exist.password);

  if (match) {
    console.log("sd");
    const token = generateToken(exist.toJSON());
    return token;
  } else {
    return "password is incorrect";
  }
};
const githubSigninloginUser = async (code) => {};

module.exports = {
  getAllUser,
  getUserByID,
  deleteUserByID,
  patchUserByID,
  registeredNewUser,
  loginUser,
  githubSigninloginUser,
};
