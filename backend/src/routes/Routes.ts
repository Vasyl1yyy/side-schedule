import express from "express";
import { getIncomes } from "../controllers/Controller";

const router = express.Router();

router.get("/incomes", getIncomes);

export default router;
