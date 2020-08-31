import DatabaseConnectionManager from "../connection";
import { getRepository } from "typeorm";
import { Member } from "../entities/Member";
import { Song } from "../entities/Song";
import { MemberSong} from "../entities/MemberSong";


DatabaseConnectionManager.connect()
  .then(async (connection) => {
    /**
     * Test the connection
     */
    console.log("Connection to DB established!");
    const MemberRepository = getRepository(Member);
    const SongRepository = getRepository(Song);
    const MemberSongRepository = getRepository(MemberSong);
    const members = await MemberRepository.find();
    const songs = await SongRepository.find();
    console.log("[Check] Able to detect database tables");
    console.log("Exiting...");
  })
  .catch((error) => console.log(error));
