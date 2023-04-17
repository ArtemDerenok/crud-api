import users from '../data/users';

class UsersModel {
  private static instance: UsersModel;

  private constructor() { }

  public static getInstance(): UsersModel {
    if (!UsersModel.instance) {
      UsersModel.instance = new UsersModel();
    }

    return UsersModel.instance;
  }

  public async findAllUsers() {
    try {
      const data = await users;
      return data;
    } catch (error) {
      return error;
    }
  }

  public async findUser(id: string) {
    try {
      const data = await users;
      const user = data.find((elem) => elem.id === id);
      if (!user) {
        throw new Error('Id not found');
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const userModel = UsersModel.getInstance();

export default userModel;
