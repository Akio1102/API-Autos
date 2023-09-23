import * as AutomovilService from "../Services/Automovil.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllAutomovilesSucursal = async (req, res) => {
  try {
    const allAutomoviles = await AutomovilService.getAllAutomovilesSucursal();
    sendSuccessResponse(res, allAutomoviles);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

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

export const GetAllCantidadAutomovilesSucursal = async (req, res) => {
  try {
    const allAutomovil =
      await AutomovilService.getAllCantidadAutomovilesSucursal();
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

export const GetAllAutomoviles = async (req, res) => {
  try {
    const allAutomoviles = await AutomovilService.getAllAutomoviles();
    sendSuccessResponse(res, allAutomoviles);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateAutomovil = async (req, res) => {
  try {
    const Automovil = await AutomovilService.createdOneAutomovil(req.body);
    sendSuccessResponse(res, Automovil);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneAutomovil = async (req, res) => {
  try {
    const { Id, Marca, Modelo, Year, Tipo, Capacidad, Stock } = req.body;
    const Auto = {
      Marca,
      Modelo,
      Year,
      Tipo,
      Capacidad,
      Stock,
    };
    const Automovil = await AutomovilService.updatedOneAutomovil(Id, Auto);
    sendSuccessResponse(res, Automovil);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneAutomovil = async (req, res) => {
  try {
    const { Id } = req.body;
    const Automovil = await AutomovilService.deletedOneAutomovil(Id);
    sendSuccessResponse(res, Automovil);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
