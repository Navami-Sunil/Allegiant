const { Given, When, Then } = require('@wdio/cucumber-framework');
const home_allegiant=require("../pageobjects/home_allegiant.page");
const bags=require("../pageobjects/bags.page");
const car=require("../pageobjects/car.page");
const hotels=require("../pageobjects/hotels.page");
const payment=require("../pageobjects/payment.page");
const seats=require("../pageobjects/seats.page");

Given(/^I am on the home page$/, async () => {
	await browser.url("https://www.allegiantair.com/");
	await browser.maximizeWindow();
});

When(/^I add departure,airport,search flights$/, async () => {
	await home_allegiant.SearchFlight();
});
;

When(/^I select seats and bags$/,async () => {
	await seats.selectseat();
	await bags.bags();
	await hotels.room();
});

When(/^I select car$/, async () => {
	await car.carselection();
	await payment.payments();
	await browser.pause(2000);
});

Then(/^I should see payment page$/, async () => {
	return true;
});
