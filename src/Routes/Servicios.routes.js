import { Router } from "express";
import * as ServiciosController from "../Controllers/Servicios.js";

const ROUTER = Router();

export default ROUTER.get(
  "/Alquileres-Disponibles",
  ServiciosController.GetAllAlquileresDisponibles
)
  .get("/Alquileres-Activos", ServiciosController.GetAllAlquileresActivos)
  .get("/Alquiler/:id", ServiciosController.GetOneIdAlquiler)
  .get("/Reservas-Pendientes", ServiciosController.GetAllReservasPendientes)
  .get("/Alquiler-Costo/:id", ServiciosController.GetOneIdAlquilerCosto)
  .get(
    "/Reservas-Pendientes/:id",
    ServiciosController.GetAllIdReservasPendientes
  );