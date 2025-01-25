// import deleteCarData from "../db/deleteCar.js";
const deleteCarData = require("../db/deleteCar.js");

const deleteCarService = async (data) => {
  return await deleteCarData(data);
};

// export default deleteCarService;
module.exports = deleteCarService;