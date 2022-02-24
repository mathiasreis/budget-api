import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("incomes")
class Income {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  date: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Income };
