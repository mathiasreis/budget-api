import { ICreateIncomeDTO } from "../dtos/ICreateIncomeDTO";
import { Income } from "../entities/Income";

interface IIncomesRepository {
  create(data: ICreateIncomeDTO): Promise<Income>;
  findByDescription(description: string): Promise<Income>;
  findById(id: string): Promise<Income>;
  update(income: ICreateIncomeDTO): Promise<Income>;
  listAll(): Promise<Income[]>;
  delete(id: string): Promise<void>;
}

export { IIncomesRepository };
