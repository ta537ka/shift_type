import express = require('express');
import { CompleteShiftController } from "../../interface/controller/CompleteShiftController";
import { MysqlConnection } from "../MysqlConnection";


const mysqlConnection = new MysqlConnection();
const completeShiftController = new CompleteShiftController(mysqlConnection);
const completeShiftRouter = express.Router();

completeShiftRouter.get('/completeShifts', async (req: express.Request, res: express.Response) => {
    const results = await completeShiftController.findAll(req, res);
    res.send(results);
});

completeShiftRouter.get('/completeShifts/:id', async (req: express.Request, res: express.Response) => {
    const result = await completeShiftController.findCompleteShift(req, res);
    res.send(result);
});

completeShiftRouter.post('/completeShifts', async (req: express.Request, res: express.Response) => {
    const result = await completeShiftController.createCompleteShift(req, res);
    res.send(result);
});

completeShiftRouter.patch('/completeShifts/:id', async (req: express.Request, res: express.Response) => {
    const result = await completeShiftController.updateCompleteShift(req, res);
    res.send(result);
});

completeShiftRouter.delete('/completeShifts/:id', async (req: express.Request, res: express.Response) => {
    const result = await completeShiftController.deleteCompleteShift(req, res);
    res.send(result);
});

export default completeShiftRouter;