import express from "express";
import auth from "./auth";
import * as utils from "../../lib/utils";

const router = express.Router();

router.use("/auth", auth);

router.use("/protected", async (req, res, next) => {
  try {
    const auth = await utils.checkAuth(req);
    const data = await utils.decode(req.headers.token);
    if (auth) {
      next();
    } else {
      throw Error;
    }
  } catch (error) {
    res.status(401).json({ error: "Unathorised: Invalid token or incorrect credentials" });
  }
});

router.get("/protected", async (req, res) => {
  res.status(200).json({ message: "This is a protected route" });
});

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Wrongmove API" });
});

export default router;
