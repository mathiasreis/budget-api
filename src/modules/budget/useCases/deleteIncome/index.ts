import { IncomesRepository } from "../../repositories/implementations/IncomesRepository";
import { DeleteIncomeController } from "./DeleteIncomeController";
import { DeleteIncomeUseCase } from "./DeleteIncomeUseCase";

export default (): DeleteIncomeController => {
  const incomesRepository = new IncomesRepository();

  const deleteIncomeUseCase = new DeleteIncomeUseCase(incomesRepository);

  const deleteIncomeController = new DeleteIncomeController(
    deleteIncomeUseCase
  );

  return deleteIncomeController;
};
