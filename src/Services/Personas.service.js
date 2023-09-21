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
