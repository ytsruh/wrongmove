import { z } from "zod";

export const zod = z;

export const AgentSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be 3 or more characters long" }).optional(),
    email: z.string().email({ message: "Invalid email address" }).optional(),
    password: z.string().min(5, { message: "Password must be 5 or more characters long" }).optional(),
    image: z.string().optional().nullish(),
    description: z.string().optional().nullish(),
    telephoneNumber: z.string().optional().nullish(),
    website: z.string().optional().nullish(),
  })
  .passthrough(); //passthrough to allow the file for the image

export const SalesListingSchema = z
  .object({
    address: z.string().nullish(),
    active: z.boolean().nullish(),
    price: z.number().nullish(),
    propertyType: z.string().nullish(),
    bedrooms: z.number().nullish(),
    bathrooms: z.number().nullish(),
    keyFeatures: z.string().optional().nullish(),
    description: z.string().optional().nullish(),
    mapCoordinates: z.string().optional().nullish(),
    images: z.string().array().optional().nullish(),
  })
  .passthrough();
