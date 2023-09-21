import * as ServiciosService from "../Services/Servicios.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllIdAlquiler = async (req, res) => {
  try {
    const { id } = req.params;
    const allAlquiler = await ServiciosService.getAllIdAlquiler(id);
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllReservasPendientes = async (req, res) => {
  try {
    const allReservasPendientes =
      await ServiciosService.getReservasPendientes();
    sendSuccessResponse(res, allReservasPendientes);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
