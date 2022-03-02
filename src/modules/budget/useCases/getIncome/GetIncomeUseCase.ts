import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface IRequest {
  id: string;
}

class GetIncomeUseCase {
  constructor(private incomesRepository: IIncomesRepository) {}

  async execute({ id }: IRequest): Promise<Income> {
    const income = await this.incomesRepository.findById(id);

    if (!income) {
      throw new Error("Income not found");
    }

    return income;
  }
}

export { GetIncomeUseCase };
