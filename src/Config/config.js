import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

export const ENVPORT = {
  PORT: process.env.PORT256,
};

export const MONGODB = {
  URL: process.env.DB256,
};

export const PRIVATE_KEY = {
  JWTPSS: process.env.JWT_PRIVATE_KEY,
};

export const Global = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cookieParser());
};
