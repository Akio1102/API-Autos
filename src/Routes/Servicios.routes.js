import { Router } from "express";
import * as ServiciosController from "../Controllers/Servicios.js";

const ROUTER = Router();

export default ROUTER.get("/", ServiciosController.GetAllServicios)
  .post("/New", ServiciosController.CreateOneServicio)
  .put("/Update", ServiciosController.UpdateOneServicio)
  .delete("/Delete", ServiciosController.DeleteOneServicio)
  .get(
    "/Alquileres-Disponibles",
    ServiciosController.GetAllAlquileresDisponibles
  )
  .get("/Alquileres-Activos", ServiciosController.GetAllAlquileresActivos)
  .get("/Alquiler/:id", ServiciosController.GetOneIdAlquiler)
  .get("/Reservas-Pendientes", ServiciosController.GetAllReservasPendientes)
  .get("/Alquiler-Costo/:id", ServiciosController.GetOneIdAlquilerCosto)
  .get("/Alquiler-Fecha/:date", ServiciosController.GetAllAlquilerFecha)
  .get(
    "/Reservas-Pendientes/:id",
    ServiciosController.GetAllIdReservasPendientes
  )
  .get("/Clientes-Alquiler", ServiciosController.GetAllClientesAlquiler)
  .get("/Alquileres", ServiciosController.GetAllAlquileres)
  .get("/Alquiler-Fechas", ServiciosController.GetAllAlquilerFechas);
