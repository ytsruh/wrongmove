import jsonwebtoken from "jsonwebtoken";
import { PrismaClient, Prisma } from "@prisma/client";
const db = new PrismaClient();

module.exports = {
  prisma: db,
  Prisma: Prisma,
  checkAuth: async (req) => {
    try {
      const token = req.headers.token;
      if (!token) {
        return false;
      }
      //Check token is a valid user
      const decoded = jsonwebtoken.verify(token, process.env.JWTSECRET);
      if (decoded) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  decode: async (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWTSECRET);
    return decoded;
  },
  filterProfile: async (profile) => {
    delete profile.email;
    delete profile.password;
    return profile;
  },
};
