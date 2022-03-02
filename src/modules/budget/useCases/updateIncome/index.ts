import { IncomesRepository } from "../../repositories/implementations/IncomesRepository";
import { UpdateIncomeController } from "./UpdateIncomeController";
import { UpdateIncomeUseCase } from "./UpdateIncomeUseCase";

export default (): UpdateIncomeController => {
  const incomesRepository = new IncomesRepository();

  const updateIncomeUseCase = new UpdateIncomeUseCase(incomesRepository);

  const updateIncomeController = new UpdateIncomeController(
    updateIncomeUseCase
  );

  return updateIncomeController;
};
