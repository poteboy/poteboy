import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

const prisma: PrismaClient | null = (() => {
  if (typeof window !== "undefined") return global.prisma;
  if (process.env.NODE_ENV === "production") return new PrismaClient();
  else {
    if (!global.prisma) global.prisma = new PrismaClient();
    return global.prisma;
  }
})();

export default prisma;
