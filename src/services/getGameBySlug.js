import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getGameBySlug = async(gameSlug) => {
  return prisma.game.findUnique({
    where: {
      slug: gameSlug
    },
    include: {
      company: {
        select: { name: true }
      },
      genres: {
        select: {
          Genre: {
            select: { genre: true }
          }
        }
      },
      comments: {
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      },
      userScore: {
        select: {
          markOne: true,
          markTwo: true,
          markThree: true,
          markFour: true,
          markFive: true
        }
      },
      requirements: true
    }
  });
}

export default getGameBySlug;