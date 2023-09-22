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

export const GetAllClientesDNI = async (req, res) => {
  try {
    const { dni } = req.params;
    const allClientes = await PersonasService.getAllClientesDNI(dni);
    sendSuccessResponse(res, allClientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllGerenteAsistente = async (req, res) => {
  try {
    const allGerenteAsistente = await PersonasService.getAllGerenteAsistente();
    sendSuccessResponse(res, allGerenteAsistente);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
