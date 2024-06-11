const { Given, When, Then } = require('@wdio/cucumber-framework');
const home_allegiant=require("../pageobjects/home_allegiant.page");
Given(/^I am on the home page$/, async () => {
	await browser.url("https://www.allegiantair.com/");
	await browser.maximizeWindow();
});

When(/^I add departure,airport,search flights$/, async () => {
	await home_allegiant.SearchFlight();
});

Then(/^I should see available flights$/, async () => {
	return true;
});
