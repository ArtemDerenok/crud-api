import { IUserBody } from './interfaces';

export const isUserBody = (obj): obj is IUserBody => 'username' in obj && 'age' in obj && 'hobbies' in obj && Object.keys(obj).length === 3;

const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

export const isUuidValid = (id) => regexExp.test(id);
