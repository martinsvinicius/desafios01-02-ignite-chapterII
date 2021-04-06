import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerConfig from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

export { app };
