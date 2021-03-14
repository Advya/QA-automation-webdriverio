class TopicsPage {
    get inputSearchField() {
        return $('input[name="q"]');
    }  
    get topicsTitle() {
        return $('.h0-mktg');
    }
    get inputSubmit() {
        return $('[href*="/search?"]');
    }
    topicsDisplayedInputSearch() {  
        console.log("Topics displayed is: " + this.topicsTitle.isDisplayed());
        this.inputSearchField.setValue("webdriverio");
        browser.pause(1000);
        this.inputSubmit.click();
    } 
}

module.exports = new TopicsPage();