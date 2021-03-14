class ExplorePage {
    get topicsButton() {
        return $('//div/a[@href="/topics"]');
    }  
    clickTopicsButton() {       
        this.topicsButton.click();
    } 
}

module.exports = new ExplorePage();