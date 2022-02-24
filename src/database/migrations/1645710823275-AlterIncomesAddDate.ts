import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterIncomesAddDate1645710823275 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "incomes",
      new TableColumn({
        name: "date",
        type: "date",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("incomes", "date");
  }
}
