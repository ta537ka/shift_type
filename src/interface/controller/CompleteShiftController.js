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
exports.CompleteShiftController = void 0;
const CompleteShiftSerializer_1 = require("../serializer/CompleteShiftSerializer");
const CompleteShiftRepository_1 = require("../database/CompleteShiftRepository");
const ListCompleteShifts_1 = require("../../usecase/complete_shifts/ListCompleteShifts");
const GetCompleteShift_1 = require("../../usecase/complete_shifts/GetCompleteShift");
const CreateCompleteShift_1 = require("../../usecase/complete_shifts/CreateCompleteShift");
const UpdateCompleteShift_1 = require("../../usecase/complete_shifts/UpdateCompleteShift");
const DeleteCompleteShift_1 = require("../../usecase/complete_shifts/DeleteCompleteShift");
class CompleteShiftController {
    constructor(dbConnection) {
        this.completeShiftSerializer = new CompleteShiftSerializer_1.CompleteShiftSerializer();
        this.completeShiftRepository = new CompleteShiftRepository_1.CompleteShiftRepository(dbConnection);
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ListCompleteShifts_1.ListCompleteShifts(this.completeShiftRepository);
            const results = yield useCase.execute();
            return this.completeShiftSerializer.serialize(results);
        });
    }
    findCompleteShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new GetCompleteShift_1.GetCompleteShift(this.completeShiftRepository);
            const result = yield useCase.execute(id);
            return this.completeShiftSerializer.serialize(result);
        });
    }
    createCompleteShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { shift_id, term_id, day } = req.body;
            const useCase = new CreateCompleteShift_1.CreateCompleteShift(this.completeShiftRepository);
            const result = yield useCase.execute(shift_id, term_id, day);
            return this.completeShiftSerializer.serialize(result);
        });
    }
    updateCompleteShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { shift_id, term_id, day } = req.body;
            const useCase = new UpdateCompleteShift_1.UpdateCompleteShift(this.completeShiftRepository);
            const result = yield useCase.execute(id, shift_id, term_id, day);
            return this.completeShiftSerializer.serialize(result);
        });
    }
    deleteCompleteShift(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new DeleteCompleteShift_1.DeleteCompleteShift(this.completeShiftRepository);
            const result = yield useCase.execute(id);
            return this.completeShiftSerializer.serialize(result);
        });
    }
}
exports.CompleteShiftController = CompleteShiftController;
