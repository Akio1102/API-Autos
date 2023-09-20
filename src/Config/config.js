import "dotenv/config";
import express from "express";
import morgan from "morgan";

export const ENVPORT = {
  PORT: process.env.PORT256,
};

export const MONGODB = {
  URL: process.env.DB256,
};

export const Global = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
};
