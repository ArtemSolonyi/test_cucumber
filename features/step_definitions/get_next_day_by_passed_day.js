import {Given, When, Then} from '@cucumber/cucumber';
import {chai} from "../chai.js";
import {app} from '../../app.js';
import {initDb} from "../../db/initDb.js";

const expect = chai.expect;
let response;

Given('the day of the week is {string}', async function (day) {
    await initDb()
    this.day = day;
});

When('I request the next day by passed day', async function () {
    try {
        response = await chai.request.execute(app).get(`/next-day-by-passed-day/${this.day}`);
    } catch (err) {
        response = err.response;
    }
});

Then('I should receive {string}', function (expectedDay) {
    expect(response).to.have.status(200);
    expect(response.body).eql({data: expectedDay})
});

Then('I should receive a 404 status', function () {
    expect(response).to.have.status(404);
});
