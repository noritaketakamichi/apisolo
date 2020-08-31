import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Song from "../entities/Song";
const config = require("../ormconfig");
import { Repository, getRepository, DeleteResult } from "typeorm";
import { rawListeners } from "process";

/***Quotes***/
export default function () {
  
  const router = Router();
  // const songRepository = getRepository(Song);
  // const DB = new DatabaseConnectionManager();

  // This endpoint should return all quotes in the database
  // It can take a query parameter 'authorName' to only show
  // quotes from that author
  

  router.get("/", async (req, res) => {
    // FIXME your code here
    let songRepo: Repository<Song>;

    songRepo = getRepository(Song);
    const allSongs = await songRepo.find();
    // let allSongs = await songRepository.find();
    res.json(allSongs);
  });

  return router;
}