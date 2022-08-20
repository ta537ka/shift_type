import { ICompleteShiftRepository } from "../repository/ICompleteShiftRepository";

export class ListCompleteShifts {
    private completeShiftRepository: ICompleteShiftRepository;

    constructor(completeShiftRepository: ICompleteShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }

    execute() {
        return this.completeShiftRepository.findAll();
    }
}