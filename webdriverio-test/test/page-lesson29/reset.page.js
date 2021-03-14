class ResetPage {
    get emailInput() {
        return $('#email_field');
    }           
    get Submit() {
        return $('.btn-primary');
    }
    clickSubmitNegative(value) {
        this.emailInput.setValue(value);
        this.Submit.click();
    }
    clickSubmitPositive() {
        this.emailInput.setValue("advyqsecond@protonmail.com");
        this.Submit.click();
    }
    
    
}

module.exports = new ResetPage();