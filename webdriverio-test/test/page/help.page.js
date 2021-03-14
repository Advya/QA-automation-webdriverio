class HelpPage {
    get helpButton() {
        return $('//li/a[contains(text(),"Help")]');
    }
    get browseDocs() {
        return $('//*[contains(text(),"Browse Docs")]')
    }
    
    checkIsDisplayed() {
        this.helpButton.click();
        console.log("HERE IS RESULT: " + this.browseDocs.isDisplayed());   
    }
}

module.exports = new HelpPage();