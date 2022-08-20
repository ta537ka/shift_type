import { CompleteShift } from "../../domain/CompleteShift";
import { ICompleteShiftRepository } from "../repository/ICompleteShiftRepository";

export class CreateCompleteShift {
    private completeShiftRepository: ICompleteShiftRepository;

    constructor(completeShiftRepository: ICompleteShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }

    execute(shift_id: number, term_id: number, day: Date) {
        const completeShift = new CompleteShift(shift_id, term_id, day);
        return this.completeShiftRepository.persist(completeShift);
    }
}