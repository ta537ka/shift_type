"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompleteShift = void 0;
class GetCompleteShift {
    constructor(completeShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }
    execute(id) {
        return this.completeShiftRepository.find(id);
    }
}
exports.GetCompleteShift = GetCompleteShift;
