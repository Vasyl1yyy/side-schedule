import express from "express";
import { addIncome, getIncomes } from "../controllers/Controller";

const router = express.Router();

router.get("/incomes", getIncomes);
router.post("/addIncomes", addIncome);

export default router;
