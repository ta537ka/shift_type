import { ICompleteShiftRepository } from "../repository/ICompleteShiftRepository";

export class UpdateCompleteShift {
    private completeShiftRepository: ICompleteShiftRepository;

    constructor(completeShiftRepository: ICompleteShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }

    async execute(id: number, shift_id: number, term_id: number, day: Date) {
        const completeShift = await this.completeShiftRepository.find(id);
        completeShift.id = id;
        completeShift.shift_id = shift_id;
        completeShift.term_id = term_id;
        completeShift.day = day;
        return this.completeShiftRepository.update(completeShift);
    }
}