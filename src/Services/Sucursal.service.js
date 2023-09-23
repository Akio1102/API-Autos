import ConectDB from "../Database/connection.js";

export const getAllSucursales = async () => {
  try {
    const Sucursal = await ConectDB("sucursal");

    const Sucursales = await Sucursal.find().toArray();

    return Sucursales.length > 0
      ? {
          msg: "Se encontraron todas las Sucursales",
          data: Sucursales,
        }
      : {
          msg: "No hay Sucursales registrados en la Base de Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createOneSucursal = async (sucursal) => {
  try {
    const Sucursal = await ConectDB("sucursal");

    const Sucursales = await Sucursal.insertOne(sucursal);

    return Sucursales.acknowledged
      ? {
          msg: "Se creo Exitosamente la Sucursale",
        }
      : {
          msg: "No hay Sucursales registrados en la Base de Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateOneSucursal = async (id, sucursalData) => {
  try {
    const Sucursal = await ConectDB("sucursal");

    const Sucursales = await Sucursal.updateOne(
      { _id: new ObjectId(id) },
      { $set: sucursalData }
    );

    return Sucursales.acknowledged
      ? {
          msg: "Sucursal Actualizado Exitosamente",
        }
      : {
          msg: "No existe esa Sucursal",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteOneSucursal = async (id) => {
  try {
    const Sucursal = await ConectDB("sucursal");

    const Sucursales = await Sucursal.deleteOne({ _id: new ObjectId(id) });

    return Sucursales.acknowledged
      ? {
          msg: "Sucursal Eiminado Exitosamenten",
        }
      : {
          msg: "No existe esa Sucursal",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
