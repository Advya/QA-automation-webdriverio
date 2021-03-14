const assert = require('assert');
var randName = require('random-username-generator');  // random username generator


const mainPage = require('../page-lesson29/main.page.js');
const joinPage = require('../page-lesson29/join.page.js');
const loginPage = require('../page-lesson29/login.page.js');
const resetPage = require('../page-lesson29/reset.page.js');
const pricingPage = require('../page-lesson29/pricing.page.js');
const explorePage = require('../page-lesson29/explore.page.js');
const topicsPage = require('../page-lesson29/topics.page.js');
const orgsPage = require('../page-lesson29/organizations.page.js');
const enterprisePage = require('../page-lesson29/enterprise.page.js');
const careersPage = require('../page-lesson29/careers.page.js');


describe('regression testing, 9 test cases in total', () => {
    xit('test case 1', () => {
        browser.url('https://github.com');
        mainPage.setEmail(randName.generate() + "@mail.com");
        mainPage.clickSubmit();
        joinPage.setUserName(randName.generate());
        joinPage.setPassword(randName.generate());
        const verifyString = $('//*[contains(text(), "Verify")]');
        console.log("Is there verify string? " + verifyString.isDisplayed());
        console.log("Current url is " + browser.getUrl());
        browser.pause(4000);
    })
    xit('test case 2', () => {
        browser.url('https://github.com');
        browser.pause(1000);
        $('//*[contains(text(),"Make")]').scrollIntoView(); //header blocks click if scroll to button, so scrolling to element above
        browser.pause(2000);
        mainPage.clickSignUpButton();
        browser.pause(1000);
        
        joinPage.setUserName(randName.generate());
        joinPage.setEmail(randName.generate() + "@mail.com");
        joinPage.setPassword(randName.generate());
        const verifyString = $('//*[contains(text(), "Verify")]');
        console.log("Is there verify string? " + verifyString.isDisplayed());
        console.log("Current url is " + browser.getUrl());
        browser.pause(2000);
    })
    xit('test case 3', () => {
        browser.url('https://github.com');
        browser.pause(1000);
        mainPage.signIn();
        loginPage.loginValid();
        console.log($('//*[contains(text(),"Read the guide")]').isDisplayed());
        console.log("Url is: " + browser.getUrl());
        browser.pause(4000);
        // case 4
        browser.back() // can't go back, need to log out         
    })
    xit('test case 4', () => {
        browser.url('https://github.com');
        browser.pause(1000);
        mainPage.signIn();
        loginPage.clickForgot();
        //negative
        resetPage.clickSubmitNegative(randName.generate() + "@mail.com"); // random email & click submit
        const errorMessage = $('.flash-full');                            // error message if email is wrong
        console.log(errorMessage.isDisplayed()); 
        browser.pause(3000);       
        resetPage.clickSubmitNegative(randName.generate() + "@mail.com");  
        console.log(errorMessage.isDisplayed());
        browser.pause(3000);      
        resetPage.clickSubmitNegative(randName.generate() + "@mail.com");  //tested 3 random emails
        console.log(errorMessage.isDisplayed());
        browser.pause(3000);
        //positive
        resetPage.clickSubmitPositive();
        const rightEmailMessage = $('//*[contains(text(),"Check your email")]'); // message if email is right
        console.log(rightEmailMessage.isDisplayed());       
        browser.pause(4000);             
    })
    xit('test case 5', () => {
        browser.url('https://github.com');  
        browser.maximizeWindow();         //this is how to open browser in full screen
        //browser.elementHover('//*[contains(text(),"Why GitHub?")]');  //can't hover on Why GitHub button because this element has no id
        browser.pause(2000);
        mainPage.moveToCase5();        
        browser.pause(4000);               
    })
    xit('test case 6', () => {
        browser.url('https://github.com');  
        browser.maximizeWindow();  
        browser.pause(1000); 
        mainPage.pricingButton.moveTo();
        browser.pause(1000); 
        mainPage.plansButton.click();
        browser.pause(1000); 
        pricingPage.clickFreePlan();        //page may be different(2 versions), so sometimes test doesn't work
        browser.pause(3000); 
        joinPage.setUserName(randName.generate());
        joinPage.setEmail(randName.generate() + "@mail.com");
        joinPage.setPassword(randName.generate());
        joinPage.clickCheckbox();
        browser.pause(4000);            
    })
    xit('test case 7', () => {
        browser.url('https://github.com');  
        browser.maximizeWindow();  
        browser.pause(1000); 
        mainPage.pricingButton.moveTo();
        browser.pause(1000); 
        mainPage.plansButton.click();
        browser.pause(1000);   
        pricingPage.clickExploreGitHubButton();  
        explorePage.clickTopicsButton();
        topicsPage.topicsDisplayedInputSearch();                                // typing webdriverio in input field
        const typeScriptButton = $('[href*="TypeScript"]');
        typeScriptButton.click();
        browser.pause(1000); 
        const firstResult = $('[href="/webdriverio/webdriverio"]');
        firstResult.click();
        var currentUrl = browser.getUrl();
        console.log("Nu sho, url ok? " + currentUrl.includes("webdriverio"));  //check if Current Url includes "webdriverio"
        browser.pause(4000);    
    })
    xit('test case 8', () => {
        browser.url('https://github.com');  
        browser.maximizeWindow();         
        //Enterprice button is moved in current version of github.com
        mainPage.enterpriseButtonClick();
        browser.pause(1000); 
        $('[href*="enterprise_plan"].btn-white-outline-mktg-fluid').click();  // Start free trial button click
        orgsPage.clickCloud();              // Enterprise Cloud button click
        joinPage.setUserName(randName.generate());
        joinPage.setEmail(randName.generate() + "@mail.com");
        joinPage.setPassword(randName.generate());
        joinPage.clickCheckbox();       
        browser.pause(3000);     
        browser.back();                 //going back one step
        browser.pause(1000); 
        orgsPage.clickServer();

        enterprisePage.fillEverything(); //every step in enterprise page

        browser.pause(5000);      
    })
    it('test case 9', () => {
        browser.url('https://github.com');  
        browser.maximizeWindow();          
        mainPage.scrollToAndClick();
        careersPage.scrollToPositions(); 

        careersPage.consolePositions();

      


        // dont work
        // var numItems = $('//button/h3').length;
        // console.log("DAVAI: "+numItems);
        // for (let i=0; i<numItems; i++) {
        //     return console.log('Item number ${i}: ' + numItems(i));
        // }      

        browser.pause(2000);               
    })

})
