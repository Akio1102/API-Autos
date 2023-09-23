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

export const GetAllClientesAlquiler = async (req, res) => {
  try {
    const allReservas = await ServiciosService.getAllClientesAlquiler();
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
    const allAlquiler = await ServiciosService.getAllAlquilerFechas();
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllServicios = async (req, res) => {
  try {
    const allServicios = await ServiciosService.getAllServicios();
    sendSuccessResponse(res, allServicios);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOneServicio = async (req, res) => {
  try {
    const newServicio = await ServiciosService.createOneServicio(req.body);
    sendSuccessResponse(res, newServicio);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneServicio = async (req, res) => {
  try {
    const {
      Id,
      IdCliente,
      IdAutomovil,
      Tipo_Servicio,
      Fecha_Inicio,
      Fecha_Final,
      Estado,
      Pago_Total,
    } = req.body;

    const servicioData = {
      IdCliente,
      IdAutomovil,
      Tipo_Servicio,
      Fecha_Inicio,
      Fecha_Final,
      Estado,
      Pago_Total,
    };

    const updateServicio = await ServiciosService.updatedOneServicio(
      Id,
      servicioData
    );
    sendSuccessResponse(res, updateServicio);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneServicio = async (req, res) => {
  try {
    const { Id } = req.body;
    const allAlquiler = await ServiciosService.deleteOneServicio(Id);
    sendSuccessResponse(res, allAlquiler);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
