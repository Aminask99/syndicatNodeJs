const request = require('supertest')
const app = require('./app');

describe('test login', () => {

    describe(' test :Wrong username or password', () => {
        test('Wrong username or password', async () => {
            const response = await request(app).post('/api/login').send(body = {
                email: 'fatiJNCZDHha@gmail.com',
                password: ''
            });
            expect(response.statusCode).toBe(400);

        })
    })

    describe(' test :Password is not matched ', () => {
        test('Password is not matched ', async () => {
            const response = await request(app).post('/api/login').send(bodyy = {
                email: 'aminasalik012@gmail.com',
                password: '1234565432'
            });
            expect(response.statusCode).toBe(400);

        })
    })

    describe(' test :Internal Server error Occured!!', () => {
        test('Internal Server error Occured', async () => {
            const response = await request(app).post('/api/login').send(bodyy = {
                email: 'aminasalik012@gmail.com',
                password: 'AminaSalik120@'
            });
            expect(response.statusCode).toBe(400);

        })
    })

})

//  register 

describe('test register', () => {
    let body = {
        UserName: 'amina',
        password: 'amina99@'
    }

    describe(' test :User Creat ', () => {
        test('User Creat ', async () => {
            const response = await request(app).post('/api/register').send(body);
            expect(response.statusCode).toBe(200);
        })
    })
})


