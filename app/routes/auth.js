import express from "express";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import * as utils from "../../lib/utils";

const router = express.Router();
const prisma = utils.prisma;

router.post("/agent/register", async (req, res) => {
  try {
    const { body } = req;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    const agent = {
      name: body.name,
      email: body.email,
      password: hashedPassword,
      telephoneNumber: body.telephoneNumber,
    };
    const createAgent = await prisma.agent.create({ data: agent });
    res.status(200).json({ success: "Agent Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/agent/login", async (req, res) => {
  try {
    const { body } = req;
    const agent = await prisma.agent.findUnique({
      where: {
        email: body.email,
      },
    });
    const match = await bcrypt.compare(body.password, agent.password);
    //Send response based on result
    if (match) {
      const expiry = Math.floor(Date.now() / 1000) + 60 * 60 * 24; //Expires in 24 hours
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
      res.status(200).json({ token, expiry });
    } else {
      res.status(401).json({ error: "Unathorised: Wrong username or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

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
