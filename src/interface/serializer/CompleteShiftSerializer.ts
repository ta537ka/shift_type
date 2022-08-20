import { CompleteShift } from "../../domain/CompleteShift";

const _serializeSingleCompleteShift = (completeShift: CompleteShift) => {
    return {
        id: completeShift.id,
        shift_id: completeShift.shift_id,
        term_id: completeShift.term_id,
        day: completeShift.day
    }
}

export class CompleteShiftSerializer {
    serialize(data: any) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleCompleteShift);
        }
        return _serializeSingleCompleteShift(data);
    }
}