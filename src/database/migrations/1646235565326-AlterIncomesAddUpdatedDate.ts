import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterIncomesAddUpdatedDate1646235565326
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "incomes",
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("incomes", "updated_at");
  }
}
