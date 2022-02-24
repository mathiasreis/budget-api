import { getRepository, Repository } from "typeorm";

import { ICreateIncomeDTO } from "../../dtos/ICreateIncomeDTO";
import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../IIncomesRepository";

class IncomesRepository implements IIncomesRepository {
  private repository: Repository<Income>;

  constructor() {
    this.repository = getRepository(Income);
  }

  async create({ description, amount, date }: ICreateIncomeDTO): Promise<void> {
    const income = this.repository.create({ description, amount, date });

    await this.repository.save(income);
  }

  async findByDescription(description: string): Promise<Income> {
    const income = this.repository.findOne({ description });

    return income;
  }
}

export { IncomesRepository };
