"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIncome = exports.getIncomes = void 0;
const Model_1 = require("../models/Model");
const getIncomes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const incomes = yield Model_1.model.getIncome();
        res.json(incomes);
    }
    catch (error) {
        res.status(500).json({ error: "Не вдалося отримати даних" });
    }
});
exports.getIncomes = getIncomes;
const addIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { value, summa, description } = req.body;
        const incomes = yield Model_1.model.create(value, summa, description);
        res.json(incomes);
    }
    catch (error) {
        res.status(500).json({ error: "Не вдалося додати дані" });
    }
});
exports.addIncome = addIncome;
