import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './users/userRouter';
import shiftTermRouter from './shift_terms/shiftTermRouter';
import shiftStatusRouter from './shift_statuses/shiftStatusRouter';
import shiftRouter from './shifts/shiftRouter';
import completeShiftRouter from './complete_shifts/completeShiftRouter';

const app = express();
const port = 3001;
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/api', userRouter, shiftTermRouter, shiftStatusRouter, shiftRouter, completeShiftRouter);

app.listen(port, () => {
    console.log(`listening port is ${port}`);
})

export default app