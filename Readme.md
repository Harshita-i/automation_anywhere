# Automation Anywhere UI & API Automation Assignment

## Project Overview

This project automates the Automation Anywhere Community Cloud platform using **Playwright** with the **Page Object Model (POM)** design pattern. The framework is designed to automate both UI and API workflows while maintaining reusable, readable, and scalable test code.

The automation includes:

- User authentication (Login)
- Form creation and configuration
- Form designer automation (Row and Text Box components)
- Form rule configuration
- Learning Instance API automation

---

# Framework & Tools Used

The project is built using the following technologies:

- **Playwright** – UI and API automation framework
- **JavaScript (Node.js)** – Programming language
- **Playwright Test Runner** – Test execution and reporting
- **Page Object Model (POM)** – Framework design pattern
- **Visual Studio Code** – Development environment
- **Git** – Version control

---

# Project Structure

```
automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── FormPage.js
│   ├── HomePage.js
│   └── RulesPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── form.spec.js
│   ├── rules.spec.js
│   └── api.spec.js
│
├── utils/
│   └── data.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Harshita-i/automation_anywhere.git
```

### 2. Install project dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure test data

Update the credentials inside:

```
utils/data.js
```

Example:

```javascript
username: "your_email"

password: "your_password"
```

---

# Executing the Tests

### Run all tests

```bash
npx playwright test
```

### Run Login Test

```bash
npx playwright test tests/login.spec.js --headed --project=chromium
```

### Run Form Automation Test

```bash
npx playwright test tests/form.spec.js --headed --project=chromium
```

### Run Rules Automation Test

```bash
npx playwright test tests/rules.spec.js --headed --project=chromium
```

### Run API Automation Test

```bash
npx playwright test tests/api.spec.js
```

### View HTML Report

```bash
npx playwright show-report
```

---

# Test Organization

The automation suite is organized according to the assignment use cases.

### Use Case 1 – UI Automation

- User Login
- Form Creation
- Form Designer Automation
- Rule Configuration

### Use Case 2 – API Automation

- Learning Instance API Validation

Each test case is implemented with a descriptive test name and follows the Page Object Model to ensure code reusability and maintainability.

---

# Environment & Configuration Notes

- Node.js 18 or above
- Playwright (latest version)
- Chromium browser used for execution
- Active internet connection
- Valid Automation Anywhere Community Cloud account
- Test credentials stored in `utils/data.js`

---

# Framework Design

The project follows the **Page Object Model (POM)** design pattern.

Each page is represented by a separate class containing:

- Page locators
- Reusable page actions
- Business workflows

This design improves:

- Maintainability
- Readability
- Reusability
- Scalability

---

# Features Implemented

- Secure Login Automation
- Dynamic Form Creation
- Row and Text Box Drag-and-Drop Automation
- Form Property Configuration
- Form Save Operation
- Rules Automation
- API Request Validation
- HTML Test Reporting

---

# Conclusion

This automation framework demonstrates a modular and maintainable approach to testing both UI and API functionalities of the Automation Anywhere Community Cloud platform. By following the Page Object Model and Playwright best practices, the framework can be easily extended to support additional workflows and future enhancements.