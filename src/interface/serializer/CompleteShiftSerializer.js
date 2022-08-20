"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteShiftSerializer = void 0;
const _serializeSingleCompleteShift = (completeShift) => {
    return {
        id: completeShift.id,
        shift_id: completeShift.shift_id,
        term_id: completeShift.term_id,
        day: completeShift.day
    };
};
class CompleteShiftSerializer {
    serialize(data) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleCompleteShift);
        }
        return _serializeSingleCompleteShift(data);
    }
}
exports.CompleteShiftSerializer = CompleteShiftSerializer;
