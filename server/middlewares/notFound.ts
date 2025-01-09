import { Request, Response, NextFunction } from "express";

const notFound = (req: Request, res: Response) => {
  return res.status(404).json("Sorry, this route does not exist");
};

export default notFound;
