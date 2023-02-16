//==UserScript==
// @name        SYR1 Easy Check
// @namespace    SYR1
// @version      2023.2.16
// @description  Still working on this dont get pissed if it messes up
// @author       Bishal L
// @updateURL    https://github.com/Bishal315/SYRContext/blob/main/SYR1%20Easy%20Check.js
// @downloadURL  https://github.com/Bishal315/SYRContext/blob/main/SYR1%20Easy%20Check.js
// @match        *://*/*
// @grant        GM_registerMenuCommand
// ==/UserScript==



//===========================================================================================//
// Learn tampermonkey here @https://www.tampermonkey.net/documentation.php#meta:run_at
//
// Not really that hard but it takes some time.
//===========================================================================================//

function getUsername() {
    var usernameContainer = document.querySelector('.on-behalf-of, .on-behalf-of-container');
    //this shit is checking the div container so it can find username text content
    //its checking River ticket creations and the other way.
    if (!usernameContainer) {
        return null;
    }
    return usernameContainer.querySelector('.user-name').textContent;
    //this is grabbing the username from the class .user-name ^
}

    //this thing will check if the text is highlighted and it will grab said highlighted text & it can be ignored if you go into simticket and just rightclick and click midway it will grab the ticket creator details

GM_registerMenuCommand("Midway Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://register.midway-auth.amazon.com/nextgen/user/show/" + selectedText + "?show-all=true";
    window.open(url,'_blank');
});

GM_registerMenuCommand("ID check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://ithelp.corp.amazon.com/checkid/" + selectedText;
    window.open(url,'_blank');
});

GM_registerMenuCommand("Phonetool Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://phonetool.amazon.com/users/" + selectedText;
    window.open(url,'_blank');
});
GM_registerMenuCommand("STUFF Assetnumber Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://stuff.amazon.com/#/search?query=" + selectedText + "&Page=1&Advanced=false&Department=IT&Site=SYR1&Status=AVAILABLE%7CDEPLOYED%7CDEPLOYED_TO_USER%7CIN_LIQUIDATION%7CIN_RMA%7CIN_TRANSFER%7CPENDING_VERIFICATION%7CSHIPPED_FOR_LIQUIDATION%7CALLOCATED";
    window.open(url,'_blank');
});
//===========================================================================================//
