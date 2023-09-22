import * as AutomovilService from "../Services/Automovil.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllAutomovil5 = async (req, res) => {
  try {
    const allAutomovil5 = await AutomovilService.getAllAutomovil5();
    sendSuccessResponse(res, allAutomovil5);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllAutomovil = async (req, res) => {
  try {
    const allAutomovil = await AutomovilService.getAllAutomovil();
    sendSuccessResponse(res, allAutomovil);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllAutomovilCapacidad5Disponibles = async (req, res) => {
  try {
    const allAutomovil =
      await AutomovilService.getAllAutomovilCapacidad5Disponibles();
    sendSuccessResponse(res, allAutomovil);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
