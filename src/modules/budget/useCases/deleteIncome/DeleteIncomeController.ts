import { Request, Response } from "express";

import { DeleteIncomeUseCase } from "./DeleteIncomeUseCase";

class DeleteIncomeController {
  constructor(private deleteIncomeUseCase: DeleteIncomeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteIncomeUseCase.execute({ id });
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteIncomeController };
