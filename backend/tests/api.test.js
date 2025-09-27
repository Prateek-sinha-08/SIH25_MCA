const request = require('supertest');
const app = require('../src/index');

describe('API Health Check', () => {
  test('GET /api/health should return 200', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);
    
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
  });
});

describe('Auth Routes', () => {
  test('POST /api/auth/register should return placeholder response', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .expect(200);
    
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('status', 'Not implemented yet');
  });

  test('POST /api/auth/login should return placeholder response', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .expect(200);
    
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('status', 'Not implemented yet');
  });
});