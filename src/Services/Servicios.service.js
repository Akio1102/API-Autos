import ConectDB from "../Database/connection.js";
import { ObjectId } from "mongodb";

export const getAllAlquilerDisponible = async () => {
  try {
    const Servicio = await ConectDB("servicio");

    const AlquileresDisponible = await Servicio.find({
      Tipo_Servicio: "Alquiler",
      Estado: "Disponible",
    }).toArray();

    return AlquileresDisponible.length > 0
      ? {
          msg: "Alquileres Disponibles Encontrados",
          data: AlquileresDisponible,
        }
      : {
          msg: "No hay Alquileres Disponibles",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllAlquilerActivos = async () => {
  try {
    const Servicio = await ConectDB("servicio");

    const Alquileres = await Servicio.aggregate([
      {
        $match: {
          Tipo_Servicio: "Alquiler",
          Estado: "Activos",
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
        $project: {
          _id: 0,
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

    return Alquileres.length > 0
      ? {
          msg: "Alquileres Activos Encontrados",
          data: Alquileres,
        }
      : {
          msg: "No hay Alquileres Activos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getOneIdAlquiler = async (id) => {
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

export const getOneAlquilerCosto = async (id) => {
  try {
    const Servicio = await ConectDB("servicio");

    const Alquileres = await Servicio.find({
      _id: new ObjectId(id),
      Tipo_Servicio: "Alquiler",
    }).toArray();

    return Alquileres.length > 0
      ? {
          msg: "Alquiler con ID encontrado con el Costo Total",
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

export const getAllAlquilerFecha = async (date = "2023-07-05") => {
  try {
    const Servicio = await ConectDB("servicio");

    const AlquileresFecha = await Servicio.find({
      Tipo_Servicio: "Alquiler",
      Fecha_Inicio: new Date(date),
    }).toArray();

    return AlquileresFecha.length > 0
      ? {
          msg: `Alquileres con la fecha ${date} Encontrados`,
          data: AlquileresFecha,
        }
      : {
          msg: `No hay Alquileres con la fecha ${date}`,
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllIdReservasPendientes = async (id) => {
  try {
    const Servicio = await ConectDB("servicio");

    const Reserva = await Servicio.find({
      IdCliente: new ObjectId(id),
      Tipo_Servicio: "Reserva",
      Estado: "Pendiente",
    }).toArray();

    return Reserva.length > 0
      ? {
          msg: `Reservas Pendientes por el Cliente con ID ${id}`,
          data: Reserva,
        }
      : {
          msg: `No hay Reservas Pendientes del Cliente con el ID ${id}`,
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllAlquileres = async () => {
  try {
    const Servicio = await ConectDB("servicio");

    const Alquileres = await Servicio.find({
      Tipo_Servicio: "Alquiler",
    }).toArray();

    return Alquileres.length > 0
      ? {
          msg: "Alquileres Encontrados",
          cantidadTotal: Alquileres.length,
          data: Alquileres,
        }
      : {
          msg: "No hay Alquileres registrados en la Base de Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const getAllAlquilerFechas = async (date = "2023-07-05") => {
  try {
    const Servicio = await ConectDB("servicio");

    const AlquileresFecha = await Servicio.find({
      Tipo_Servicio: "Alquiler",
      Fecha_Inicio: {
        $gte: new Date(date),
        $lte: new Date("2023-07-10"),
      },
    }).toArray();

    return AlquileresFecha.length > 0
      ? {
          msg: `Alquileres con la fecha ${date} Encontrados`,
          data: AlquileresFecha,
        }
      : {
          msg: `No hay Alquileres con la fecha ${date}`,
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
