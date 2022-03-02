import { getRepository, Repository, UpdateResult } from "typeorm";

import { ICreateIncomeDTO } from "../../dtos/ICreateIncomeDTO";
import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../IIncomesRepository";

class IncomesRepository implements IIncomesRepository {
  private repository: Repository<Income>;

  constructor() {
    this.repository = getRepository(Income);
  }

  async create({
    description,
    amount,
    date,
  }: ICreateIncomeDTO): Promise<Income> {
    const income = this.repository.create({ description, amount, date });

    await this.repository.save(income);

    return income;
  }

  async findByDescription(description: string): Promise<Income> {
    const income = await this.repository.findOne({ description });

    return income;
  }

  async findById(id: string): Promise<Income> {
    const income = await this.repository.findOne({ id });

    return income;
  }

  async update(income): Promise<Income> {
    return this.repository.save(income);
  }

  async listAll(): Promise<Income[]> {
    const incomes = await this.repository.find();
    return incomes;
  }
}

export { IncomesRepository };
