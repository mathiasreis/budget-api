import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface IRequest {
  description: string;
  amount: number;
  date: string;
}

class CreateIncomeUseCase {
  constructor(private incomesRepository: IIncomesRepository) {}

  async execute({ description, amount, date }: IRequest): Promise<void> {
    const incomeAlreadyExists = await this.incomesRepository.findByDescription(
      description
    );

    if (incomeAlreadyExists) {
      throw new Error("Income already exists in the given month!");
    }

    this.incomesRepository.create({ description, amount, date });
  }
}

export { CreateIncomeUseCase };
