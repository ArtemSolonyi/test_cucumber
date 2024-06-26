import express from 'express'
const router = express.Router();
import testService from "../../services/test.service.js"
import responseHandler from "../../utils/response-handler.js"


router.get('/today-day-in-local-string', (req, res) => {
     responseHandler(res,testService.getTestData())
});


router.get('/next-day-by-passed-day/:day', (req, res) => {
     responseHandler(res,testService.getNextDayByPassedDay(req.params.day))
});
export default router;