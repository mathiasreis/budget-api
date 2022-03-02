import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface IRequest {
  id: string;
}
class DeleteIncomeUseCase {
  constructor(private incomesRepository: IIncomesRepository) {}

  async execute({ id }: IRequest): Promise<Error | void> {
    const income = await this.incomesRepository.findById(id);

    if (!income) {
      throw new Error("Income not found!");
    }

    await this.incomesRepository.delete(id);
  }
}

export { DeleteIncomeUseCase };
