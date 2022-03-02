import { ICreateIncomeDTO } from "../dtos/ICreateIncomeDTO";
import { Income } from "../entities/Income";

interface IIncomesRepository {
  create(data: ICreateIncomeDTO): Promise<Income>;
  findByDescription(description: string): Promise<Income>;
  findById(id: string): Promise<Income>;
  listAll(): Promise<Income[]>;
}

export { IIncomesRepository };
