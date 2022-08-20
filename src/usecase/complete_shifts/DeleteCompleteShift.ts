import { ICompleteShiftRepository } from "../repository/ICompleteShiftRepository";

export class DeleteCompleteShift {
    private completeShiftRepository: ICompleteShiftRepository;

    constructor(completeShiftRepository: ICompleteShiftRepository) {
        this.completeShiftRepository = completeShiftRepository;
    }
    async execute(id: number) {
        const completeShift = await this.completeShiftRepository.delete(id);
        return completeShift;
    }
}