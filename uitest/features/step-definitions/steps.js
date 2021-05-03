import { Given, When, Then } from '@cucumber/cucumber';
//I used WDIO to support for UI testing with cucumber framework

Given(/^Launch (\w+) page$/, async (page) => {
    await browser.url('http://localhost:19006/MyVacations/users');
});

Then(/^I can view (\w+) page$/, async (page) => {
    await (await $('#root > div > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div > div > div > div > div > div.css-view-1dbjc4n.r-bottom-1p0dtai.r-left-1d2f490.r-pointerEvents-12vffkv.r-position-u8s1d.r-right-zchlnj.r-top-ipm5af > div.css-view-1dbjc4n.r-flex-13awgt0.r-pointerEvents-12vffkv > div > div > div > div.css-view-1dbjc4n.r-flex-13awgt0 > div > div > div > div:nth-child(1) > div > div')).click();
});
