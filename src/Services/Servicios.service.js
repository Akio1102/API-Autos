import ConectDB from "../Database/connection.js";
import { ObjectId } from "mongodb";

export const getAllIdAlquiler = async (id) => {
  try {
    const Servicio = await ConectDB("servicio");

    const Alquileres = await Servicio.find({
      _id: new ObjectId(id),
      Tipo_Servicio: "Alquiler",
    }).toArray();

    return Alquileres.length > 0
      ? {
          msg: "Alquiler con ID encontrado",
          data: Alquileres,
        }
      : {
          msg: "No hay Alquiler con ese ID",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getReservasPendientes = async () => {
  try {
    const Servicio = await ConectDB("servicio");

    const Reservas = await Servicio.aggregate([
      {
        $match: {
          Tipo_Servicio: "Reserva",
          Estado: "Pendiente",
        },
      },
      {
        $lookup: {
          from: "persona",
          localField: "IdCliente",
          foreignField: "_id",
          as: "Cliente",
        },
      },
      {
        $lookup: {
          from: "automovil",
          localField: "IdAutomovil",
          foreignField: "_id",
          as: "Automovil",
        },
      },
      {
        $project: {
          _id: 0,
          IdAutomovil: 0,
          IdCliente: 0,
          "Cliente._id": 0,
          "Cliente.Direccion": 0,
          "Cliente.Email": 0,
          "Cliente.Password": 0,
          "Cliente.Distintivo": 0,
          "Automovil._id": 0,
          "Automovil.Stock": 0,
        },
      },
    ]).toArray();

    return Reservas.length > 0
      ? {
          msg: "Reservas Pendientes Encontradas",
          data: Reservas,
        }
      : {
          msg: "No hay Reservas Pendientes",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
