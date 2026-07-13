// const { test } = require('@playwright/test');

// const LoginPage = require('../pages/LoginPage');
// const FormPage = require('../pages/FormPage');
// const data = require('../utils/data');

// test('Create Form', async ({ page }) => {

//     const loginPage = new LoginPage(page);
//     const formPage = new FormPage(page);

//     await loginPage.open(data.url);

//     await loginPage.login(data.username, data.password);

//     await formPage.openCreateForm();

//     await formPage.createForm(data.formName);

//     await formPage.addRow();

//     await formPage.addFirstTextbox();

//     await formPage.configureFirstTextbox(data.firstName);
    

//     await formPage.addSecondTextbox();

// await formPage.configureSecondTextbox(data.lastName);
// await formPage.saveForm();
// // await formPage.openRules();
// // await formPage.createRule1();
// });
const { test } = require('@playwright/test');

test.setTimeout(120000);

const LoginPage = require('../pages/LoginPage');
const FormPage = require('../pages/FormPage');
const data = require('../utils/data');

test('Create Form', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const formPage = new FormPage(page);

    await loginPage.open(data.url);

    await loginPage.login(data.username, data.password);

    await formPage.openCreateForm();

    await formPage.createForm(data.formName);

    await formPage.addRow();

    await formPage.addFirstTextbox();

    await formPage.configureFirstTextbox(data.firstName);

    await formPage.addSecondTextbox();

    await formPage.configureSecondTextbox(data.lastName);

    await formPage.saveForm();
});