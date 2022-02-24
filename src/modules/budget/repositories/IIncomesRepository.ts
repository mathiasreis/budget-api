import { ICreateIncomeDTO } from "../dtos/ICreateIncomeDTO";
import { Income } from "../entities/Income";

interface IIncomesRepository {
  create(data: ICreateIncomeDTO): Promise<void>;
  findByDescription(description: string): Promise<Income>;
}

export { IIncomesRepository };
