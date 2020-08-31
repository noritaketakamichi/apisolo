import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Member from "../entities/Member";
import { Repository, getRepository, DeleteResult,Like } from "typeorm";
import { findSourceMap } from "module";

/***Authors***/
export default function () {
  const router = Router();
  let memberRepo: Repository<Member>;
  // This endpoint should send back all authors in the database.
  router.get("/", async (req, res) => {
    // FIXME your code here

    memberRepo = getRepository(Member);
    const allMembers = await memberRepo.find();
    res.json(allMembers);
  });

  //search member
  router.get("/search/:input", async (req, res) => {
    // FIXME your code here
    
    memberRepo = getRepository(Member);
    const input = req.params.input;
    const targetMembers = await memberRepo
      .find({name: Like(`%${input}%`)});
    res.json(targetMembers[0]['name']);
  });

  return router;
}
