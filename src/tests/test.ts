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


  describe("GET /api/songs without query params", () => {
    // let request;

    
    it("should respond all songs.", async () => {
      const res = await request.get("/api/songs");
      const result = JSON.parse(res.text);
      result.length.should.above(2);
    });

    it("should return searched song.", async () => {
      const res = await request.get("/api/songs/search/Sing");
      const result = JSON.parse(res.text);
      result.should.equal("Sing out!");
    });
  });

  describe("GET /api/players without query members", () => {
    // let request;

    it("should respond all memberss", async () => {
      const res = await request.get("/api/members");
      const result = JSON.parse(res.text);
      result.length.should.above(2);
    });

    it("should respond searched member", async () => {
      const res = await request.get("/api/members/search/Aki");
      const result = JSON.parse(res.text);
      result.should.equal("Manatsu Akimoto");
    });
  });
});
