import express from "express";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import * as utils from "../lib/utils";

const router = express.Router();
const prisma = utils.prisma;

// Register a new agent
router.post("/agent/register", async (req, res) => {
  try {
    const { body } = req;
    // Create an encrypted password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    // Create an agent from request body
    const agent = {
      name: body.name,
      email: body.email,
      password: hashedPassword,
      telephoneNumber: body.telephoneNumber,
    };
    // Save the new agent to database
    const createAgent = await prisma.agent.create({ data: agent });
    // Send response back
    res.status(200).json({ success: "Agent Created" });
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Login and get token for agent
router.post("/agent/login", async (req, res) => {
  try {
    const { body } = req;
    // Look up a unique agent in the database based on the email field sumitted in the body
    const agent = await prisma.agent.findUnique({
      where: {
        email: body.email,
      },
    });
    //Compare the password with the encrypted one
    const match = await bcrypt.compare(body.password, agent.password);
    //Send response based on result
    if (match) {
      const expiry = Math.floor(Date.now() / 1000) + 60 * 60 * 24; //Expires in 24 hours
      // Create a JSONWebToken with the minimal amout of data
      const token = jsonwebtoken.sign(
        {
          data: {
            id: agent.id,
            email: agent.email,
            type: "agent",
          },
          exp: expiry,
        },
        process.env.JWTSECRET
      );
      // Send response back
      res.status(200).json({ token, expiry });
    } else {
      // If password does not match send 401 error back
      res.status(401).json({ error: "Unathorised: Wrong username or password" });
    }
  } catch (error) {
    // For errors, log to console and send a 500 response back
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { body } = req;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    const user = {
      email: body.email,
      password: hashedPassword,
    };
    const createUser = await prisma.user.create({ data: user });
    res.status(200).json({ success: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Login and get token for user
router.post("/login", async (req, res) => {
  try {
    const { body } = req;
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    const match = await bcrypt.compare(body.password, user.password);
    if (match) {
      const expiry = Math.floor(Date.now() / 1000) + 60 * 60 * 24; //Expires in 24 hours
      const token = jsonwebtoken.sign(
        {
          data: {
            id: user.id,
            email: user.email,
            type: "user",
          },
          exp: expiry,
        },
        process.env.JWTSECRET
      );
      res.status(200).json({ token, expiry });
    } else {
      res.status(401).json({ error: "Unathorised: Wrong username or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
