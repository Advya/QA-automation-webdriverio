class CareersPage {
    get openPositions() {
        return $('//h2[contains(text(),"Open positions")]');
    }  
    scrollToPositions() {
        this.openPositions.scrollIntoView();
    }
    // get positionsList() {
    //     return $('//button/h3');       
    // }
    consolePositions() {   

        var elements = browser.findElements("xpath", '//button/h3');
        for (var i = 1; i < elements.length; i++) {
            console.log(`Position ${i})`+ $(elements[i]).getText());
        }
            
    




        // driver.findElements(By.className("message_body")).then(function(elements){
        //     elements.forEach(function (element) {
        //         element.getText().then(function(text){
        //             console.log(text);
        //         });
        //     });
        // });




        //all tries to get that by the loop
        
        //console.log("QWERTY: " + this.positionsList.selectByIndex(1));

        // const elementsWithSame = document.querySelectorAll(this.positionsList);
        // for(let i = 0; i < elementsWithSame.length; i++) {
        //     console.log(`qwerty ${i} and ${elementsWithSame[i].getText()}`);
        // }

        // $('//button/h3').each(function(index, item) {
        //     console.log(`qwerty ${index} and ${item.getText()}`);
        // });

        // for (var i = 1; i < 16; i++) {
        //     console.log("qwerty: " + $(`//button/h3[${i}]`).getText());
        // }

        // for (var i = 0; i < 15; i++) {
        //     console.log("VOT ZHE ONO: " + this.positionsList.nextElement().getText());
        // }
        
    }
}

module.exports = new CareersPage();