import { Router } from "express";
const NewsRoute = Router();

import { NewsCreate, NewsAll} from "../controllers/news.controller.js"

NewsRoute.post("/", NewsCreate)
NewsRoute.get("/", NewsAll)


export default NewsRoute;
