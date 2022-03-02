import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
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

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Income };
