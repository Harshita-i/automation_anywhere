const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const FormPage = require('../pages/FormPage');
const data = require('../utils/data');

test('Rules Builder', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const formPage = new FormPage(page);

    await loginPage.open(data.url);

    await loginPage.login(data.username, data.password);

await formPage.openExistingForm(data.formName);

await formPage.openRules();
});