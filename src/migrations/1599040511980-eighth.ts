import { MigrationInterface, QueryRunner } from "typeorm";

export class eighth1599040511980 implements MigrationInterface {
  name = "eighth1599040511980";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "member_song" DROP CONSTRAINT "FK_810cd2389fbd1127db62ba53994"`
    );
    await queryRunner.query(
      `ALTER TABLE "member" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(`DROP SEQUENCE "member_id_seq"`);
    await queryRunner.query(
      `ALTER TABLE "member_song" DROP CONSTRAINT "FK_8a8d7b0614c08eb7a229b20935b"`
    );
    await queryRunner.query(
      `ALTER TABLE "song" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(`DROP SEQUENCE "song_id_seq"`);
    await queryRunner.query(
      `ALTER TABLE "member_song" ADD CONSTRAINT "FK_810cd2389fbd1127db62ba53994" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "member_song" ADD CONSTRAINT "FK_8a8d7b0614c08eb7a229b20935b" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "member_song" DROP CONSTRAINT "FK_8a8d7b0614c08eb7a229b20935b"`
    );
    await queryRunner.query(
      `ALTER TABLE "member_song" DROP CONSTRAINT "FK_810cd2389fbd1127db62ba53994"`
    );
    await queryRunner.query(
      `CREATE SEQUENCE "song_id_seq" OWNED BY "song"."id"`
    );
    await queryRunner.query(
      `ALTER TABLE "song" ALTER COLUMN "id" SET DEFAULT nextval('song_id_seq')`
    );
    await queryRunner.query(
      `ALTER TABLE "member_song" ADD CONSTRAINT "FK_8a8d7b0614c08eb7a229b20935b" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `CREATE SEQUENCE "member_id_seq" OWNED BY "member"."id"`
    );
    await queryRunner.query(
      `ALTER TABLE "member" ALTER COLUMN "id" SET DEFAULT nextval('member_id_seq')`
    );
    await queryRunner.query(
      `ALTER TABLE "member_song" ADD CONSTRAINT "FK_810cd2389fbd1127db62ba53994" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
