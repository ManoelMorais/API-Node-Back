import express from "express";
const app = express();

import UserRoute from "./src/routes/user.route.js";

app.use("/soma", UserRoute)


app.listen(3100);
