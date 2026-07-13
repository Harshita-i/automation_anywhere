class FormPage {

    constructor(page) {
        this.page = page;

        // Frame
        this.frame = page.locator('iframe').first().contentFrame();

        // Navigation
        this.automationMenu = page.getByRole('link', { name: 'Automation', exact: true });

        this.createButton = page
            .getByRole('heading', { name: 'Automation Create Manage' })
            .getByLabel('Create');

        this.formButton = page.getByRole('button', { name: ' Form…' });

        // Create Form
        this.formName = page.getByRole('textbox', { name: 'Name' });
        this.createAndEditButton = page.getByRole('button', { name: 'Create & edit' });

        // Designer Palette
        this.row = this.frame.getByRole('button', { name: ' Row' });
        this.textBox = this.frame.getByRole('button', { name: ' Text Box' });

        // Main Designer Canvas
        this.canvas = this.frame.locator('.formcanvas__leftpane');

        // Row Cell (Drop textbox here)
       this.rowCells = this.frame.locator('.formcanvas-col-container.blankspace');
        // First Textbox
        this.firstTextbox = this.frame
            .locator('#textbox_editable-field_TextBox0')
            .getByRole('textbox', { name: 'TextBox' });

        this.secondTextbox = this.frame
    .locator('#textbox_editable-field_TextBox1')
    .getByRole('textbox', { name: 'TextBox' });
    this.saveButton = this.frame.getByRole('button', { name: 'save' });
      // Rules
this.rulesTab = this.frame.getByRole('tab').nth(1);

this.addRuleButton = this.frame.getByRole('button', { name: 'Add rule' });

this.conditionElement = this.frame.getByRole('textbox', { name: 'Select element' }).first();

this.actionElement = this.frame.getByRole('textbox', { name: 'Select element' }).last();

this.saveRuleButton = this.frame.getByRole('button', { name: 'save' });
// Rule 1
this.addConditionButton = this.frame.getByRole('button', { name: 'Add condition' });

this.conditionTypeDropdown = this.frame
    .locator('.gridlayout-content > .gridlayout > .gridlayout-row > .gridlayout-column > .gridlayout-content > .rio-select-input > div > .rio-focus.rio-focus--inset_1px > .rio-select-input-query__controls > .rio-focus')
    .first();

this.containsOption = this.frame
.locator('div')
.filter({ hasText: /^Contains$/ })
.nth(1);


this.valueTextbox = this.frame.getByRole('textbox', {
name: 'Enter value'
});

this.andRadio = this.frame.getByRole('radio', {
    name: 'AND'
}).first();

this.isNotEmpty = this.frame
.locator('div')
.filter({ hasText: /^Is not empty$/ })
.nth(1);

this.addActionButton = this.frame.getByRole('button', {
name: 'Add action'
});

this.targetTextbox = this.frame
.getByRole('combobox')
.getByRole('textbox', { name: 'Select element' });

this.setValue = this.frame
.locator('div')
.filter({ hasText: /^Set value$/ })
.nth(1);
this.conditionElementDropdown = this.frame
    .locator('.rio-focus.rio-focus--inset_1px.rio-focus--border-radius_2px.rio-select-input-query')
    .first();
this.firstNameElement = this.frame.locator(
    '.rio-select-input-dropdown-option'
).getByText('First Name - TextBox0');
        // Properties Panel
        this.label = this.frame.getByRole('textbox', { name: 'Element label' });
        this.defaultValue = this.frame.getByRole('textbox', { name: 'Default value' });
        this.hint = this.frame.getByRole('textbox', { name: 'Hint below field' });
        this.tooltip = this.frame.locator('textarea[name="toolTip"]');
        this.min = this.frame.getByRole('textbox', { name: 'Min' });
        this.max = this.frame.getByRole('textbox', { name: 'Max' });
    }

    async openCreateForm() {
        await this.automationMenu.click();
        await this.createButton.click();
        await this.formButton.click();
    }

    async createForm(name) {
        await this.formName.fill(name);
        await this.createAndEditButton.click();
    }
async openExistingForm(formName) {

    await this.automationMenu.click();

   await this.page.getByRole('link', {
    name: /AssignmentForm/
}).click();

    await this.page.getByRole('link', {
        name: formName,
        exact: true
    }).click();
}
    async addRow() {
    await this.row.dragTo(this.canvas);

    // Wait until the row is actually created
    await this.rowCells.first().waitFor({ state: 'visible' });
}
   async addFirstTextbox() {
    await this.textBox.dragTo(this.rowCells.nth(0));
}
   async addSecondTextbox() {
    await this.textBox.dragTo(this.rowCells);
}
 async saveForm() {
    await this.saveButton.click();
}
async openRules() {

    await this.rulesTab.click();

    await this.addRuleButton.click();

}
async createRule1() {

    // Add first condition
    await this.addConditionButton.click();

    // Select element
    await this.conditionElementDropdown.click();
    await this.firstNameElement.click();

    // Open condition dropdown
    await this.conditionTypeDropdown.click();

    // Wait for "Contains" to appear
    await this.containsOption.waitFor({ state: 'visible' });

    // Select Contains
    await this.containsOption.click();

    // Enter value
    await this.valueTextbox.fill("Rahul");
    // Add second condition
await this.addConditionButton.click();

// Select AND
await this.andRadio.click();
await this.page.pause();

// Select First Name again
await this.conditionElementDropdown.click();
await this.firstNameElement.click();

// Open condition dropdown
await this.conditionTypeDropdown.click();

// Select Is not empty
await this.isNotEmpty.click();
}
 
    async configureFirstTextbox(data) {

        await this.firstTextbox.click();

        await this.label.fill(data.label);

        await this.defaultValue.fill(data.defaultValue);

        await this.hint.fill(data.hint);

        await this.tooltip.fill(data.tooltip);

        await this.min.fill(data.minLength);

        await this.max.fill(data.maxLength);
    }
    async configureSecondTextbox(data) {

    await this.secondTextbox.click();

    await this.label.fill(data.label);

    await this.defaultValue.fill(data.defaultValue);

    await this.hint.fill(data.hint);

    await this.tooltip.fill(data.tooltip);

    await this.min.fill(data.minLength);

    await this.max.fill(data.maxLength);
}
}

module.exports = FormPage;
