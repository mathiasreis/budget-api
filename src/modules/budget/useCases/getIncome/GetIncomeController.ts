import { Request, Response } from "express";

import { ICreateIncomeDTO } from "../../dtos/ICreateIncomeDTO";
import { GetIncomeUseCase } from "./GetIncomeUseCase";

class GetIncomeController {
  constructor(private getIncomeUseCase: GetIncomeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const { description, amount, date } = await this.getIncomeUseCase.execute(
        { id }
      );
      return response.status(200).json({
        description,
        amount,
        date,
      });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { GetIncomeController };
