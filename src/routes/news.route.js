import { Router } from "express";
const NewsRoute = Router();

import {
  NewsCreate,
  NewsAll,
  NewsTop,
  NewsByID,
  NewsSearchByTitle,
  NewsByUser,
  NewsUpdate,
  NewsDelete,
  NewsLike,
  NewsComment,
  NewsCommentDelete,
} from "../controllers/news.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middlewares.js";

NewsRoute.post("/", AuthMiddleware, NewsCreate);
NewsRoute.get("/", NewsAll);
NewsRoute.get("/top", NewsTop);
NewsRoute.get("/search", NewsSearchByTitle);
NewsRoute.get("/user", AuthMiddleware, NewsByUser);
NewsRoute.get("/:id", AuthMiddleware, NewsByID);
NewsRoute.patch("/:id", AuthMiddleware, NewsUpdate);
NewsRoute.patch("/like/:id", AuthMiddleware, NewsLike);
NewsRoute.patch("/comment/:id", AuthMiddleware, NewsComment);
NewsRoute.patch("/comment/:idPost/:idComment", AuthMiddleware, NewsCommentDelete);
NewsRoute.delete("/:id", AuthMiddleware, NewsDelete);

export default NewsRoute;
