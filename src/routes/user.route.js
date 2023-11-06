import Router from "express";
const UserRoute = Router();

import UserController from "../controllers/user.controller.js"

UserRoute.get("/", UserController.soma)

export default UserRoute

