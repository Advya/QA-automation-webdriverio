class ApiPage {
    get apiButton() {
        return $('//li/a[contains(text(),"API")]');
    }
    get toggleContributeButton() {
        return $('#tocToggler')
    }
    get contributeButton() {
        return $('//ul[@class="toc-headings"]/li/a[contains(text(),"Contribute")]');
    }
    clickContributeButton() {
        this.apiButton.click();
        this.toggleContributeButton.click();
        this.contributeButton.click();
    }
}

module.exports = new ApiPage();