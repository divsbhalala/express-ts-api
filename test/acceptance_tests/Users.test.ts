import * as request from "supertest";
import server from "../../src/index";
// import { App } from "../../src/app/App";

// const app: App = new App();
// app.setPort(3000);


// const app: App = new App();
describe("POST /api/users/register", () => {

    const data = {
        fbId: "sdsdssd",
        name: "dsdsdsdsdsdsdsdss"
    };
    let resp = {};
    it("SHOULD return 200Ok", async (done) => {
        request(server)
            .post("/api/users/register")
            .send(data)
            .set('Content-Type', 'application/json')
            .end((err, response) => {
                resp = response.body.data;
                expect(response.statusCode).toBe(200);
                expect(resp.fbId).toBe(data.fbId);
                return done();
            })
    });
    it("SHOULD return Same results ", async (done) => {
        request(server)
            .post("/api/users/register")
            .send(data)
            .set('Content-Type', 'application/json')
            .end((err, response) => {
                resp = response.body.data;
                expect(response.statusCode).toBe(200);
                expect(response.body.data._id).toBe(resp._id);
                return done();
            })
    });
    it("SHOULD return 400", async (done) => {
        request(server)
            .post("/api/users/register")
            .send({})
            .set('Content-Type', 'application/json')
            .end((err, response) => {
                expect(response.statusCode).toBe(400);
                done();
            })
    });
});