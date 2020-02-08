// @name         999Dice Naughty Bot
// @namespace    https://drive.google.com/open?id=0BzwzmqEWk5a-fmNJNVV6b01udDEyUWF6WmFmaHBfSXpTUmh4U0pldUV3a3NlNm1WeS02SlE
// @version      1.1 Standalone
// @description  One file bot... Single and Automatic bet play...
// @author       Naughty Santa
// @match        https://www.999dice.com/api/web.aspx
// @grant        none
// ==/UserScript==

var l = location.href;
var newScript;

function setHome() {
    document.body.innerHTML += '<input type="image" id="backHome" src="https://sanitizebot.github.io/7zO0BF49C84/NBot.png" onclick="location.assign(&apos;https://sanitizebot.github.io/7zO0BF49C84/index.html&apos;);" style="position: absolute; top: 10px; left: 10px;">';
}

function newTab(val) {
    var link, img, script;
    var el = document.getElementById('GenBox');
    if (val == '999') {
        link = 'https://www.999dice.com/api/web.aspx';
        img = 'https://thc.pologtijaune.pf/~TahitiBot/images/999.png';
        script = "newScript = document.createElement('script');newScript.type = 'text/javascript';newScript.src = 'https://sanitizebot.github.io/7zO0BF49C84/js/app.js';document.head.appendChild(newScript);";
    }
    if (val == 'G') {
        link = 'https://www.google.com';
        img = 'https://thc.pologtijaune.pf/~TahitiBot/images/999.png';
    }
    document.getElementById('Tabs').innerHTML += '<input type="image" class="tab" id="botLink" src="https://thc.pologtijaune.pf/~TahitiBot/images/' + val + '.min.png">';
    var temp = '<div><iframe src="' + link + '" style="display: block" nwdisable="true" nwfaketop="true"></iframe></div>';
    el.innerHTML += temp;
}

function newId(val) {

}

function focusTab() {

}

function setBotsUi() {
    document.head.innerHTML = '<title>NaughtyBot Big Bot</title><link rel="icon" href="https://thc.pologtijaune.pf/~TahitiBot/images/NBot.ico" type="image/x-icon"<meta http-equiv="cache-control" content="max-age=0" /><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="expires" content="0" /><meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" /><meta http-equiv="pragma" content="no-cache" />><link rel="stylesheet" type="text/css" href="https://sanitizebot.github.io/7zO0BF49C84/index.css"><script src="https://sanitizebot.github.io/7zO0BF49C84/main.js"></script>';
    document.body.innerHTML = '<header role="banner"> <h1 id="CurrentInfos">Naughty Bot Everywhere - Full Bot Alpha 0.1</h1> </header><div id="Tabs"><input type="image" class="tab" id="botLink" src="https://thc.pologtijaune.pf/~TahitiBot/images/NBot.min.jpg"></div><div id="GenBox" style="display: block"> <div id="BotsLink"><h3>Dice</h3> <input class="Img" type="image" src="https://thc.pologtijaune.pf/~TahitiBot/images/999.Banner.big.png" value="999" onclick="location.assign(&apos;https://www.999dice.com/api/web.aspx&apos;)"> <br><br><input class="Img" type="image" src="https://thc.pologtijaune.pf/~TahitiBot/images/FJ.Banner.big.png" value="fj" onclick="location.assign(&apos;https://www.fortunejack.com&apos;)"> <br><br><input class="Img" type="image" src="https://thc.pologtijaune.pf/~TahitiBot/images/rollin.Banner.big.png" value="rol" onclick="location.assign(&apos;https://rollin.io/ref/ndf&apos;)"> <br><br><h3>Restricted</h3> </div></div>';
}

if (l.search(/recaptcha/) == -1) {
    setHome();
}

if (l === 'https://sanitizebot.github.io/7zO0BF49C84/index.html' || l.search(/file:/) === 0) {
    document.body.innerHTML = "";
    setBotsUi();
} else if (l === 'https://www.999dice.com/api/web.aspx') {
    document.head.innerHTML += '<title></title><meta http-equiv="cache-control" content="max-age=0" /><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="expires" content="0" /><meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" /><meta http-equiv="pragma" content="no-cache" />';
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://sanitizebot.github.io/7zO0BF49C84/js/app.js';
    document.head.appendChild(newScript);
} else if (l === 'https://fortunejack.com/' || l === 'https://fortunejack.com/index.php' || l === 'https://fortunejack.com/games/dice/' || l === 'https://fortunejack.com/user.php') {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://thc.pologtijaune.pf/~TahitiBot/js/fj/main.js';
    document.head.appendChild(newScript);
} else if (l === 'https://fortunejack.com/games/blackjack/') {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://thc.pologtijaune.pf/~TahitiBot/js/fj/bj.js';
    document.head.appendChild(newScript);
    //location.replace('https://fortunejack.com/games/dice/');
} else if (l === 'https://rollin.io/ref/ndf' || l === 'https://rollin.io/') {
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://thc.pologtijaune.pf/~TahitiBot/js/ro/main.js';
    document.head.appendChild(newScript);
} else if (l.search(/livegames/) >= 0) {
    //setTimeout(function(){
    document.getElementById('backHome').remove();
    //}, 1000);
} else {
    console.log('nothing to do');
}
