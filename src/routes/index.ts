import { Router } from "express";
import TeamRouter from "./teams";
import PlayerRouter from "./players";

export default function() {
  console.log(11111111111111111)
  const router = Router();

  router.use("/teams", TeamRouter());
  router.use("/players", PlayerRouter());

  return router;
}
