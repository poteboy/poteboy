import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors();

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export function withCors(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res, cors);
    req.headers["access-control-allow-origin"] = "*";
    req.headers["access-control-allow-headers"] =
      "Origin, X-Requested-With, Content-Type, Accept, Authorization";

    res.setHeader("access-control-allow-origin", "*");
    res.setHeader(
      "access-control-allow-headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("credentials", "include");

    return await handler(req, res);
  };
}
