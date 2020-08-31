import {MigrationInterface, QueryRunner} from "typeorm";

export class seventh1598867461108 implements MigrationInterface {
    name = 'seventh1598867461108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "song" ADD "photoURL" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "photoURL"`);
    }

}
