import express from "express";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes";

const app = express();

//Add middleware to Express App
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "5mb" }));

//Add routes to /api endpoint
app.use("/api", routes);

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
