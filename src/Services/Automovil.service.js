import ConectDB from "../Database/connection.js";

export const getAllAutomovil5 = async () => {
  try {
    const Automovil = await ConectDB("automovil");
    const AllAutomovil5 = await Automovil.find({
      Capacidad: { $gt: 5 },
    }).toArray();

    return AllAutomovil5.length > 0
      ? {
          msg: "Automovil con Capacidad mayor a 5",
          data: AllAutomovil5,
        }
      : {
          msg: "No hay Automovil con Capacidad mayor a 5",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllAutomovil = async () => {
  try {
    const Automovil = await ConectDB("automovil");
    const AllAutomovil = await Automovil.find()
      .sort({ Marca: 1, Modelo: 1 })
      .toArray();

    return AllAutomovil.length > 0
      ? {
          msg: "Automovil ordenados por Marca y Modelo",
          data: AllAutomovil,
        }
      : {
          msg: "No hay Automovil",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllAutomovilCapacidad5Disponibles = async () => {
  try {
    const Automovil = await ConectDB("automovil");
    const AllAutomovil = await Automovil.find({
      Capacidad: 5,
      "Stock.Cantidad": { $gt: 0 },
    }).toArray();

    return AllAutomovil.length > 0
      ? {
          msg: "Automovil con Capacidad a 5 y Disponibles",
          data: AllAutomovil,
        }
      : {
          msg: "No hay Automovil",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
