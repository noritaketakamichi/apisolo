import { Member } from "./Member";
import { Song } from "./Song";
// This class is missing important decorators! Add the missing decorators to properly declare the entity.
import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class MemberSong {
  @PrimaryColumn()
  id: number;

  @ManyToOne(
    type => Member,
    member => member.id
  )
  member: Member;

  @ManyToOne(
    type => Song,
    song => song.id
  )
  song: Song;
}

export default MemberSong;
