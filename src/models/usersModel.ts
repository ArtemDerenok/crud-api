import { randomUUID } from 'crypto';
import users from '../data/users';
import { IUser, IUserBody, isUserBody } from '../utils/interfaces';

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
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async postUser(body: IUserBody) {
    try {
      if (isUserBody(body)) {
        const user: IUser = {
          id: randomUUID(),
          ...body,
        };
        await users.push(user);
      } else {
        throw new Error("Object doesn't have required fields");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const userModel = UsersModel.getInstance();

export default userModel;
