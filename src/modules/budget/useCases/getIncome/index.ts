import { IncomesRepository } from "../../repositories/implementations/IncomesRepository";
import { GetIncomeController } from "./GetIncomeController";
import { GetIncomeUseCase } from "./GetIncomeUseCase";

export default (): GetIncomeController => {
  const incomesRepository = new IncomesRepository();

  const getIncomeUseCase = new GetIncomeUseCase(incomesRepository);

  const getIncomeController = new GetIncomeController(getIncomeUseCase);

  return getIncomeController;
};
