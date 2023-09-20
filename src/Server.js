import express from "express";
import { ENVPORT, Global } from "./Config/config.js";

export default class {
  constructor() {
    this.app = express();
    this.port = ENVPORT.PORT;
    this.midlewares = Global(this.app);
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server Runing in ${this.port}`);
    });
  }
}
