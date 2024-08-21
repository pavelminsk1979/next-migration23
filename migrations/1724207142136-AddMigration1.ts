import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMigration11724207142136 implements MigrationInterface {
  name = 'AddMigration11724207142136';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usertyp" ADD "hobby" character varying `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "usertyp" DROP COLUMN "hobby"`);
  }
}
