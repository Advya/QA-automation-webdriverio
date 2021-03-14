class JoinPage {
    get userInput() {
        return $('#user_login');
    }
    setUserName (value) {
        this.userInput.addValue(value);
    }
    get emailInput() {
        return $('#user_email');
    }
    setEmail (value) {
        this.emailInput.addValue(value);
    }
    get passwordInput() {
        return $('#user_password');
    }
    setPassword (value) {
        this.passwordInput.addValue(value);
    }
    get checkboxInput() {
        return $('#all_emails');
    }
    clickCheckbox() {
        this.checkboxInput.click();
    }

    
    
}

module.exports = new JoinPage();