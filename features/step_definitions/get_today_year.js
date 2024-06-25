import {When, Then} from '@cucumber/cucumber';
import {chai} from "../chai.js";
import {app} from '../../app.js';
const expect = chai.expect;
let response;


When('I request to get today year', async function () {
    try {
        response = await chai.request.execute(app).get('/today-day-in-local-string');
    } catch (err) {
        response = err.response;
    }
});

Then('I should receive a 200 status', function () {
    expect(response).to.have.status(200);
});

Then('I should receive value {int}', function (year) {
    expect(response.body.data).equal(year);
});
