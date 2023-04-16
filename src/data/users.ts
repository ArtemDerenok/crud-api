import { randomUUID } from 'crypto';

interface IUser {
  id: string,
  username: string,
  age: number,
  hobbies: Array<string>
}

const users: Array<IUser> = [
  {
    id: randomUUID(),
    username: 'Artem',
    age: 28,
    hobbies: ['Programming'],
  },
  {
    id: randomUUID(),
    username: 'Ivan',
    age: 25,
    hobbies: ['Books'],
  },
];

export default users;
