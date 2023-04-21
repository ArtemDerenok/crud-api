import { IUserBody } from './interfaces';

const isUserBody = (obj): obj is IUserBody => 'username' in obj && 'age' in obj && 'hobbies' in obj && Object.keys(obj).length === 3;

export default isUserBody;
