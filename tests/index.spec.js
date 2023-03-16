const App = require ('../index');
const request = require ('supertest');

describe('GET /', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(App).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /alumnos', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(App).get('/alumnos').send();
        expect(response.statusCode).toBe(200);
    });

    test('should respond with an array', async () => {
        const response = await request(App).get('/alumnos').send();
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe('GET /alumnos/:id', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(App).get('/alumnos/2').send();
        expect(response.statusCode).toBe(200);
    });
});