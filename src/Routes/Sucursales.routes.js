import { Router } from "express";
import * as SucursalesController from "../Controllers/Sucursal.js";

const ROUTER = Router();

export default ROUTER.get("/", SucursalesController.GetAllSucursal)
  .post("/New", SucursalesController.CreateOneSucursal)
  .put("/Update", SucursalesController.UpdateOneSucursal)
  .delete("/Delete", SucursalesController.DeleteOneSucursal);
