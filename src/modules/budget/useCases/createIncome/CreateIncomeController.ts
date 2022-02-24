import { Request, Response } from "express";

import { CreateIncomeUseCase } from "./CreateIncomeUseCase";

class CreateIncomeController {
  constructor(private createIncomeUseCase: CreateIncomeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, amount, date } = request.body;

    try {
      const income = await this.createIncomeUseCase.execute({
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

export { CreateIncomeController };
