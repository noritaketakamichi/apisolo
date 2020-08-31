import {MigrationInterface, QueryRunner} from "typeorm";

export class second1598844627421 implements MigrationInterface {
    name = 'second1598844627421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "team"`);
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "player" ADD "birthday" integer`);
        await queryRunner.query(`ALTER TABLE "player" ADD "teamId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "weight" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "height" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "photoURL" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ADD CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0"`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "photoURL" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "height" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "weight" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "teamId"`);
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "player" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ADD "team" character varying NOT NULL`);
    }

}
