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
exports.UpdateShift = void 0;
class UpdateShift {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(id, term_id, status_id, day) {
        return __awaiter(this, void 0, void 0, function* () {
            const shift = yield this.shiftRepository.find(id);
            shift.id = id;
            shift.term_id = term_id;
            shift.status_id = status_id;
            shift.day = day;
            return this.shiftRepository.update(shift);
        });
    }
}
exports.UpdateShift = UpdateShift;
