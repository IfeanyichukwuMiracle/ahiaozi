import { HttpStatusCodes as Stat } from "../config/http";

import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  return res.status(Stat.NotFound).json("Sorry, this route does not exist");
};

export default notFound;
