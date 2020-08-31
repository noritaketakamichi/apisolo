import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Team from "../entities/Song";
const config = require("../ormconfig");
import { Repository, getRepository, DeleteResult } from "typeorm";
import { rawListeners } from "process";

/***Quotes***/
export default function () {
  
  const router = Router();
  // const teamRepository = getRepository(Team);
  // const DB = new DatabaseConnectionManager();

  // This endpoint should return all quotes in the database
  // It can take a query parameter 'authorName' to only show
  // quotes from that author
  

  router.get("/", async (req, res) => {
    // FIXME your code here
    let teamRepo: Repository<Team>;

    teamRepo = getRepository(Team);
    const allTeams = await teamRepo.find();
    // let allTeams = await teamRepository.find();
    res.json(allTeams);
  });

  return router;
}