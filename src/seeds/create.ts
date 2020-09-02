import { Factory, Seeder } from "typeorm-seeding";
import { Connection, Not, IsNull } from "typeorm";
import { Member } from "../entities/Member";
import { Song } from "../entities/Song";
import { MemberSong } from "../entities/MemberSong";
const members = require("./members");
const songs = require("./songs");
const membersong = require("./membersong");

export default class CreateAuthorsAndQuotes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    //delete membersong
    await connection
      .createQueryBuilder()
      .delete()
      .from(MemberSong)
      .where({ id: Not(IsNull()) })
      .execute();

    //delete member
    await connection
      .createQueryBuilder()
      .delete()
      .from(Member)
      .where({ id: Not(IsNull()) })
      .execute();

    //delete song
    await connection
      .createQueryBuilder()
      .delete()
      .from(Song)
      .where({ id: Not(IsNull()) })
      .execute();

    //insert member
    await connection
      .createQueryBuilder()
      .insert()
      .into(Member)
      .values(members)
      .execute();

    //insert songs
    await connection
      .createQueryBuilder()
      .insert()
      .into(Song)
      .values(songs)
      .execute();

    //insert membersong
    await connection
      .createQueryBuilder()
      .insert()
      .into(MemberSong)
      .values(membersong)
      .execute();
  }
}
