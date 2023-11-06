import express from "express";
const app = express();

import UserRoute from "./src/routes/user.route.js";

const porta = 3100

app.use(express.json())
app.use("/user", UserRoute)


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
