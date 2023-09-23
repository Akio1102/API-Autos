import { ObjectId } from "mongodb";
import ConectDB from "../Database/connection.js";
import { encryptPassword, comparePasswords } from "../Helpers/Hash.js";
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
    const User = await Cliente.findOne({ Email });

    if (!User) {
      return {
        msg: "Usuario no encontrado",
        status: 404,
      };
    }

    const isPasswordValid = comparePasswords(Password, User.Password);

    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }

    const token = await createToken(User._id);

    return {
      msg: "Login Exitoso",
      data: User,
      token,
    };
  } catch (error) {
    throw new Error(`Error al iniciar sesión: ${error.message}`);
  }
};

// export const login = async (user) => {
//   const { Email, Password } = user;
//   try {
//     const Cliente = await ConectDB("persona");
//     const User = await Cliente.find({ Email }).toArray();

//     if (User) {
//       const isPasswordValid = comparePasswords(Password, User.Password);

//       if (!isPasswordValid) {
//         throw new Error("Password incorrecta");
//       }

//       const token = await createToken(User[0]._id);
//       return {
//         msg: "Login Exitoso",
//         data: User,
//         token,
//       };
//     } else {
//       return {
//         msg: "Usuario no encontrado",
//         status: 404,
//       };
//     }
//   } catch (error) {
//     throw new Error(`Error al iniciar sesión: ${error.message}`);
//   }
// };

export const getAllPersonas = async () => {
  try {
    const Personas = await ConectDB("persona");
    const AllPersonas = await Personas.find().toArray();

    return AllPersonas.length > 0
      ? {
          msg: "Personas Encontradas",
          data: AllPersonas,
        }
      : {
          msg: "No hay Personas",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createOnePersona = async (Person) => {
  try {
    const { Email, Password } = Person;

    const Personas = await ConectDB("persona");

    const existingUser = await Personas.find({ Email, Password }).toArray();
    if (existingUser) {
      return {
        msg: "Persona ya Existe",
        status: 409,
      };
    }

    const hashedPassword = encryptPassword(Password);
    Person.Password = hashedPassword;

    const NewPersona = await Personas.insertOne({ Person });

    return NewPersona.acknowledged
      ? {
          msg: "Personas Creada Exitosamente",
          data: NewPersona,
        }
      : {
          msg: "No se puedo Crear",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updatedOnePersona = async (id, Person) => {
  try {
    const { Password } = Person;

    const Personas = await ConectDB("persona");

    const existingUser = await Personas.find({ Email, Password }).toArray();

    if (!existingUser) {
      return {
        msg: "Persona no Existe",
        status: 404,
      };
    }

    const hashedPassword = encryptPassword(Password);
    Person.Password = hashedPassword;

    const UpdatePersona = await Personas.updateOne(
      { _id: new ObjectId(id) },
      { $set: Person }
    );

    return UpdatePersona.acknowledged
      ? {
          msg: "Personas Actualizada Exitosamente",
        }
      : {
          msg: "No existe esa Persona",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deletedOnePersona = async (id) => {
  try {
    const Personas = await ConectDB("persona");

    const UpdatePersona = await Personas.deleteOne({ _id: new ObjectId(id) });

    return UpdatePersona.acknowledged
      ? {
          msg: "Personas Eliminada Exitosamente",
        }
      : {
          msg: "No existe esa Persona",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
