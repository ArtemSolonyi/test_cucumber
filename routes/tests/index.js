import express from 'express'
const router = express.Router();
import testService from "/Users/auranode/WebstormProjects/test_cucumber/services/test.service.js"
import responseHandler from "/Users/auranode/WebstormProjects/test_cucumber/utils/response-handler.js"


router.get('/today-day-in-local-string', (req, res) => {
     responseHandler(res,testService.getTodayDayInLocalString())
});


router.get('/next-day-by-passed-day/:day', (req, res) => {
     responseHandler(res,testService.getNextDayByPassedDay(req.params.day))
});
export default router;