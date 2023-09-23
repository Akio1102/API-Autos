import * as SucursalService from "../Services/Sucursal.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllSucursal = async (req, res) => {
  try {
    const allSucursales = await SucursalService.getAllSucursales();
    sendSuccessResponse(res, allSucursales);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOneSucursal = async (req, res) => {
  try {
    const newSucursal = await SucursalService.createOneSucursal(req.body);
    sendSuccessResponse(res, newSucursal);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneSucursal = async (req, res) => {
  try {
    const { Id, Nombre, Direccion, Contacto } = req.body;
    const sucursalData = {
      Nombre,
      Direccion,
      Contacto,
    };
    const updateSucursal = await SucursalService.updateOneSucursal(
      Id,
      sucursalData
    );
    sendSuccessResponse(res, updateSucursal);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneSucursal = async (req, res) => {
  try {
    const { Id } = req.body;
    const allAutomoviles = await SucursalService.deleteOneSucursal(Id);
    sendSuccessResponse(res, allAutomoviles);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
