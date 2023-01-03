
const request = require('supertest');
const carModel = require('../app/models').Car
const app = require('../app/index');
let token = "";

beforeAll(async () => {
    const userData = {
        email: 'fikri@binar.co.id',
        password: '123456'
    }

    const response = await request(app).post('/v1/auth/login').send(userData);

    token = response.body.accessToken;
})

describe('GET /', () => {
    it('should response 200 ok', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })
})

describe('GET /v1/cars', () => {
    it('should response 200 ok', (done) => {        
        request(app)
        .get('/v1/cars')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
})


describe('POST /v1/cars', () => {
    it('return 201 created', async () => {
        const payload = {
            name: "Lenov Car",
            price: 5000000,
            size: "large",
            image: "lenov-car345.jpg"
        };
        
        await request(app)
        .post('/v1/cars')
        .set({
            Authorization: `Bearer ${token}`
        })
        .send(payload)
        .expect('Content-Type', 'application/json; charset=utf-8')           
        .expect(201)
    });
})

// describe('PUT /v1/cars/:id', () => {
//     it('should return 200 ok', async () => {
//         const addCar = {
//             name: "Lenov Car",
//             price: 700000,
//             size: "medium",
//             image: "lenovcar.png"
//         };

//         const car = await carModel.create(addCar);

//         const updateCar = {
//             name: "Lenov Car 3",
//             price: 5000000,
//             size: "Large",
//             image: "lenovcar3T.png",
//         };

//         await request(app)
//             .put(`/v1/cars/${car.id}`)
//             .set({
//                 Authorization: `Bearer ${token}`
//             })
//             .send(updateCar)
//             .expect('Content-Type', 'application/json; charset=utf-8')
//             .expect(200)
//     })
// })

// describe('DELETE /v1/cars/:id', () => {
//     it('should return 204', async () => {
//         const addCar = {
//             name: "Avanza",
//             price: 250000,
//             size: "medium",
//             image: "avanza2.png"
//         };

//         const car = await carModel.create(addCar);

//         await request(app)
//         .delete('/v1/cars/' + car.id)
//         .set({
//             Authorization: `Bearer ${token}`
//         })
//         .expect(204)
//     })
// })