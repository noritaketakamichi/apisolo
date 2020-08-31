import { Router } from "express";
import SongRouter from "./songs";
import MemberRouter from "./members";

export default function() {
  console.log(11111111111111111)
  const router = Router();

  router.use("/songs", SongRouter());
  router.use("/members", MemberRouter());

  return router;
}
