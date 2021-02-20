import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDbCreation1613821870679 implements MigrationInterface {
    name = 'InitialDbCreation1613821870679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mood_entity" DROP CONSTRAINT "FK_1db1c46502f11c218d6a2e77b23"`);
        await queryRunner.query(`ALTER TABLE "mood_entity" DROP COLUMN "enteredAt"`);
        await queryRunner.query(`ALTER TABLE "mood_entity" ADD "enteredAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "mood_entity" ADD CONSTRAINT "FK_1036be34829cf52b081b0b9b751" FOREIGN KEY ("userUuid") REFERENCES "user_entity"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mood_entity" DROP CONSTRAINT "FK_1036be34829cf52b081b0b9b751"`);
        await queryRunner.query(`ALTER TABLE "mood_entity" DROP COLUMN "enteredAt"`);
        await queryRunner.query(`ALTER TABLE "mood_entity" ADD "enteredAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mood_entity" ADD CONSTRAINT "FK_1db1c46502f11c218d6a2e77b23" FOREIGN KEY ("userUuid") REFERENCES "user_entity"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
