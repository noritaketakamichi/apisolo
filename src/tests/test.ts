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

  describe("/api/songs", () => {
    it("should respond all songs.", async () => {
      const res = await request.get("/api/songs");
      const result = JSON.parse(res.text);
      result.length.should.above(2);
    });

    it("should return searched song.", async () => {
      const res = await request.get("/api/songs/search/Sing");
      const result = JSON.parse(res.text);
      result[0].name.should.equal("Sing out!");
    });

    it("should return searched song.", async () => {
      const res = await request.get("/api/songs/search/2");
      const result = JSON.parse(res.text);
      result.name.should.equal("Sing out!");
    });

    it.only("should return selected members of the song.", async () => {
      const res = await request.get("/api/songs/search/member/2");
      const result = JSON.parse(res.text);
      console.log(result);
      result.length.should.equal(2);
    });

    xit("should add song.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.post("/api/songs/TEST!");
      const result = JSON.parse(res.text);
      result.name.should.equal("TEST!");
    });

    xit("should change song.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.patch("/api/songs/?before=4&after=Test!");
      const result = JSON.parse(res.text);
      result.name.should.equal("Test!");
    });

    xit("should change song.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.patch("/api/songs/9/Test!");
      const result = JSON.parse(res.text);
      result.name.should.equal("Test!");
    });

    xit("should delete song.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.delete("/api/songs/TEST!");
      const result = JSON.parse(res.text);
      result.name.should.equal("TEST!");
    });

    xit("should delete song.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.delete(
        "/api/songs/Kaerimichi ha toomawari shitakunaru"
      );
      const result = JSON.parse(res.text);
      result.name.should.equal("Test!");
    });
  });

  describe("/api/members", () => {
    // let request;

    it("should respond all memberss", async () => {
      const res = await request.get("/api/members");
      const result = JSON.parse(res.text);
      result.length.should.above(2);
    });

    it("should respond searched member", async () => {
      const res = await request.get("/api/members/search/Aki");
      const result = JSON.parse(res.text);
      result[0].name.should.equal("Manatsu Akimoto");
    });

    it("should respond searched member", async () => {
      const res = await request.get("/api/members/search/8");
      const result = JSON.parse(res.text);
      console.log(result);
      result.name.should.equal("Hinako Kitano");
    });

    xit("should add member.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.post("/api/members/Hanako Test");
      const result = JSON.parse(res.text);
      result.name.should.equal("Hanako Test");
    });

    xit("should change member.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.patch("/api/members/20/Test!");
      const result = JSON.parse(res.text);
      result.name.should.equal("Test!");
    });

    xit("should change member.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.patch("/api/members/Renka Iwamoto/Test!");
      const result = JSON.parse(res.text);
      result.name.should.equal("Test!");
    });

    xit("should delete member.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.delete("/api/members/21");
      const result = JSON.parse(res.text);
      result.name.should.equal("Erika Ikuta");
    });

    xit("should delete member.", async () => {
      //DBに追加は目視しかしていない
      const res = await request.delete("/api/members/Riria Ito");
      const result = JSON.parse(res.text);
      result.name.should.equal("Riria Ito");
    });
  });
});
