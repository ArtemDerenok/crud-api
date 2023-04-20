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

export interface IUserBodyUpdate {
  id: string,
  username: string,
  age: number,
  hobbies: Array<string> | []
}
