import express from "express";
import * as utils from "../lib/utils";

const router = express.Router();
const prisma = utils.prisma;

const queryBuilder = async (queries) => {
  const query = {
    AND: [
      {
        price: {
          gte: queries.minprice ? parseInt(queries.minprice) : 0,
          lte: queries.maxprice ? parseInt(queries.maxprice) : 500000000,
        },
      },
    ],
  };
  // If bedrooms is included
  if (queries.bedrooms) {
    query.AND.push({
      bedrooms: {
        gte: parseInt(queries.bedrooms),
      },
    });
  }

  // If propertyType is included
  if (queries.propertytype) {
    query.AND.push({
      propertyType: {
        contains: queries.propertytype,
        mode: "insensitive", // Ignores case sensitivity
      },
    });
  }

  // Return the query
  return query;
};

// Get multiple sales listings
router.get("/sales", async (req, res) => {
  const query = await queryBuilder(req.query);
  try {
    const data = await prisma.salesListing.findMany({
      where: query,
      include: {
        images: true,
        agent: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
            website: true,
            description: true,
            telephoneNumber: true,
          },
        },
      },
    });
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
    const data = await prisma.salesListing.findUnique({
      where: { id: params.id },
      include: {
        images: true,
        agent: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
            website: true,
            description: true,
            telephoneNumber: true,
          },
        },
      },
    });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get multiple rental listings
router.get("/rentals", async (req, res) => {
  const query = await queryBuilder(req.query);
  try {
    const data = await prisma.rentalListing.findMany({
      where: query,
      include: {
        images: true,
        agent: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
            website: true,
            description: true,
            telephoneNumber: true,
          },
        },
      },
    });
    // Send response back
    res.status(200).json({ data });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get single rental listing
router.get("/rentals/:id", async (req, res) => {
  try {
    const { params } = req;
    const data = await prisma.rentalListing.findUnique({
      where: { id: params.id },
      include: {
        images: true,
        agent: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
            website: true,
            description: true,
            telephoneNumber: true,
          },
        },
      },
    });
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
    const agents = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const agent = await utils.filterAgent(element);
      agents.push(agent);
    }
    // Send response back
    res.status(200).json({ data: agents });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
