import { CompleteShift } from "../../domain/CompleteShift";
import { ICompleteShiftRepository } from "../../usecase/repository/ICompleteShiftRepository";
import { IDBConnection } from "./IDBConnection";

export class CompleteShiftRepository extends ICompleteShiftRepository {
    private connection: any;

    constructor(connection: IDBConnection) {
        super();
        this.connection = connection;
    }

    private convertModel(r: any) {
        const completeShift = new CompleteShift();
        completeShift.id = r.id;
        completeShift.shift_id = r.shift_id;
        completeShift.term_id = r.term_id;
        completeShift.day = r.day;
        return completeShift;
    }

    async find(id: number): Promise<CompleteShift> {
        const result = await this.connection.execute(
            "select * from Complete_Shifts where id = ?",
            id
        );
        return result;
    }

    async findAll(): Promise<CompleteShift[]> {
        const query = await this.connection.execute("select * from Complete_Shifts");
        const results = query.map((result: any) => {
            return this.convertModel(result);
        });
        return results;
    }

    async persist(completeShift: CompleteShift): Promise<CompleteShift> {
        const result = await this.connection.execute(
            "insert into Complete_Shifts(shift_id, term_id, day) values(?,?,?)",
            [completeShift.shift_id, completeShift.term_id, completeShift.day]
        );
        return result;
    }

    async update(completeShift: CompleteShift): Promise<CompleteShift> {
        const result = await this.connection.execute(
            "update Complete_Shifts set shift_id = ?, term_id = ?, day = ?, where id = ?",
            [completeShift.shift_id, completeShift.term_id, completeShift.day, completeShift.id]
        );
        return result;
    }

    async delete(id: number): Promise<CompleteShift> {
        const result = await this.connection.execute(
            "delete from Complete_Shift where id = ?",
            id
        );
        return result;
    }
}