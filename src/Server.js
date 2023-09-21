import express from "express";
import { ENVPORT, Global } from "./Config/config.js";
import Personas from "./Routes/Personas.routes.js";

export default class {
  constructor() {
    this.app = express();
    this.port = ENVPORT.PORT;
    this.midlewares = Global(this.app);
    this.routes();
  }

  async routes() {
    this.app.use("/api", Personas);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server Runing in ${this.port}`);
    });
  }
}
