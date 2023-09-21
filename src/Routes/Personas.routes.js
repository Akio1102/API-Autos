import { Router } from "express";
import * as PersonasController from "../Controllers/Personas.js";

const ROUTER = Router();

export default ROUTER.get("/", PersonasController.GetAllClientes);
