import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Player from "../entities/Member";
import { Repository, getRepository, DeleteResult } from "typeorm";

/***Authors***/
export default function() {
  console.log(9999999999);
  const router = Router();
  console.log(5555555555);

  // This endpoint should send back all authors in the database.
  router.get("/", async (req, res) => {
    // FIXME your code here
    let playerRepo: Repository<Player>;
    console.log(1111)

    playerRepo = getRepository(Player);
    const allPlayers = await playerRepo.find();
    // let allTeams = await teamRepository.find();
    res.json(allPlayers);
  });

  return router;
}
