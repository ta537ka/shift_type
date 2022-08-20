import { CompleteShiftSerializer } from "../serializer/CompleteShiftSerializer";
import { CompleteShiftRepository } from "../database/CompleteShiftRepository";
import { ListCompleteShifts } from "../../usecase/complete_shifts/ListCompleteShifts";
import { GetCompleteShift } from "../../usecase/complete_shifts/GetCompleteShift";
import { CreateCompleteShift } from "../../usecase/complete_shifts/CreateCompleteShift";
import { UpdateCompleteShift } from "../../usecase/complete_shifts/UpdateCompleteShift";
import { DeleteCompleteShift } from "../../usecase/complete_shifts/DeleteCompleteShift";
import { IDBConnection } from "../database/IDBConnection";

export class CompleteShiftController {
    private completeShiftSerializer: CompleteShiftSerializer;
    private completeShiftRepository: CompleteShiftRepository

    constructor(dbConnection: IDBConnection) {
        this.completeShiftSerializer = new CompleteShiftSerializer();
        this.completeShiftRepository = new CompleteShiftRepository(dbConnection);
    }

    async findAll(req: any, res: any) {
        const useCase = new ListCompleteShifts(this.completeShiftRepository);
        const results = await useCase.execute();
        return this.completeShiftSerializer.serialize(results);
    }

    async findCompleteShift(req: any, res: any) {
        const id = req.params.id
        const useCase = new GetCompleteShift(this.completeShiftRepository);
        const result = await useCase.execute(id);
        return this.completeShiftSerializer.serialize(result);
    }

    async createCompleteShift(req: any, res: any) {
        const { shift_id, term_id, day } = req.body;
        const useCase = new CreateCompleteShift(this.completeShiftRepository);
        const result = await useCase.execute(shift_id, term_id, day);
        return this.completeShiftSerializer.serialize(result);
    }

    async updateCompleteShift(req: any, res: any) {
        const id = req.params.id;
        const { shift_id, term_id, day } = req.body;
        const useCase = new UpdateCompleteShift(this.completeShiftRepository);
        const result = await useCase.execute(id, shift_id, term_id, day);
        return this.completeShiftSerializer.serialize(result);
    }

    async deleteCompleteShift(req: any, res: any) {
        const id = req.params.id;
        const useCase = new DeleteCompleteShift(this.completeShiftRepository);
        const result = await useCase.execute(id);
        return this.completeShiftSerializer.serialize(result);
    }
}