import * as ServiciosService from "../Services/Servicios.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllAlquileresDisponibles = async (req, res) => {
  try {
    const allAlquiler = await ServiciosService.getAllAlquilerDisponible();
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllAlquileresActivos = async (req, res) => {
  try {
    const allAlquiler = await ServiciosService.getAllAlquilerActivos();
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetOneIdAlquiler = async (req, res) => {
  try {
    const { id } = req.params;
    const allAlquiler = await ServiciosService.getOneIdAlquiler(id);
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

export const GetOneIdAlquilerCosto = async (req, res) => {
  try {
    const { id } = req.params;
    const OneAlquiler = await ServiciosService.getOneAlquilerCosto(id);
    sendSuccessResponse(res, OneAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllAlquilerFecha = async (req, res) => {
  try {
    const { date } = req.params;
    const allAlquiler = await ServiciosService.getAllAlquilerFecha(date);
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllIdReservasPendientes = async (req, res) => {
  try {
    const { id } = req.params;
    const allReservas = await ServiciosService.getAllIdReservasPendientes(id);
    sendSuccessResponse(res, allReservas);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllAlquileres = async (req, res) => {
  try {
    const allReservas = await ServiciosService.getAllAlquileres();
    sendSuccessResponse(res, allReservas);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllAlquilerFechas = async (req, res) => {
  try {
    console.log(req.params);
    const allAlquiler = await ServiciosService.getAllAlquilerFechas();
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
