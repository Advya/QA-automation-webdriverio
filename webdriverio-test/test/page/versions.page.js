class VersionsPage {
    get VersionsButton() {
        return $('//*[contains(text(),"Versions")]');
    }
    get documentationButton(){
        return $('//a[@href="https://v5.webdriver.io/"]');        
    }
    clickDocumentationButton() {
        this.VersionsButton.click();
        this.documentationButton.click();
    }
}

module.exports = new VersionsPage();