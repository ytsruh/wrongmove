const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const args = process.argv;
const totalListings = args[2] ? args[2] : 0;
const agentId = "clci2hnad0001s8hirelxtnva";

const genUKPostcode = () => {
  const a = faker.random.alpha().toUpperCase();
  const b = faker.random.alpha().toUpperCase();
  const c = faker.random.numeric();
  const d = faker.random.numeric();
  const e = faker.random.alpha().toUpperCase();
  const f = faker.random.alpha().toUpperCase();

  return `${a}${b}${c} ${d}${e}${f}`;
};

const genPropertyType = () => {
  const propertyTypes = ["Detached", "Semi Detached", "Terrace", "Apartment", "Other"];
  return propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
};

const createFakeSales = async (totalListings) => {
  try {
    //Create fake listings
    const fakeListings = [];
    for (let i = 0; i < totalListings; i++) {
      const listing = {
        agentId: agentId,
        address: `${faker.address.buildingNumber()} ${faker.address.street()}, ${faker.address.city()}, ${faker.address.state()}, ${genUKPostcode()}`,
        propertyType: genPropertyType(),
        price: parseInt(faker.commerce.price(60000, 750000, 0)),
        bedrooms: parseInt(faker.datatype.number(4, 1)),
        bathrooms: parseInt(faker.datatype.number(4, 1)),
        keyFeatures: faker.lorem.sentence(),
        description: faker.lorem.paragraphs(),
      };
      fakeListings.push(listing);
    }
    //Add to database
    const createdSales = await prisma.salesListing.createMany({
      data: fakeListings,
    });
    console.log(createdSales);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

const createFakeRentals = async (totalListings) => {
  try {
    //Create fake listings
    const fakeListings = [];
    for (let i = 0; i < totalListings; i++) {
      const listing = {
        agentId: agentId,
        address: `${faker.address.buildingNumber()} ${faker.address.street()}, ${faker.address.city()}, ${faker.address.state()}, ${genUKPostcode()}`,
        propertyType: genPropertyType(),
        price: parseInt(faker.commerce.price(500, 2000, 0)),
        bedrooms: parseInt(faker.datatype.number(4, 1)),
        bathrooms: parseInt(faker.datatype.number(4, 1)),
        keyFeatures: faker.lorem.sentence(),
        description: faker.lorem.paragraphs(),
      };
      fakeListings.push(listing);
    }
    //Add to database
    const createdRentals = await prisma.rentalListing.createMany({
      data: fakeListings,
    });
    console.log(createdRentals);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

/*
  Run Script
*/

if (totalListings > 0 && totalListings <= 10) {
  createFakeSales(totalListings);
  createFakeRentals(totalListings);
} else if (totalListings > 10) {
  console.error("Error: Cannot create more than 10 at one time");
} else {
  console.error("Error: No Listings created as no arguments passed");
}
