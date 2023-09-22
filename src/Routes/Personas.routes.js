import { Router } from "express";
import * as PersonasController from "../Controllers/Personas.js";

const ROUTER = Router();

export default ROUTER.get("/", PersonasController.GetAllPersonas)
  .post("/new", PersonasController.CreateOnePersona)
  .get("/Clientes", PersonasController.GetAllClientes)
  .get("/Vendedores", PersonasController.GetAllVendedores)
  .get("/Clientes/:dni", PersonasController.GetAllClientesDNI)
  .get("/Gerente-Asistente", PersonasController.GetAllGerenteAsistente)
  .post("/Login", PersonasController.Login);
