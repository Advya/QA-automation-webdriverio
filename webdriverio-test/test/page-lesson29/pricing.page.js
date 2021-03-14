class PricingPage {
    get freePlan() {
        return $('a[href*="/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=topcarousel&ref_page=%2Fpricing&source=pricing-card-free"]');
    }  
    clickFreePlan() {
       // this.freePlan.moveTo();
        this.freePlan.click();
    }   
    get exploreButton() {
        return $('//details/*[contains(text(),"Explore")]');
    }
    get exploreGitHubButton() {
        return $('[href*="explore"]');
    }
    clickExploreGitHubButton() {
        this.exploreButton.moveTo();
        this.exploreGitHubButton.click();
    }
}

module.exports = new PricingPage();