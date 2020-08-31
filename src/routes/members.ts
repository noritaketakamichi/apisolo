import { Router } from "express";
import { send } from "../helpers";
import DatabaseConnectionManager from "../connection";
import Member from "../entities/Member";
import { Repository, getRepository, DeleteResult, Like } from "typeorm";
import { findSourceMap } from "module";

/***Authors***/
export default function() {
  const router = Router();
  let memberRepo: Repository<Member>;
  // This endpoint should send back all authors in the database.
  router.get("/", async (req, res) => {
    // FIXME your code here

    memberRepo = getRepository(Member);
    const allMembers = await memberRepo.find();
    res.set("Access-Control-Allow-Origin", "*");
    res.json(allMembers);
  });

  //search member
  router.get("/search/:input", async (req, res) => {
    // FIXME your code here

    memberRepo = getRepository(Member);
    const input = req.params.input;
    const targetMembers = await memberRepo.find({ name: Like(`%${input}%`) });

    res.set("Access-Control-Allow-Origin", "*");
    res.json(targetMembers);
  });

  //add song
  router.post("/:name", async (req, res) => {
    // FIXME your code here

    memberRepo = getRepository(Member);
    const name = req.params.name;
    let member = new Member();
    member.name = name;

    await memberRepo.save(member);
    res.set("Access-Control-Allow-Origin", "*");
    res.json(member);
  });

  //change song
  router.patch("/:before/:after", async (req, res) => {
    // FIXME your code here

    memberRepo = getRepository(Member);
    const before = req.params.before;
    console.log(before);
    let targetSong;
    if (!isNaN(before)) {
      targetSong = await memberRepo.findOne(Number(before));
    } else {
      console.log(22222);
      const targetSongArr = await memberRepo.find({ name: before });
      targetSong = targetSongArr[0];
    }

    console.log(targetSong);

    const after = req.params.after;
    targetSong.name = after;
    res.set("Access-Control-Allow-Origin", "*");
    await memberRepo.save(targetSong);

    res.json(targetSong);
  });

  //delete member
  router.delete("/:input", async (req, res) => {
    // FIXME your code here

    memberRepo = getRepository(Member);
    const input = req.params.input;
    console.log(input);
    let targetMember;
    if (!isNaN(input)) {
      targetMember = await memberRepo.findOne(Number(input));
    } else {
      const targetMemberArr = await memberRepo.find({ name: input });
      targetMember = targetMemberArr[0];
    }

    await memberRepo.remove(targetMember);
    res.set("Access-Control-Allow-Origin", "*");
    res.json(targetMember);
  });

  return router;
}
