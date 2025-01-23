import { Request } from "express";
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: { originalname: string },
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "uploads/");
  },
  filename: (
    req: Request,
    file: { originalname: string },
    cb: (err: Error | null, filename: string) => void
  ) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });
