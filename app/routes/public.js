import express from "express";
import * as utils from "../lib/utils";

const router = express.Router();
const prisma = utils.prisma;

// Get multiple sales listings
router.get("/sales", async (req, res) => {
  try {
    const data = await prisma.salesListing.findMany();
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get single sale listing
router.get("/sales/:id", async (req, res) => {
  try {
    const { params } = req;
    const data = await prisma.salesListing.findUnique({ where: { id: params.id } });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get all agents
router.get("/agents", async (req, res) => {
  try {
    const data = await prisma.agent.findMany();
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
