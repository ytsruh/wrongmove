import express from "express";
import * as utils from "../lib/utils";
import { zod, SalesListingSchema } from "../lib/schema";
import { createStorage } from "../lib/storage";

const router = express.Router();
const prisma = utils.prisma;
const upload = createStorage("sales");

// Get multiple sales
router.get("/", async (req, res) => {
  try {
    const { body } = req;
    const token = await utils.decode(req.headers.token);
    const data = await prisma.salesListing.findMany({
      where: { agentId: token.data.id },
      include: { images: true },
    });
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
    const data = await prisma.salesListing.findMany({
      where: { id: params.id, agentId: token.data.id },
      include: { images: true },
    });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Create a new sales listing
router.post("/", upload.single("img"), async (req, res) => {
  try {
    const { body } = req;
    //Parse int incase data is sent in form format instead of json
    body.price = parseInt(body.price);
    body.bedrooms = parseInt(body.bedrooms);
    body.bathrooms = parseInt(body.bathrooms);
    const token = await utils.decode(req.headers.token);
    const listing = await SalesListingSchema.parse(body);
    // Save the new agent to database
    const data = await prisma.salesListing.create({ data: { ...listing, agentId: token.data.id } });
    // Check if file is available & create DB entry for image
    if (req.file) {
      // Create SalesImage DB entry with saleslisting ID
      const image = await prisma.salesImage.create({
        data: {
          file: req.file.key,
          salesListingId: data.id,
        },
      });
    }
    // Send response back
    res.status(200).json({ success: "Sales Listing Created", data });
  } catch (error) {
    if (error instanceof zod.ZodError) {
      res.status(500).json({ error: `${error.issues[0].message} on ${error.issues[0].path[0]} field` });
    } else if (error instanceof utils.Prisma.PrismaClientValidationError) {
      console.log(error);
      res.status(500).json({ error: "Please provide all required fields" });
    } else {
      // For errors, log to console and send a 500 response back
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

// Add image to a sales listing
router.post("/:id/image", upload.single("img"), async (req, res) => {
  try {
    const { body, params } = req;
    // Check if file is available & create DB entry for image
    if (req.file) {
      // Create SalesImage DB entry with saleslisting ID
      const image = await prisma.salesImage.create({
        data: {
          file: req.file.key,
          salesListingId: params.id,
        },
      });
      // Send response back
      res.status(200).json({ image });
    } else {
      throw new Error();
    }
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Delete a sales image
router.delete("/image/:id", async (req, res) => {
  try {
    const { body, params } = req;
    const data = await prisma.salesImage.deleteMany({ where: { id: params.id } });
    // Send response back
    res.status(200).json({ data });
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
    const listing = await SalesListingSchema.parse(body);
    const token = await utils.decode(req.headers.token);
    const data = await prisma.salesListing.updateMany({
      where: { id: params.id, agentId: token.data.id },
      data: listing,
    });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    if (error instanceof zod.ZodError) {
      res.status(500).json({ error: `${error.issues[0].message} on ${error.issues[0].path[0]} field` });
    } else {
      // For errors, log to console and send a 500 response back
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
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
