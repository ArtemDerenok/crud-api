import { randomUUID } from 'crypto';
import users from '../data/users';
import { IUser, IUserBody } from '../utils/interfaces';
import isUserBody from '../utils/utils';

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

  public async putUser(body: IUserBody, id) {
    try {
      if (isUserBody(body)) {
        const index: number = await users.findIndex((elem) => elem.id === id);
        if (index >= 0) {
          await users.splice(index, 1, { id: users[index].id, ...body });
        } else {
          throw new Error("User doesn't exist");
        }
      } else {
        throw new Error("Object doesn't have required fields");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async removeUser(id) {
    try {
      const index: number = await users.findIndex((elem) => elem.id === id);
      if (index >= 0) {
        await users.splice(index, 1);
      } else {
        throw new Error("User doesn't exist");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const userModel = UsersModel.getInstance();

export default userModel;
