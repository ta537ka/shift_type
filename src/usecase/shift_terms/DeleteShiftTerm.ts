import { IShiftTermRepository } from "../repository/IShiftTermRepository";

export class DeleteShiftTerm {
    private shiftRepository: IShiftTermRepository;

    constructor(shiftRepository: IShiftTermRepository) {
        this.shiftRepository = shiftRepository;
    }

    async execute(id: number) {
        const shiftTerm = await this.shiftRepository.delete(id);
        return shiftTerm;
    }
}