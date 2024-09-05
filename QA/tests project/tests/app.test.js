const request = require('supertest');
const app = require('../server.js'); // Adjust this path to point to your Express app

describe('GET /data', () => {
    it('should respond with JSON data', async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        
        // expect(response.body.token).toBeDefined();

    });

    it('should respond with status code 200', async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
    });

    
});

describe('add', () => {
    test('return success', () => {
        expect(app.add()).toBe('success');
    });
});

describe('sum', () => {
    test('sum two positive numbers', () => {
        expect(app.sum(1,3)).toBe(4);
    });
});
describe('sum', () => {
    it('sum two positive numbers', () => {
        expect(app.sum(1.4,3.6)).toBe(5);
    });
    it('sum tow negative numbers', () => {
        expect(app.sum(-2,-5)).toBe(-7)
    });
});

describe('checkPositive', () => {
    it('check positive number', () => {
        expect(app.checkPositive(5)).toBe('the number is positive');
    });
    it('check negative number', () => {
        expect(app.checkPositive(-2)).toBe(response.statusCode(500))
    });
});



// // describe('POST /data', () => {
// //     it('should respond with a successful message', async () => {
// //         const mockData = { key: 'value' };
// //         const response = await request(app)
// //             .post('/data')
// //             .send(mockData);
// //         expect(response.statusCode).toBe(200);
// //         expect(response.body.message).toBe('Data successfully sent via Axios, and Selenium task completed');
//     });
// });
