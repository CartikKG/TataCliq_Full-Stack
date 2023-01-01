const express = require("express");
const Users = require("../controlers/userControlers");
const authorization = require("../Middleware/authorization");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await Users.getAllUser();
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
route.post("/register", async (req, res) => {
  let body = req.body;
  try {
    const data = await Users.registeredNewUser(body);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
route.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const data = await Users.deleteUserByID(id);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
route.patch("/:id", authorization, async (req, res) => {
  let id = req.params.id;
  let dataa = req.body;
  let users = req.user;
  try {
    const data = await Users.patchUserByID(id, dataa, users);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
route.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const data = await Users.getUserByID(id);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
route.get("/login/loggedInUser", authorization, (req, res) => {
  return res.send({
    data: req.user,
  });
});

route.post("/login", async (req, res) => {
  let bodys = req.body;
  try {
    const data = await Users.loginUser(bodys);
    return res.status(200).send({ data });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

route.get("/github-login/:code", async (req, res) => {});
route.get("/lg/google-login", async (req, res) => {});
route.get("/auth/google/", async (req, res) => {});

module.exports = route;
