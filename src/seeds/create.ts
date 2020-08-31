import { Factory, Seeder } from "typeorm-seeding";
import { Connection, Not, IsNull } from "typeorm";
import { Member } from "../entities/Member";
import { Song } from "../entities/Song";
const members = require('./members');
const songs = require('./songs');

export default class CreateAuthorsAndQuotes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {


    //delete team
    await connection
      .createQueryBuilder()
      .delete()
      .from(Member)
      .where({ id: Not(IsNull()) })
      .execute();

    //delete team
    await connection
      .createQueryBuilder()
      .delete()
      .from(Song)
      .where({ id: Not(IsNull()) })
      .execute();

    //insert team
    //Team first!!
    //cause many to one relation
    await connection
      .createQueryBuilder()
      .insert()
      .into(Member)
      .values(members)
      .execute()


    //inser players
    await connection
      .createQueryBuilder()
      .insert()
      .into(Song)
      .values(songs)
      .execute()
  }

}
