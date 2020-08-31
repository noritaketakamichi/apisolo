import {MigrationInterface, QueryRunner} from "typeorm";

export class third1598844858435 implements MigrationInterface {
    name = 'third1598844858435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "player" ADD "birthday" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "player" ADD "birthday" integer`);
    }

}
