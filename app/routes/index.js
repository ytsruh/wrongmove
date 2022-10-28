import express from "express";
import auth from "./auth";
import * as utils from "../lib/utils";

const router = express.Router();

// Home & welcome route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Wrongmove API" });
});

// Unprotected Auth routes to register & login
router.use("/auth", auth);

//Route protection
router.use("*", async (req, res, next) => {
  try {
    const auth = await utils.checkAuth(req);
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

export default router;
