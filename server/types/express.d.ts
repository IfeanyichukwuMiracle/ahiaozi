import { Request } from "express";

interface User {
  id?: string;
  role?: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}
