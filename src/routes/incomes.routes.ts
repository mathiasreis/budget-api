import { Router } from "express";

import createIncomeController from "../modules/budget/useCases/createIncome";
import listIncomesController from "../modules/budget/useCases/listIncomes";

const incomesRoutes = Router();

incomesRoutes.post("/", (request, response) => {
  return createIncomeController().handle(request, response);
});

incomesRoutes.get("/", (request, response) => {
  return listIncomesController().handle(request, response);
});

export { incomesRoutes };
