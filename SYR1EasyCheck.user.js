// ==UserScript==
// @name        SYR1 Easy Check
// @namespace   SYR1
// @version     2023.9.18
// @description Still working on this, don't get upset if it messes up
// @author      Bishal L
// @updateURL   https://github.com/Bishal315/SYRContext/raw/main/SYR1EasyCheck.user.js
// @downloadURL https://github.com/Bishal315/SYRContext/raw/main/SYR1EasyCheck.user.js
// @match       *://*/*
// @grant       GM_registerMenuCommand
// ==/UserScript==

function getUsername() {
    var usernameContainer = document.querySelector('.on-behalf-of, .on-behalf-of-container');
    if (!usernameContainer) {
        return null;
    }
    return usernameContainer.querySelector('.user-name').textContent;
}

function openUrlInNewTab(url) {
    window.open(url, '_blank');
}

// Define constants for URLs
const SITEINFO = "https://sites.opstech.a2z.com/sites/";
const MIDWAY = "https://register.midway-auth.amazon.com/nextgen/user/show/";
const CHECKID = "https://ithelp.corp.amazon.com/checkid/";
const PHONETOOL = "https://phonetool.amazon.com/users/";
const MIDWAYPIN = "https://register.midway-auth.amazon.com/nextgen/user/set-timed-pin/";
const TAKA = "https://website.taka.fc.a2z.com/clients/syr1/";
const SERVICENOW = "https://sn.opstechit.amazon.dev/record?number=";

// Create custom menu items with Unicode icons and formatted names
GM_registerMenuCommand("⚙️ Midway Key Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(MIDWAY + selectedText + "?show-all=true");
});

GM_registerMenuCommand("🆔 User ID Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(CHECKID + selectedText);
});

GM_registerMenuCommand("📞 Phonetool Check", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(PHONETOOL + selectedText);
});

GM_registerMenuCommand("🔑 Send Midway PIN", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(MIDWAYPIN + selectedText);
});

GM_registerMenuCommand("📡 Taka Check [MAC]", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(TAKA + selectedText);
});

GM_registerMenuCommand("🎫 INC to Service now", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(SERVICENOW + selectedText);
});
GM_registerMenuCommand("🏢 Site Info", function() {
    var selectedText = window.getSelection().toString() || getUsername();
    openUrlInNewTab(SITEINFO + selectedText);
});

