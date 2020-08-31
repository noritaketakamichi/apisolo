import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Member from "../entities/Member";
import { Repository, getRepository, DeleteResult } from "typeorm";

/***Authors***/
export default function() {
  const router = Router();

  // This endpoint should send back all authors in the database.
  router.get("/", async (req, res) => {
    // FIXME your code here
    let memberRepo: Repository<Member>;
    console.log(1111)

    memberRepo = getRepository(Member);
    const allMembers = await memberRepo.find();
    // let allTeams = await teamRepository.find();
    res.json(allMembers);
  });

  return router;
}
