import express from 'express'
export const app = express();
const port = 3000;
import testsRoutes from '../test_cucumber/routes/tests/index.js'
app.use('/', testsRoutes);
app.listen(port, () => {
    console.log(`${port}`);
});

