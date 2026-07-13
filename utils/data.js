module.exports = {
    url: "https://community.cloud.automationanywhere.digital/",
    username: "immadiharshita@gmail.com",
    password: "pwd",

    formName: `AssignmentForm_${Date.now()}`,

    firstName: {
        label: "First Name",
        defaultValue: "Rahul",
        hint: "Enter First Name",
        tooltip: "Enter your first name",
        minLength: "3",
        maxLength: "30"
    },

    lastName: {
        label: "Last Name",
        defaultValue: "Sharma",
        hint: "Enter Last Name",
        tooltip: "Enter your last name",
        minLength: "3",
        maxLength: "30"
    }
};