import {daysOfWeek, daysOfWeekFromNumber} from '../utils/day-of-week.js'
import {Test} from "../db/Test.js";

class TestService {
    async getTestData() {
        const result = await Test.findOne()
        if (!result) return {status: 404}
        return result.dataValues.dayOfWeek+'s'
    }

    async getNextDayByPassedDay(dayOfWeekInStr) {
        let day = daysOfWeek[dayOfWeekInStr?.toLowerCase()];
        let dayWeek;
        if (day === undefined || day == null) return {status: 404}
        if (day < 6) {
            dayWeek = daysOfWeekFromNumber[++day];
        } else {
            dayWeek = daysOfWeekFromNumber[0];
        }
        const result = (await Test.create({dayOfWeek: dayWeek})).dataValues.dayOfWeek
        console.log(result,'result')
        return result
    }
}

export default new TestService();