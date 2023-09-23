import { Router } from "express";
import * as PersonasController from "../Controllers/Personas.js";

const ROUTER = Router();

export default ROUTER.get("/", PersonasController.GetAllPersonas)
  .post("/New", PersonasController.CreateOnePersona)
  .put("/Update", PersonasController.UpdateOnePersona)
  .delete("/Delete", PersonasController.DeleteOnePersona)
  .get("/Clientes", PersonasController.GetAllClientes)
  .get("/Vendedores", PersonasController.GetAllVendedores)
  .get("/Clientes/:dni", PersonasController.GetAllClientesDNI)
  .get("/Gerente-Asistente", PersonasController.GetAllGerenteAsistente)
  .post("/Login", PersonasController.Login);
