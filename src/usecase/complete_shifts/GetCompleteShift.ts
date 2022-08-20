import { ICompleteShiftRepository } from "../repository/ICompleteShiftRepository";

export class GetCompleteShift {
    private completeShiftRepository: ICompleteShiftRepository;

    constructor(completeShiftRepository: ICompleteShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }

    execute(id: number) {
        return this.completeShiftRepository.find(id);
    }
}