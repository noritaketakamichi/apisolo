import {MigrationInterface, QueryRunner} from "typeorm";

export class fourth1598850398376 implements MigrationInterface {
    name = 'fourth1598850398376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0"`);
        await queryRunner.query(`ALTER TABLE "player" RENAME COLUMN "teamId" TO "team"`);
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "team"`);
        await queryRunner.query(`ALTER TABLE "player" ADD "team" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "team"`);
        await queryRunner.query(`ALTER TABLE "player" ADD "team" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" RENAME COLUMN "team" TO "teamId"`);
        await queryRunner.query(`ALTER TABLE "player" ADD CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
