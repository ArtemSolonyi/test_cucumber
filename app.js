import express from 'express'

export const app = express();
const port = 3000;
import testsRoutes from '../test_cucumber/routes/tests/index.js'
import {initDb} from "./db/initDb.js";
app.use('/', testsRoutes);

async function start() {
    await initDb()
    app.listen(port, () => {
        console.log(`${port}`);
    });
}

start()

