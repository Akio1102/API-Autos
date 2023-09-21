import { Router } from "express";
import * as PersonasController from "../Controllers/Personas.js";

const ROUTER = Router();

export default ROUTER.get("/Clientes", PersonasController.GetAllClientes)
  .get("/Vendedores", PersonasController.GetAllVendedores)
  .get("/Clientes/:dni", PersonasController.GetAllClientesDNI);
