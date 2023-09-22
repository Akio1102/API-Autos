import { Router } from "express";
import * as AutomovilController from "../Controllers/Automovil.js";

const ROUTER = Router();

export default ROUTER.get("/Capacidad5", AutomovilController.GetAllAutomovil5)
  .get("/Sort", AutomovilController.GetAllAutomovil)
  .get(
    "/Capacidad5-Disponibles",
    AutomovilController.GetAllAutomovilCapacidad5Disponibles
  );
