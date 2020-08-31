import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Song from "../entities/Song";
const config = require("../ormconfig");
import { Repository, getRepository, DeleteResult, Like } from "typeorm";
import { rawListeners } from "process";

/***Quotes***/
export default function () {

  const router = Router();

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
    res.json(targetSongs[0]);
  });

  //add song
  router.post("/:name", async (req, res) => {
    // FIXME your code here

    songRepo = getRepository(Song);
    const name = req.params.name;
    let song = new Song();
    song.name = name;

    await songRepo.save(song);

    res.json(song);
  });

    //change song
    router.patch("/:before/:after", async (req, res) => {
      // FIXME your code here
      
      songRepo = getRepository(Song);
      const before = req.params.before;
      console.log(before);
      let targetSong;
      if (!isNaN(before)) {
        
        targetSong = await songRepo.findOne(Number(before))
      } else {
        console.log(22222)
        const targetSongArr = await songRepo.find({ name: before });
        targetSong=targetSongArr[0];
      }
  
      console.log(targetSong)

      const after = req.params.after;
      targetSong.name=after;
  
      await songRepo.save(targetSong);
  
      res.json(targetSong);
    });

  return router;
}