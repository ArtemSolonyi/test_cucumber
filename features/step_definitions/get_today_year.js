import {When, Then, Given} from '@cucumber/cucumber';
import {chai} from "../chai.js";
import {app} from '../../app.js';
import {Test} from "../../db/Test.js";
import {initDb} from "../../db/initDb.js";
const expect = chai.expect;
let response;
let passedData;
Given('data {string} for mock data in db',async (data) => {
    await initDb()
    passedData = data;
    await Test.destroy({where:{dayOfWeek:data}})
    await Test.create({dayOfWeek:data})
})

When('Clear data in db',async () => {
    await Test.destroy({where:{}})
})

When('I request to get today year', async function () {
    try {
        response = await chai.request.execute(app).get('/today-day-in-local-string');
    } catch (err) {
        response = err.response;
    }
});

Then('I should receive a 200 status.', function () {
    expect(response).to.have.status(200);
});
Then('I should receive a 404 status.', function () {
    expect(response).to.have.status(404);
});
Then('I should receive value {string}', function (day) {
    expect(response.body.data).equal(day);
});
