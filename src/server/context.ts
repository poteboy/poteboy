import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@src/utils";

export const createContext = ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => ({ req, res, prisma });

export type Context = ReturnType<typeof createContext>;
