import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface IRequest {
  id: string;
  description: string;
  amount: number;
  date: string;
}

class UpdateIncomeUseCase {
  constructor(private incomesRepository: IIncomesRepository) {}

  async execute({
    id,
    description,
    amount,
    date,
  }: IRequest): Promise<Income | Error> {
    const income = await this.incomesRepository.findById(id);

    if (!income) {
      throw new Error("Income not found");
    }

    income.description = description || income.description;
    income.amount = amount || income.amount;
    income.date = date || income.date;

    return this.incomesRepository.update(income);
  }
}

export { UpdateIncomeUseCase };
