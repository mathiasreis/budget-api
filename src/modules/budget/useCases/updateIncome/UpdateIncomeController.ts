import { Request, Response } from "express";

import { UpdateIncomeUseCase } from "./UpdateIncomeUseCase";

class UpdateIncomeController {
  constructor(private updateIncomeUseCase: UpdateIncomeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, amount, date } = request.body;

    try {
      const income = await this.updateIncomeUseCase.execute({
        id,
        description,
        amount,
        date,
      });
      return response.status(201).send(income);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateIncomeController };
