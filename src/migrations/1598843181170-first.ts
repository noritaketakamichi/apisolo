import {MigrationInterface, QueryRunner} from "typeorm";

export class first1598843181170 implements MigrationInterface {
    name = 'first1598843181170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "player" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "familyname" character varying NOT NULL, "team" character varying NOT NULL, "photoURL" character varying NOT NULL, "weight" character varying NOT NULL, "height" character varying NOT NULL, "position" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "stadium" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "player"`);
    }

}
