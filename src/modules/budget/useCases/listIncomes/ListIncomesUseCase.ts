import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

class ListIncomesUseCase {
  constructor(private incomesRepository: IIncomesRepository) {}

  async execute(): Promise<Income[]> {
    const incomes = await this.incomesRepository.listAll();
    return incomes;
  }
}

export { ListIncomesUseCase };
