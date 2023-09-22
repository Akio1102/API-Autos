import { Router } from "express";
import AUTOMOVILROUTES from "./Automovil.routes.js";
import PERSONASROUTES from "./Personas.routes.js";
import SERVICIOSROUTES from "./Servicios.routes.js";

const ROUTES = Router();

export default ROUTES.use("/Automovil", AUTOMOVILROUTES)
  .use("/Personas", PERSONASROUTES)
  .use("/Servicios", SERVICIOSROUTES);
