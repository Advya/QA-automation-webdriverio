class OrgPage {
    get enterpriseCloudButton() {
        return $('//*[contains(text(),"Enterprise Cloud")]');
    }  
    get enterpriseServerButton() {
        return $('//*[contains(text(),"Enterprise Server")]');
    }
    clickCloud() {
        this.enterpriseCloudButton.click();
    }
    clickServer() {
        this.enterpriseServerButton.click();
    }
    
    
}

module.exports = new OrgPage();