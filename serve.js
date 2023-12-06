import ConnectDataBase from "./src/database/banco.js"

import UserRoute from "./src/routes/user.route.js";
import AuthRoute from "./src/routes/auth.route.js"
import NewsRoute from "./src/routes/news.route.js";
import SwaggerRoute from "./src/routes/swagger.route.js";

import express from "express";
const app = express();

import cors from 'cors';
app.use(cors())

import dotenv from "dotenv"
dotenv.config()


const porta = process.env.PORT || 3100

ConnectDataBase()
app.use(express.json())
app.use("/user", UserRoute)
app.use("/auth", AuthRoute)
app.use("/news", NewsRoute)
app.use("/doc", SwaggerRoute)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
