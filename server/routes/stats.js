import express from "express";
import * as utils from "../lib/utils";

const router = express.Router();
const prisma = utils.prisma;

//Get agent stats
router.get("/", async (req, res) => {
  try {
    const token = await utils.decode(req.headers.token);
    const sales = await prisma.salesListing.findMany({
      where: { agentId: token.data.id },
    });
    const salesChartData = await utils.getSalesChartData(sales);
    /*
        TODO: Get rental pie chart: Count of number of bedrooms
    */
    const rentals = await prisma.rentalListing.findMany({
      where: { agentId: token.data.id },
    });
    const rentalChartData = await utils.getRentalsChartData(rentals);
    res.status(200).json({
      sales: {
        label: "Sales by Property Type",
        data: salesChartData,
      },
      rentals: {
        label: "Rentals by number of Bedrooms",
        data: rentalChartData,
      },
    });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get dashboard stats
router.get("/dashboard", async (req, res) => {
  try {
    const token = await utils.decode(req.headers.token);
    const sales = await prisma.salesListing.findMany({
      where: { agentId: token.data.id },
    });
    const rentals = await prisma.rentalListing.findMany({
      where: { agentId: token.data.id },
    });
    // Send response back
    res.status(200).json({
      sales: {
        count: sales.length,
        avgPrice: await utils.avgPrice(sales),
      },
      rentals: {
        count: rentals.length,
        avgPrice: await utils.avgPrice(rentals),
      },
    });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
