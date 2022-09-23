import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Wrongmove API" });
});

router.get("/:path", (req, res) => {
  const { path } = req;
  res.json({ message: `${path} endpoint` });
});

export default router;
