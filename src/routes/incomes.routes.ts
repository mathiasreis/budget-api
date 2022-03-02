import { Router } from "express";

import createIncomeController from "../modules/budget/useCases/createIncome";
import getIncomeController from "../modules/budget/useCases/getIncome";
import listIncomesController from "../modules/budget/useCases/listIncomes";
import updateIncomeController from "../modules/budget/useCases/updateIncome";

const incomesRoutes = Router();

incomesRoutes.post("/", (request, response) => {
  return createIncomeController().handle(request, response);
});

incomesRoutes.get("/", (request, response) => {
  return listIncomesController().handle(request, response);
});

incomesRoutes.get("/:id", (request, response) => {
  return getIncomeController().handle(request, response);
});

incomesRoutes.put("/:id", (request, response) => {
  return updateIncomeController().handle(request, response);
});

export { incomesRoutes };
