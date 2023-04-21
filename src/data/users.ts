import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../utils/interfaces';

const users: Array<IUser> = [
  {
    id: uuidv4(),
    username: 'Artem',
    age: 28,
    hobbies: ['Programming'],
  },
  {
    id: uuidv4(),
    username: 'Ivan',
    age: 25,
    hobbies: ['Books'],
  },
];

export default users;
