"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCompleteShifts = void 0;
class ListCompleteShifts {
    constructor(completeShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }
    execute() {
        return this.completeShiftRepository.findAll();
    }
}
exports.ListCompleteShifts = ListCompleteShifts;
