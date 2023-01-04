const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

const salt = bcrypt.genSaltSync();
const encryptedPassword = bcrypt.hashSync("password", salt);

async function main() {
  const addAgents = await prisma.agent.createMany({
    data: [
      { name: "Agent Alpha", email: "alpha@gmail.com", password: encryptedPassword },
      { name: "Special Agent", email: "jamesbond@gmail.com", password: encryptedPassword },
    ],
  });

  console.log({ addAgents });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
