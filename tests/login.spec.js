const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../utils/data');

test('Login to Automation Anywhere', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open(data.url);

    await loginPage.login(data.username, data.password);

});