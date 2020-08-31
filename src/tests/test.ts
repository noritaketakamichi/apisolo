const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
import DatabaseConnectionManager from "../connection";
import { createServer } from "../server";

chai.should();
const expect = chai.expect;

const server = createServer();

describe("GET /api", () => {
  let request;

  before(async () => {
    await DatabaseConnectionManager.connect();
  });

  beforeEach(async () => {
    request = chai.request(server);
  });


  describe("GET /api/teams without query params", () => {
    // let request;

    // console.log("test");
    it("should respond all teams.", async () => {
      const res = await request.get("/api/teams");
      // console.log(res)
      const result = JSON.parse(res.text);
      console.log(result);
      result.length.should.deep.equal(3);
    });
  });

  describe("GET /api/players without query params", () => {
    // let request;

    // console.log("test");
    it("should respond all players", async () => {
      console.log("2nd test")
      const res = await request.get("/api/players");
      // console.log(res)
      const result = JSON.parse(res.text);
      console.log(result);
      result.length.should.deep.equal(3);
    });
  });
});
