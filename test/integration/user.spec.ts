import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/index";

const server = app.listen(3000);

console.log("Server is listenening on 3000");

var expect = chai.expect;

chai.use(chaiHttp);

describe("User Integration Test Suite", function () {
    it("Should Error on Trying to Register User with no data", function (done) {
        chai.request(server)
            .post("/user/create")
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                console.log("HALLO", err);
                console.log("Response", res.body);
                done();
            });
    });
});
