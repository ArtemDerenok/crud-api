import { IUserBody, IUserBodyUpdate } from './interfaces';

export const isUserBody = (obj): obj is IUserBody => 'username' in obj && 'age' in obj && 'hobbies' in obj && Object.keys(obj).length === 3;

export const isUserBodyUpdate = (obj): obj is IUserBodyUpdate => 'id' in obj && 'username' in obj && 'age' in obj && 'hobbies' in obj && Object.keys(obj).length === 4;
