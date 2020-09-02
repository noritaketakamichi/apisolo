import { MigrationInterface, QueryRunner } from "typeorm";

export class nineth1599047546974 implements MigrationInterface {
  name = "nineth1599047546974";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "member_song" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(`DROP SEQUENCE "member_song_id_seq"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE SEQUENCE "member_song_id_seq" OWNED BY "member_song"."id"`
    );
    await queryRunner.query(
      `ALTER TABLE "member_song" ALTER COLUMN "id" SET DEFAULT nextval('member_song_id_seq')`
    );
  }
}
