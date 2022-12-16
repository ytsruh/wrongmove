const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

const salt = bcrypt.genSaltSync();
const encryptedPassword = bcrypt.hashSync("password", salt);

async function main() {
  const addUsers = await prisma.user.createMany({
    data: [
      { name: "Chris", email: "chris@gmail.com", password: encryptedPassword },
      { name: "Ryan", email: "ryan@gmail.com", password: encryptedPassword },
    ],
  });

  const addAgents = await prisma.agent.createMany({
    data: [
      { name: "Agent Alpha", email: "alpha@gmail.com", password: encryptedPassword },
      { name: "Special Agent", email: "jamesbond@gmail.com", password: encryptedPassword },
    ],
  });

  console.log({ addUsers, addAgents });
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
