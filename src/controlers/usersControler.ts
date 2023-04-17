import userModel from '../models/usersModel';

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
      const data = await userModel.findUser(id);
      res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'application/json' }).end(`<h1>${error.message}</h2>`);
    }
  }
}

const usersControler = ProductControler.getInstance();

export default usersControler;
