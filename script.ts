import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query"] });
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Nirmal Kumar",
        email: "nirmal@gmail.com",
        age: 26,
        dob: new Date("1996-04-26"),
      },
      {
        name: "Manoj Kumar",
        email: "manoj@gmail.com",
        age: 26,
        dob: new Date("1996-08-26"),
      },
      {
        name: "Sanjay",
        email: "sanjay@gmail.com",
        age: 23,
        dob: new Date("1998-08-26"),
      },
      {
        name: "Ruban",
        email: "ruban@gmail.com",
        age: 23,
        dob: new Date("1999-08-26"),
      },
    ],
    // Only one can be user either include or select

    // include: {
    //   userPreference: true,
    // },

    // select: {
    //   name: true,
    //   userPreference: { select: { id: true } },
    // },
  });

  console.log(users);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function main() {
//   await prisma.user.deleteMany();
//   const user = await prisma.user.findUnique({
//     where: {
//       name_age: {
//         name: "Nirmal Kumar",
//         age: 26,
//       },
//     },
//   });

//   console.log(user);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function main() {
//   await prisma.user.deleteMany();
//   const user = await prisma.user.findMany({
//     where: {
//       // name: { equals: "Nirmal Kumar" },
//       // name: { not: "Nirmal Kumar" },
//       // name: { notIn: "Nirmal Kumar" },
//       // name: { in: ["Nirmal Kumar", "Manoj"] },
//       // age: {lt: 26}
//       // email: {contains: "@gmail.com"}
//       writtenPosts: {
//         some: {
//           title: {startsWith: "Test"},
//         }
//       }
//     },
//     // distinct: ["name", "age"],
//     // orderBy: {
//     //   age: "asc"
//     // },
//     // take: 2,
//     // skip: 1,
//   });

//   console.log(user.length);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function main() {
//   const user = await prisma.user.update({
//     where: {
//       email: "nirmal@yavar.in",
//     },
//     data: {
//       email: "manoj@yavar.in",
//     },
//   });

//   console.log(user);
// }

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
