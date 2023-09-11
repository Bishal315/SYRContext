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

GM_registerMenuCommand("Midway Key Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://register.midway-auth.amazon.com/nextgen/user/show/" + selectedText + "?show-all=true";
    window.open(url,'_blank');
});

GM_registerMenuCommand("User ID check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://ithelp.corp.amazon.com/checkid/" + selectedText;
    window.open(url,'_blank');
});
GM_registerMenuCommand("Phonetool Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://phonetool.amazon.com/users/" + selectedText;
    window.open(url,'_blank');
});

https://website.taka.fc.a2z.com/clients/syr1/64c901debd9c/
GM_registerMenuCommand("Send Midway PIN", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://register.midway-auth.amazon.com/nextgen/user/set-timed-pin/" + selectedText;
    window.open(url,'_blank');
});

GM_registerMenuCommand("Taka Check [MAC]", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    var url = "https://website.taka.fc.a2z.com/clients/syr1/" + selectedText;
    window.open(url,'_blank');
});
//===========================================================================================//
