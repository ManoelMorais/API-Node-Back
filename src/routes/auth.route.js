import { Router } from "express";
const AuthRoute = Router();

import { Login } from "../controllers/auth.controller.js";

AuthRoute.post("/login", Login);

export default AuthRoute;
