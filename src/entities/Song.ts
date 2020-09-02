// import { Player } from "./Member";
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
}

export default Song;
