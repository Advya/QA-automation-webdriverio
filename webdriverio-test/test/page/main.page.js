class MainPage {
    get searchInput() {
        return $('#search_input_react');
    }
    setUsername (value) {
        this.searchInput.addValue(value);
    }
//hometask
    // get DocsButton() {
    //     return $('//a[contains(text(),"Docs")]');
    // }
    // clickDocsButton() {
    //     this.DocsButton.click();
    // }


}

module.exports = new MainPage();