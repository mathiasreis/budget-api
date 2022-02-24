import { Router } from "express";

import createIncomeController from "../modules/budget/useCases/createIncome";

const incomesRoutes = Router();

incomesRoutes.post("/", (request, response) => {
  return createIncomeController().handle(request, response);
});

export { incomesRoutes };
