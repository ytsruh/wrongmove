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
    res.status(200).json({
      sales: {
        label: "",
        data: salesChartData,
      },
      rentals: {
        label: "Data is coming soon",
        data: [],
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
    // Send response back
    res.status(200).json({
      sales: {
        count: sales.length,
        avgPrice: await utils.avgPrice(sales),
      },
      rentals: { count: 0, avgPrice: 0 },
    });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
