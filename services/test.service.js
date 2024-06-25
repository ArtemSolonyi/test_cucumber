import {daysOfWeek, daysOfWeekFromNumber} from '/Users/auranode/WebstormProjects/test_cucumber/utils/day-of-week.js'

class TestService {
    getTodayDayInLocalString() {
        return new Date().getFullYear()
    }

    getNextDayByPassedDay(dayOfWeekInStr) {
        let day = daysOfWeek[dayOfWeekInStr?.toLowerCase()];
        if (day === undefined || day == null) return {status: 404}
        if (day < 6) {
            return daysOfWeekFromNumber[++day];
        }
        return daysOfWeekFromNumber[0];
    }
}

export default new TestService();