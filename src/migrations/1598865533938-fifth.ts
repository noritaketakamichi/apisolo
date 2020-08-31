import {MigrationInterface, QueryRunner} from "typeorm";

export class fifth1598865533938 implements MigrationInterface {
    name = 'fifth1598865533938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "member" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "photoURL" character varying, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "song" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_baaa977f861cce6ff954ccee285" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_song" ("id" SERIAL NOT NULL, "memberIdId" integer, "songIdId" integer, CONSTRAINT "PK_0a12d6e1c66cb5d754a291a6bd9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD CONSTRAINT "FK_21ebbcbe90b3f43c9a9ee0e7742" FOREIGN KEY ("memberIdId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_song" ADD CONSTRAINT "FK_f90f391878f65411ab2dcdb179f" FOREIGN KEY ("songIdId") REFERENCES "song"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member_song" DROP CONSTRAINT "FK_f90f391878f65411ab2dcdb179f"`);
        await queryRunner.query(`ALTER TABLE "member_song" DROP CONSTRAINT "FK_21ebbcbe90b3f43c9a9ee0e7742"`);
        await queryRunner.query(`DROP TABLE "member_song"`);
        await queryRunner.query(`DROP TABLE "song"`);
        await queryRunner.query(`DROP TABLE "member"`);
    }

}
