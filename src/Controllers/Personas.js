import * as PersonasService from "../Services/Personas.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllClientes = async (req, res) => {
  try {
    const allClientes = await PersonasService.getAllClientes();
    sendSuccessResponse(res, allClientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllVendedores = async (req, res) => {
  try {
    const allClientes = await PersonasService.getAllVendedor();
    sendSuccessResponse(res, allClientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
