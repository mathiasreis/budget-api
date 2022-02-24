import { Router } from "express";

import { incomesRoutes } from "./incomes.routes";

const router = Router();

router.use("/incomes", incomesRoutes);

export { router };
