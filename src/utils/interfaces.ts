export interface IUser {
  id: string,
  username: string,
  age: number,
  hobbies: Array<string> | []
}

export interface IUserBody {
  username: string,
  age: number,
  hobbies: Array<string> | []
}

export const isUserBody = (obj): obj is IUserBody => 'username' in obj && 'age' in obj && 'hobbies' in obj && Object.keys(obj).length === 3;
