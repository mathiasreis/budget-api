import { IncomesRepository } from "../../repositories/implementations/IncomesRepository";
import { CreateIncomeController } from "./CreateIncomeController";
import { CreateIncomeUseCase } from "./CreateIncomeUseCase";

export default (): CreateIncomeController => {
  const incomesRepository = new IncomesRepository();

  const createIncomeUseCase = new CreateIncomeUseCase(incomesRepository);

  const createIncomeController = new CreateIncomeController(
    createIncomeUseCase
  );

  return createIncomeController;
};
