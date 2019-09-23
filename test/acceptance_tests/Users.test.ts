import * as request from "supertest";
// import server from "../../src/index";
import app from "../../src/app";

let server = app;
beforeEach(async () => {
    server = await app.listen(4000);
    global.agent = request.agent(server);
});

// Hooks - After All
afterEach(async (done) => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    await server.close(done);
});

afterAll(async(done) => {
    done();
})
describe("POST /api/users/register", () => {

    const data = {
        fbId: "sdsdssd",
        name: "dsdsdsdsdsdsdsdss"
    };
    let resp = {};
    it("SHOULD return 200Ok", async (done) => {
        const response = await global.agent.post("/api/users/register")
            .send(data)
            .set('Content-Type', 'application/json');
        resp = response.body.data;
        expect(response.statusCode).toBe(200);
        expect(resp.fbId).toBe(data.fbId);
        done();
    });
    it("SHOULD return Same results ", async (done) => {
        const response = await global.agent.post("/api/users/register")
            .send(data)
            .set('Content-Type', 'application/json');
        expect(response.statusCode).toBe(200);
        expect(response.body.data._id).toBe(resp._id);
        return done();
    });
    it("SHOULD return 400", async (done) => {
        const response = await global.agent.post("/api/users/register")
            .send({})
            .set('Content-Type', 'application/json');
        expect(response.statusCode).toBe(400);
        done();
    });
});