// import getAllCarsData from "../db/getAllCars.js";
const getAllCarsData = require("../db/getAllCars.js");

const getAllCarsService = async () => {
  return await getAllCarsData();
};

// export default getAllCarsService;
module.exports = getAllCarsService;