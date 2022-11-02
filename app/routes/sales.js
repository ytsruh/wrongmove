import express from "express";
import * as utils from "../lib/utils";

const router = express.Router();
const prisma = utils.prisma;

// Get multiple sales
router.get("/", async (req, res) => {
  try {
    const { body } = req;
    const token = await utils.decode(req.headers.token);
    const data = await prisma.salesListing.findMany({ where: { agentId: token.data.id } });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get single sale
router.get("/:id", async (req, res) => {
  try {
    const { body, params } = req;
    const token = await utils.decode(req.headers.token);
    const data = await prisma.salesListing.findMany({ where: { id: params.id, agentId: token.data.id } });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Create a new sales listing
router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const token = await utils.decode(req.headers.token);
    const listing = {
      agentId: token.data.id,
      address: body.address,
      price: parseInt(body.price),
      propertyType: body.propertyType,
      bedrooms: parseInt(body.bedrooms),
      bathrooms: parseInt(body.bathrooms),
      keyFeatures: body.keyFeatures,
      description: body.description,
      mapCoordinates: body.mapCoordinates,
    };
    // Save the new agent to database
    const data = await prisma.salesListing.create({ data: listing });
    // Send response back
    res.status(200).json({ success: "Sales Listing Created", data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Update a sales listing
router.put("/:id", async (req, res) => {
  try {
    const { body, params } = req;
    const token = await utils.decode(req.headers.token);
    const data = await prisma.salesListing.updateMany({
      where: { id: params.id, agentId: token.data.id },
      data: req.body,
    });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Delete a sales listing
router.delete("/:id", async (req, res) => {
  try {
    const { body, params } = req;
    const token = await utils.decode(req.headers.token);
    const data = await prisma.salesListing.deleteMany({ where: { id: params.id, agentId: token.data.id } });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
