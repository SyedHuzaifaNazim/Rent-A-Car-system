// import getCarService from "../services/getCar.js";
const getCarService = require("../services/getCar.js");

const getCarController = async (req, res) => {
  try {
    const carData = await getCarService(req.query.id);
    res.send(carData);
  } catch (err) {
    console.log(err);
  }
};

// export default getCarController;
module.exports = getCarController;