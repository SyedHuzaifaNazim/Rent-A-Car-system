// import { Router } from "express";
// import carAddController from "./controller/addCar.js";
// import getCarController from "./controller/getCar.js";
// import getAllCarsController from "./controller/getAllCars.js";
// import requestCarController from "./controller/requestCar.js";
// import deleteCarController from "./controller/deleteCar.js";
// import approveReqController from "./controller/approveReq.js";
// import authentication from "../../helper/tokenHandle.js";

const { Router } = require("express");
const carAddController = require("./controller/addCar.js");
const getCarController = require("./controller/getCar.js");
const getAllCarsController = require("./controller/getAllCars.js");
const requestCarController = require("./controller/requestCar.js");
const deleteCarController = require("./controller/deleteCar.js");
const approveReqController = require("./controller/approveReq.js");
const authentication = require("../../helper/tokenHandle.js");

const router = Router();

router.post("/addcar", authentication, carAddController);
router.get("/getcar", authentication, getCarController);
router.get("/getallcars", authentication, getAllCarsController);
router.patch("/requestcar", authentication, requestCarController);
router.post("/deletecar", authentication, deleteCarController);
router.patch("/approvecarreq", authentication, approveReqController);

// export default router;
module.exports = router;