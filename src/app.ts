import express from 'express';
import cors from 'cors';
import path from 'path';

import { route } from './routes/routes';

class App {
  public port: number;
  public server  = express.application;

  constructor(appInfo: { port: number }) {
    this.port = appInfo.port;
    this.server = express();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes() {
    this.server.use(route);
    this.server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  }

  public listen() {
    this.server.listen(this.port, () => {
      process.stdout.write(`Server listening on the port ${this.port}`);
    });
  }
}

export { App };