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
const express = require("express");
const CompleteShiftController_1 = require("../../interface/controller/CompleteShiftController");
const MysqlConnection_1 = require("../MysqlConnection");
const mysqlConnection = new MysqlConnection_1.MysqlConnection();
const completeShiftController = new CompleteShiftController_1.CompleteShiftController(mysqlConnection);
const completeShiftRouter = express.Router();
completeShiftRouter.get('/completeShifts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield completeShiftController.findAll(req, res);
    res.send(results);
}));
completeShiftRouter.get('/completeShifts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield completeShiftController.findCompleteShift(req, res);
    res.send(result);
}));
completeShiftRouter.post('/completeShifts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield completeShiftController.createCompleteShift(req, res);
    res.send(result);
}));
completeShiftRouter.patch('/completeShifts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield completeShiftController.updateCompleteShift(req, res);
    res.send(result);
}));
completeShiftRouter.delete('/completeShifts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield completeShiftController.deleteCompleteShift(req, res);
    res.send(result);
}));
exports.default = completeShiftRouter;
