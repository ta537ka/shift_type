"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteShiftRepository = void 0;
const CompleteShift_1 = require("../../domain/CompleteShift");
const ICompleteShiftRepository_1 = require("../../usecase/repository/ICompleteShiftRepository");
class CompleteShiftRepository extends ICompleteShiftRepository_1.ICompleteShiftRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        const completeShift = new CompleteShift_1.CompleteShift();
        completeShift.id = r.id;
        completeShift.shift_id = r.shift_id;
        completeShift.term_id = r.term_id;
        completeShift.day = r.day;
        return completeShift;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("select * from Complete_Shifts where id = ?", id);
            return result;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute("select * from Complete_Shifts");
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    persist(completeShift) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("insert into Complete_Shifts(shift_id, term_id, day) values(?,?,?)", [completeShift.shift_id, completeShift.term_id, completeShift.day]);
            return result;
        });
    }
    update(completeShift) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("update Complete_Shifts set shift_id = ?, term_id = ?, day = ?, where id = ?", [completeShift.shift_id, completeShift.term_id, completeShift.day, completeShift.id]);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("delete from Complete_Shift where id = ?", id);
            return result;
        });
    }
}
exports.CompleteShiftRepository = CompleteShiftRepository;
