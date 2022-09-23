import express from "express";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes";

const app = express();

//Add middleware to Express App
app.use(helmet());
app.use(cors());

//Add routes to /api endpoint
app.use("/api", routes);

export default app;
