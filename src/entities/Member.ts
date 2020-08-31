import { MemberSong } from "./MemberSong";

// This class is missing important decorators! Add the missing decorators to properly declare the entity.
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  photoURL: string;
}

export default Member;