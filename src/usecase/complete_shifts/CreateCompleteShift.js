"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompleteShift = void 0;
const CompleteShift_1 = require("../../domain/CompleteShift");
class CreateCompleteShift {
    constructor(completeShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }
    execute(shift_id, term_id, day) {
        const completeShift = new CompleteShift_1.CompleteShift(shift_id, term_id, day);
        return this.completeShiftRepository.persist(completeShift);
    }
}
exports.CreateCompleteShift = CreateCompleteShift;
