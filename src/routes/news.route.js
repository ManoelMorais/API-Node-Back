import { Router } from "express";
const NewsRoute = Router();

import { NewsCreate, NewsAll} from "../controllers/news.controller.js"
import { AuthMiddleware } from "../middlewares/auth.middlewares.js"

NewsRoute.post("/", AuthMiddleware, NewsCreate)
NewsRoute.get("/", NewsAll)


export default NewsRoute;
