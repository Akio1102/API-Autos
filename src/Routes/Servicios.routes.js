import { Router } from "express";
import * as ServiciosController from "../Controllers/Servicios.js";

const ROUTER = Router();

export default ROUTER.get(
  "/Alquiler/:id",
  ServiciosController.GetAllIdAlquiler
).get("/Reservas-Pendientes", ServiciosController.GetAllReservasPendientes);
