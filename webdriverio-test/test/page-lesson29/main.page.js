class MainPage {    
    get emailInput() {
        return $('#user_email_control');
    }
    setEmail (value) {
        this.emailInput.addValue(value);
    }
    get submitButton() {
        return $('//form[@action="/join"]/div/button[@type="submit"]');
    }    
    clickSubmit() {
        this.submitButton.click();
    }
    get signUpButton() {
        return $('a[href="/join?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F"]');
    }    
    clickSignUpButton() {
        this.signUpButton.click();
    }
    get toggleNav() {
        return $('.octicon.octicon-three-bars.color-text-white');
    }
    get signInButton() {
        return $('a[href="/login"]')
    }
    signIn(){
        this.toggleNav.click();
        this.signInButton.click();
    }
    get whyGithubButton() {
        return $('//*[contains(text(),"Why GitHub?")]');
    }
    get exploreButton () {
        return $('//details/*[contains(text(),"Explore")]');
    }
    get pricingButton() {
        return $('//summary[contains(text(),"Pricing")]');
    }
    moveToCase5 () {
        this.whyGithubButton.moveTo();
        console.log("Github button displayed? " + this.whyGithubButton.isDisplayed());
        browser.pause(2000);
        this.exploreButton.moveTo();
        this.exploreButton.click();         //moveTo didnt work properly, so added click
        console.log("Explore button displayed? " + this.exploreButton.isDisplayed());
        browser.pause(2000);
        this.pricingButton.moveTo();
        this.pricingButton.click();
        console.log("Pricing button displayed? " + this.pricingButton.isDisplayed());
    }
    get plansButton() {
        return $('//div/a[@href="/pricing"]');
    }
    get enterpriseButton() {
        return $('[href="/enterprise"].HeaderMenu-link');
    }
    enterpriseButtonClick() {
        this.enterpriseButton.click();
    }
    get careersButton() {
        return $('[href="/about/careers"]');
    }
    scrollToAndClick() {
        this.careersButton.scrollIntoView();
        browser.pause(2000);
        this.careersButton.click();
    }

}

module.exports = new MainPage();