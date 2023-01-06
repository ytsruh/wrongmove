import jsonwebtoken from "jsonwebtoken";
import { PrismaClient, Prisma } from "@prisma/client";

// Fix for having too many DB connections in development.
// https://github.com/prisma/prisma/issues/5007#issuecomment-618433162
// https://github.com/prisma/prisma/issues/5103
// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
let db;
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  db = global.prisma;
}

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
  avgPrice: async (array) => {
    const length = array.length;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      total += element.price;
    }
    return Math.round(total / length);
  },
  filterAgent: async (agent) => {
    delete agent.password;
    return agent;
  },
  getSalesChartData: async (data) => {
    const filtered = {
      detached: 0,
      semi: 0,
      terrace: 0,
      other: 0,
    };
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const propertyType = element.propertyType.toLowerCase();
      if (propertyType.includes("semi")) {
        filtered.semi++;
      } else if (propertyType.includes("detached")) {
        filtered.detached++;
      } else if (propertyType.includes("terrace")) {
        filtered.terrace++;
      } else {
        filtered.other++;
      }
    }
    return filtered;
  },
  getRentalsChartData: async (data) => {
    const filtered = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      "5+": 0,
    };
    for (let i = 0; i < data.length; i++) {
      const bedrooms = data[i].bedrooms.toString();
      filtered[bedrooms]++;
    }
    return filtered;
  },
};
