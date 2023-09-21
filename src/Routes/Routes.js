import { Router } from "express";
import PERSONASROUTES from "./Personas.routes.js";
import SERVICIOSROUTES from "./Servicios.routes.js";

const ROUTES = Router();

export default ROUTES.use("/Personas", PERSONASROUTES).use(
  "/Servicios",
  SERVICIOSROUTES
);
