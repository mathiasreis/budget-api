import { Request, Response } from "express";

import { ListIncomesUseCase } from "./ListIncomesUseCase";

class ListIncomesController {
  constructor(private listIncomesUseCase: ListIncomesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const incomes = await this.listIncomesUseCase.execute();
    return response.json(incomes);
  }
}

export { ListIncomesController };
