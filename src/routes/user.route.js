import Router from "express";
const UserRoute = Router();

import UserController from "../controllers/user.controller.js";

UserRoute.post("/create", UserController.UserCreate);
UserRoute.get("/", UserController.UserAll);
UserRoute.get("/:id", UserController.UserID);
UserRoute.patch("/:id", UserController.UserUpdate);

export default UserRoute;
