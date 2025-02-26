const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('responds with HTML containing Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    expect(response.text).toContain('Hello, World!');
  });
});