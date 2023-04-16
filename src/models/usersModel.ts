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
}

const userModel = UsersModel.getInstance();

export default userModel;
