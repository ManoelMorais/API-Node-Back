import Router from "express";
const UserRoute = Router();

import UserController from "../controllers/user.controller.js";
import { validID, validUser } from "../middlewares/global.middlewares.js"

UserRoute.post("/create", UserController.UserCreate);
UserRoute.get("/", UserController.UserAll);
UserRoute.get("/:id", validID, validUser, UserController.UserID);
UserRoute.patch("/:id", validID, validUser, UserController.UserUpdate);

export default UserRoute;
