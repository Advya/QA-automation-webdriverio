class DocsPage {
    get DocsButton() {
        return $('//a[contains(text(),"Docs")]');
    }
    clickDocsButton() {
        this.DocsButton.click();
    }
}

module.exports = new DocsPage();