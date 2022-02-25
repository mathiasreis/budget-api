import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface IRequest {
  description: string;
  amount: number;
  date: string;
}

class CreateIncomeUseCase {
  constructor(private incomesRepository: IIncomesRepository) {}

  async execute({
    description,
    amount,
    date,
  }: IRequest): Promise<Income | Error> {
    const incomeAlreadyExists = await this.incomesRepository.findByDescription(
      description
    );

    if (incomeAlreadyExists) {
      throw new Error("Income already exists in the given month!");
    }

    return this.incomesRepository.create({ description, amount, date });
  }
}

export { CreateIncomeUseCase };
