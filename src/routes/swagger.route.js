import { Router } from "express";
const routerSwagger = Router();

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json"}

routerSwagger.use("/", swaggerUi.serve);
routerSwagger.get("/", swaggerUi.setup(swaggerDocument));

export default routerSwagger;
