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

export const Login = async (req, res) => {
  try {
    const userData = req.body;
    const user = await PersonasService.login(userData);
    sendSuccessResponse(res, user);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const GetAllPersonas = async (req, res) => {
  try {
    const AllPersonas = await PersonasService.getAllPersonas();
    sendSuccessResponse(res, AllPersonas);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOnePersona = async (req, res) => {
  try {
    const {
      Nombre,
      DNI,
      Direccion,
      Telefono,
      Email,
      Password,
      Distintivo = "cliente",
    } = req.body;

    const userData = {
      Nombre,
      DNI,
      Direccion,
      Telefono,
      Email,
      Password,
      Distintivo,
    };

    const user = await PersonasService.createOnePersona(userData);
    sendSuccessResponse(res, user);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
