import express from "express";
import auth from "./auth";
import sales from "./sales";
import site from "./public";
import profile from "./profile";
import statistics from "./stats";
import * as utils from "../lib/utils";

const router = express.Router();

// Home & welcome route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Wrongmove API" });
});

// Unprotected routes
router.use("/public", site);
router.use("/auth", auth);

// Route protection
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

// Protected routes
router.use("/sales", sales);
router.use("/profile", profile);
router.use("/stats", statistics);

export default router;
