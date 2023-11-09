import ConnectDataBase from "./src/database/banco.js"

import UserRoute from "./src/routes/user.route.js";
import AuthRoute from "./src/routes/auth.route.js"

import dotenv from "dotenv"
dotenv.config()

import express from "express";
const app = express();


const porta = process.env.PORT || 3100

ConnectDataBase()
app.use(express.json())
app.use("/user", UserRoute)
app.use("/auth", AuthRoute)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
