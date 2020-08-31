import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Song from "../entities/Song";
const config = require("../ormconfig");
import { Repository, getRepository, DeleteResult,Like } from "typeorm";
import { rawListeners } from "process";

/***Quotes***/
export default function () {

  const router = Router();
  // const songRepository = getRepository(Song);
  // const DB = new DatabaseConnectionManager();

  // This endpoint should return all quotes in the database
  // It can take a query parameter 'authorName' to only show
  // quotes from that author

  let songRepo: Repository<Song>;
  router.get("/", async (req, res) => {
    // FIXME your code here

    songRepo = getRepository(Song);
    const allSongs = await songRepo.find();
    res.json(allSongs);
  });

  //search song
  router.get("/search/:input", async (req, res) => {
    // FIXME your code here

    songRepo = getRepository(Song);
    const input = req.params.input;
    const targetSongs = await songRepo
      .find({ name: Like(`%${input}%`) });
    res.json(targetSongs[0]['name']);
  });

  return router;
}