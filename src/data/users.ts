import { randomUUID } from 'crypto';
import { IUser } from '../utils/interfaces';

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
