class LoginPage {
    get loginInput() {
        return $('#login_field');
    }     
    get passwordInput() {
        return $('#password');
    }      
    get clickSignIn() {
        return $('.btn-primary');
    }
    loginValid() {
        this.loginInput.setValue("Testfor-qa-automation");
        this.passwordInput.setValue("256635qQ");
        this.clickSignIn.click();
    }
    get forgotButton() {
        return $('//*[contains(text(),"Forgot")]');
    }
    clickForgot() {
        this.forgotButton.click();
    }
    
}

module.exports = new LoginPage();