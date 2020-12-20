import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/index";
import { TestPrepper, ITestProps } from "../../src/database/scripts";

const server = app.listen(3000);

console.log("Server is listenening on 3000");

var expect = chai.expect;

chai.use(chaiHttp);

var globalData: ITestProps;
const testPrepper = new TestPrepper();

describe("User Integration Test Suite", function () {
    before(async () => {
        globalData = await testPrepper.prepareForTest();
    });

    // =========== CREATE Tests ==========
    it("It should create a new User", function (done) {
        chai.request(server)
            .post("/user")
            .send({
                name: "Marvin",
            })
            .end(function (_err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("name");
                expect(res.body).to.have.property("id");
                done();
            });
    });

    it("It should Fail to create a user without a name", function (done) {
        chai.request(server)
            .post("/user")
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(err).to.not.be.undefined;
                done();
            });
    });

    it("It should Fail to create a user too short name", function (done) {
        chai.request(server)
            .post("/user")
            .send({
                name: "ll",
            })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(err).to.not.be.undefined;
                done();
            });
    });

    // =========== DELETE Tests ==========
    it("It should delete a User", function (done) {
        chai.request(server)
            .delete("/user")
            .send({
                userId: globalData.userToDelete.id,
            })
            .end(function (_err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("It should Fail with 400 if no user Id is provided", function (done) {
        chai.request(server)
            .delete("/user")
            .send()
            .end(function (_err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("It should Fail with 404 when a non valid user Id is provided", function (done) {
        chai.request(server)
            .delete("/user")
            .send({ userId: 567192 })
            .end(function (_err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });

    // =========== GET Tests ==========
    it("It should get a User", function (done) {
        chai.request(server)
            .get("/user")
            .send({
                userId: globalData.userToGet.id,
            })
            .end(function (_err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("name");
                expect(res.body).to.have.property("id");
                done();
            });
    });

    it("It should Fail with 400 if no userId is provided", function (done) {
        chai.request(server)
            .get("/user")
            .send()
            .end(function (_err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("It should Fail with 404 when unkown user id is provided", function (done) {
        chai.request(server)
            .get("/user")
            .send({
                userId: 29374623,
            })
            .end(function (_err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });

    after(async () => {
        try {
            await testPrepper.cleanUpAfterTest();
        } catch (error) {
            console.log("Error on Clean Up =>", error);
        }
    });
});
