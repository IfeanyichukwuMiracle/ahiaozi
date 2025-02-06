require("dotenv").config();

import { Request } from "express";

const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const storage = multer.diskStorage({
  // destination: (
  //   req: Request,
  //   file: { originalname: string },
  //   cb: (error: Error | null, destination: string) => void
  // ) => {
  //   cb(null, "uploads/");
  // },
  filename: (
    req: Request,
    file: { originalname: string },
    cb: (err: Error | null, filename: string) => void
  ) => {
    cb(
      null,
      `${Date.now()}-${file.originalname.replace(/[\s\(\)\.com]/g, "_")}`
    );
  },
});

const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { upload, cloudinary };
