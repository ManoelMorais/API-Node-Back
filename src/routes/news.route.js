import { Router } from "express";
const NewsRoute = Router();

import { NewsCreate, NewsAll, NewsTop, NewsByID} from "../controllers/news.controller.js"
import { AuthMiddleware } from "../middlewares/auth.middlewares.js"

NewsRoute.post("/", AuthMiddleware, NewsCreate)
NewsRoute.get("/", NewsAll)
NewsRoute.get("/top", NewsTop)
NewsRoute.get("/:id", NewsByID)


export default NewsRoute;
