import { MemberSong } from "./MemberSong";
// This class is missing important decorators! Add the missing decorators to properly declare the entity.
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Song {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  photoURL: string;

  @OneToMany(
    type => MemberSong,
    member_song => member_song.song
  )
  member_song: MemberSong[];
}

export default Song;
