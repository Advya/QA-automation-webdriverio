const assert = require('assert');


describe.skip('webdriver.io page', () => {
    xit('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO - Next-gen WebDriver test framework for Node.js');
    })
    //ADD VALUE

    xit('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io');
        let input = $('#search_input_react');
        input.addValue('test');
        browser.pause(2000);
        input.addValue(123);
        browser.pause(2000);

        value = input.getValue();
        assert(value === 'test123'); // true
    })

    //SET VALUE

    xit('should demonstrate setValue command', function () {
        browser.url('https://webdriver.io');
        const elem = $('.DocSearch.DocSearch-Button');
        elem.click();
        const inputelem = $('.DocSearch-Input')
        browser.pause(2000);
        inputelem.setValue('test123');
        browser.pause(2000);
    })

    //CLICK

    xit('should demonstrate the click command', () => {
        browser.url('https://webdriver.io');
        const blogButton = $('.navbar__item [href="/blog"]');
        browser.pause(2000);
        blogButton.click()
        browser.pause(2000);
        const guideButton = $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        guideButton.click()
        browser.pause(2000);
    })

    // GET ATTRIBUTE
    xit('should demonstrate getAttribute method', ()=>{
        browser.url('https://webdriver.io');
        const elem = $('.DocSearch.DocSearch-Button');
        elem.click();
        const input = $('.DocSearch-Input');
        let attr = input.getAttribute('aria-label');
        console.log("Title attribute is: " + attr); // must be "Search"
        browser.pause(2000);
        input.setValue('test123');
        attr = input.getAttribute('value');
        console.log("Value attribute is: " + attr); //must be test123
    });

    //LOCATION

    xit('should demonstrate the getLocation function', () => {
        browser.url('https://webdriver.io');
        const logo = $('#search_input_react')
        const location = logo.getLocation();
        console.log(location); 
    
        const xLocation = logo.getLocation('x')
        console.log("xLocation" + xLocation);
 
    });

    //GET TEXT

    xit('should demonstrate the getText function', () => {
        browser.url('https://v5.webdriver.io');
        const blogButton = $('[href="/blog/"]')
        console.log("Text for element:" + blogButton.getText());
    });

    // lesson 9 homework
    xit('First DZ lesson #9', () => {
        browser.url('https://v5.webdriver.io');
        const apiButton = $('[href="/docs/api.html"]')
        apiButton.click();
        browser.pause(2000); // pause to understand that we click the right button
        let urly = apiButton.getAttribute('href'); //Find out Url address of API button(current url)
        console.log('API URL IS: ' + urly); 
        let h1Elem = $('.postHeaderTitle')
        console.log('h1 element on API page: ' + h1Elem.getText()); //Get text value of element with .postHeaderTitle class
        let aElem = $('//*[text()="JSONWire protocol"]');
        console.log('URL of a element: ' + aElem.getAttribute('href')); // Get url of an element from it's text value
        let input = $('#search_input_react');
        input.addValue('test is ');
        browser.pause(2000); // pause to understand that input changes
        input.addValue('DONE!');
        browser.pause(5000); // pause for 5 sec 
    });


    // IS CLICKABLE
    xit('should detect if an element is clickable', () => {
        browser.url('https://v5.webdriver.io');
        const blogButton = $('[href="/blog/"]');
        let clickable = blogButton.isClickable();
        console.log("IS CLICKABLE???: " + clickable);
    })
    // IS DISPLAYED
    xit('should detect if an element is displayed', () => {
        browser.url('https://v5.webdriver.io');
        const blogButton = $('[href="/blog/"]');
        let isDisplayed = blogButton.isDisplayed();
        console.log("IS DISPLAYED???: " + isDisplayed);
    })
    // IS DISPLAYED IN VIEWPORT
    xit('should detect if an element is in viewport', () => {
        browser.url('https://v5.webdriver.io');
        let isBlogDisplayedInViewport = $('[href="/blog/"]').isDisplayedInViewport();
        console.log("Is BLOG in viewport? : " + isBlogDisplayedInViewport);

        let isGitHubDisplayedInViewport = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
        console.log("Is GITHUB in viewport? : " + isGitHubDisplayedInViewport);
    })
    // IS ENABLED
    xit('should detect if an element is enabled', () => {
        browser.url('https://v5.webdriver.io');
        const blogButton = $('[href="/blog/"]');
        let isEnabled = blogButton.isEnabled();
        console.log("Is enabled: " + isEnabled);
    })
    //IS FOCUSED
    xit('should detect the focus of an element', () => {
        browser.url('https://v5.webdriver.io');
        const input = $('#search_input_react');
        console.log("IS SEARCH FOCUSED before click???: "+ input.isFocused());
        browser.pause(2000);
        input.click();
        console.log("IS SEARCH FOCUSED after click???: " + input.isFocused());
        browser.pause(2000);
    })
    //SCROLL TO ELEMENT
    xit('should scroll to element', () => {
        browser.url('https://v5.webdriver.io');
        const gitHubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        browser.pause(4000);
        gitHubLink.scrollIntoView();
        browser.pause(3000);
        $('.projectTitle').scrollIntoView(); // scroll back to top(blog button is always in view)
        browser.pause(3000);
    })
    //SAVE SCREENSHOT
    xit('should save the screenshot of view', () => {
        browser.url('https://v5.webdriver.io');
        const elem = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        elem.saveScreenshot('elemScreenshot.png');
    })
    //WINODW SWITCH
    xit('should switch to another window', () => {
        browser.url('https://google.com');
        browser.newWindow('https://v5.webdriver.io');
        browser.pause(2000);
        browser.switchWindow('google.com');
        browser.pause(2000);
        browser.switchWindow('Next-gen WebDriver test framework');
        browser.pause(2000);        
    })
    //WAIT UNTIL
    xit('should wait until', () => {
        browser.url('https://v5.webdriver.io');
        browser.waitUntil(()=>{
            return $('[href="/blog/"]').isDisplayed();            
        }, 5000, 'blog is not displayed');
    })
    //GET HTML(inner outer)
    xit('should get html for elements', () => {
        browser.url('https://v5.webdriver.io/docs/api.html');
        var outerHTML = $('.siteNavGroupActive').getHTML();
        console.log("outerHTML: " + outerHTML);

        var innerHTML = $('.siteNavGroupActive').getHTML(false);
        console.log("innerHTML: " + innerHTML);
    })
    //Hometask lesson 14
    xit('Second DZ lesson 14', () => {
        browser.url('https://v6.webdriver.io/docs/api.html');
        let urly = $('//*[text()="JSONWire protocol"]').getAttribute('href'); // get url
        browser.newWindow(urly);                                              // open url in new window
        browser.pause(2000);
        browser.switchWindow(urly);                                           // switch to url
        let elem = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
        let displayfunction = elem.isDisplayed();                             //check if wiki link displayed 
        console.log("Displayed???: " + displayfunction);
        browser.pause(2000);
        browser.switchWindow('webdriver.io');                                 //switch back to webdriver.io
        browser.pause(2000);
        browser.waitUntil(()=>{                                               //wait for header to be "API Docs"
            return $('.postHeaderTitle').getText()=="API Docs";            
        }, 5000, 'text is not equal');
        $('.postHeaderTitle').saveScreenshot('postHeaderTitleScreenshot.png');  //save screenshot of header title
        let twitterDisplayed = $('[href="https://twitter.com/webdriverio"]').isDisplayed(); //check if twitter displayed
        console.log("Twitter displayed??? " + twitterDisplayed);   
        let twitterDisplayedInViewport = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport(); // check if twitter in viewport
        console.log("Twitter displayed in viewport??? " + twitterDisplayedInViewport);        
        $('[href="https://twitter.com/webdriverio"]').scrollIntoView();          // scroll to twitter link(if not in viewport)
        browser.pause(2000);
        console.log("Twitter displayed??? (2 time)" + twitterDisplayed);       // check again is twitter displayed
        console.log("Twitter displayed in viewport??? " + twitterDisplayedInViewport);  // check again is twitter displayed in viewport
        let input = $('[href="/blog/"]');
        console.log("is Blog button focused??? " + input.isFocused());         // check if button is focused
        input.click();                                                         // click on link
        browser.pause(2000);
        //console.log("is Blog button focused??? " + input.isFocused());         // check if button in focused second time *Caused error*
    })
    //Hometask lesson 15
    //Guide button = //*[text()="Guide"]                        nav a[href*="gettingstarted"]       
    //Help button = [class*="nav-site"] [href*="help"]          nav a[href*="help"]                 //nav//a[text()="Help"]
    //Blog button = [class*="nav-site"] [href*="blog"]          nav a[href*="blog"]                 //nav//a[text()="Blog"]
    //Edit button = a[class*="edit"]                            //a[text()="Edit"]             
    //Contribute = li a[href="#contribute"]                     //a[text()="Contribute"]       
    //link v4.webdriver.io = p a[href*="v4"]                    //a[text()="v4.webdriver.io"]
    //p tag "Each..."   //div/span/p[2]                            //p[text()="Each command documentation usually comes with an example that demonstrates its usage in WebdriverIO's testrunner (in sync mode)."] kak est
    //div sidebar: (  
        //h3[text()="Introduction"]                     //div/div/div/nav/div/section/div[2]/div[1]/h3                     
        //a[text()="API Docs"]                          //div/div/div/nav/div/section/div[2]/div[1]/ul
        //h3[text()="Protocols"]                        //div/div/div/nav/div/section/div[2]/div[2]/h3
        //a[text()="Webdriver Protocol"]                li a[href="/docs/api/webdriver.html"]
        //li/a[text()="Appium"]                        li a[href*="appium"]
        //li/a[text()="JSON Wire Protocol"]           li a[href="/docs/api/jsonwp.html"]
        //li/a[text()="Mobile JSON Wire Protocol"]   li a[href*="mj"]
        //li/a[text()="Chromium"]                   li a[href*="chro"]
        //li/a[text()="Sauce Labs"]                li a[href*="sauce"]
        //li/a[text()="Selenium Standalone"]     li a[href*="selenium"]
    // )
//=========================================================================================================

    //Homework lesson 16 (Locators 2)
    //h5[contains(text(), 'Docs')]
    //a[contains(text(), 'Getting') and @href]
    //a[contains(text(), 'API Reference') or //footer/section/a[@href='/docs/api.html']]
    //footer/section//*[contains(text(), 'Help') and @href='/help.html'] 

    //h5[contains(text(),"Community")]
    //a[contains(text(),"Stack") or @target="_blank" and contains(href, "/stackoverflow/")]
    //a[contains(text(),"Chat") or @href = "//gitter/"]
    //a[contains(text(),"Twitter") or @href="twitter"]

    //h5[contains(text(),"More")]
    //a[contains(text(),"Blog") and @href="/blog"]
    //div/a[contains(text(),"Git")] 

    //end
//=========================================================================================================
    //Lesson 17
        //@Lesson 15 and Lesson 16
        //+
        //Appium url = //article/div/span/p/a[contains(text(),"Appium")]      [href*="appium.io" ]
//=========================================================================================================
    //Lesson18
    it.skip('should switch window', ()=>{
        browser.url('https://google.com');
        browser.newWindow('https://webdriver.io');
        browser.pause(2000);
        browser.switchWindow('google.com');
        browser.pause(2000);
        browser.switchWindow('webdriver');
        browser.pause(2000);
    });
    it.skip('should skip this', ()=>{
        browser.url('https://webdriver.io');
    });
//=========================================================================================================
    //Lesson 20
    // 5 test cases for github.com
    // First
    // 1) Go to https://github.com
    // 2) Click Marketplace button
    // 3) Type "app" in input
    // 4) Press Enter
        // Expected to return search elements with "app" in name
        it.skip('First test case', ()=>{
            browser.url('https://github.com');
            const toggleMenu = $('button[aria-label="Toggle navigation"]');
            toggleMenu.click();
            const marketplaceButton = $('[href="/marketplace"]');
            marketplaceButton.click();
            const inputSearch = $('.form-control.input-lg');
            inputSearch.addValue('app');
            
            //There are no Submit button, can't return search results(or didn't know how to)
            browser.pause(5000);                      
        });
    // Second  
    // 1) Go to https://github.com
    // 2) Click "Why Github?" or hover it**
    // 3) Click Project Management
    // 4) Scroll down to first 'Learn the basics' button
    // 5) click it 
    // 6) scroll down to footer
    // 7) push like button
        //Expected email input show up
        it.skip('Second test case', ()=>{
            browser.url('https://github.com');
            const toggleMenu = $('button[aria-label="Toggle navigation"]');
            toggleMenu.click();
            const whyButton = $('//summary[contains(text(), "Why")]');
            whyButton.click();
            const pmButton = $('a[href*="/project"]');
            pmButton.click();
            const managinButton = $('a[href*="/managin"]')
            managinButton.scrollIntoView();
            managinButton.click();
            const likeButton = $('.octicon-thumbsup')
            likeButton.scrollIntoView();
            browser.pause(2000);
            likeButton.click();    
            browser.pause(5000);                      
        });
    // Third test case
    // 1) Go to https://github.com
    // 2) click green button "Signup for Github"
    // 3) Scroll to verify 
    // 4) Try to click 2 images(if it's possible) on captcha and see the result
        //Expect to see error(if clicked)
        xit('Third test case', ()=>{
            browser.url('https://github.com');
            const pushTheButton = $('[type = "submit"]');
            pushTheButton.click();
            browser.pause(5000); 
            $('[class*="js-octocaptcha-frame"]').scrollIntoView();   //works
            $('#home_children_button').click();       //not working, can't found element(iframe)
            const firstImageCaptcha = $('//div[@id="game_children_challenge"]/div/a[1]');
            browser.pause(5000); 
            firstImageCaptcha.click();
            browser.pause(5000); 
            firstImageCaptcha.click();           
            browser.pause(5000);                      
        });
    //Fourth test case
    // 1) Go to https://github.com
    // 2) Scroll down to footer and find youtube logo
    // 3) click it
    // 4) click subscribe button
            //Expect to subscribe to the channel if logged in
            xit('Fourth test case', ()=>{
                browser.url('https://github.com');
                const youtubeButton = $('img[alt*="YouTube"]');
                youtubeButton.scrollIntoView();
                browser.pause(2000); 
                youtubeButton.click();
                const subscribeButton = $('#inner-header-container #subscribe-button');
                browser.pause(2000); 
                subscribeButton.click();
                browser.pause(5000);                                       
            });
    //Fifth test case
    // 1) Go to https://github.com
    // 2) find input and search for "qa automation"
    // 3) click submit button
    // 4) click on javascript language
    // 5) click on first result
    // 6) click on green download button
            //Expect download window open up
            xit('Fifth test case', ()=>{
                browser.url('https://github.com');
                const toggleMenu = $('button[aria-label="Toggle navigation"]');
                toggleMenu.click();
                const input = $('input[name="q"]');
                input.click();
                browser.pause(2000); 
                input.addValue("qa automation");
                browser.pause(2000); 
                const searchButton = $('//span[@class="js-jump-to-badge-search-text-global"]');
                searchButton.click();
                browser.pause(2000);
                const jsButton = $('[href*="JavaScript"]');
                jsButton.click();
                browser.pause(2000);
                const firstResult = $('//a[@href="/magemello/adf-automation-qa"]');
                firstResult.click();
                const greenButton = $('//summary[@class="btn btn-primary"]');
                greenButton.click();
                browser.pause(5000);                                                     
            });
})
//=========================================================================================================
//Lesson 26, 25(part2)
const mainPage = require('../page/main.page.js');
const docsPage = require('../page/docs.page.js');
const apiPage = require('../page/api.page.js');
const helpPage = require('../page/help.page.js');
const versionsPage = require('../page/versions.page.js');
describe('webdriver.io page second time', ()=>{
    xit('should demonstrate addValue command', ()=>{
        browser.url('http://v6.webdriver.io');
        // mainPage.searchInput.addValue('test');
        browser.pause(2000);
        mainPage.setUsername("type with method");
        browser.pause(2000);
        //Hometask for lesson 27(don't need for 25 part 2)
        // mainPage.clickDocsButton();
        // browser.pause(5000);        
    })
    xit('should click Docs page with method', ()=>{       
        docsPage.clickDocsButton(); 
        browser.pause(2000); 
    })
    xit('should click Contribute button with method on API page', ()=>{        
         apiPage.clickContributeButton(); 
         browser.pause(2000); 
     })
    xit('should click Help page and check is Displayed of "Browse Docs"', ()=>{        
        helpPage.checkIsDisplayed(); 
        browser.pause(2000); 
    })
    xit('should click Versions page, post version button is absent, so click documentation button ', ()=>{        
        versionsPage.clickDocumentationButton(); 
        browser.pause(2000); 
    })
    
})