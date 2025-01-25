// import { Router } from "express";
// import registerController from "./controller/register.js";
// import loginController from "./controller/login.js";
// import getUserController from "./controller/getUser.js";
// import authentication from "../../helper/tokenHandler.js";
// import logoutController from "./controller/logout.js";

const Router = require("express").Router;
const registerController = require("./controller/register.js");
const loginController = require("./controller/login.js");
const getUserController = require("./controller/getUser.js");
const authentication = require("../../helper/tokenHandle.js");
const logoutController = require("./controller/logout.js");

const router = Router();

router.post("/signup", registerController);
router.post("/signin", loginController);
router.post("/logout", authentication, logoutController);
router.get("/getinfo", authentication, getUserController);

// export default router;
module.exports = router;