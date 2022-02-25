import { IncomesRepository } from "../../repositories/implementations/IncomesRepository";
import { ListIncomesController } from "./ListIncomesController";
import { ListIncomesUseCase } from "./ListIncomesUseCase";

export default (): ListIncomesController => {
  const incomesRepository = new IncomesRepository();

  const listIncomesUseCase = new ListIncomesUseCase(incomesRepository);

  const listIncomesController = new ListIncomesController(listIncomesUseCase);

  return listIncomesController;
};
