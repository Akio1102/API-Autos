import ConectDB from "../Database/connection.js";

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
