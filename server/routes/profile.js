import express from "express";
import * as utils from "../lib/utils";
import { zod, AgentSchema } from "../lib/schema";
import { createStorage } from "../lib/storage";

const router = express.Router();
const prisma = utils.prisma;
const upload = createStorage("profiles");

// Get own profile
router.get("/", async (req, res) => {
  try {
    const token = await utils.decode(req.headers.token);
    const data = await prisma.agent.findUnique({ where: { id: token.data.id } });
    const profile = await utils.filterProfile(data);
    // Send response back
    res.status(200).json(profile);
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Update own profile
router.put("/", async (req, res) => {
  try {
    const token = await utils.decode(req.headers.token);
    const { body } = req;
    const agent = await AgentSchema.parse(body);
    const data = await prisma.agent.updateMany({
      where: { id: token.data.id },
      data: agent,
    });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Upload an image for a profile
router.post("/image", upload.single("img"), async (req, res) => {
  try {
    // Check if file is available & create DB entry for image
    if (req.file) {
      const token = await utils.decode(req.headers.token);
      // Update profile DB entry with image location
      const addImage = await prisma.agent.updateMany({
        where: { id: token.data.id },
        data: {
          image: req.file.key,
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

export default router;
