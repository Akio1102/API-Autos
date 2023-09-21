import * as PersonaService from "../Services/Personas.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllClientes = async (req, res) => {
  try {
    const allClientes = await PersonaService.getAllClientes();
    sendSuccessResponse(res, allClientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
