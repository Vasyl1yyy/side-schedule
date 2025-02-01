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
exports.addIncome = addIncome;
exports.getIncome = getIncome;
exports.addSchedule = addSchedule;
const knex_1 = require("./knex");
function addIncome(value, summa, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date();
        yield (0, knex_1.db)("income").insert({ value, summa, description, date });
    });
}
function getIncome() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, knex_1.db)("income").select("*");
    });
}
function addSchedule(num, cash, tips) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date();
        yield (0, knex_1.db)("schedule").insert({ num, cash, tips, date });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const income = yield getIncome();
        console.log(income[0].summa);
    });
}
main();
