var randName = require('random-username-generator');

class EnterprisePage {
    get nameInput() {
        return $('#contact_request_name');
    }  
    randName() {
        this.nameInput.setValue(randName.generate());
    }
    get companyInput() {
        return $('#contact_request_organization_name');
    }
    randCompany() {
        this.companyInput.setValue(randName.generate());
    }
    get emailInput() {
        return $('#contact_request_email');
    }
    randEmail() {
        this.emailInput.setValue(randName.generate() + "@mail.com");
    }
    get phoneInput() {
        return $('#contact_request_phone');
    }
    randPhone() {
        this.phoneInput.setValue(Math.floor(100000000 + Math.random() * 900000000));   //wow it works fine!
    }
    get radioButton() {
        return $('#contact_request_instance_type_azure');
    }
    clickRadio() {
        this.radioButton.click();
    }
    get questionYes() {
        return $('#questions_yes');
    }
    clickYes() {
        this.questionYes.click();
    }
    get textarea() {
        return $('#questions-list');
    }
    randTextarea() {
        this.textarea.setValue(randName.generate() + randName.generate() + randName.generate());
    }
    get acceptOption() {
        return $('#contact_request_agreed_to_terms');
    }
    clickAcceptOption() {
        this.acceptOption.click();
    }
    
    fillEverything() {
        this.randName();
        this.randCompany();
        this.randEmail();
        this.randPhone();
        this.clickRadio();        
        this.clickYes();
        browser.pause(1000);    //pause to wait for form to load
        this.randTextarea();
        this.clickAcceptOption();
    }   
  
}

module.exports = new EnterprisePage();