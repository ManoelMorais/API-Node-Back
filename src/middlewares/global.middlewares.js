import mongoose from "mongoose";
import userService from "../services/user.service.js";

const validID = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    req.id = id

    next()
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.findIDService(id)

    if (!user) {
        return res.status(400).send({ message: "User not found" });
      }

      req.id = id
      req.user = user

      next()
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

export { validID, validUser };
