import * as request from 'supertest';
import server from '../worker';
import { IUserBody } from '../utils/interfaces';

const req = request(server);

describe('GET api/users', () => {
  it('It should return all users', async () => {
    const res = await req.get('/api/users');
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST api/users', () => {
  it('It should post new user', async () => {
    const data: IUserBody = {
      username: 'Test',
      age: 30,
      hobbies: [],
    };

    const res = await req.post('/api/users').send(JSON.stringify(data));
    expect(JSON.parse(res.text)).toBe('User was created');
  });
});

describe('GET user by id api/users/{userID}', () => {
  it('It should get user', async () => {
    const resTestUser = await req.get('/api/users');
    const { id } = resTestUser.body[0];

    const res = await req.get(`/api/users/?id=${id}`);
    expect(res.body.id).toBe(id);
  });
});

describe('PUT user by id api/users/{userID}', () => {
  it('It should update user', async () => {
    const resTestUser = await req.get('/api/users');
    const { id } = resTestUser.body[0];
    const data: IUserBody = {
      username: 'Test',
      age: 30,
      hobbies: [],
    };

    const res = await req.put(`/api/users/?id=${id}`).send(JSON.stringify(data));
    expect(JSON.parse(res.text)).toBe('User was updated');
  });
});

describe('DELETE user by id api/users/{userID}', () => {
  it('It should delete user', async () => {
    const resTestUser = await req.get('/api/users');
    const { id } = resTestUser.body[0];

    const res = await req.delete(`/api/users/?id=${id}`);
    expect(res.status).toBe(200);
  });
});
