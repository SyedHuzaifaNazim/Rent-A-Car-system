// import { Router } from "express";
// import authRoutes from "../modules/auth/routes.js";
// import carRoutes from "../modules/car/routes.js";

const Router = require("express").Router;
const authRoutes = require("../modules/auth/routes");
const carRoutes = require("../modules/car/routes");

const router = Router();

router.use("/auth", authRoutes);
router.use("/car", carRoutes);

module.exports = router;