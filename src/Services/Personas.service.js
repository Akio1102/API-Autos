import ConectDB from "../Database/connection.js";
import { createToken } from "../Helpers/Token.js";

export const getAllClientes = async () => {
  try {
    const Clientes = await ConectDB("persona");
    const AllClientes = await Clientes.find({
      Distintivo: "cliente",
    }).toArray();

    return AllClientes.length > 0
      ? {
          msg: "Clientes Registrados Encontrados",
          data: AllClientes,
        }
      : {
          msg: "No hay Clientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllVendedor = async () => {
  try {
    const Vendedor = await ConectDB("persona");
    const AllVendedor = await Vendedor.find({
      Distintivo: "vendedor",
    }).toArray();

    return AllVendedor.length > 0
      ? {
          msg: "Vendedores Encontrados",
          data: AllVendedor,
        }
      : {
          msg: "No hay Clientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllClientesDNI = async (DNI) => {
  try {
    const Clientes = await ConectDB("persona");
    const AllClientes = await Clientes.aggregate([
      {
        $match: {
          DNI,
          Distintivo: "cliente",
        },
      },
      {
        $project: {
          _id: 0,
          Email: 0,
          Password: 0,
        },
      },
    ]).toArray();

    return AllClientes.length > 0
      ? {
          msg: "Clientes con DNI Encontrado",
          data: AllClientes,
        }
      : {
          msg: "No hay Clientes con ese DNI",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllGerenteAsistente = async () => {
  try {
    const Vendedor = await ConectDB("persona");
    const AllVendedor = await Vendedor.aggregate([
      { $match: { Distintivo: { $in: ["gerente", "asistente"] } } },
      { $project: { _id: 0, Email: 0, Password: 0 } },
    ]).toArray();

    return AllVendedor.length > 0
      ? {
          msg: "Empleados con el cargo de Gerente o Asistente Encontrados",
          data: AllVendedor,
        }
      : {
          msg: "No hay Empleados con el cargo de Gerente o Asistente",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const login = async (user) => {
  const { Email, Password } = user;
  try {
    const Cliente = await ConectDB("persona");
    const User = await Cliente.find({
      Email,
      Password,
    }).toArray();

    if (User) {
      const token = await createToken(User[0]._id);
      return {
        msg: "Login Exitoso",
        data: User,
        token,
      };
    } else {
      return {
        msg: "Usuario no encontrado",
        status: 404,
      };
    }
  } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
  }
};
