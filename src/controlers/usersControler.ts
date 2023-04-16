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
}

const usersControler = ProductControler.getInstance();

export default usersControler;
