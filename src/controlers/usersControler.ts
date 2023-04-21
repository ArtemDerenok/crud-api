import userModel from '../models/usersModel';
import { IUserBody } from '../utils/interfaces';
import { isUuidValid } from '../utils/utils';

class ProductControler {
  private static instance: ProductControler;

  private constructor() { }

  public static getInstance(): ProductControler {
    if (!ProductControler.instance) {
      ProductControler.instance = new ProductControler();
    }

    return ProductControler.instance;
  }

  public async getUsers(req, res) {
    try {
      const data = await userModel.findAllUsers();
      res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  }

  public async getUser(req, res, id) {
    try {
      if (isUuidValid(id)) {
        const data = await userModel.findUser(id);
        res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data));
      } else {
        res.writeHead(400, { 'Content-Type': 'application/jsonn' }).end(JSON.stringify('UUID is invalid'));
      }
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify(error.message));
    }
  }

  public createUser(req, res) {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const obj: IUserBody = JSON.parse(body);

      try {
        await userModel.postUser(obj);
        res.writeHead(201, { 'Content-Type': 'application/json' }).end(JSON.stringify('User was created'));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify(error.message));
      }
    });

    req.on('error', (error) => {
      res.writeHead(500, { 'Content-Type': 'application/json' }).end(JSON.stringify(error.message));
    });
  }

  public updateUser(req, res, id) {
    if (isUuidValid(id)) {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        const obj: IUserBody = JSON.parse(body);

        try {
          await userModel.putUser(obj, id);
          res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify('User was updated'));
        } catch (error) {
          res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify(error.message));
        }
      });

      req.on('error', (error) => {
        res.writeHead(500, { 'Content-Type': 'application/json' }).end(JSON.stringify(error.message));
      });
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify('UUID is invalid'));
    }
  }
}
const usersControler = ProductControler.getInstance();

export default usersControler;
