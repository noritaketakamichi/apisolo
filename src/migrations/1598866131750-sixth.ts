import {MigrationInterface, QueryRunner} from "typeorm";

export class sixth1598866131750 implements MigrationInterface {
    name = 'sixth1598866131750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member_song" DROP CONSTRAINT "FK_21ebbcbe90b3f43c9a9ee0e7742"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP CONSTRAINT "FK_f90f391878f65411ab2dcdb179f"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP COLUMN "memberIdId"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP COLUMN "songIdId"`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD "memberId" integer`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD "songId" integer`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD CONSTRAINT "FK_810cd2389fbd1127db62ba53994" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD CONSTRAINT "FK_8a8d7b0614c08eb7a229b20935b" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member_song" DROP CONSTRAINT "FK_8a8d7b0614c08eb7a229b20935b"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP CONSTRAINT "FK_810cd2389fbd1127db62ba53994"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP COLUMN "songId"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP COLUMN "memberId"`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD "songIdId" integer`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD "memberIdId" integer`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD CONSTRAINT "FK_f90f391878f65411ab2dcdb179f" FOREIGN KEY ("songIdId") REFERENCES "song"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD CONSTRAINT "FK_21ebbcbe90b3f43c9a9ee0e7742" FOREIGN KEY ("memberIdId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
