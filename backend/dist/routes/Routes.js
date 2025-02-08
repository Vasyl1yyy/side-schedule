"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = require("../controllers/Controller");
const router = express_1.default.Router();
router.get("/incomes", Controller_1.getIncomes);
router.post("/addIncomes", Controller_1.addIncome);
exports.default = router;
