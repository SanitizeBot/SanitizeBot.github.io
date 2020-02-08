// ==UserScript==
// @name         999Dice Naughty Bot
// @namespace    https://drive.google.com/open?id=1_y5-6PHp03IcM06M8jwTreYCuqe3gJsL
// @version      1.2.4 Standalone
// @description  Single and Automatic bet play...
// @author       Naughty Santa
// @match        https://www.999dice.com/api/web.aspx
// @grant        https://www.999dice.com
// ==/UserScript==

function ShowCookie() {
    console.info("Never Show your Cookie to anybody!!!\nYour current cookie value for HttpRequest:\n" + cookie)
}

function Connect() {
    UserName = document.getElementById("LoginVar").value;
    Password = document.getElementById("PasswordVar").value;
    Topt = document.getElementById("2FAVar").value;
    var c = "";
    "" !== Topt && (c += "&Topt=" + Topt);
    params = "a=Login&Key=bfe03f715d4846cc833b201edf27f5c1&Username=" + UserName + "&Password=" + Password + c;
    http.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        4 === http.readyState && 200 ===
            http.status && (ReqText = http.responseText, o = JSON.parse(ReqText), 1 === o.LoginInvalid ? document.getElementById("DivMessage").innerHTML = "Wrong Login/Password" : (document.getElementById("DivMessage").innerHTML = "999dice Connection Statut: UP\nEnjoy the game ", cookie = o.SessionCookie, AccountID = o.AccountId, BTCAddy = o.DepositAddress || null, BTCBalance = o.Balance, BTCBetCount = o.BetCount, BTCProfit = +o.BetPayOut + o.BetPayIn, BTCWin100 = 0 === o.BetCount ? 0 : o.BetWinCount / o.BetCount * 100, oDoge = o.Doge, DOGEAddy = oDoge.DepositAddress ||
                null, DOGEBalance = oDoge.Balance, DOGEBetCount = oDoge.BetCount, DOGEProfit = +oDoge.BetPayOut + oDoge.BetPayIn, DOGEWin100 = 0 === oDoge.BetCount ? 0 : oDoge.BetWinCount / oDoge.BetCount * 100, oLtc = o.LTC, LTCAddy = oLtc.DepositAddress || null, LTCBalance = oLtc.Balance, LTCBetCount = oLtc.BetCount, LTCProfit = +oLtc.BetPayOut + oLtc.BetPayIn, LTCWin100 = 0 === oLtc.BetCount ? 0 : oLtc.BetWinCount / oLtc.BetCount * 100, AccountInfo(), LoadChoice()))
    };
    http.send(params)
}

function AccountInfo() {
    document.getElementById("DivAccountName").innerHTML = UserName;
    document.getElementById("DivAccountId").innerHTML = AccountID || 0;
    document.getElementById("DivBtcAddy").innerHTML = BTCAddy;
    document.getElementById("DivBtcBalance").innerHTML = (BTCBalance / xC).toFixed(8) || "0.00000000";
    document.getElementById("DivBtcBetCount").innerHTML = BTCBetCount || 0;
    document.getElementById("DivBtcProfit").innerHTML = (BTCProfit / xC).toFixed(8) || "0.00000000";
    document.getElementById("DivBtcWin100").innerHTML =
        BTCWin100.toFixed(2) + "%" || 0;
    document.getElementById("DivDogeAddy").innerHTML = DOGEAddy;
    document.getElementById("DivDogeBalance").innerHTML = (DOGEBalance / xC).toFixed(8) || "0.00000000";
    document.getElementById("DivDogeBetCount").innerHTML = DOGEBetCount || 0;
    document.getElementById("DivDogeProfit").innerHTML = (DOGEProfit / xC).toFixed(8) || "0.00000000";
    document.getElementById("DivDogeWin100").innerHTML = DOGEWin100.toFixed(2) + "%" || 0;
    document.getElementById("DivLtcAddy").innerHTML = LTCAddy;
    document.getElementById("DivLtcBalance").innerHTML =
        (LTCBalance / xC).toFixed(8) || "0.00000000";
    document.getElementById("DivLtcBetCount").innerHTML = LTCBetCount || 0;
    document.getElementById("DivLtcProfit").innerHTML = (LTCProfit / xC).toFixed(8) || "0.00000000";
    document.getElementById("DivLtcWin100").innerHTML = LTCWin100.toFixed(2) + "%" || 0
}

function LoadChoice() {
    logMe("Connected!!!", "green");
    document.getElementById("connectDiv").style.display = "none";
    document.getElementById("Choice").style.display = "block";
    document.getElementById("ChoiceHelp").style.display = "block";
    document.getElementById("ConnectHelp").style.display = "none";
    document.getElementById("HelpMask").style.display = "none";
    LoadSet("General")
}

function LoadSingle() {
    SaveType = "Single";
    document.getElementById("Choice").style.display = "none";
    document.getElementById("AutoPlay").style.display = "none";
    document.getElementById("SystemPlay").style.display = "none";
    document.getElementById("MultiPlay").style.display = "none";
    document.getElementById("SinglePlay").style.display = "block";
    document.getElementById("AutoHelp").style.display = "none";
    document.getElementById("SingleHelp").style.display = "block";
    document.getElementById("HelpMask").style.display = "none";
    LoadStats();
    document.getElementById("ButtonStart").setAttribute("onClick", "PauseStart('Single');");
    document.getElementById("BetOnceButton").setAttribute("onClick", "new PlaceBet(function(){});");
    document.getElementById("InjectButton").setAttribute("onClick", "VarUpdate();");
    document.getElementById("SaveButton").setAttribute("onClick", "SaveSet('Single');");
    document.getElementById("LoadButton").setAttribute("onClick", "LoadSet('Single');");
    LoadSlot("Single");
    logMe("Single Bet Ready!!!", "green");
    CookieChoice("Single")
}

function LoadAuto() {
    SaveType = "Auto";
    document.getElementById("Choice").style.display = "none";
    document.getElementById("SinglePlay").style.display = "none";
    document.getElementById("SystemPlay").style.display = "none";
    document.getElementById("MultiPlay").style.display = "none";
    document.getElementById("AutoPlay").style.display = "block";
    document.getElementById("SingleHelp").style.display = "none";
    document.getElementById("AutoHelp").style.display = "block";
    document.getElementById("HelpMask").style.display = "none";
    LoadStats();
    document.getElementById("ButtonStart").setAttribute("onClick", "PauseStart('Auto');");
    document.getElementById("BetOnceButton").setAttribute("onClick", "new ABPlaceBet(function(){});");
    document.getElementById("InjectButton").setAttribute("onClick", "ABVarUpdate();");
    document.getElementById("SaveButton").setAttribute("onClick", "NewSave('Auto');");
    document.getElementById("LoadButton").setAttribute("onClick", "NewLoad('Auto');");
    LoadSlot("Auto");
    logMe("Auto Bets Ready!!!", "green");
    CookieChoice("Auto")
}

function LoadSystem() {
    SaveType = "System";
    document.getElementById("Choice").style.display = "none";
    document.getElementById("SinglePlay").style.display = "none";
    document.getElementById("AutoPlay").style.display = "none";
    document.getElementById("MultiPlay").style.display = "none";
    document.getElementById("SystemPlay").style.display = "block";
    LoadStats()
}

function LoadMulti() {
    document.getElementById("Choice").style.display = "none";
    document.getElementById("SinglePlay").style.display = "none";
    document.getElementById("AutoPlay").style.display = "none";
    document.getElementById("SystemPlay").style.display = "none";
    document.getElementById("MultiPlay").style.display = "block";
    LoadStats()
}

function LoadSlot(c) {
    var e = document.getElementById("Slot");
    document.getElementById("Slot").innerHTML = "";
    var f;
    "Single" === c ? f = '<option value="Temp1">Temp1</option>\n<option value="Temp2">Temp2</option>\n<option value="Slot01">Slot01</option>\n<option value="Slot02">Slot02</option>\n<option value="Slot03">Slot03</option>\n<option value="Slot04">Slot04</option>\n<option value="Slot05">Slot05</option>\n<option value="Slot06">Slot06</option>\n<option value="Slot07">Slot07</option>\n<option value="Slot08">Slot08</option>\n<option value="Slot09">Slot09</option>\n<option value="Slot10">Slot10</option>\n<option value="S1">S1</option>' : "Auto" ===
        c ? f = '<option value="Temp3">Temp3</option>\n<option value="Temp4">Temp4</option>\n<option value="Slot11">Slot11</option>\n<option value="Slot12">Slot12</option>\n<option value="Slot13">Slot13</option>\n<option value="Slot14">Slot14</option>\n<option value="Slot15">Slot15</option>\n<option value="Slot16">Slot16</option>\n<option value="Slot17">Slot17</option>\n<option value="Slot18">Slot18</option>\n<option value="Slot19">Slot19</option>\n<option value="Slot20">Slot20</option>\n<option value="A1">A1</option>\n<option value="A2">A2</option>' :
        "System" === c ? f = '<option value="Temp5">Temp5</option>\n<option value="Temp6">Temp6</option>\n<option value="Slot21">Slot21</option>\n<option value="Slot22">Slot22</option>\n<option value="Slot23">Slot23</option>\n<option value="Slot24">Slot24</option>\n<option value="Slot25">Slot25</option>\n<option value="Slot26">Slot26</option>\n<option value="Slot27">Slot27</option>\n<option value="Slot28">Slot28</option>\n<option value="Slot29">Slot29</option>\n<option value="Slot20">Slot20</option>' : "Multi" ===
        c && (document.getElementById("DivMessage").innerHTML = "Nothing to charge for now", f = '<option value="NoSlot">No</option>');
    0 === document.getElementById("Slot").children.length ? e.innerHTML = f : e.innerHTML = f + "\n" + document.getElementById("Slot").innerHTML;
    logMe(c + " Slot list loaded", "green")
}

function LoadStats() {
    document.getElementById("GenSet").style.display = "none";
    document.getElementById("Help").style.display = "none";
    document.getElementById("HelpMask").style.display = "none";
    document.getElementById("Tools").style.display = "none";
    document.getElementById("Stats").style.display = "inline-block";
    keyEnable = 1
}

function LoadTools() {
    document.getElementById("GenSet").style.display = "none";
    document.getElementById("Help").style.display = "none";
    document.getElementById("HelpMask").style.display = "none";
    document.getElementById("Stats").style.display = "none";
    document.getElementById("Tools").style.display = "inline-block";
    keyEnable = 0
}

function LoadSettings() {
    document.getElementById("Help").style.display = "none";
    document.getElementById("Stats").style.display = "none";
    document.getElementById("Tools").style.display = "none";
    document.getElementById("GenSet").style.display = "inline-block";
    keyEnable = 0
}

function LoadHelp() {
    document.getElementById("GenSet").style.display = "none";
    document.getElementById("Stats").style.display = "none";
    document.getElementById("Tools").style.display = "none";
    document.getElementById("ChoiceHelp").style.display = "none";
    document.getElementById("Help").style.display = "inline-block";
    keyEnable = 1
}

function Results(c, e, f, h, l, m) {
    var n = document.getElementById("FullResults");
    c = '<span class="ResultsHead" style="width: 60px;">' + c + '</span>\n<a class="ResultsHead" href="https://www.999dice.com/Bets/?b=' + e + '" target="_blank" style="width: 200px;">' + e + '</a>\n<span class="ResultsHead" style="width: 80px;">' + f + '</span>\n<span class="ResultsHead" style="width: 30px;">' + h + '</span>\n<span class="ResultsHead" style="width: 80px;">' + l + '</span>\n<span class="ResultsHead" style="width: 200px; border-right-style: solid;">' +
        m + "</span>";
    CreateObjectBefore("div", "RLine", "", "", n, n.children[0]);
    n.children[0].innerHTML = c;
    n = n.children;
    100 < n.length && document.getElementById("FullResults").removeChild(n[n.length - 1])
}

function ResultColor(c) {
    document.getElementById("FullResults").children[0].children[0].style.color = c;
    document.getElementById("FullResults").children[0].children[1].style.color = c;
    document.getElementById("FullResults").children[0].children[2].style.color = c;
    document.getElementById("FullResults").children[0].children[3].style.color = c;
    document.getElementById("FullResults").children[0].children[4].style.color = c;
    document.getElementById("FullResults").children[0].children[5].style.color = c
}

function logMe(c, e) {
    var f = new Date,
        h = f.getHours(),
        l = f.getMinutes(),
        m = f.getSeconds(),
        f = document.getElementById("LogPanel"),
        h = h = "<a>" + BetNum + "|" + h + ":" + l + ":" + m + '| <a href="https://www.999dice.com/Bets/?b=' + BetId + '" target="_blank" style="width: 200px;">' + BetId + "</a></a>";
    CreateObjectBefore("div", "LogLabel", "", "", f, f.children[0]);
    f.children[0].innerHTML = c;
    f.children[0].style.color = e;
    f.children[0].style.textAlign = "right";
    CreateObjectBefore("div", "LogLabel", "", "", f, f.children[0]);
    f.children[0].innerHTML =
        h;
    f.children[0].style.color = e
}

function ShowMask(c) {
    var e = document.getElementById("HelpMask");
    e.className && (e.removeAttribute("class"), clearTimeout());
    e.style.display = "block";
    e.style.top = c + "px";
    e.setAttribute("class", "MaskAnim");
    setTimeout(function() {
        e.removeAttribute("class")
    }, 1200)
}

function showHide(c, e, f) {
    var h, l;
    "TextOnWin" === f ? (h = "IncreaseOnWin:", l = "ResetOnWin:") : "TextOnLosse" === f && (h = "IncreaseOnLo:", l = "ResetOnLosse:");
    !1 === c.checked ? (document.getElementById(e).style.display = "block", document.getElementById(f).innerHTML = h) : (document.getElementById(e).style.display = "none", document.getElementById(f).innerHTML = l)
}

function showSwapO(c) {
    var e = "",
        f = document.getElementById("SwapOption");
    "Repeat" === c ? (e += '<span class="SingleText" style="width: 70px; top: 5px; left: -20px;">Win</span><input id="SwapRepeatW" class="SingleInput" type="text" value="0" style="width: 70px; top: 0px; left: 70px;">', e += '<span class="SingleText" style="width: 70px; top: 5px; left: 160px;">Loss</span>', e += '<input id="SwapRepeatL" class="SingleInput" type="text" value="0" style="width: 70px; top: 0px; left: 250px;">', f.innerHTML = e, f.display =
        "block") : "Slide" === c ? (e += '<span class="SingleText" style="top: 5px;">Dont work yet!!!</span>', f.innerHTML = e, f.display = "block") : "Patern" === c ? (e += '<input id="SwapPatern" class="SingleInput" type="text" value="0" style="width: 320px; top: 0px; left: 0px;">', f.innerHTML = e, f.display = "block") : (f.innerHTML = e, f.display = "none")
}

function LoadExample(c) {
    "S1" === c ? (localStorage.setItem("S1", "Mod78.smaller&2,4,8,16,32&1000000&78&0&3&2&1&0&0&1,2,3,15,150&0&0&100&1&100&DOGE"), document.getElementById("Slot").value = "S1", LoadSet("Single")) : "A1" === c ? (localStorage.setItem("A1", "95.Example1&1&1000000&95&1&6&0&900&0&900&&&100000000&1&0&200&0&5&0&1&0&100&0&100&1&DOGE"), document.getElementById("Slot").value = "A1", LoadSet("Auto")) : "A2" === c && (localStorage.setItem("A2", "95.Example2&1,2,4,8,16,32,64,128,256,512,1024&100000&5&1&6&1&0&1&0&1&&&0&0&10&0&5&0&1&0&100&0&100&1&DOGE"),
        document.getElementById("Slot").value = "A2", LoadSet("Auto"))
}

function CookieChoice(c) {
    "Auto" === c ? (ABCookie = cookie, logMe("Auto Cookie Loaded", "blue")) : "System" === c ? (SysCookie = cookie, logMe("System Cookie Loaded", "blue")) : (SinCookie = cookie, logMe("Single Cookie Loaded", "blue"));
    HideMessage = 0
}

function CreateNewAccount() {
    0 === Account ? NewAccount() : (document.getElementById("DivMessage").innerHTML = "Nouvelle Tentative", logMe("New Try", "blue"), UserPass())
}

function NewAccount() {
    params = "a=CreateAccount&Key=bfe03f715d4846cc833b201edf27f5c1";
    http.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if (4 === http.readyState && 200 === http.status) {
            ReqText = http.responseText;
            o = JSON.parse(ReqText);
            cookie = o.AccountCookie;
            cookieS = o.SessionCookie;
            AccountID = o.AccountId;
            BTCAddy = o.DepositAddress;
            if (o.AccountCookie) return document.getElementById("DivAccountId").innerHTML =
                AccountID || 0, document.getElementById("DivBtcBalance").innerHTML = "0.00000000", document.getElementById("DivBtcBetCount").innerHTML = 0, document.getElementById("DivBtcProfit").innerHTML = "0.00000000", document.getElementById("DivBtcWin100").innerHTML = 0, document.getElementById("DivDogeBalance").innerHTML = "0.00000000", document.getElementById("DivDogeBetCount").innerHTML = 0, document.getElementById("DivDogeProfit").innerHTML = "0.00000000", document.getElementById("DivDogeWin100").innerHTML = 0, document.getElementById("DivLtcBalance").innerHTML =
                "0.00000000", document.getElementById("DivLtcBetCount").innerHTML = 0, document.getElementById("DivLtcProfit").innerHTML = "0.00000000", document.getElementById("DivLtcWin100").innerHTML = 0, logMe("New Account Done!!!", "green"), Account = 1, UserPass();
            document.getElementById("DivMessage").innerHTML = "Failed";
            logMe("Account Creation Failed!!!", "red");
            audioErr.play()
        }
    };
    http.send(params)
}

function UserPass() {
    UserName = document.getElementById("LoginVar").value;
    Password = document.getElementById("PasswordVar").value;
    null === UserName || null === Password ? document.getElementById("DivMessage").innerHTML = "Failed... Check It!!!" : (params = "a=CreateUser&s=" + cookieS + "&Username=" + UserName + "&Password=" + Password, http.open("POST", "https://www.999dice.com/api/web.aspx", !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
        4 === http.readyState && 200 ===
            http.status && (ReqText = http.responseText, g = JSON.parse(ReqText), 1 === g.AccountHasUser && (document.getElementById("DivMessage").innerHTML = "User&Pass already Exist!!!\nPress Connect Then!!!", document.getElementById("DivMessage").style.color = "red", logMe("Account Password Set Failed!!!", "red"), audioErr.play()), 1 === g.UsernameTaken && (document.getElementById("DivMessage").innerHTML = "Name already Taken!!!\nChange it and retry!!!", document.getElementById("DivMessage").style.color = "red", logMe("Account Password Set Failed!!!",
                "red"), audioErr.play()), 1 === g.success && (document.getElementById("DivMessage").innerHTML = "User&Pass has been created!!!\nThanks a lot to support my work", document.getElementById("DivMessage").style.color = "green", logMe("Account Password Done!!!", "green"), LoadChoice()))
    }, http.send(params))
}

function GetDepositAddy(c) {
    params = "a=GetDepositAddress&s=" + cookie + "&Currency=" + c;
    http = new XMLHttpRequest;
    http.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        4 === http.readyState && 200 === http.status && (ReqText = http.responseText, g = JSON.parse(ReqText), g.Address ? "btc" === c ? document.getElementById("DivBtcAddy").innerHTML = g.Address || 0 : "doge" === c ? document.getElementById("DivDogeAddy").innerHTML =
            g.Address || 0 : "ltc" === c && (document.getElementById("DivLtcAddy").innerHTML = g.Address || 0) : document.getElementById("DivGetStatut").innerHTML = "Failed")
    };
    http.send(params)
}

function Withdraw() {
    "0" !== document.getElementById("WithdrawAmountVar").value ? WithdrawAmount = Number.parseInt(document.getElementById("WithdrawAmountVar").value, 10) : 0 === document.getElementById("WithdrawAmountVar").value && (WithdrawAmount = 0);
    WithdrawAddy = document.getElementById("MWAddy").value;
    BetCoin = document.getElementById("WithdrawCurrencyVar").value;
    WithdrawAddy && "Empty" !== WithdrawAddy && WithdrawAmount ? "btc" === BetCoin && 16E3 > WithdrawAmount && 0 !== WithdrawAmount ? (document.getElementById("DivMessage").innerHTML =
        "BTC Amount is too small. Minimum = 16000 Satoshi", HideMessage = 0) : "doge" === BetCoin && 2E8 > WithdrawAmount && 0 !== WithdrawAmount ? (document.getElementById("DivMessage").innerHTML = "DOGE Amount is too small.\nMinimum = 200000000", HideMessage = 0) : "ltc" === BetCoin && 1E5 > WithdrawAmount && 0 !== WithdrawAmount ? (document.getElementById("DivMessage").innerHTML = "LTC Amount is too small.\nMinimum = 100000", HideMessage = 0) : (params = "a=Withdraw&s=" + cookie + "&Amount=" + WithdrawAmount + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin,
        http.open("POST", "https://www.999dice.com/api/web.aspx", !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
            4 === http.readyState && 200 === http.status && (ReqText = http.responseText, g = JSON.parse(ReqText), g.Pending ? (document.getElementById("DivMessage").innerHTML = "Pending: " + g.Pending || 0, HideMessage = 0, logMe("Pending: " + WithdrawAmount, "white"), WithdrawAddy = WithdrawAmount = null) : (document.getElementById("DivMessage").innerHTML = "Error: Too Small or Insufficient funds",
                HideMessage = 0))
        }, http.send(params)) : (document.getElementById("DivMessage").innerHTML = "You have to fill amount to withdraw and withdraw address", HideMessage = 0)
}

function AutoWith() {
    AWparams = "a=Withdraw&s=" + cookie + "&Amount=" + WithdrawAmount + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin;
    var c = new XMLHttpRequest;
    c.open("POST", "https://www.999dice.com/api/web.aspx", !1);
    c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    c.onreadystatechange = function() {
        if (4 === c.readyState && 200 === c.status)
            if (ReqText = c.responseText, g = JSON.parse(ReqText), g.Pending) {
                document.getElementById("DivMessage").innerHTML = "Withdraw: " + g.Pending + " to " + WithdrawAddy || 0;
                logMe("Auto WithDraw:" +
                    (WithdrawAmount / xC).toFixed(8) + " " + BetCoin, "green");
                HideMessage = 0;
                AWCount++;
                AWGlobal -= -WithdrawAmount;
                document.getElementById("DivAWProfit").innerHTML = (AWProfit / xC).toFixed(8);
                document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                AWProfit = BetStatut = WithdrawAmount = AWProfit = 0;
                if (1 === PlayType) return PlayType = 0, StartPlay();
                if (2 === PlayType) return PlayType = 0, ABPlay();
                if (3 === PlayType) return PlayType = 0, SysStart()
            } else document.getElementById("DivMessage").innerHTML = "Error: Too Small or Insufficient funds",
                audioErr.play(), HideMessage = 0
    };
    HideMessage = 0;
    c.send(AWparams)
}

function VarUpdate() {
    BetSize = document.getElementById("BetSizeVar").value.split(",").map(Number);
    if (0 === BetSize[0] && 1 === BetSize.length) document.getElementById("DivMessage").innerHTML = "BetSize is null ...";
    else if (Odd = Number.parseFloat(document.getElementById("OddVar").value), !0 === isNaN(Odd)) document.getElementById("DivMessage").innerHTML = "% win is null, 5% to 95% ...";
    else if (5 > Odd ? (document.getElementById("OddVar").value = 5, document.getElementById("DivMessage").innerHTML = "Chance Minimum 5% win") : 95 <
        Odd && (document.getElementById("OddVar").value = 95, document.getElementById("DivMessage").innerHTML = "Chance Max 95% win"), LowMin = 0, HighMax = 999999, LowMax = Math.round(Odd / 100 * 1E6 - 1), HighMin = Number(HighMax - LowMax), MidMin = LowMin + Math.round((HighMax - LowMax) / 2), MidMax = MidMin + LowMax, BetMin = 49.95 >= Odd ? 1 : Math.floor(100 / (99.9 - Odd)), HighLow = document.getElementById("HighLowVar").value, "Low" === HighLow ? HighLow = 0 : "High" === HighLow && (HighLow = 1), x = document.getElementById("XVar").value, 0 >= x && (x = 1, document.getElementById("XVar").value =
            x), Change = document.getElementById("ChangeVar").value, "Same" === Change ? Change = 0 : "ChangeAfterLosse" === Change ? Change = 1 : "ChangeAfterWin" === Change ? Change = 2 : "AlmostChange" === Change ? Change = 3 : "Random" === Change ? Change = 4 : "Patern" === Change ? Change = 5 : "SantaRandom" === Change && (Change = 6), RepeatWin = parseInt(document.getElementById("RepeatWinVar").value, 10), 1 >= RepeatWin && (RepeatWin = 1, document.getElementById("RepeatWinVar").value = RepeatWin), RepeatLosse = parseInt(document.getElementById("RepeatLosseVar").value, 10), 1 >=
        RepeatLosse && (RepeatLosse = 1, document.getElementById("RepeatLosseVar").value = RepeatLosse), FinalBetStop = !1 === document.getElementById("FinalBetStopVar").checked ? 0 : 1, AW100 = document.getElementById("AW100").value, MultiSwitch = !1 === document.getElementById("MultiSwitchVar").checked ? 0 : 1, T2C = Number(parseFloat(document.getElementById("T2CVar").value)), isNaN(T2C) && 1 === MultiSwitch) document.getElementById("DivMessage").innerHTML = "MultiSwitch Activated but T2C is null";
    else if (BetPat = document.getElementById("BetPatVar").value.split(",").map(Number),
        BetPat.length != BetSize.length && 5 === Change) document.getElementById("DivMessage").innerHTML = "High/Low Patern length doesnt feet Bet Size length!!!";
    else if (BetWin = document.getElementById("BetWinVar").value.split(",").map(Number), BetWin.length != BetSize.length && 5 === Change) document.getElementById("DivMessage").innerHTML = "%win Patern length doesnt feet Bet Size length!!!";
    else if (BetX = document.getElementById("BetXVar").value.split(",").map(Number), 0 === BetX[0] && 1 === MultiSwitch && 1 === BetX.length) document.getElementById("DivMessage").innerHTML =
        "MultiSwich Activated but Multiplicator list is empty!!!";
    else {
        Crypto !== document.getElementById("CryptoVar").value && (Wagered = ProfitGlobal = Profit = 0);
        Crypto = document.getElementById("CryptoVar").value;
        if ("BTC" === Crypto) Coin = "Btc", BetCoin = "btc";
        else if ("DOGE" === Crypto) Coin = "Doge", BetCoin = "doge";
        else if ("LTC" === Crypto) Coin = "Ltc", BetCoin = "ltc";
        else {
            document.getElementById("DivMessage").innerHTML = "Which Crypto to play";
            return
        }
        if ((BetSize[0] * x || BetSize[0] * BetX[0]) < BetMin) document.getElementById("DivMessage").innerHTML =
            "First Bet Size is too small. Minimum value = " + BetMin;
        else {
            var c = BetSize.slice(0, BetSize.length).reduce(function(c, e, l, m) {
                    return c + e
                }),
                e = BetX.slice(0, BetX.length).reduce(function(c, e, l, m) {
                    return c + e
                });
            MaxBetLosse = c * x * RepeatLosse;
            1 === MultiSwitch && (MaxBetLosse *= e);
            document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
            "Start" == document.getElementById("ButtonStart").innerHTML && (document.getElementById("ButtonStart").style.backgroundColor = "Green");
            document.getElementById("DivMessage").innerHTML =
                "Settings Injected!!!";
            HideMessage = 0;
            Inject = 1
        }
    }
}

function ABVarUpdate() {
    BetSize = document.getElementById("ABBetSize").value.split(",").map(Number);
    if (0 === BetSize[0] && 1 === BetSize.length) document.getElementById("DivMessage").innerHTML = "BetSize is null ...";
    else if (Odd = Number.parseFloat(document.getElementById("ABOdd").value), !0 === isNaN(Odd)) document.getElementById("DivMessage").innerHTML = "% win is null, 5% to 95% ...";
    else {
        5 > Odd ? (document.getElementById("ABOdd").value = 5, document.getElementById("DivMessage").innerHTML = "Chance Minimum 5% win") : 95 < Odd &&
            (document.getElementById("ABOdd").value = 95, document.getElementById("DivMessage").innerHTML = "Chance Max 95% win");
        LowMin = 0;
        HighMax = 999999;
        LowMax = Math.round(Odd / 100 * 1E6 - 1);
        HighMin = Number(HighMax - LowMax);
        MidMin = LowMin + Math.round((HighMax - LowMax) / 2);
        MidMax = MidMin + LowMax;
        BetMin = 49.95 >= Odd ? 1 : Math.floor(100 / (99.9 - Odd));
        HighLow = document.getElementById("ABHighLow").value;
        "Low" === HighLow ? HighLow = 0 : "High" === HighLow ? HighLow = 1 : "Midle" === HighLow ? HighLow = 2 : "Random" === HighLow && (HighLow = 3);
        x = 1;
        Change = document.getElementById("ABChange").value;
        var c = document.getElementById("SwapRepeatW");
        c && (SwapRepeatW = c.value, SwapRepeatL = document.getElementById("SwapRepeatL").value);
        if (c = document.getElementById("SwapPatern")) SwapPatern = c.value;
        !1 === document.getElementById("R2bbCheckWin").checked ? (R2bbCheckWin = 0, R2bbWin = document.getElementById("R2bbWin").value) : R2bbCheckWin = 1;
        !1 === document.getElementById("R2bbCheckLosse").checked ? (R2bbCheckLosse = 0, R2bbLosse = document.getElementById("R2bbLosse").value) : R2bbCheckLosse = 1;
        StopMaxBalance = Number(document.getElementById("StopMaxBalance").value);
        StopMinBalance = Number(document.getElementById("StopMinBalance").value);
        MaxPayIn = document.getElementById("MaxPayIn").value;
        "" === MaxPayIn && (MaxPayIn = 0);
        ResetBB = !1 === document.getElementById("Reset2BB").checked ? 0 : 1;
        StopAfter = !1 === document.getElementById("StopAfter").checked ? 0 : 1;
        MultiMax = !1 === document.getElementById("MultiMax").checked ? 0 : 1;
        Round = parseInt(document.getElementById("ABRoundVar").value, 10);
        1 >= Round && (Round = 1, document.getElementById("ABRoundVar").value = Round);
        FinalBetStop = !1 === document.getElementById("ABFinalBetStop").checked ?
            0 : 1;
        ABAW100 = document.getElementById("ABAW100").value;
        MultiSwitch = !1 === document.getElementById("ABMultiSwitch").checked ? 0 : 1;
        T2C = Number(parseFloat(document.getElementById("ABL2C").value));
        if (!0 === isNaN(T2C) && 1 === MultiSwitch) document.getElementById("DivMessage").innerHTML = "MultiSwitch Activated but T2C is null";
        else if (BetX = document.getElementById("ABBetX").value.split(",").map(Number), 0 === BetX[0] && 1 === MultiSwitch && 1 === BetX.length) document.getElementById("DivMessage").innerHTML = "MultiSwich Activated but Multiplicator list is empty!!!";
        else {
            ReplayProfit = !1 === document.getElementById("ReplayProfit").checked ? 0 : 1;
            Crypto = document.getElementById("ABCrypto").value;
            Crypto != document.getElementById("ABCrypto").value && (StartingBalance = 0);
            if ("BTC" === Crypto) Coin = "Btc", BetCoin = "btc", 0 === StartingBalance && (StartingBalance = BTCBalance);
            else if ("DOGE" === Crypto) Coin = "Doge", BetCoin = "doge", 0 === StartingBalance && (StartingBalance = DOGEBalance);
            else if ("LTC" === Crypto) Coin = "Ltc", BetCoin = "ltc", 0 === StartingBalance && (StartingBalance = LTCBalance);
            else {
                document.getElementById("DivMessage").innerHTML =
                    "Which Crypto to play";
                return
            }
            if ((BetSize[0] * x || BetSize[0] * BetX[0]) < BetMin) document.getElementById("DivMessage").innerHTML = "First Bet Size is too small. Minimum value = " + BetMin;
            else {
                var c = BetSize.slice(0, BetSize.length).reduce(function(c, e, f, n) {
                        return c + e
                    }),
                    e = BetX.slice(0, BetX.length).reduce(function(c, e, f, n) {
                        return c + e
                    }),
                    f = 1;
                R2bbLosse >= R2bbWin && 0 === R2bbCheckLosse ? f = Math.pow(Number(R2bbLosse / 100) + 1, Round) : 0 === R2bbCheckWin && (f = Math.pow(Number(R2bbWin / 100) + 1, Round));
                MaxBetLosse = (c + c * f) * x;
                1 === MultiSwitch &&
                    (MaxBetLosse *= e);
                document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
                document.getElementById("DivMessage").innerHTML = "Settings Injected!!!";
                HideMessage = 0;
                Inject = 1
            }
        }
    }
}

function SysInjector() {
    if (document.getElementById("DivSysCookie"))
        if (SysCookie = document.getElementById("DivSysCookie").innerHTML, Session = 9999999, BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number), 0 === BetSize[0]) document.getElementById("DivSysMessage").innerHTML = "BetSize is null ...";
        else if (Odd = Number.parseFloat(document.getElementById("SysOddVar").value), !0 === isNaN(Odd)) document.getElementById("DivSysMessage").innerHTML = "% win is null, 5% to 95% ...";
    else if (5 > Odd ? (document.getElementById("SysOddVar").value =
            5, document.getElementById("DivSysMessage").innerHTML = "Chance Minimum 5% win") : 95 < Odd && (document.getElementById("SysOddVar").value = 95, document.getElementById("DivSysMessage").innerHTML = "Chance Max 95% win"), LowMin = 0, HighMax = 999999, LowMax = Math.round(Odd / 100 * 1E6 - 1), HighMin = Number(HighMax - LowMax), MidMin = LowMin + Math.round((HighMax - LowMax) / 2), MidMax = MidMin + LowMax, BetMin = 49.95 >= Odd ? 1 : Math.floor(100 / (99.9 - Odd)), HighLow = document.getElementById("SysHighLowVar").value, "Low" === HighLow ? HighLow = 0 : "High" === HighLow &&
        (HighLow = 1), x = document.getElementById("SysXVar").value, 0 >= x && (x = 1), Change = document.getElementById("SysChangeVar").value, "Same" === Change ? Change = 0 : "Change after losse" === Change ? Change = 1 : "Change after win" === Change ? Change = 2 : "Almost Change" === Change ? Change = 3 : "Random" === Change ? Change = 4 : "Patern" === Change ? Change = 5 : "SantaRandom" === Change && (Change = 6), SysStopWin = !1 === document.getElementById("SysCheckStopWin").checked ? 0 : 1, SysStopWinAmount = document.getElementById("SysStopWinAmount").value, SysStopLosse = !1 === document.getElementById("SysCheckStopLosse").checked ?
        0 : 1, SysStopLosseAmount = document.getElementById("SysStopLosseAmount").value, SysAW100 = document.getElementById("SysAW100").value, MultiSwitch = !1 === document.getElementById("SysMultiSwitch").checked ? 0 : 1, SysLabSwitch = !1 === document.getElementById("SysLabInvert").checked ? 0 : 1, T2C = Number(parseFloat(document.getElementById("SysT2CVar").value)), isNaN(T2C) && 1 === MultiSwitch) document.getElementById("DivSysMessage").innerHTML = "MultiSwitch Activated but T2C is null";
    else if (BetX = document.getElementById("SysBetXVar").value.split(",").map(Number),
        0 === BetX[0] && 1 === MultiSwitch && 1 === BetX.length) document.getElementById("DivMessage").innerHTML = "MultiSwich Activated but Multiplicator list is empty!!!";
    else {
        SysChoice = document.getElementById("SysChoice").value;
        "Labouchere" === SysChoice ? (SysChoice = 1, console.log("Labouchere Not Working Yet!!!")) : "Fibonacci" === SysChoice ? (SysChoice = 2, console.log("Fibonacci Not Working Yet!!!")) : "Dalembert" === SysChoice && (SysChoice = 3, console.log("Dalembert Not Working Yet!!!"));
        Crypto = document.getElementById("SysCrypto").value;
        if ("BTC" === Crypto) Coin = "Btc", BetCoin = "btc";
        else if ("DOGE" === Crypto) Coin = "Doge", BetCoin = "doge";
        else if ("LTC" === Crypto) Coin = "Ltc", BetCoin = "ltc";
        else {
            document.getElementById("DivMessage").innerHTML = "Which Crypto to play";
            return
        }
        if ((BetSize[0] * x || BetSize[0] * BetX[0]) < BetMin) document.getElementById("DivMessage").innerHTML = "First Bet Size is too small. Minimum value = " + BetMin;
        else {
            var c = BetSize.slice(0, BetSize.length).reduce(function(c, e, l, m) {
                    return c + e
                }),
                e = BetX.slice(0, BetX.length).reduce(function(c, e,
                    l, m) {
                    return c + e
                });
            MaxBetLosse = c * x;
            1 === MultiSwitch && (MaxBetLosse *= e);
            document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
            console.log(BetSize);
            document.getElementById("ButtonStartSys").innerHTML = "Start";
            SP = 0;
            document.getElementById("ButtonStartSys").style.backgroundColor = "green";
            document.getElementById("DivSysMessage").innerHTML = "Settings Injected!!! Ho ho ho!!!\nEnjoy The Game And Good Fucking Luck";
            HideMessage = 0
        }
    } else document.getElementById("DivSysMessage").innerHTML =
        "Generate a New cookie first!!!"
}

function SysStart() {
    0 === SP ? (document.getElementById("ButtonStartSys").innerHTML = "Pause", document.getElementById("ButtonStartSys").style.backgroundColor = "red", SP = 1) : (document.getElementById("ButtonStartSys").innerHTML = "Start", document.getElementById("ButtonStartSys").style.backgroundColor = "green", SP = 0, BetStatut = 2, Play = 0);
    1 === SysChoice && SysStartLab()
}

function SysLabouchere(c) {
    PlayType = 3;
    if (1 === SysStopLosse && SysStopLosseAmount * BetX[j] * -1 >= SysTempProfit && (BreakCount++, SysTempProfit = 0, document.getElementById("DivBreakCount").innerHTML = BreakCount, BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number), audioBreak.play(), document.getElementById("DivLastBreak").innerHTML = "Last: " + BetNum, 1 === MultiSwitch && (j++, 1 == j && (Losse2Cover = T2C / 100 * TempBalance, TempBalance = "0", Profit = 0), j == BetX.length))) {
        document.getElementById("DivMessage").innerHTML =
            "Max BetSize and Max Multiplicator Lost!!!";
        HideMessage = 0;
        BigBreak++;
        document.getElementById("DivBigBreak").innerHTML = BigBreak;
        Losse2Cover = TempBalance = "0";
        SysTempProfit = AWProfit = Profit = 0;
        if (1 === FinalBetStop) {
            j = 0;
            audioStop.play();
            return
        }
        audioLosse.play();
        j = 0
    }
    document.getElementById("DivBetSize").innerHTML = BetSize;
    document.getElementById("DivBetLength").innerHTML = (SysTempProfit / xC).toFixed(8) + " | L = " + BetSize.length;
    var e = BetSize.slice(0, BetSize.length).reduce(function(c, e, f, n) {
            return c + e
        }),
        f = BetX.slice(0,
            BetX.length).reduce(function(c, e, f, n) {
            return c + e
        });
    MaxBetLosse = e * x;
    1 === MultiSwitch && (MaxBetLosse *= f);
    document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
    4 === Change ? HighLow = Math.round(Math.random()) : 0 === Change && 0 === HighLow ? HighLow = 0 : 0 === Change && 1 === HighLow && (HighLow = 1);
    6 === Change && (0 !== i ? (Santa = 0 === HighLow ? Santa - -.15 : Santa - .15, HighLow = Math.round(Math.random() - -Santa), .45 <= Santa ? Santa = .49 : -.45 >= Santa && (Santa = -.49)) : HighLow = Math.round(Math.random()));
    0 === HighLow ? (Low = LowMin,
        High = LowMax) : 1 === HighLow && (Low = HighMin, High = HighMax);
    i === BetSize.length && (i = 0);
    0 === BetX[0] && (BetX[0] = 1);
    Bets = (BetSize[0] - -BetSize[BetSize.length - 1]) * x;
    1 === MultiSwitch && (Bets = Math.round(Bets * BetX[j]));
    document.getElementById("DivBetX").innerHTML = BetX[j];
    1 === SeedCheck && SeedRandom();
    params = "a=PlaceBet&s=" + SysCookie + "&PayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&ProtocolVersion=2";
    httpSys.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    httpSys.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    httpSys.onreadystatechange = function() {
        if (4 === httpSys.readyState && 200 === httpSys.status)
            if (ReqText = httpSys.responseText, o = JSON.parse(ReqText), o.error) document.getElementById("DivSysMessage").innerHTML = "999dice: " + o.error, audioErr.play(), logMe("Error", "red");
            else if (o.ChanceTooHigh) document.getElementById("DivSysMessage").innerHTML = "999dice: Chance Too High!!!", audioErr.play();
        else if (o.ChanceTooLow) document.getElementById("DivSysMessage").innerHTML = "999dice: Chance Too Low!!!",
            audioErr.play();
        else if (o.InsufficientFunds) document.getElementById("DivSysMessage").innerHTML = "999dice: Insuficient Funds!!!", audioErr.play();
        else if (o.NoPossibleProfit) document.getElementById("DivSysMessage").innerHTML = "999dice: No Possible Profit!!!", audioErr.play();
        else if (o.MaxPayoutExceeded) document.getElementById("DivSysMessage").innerHTML = "999dice: Max Payout Exceeded!!!", audioErr.play();
        else {
            BetNum++;
            document.getElementById("DivBetNum").innerHTML = BetNum;
            BetId = o.BetId;
            PayOut = o.PayOut;
            Secret =
                o.Secret;
            StartingBalance = o.StartingBalance;
            ServerSeed = o.ServerSeed;
            Profit = o.PayOut - Bets;
            ProfitGlobal -= -(o.PayOut - Bets);
            SecretAverage -= -Secret;
            5E5 > Secret ? SecretCount-- : SecretCount++;
            Results("Sys", BetId, Secret, HighLow, BetsSeed, (Profit / xC).toFixed(8));
            0 === HighLow ? document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | Low" : document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | High";
            var e = (Number(ProfitGlobal) / xC).toFixed(8);
            document.getElementById("DivLast3").innerHTML = e;
            document.title =
                e + " Labouch\u00e8re - NBot 1.0";
            document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(1);
            document.getElementById("DivSecretCount").innerHTML = SecretCount;
            SysTempProfit -= -Profit;
            document.getElementById("DivBetLength").innerHTML = (SysTempProfit / xC).toFixed(8) + " | L = " + BetSize.length;
            TempBalance -= -Profit;
            0 <= TempBalance && (TempBalance = "0");
            document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
            AWProfit -= -Profit;
            document.getElementById("DivAWGlobal").innerHTML =
                (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
            document.getElementById("DivAWProfit").innerHTML = (AWProfit * SysAW100 / xC).toFixed(8);
            StatsColorUpdate();
            if (0 === o.PayOut) {
                LosseNum++;
                LosseCount++;
                WinCount = 0;
                ResultColor("red");
                document.getElementById("DivBetLost").innerHTML = LosseNum;
                LosseCount > StreakLosses && (StreakLosses = LosseCount, document.getElementById("DivStreakLosses").innerHTML = StreakLosses);
                1 !== Change && 3 !== Change || 0 !== HighLow ? 1 !== Change && 3 !== Change || 1 !== HighLow || (HighLow = 0) : HighLow = 1;
                if (0 === SysLabSwitch) BetSize.splice(BetSize.length,
                    0, BetSize[0] - -BetSize[BetSize.length - 1]);
                else if (BetSize.splice(0, 1), BetSize.splice(BetSize.length - 1, 1), 0 === BetSize.length) {
                    BreakCount++;
                    document.getElementById("DivSysMessage").innerHTML = "Last BetSize Lost!!!";
                    HideMessage = 0;
                    document.getElementById("DivBreakCount").innerHTML = BreakCount;
                    document.getElementById("DivLastBreak").innerHTML = "Last: " + BetNum;
                    audioBreak.play();
                    BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number);
                    if (1 === MultiSwitch && (j++, 1 == j && (Losse2Cover = T2C / 100 *
                            TempBalance, TempBalance = "0", Profit = 0), j == BetX.length)) {
                        document.getElementById("DivSysMessage").innerHTML = "Max BetSize and Max Multiplicator Lost!!!";
                        HideMessage = 0;
                        BigBreak++;
                        document.getElementById("DivBigBreak").innerHTML = BigBreak;
                        Profit = 0;
                        Losse2Cover = TempBalance = "0";
                        SysTempProfit = AWProfit = 0;
                        if (1 === FinalBetStop) {
                            j = 0;
                            audioStop.play();
                            return
                        }
                        audioLosse.play();
                        j = 0
                    }
                    c()
                }
                0 === BetSize.length && (BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number), SysTempProfit = 0)
            } else WinNum++, WinCount++,
                LosseCount = 0, ResultColor("green"), document.getElementById("DivBetWin").innerHTML = WinNum, 0 === SysLabSwitch ? 1 === SysStopWin && SysStopWinAmount * BetX[j] <= SysTempProfit ? (BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number), 0 === j && audioCover.play(), SysTempProfit = 0, 1 === SWin && (BackStart(), SWin = 0, clearInterval(test))) : (BetSize.splice(0, 1), BetSize.splice(BetSize.length - 1, 1), 0 === BetSize.length && (BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number), 0 === j && audioCover.play(),
                    SysTempProfit = 0, 1 === SWin && (SWin = 0, BackStart(), clearInterval(test)))) : 1 === SysStopWin && SysStopWinAmount * BetX[j] <= SysTempProfit ? (BetSize = document.getElementById("SysBetSizeVar").value.split(",").map(Number), 0 === j && audioCover.play(), SysTempProfit = 0, 1 === SWin && (SWin = 0, BackStart(), clearInterval(test))) : BetSize.splice(BetSize.length, 0, BetSize[0] - -BetSize[BetSize.length - 1]), WinCount > StreakWins && (StreakWins = WinCount, document.getElementById("DivStreakWins").innerHTML = StreakWins), 2 !== Change && 3 !== Change || 0 !==
                HighLow ? 2 !== Change && 3 !== Change || 1 !== HighLow || (HighLow = 0) : HighLow = 1;
            document.getElementById("DivOdd").innerHTML = (Number(WinNum) / Number(BetNum) * 100).toFixed(3);
            1 === MultiSwitch && (0 < j && (Losse2Cover -= -Profit), 0 <= Losse2Cover && 0 !== j && (j = i = 0, TempBalance = Losse2Cover = "0", document.getElementById("DivSysMessage").innerHTML = "Loss Covered!!! Ho ho ho!!!", audioCover.play()), document.getElementById("DivLosse2Cover").innerHTML = (Losse2Cover / xC).toFixed(8));
            5 <= HideMessage ? (HideMessage = 0, document.getElementById("DivSysMessage").innerHTML =
                "Bot is running Wild and Nude!!! Yeah Baby!!!") : HideMessage++;
            1 === AutoWithdraw && (WithdrawAmount = AWProfit * SysAW100, WithdrawAmount > AWAmount && (PlayType = BetStatut = 3));
            c()
        }
    };
    httpSys.send(params)
}

function SetGenSet() {
    BetsSeed = document.getElementById("SeedVar").value;
    "" === BetsSeed && (BetsSeed = 0);
    SeedCheck = !1 === document.getElementById("SeedRandomCheck").checked ? 0 : 1;
    audioBreak.volume = document.getElementById("BreakVolumeId").value / 100;
    audioLosse.volume = document.getElementById("LosseVolumeId").value / 100;
    audioCover.volume = document.getElementById("CoverVolumeId").value / 100;
    audioStop.volume = document.getElementById("StopVolumeId").value / 100;
    audioErr.volume = document.getElementById("ErrVolumeId").value /
        100;
    SetAW("BTC");
    SetAW("DOGE");
    SetAW("LTC")
}

function SetAW(c) {
    "BTC" === c ? (AWBtcAddy = document.getElementById("AutoWithdrawVar").value || document.getElementById("ABAutoWithdrawVar").value, AWBtcAmount = Number(document.getElementById("AWBtcAmount").value), WithdrawAddy = AWBtcAddy, AWAmount = AWBtcAmount) : "DOGE" === c ? (AWDogeAddy = document.getElementById("AutoWithdrawVar").value || document.getElementById("ABAutoWithdrawVar").value, AWDogeAmount = Number(document.getElementById("AWDogeAmount").value), WithdrawAddy = AWDogeAddy, AWAmount = AWDogeAmount) : "LTC" === c && (AWLtcAddy =
        document.getElementById("AutoWithdrawVar").value || document.getElementById("ABAutoWithdrawVar").value, AWLtcAmount = Number(document.getElementById("AWLtcAmount").value), WithdrawAddy = AWLtcAddy, AWAmount = AWLtcAmount);
    AutoWithdraw = WithdrawAddy && "Empty" !== WithdrawAddy ? 1 : 0
}

function ColorFixed() {
    "gold" != document.getElementById("DivBetNum").style.color && (document.getElementById("DivBetNum").style.color = "gold", document.getElementById("DivBetWin").style.color = "green", document.getElementById("DivBetLost").style.color = "red", document.getElementById("DivStreakWins").style.color = "green", document.getElementById("DivStreakLosses").style.color = "red")
}

function StatsColorUpdate() {
    0 > Losse2Cover ? document.getElementById("DivLosse2Cover").style.color = "red" : document.getElementById("DivLosse2Cover").style.color = "green";
    0 > TempBalance ? document.getElementById("DivTempBalance").style.color = "red" : document.getElementById("DivTempBalance").style.color = "green";
    0 > ProfitGlobal ? document.getElementById("DivLast3").style.color = "red" : document.getElementById("DivLast3").style.color = "green";
    0 > SecretCount ? document.getElementById("DivSecretCount").style.color = "cyan" : 0 <
        SecretCount ? document.getElementById("DivSecretCount").style.color = "tomato" : document.getElementById("DivSecretCount").style.color = "green";
    499999 > SecretAverage / BetNum ? document.getElementById("DivSecretAverage").style.color = "Cyan" : document.getElementById("DivSecretAverage").style.color = "tomato";
    (Number(WinNum) / Number(BetNum) * 100).toFixed(3) < Odd ? document.getElementById("DivOdd").style.color = "red" : document.getElementById("DivOdd").style.color = "green";
    0 > SysTempProfit ? document.getElementById("DivBetLength").style.color =
        "red" : document.getElementById("DivBetLength").style.color = "green";
    0 < j ? document.getElementById("DivBetX").style.color = "red" : document.getElementById("DivBetX").style.color = "white"
}

function SeedRandom() {
    BetsSeed = Math.round(1E6 * Math.random()) - 1
}

function handleKeyDown(c) {
    c = c.which || c.keyCode;
    AccountID || 13 !== c || Connect();
    AccountID && "General" === SaveType && (65 === c ? LoadAuto() : 83 === c && LoadSingle());
    if (1 === keyEnable && SaveType) {
        if (13 === c) {
            var e = document.getElementById("InjectButton").getAttribute("onclick").split("(")[0];
            window[e]()
        }
        72 === c && Hbet();
        74 === c && Mbet();
        75 === c && Rbet();
        76 === c && Lbet()
    }
    32 === c && 1 === Inject && PauseStart()
}

function StopAfterWin() {
    SWin = 1
}

function PauseStart() {
    0 === SP ? (document.getElementById("ButtonStart").innerHTML = "Pause", document.getElementById("ButtonStart").style.backgroundColor = "green", SP = 1, BetStatut = 0, "Single" === SaveType ? StartPlay() : "Auto" === SaveType ? ABPlay() : "System" === SaveType && SysStartLab()) : (document.getElementById("ButtonStart").innerHTML = "Start", document.getElementById("ButtonStart").style.backgroundColor = "red", SP = 0, BetStatut = 2, Play = 0, clearInterval(test))
}

function Back2BB() {
    i = j = 0;
    Losse2Cover = TempBalance = "0"
}

function Lbet() {
    ForceBet = 0;
    0 === Play && "Single" === SaveType ? (PlaceBet(function() {}), Play = 0) : 0 === Play && "Auto" === SaveType && (ABPlaceBet(function() {}), Play = 0)
}

function Hbet() {
    ForceBet = 1;
    0 === Play && "Single" === SaveType ? (PlaceBet(function() {}), Play = 0) : 0 === Play && "Auto" === SaveType && (ABPlaceBet(function() {}), Play = 0)
}

function Mbet() {
    ForceBet = 3;
    0 === Play && "Single" === SaveType ? (PlaceBet(function() {}), Play = 0) : 0 === Play && "Auto" === SaveType && (ABPlaceBet(function() {}), Play = 0)
}

function Rbet() {
    ForceBet = 4;
    0 === Play && "Single" === SaveType ? (PlaceBet(function() {}), Play = 0) : 0 === Play && "Auto" === SaveType && (ABPlaceBet(function() {}), Play = 0)
}

function ABLowBet() {
    ForceBet = 0;
    0 === Play && ABPlaceBet()
}

function ABHighBet() {
    ForceBet = 1;
    0 === Play && ABPlaceBet()
}

function ABRandomBet() {
    ForceBet = 4;
    0 === Play && ABPlaceBet()
}

function BackStart() {
    document.getElementById("ButtonStart").innerHTML = "Start";
    document.getElementById("ButtonStart").style.backgroundColor = "red";
    SP = 0;
    BetStatut = 2;
    Play = 0
}

function CBal() {
    if (Crypto.match(/btc/i)) return (Number(document.getElementById("DivBtcBalance").innerHTML) * xC).toFixed(0);
    if (Crypto.match(/doge/i)) return (Number(document.getElementById("DivDogeBalance").innerHTML) * xC).toFixed(0);
    if (Crypto.match(/ltc/i)) return (Number(document.getElementById("DivLtcBalance").innerHTML) * xC).toFixed(0)
}

function PlaceBet(c) {
    Play = 1;
    VerifId = BetId;
    if (0 === RePlay) {
        5 === Change ? (HighLow = 0 !== BetPat[i] && 1 !== BetPat[i] ? Math.round(Math.random()) : BetPat[i], Odd = BetWin[i], LowMin = 0, HighMax = 999999, LowMax = Math.round(Odd / 100 * 1E6 - 1), HighMin = Number(HighMax - LowMax)) : 4 === Change ? HighLow = Math.round(Math.random()) : 0 === Change && 0 === HighLow ? HighLow = 0 : 0 === Change && 1 === HighLow && (HighLow = 1);
        6 === Change && (0 !== i ? (Santa = 0 === HighLow ? Santa - -.15 : Santa - .15, HighLow = Math.round(Math.random() - -Santa), .45 <= Santa ? Santa = .49 : -.45 >= Santa && (Santa = -.49)) : HighLow = Math.round(Math.random()));
        0 === ForceBet ? (HighLow = 0, ForceBet = -1, document.getElementById("DivMessage").innerHTML = "Low Bet by User") : 1 === ForceBet ? (HighLow = 1, ForceBet = -1, document.getElementById("DivMessage").innerHTML = "High Bet by User") : 4 === ForceBet && (HighLow = Math.round(Math.random()), ForceBet = -1, document.getElementById("DivMessage").innerHTML = "Random Bet by User");
        0 === HighLow ? (Low = LowMin, High = LowMax) : 1 === HighLow && (Low = HighMin, High = HighMax);
        3 === ForceBet && (Low = MidMin, High = MidMax, HighLow =
            3, ForceBet = -1);
        if (i === BetSize.length && (i = 0, 1 === FinalBetStop)) {
            document.getElementById("DivMessage").innerHTML = "Bot has been stopped!!! After losing last bet!!!";
            HideMessage = 0;
            return
        }
        0 === BetX[0] && (BetX[0] = 1);
        Bets = BetSize[i] * x * BetX[j];
        BetX[j] > MaxMulti && (MaxMulti = BetX[j]);
        document.getElementById("DivBetX").innerHTML = BetX[j] + "/" + MaxMulti;
        1 === SeedCheck && SeedRandom()
    } else RePlay = 0;
    params = "a=PlaceBet&s=" + cookie + "&PayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&ProtocolVersion=2";
    httpSingle.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    httpSingle.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpSingle.onreadystatechange = function() {
        if (4 === httpSingle.readyState && 200 === httpSingle.status) {
            clearInterval(test);
            ReqText = httpSingle.responseText;
            o = JSON.parse(ReqText);
            if (o.error) {
                ErrNaN++;
                document.getElementById("DivMessage").innerHTML = "999dice: " + o.error;
                logMe("Error", "red");
                clearInterval(test);
                test = setInterval(VerifMe, 18E4);
                audioErr.play();
                return
            }
            if (o.ChanceTooHigh) return document.getElementById("DivMessage").innerHTML =
                "999dice: Chance Too High!!!", BackStart(), StopPlay();
            if (o.ChanceTooLow) return document.getElementById("DivMessage").innerHTML = "999dice: Chance Too Low!!!", audioErr.play(), BackStart(), StopPlay();
            if (o.InsufficientFunds) return document.getElementById("DivMessage").innerHTML = "999dice: Insuficient Funds!!!", audioErr.play(), BackStart(), StopPlay();
            if (o.NoPossibleProfit) return document.getElementById("DivMessage").innerHTML = "999dice: No Possible Profit!!!", audioErr.play(), BackStart(), StopPlay();
            if (o.MaxPayoutExceeded) return document.getElementById("DivMessage").innerHTML =
                "999dice: Max Payout Exceeded!!!", audioErr.play(), BackStart(), StopPlay();
            if (o.TooFast) {
                ErrTooFast++;
                RePlay = 0;
                clearInterval(test);
                document.getElementById("DivMessage").innerHTML = "999dice: Too Fast Error!!!\nWait 10s for a replay";
                test = setInterval(VerifMe, 1E4);
                console.log("%cReport Too Fast Error Number:" + ErrTooFast + "\nBot was playing too fast after bets: " + BetNum + "\nPlease wait for next retry in 10 second", "color: red; font-size: 120%; border-left-style: solid; border-right-style: solid;");
                audioErr.play();
                return
            }
            BetNum++;
            document.getElementById("DivBetNum").innerHTML = BetNum;
            Wagered += Bets;
            document.getElementById("DivWagered").innerHTML = (Wagered / xC).toFixed(8) + " | " + (Wagered / 2E11).toFixed(8);
            DataP = BetId = o.BetId;
            PayOut = o.PayOut;
            Secret = o.Secret;
            StartingBalance = o.StartingBalance;
            ServerSeed = o.ServerSeed;
            Profit = Number(o.PayOut) - Number(Bets);
            ProfitGlobal = Number(ProfitGlobal) - -(Number(o.PayOut) - Number(Bets));
            SecretAverage -= -Secret;
            5E5 > Secret ? SecretCount-- : SecretCount++;
            AUpdate(Crypto);
            Results("Sin", BetId,
                Secret, HighLow, BetsSeed, (Profit / xC).toFixed(8));
            0 === HighLow ? document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | Low " : document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | High";
            var e = (Number(ProfitGlobal) / xC).toFixed(8);
            document.getElementById("DivLast3").innerHTML = e;
            document.title = e + " Single - NBot 1.0";
            document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(0);
            document.getElementById("DivSecretCount").innerHTML = SecretCount;
            TempBalance = Number(TempBalance) -
                -Number(Profit);
            0 <= TempBalance && (TempBalance = "0");
            document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
            AWProfit -= -Profit;
            document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
            document.getElementById("DivAWProfit").innerHTML = (AW100 / 100 * AWProfit / xC).toFixed(8);
            StatsColorUpdate();
            if (0 === o.PayOut) {
                i++;
                LosseNum++;
                LosseCount++;
                WinCount = 0;
                document.getElementById("DivStreakLosses").innerHTML = LosseCount + "/" + StreakLosses;
                document.getElementById("DivStreakLosses").style.color =
                    "red";
                RepeatW = 1;
                ResultColor("red");
                document.getElementById("DivBetLost").innerHTML = LosseNum;
                LosseCount > StreakLosses && (StreakLosses = LosseCount, document.getElementById("DivStreakLosses").innerHTML = StreakLosses);
                1 < RepeatLosse && RepeatL < RepeatLosse ? (--i, RepeatL++, 0 > i && (i = 0)) : 1 < RepeatLosse && RepeatL === RepeatLosse && (RepeatL = 1);
                if (i === BetSize.length) {
                    BreakCount++;
                    document.getElementById("DivMessage").innerHTML = "Last BetSize Lost!!!";
                    HideMessage = 0;
                    document.getElementById("DivBreakCount").innerHTML = BreakCount;
                    document.getElementById("DivLastBreak").innerHTML = "Last: " + BetNum;
                    logMe("Dooooh: " + (TempBalance / xC).toFixed(8), "red");
                    if (1 == FinalBetStop && 0 === MultiSwitch) {
                        i = j = 0;
                        BackStart();
                        audioStop.play();
                        return
                    }
                    audioBreak.play();
                    if (1 == MultiSwitch && (j++, 1 == j && (Losse2Cover = Number(T2C) / 100 * Number(TempBalance), Profit = TempBalance = 0), j == BetX.length)) {
                        document.getElementById("DivMessage").innerHTML = "Max BetSize and Max Multiplicator Lost!!!";
                        HideMessage = 0;
                        logMe("Craaap: " + (TempBalance / xC).toFixed(8), "red");
                        BigBreak++;
                        document.getElementById("DivBigBreak").innerHTML = BigBreak;
                        document.getElementById("DivLastBigBreak").innerHTML = "Last: " + BetNum;
                        AWProfit = Profit = Losse2Cover = TempBalance = 0;
                        if (1 === FinalBetStop) {
                            i = j = 0;
                            BackStart();
                            audioStop.play();
                            return
                        }
                        audioLosse.play();
                        j = 0
                    }
                    c()
                }
                1 !== Change && 3 !== Change || 0 !== HighLow ? 1 !== Change && 3 !== Change || 1 !== HighLow || (HighLow = 0) : HighLow = 1
            } else 1 >= RepeatWin && (i = 0), WinNum++, WinCount++, LosseCount = 0, WinCount > StreakWins && (StreakWins = WinCount), document.getElementById("DivStreakWins").innerHTML =
                WinCount + "/" + StreakWins, document.getElementById("DivStreakWins").style.color = "green", RepeatL = 1, ResultColor("green"), document.getElementById("DivBetWin").innerHTML = WinNum, WinCount > StreakWins && (StreakWins = WinCount, document.getElementById("DivStreakWins").innerHTML = StreakWins), 2 !== Change && 3 !== Change || 0 !== HighLow ? 2 !== Change && 3 !== Change || 1 !== HighLow || (HighLow = 0) : HighLow = 1, 1 < RepeatWin && RepeatW < RepeatWin ? RepeatW++ : 1 < RepeatWin && RepeatW === RepeatWin && (RepeatW = 1, 0 < i && (i = 0));
            1 === SWin && 0 <= TempBalance && 0 <= ProfitGlobal &&
                0 <= Losse2Cover && (SWin = 0, BackStart(), clearInterval(test));
            1 === MultiSwitch && (0 < j && (Losse2Cover -= -Profit), 0 <= Losse2Cover && 0 !== j && (HideMessage = TempBalance = Losse2Cover = j = i = 0, logMe("Covered!!!", "green"), document.getElementById("DivMessage").innerHTML = "Loss Covered!!! Ho ho ho!!!", audioCover.play()), document.getElementById("DivLosse2Cover").innerHTML = (Losse2Cover / xC).toFixed(8));
            7 <= HideMessage ? (HideMessage = 0, document.getElementById("DivMessage").innerHTML = "Bot is running Wild and Nude!!!\nYeah Baby!!! Enjoy the game and be Naughty") :
                HideMessage++;
            1 === AutoWithdraw && (WithdrawAmount = AW100 / 100 * AWProfit, WithdrawAmount > AWAmount && (BetStatut = 3, PlayType = 1));
            document.getElementById("DivOdd").innerHTML = (Number(WinNum) / Number(BetNum) * 100).toFixed(3);
            c()
        }
        if (isNaN(Profit) || isNaN(TempBalance)) BetStatut = 1, document.getElementById("DivMessage").innerHTML = "NaN Issue has crashed the bot\nThis bot has been coded with my little finger"
    };
    StartMe();
    httpSingle.send(params)
}

function ABPlaceBet(c) {
    Play = 1;
    VerifId = BetId;
    document.getElementById("DivOdd").innerHTML = (Number(WinNum) / Number(BetNum) * 100).toFixed(3);
    if (0 === RePlay) {
        "Random" === Change ? HighLow = Math.round(Math.random()) : "Same" === Change && 0 === HighLow ? HighLow = 0 : "Same" === Change && 1 === HighLow && (HighLow = 1);
        "SantaRandom" === Change && (0 !== i ? (Santa = 0 === HighLow ? Santa - -.12 : Santa - .12, HighLow = Math.round(Math.random() - -Santa), .45 <= Santa ? Santa = .37 : -.45 >= Santa && (Santa = -.37)) : HighLow = Math.round(Math.random()));
        0 === ForceBet ? (HighLow =
            0, ForceBet = -1, document.getElementById("DivMessage").innerHTML = "Low Bet by User") : 1 === ForceBet ? (HighLow = 1, ForceBet = -1, document.getElementById("DivMessage").innerHTML = "High Bet by User") : 4 === ForceBet && (HighLow = Math.round(Math.random()), ForceBet = -1, document.getElementById("DivMessage").innerHTML = "Random Bet by User");
        0 === HighLow ? (Low = LowMin, High = LowMax) : 1 === HighLow ? (Low = HighMin, High = HighMax) : 2 === HighLow ? (Low = MidMin, High = MidMax) : 3 === HighLow && (Low = Math.round(Math.random() * Math.round((999999 - LowMax) / 2)),
            High = Low + LowMax);
        3 === ForceBet && (Low = MidMin, High = MidMax, HighLow = 3, ForceBet = -1);
        if (i === BetSize.length && (i = 0, 1 === FinalBetStop)) {
            document.getElementById("DivMessage").innerHTML = "Bot has been stopped!!! After losing last bet!!!";
            HideMessage = 0;
            return
        }
        if (0 === BetX.length || 0 === BetX[0]) BetX[0] = 1;
        Bets = Math.round(BetSize[i] * x);
        1 === MultiSwitch && (Bets = Math.round(Bets * BetX[j]));
        BetX[j] > MaxMulti && (MaxMulti = BetX[j]);
        document.getElementById("DivBetX").innerHTML = BetX[j] + "/" + MaxMulti;
        1 === SeedCheck && SeedRandom();
        option =
            "";
        0 !== R2bbCheckLosse && 0 !== R2bbCheckWin ? option += "" : 0 === R2bbCheckLosse && 0 === R2bbCheckWin ? option += "&ResetOnWin=" + R2bbCheckWin + "&ResetOnLose=" + R2bbCheckLosse + "&IncreaseOnWinPercent=" + R2bbWin / 100 + "&IncreaseOnLosePercent=" + R2bbLosse / 100 : 0 !== R2bbCheckLosse && 0 === R2bbCheckWin ? option += "&ResetOnWin=" + R2bbCheckWin + "&IncreaseOnWinPercent=" + R2bbWin / 100 : 0 !== R2bbCheckWin && 0 === R2bbCheckLosse && (option += "&ResetOnLose=" + R2bbCheckLosse + "&IncreaseOnLosePercent=" + R2bbLosse / 100);
        0 !== MaxPayIn && 0 < MaxPayIn && (MaxPayIn = document.getElementById("MaxPayIn").value,
            1 === MultiSwitch && 1 === MultiMax && (MaxPayIn *= BetX[j]), option += "&MaxPayIn=" + MaxPayIn);
        0 !== ResetBB && (option += "&ResetOnLoseMaxBet=" + ResetBB);
        0 !== StopAfter && (option += "&StopOnLoseMaxBet=" + StopAfter);
        0 !== StopMaxBalance && 0 < StopMaxBalance && (option = 0 === StartingBalance ? option + ("&StopMaxBalance=" + StopMaxBalance) : option + ("&StopMaxBalance=" + (Number(CBal()) + Number(StopMaxBalance))));
        0 !== StopMinBalance && 0 < StopMinBalance && (option = 0 === StartingBalance ? option + ("&StopMinBalance=" + StopMinBalance) : option + ("&StopMinBalance=" +
            (Number(CBal()) + Number(StopMinBalance))))
    } else RePlay = 0;
    params = "a=PlaceAutomatedBets&s=" + ABCookie + "&BasePayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&MaxBets=" + Round + option + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&Compact=1&ProtocolVersion=2";
    httpAuto.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    httpAuto.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpAuto.onreadystatechange = function() {
        if (4 === httpAuto.readyState && 200 === httpAuto.status)
            if (clearInterval(test), ReqText =
                httpAuto.responseText, o = JSON.parse(ReqText), o.error) ErrNaN++, document.getElementById("DivMessage").innerHTML = "999dice: " + o.error, clearInterval(test), logMe("Error", "red"), audioErr.play(), test = setInterval(VerifMe, 18E4);
            else if (o.ChanceTooHigh) BackStart(), document.getElementById("DivMessage").innerHTML = "999dice: Chance Too High!!!", audioErr.play();
        else if (o.ChanceTooLow) BackStart(), document.getElementById("DivMessage").innerHTML = "999dice: Chance Too Low!!!", audioErr.play();
        else if (o.InsufficientFunds) BackStart(),
            document.getElementById("DivMessage").innerHTML = "999dice: Insuficient Funds!!!", audioErr.play();
        else if (o.NoPossibleProfit) BackStart(), document.getElementById("DivMessage").innerHTML = "999dice: No Possible Profit!!!", audioErr.play();
        else if (o.MaxPayoutExceeded) BackStart(), document.getElementById("DivMessage").innerHTML = "999dice: Max Payout Exceeded!!!", audioErr.play();
        else if (o.TooFast) ErrTooFast++, RePlay = 0, clearInterval(test), document.getElementById("DivMessage").innerHTML = "999dice: Too Fast Error!!!\nWait 10s for a replay",
            test = setInterval(VerifMe, 1E4), logMe("Too Many Request", "red"), audioErr.play();
        else {
            BetNum++;
            TrueBetNum += o.BetCount;
            document.getElementById("DivBetNum").innerHTML = TrueBetNum + "|" + BetNum;
            Wagered -= o.PayIn;
            document.getElementById("DivWagered").innerHTML = (Wagered / xC).toFixed(8) + " | " + (Wagered / 2E11).toFixed(8);
            DataP = BetId = o.BetId;
            PayOut = o.PayOut;
            StartingBalance = o.StartingBalance;
            ServerSeed = o.Seed;
            Profit = o.PayOut - -o.PayIn;
            ProfitGlobal -= -Profit;
            AUpdate(Crypto);
            Results("Auto", BetId, o.BetCount + "/" + Round, HighLow,
                BetsSeed, (Profit / xC).toFixed(8));
            0 === HighLow ? document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | Low  | R:" + Round : document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | High | R:" + Round;
            var e = (Number(ProfitGlobal) / xC).toFixed(8);
            document.getElementById("DivLast3").innerHTML = e;
            document.title = e + " Auto - NBot 1.0";
            TempBalance -= -Profit;
            0 <= TempBalance && (TempBalance = "0");
            document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
            AWProfit -= -Profit;
            document.getElementById("DivAWGlobal").innerHTML =
                (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
            document.getElementById("DivAWProfit").innerHTML = (ABAW100 / 100 * AWProfit / xC).toFixed(8);
            StatsColorUpdate();
            1 === SWin && 0 <= TempBalance && 0 <= ProfitGlobal && 0 <= Losse2Cover && (BackStart(), SWin = 0, clearInterval(test));
            if (0 > Profit || 0 === ReplayProfit && 0 === Profit) {
                i++;
                LosseNum++;
                LosseCount++;
                WinCount = 0;
                ResultColor("red");
                1 === o.BetCount && (TooFast = 0, --i, logMe("Lag From Hell", "white"));
                LosseCount > StreakLosses && (StreakLosses = LosseCount);
                o.BetCount - 1 > MaxBetNum && 0 === MaxBetNum ? MaxBetNum =
                    o.BetCount : (MaxBetNum += o.BetCount, MaxBetNum > MaxBetNumData && (MaxBetNumData = MaxBetNum));
                document.getElementById("DivStreakLosses").innerHTML = LosseCount + "/" + StreakLosses + "/" + MaxBetNumData;
                document.getElementById("DivBetLost").innerHTML = LosseNum;
                if (i === BetSize.length) {
                    BreakCount++;
                    document.getElementById("DivMessage").innerHTML = "Last BetSize Lost!!!";
                    HideMessage = 0;
                    document.getElementById("DivBreakCount").innerHTML = BreakCount;
                    document.getElementById("DivLastBreak").innerHTML = "Last: " + BetNum;
                    logMe("Dooooh: " +
                        (TempBalance / xC).toFixed(8), "red");
                    if (1 === FinalBetStop && 0 === MultiSwitch) {
                        i = j = 0;
                        BackStart();
                        audioStop.play();
                        return
                    }
                    audioBreak.play();
                    if (1 === MultiSwitch && (j++, 1 === j && (Losse2Cover = T2C / 100 * TempBalance, TempBalance = "0", StopProfit = Profit, Profit = 0), j === BetX.length)) {
                        BigBreak++;
                        document.getElementById("DivMessage").innerHTML = "Max BetSize and Max Multiplicator Lost!!!";
                        HideMessage = 0;
                        logMe("Craaap: " + (TempBalance / xC).toFixed(8), "red");
                        document.getElementById("DivBigBreak").innerHTML = BigBreak;
                        document.getElementById("DivLastBigBreak").innerHTML =
                            "Last: " + BetNum;
                        Losse2Cover = TempBalance = "0";
                        j = AWProfit = Profit = 0;
                        if (1 === FinalBetStop) {
                            i = j = 0;
                            BackStart();
                            audioStop.play();
                            return
                        }
                        audioLosse.play()
                    }
                    c()
                }
                "ChangeAfterLoss" !== Change && "AlmostChange" !== Change || 0 !== HighLow ? "ChangeAfterLoss" !== Change && "AlmostChange" !== Change || 1 !== HighLow || (HighLow = 0) : HighLow = 1
            } else 0 < Profit ? (WinNum++, document.getElementById("DivBetWin").innerHTML = WinNum, WinCount++, i = LosseCount = 0, ResultColor("green"), WinCount > StreakWins && (StreakWins = WinCount), document.getElementById("DivStreakWins").innerHTML =
                WinCount + "/" + StreakWins, "ChangeAfterWin" !== Change && "AlmostChange" !== Change || 0 !== HighLow ? "ChangeAfterWin" !== Change && "AlmostChange" !== Change || 1 !== HighLow || (HighLow = 0) : HighLow = 1) : 1 === ReplayProfit && 0 === Profit && (RePlay = 1, ResultColor("white"));
            1 === MultiSwitch && (0 < j && (Losse2Cover = Number(Losse2Cover) - -Profit), 0 <= Losse2Cover && 0 !== j && (j = i = 0, TempBalance = Losse2Cover = "0", document.getElementById("DivMessage").innerHTML = "Loss Covered!!! Ho ho ho!!!", logMe("Covered!!", "green"), audioCover.play()), document.getElementById("DivLosse2Cover").innerHTML =
                (Number(Losse2Cover) / xC).toFixed(8));
            5 <= HideMessage ? (HideMessage = 0, document.getElementById("DivMessage").innerHTML = "Bot is running Wild and Nude!!! Yeah Baby!!!") : HideMessage++;
            1 === AutoWithdraw && (WithdrawAmount = ABAW100 / 100 * AWProfit, WithdrawAmount > AWAmount && (BetStatut = 3, PlayType = 2));
            c()
        } else 404 === httpAuto.status && (document.getElementById("DivMessage").innerHTML = "999dice Server Not Reachable")
    };
    StartMe();
    httpAuto.send(params)
}

function asyncLoop(c, e, f) {
    var h = !1,
        l = {
            next: function() {
                h || (index < c ? (index++, e(l)) : (h = !0, f()))
            },
            iteration: function() {
                return index - 1
            },
            breakme: function() {
                h = !0;
                f()
            }
        };
    l.next();
    return l
}

function StartPlay() {
    0 === DateShow && (document.getElementById("DivStartDate").innerHTML = d.toLocaleString(), DateShow = 1);
    PlayType = 1;
    new asyncLoop(Session, function(c) {
        PlaceBet(function(e) {
            index !== BetNum && (index = BetNum - -1);
            1 === BetStatut && (Play = j = index = i = BetStatut = 0, c.breakme());
            2 === BetStatut && (Play = BetStatut = 0, document.getElementById("DivMessage").innerHTML = "Time For A Break!!!", c.breakme());
            3 === BetStatut && 1 === AutoWithdraw && WithdrawAmount > AWAmount && (HideMessage = 0, AutoWith(), c.breakme());
            ChronoTimer();
            c.next()
        })
    }, function() {
        Play = 0
    })
}

function ABPlay() {
    0 === DateShow && (document.getElementById("DivStartDate").innerHTML = d.toLocaleString(), DateShow = 1);
    PlayType = 2;
    document.getElementById("DivMessage").innerHTML = "Bot is running Wild and Nude!!! Yeah Baby!!!";
    new asyncLoop(Session, function(c) {
        ABPlaceBet(function(e) {
            1 === BetStatut && (j = index = i = BetStatut = 0, document.getElementById("DivMessage").innerHTML = "This is The End... My Only Friend The End!!!", c.breakme());
            2 === BetStatut && (BetStatut = 0, document.getElementById("DivMessage").innerHTML = "Time For A Break!!!",
                c.breakme());
            3 === BetStatut && 1 === AutoWithdraw && WithdrawAmount > AWAmount && (AutoWith(), c.breakme());
            ChronoTimer();
            c.next()
        })
    }, function() {})
}

function SysStartLab() {
    0 === DateShow && (d = new Date, document.getElementById("DivStartDate").innerHTML = d.toLocaleString() + " | 0j.00h:00m:00s", DateShow = 1);
    document.getElementById("DivMessage").innerHTML = "Bot is running Wild and Nude!!! Yeah Baby!!!";
    PlayType = 3;
    new asyncLoop(Session, function(c) {
        SysLabouchere(function(e) {
            index !== BetNum && (index = BetNum - -1);
            document.getElementById("DivSessionCount").innerHTML = c.iteration();
            1 === BetStatut && (Play = j = index = BetStatut = 0, document.getElementById("DivMessage").innerHTML =
                "This is The End... My Only Friend The End!!!", c.breakme());
            2 === BetStatut && (Play = BetStatut = 0, document.getElementById("DivMessage").innerHTML = "Time For A Break!!!", c.breakme());
            3 === BetStatut && 1 === MultiSwitch && WithdrawAmount > AWAmount && (AutoWith(), c.breakme());
            ChronoTimer();
            c.next()
        })
    }, function() {
        Play = 0
    })
}

function ChronoTimer() {
    var c = new Date - d,
        c = Math.floor(c / 1E3),
        e = c % 60,
        c = Math.floor((c - e) / 60),
        f = c % 60,
        c = Math.floor((c - f) / 60),
        h = c % 24,
        c = Math.floor((c - h) / 24);
    document.getElementById("DivStartDate").innerHTML = d.toLocaleString() + " | " + c + "d. " + h + ":" + f + ":" + e
}

function NewSave(c) {
    "Auto" === c && (ABVarUpdate(), ABName = document.getElementById("SlotName").value, ABSlot = document.getElementById("Slot").value, c = JSON.stringify({
        Name: ABName,
        BS: BetSize,
        LBS: FinalBetStop,
        Odd: Odd,
        R2bbCheckW: R2bbCheckWin,
        R2bbW: R2bbWin,
        R2bbCheckL: R2bbCheckLosse,
        R2bbL: R2bbLosse,
        FB: HighLow,
        Swap: Change,
        SwapW: SwapRepeatW,
        SwapL: SwapRepeatL,
        Patern: SwapPatern,
        MaxB: MaxPayIn,
        MaxBS: StopAfter,
        MaxBR: ResetBB,
        MaxM: MaxMulti,
        MaxBalS: StopMaxBalance,
        MinBalS: StopMinBalance,
        MultiS: MultiMax,
        Multi: BetX,
        MultiSW: MultiSwitch,
        L2C: T2C,
        ReplayP: ReplayProfit,
        NBets: Round,
        Crypto: Crypto,
        AW: AutoWithdraw,
        AW100: ABAW100
    }), localStorage.setItem(ABSlot, c))
}

function NewLoad(c) {
    var e = document.getElementById("Slot").value,
        f = JSON.parse(localStorage.getItem(e));
    "Auto" === c && (document.getElementById("SlotName").value = f.Name, document.getElementById("ABBetSize").value = f.BS, 1 === f.LBS && (document.getElementById("ABFinalBetStop").checked = !0), document.getElementById("ABOdd").value = f.Odd, e = document.getElementById("R2bbCheckWin"), 0 === f.R2bbCheckW && (e.checked = !1, showHide(e, "R2bbWin", "TextOnWin"), document.getElementById("R2bbWin").value = f.R2bbW), e = document.getElementById("R2bbCheckLosse"),
        0 === f.R2bbCheckL && (e.checked = !1, showHide(e, "R2bbLosse", "TextOnLosse"), document.getElementById("R2bbLosse").value = f.R2bbL), document.getElementById("ABHighLow").value = ABHL[f.FB], document.getElementById("ABChange").value = f.Swap, e = document.getElementById("ABChange").value, "Repeat" === e && (showSwapO(document.getElementById("ABChange").value), document.getElementById("SwapRepeatW").value = f.SwapW, document.getElementById("SwapRepeatL").value = f.SwapL), "Patern" === e && (showSwapO(e), document.getElementById("SwapPatern").value =
            f.Patern), document.getElementById("MaxPayIn").value = f.MaxB, 1 === f.MaxBS && (document.getElementById("StopAfter").checked = !0), 1 === f.MaxBR && (document.getElementById("Reset2BB").checked = !0), 1 === f.MaxM && (document.getElementById("MultiMax").checked = !0), document.getElementById("StopMaxBalance").value = f.MaxBalS, document.getElementById("StopMinBalance").value = f.MinBalS, 1 === f.MultisS && (document.getElementById("MultiStop").checked = !0), document.getElementById("ABBetX").value = f.Multi, 1 === f.MultiSW && (document.getElementById("ABMultiSwitch").checked = !0), document.getElementById("ABL2C").value = f.L2C, 0 === f.ReplayP && (document.getElementById("ReplayProfit").checked = !1), document.getElementById("ABRoundVar").value = f.NBets, document.getElementById("ABCrypto").value = f.Crypto, document.getElementById("ABAutoWithdrawVar").value = f.AW, document.getElementById("ABAW100").value = f.AW100, UpdateAddy(f.Crypto, "ABAutoWithdrawVar"))
}

function SaveSet(c) {
    SaveType = c;
    "Single" === SaveType ? (VarUpdate(), SingleName = document.getElementById("SlotName").value, SingleSlot = document.getElementById("Slot").value, c = SingleName + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + RepeatWin + "&" + RepeatLosse + "&" + BetPat + "&" + BetWin + "&" + BetX + "&" + FinalBetStop + "&" + AutoWithdraw + "&" + AW100 + "&" + MultiSwitch + "&" + T2C + "&" + Crypto, localStorage.setItem(SingleSlot, c), document.getElementById("DivMessage").innerHTML = "Save done: " + SingleSlot + "." + SingleName) : "Auto" ===
        SaveType ? (ABVarUpdate(), ABName = document.getElementById("SlotName").value, ABSlot = document.getElementById("Slot").value, c = ABName + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + R2bbCheckWin + "&" + R2bbWin + "&" + R2bbCheckLosse + "&" + R2bbLosse + "&" + StopMaxBalance + "&" + StopMinBalance + "&" + MaxPayIn + "&" + ResetBB + "&" + StopAfter + "&" + MultiMax + "&" + Round + "&" + BetPat + "&" + BetWin + "&" + BetX + "&" + FinalBetStop + "&" + AutoWithdraw + "&" + ABAW100 + "&" + MultiSwitch + "&" + T2C + "&" + ReplayProfit + "&" + Crypto, localStorage.setItem(ABSlot, c), document.getElementById("DivMessage").innerHTML =
            "Save done: " + ABSlot + "." + ABName) : "System" === SaveType ? (SysInjector(), SysName = document.getElementById("SlotName").value, SysSlot = document.getElementById("Slot").value, c = SysName + "&" + SysChoice + "&" + SysLabSwitch + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + SysStopWin + "&" + SysStopWinAmount + "&" + SysStopLosse + "&" + SysStopLosseAmount + "&" + XMulti + "&" + AutoWithdraw + "&" + SysAW100 + "&" + MultiSwitch + "&" + T2C + "&" + BetX + "&" + Crypto, localStorage.setItem(SysSlot, c), document.getElementById("DivSysMessage").innerHTML = "Save done: " +
            SysSlot + "." + SysName) : "General" === SaveType && (SetGenSet(), c = "GenSlot&" + AWBtcAmount + "&" + AWDogeAmount + "&" + AWLtcAmount + "&" + audioLosse.volume + "&" + audioBreak.volume + "&" + audioCover.volume + "&" + audioStop.volume + "&" + audioErr.volume + "&" + BetsSeed + "&" + SeedCheck, localStorage.setItem("GenSlot", c))
}

function LoadSet(c) {
    SaveType = c;
    "Single" === SaveType ? (SingleSlot = document.getElementById("Slot").value, c = localStorage.getItem(SingleSlot).split("&"), document.getElementById("SlotName").value = c[0], document.getElementById("BetSizeVar").value = c[1].split(",").map(Number), document.getElementById("XVar").value = c[2], document.getElementById("OddVar").value = c[3], "0" === c[4] ? document.getElementById("HighLowVar").value = "Low" : document.getElementById("HighLowVar").value = "High", "0" === c[5] ? document.getElementById("ChangeVar").value =
        "Same" : "1" === c[5] ? document.getElementById("ChangeVar").value = "ChangeAfterLosse" : "2" === c[5] ? document.getElementById("ChangeVar").value = "ChangeAfterWin" : "3" === c[5] ? document.getElementById("ChangeVar").value = "AlmostChange" : "4" === c[5] ? document.getElementById("ChangeVar").value = "Random" : "5" === c[5] ? document.getElementById("ChangeVar").value = "Patern" : "6" === c[5] && (document.getElementById("ChangeVar").value = "SantaRandom"), document.getElementById("RepeatWinVar").value = c[6], document.getElementById("RepeatLosseVar").value =
        c[7], document.getElementById("BetPatVar").value = c[8].split(",").map(Number), document.getElementById("BetWinVar").value = c[9].split(",").map(Number), document.getElementById("BetXVar").value = c[10].split(",").map(Number), "0" === c[11] ? document.getElementById("FinalBetStopVar").checked = !1 : document.getElementById("FinalBetStopVar").checked = !0, document.getElementById("AW100").value = c[13], "0" === c[14] ? document.getElementById("MultiSwitchVar").checked = !1 : document.getElementById("MultiSwitchVar").checked = !0, !0 ===
        isNaN(c[15]) ? document.getElementById("T2CVar").value = "" : document.getElementById("T2CVar").value = c[15], document.getElementById("CryptoVar").value = c[16], UpdateAddy(c[16], "AutoWithdrawVar"), document.getElementById("DivMessage").innerHTML = SingleSlot + "Settings Loaded\n" + c[0]) : "Auto" === SaveType ? (ABSlot = document.getElementById("Slot").value, c = localStorage.getItem(ABSlot).split("&"), document.getElementById("SlotName").value = c[0], document.getElementById("ABBetSize").value = c[1].split(",").map(Number), document.getElementById("ABxVar").value =
        c[2], document.getElementById("ABOdd").value = c[3], "0" === c[4] ? document.getElementById("ABHighLow").value = "Low" : document.getElementById("ABHighLow").value = "High", "0" === c[5] ? document.getElementById("ABChange").value = "Same" : "1" === c[5] ? document.getElementById("ABChange").value = "ChangeAfterLosse" : "2" === c[5] ? document.getElementById("ABChange").value = "ChangeAfterWin" : "3" === c[5] ? document.getElementById("ABChange").value = "AlmostChange" : "4" === c[5] ? document.getElementById("ABChange").value = "Random" : "5" === c[5] ?
        document.getElementById("ABChange").value = "Patern" : "6" === c[5] && (document.getElementById("ABChange").value = "SantaRandom"), "0" === c[6] ? document.getElementById("R2bbCheckWin").checked = !1 : document.getElementById("R2bbCheckWin").checked = !0, showHide(document.getElementById("R2bbCheckWin"), "R2bbWin", "TextOnWin"), document.getElementById("R2bbWin").value = c[7], "0" === c[8] ? document.getElementById("R2bbCheckLosse").checked = !1 : document.getElementById("R2bbCheckLosse").checked = !0, showHide(document.getElementById("R2bbCheckLosse"),
            "R2bbLosse", "TextOnLosse"), document.getElementById("R2bbLosse").value = c[9], document.getElementById("StopMaxBalance").value = c[10], document.getElementById("StopMinBalance").value = c[11], document.getElementById("MaxPayIn").value = c[12], "0" === c[13] ? document.getElementById("Reset2BB").checked = !1 : document.getElementById("Reset2BB").checked = !0, "0" === c[14] ? document.getElementById("StopAfter").checked = !1 : document.getElementById("StopAfter").checked = !0, "0" === c[15] ? document.getElementById("MultiMax").checked = !1 : document.getElementById("MultiMax").checked = !0, document.getElementById("ABRoundVar").value = c[16], document.getElementById("ABBetX").value = c[19].split(",").map(Number), "0" === c[20] ? document.getElementById("ABFinalBetStop").checked = !1 : document.getElementById("ABFinalBetStop").checked = !0, document.getElementById("ABAW100").value = c[22], "0" === c[23] ? document.getElementById("ABMultiSwitch").checked = !1 : document.getElementById("ABMultiSwitch").checked = !0, !0 === isNaN(c[24]) ? document.getElementById("ABL2C").value =
        "" : document.getElementById("ABL2C").value = c[24], "0" === c[25] ? document.getElementById("ReplayProfit").checked = !1 : document.getElementById("ReplayProfit").checked = !0, document.getElementById("ABCrypto").value = c[26], UpdateAddy(c[26], "ABAutoWithdrawVar"), document.getElementById("DivMessage").innerHTML = ABSlot + " Settings Loaded\n" + c[0]) : "System" === SaveType ? (SysSlot = document.getElementById("Slot").value, c = localStorage.getItem(SysSlot).split("&"), document.getElementById("SlotName").value = c[0], "1" === c[1] ? document.getElementById("SysChoice").value =
        "Labouchere" : "2" === c[1] ? document.getElementById("SysChoice").value = "Fibonacci" : "3" === c[1] && (document.getElementById("SysChoice").value = "Dalaembert"), "0" === c[2] ? dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set("checked", !1) : dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set("checked", !0), document.getElementById("SysBetSizeVar").value = c[3].split(",").map(Number), document.getElementById("SysXVar").value = c[4], document.getElementById("SysOddVar").value = c[5], "0" ===
        c[6] ? document.getElementById("SysHighLowVar").value = "Low" : document.getElementById("SysHighLowVar").value = "High", "0" === c[7] ? document.getElementById("SysSysChange").value = "Same" : "1" === c[7] ? document.getElementById("SysSysChange").value = "Change after losse" : "2" === c[7] ? document.getElementById("SysSysChange").value = "Change after win" : "3" === c[7] ? document.getElementById("SysSysChange").value = "Almost Change" : "4" === c[7] ? document.getElementById("SysSysChange").value = "Random" : "5" === c[7] ? document.getElementById("SysSysChange").value =
        "Patern" : "6" === c[7] && (document.getElementById("SysSysChange").value = "SantaRandom"), "0" === c[8] ? dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[13]).set("checked", !1) : dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[13]).set("checked", !0), document.getElementById("SysStopWinAmount").value = c[9], "0" === c[10] ? dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[14]).set("checked", !1) : dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[14]).set("checked", !0), document.getElementById("SysStopLosseAmount").value =
        c[11], "0" === c[12] ? dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[15]).set("checked", !1) : dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[15]).set("checked", !0), "0" === c[13] ? dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set("checked", !1) : dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set("checked", !0), document.getElementById("SysAW100").value = c[14], "0" === c[15] ? dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[11]).set("checked",
            !1) : dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[11]).set("checked", !0), document.getElementById("SysT2CVar").value = c[16], document.getElementById("SysBetXVar").value = c[17].split(",").map(Number), document.getElementById("SysCrypto").value = c[18]) : "General" === SaveType && (localStorage.getItem("GenSlot") || SaveSet("General"), GenSet = localStorage.getItem("GenSlot").split("&"), document.getElementById("AWBtcAmount").value = GenSet[1], document.getElementById("AWDogeAmount").value = GenSet[2], document.getElementById("AWLtcAmount").value =
        GenSet[3], document.getElementById("LosseVolumeId").value = 100 * GenSet[4], document.getElementById("BreakVolumeId").value = 100 * GenSet[5], document.getElementById("CoverVolumeId").value = 100 * GenSet[6], document.getElementById("StopVolumeId").value = 100 * GenSet[7], document.getElementById("ErrVolumeId").value = 100 * GenSet[8], document.getElementById("SeedVar").value = GenSet[9], "0" === GenSet[10] ? document.getElementById("SeedRandomCheck").checked = !1 : document.getElementById("SeedRandomCheck").checked = !0, SetGenSet())
}

function ClicMe() {
    var c = window.document.createEvent("MouseEvents");
    c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    document.getElementById("ButtonStart").dispatchEvent(c)
}

function ReportMe() {
    console.info("Repeat Retries: " + Pcount + "\nClick Me " + Pcount + " Times So Hard, Made Me Come!!! Ouch!!!")
}

function VerifMe() {
    BetId != DataP ? DataP = BetId : (Pcount++, SP = 0, ClicMe())
}

function StartMe() {
    clearInterval(test);
    test = setInterval(VerifMe, 5E3)
}

function DiceOnline() {
    function c() {
        return ServerStatut = "Offline"
    }
    var e = Date.now(),
        f, h = !1,
        l = new XMLHttpRequest;
    null === l && console.log("Error: XMLHttpRequest failed to initiate.");
    l.onreadystatechange = function() {
        var m = setTimeout(function() {
            h = !0;
            l.abort()
        }, 1E5);
        4 === l.readyState && (h || 200 !== l.status ? (h || 0 !== l.status ? !h && 500 <= l.status ? document.getElementById("DivMessage").innerHTML = "999dice Server Error\nXML Http Request Statuts: " + l.status : !h && 400 <= l.status ? document.getElementById("DivMessage").innerHTML =
            "Bot Error Client Side\nXML Http Request Statuts: " + l.status : console.log("Error " + l.status + " has occurred.") : document.getElementById("DivMessage").innerHTML = "999dice isnt reachable check your connection\nXML Http Request Statuts: " + l.status, c()) : (clearTimeout(m), f = Date.now(), 1E5 < f - e ? (document.getElementById("DivMessage").innerHTML = "999dice Request TimeOut - Jake Why\nXML Http Request Statuts: " + l.status, c()) : (document.getElementById("DivMessage").innerHTML = "999dice is online - Thx God it isnt the end!!!\nYou could login to 999dice account",
            ServerStatut = "Online")))
    };
    try {
        l.open("GET", "http://www.999dice.com/api/web.aspx", !0), l.send(null)
    } catch (m) {
        console.log("Error:" + m), c()
    }
}

function AUpdate(c) {
    function e() {
        BTCBetCount = o.BetCount ? BTCBetCount + o.BetCount : BTCBetCount + BetNum
    }
    "BTC" === c ? (document.getElementById("DivBtcBalance").innerHTML = ((StartingBalance + Profit) / xC).toFixed(8), e(), document.getElementById("DivBtcBetCount").innerHTML = BTCBetCount, document.getElementById("DivBtcProfit").innerHTML = ((BTCProfit + (StartingBalance + Profit - BTCBalance)) / xC).toFixed(8)) : "DOGE" === c ? (document.getElementById("DivDogeBalance").innerHTML = ((StartingBalance + Profit) / xC).toFixed(8), e(), document.getElementById("DivDogeBetCount").innerHTML =
        DOGEBetCount, document.getElementById("DivDogeProfit").innerHTML = ((DOGEProfit + (StartingBalance + Profit - DOGEBalance)) / xC).toFixed(8)) : "LTC" === c && (document.getElementById("DivLtcBalance").innerHTML = ((StartingBalance + Profit) / xC).toFixed(8), e(), document.getElementById("DivLtcBetCount").innerHTML = LTCBetCount, document.getElementById("DivLtcProfit").innerHTML = ((LTCProfit + (StartingBalance + Profit - LTCBalance)) / xC).toFixed(8))
}

function InjectorType(c, e) {
    "BetSize" === e ? "Auto" === SaveType ? (document.getElementById("ABBetSize").value = c, document.getElementById("ABxVar").value = 1) : "Single" === SaveType && (document.getElementById("BetSizeVar").value = c, document.getElementById("XVar").value = 1) : "Multi" === e ? "Auto" === SaveType ? document.getElementById("ABBetX").value = c : "Single" === SaveType && (document.getElementById("BetXVar").value = c) : "MaxBet" === e && ("Auto" === SaveType ? document.getElementById("GenStreak").value <= document.getElementById("GenResults").children.length &&
        (document.getElementById("MaxPayIn").value = (Number(document.getElementById("GenResults").children[0].children[1].innerHTML) * xC).toFixed(0)) : document.getElementById("DivMessage").innerHTML = "Error MaxBet Stop Injection\nOnly Available For Automatic")
}

function Generate() {
    BetCalc(document.getElementById("GenBB").value, document.getElementById("GenIncrease").value, document.getElementById("GenStreak").value, document.getElementById("GenStop").value, document.getElementById("InjectorChoice").value)
}

function BetCalc(c, e, f, h, l) {
    var m = Number(c),
        n = 0,
        q = 0,
        p = "",
        t = 0,
        r;
    "Single" === SaveType ? r = document.getElementById("OddVar").value : "Auto" === SaveType && (r = document.getElementById("ABOdd").value);
    if ("" === r) document.getElementById("DivMessage").innerHTML = "Set %Win to calculate Profit";
    else {
        r = 99.9 / r - 1;
        document.getElementById("GenResults").innerHTML = "";
        if (document.getElementById("GenBB").value.match(/fib/i)) {
            a = 0;
            b = 1;
            for (k = 0; k < f; a = b, b = x, k++) x = a + b, q += x, p += x + ",", GenResults(k + 1, x, q, 0);
            document.getElementById("DivMessage").innerHTML =
                "Test Fibo char"
        } else
            for (c = 1; c <= f; c++)
                if (n++, t = (Math.floor(r * m - q) / xC).toFixed(8), q += m, p += Math.round(m) + ",", GenResults(n, (Math.round(m) / xC).toFixed(8), (q / xC).toFixed(8), t), m = Math.floor(m * (e / 100 + 1)), 0 < h && m > h) return InjectorType(p.slice(0, p.length - 1), l), "Last Streak Reached";
        InjectorType(p.slice(0, p.length - 1), l)
    }
}

function GenResults(c, e, f, h) {
    var l = document.getElementById("GenResults");
    c = '<span class="GResultsHead" style="width: 40px;">' + c + '</span>\n<span class="GResultsHead" style="width: 130px;">' + e + '</span>\n<span class="GResultsHead" style="width: 200px;">' + f + '</span>\n<span class="GResultsHead" id="GResultsHead2" style="width: 148px; border-right-style: hidden;">' + h + "</span>";
    CreateObjectBefore("div", "RLine", "", "", l, l.children[0]);
    l.children[0].innerHTML = c
}

function OnLoad() {
    localStorage.GenSlot && 14 !== localStorage.getItem("GenSlot").split("&").length ? (SaveType = "General", SaveSet()) : 14 === localStorage.getItem("GenSlot").split("&").length && (SaveType = "General", LoadSet());
    LoadSet("General")
}

function ImportSet() {
    var c = document.getElementById("DataShare").value,
        e, f;
    "" !== c ? "Single" === c.slice(0, 6) ? (c = c.slice(7, c.length), e = localStorage.getItem("Temp1"), f = document.getElementById("Slot").value, localStorage.setItem("Temp1", c), document.getElementById("Slot").value = "Temp1", LoadSet("Single"), localStorage.setItem("Temp1", e), document.getElementById("Slot").value = f) : "Auto" === c.slice(0, 4) && (c = c.slice(5, c.length), e = localStorage.getItem("Temp3"), f = document.getElementById("Slot").value, localStorage.setItem("Temp3",
        c), document.getElementById("Slot").value = "Temp3", LoadSet("Auto"), localStorage.setItem("Temp3", e), document.getElementById("Slot").value = f) : document.getElementById("DivMessage")
}

function ExportSet() {
    document.getElementById("DataShare").value = SaveType + "&" + localStorage.getItem(document.getElementById("Slot").value)
}

function AddyInject() {
    var c = document.getElementById("AddyCrypto").value,
        e = document.getElementById("AddyName").value,
        e = c + "&" + e + "&" + document.getElementById("AddyAddy").value;
    "BTC" === c ? "1" === document.getElementById("AddyAddy").value.charAt(0) ? (localStorage.BTC ? localStorage.BTC && 10 > localStorage.BTC.split(";").length ? (localStorage.setItem("BTC", localStorage.BTC + ";" + e), document.getElementById("DivMessage").innerHTML = "New BTC addy added to list") : document.getElementById("DivMessage").innerHTML = "Too much " +
        c + " saved\nRemove one or more only 10 allowed" : (localStorage.setItem("BTC", e), document.getElementById("DivMessage").innerHTML = "New BTC addy added to list"), HideMessage = 0) : document.getElementById("DivMessage").innerHTML = "Wrong Addy...\nNot a BTC addy!!!" : "DOGE" === c ? "D" === document.getElementById("AddyAddy").value.charAt(0) ? (localStorage.DOGE ? localStorage.DOGE && 10 > localStorage.DOGE.split(";").length ? (localStorage.setItem("DOGE", localStorage.DOGE + ";" + e), document.getElementById("DivMessage").innerHTML =
        "New DOGE addy added to list") : document.getElementById("DivMessage").innerHTML = "Too much " + c + " saved\nRemove one or more only 10 allowed" : (localStorage.setItem("DOGE", e), document.getElementById("DivMessage").innerHTML = "New DOGE addy added to list"), HideMessage = 0) : document.getElementById("DivMessage").innerHTML = "Wrong Addy...\nNot a DOGE addy!!!" : "LTC" === c ? "L" === document.getElementById("AddyAddy").value.charAt(0) ? (localStorage.LTC ? localStorage.LTC && 10 > localStorage.LTC.split(";").length ? (localStorage.setItem("LTC",
        localStorage.LTC + ";" + e), document.getElementById("DivMessage").innerHTML = "New LTC addy added to list") : document.getElementById("DivMessage").innerHTML = "Too much " + c + " saved\nRemove one or more only 10 allowed" : (localStorage.setItem("LTC", e), document.getElementById("DivMessage").innerHTML = "New LTC addy added to list"), HideMessage = 0) : document.getElementById("DivMessage").innerHTML = "Wrong Addy... Check it again" : (document.getElementById("DivMessage").innerHTML = "Choose a crypto to inject addy", HideMessage =
        0)
}

function UpdateAddy(c, e) {
    var f = '<option value="Empty" class="List">-||-_-||-</option>';
    if (c.match(/btc/i) && localStorage.BTC) {
        var h = localStorage.BTC.split(";");
        for (A = 0; A < h.length; A++) f += '<option class="List" value="' + h[A].split("&")[2] + '">' + h[A].split("&")[1] + "</option>"
    }
    if (c.match(/doge/i) && localStorage.DOGE)
        for (h = localStorage.DOGE.split(";") || null, A = 0; A < h.length; A++) f += '<option class="List" value="' + h[A].split("&")[2] + '">' + h[A].split("&")[1] + "</option>";
    if (c.match(/ltc/i) && localStorage.LTC)
        for (h = localStorage.LTC.split(";"),
            A = 0; A < h.length; A++) f += '<option class="List" value="' + h[A].split("&")[2] + '">' + h[A].split("&")[1] + "</option>";
    document.getElementById(e).innerHTML = f
}

function AddyRemove(c, e) {
    var f = document.getElementById(e);
    localStorage.removeItem(f)
}

function AddyLoad() {
    var c = "";
    if (localStorage.BTC) {
        for (var e = 0; e < localStorage.BTC.split(";").length; e++) c = c + '<option value="' + this.split("&")[e] + '" class="CryptoAddy">' + this.split("&")[e] + "</option";
        document.getElementsByName("CryptoAddy").innerHTML = c
    }
    if (localStorage.DOGE) {
        for (e = 0; e < localStorage.DOGE.split(";").length; e++) c = c + '<option value="' + this.split("&")[e] + '" class="CryptoAddy">' + this.split("&")[e] + "</option";
        document.getElementsByName("CryptoAddy").innerHTML = c
    }
    if (localStorage.LTC) {
        for (e = 0; e <
            localStorage.LTC.split(";").length; e++) c = c + '<option value="' + this.split("&")[e] + '" class="CryptoAddy">' + this.split("&")[e] + "</option";
        document.getElementsByName("CryptoAddy").innerHTML = document.getElementsByName("AWAddy").innerHTML = c
    }
}

function calculateBetResult(c, e, f) {
    0 > e && (e += Math.pow(2, 32));
    for (e = e.toString(16); 8 > e.length;) e = "0" + e;
    f = reverseHex32(f.toString(16));
    c = new jsSHA(c + e + f, "HEX");
    for (c = c.getHash("SHA-512", "HEX");;)
        for (c = new jsSHA(c, "HEX"), c = c.getHash("SHA-512", "HEX"), f = 0; 122 >= f; f += 6)
            if (e = parseInt(c.substr(f, 6), 16), 16E6 > e) return e % 1E6
}

function TestAuto() {
    LoadChoice();
    LoadAuto()
}

function TestSingle() {
    LoadChoice();
    LoadSingle()
}

function TestLog() {
    for (teste = 0; 30 > teste; teste++) logMe("testetstttttttttttttttttttttttttttttttttttttttttte", "red"), logMe("testetste", "green")
}

function TestResults() {
    for (teste = 0; 30 > teste; teste++) Results("Test", "12345678998745", "123456", "H", "0", "0.00000000")
}

function CreateObjectBefore(c, e, f, h, l, m) {
    c = document.createElement(c);
    "" !== e && c.setAttribute("class", e);
    "" !== f && (c.id = f);
    "" !== h && (c.innerText = h);
    l.insertBefore(c, m)
}

function SetUI() {
    var c;
    c = '<header role="banner"><h2 id="CurrentInfos">Account Informations: <span id="DivAccountName"></span> ID: <span id="DivAccountId"></span> | <span id="DivCookie" onclick="ShowCookie();">Clic Me to show cookie in console</span></h2></header>';
    c += '<div class="div" id="gen">';
    c += '<div id="BigBox">';
    c += '<div class="container" id="playRoom">';
    c += '<div class="container" id="Infos" style="width: 1093px;">';
    c += '<div id="INFOS">';
    c += '<div class="textInfos">';
    c += '<p class="textI2">Balance:</p>';
    c += '<p class="textI2">Bet count:</p>';
    c += '<p class="textI2">Profit:</p>';
    c += '<p class="textI2">Wins:</p>';
    c += "</div>";
    c += "</div>";
    c += '<div id="BTC">';
    c += '<div class="opacity">';
    c += '<div class="statsInfos">';
    c += '<p class="AccountStats" id="DivBtcBalance">NaN</p>';
    c += '<p class="AccountStats" id="DivBtcBetCount">NaN</p>';
    c += '<p class="AccountStats" id="DivBtcProfit">NaN</p>';
    c += '<p class="AccountStats" id="DivBtcWin100">NaN%</p>';
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += '<div id="DOGE">';
    c += '<div class="opacity">';
    c += '<div class="statsInfos">';
    c += '<p class="AccountStats" id="DivDogeBalance">NaN</p>';
    c += '<p class="AccountStats" id="DivDogeBetCount">NaN</p>';
    c += '<p class="AccountStats" id="DivDogeProfit">NaN</p>';
    c += '<p class="AccountStats" id="DivDogeWin100">NaN%</p>';
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += '<div id="LTC">';
    c += '<div class="opacity">';
    c += '<div class="statsInfos">';
    c += '<p class="AccountStats" id="DivLtcBalance">NaN</p>';
    c += '<p class="AccountStats" id="DivLtcBetCount">NaN</p>';
    c += '<p class="AccountStats" id="DivLtcProfit">NaN</p>';
    c += '<p class="AccountStats" id="DivLtcWin100">NaN%</p>';
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += "<div></div>";
    c += "</div>";
    c += '<div class="container" id="box">';
    c += '<div class="box" id="minibox">';
    c += '<div class="opacity2">';
    c += '<div id="Settings">';
    c += '<div class="container" id="connectDiv">';
    c += '<h4 style="position: relative; width: 100%; top: -40px; left: 47px">999dice Account Login</h4>';
    c += '<div class="textI" style="margin-top: -50px">';
    c += '<p style="top: 10px;">UserName:</p>';
    c += '<p style="top: 55px;">Password:</p>';
    c += '<p style="top: 100px;">Google Auth 2FA:</p>';
    c += "</div>";
    c += '<div class="InputDiv">';
    c += '<input type="text" class="CInput" id="LoginVar" style="top: -150px;" autofocus="">';
    c += "<br>";
    c += '<input type="password" class="CInput" id="PasswordVar" style="top: -65px;">';
    c += "<br>";
    c += '<input type="text" class="CInput" id="2FAVar" style="top: 20px;">';
    c += "<br>";
    c += "</div>";
    c += '<button id="Connect" onclick="Connect();">';
    c += "Connect";
    c += "</button>";
    c += '<button id="NewAccount" onclick="CreateNewAccount();" style="position: absolute; top: 400px; left: 100px; width: 250px">';
    c += "New Account";
    c += "</button>";
    c += '<span id="DivLoginStatut"></span>';
    c += "</div>";
    c += '<div class="container" id="Choice" style="width: 1093px; left: -300px;">';
    c += "<h4> Time To Make A Choice</h4>";
    c += '<div class="container" id="Single" onclick="LoadSingle()">';
    c += "<h5> Single </h5>";
    c += "</div>";
    c += '<div class="container" id="Auto" onclick="LoadAuto()">';
    c += "<h5> Automatic </h5>";
    c += "</div>";
    c += '<div class="container" id="System" onclick="LoadSystem()">';
    c += "<h5> System </h5>";
    c += "</div>";
    c += "</div>";
    c += '<div class="container" id="SinglePlay">';
    c += '<h4 style="position: relative; width: 1000px; top: -60px; left: 47px">Single Play Mode</h4>';
    c += '<p class="SingleText" style="top: 50px">Custom Bet Size:</p>';
    c += '<p class="SingleText" style="top: 30px; left: 480px; font-size: 250%">X</p>';
    c += '<p class="SingleText" style="top: 50px; left: 810px">LastBetStop</p>';
    c += '<p class="SingleText" style="top: 110px">% Win/Odd:</p>';
    c += '<p class="SingleText" style="top: 110px; left: 298px;">First Bet:</p>';
    c +=
        '<p class="SingleText" style="top: 110px; left: 520px;">Swap:</p>';
    c += '<p class="SingleText" style="top: 170px; left:px">RepeatOnLoss:</p>';
    c += '<p class="SingleText" style="top: 170px; left:298px">RepeatOnWin:</p>';
    c += '<p class="SingleText" style="top: 170px; left:504px">AW:</p>';
    c += '<p class="SingleText" style="top: 230px">Multiplicator list: </p>';
    c += '<p class="SingleText" style="top: 230px; left: 514px">Multi</p>';
    c += '<p class="SingleText" style="top: 230px; left: 704px">L2C%: </p>';
    c += '<p class="SingleText" style="top: 290px">High/Low Patern:</p>';
    c += '<p class="SingleText" style="top: 350px">% Win Patern:</p>';
    c += '<p class="SingleText" style="top: 350px; left: 680px">Crypto to play:</p>';
    c += '<input class="SingleInput" id="BetSizeVar" type="text" style="top: 70px; left: 240px; width: 402px;">';
    c += '<input class="SingleInput" id="XVar" type="text" style="top: 70px; left: 714px; width: 160px; text-align: center">';
    c += '<input class="SingleInput" id="FinalBetStopVar" type="checkbox" style="top: 70px; left: 1032px; width: 40px; text-align: center">';
    c += '<input class="SingleInput" id="OddVar" type="number" min="5" max="95" step="5" placeholder="5 to 95" style="width: 100px ;top: 130px; left:240px">';
    c += '<select id="HighLowVar" style="top: 130px; left: 540px; width: 104px">';
    c += '<option value="Low" class="List">Low</option>';
    c += '<option value="High" class="List">High</option>';
    c += "</select>";
    c += '<select id="ChangeVar" style="width:323px; top: 130px; left: 750px;">';
    c += '<option value="Same" class="List">Same</option>';
    c += '<option value="ChangeAfterWin" class="List">Change After Win</option>';
    c += '<option value="ChangeAfterLosse" class="List">Change After Loss</option>';
    c += '<option value="AlmostChange" class="List">Almost Swap</option>';
    c += '<option value="Random" class="List">Random</option>';
    c += '<option value="SantaRandom" class="List">SantaRandom</option>';
    c += '<option value="Patern" class="List">Patern</option>';
    c += "</select>";
    c += '<input class="SingleInput" id="RepeatLosseVar" type="number" value="1" min="1" max="20" style="width: 100px ;top: 190px; left:240px">';
    c += '<input class="SingleInput" id="RepeatWinVar" type="number" value="1" min="1" max="20" style="width: 100px ;top: 190px; left:540px">';
    c += '<select id="AutoWithdrawVar" onchange="SetAW(document.getElementById("CryptoVar").value);" style="top: 190px; left: 730px; width: 260px;">';
    c += "</select>";
    c += '<input class="SingleInput" id="AW100" type="number" min="10" max="150" step="10" value="100" style="width: 70px ;top: 190px; left:1000px">';
    c += '<input class="SingleInput" id="BetXVar" type="text" style="top: 250px; left: 240px; width: 402px">';
    c += '<input class="SingleInput" id="MultiSwitchVar" type="checkbox" style="top: 250px; left: 770px; width: 40px; text-align: center">';
    c += '<input class="SingleInput" id="T2CVar" type="text" style="width: 120px ;top: 250px; left:950px">';
    c += '<input class="SingleInput" id="BetPatVar" type="text" style="top: 310px; left: 240px; width: 402px">';
    c += '<input class="SingleInput" id="BetWinVar" type="text" style="top: 370px; left: 240px; width: 402px">';
    c += '<select id="CryptoVar" onchange="UpdateAddy(this.value,"AutoWithdrawVar")" style="top: 370px; left: 925px; width: 150px">';
    c += '<option value="Empty" class="List">-||-_-||-</option>';
    c +=
        '<option value="BTC" class="List">BTC</option>';
    c += '<option value="DOGE" class="List">DOGE</option>';
    c += '<option value="LTC" class="List">LTC</option>';
    c += "</select>";
    c += "</div>";
    c += '<div class="container" id="AutoPlay">';
    c += '<h4 style="position: relative; width: 1000px; top: -60px; left: 47px">Automatic Betting Play Mode</h4>';
    c += '<p class="SingleText" style="top: 50px">Custom Bet Size:</p>';
    c += '<p class="SingleText" style="top: 50px; left: 795px">LastBetStop</p>';
    c += '<p class="SingleText" style="top: 110px">% Win/Odd:</p>';
    c += '<p class="SingleText" id="TextOnWin" style="top: 110px; left: 320px;">ResetOnWin:</p>';
    c += '<p class="SingleText" id="TextOnLosse" style="top: 110px; left: 645px;">ResetOnLoss:</p>';
    c += '<p class="SingleText" style="top: 170px">First Bet:</p>';
    c += '<p class="SingleText" style="top: 170px; left: 235px;">Swap:</p>';
    c += '<div id="SwapOption" style="position: absolute; width: 200px; top: 190px; left: 752px;">';
    c += "</div>";
    c += '<p class="SingleText" style="top: 230px">Max Bet Size:</p>';
    c += '<p class="SingleText" style="top: 230px; left: 516px;">Stop</p>';
    c += '<p class="SingleText" style="top: 230px; left: 658px;">Reset</p>';
    c += '<p class="SingleText" style="top: 230px; left: 800px;">Multi</p>';
    c += '<p class="SingleText" style="top: 290px">MaxBal Stop:</p>';
    c += '<p class="SingleText" style="top: 290px; left: 440px">MinBal Stop:</p>';
    c += '<p class="SingleText" style="top: 290px; left: 800px;">Multi</p>';
    c += '<p class="SingleText" style="top: 350px">Multiplicator list: </p>';
    c += '<p class="SingleText" style="top: 350px; left: 534px">Multi</p>';
    c += '<p class="SingleText" style="top: 350px; left: 714px">L2C%: </p>';
    c += '<p class="SingleText" style="top: 410px;">Replay if Profit=0</p>';
    c += '<p class="SingleText" style="top: 410px; left: 200px;">NumBets:</p>';
    c += '<p class="SingleText" style="top: 410px; left: 504px">AW:</p>';
    c += '<input class="SingleInput" id="ABBetSize" autocomplete="on" type="text" style="top: 70px; left: 240px; width: 600px">';
    c += '<input class="SingleInput" id="ABFinalBetStop" type="checkbox" style="top: 70px; left: 1032px; width: 40px; text-align: center">';
    c += '<input class="SingleInput" id="ABOdd" type="text" placeholder="5 to 95" style="width: 90px ;top: 130px; left:240px">';
    c += '<select id="ABHighLow" style="top: 190px; left: 240px; width: 130px">';
    c += '<option value="Low" class="List">Low</option>';
    c += '<option value="High" class="List">High</option>';
    c += '<option value="Midle" class="List">Midle</option>';
    c += '<option value="Random" class="List">Random</option>';
    c += "</select>";
    c += '<select id="ABChange" onchange="showSwapO(this.value)" style="width: 260px; top: 190px; left: 470px;">';
    c += '<option value="Same" class="List">Same</option>';
    c += '<option value="ChangeAfterWin" class="List">Change After Win</option>';
    c += '<option value="ChangeAfterLosse" class="List">Change After Loss</option>';
    c += '<option value="AlmostChange" class="List">Almost Swap</option>';
    c += '<option value="Random" class="List">Random</option>';
    c += '<option value="SantaRandom" class="List">Santa Random</option>';
    c += '<option value="Repeat" class="List">Repeat W/L Before</option>';
    c += '<option value="Slide" class="List">Sliding Chance</option>';
    c += '<option value="Patern" class="List">Patern</option>';
    c += "</select>";
    c += '<input class="SingleInput" id="R2bbCheckWin" type="checkbox" onchange="showHide(document.getElementById(\'R2bbCheckWin\'),\'R2bbWin\',\'TextOnWin\')" style="top: 130px; left: 545px; width: 40px; text-align: center" checked="">';
    c += '<input class="SingleInput" id="R2bbWin" type="text" placeholder="^%^" style="text-align: center; width: 70px; top: 130px; left:590px; display: none;">';
    c += '<input class="SingleInput" id="R2bbCheckLosse" type="checkbox" onchange="showHide(document.getElementById(\'R2bbCheckLosse\'),\'R2bbLosse\',\'TextOnLosse\')" style="top: 130px; left: 870px; width: 40px; text-align: center" checked="">';
    c += '<input class="SingleInput" id="R2bbLosse" type="text" placeholder="^%^" style="text-align: center; width: 70px; top: 130px; left: 915px; display: none;">';
    c += '<input class="SingleInput" id="MaxPayIn" type="text" style="width: 416px; top: 250px; left: 240px;">';
    c += '<input class="SingleInput" id="StopAfter" type="checkbox" style="top: 250px; left: 748px; width: 40px; text-align: center">';
    c += '<input class="SingleInput" id="Reset2BB" type="checkbox" style="top: 250px; left: 890px; width: 40px; text-align: center">';
    c += '<input class="SingleInput" id="MultiMax" type="checkbox" style="top: 250px; left: 1032px; width: 40px; text-align: center" checked="">';
    c += '<input class="SingleInput" id="StopMaxBalance" type="text" style="width: 240px; top: 310px; left: 240px;">';
    c += '<input class="SingleInput" id="StopMinBalance" type="text" style="width: 240px; top: 310px; left: 669px;">';
    c += '<input class="SingleInput" id="ABBetX" type="text" style="width: 416px; top: 370px; left: 240px;">';
    c += '<input class="SingleInput" id="MultiStop" type="checkbox" style="top: 310px; left: 1032px; width: 40px; text-align: center" checked="">';
    c += '<input class="SingleInput" id="ABMultiSwitch" type="checkbox" style="top: 370px; left: 770px; width: 40px; text-align: center">';
    c += '<input class="SingleInput" id="ABL2C" type="text" placeholder="%" value="100" style="text-align: center; width: 120px ;top: 370px; left:950px">';
    c += '<input class="SingleInput" id="ReplayProfit" type="checkbox" style="top: 430px; left: 235px; width: 40px; text-align: center" checked="">';
    c += '<input class="SingleInput" id="ABRoundVar" type="text" style="width: 60px ;top: 430px; left: 437px; text-align: center;">';
    c += '<select id="ABCrypto" onchange="UpdateAddy(this.value,\'ABAutoWithdrawVar\')" style="top: 430px; left: 527px; width: 130px; text-align: center;">';
    c += '<option value="Empty" class="List">COIN?</option>';
    c += '<option value="BTC" class="List">BTC</option>';
    c += '<option value="DOGE" class="List">DOGE</option>';
    c += '<option value="LTC" class="List">LTC</option>';
    c += "</select>";
    c += '<select id="ABAutoWithdrawVar" onchange="SetAW(document.getElementById(\'ABCrypto\').value);" style="top: 430px; left: 730px; width: 260px;">';
    c += "</select>";
    c += '<input class="SingleInput" id="ABAW100" type="number" min="10" max="150" value="100" step="25" style="text-align: center; width: 70px ;top: 430px; left:1000px;">';
    c += "</div>";
    c += '<div id="SystemPlay">';
    c += "</div>";
    c += '<div id="MultiPlay"></div>';
    c += '<div id="HelpMask"></div>';
    c += "</div>";
    c += '<div id="Buttons">';
    c += '<div id="PlayB">';
    c += '<div style="height: 80px; margin-top: -10px;">';
    c += '<p><span class="Message" id="DivMessage">Welcome to 999dice Casino\nGamble only what you are ready to loose</span>';
    c += "</p>";
    c += "</div>";
    c += '<button class="playButton" id="ButtonStart" onclick="PauseStart(\'Single\')" style="width: 75px;">Start</button>';
    c += '<button class="playButton" id="StopWinButton" onclick="StopAfterWin();" style="width: 88px;">StopW</button>';
    c += '<button class="playButtonS" id="HButton" onclick="Hbet();">H</button>';
    c += '<button class="playButtonS" id="MButton" onclick="Mbet();">M</button>';
    c += '<button class="playButtonS" id="RButton" onclick="Rbet();">R</button>';
    c += '<button class="playButtonS" id="LButton" onclick="Lbet();">L</button>';
    c += '<button class="playButton" id="BetOnceButton">BetOnce</button>';
    c += '<button class="playButton" id="B2BbButton" onclick="Back2BB()" style="background-color: darkgreen;">Back2BB</button>';
    c += "</div>";
    c += '<div id="PlayB2">';
    c += '<button class="playButton2" id="InjectButton">InjectSettings</button>';
    c += '<button class="playButton2" id="SaveButton">Save</button>';
    c += '<button class="playButton2" id="LoadButton">Load</button>';
    c += "<br>";
    c += '<span style="position: relative; color: white; font-size: 140%; width: 66%; left: 30px; margin-bottom: 10px;">Slot Save Name</span>';
    c += '<span style="position: relative; color: white; font-size: 140%; width: 34%; left: 283px; margin-bottom: 10px;">Slots</span>';
    c +=
        "<br>";
    c += '<input type="text" id="SlotName" style="position: relative; width: 320px; font-size: 140%; height: 25px; margin: 10px; float: left; left: 20px; display: inline-block;">';
    c += '<select class="SlotList" id="Slot">';
    c += "</select>";
    c += "</div>";
    c += "</div>";
    c += '<div class="container" id="Results">';
    c += '<div class="RHead" id="RHSingle">';
    c += '<span class="ResultsHead" style="width: 60px">Type</span>';
    c += '<span class="ResultsHead" style="width: 204px">Bet ID</span>';
    c += '<span class="ResultsHead" style="width: 84px">SN/MC</span>';
    c += '<span class="ResultsHead" style="width: 34px">HL</span>';
    c += '<span class="ResultsHead" style="width: 84px">Seed</span>';
    c += '<span class="ResultsHead" style="width: 204px; border-right-style: none;">Profit</span>';
    c += "</div>";
    c += '<div id="FullResults">';
    c += "</div>";
    c += '<div class="container" id="LogPanel">';
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += '<div id="Stats">';
    c += '<div style="width: 150px; position: absolute; top: 10px;">';
    c += '<p class="StatsText" style="">Start Time:</p>';
    c += '<p class="StatsText" style="">Last Bet:</p>';
    c += '<p class="StatsText" style="">Profit:</p>';
    c += '<p class="StatsText" style="">Wagered:</p>';
    c += '<p class="StatsText" style="">Temp Bal:</p>';
    c += '<p class="StatsText" style="">Loss2Cover:</p>';
    c += '<p class="StatsText" style="">Max Loss:</p>';
    c += '<p class="StatsText" style="">Bets:</p>';
    c += '<p class="StatsText" style="">MaxSwins:</p>';
    c += '<p class="StatsText" style="">SCount:</p>';
    c += '<p class="StatsText" style="">Doh!</p>';
    c += '<p class="StatsText" style="">Craaaap!!!</p>';
    c += '<p class="StatsText" style="">Multi:</p>';
    c += '<p class="StatsText" style="">AWBal:</p>';
    c += '<p class="StatsText" style="">AWProfit:</p>';
    c += '<p class="StatsText" style="">SysBetList:</p>';
    c += "</div>";
    c += '<div style="position: absolute; width:448px; height: 790px; left:150px; top:10px; background-color: rgba(100,100,100,0.5)">';
    c += '<p class="StatsTextResults"><span id="DivStartDate">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivLast">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivLast3">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivWagered">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivTempBalance">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivLosse2Cover">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivMaxBetLosse">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults">';
    c += '<span id="DivBetNum" style="color: gold;">000000</span> |';
    c += '<span id="DivBetWin" style="color: green;">00000</span> |';
    c +=
        '<span id="DivBetLost" style="color: red;">00000</span> |';
    c += '<span id="DivOdd">00.000</span>%';
    c += "</p>";
    c += '<p class="StatsTextResults2"><span id="DivStreakWins" style="">|NaN |</span>';
    c += '</p><div class="StatBox">';
    c += '<div style="position: absolute; width: 298px; height: 150px; left: 150px;">';
    c += '<p class="StatsText">MaxSLoss:</p>';
    c += '<p class="StatsText" style="">SAverage:</p>';
    c += '<p class="StatsTextResults2" style="width: 278px;"><span id="DivLastBreak">|NaN |</span>';
    c += '</p><p class="StatsTextResults2" style="width: 278px;"><span id="DivLastBigBreak">|NaN |</span>';
    c += "</p>";
    c += "</div>";
    c += '<div style="position: absolute; width: 140px; height: 70px; left:298px; background-color: rgba(100,100,100,0.5)">';
    c += '<p class="StatsTextResults2" style="margin-left: 0px; width: 140px;"><span id="DivStreakLosses">1/1</span>';
    c += "</p>";
    c += '<p class="StatsTextResults2" style="margin-left: 0px; width: 140px;"><span id="DivSecretAverage" style="color: rgb(0, 255, 255);">|NaN |</span>';
    c += "</p>";
    c += "</div>";
    c += "</div>";
    c += '<p class="StatsTextResults2"><span id="DivSecretCount">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults2"><span id="DivBreakCount">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults2"><span id="DivBigBreak">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults2" style="position: relative; width: 428px; text-align: left;"><span id="DivBetX" style="display: inline-block;">1/1</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivAWGlobal">|NaN |</span>';
    c += "</p>";
    c += '<p class="StatsTextResults"><span id="DivAWProfit">|NaN |</span>';
    c += "</p>";
    c +=
        '<div id="DivBetLength" style="position: absolute; margin-left: 10px; color: white; background-color: rgba(0,0,0,0.8); font-size: 160%;height: 194px; width: 428px; overflow: auto; word-wrap: break-word; text-overflow: ellipsis;">| NaN |</div>';
    c += "</div>";
    c += '<button class="LeftPanelButton" onclick="LoadSettings();" style="width: 140px">';
    c += "Settings";
    c += "</button>";
    c += '<button class="LeftPanelButton" style="left: 170px; text-align: center;" onclick="LoadHelp();">';
    c += "Help";
    c += "</button>";
    c += '<button class="LeftPanelButton" style="left: 310px; text-align: center;" onclick="LoadTools();">';
    c += "Tools";
    c += "</button>";
    c += "</div>";
    c += '<div id="Tools">';
    c += '<div id="ToolsBox">';
    c += '<p class="OptionTextTitle" style="width: auto;">Bet Generator/Injector</p>';
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px">Base Bet:</p>';
    c += '<input type="text" class="OptionInputSound" id="GenBB" style="top: -18px; width:255px">';
    c += '<p class="OptionText" style="width: 80px">%:</p>';
    c += '<input type="text" class="OptionInputSound" id="GenIncrease" style="top: -18px; width:50px; margin-left: 0px;">';
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px">Stop:</p>';
    c += '<input type="text" class="OptionInputSound" id="GenStop" style="top: -18px; width:255px">';
    c += '<p class="OptionText" style="width: 80px">Streak:</p>';
    c += '<input type="number" class="OptionInputSound" id="GenStreak" min="1" max="300" step="1" value="1" style="top: -18px; width:50px; margin-left: 0px;">';
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px;">Injector: </p>';
    c += '<select class="OptionInputSound" id="InjectorChoice" style="width: 255px; top: -18px; float: none;">';
    c += '<option value="None" class="List">-||-_-||-</option>';
    c += '<option value="BetSize" class="List">Custom Bet Size</option>';
    c += '<option value="MaxBet" class="List">MaxBet Stop</option>';
    c += '<option value="Multi" class="List">Multiplicator List</option>';
    c += "</select>";
    c += '<button class="LeftPanelButton" id="SaveGen" style="position: relative; top: 0px; float: right; right: 12px;" onclick="Generate();">';
    c += "Generate";
    c += "</button>";
    c += "<br>";
    c += '<div class="RHead" id="GenHead" style="margin-left: 0px; float:left;">';
    c += '<span class="ResultsGenHead" style="width: 40px;">N</span>';
    c += '<span class="ResultsGenHead" style="width: 134px">BetSize</span>';
    c += '<span class="ResultsGenHead" style="width: 204px">Balance</span>';
    c += '<span class="ResultsGenHead" style="width: 154px; border-right-style: none;">Profit</span>';
    c += "</div>";
    c += '<div class="Results" id="GenResults" style="">';
    c += "</div>";
    c += '<p class="OptionTextTitle" style="width: auto;">Import/Export Play Settings</p>';
    c += "<br>";
    c += "<div></div>";
    c += '<textarea id="DataShare" cols="5"></textarea>';
    c += "<br>";
    c += "<br>";
    c += '<button class="LeftPanelButton" id="ImportGen" style="position: relative; left: 10%; margin-top: 15px; width: 30%;" onclick="ImportSet();">';
    c += "Import";
    c += "</button>";
    c += '<button class="LeftPanelButton" id="ExportGen" style="position: relative; left: 30%; width: 30%;" onclick="ExportSet();">';
    c += "Export";
    c += "</button>";
    c += '<p class="OptionTextTitle" style="width: auto;">Multi Addy Manager</p>';
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px;">Name:</p>';
    c += '<input type="text" class="OptionInputSound" id="AddyName" style="top: -18px; width:280px">';
    c += '<select class="OptionInputSound" id="AddyCrypto" style="top: -18px; width: 120px">';
    c += '<option value="Empty" class="List">-||-_-||-</option>';
    c += '<option value="BTC" class="List">BTC</option>';
    c += '<option value="DOGE" class="List">DOGE</option>';
    c += '<option value="LTC" class="List">LTC</option>';
    c += "</select>";
    c += '<p class="OptionText" style="width: 110px;">Addy:</p>';
    c += '<input type="text" class="OptionInputSound" id="AddyAddy" style="top: -18px; width:410px">';
    c += "<br>";
    c += '<button class="LeftPanelButton" id="AddyRemove" style="position: relative; left: 10%; margin-top: 15px; width: 30%;" onclick="AddyRemove();">';
    c += "Remove";
    c += "</button>";
    c += '<button class="LeftPanelButton" id="AddyInject" style="position: relative; left: 30%; width: 30%;" onclick="AddyInject();">';
    c += "Inject";
    c += "</button>";
    c += '<p class="OptionTextTitle" style="width: auto;">Manual Withdraw</p>';
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px">Currency:</p>';
    c += '<select class="OptionInputSound" id="WithdrawCurrencyVar" onchange="UpdateAddy(this.value,"MWAddy")" style="top: -18px; width: 410px">';
    c += '<option value="Empty" class="List">-||-_-||-</option>';
    c += '<option value="btc" class="List">btc</option>';
    c += '<option value="doge" class="List">doge</option>';
    c += '<option value="ltc" class="List">ltc</option>';
    c += "</select>";
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px">Addy:</p>';
    c += '<select class="OptionInputSound" id="MWAddy" style="top: -18px; width: 410px">';
    c += "</select>";
    c += "<br>";
    c += '<p class="OptionText" style="width: 110px">Amount:</p>';
    c += '<input type="text" class="OptionInputSound" id="WithdrawAmountVar" style="top: -18px; width:410px">';
    c += '<button class="LeftPanelButton" id="AddyInject" style="position: relative; top: 5px; left: 35%; width: 30%;" onclick="Withdraw();">';
    c += "Withdraw";
    c += "</button>";
    c += "<br>";
    c += "<br>";
    c += "</div>";
    c += '<button class="LeftPanelButton" id="SaveGen" style="left: 10px;" onclick="LoadStats();">';
    c += "Stats";
    c += "</button>";
    c += '<button class="LeftPanelButton" onclick="LoadSettings();" style="width: 140px">';
    c += "Settings";
    c += "</button>";
    c += '<button class="LeftPanelButton" style="left: 170px; text-align: center;" onclick="LoadHelp();">';
    c += "Help";
    c += "</button>";
    c += "</div>";
    c += '<div id="GenSet">';
    c += '<div id="GenBox">';
    c += '<p class="OptionTextTitle">Seed</p>';
    c += '<p class="OptionText" style="width: 110px">Manual:</p>';
    c += '<input type="text" class="OptionInputSound" id="SeedVar" style="top: -20px; width:150px">';
    c += '<p class="OptionText" style="width: 110px; margin-left: 40px;">Random</p>';
    c += '<input type="checkbox" class="OptionCheck" id="SeedRandomCheck">';
    c += '<p class="OptionTextTitle">AutoWithdraw</p>';
    c += '<p class="OptionText">BTC Amount:</p>';
    c += '<input type="text" class="OptionAWInput" id="AWBtcAmount">';
    c += '<p class="OptionText">DOGE Amount:</p>';
    c += '<input type="text" class="OptionAWInput" id="AWDogeAmount">';
    c += '<p class="OptionText">LTC Amount:</p>';
    c += '<input type="text" class="OptionAWInput" id="AWLtcAmount">';
    c += '<p class="OptionTextTitle">Sound</p>';
    c += '<p class="OptionTextSound">Craap!!</p>';
    c += '<p class="OptionTextSound">Doh!!</p>';
    c += '<p class="OptionTextSound">Covered</p>';
    c += '<p class="OptionTextSound">Stop</p>';
    c += '<p class="OptionTextSound">Error</p>';
    c += '<input type="number" min="0" max="100" step="5" class="OptionInputSound" id="LosseVolumeId" value="20">';
    c += '<input type="number" min="0" max="100" step="5" class="OptionInputSound" id="BreakVolumeId" value="30">';
    c += '<input type="number" min="0" max="100" step="5" class="OptionInputSound" id="CoverVolumeId" value="20">';
    c += '<input type="number" min="0" max="100" step="5" class="OptionInputSound" id="StopVolumeId" value="40">';
    c += '<input type="number" min="0" max="100" step="5" class="OptionInputSound" id="ErrVolumeId" value="50">';
    c += "<br>";
    c += '<p class="OptionTextTitle" style="width: auto;">Current/New Addy</p>';
    c += "<br>";
    c += '<p class="OptionText" onclick="GetDepositAddy(\'btc\')" style="width: 80px; border-style: solid; border-color: red;">BTC:</p>';
    c += '<span class="OptionText" id="DivBtcAddy"></span>';
    c += "<br>";
    c += '<p class="OptionText" onclick="GetDepositAddy(\'doge\')" style="width: 80px; border-style: solid; border-color: red;">DOGE:</p>';
    c += '<span class="OptionText" id="DivDogeAddy"></span>';
    c += "<br>";
    c += '<p class="OptionText" onclick="GetDepositAddy(\'ltc\')" style="width: 80px; border-style: solid; border-color: red;">LTC:</p>';
    c += '<span class="OptionText" id="DivLtcAddy"></span>';
    c += "</div>";
    c += '<button class="LeftPanelButton" id="SaveGen" style="left: 10px;" onclick="LoadStats();">';
    c += "Stats";
    c += "</button>";
    c += '<button class="LeftPanelButton" style="left: 170px; text-align: center;" onclick="LoadHelp();">';
    c += "Help";
    c += "</button>";
    c += '<button class="LeftPanelButton" style="left: 310px; text-align: center;" onclick="LoadTools();">';
    c += "Tools";
    c += "</button>";
    c += '<button class="LeftPanelButton" onclick="SaveSet(\'General\');" style="width: 140px"> Set/Save';
    c += "</button>";
    c += "</div>";
    c += '<div id="Help">';
    c += '<div id="ConnectHelp">';
    c += '<p class="OptionTextTitle">Connection Help</p>';
    c += '<p class="ConnectOptionText">';
    c += '<span class="OptionTextTitle" style="display: block; font-size: 100%; text-align: center; width: 555px;">Create New Account or Donate</span> Please Create an account with the bot and you ll be one of my referrals...';
    c += "<br>";
    c += '<br>To create a new user set your UserName and Password and Clic "New Account"...';
    c += "<br>";
    c += "<br>Or Donate to support my work:";
    c += "<br>";
    c += "<br>";
    c += '<span style="text-align: center;">BTC Addy\n  15p7EczB2QR5G9qHq8XTivzKRCCaqVNm5w</span>';
    c += "<br>";
    c += "<br>";
    c += '<span style="text-align: center;">DOGE Addy\n D7CZx5H1dJi5HFsyvsuqJkZTZXKhpD2xUy</span>';
    c += "<br>";
    c += "<br>";
    c += '<span style="text-align: center;">LTC Addy\n  LLU4oSE8oUSLGsUg4nNYUyH17g7NuhMajk</span>';
    c += "<br>";
    c += "<br>";
    c += '<span style="text-align: center;">CLAM Addy\n xEzci6UFFPtNNjBiLMRD6GLLGDnMwqtt8w</span>';
    c += "</p>";
    c += "</div>";
    c += '<div id="ChoiceHelp">';
    c += '<p class="OptionTextTitle">Choice Help</p>';
    c += '<p class="ConnectOptionText">';
    c += "<br>I think you dont need help for this section";
    c += "<br>";
    c += "<br>you have to choose the way you want to play";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt">1. Single</span>';
    c += "<br>Automated single betting";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt">2. Automatic</span>';
    c += "<br> Play Automatic betting with more options allowed by 999dice api...";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt">3. System</span>';
    c += "<br>Under Construction";
    c += "<br>Play Labouch\u00e8re system";
    c += "<br>";
    c += "</p>";
    c += "</div>";
    c += '<div id="SingleHelp">';
    c += '<p class="OptionTextTitle">Single Bet Help</p>';
    c += '<p class="ConnectOptionText" style="text-align: left; overflow: auto; margin-left: 2px; width: 100%">';
    c += "Infos: Satoshi format and % value 100 = 100%";
    c += "<br>";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(70);">1. Custom Bet Size Line</span>';
    c += "<br>";
    c += '<br>- Custom Bet Size: list of value separate by "," coma. each value is a bet size.';
    c += "<br>- X: is the multiplicator to reach the right amount for your bets list.";
    c += "<br>- LastBetStop: if you want to stop the bot betting when it will lost the last bet in the list then check the StopLastBet checkbox. if Multi is enable then it will stop if loosing the LastCustomBet(in thelist) X Multi X LastMulti(in thelist).";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(130);">2. % Win Odd/FirstBet/Swap</span>';
    c += "<br>";
    c += "<br>- % Win/Odd: Possible value 5% to 95%.";
    c +=
        "<br>- FirstBet: is Low or High";
    c += "<br>- Swap: Choose how the bot should swap between Lor or High. Same: wont swap";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(190);">3.Repeat Losse/Win/AW/AW%</span>';
    c += "<br>";
    c += "<br>- Repeat a bet if Loss";
    c += "<br>- Repeat a bet if Win";
    c += "<br>It will repeat as many time as set by user. Default value is 1 = doesnt repeat. Must be an integer over 1.";
    c += "<br>- AW: AutoWithdraw - if true Autowithdraw is enable.";
    c += "<br>- AW%: set % amount you want to autowithdraw/reinvest reaching the right profit set in General Settings. you should set your addy there too for each crypto. Cannot be negative.";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(250);">4.Multiplicator list/Multi/T2C</span>';
    c += "<br>";
    c += '<br>- Multiplicator List: Will be use to multiply a loosing system by value in the list separate by ",".';
    c += "<br>- Multi checkbox: to enable the multiplicator list.";
    c += "<br>- L2C%: Loss to Cover - to set the % of your loss that you want to cover when your system get a break. if loss are covered then bot will reset to base bet and base multi.";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(310);">5. High/Low Patern</span>';
    c += "<br>";
    c += "<br>Enable it with Swap = patern";
    c += "<br>Another list to fix your High/Low bets the list should have the same number of value as the Custom Bet Size list. and you have to set it with 3 differents value 0 = Low, 1 = High, and other values = random. As example you should set it like that 1,0,1,0,4,0,1... = High, Low, High, Low, Random, Low, High...";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(370);">6.%Win Patern and Crypto choice</span>';
    c += "<br>";
    c += "<br>% Win Patern works as High/Low Patern. Enable it with swap = Patern. As to be same number value in the list as Custom Bet Size list.";
    c += "<br>";
    c += '<br>Now if you are ready and you thing everything is set correctly then hit the "InjectSettings" button to inject your options. If something wrong in your options the bot will show a message for your mistake... if everything is alright you ll see a message too and then you ll be able to start the bot by clicking the "Start" Button.';
    c += "<br>";
    c += "<br>";
    c += '<button onclick="LoadExample(\'S1\');" style="font-size: 100%">Simple Martingal</button>';
    c += "<br>";
    c += "<br>A martingal with repeat on win option at 79.95% with multi plicator enable and StopLastBet enable. Base bet will be 100 satoshi and series of bet will be that 100,200,400,800,1600,3200,6400...";
    c += "<br>";
    c += "<br>Enjoy the bot and let me know if something wrong...";
    c += "</p>";
    c += "</div>";
    c += '<div id="AutoHelp">';
    c += '<p class="OptionTextTitle">Auto Bet Help</p>';
    c += '<p class="ConnectOptionText" style="text-align: left; overflow: auto; margin-left: 2px; width: 100%">';
    c += "Infos: All amount should be set in Satoshi format 1000 satoshi for 0.00001 btc. All % value should be type like that 100 for 100%";
    c += "<br>";
    c += "<br>Look at Example1 and Example2 button, and details, at the end of this help section...";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(70);">1.CustomBetSize -X- LastBetStop</span>';
    c += "<br>";
    c += '<br>- Custom Bet Size: list of value separate by "," coma. each value is a bet size.';
    c += "<br>- X: is the multiplicator to reach the right amount for your bets list.";
    c += "<br>- LastBetStop: if you want to stop the bot betting when it will lost the last bet in the list then check the StopLastBet checkbox. if Multi is enable then it will stop if loosing the LastCustomBet(in thelist) X Multi X LastMulti(in thelist).";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(130);">2. % Win Odd - FirstBet - Swap</span>';
    c += "<br>";
    c += "<br>- % Win/Odd: Possible value 5% to 95%.";
    c += "<br>- FirstBet: is Low or High";
    c += "<br>- Swap: Choose how the bot should swap between Lor or High. Same: wont swap";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(190);">3. R2BBAfter - AW/AW%</span>';
    c += "<br>";
    c += "<br>R2BB = Return To Base Bet After; L = Loss ; W = Win";
    c += "<br>Check to enable R2BB - Uncheck to set increase % same as 999dice";
    c += "<br>- ResetOnWin: IncreaseOnWinPercent (optional): If ResetOnWin is false, after winning a bet, increase the next bet by %. Cannot be negative.";
    c += "<br>- ResetOnLoss: IncreaseOnLosePercent (optional) If ResetOnLose is false, after losing a bet, increase the next bet by choosen %. Cannot be negative.";
    c += "<br>- AW: AutoWithdraw - if true Autowithdraw is enable.";
    c += "<br>- AW%: set % amount you want to autowithdraw/reinvest reaching the right profit set in General Settings. you should set your addy there too for each crypto. Cannot be negative.";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(250);">4. MaxBetSize - Stop - R2BB</span>';
    c += "<br>";
    c += "<br>- MaxBetSize: (optional) The maximum bet amount in satoshi format, or 0 for no maximum.";
    c += "<br>- Stop: (optional) If true, then after a losing bet where the bet amount is equal to MaxPayIn, betting will end.";
    c += "<br>- Reset: (optional) If true, then after a losing bet where the bet amount is equal to MaxPayIn, the next bet amount will be BasePayIn.";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(310);">5. Max/Min Balance Stop</span>';
    c += "<br>";
    c += "<br>- MaxBal Stop: (optional) After a bet, if your balance is at least this amount, then stop betting. 0 for no maximum.";
    c += "<br>The amount set will be add to balance dynamically before a new bet.";
    c += "<br>- MinBal Stop: (optional) After a bet, if your balance is less than this amount, then stop betting.";
    c += "<br>The amount set will be add to balance dynamically before a new bet.";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(370);">6. Multiplicator list/Multi/T2C</span>';
    c += "<br>";
    c += '<br>- Multiplicator List: Will be use to multiply a loosing system by value in the list separate by ",".';
    c += "<br>- Multi checkbox: to enable the multiplicator list.";
    c += "<br>- L2C%: Loss to Cover - to set the % of your loss that you want to cover when your system get a break. if loss are covered then bot will reset to base bet and base multi.";
    c += "<br>";
    c += '<br><span class="HelpTitleTxt" onmouseover="ShowMask(430);">7. Replay - NumBet - Crypto</span>';
    c += "<br>";
    c += "<br>- Replay if Profit=0: After a bet if true, will repeat the same bet if bet profit = 0.";
    c += "<br>- Number of Bets: The maximum number of bets to make. Current limit is 200.";
    c += "<br>- Crypto to Play: Choose the crypto you want to gamble.";
    c += "<br>";
    c += '<br>Now if you are ready and you thing everything is set correctly then hit the "InjectSettings" button to inject your options for the bot. If something wrong in your options the bot will show a message for your mistake... if everything is alright you ll see a message too and then you ll be able to start the bot by clicking the "Start" Button.';
    c += "<br>";
    c += '<button onclick="LoadExample(\'A1\')" style="font-size: 100%">Example1</button>';
    c += "<br>";
    c += "<br>First way to use Automatic Play";
    c += "<br>Classic use like on Automatic Betting in 999dice";
    c += "<br>A Short 95% progression that will increase by 900% if wins or Loss";
    c += "<br>Base Bet = 1 x 1000000 = 0.01 Doge";
    c += "<br>With a Max Bet Stop Loss at 100000000 Dogishi = 1 Doge.";
    c += "<br>";
    c += "<br>";
    c += '<button onclick="LoadExample(\'A2\')" style="font-size: 100%">Example2</button>';
    c += "<br>";
    c += "<br>Second way to use Automatic Play";
    c += "<br>Use Automatic Bet to repeat bet.";
    c += "<br>The bot will stop if a win happen cause MaxBal Stop = 1.";
    c += "<br>";
    c += "<br>Enjoy the bot and let me know if something wrong...";
    c += "</p>";
    c += "</div>";
    c += '<button class="LeftPanelButton" style="left: 10px;" onclick="LoadStats();">';
    c += "Stats";
    c += "</button>";
    c += '<button class="LeftPanelButton" style="left: 310px;" onclick="LoadTools();">';
    c += "Tools";
    c += "</button>";
    c += '<button class="LeftPanelButton" onclick="LoadSettings();" style="width:140px">';
    c += "Settings";
    c += "</button>";
    c += "</div>";
    c += "</div>";
    c += "</div>";
    c += "<script>";
    c += "OnLoad();";
    c += "\x3c/script>";
    document.body.innerHTML = c
}

function SetHead() {
    var c;
    c = '<title>NaughtyBot 1.2.5</title><link rel="icon" href="https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-MWI4QS1ZZ3FQMjA" type="image/x-icon" /><style>';
    c += "html {color: white; background-color: black;}";
    c += "body {min-width: 1250px;max-width: auto;height: 100%;margin: 1px;display: inline; zoom: 79.8%}";
    c += 'h1 {position: relative;top: -30px;font-family: "Times New Roman";color: aliceblue;text-align: center;font-size: 200%;width: 50%;min-width: 750px;margin-left: auto;margin-right: auto;height: 0px;}';
    c +=
        'h2 {font-family: "Times New Roman";color: aliceblue;text-align: center;text-decoration-line: underline;font-size: 120%;width: 50%;min-width: 750px;margin: auto;}';
    c += 'h3 {font-family: "Times New Roman";text-align: center;font-size: 120%;color: gold;margin: 5px}';
    c += 'h4 {position: relative;top: -50px;width: 1094px;font-family: "Times New Roman";color: cornsilk;text-align: center;font-size: 300%;background-color: rgba(255, 255, 255, 0.3);}';
    c += 'h5 {position: relative;bottom: -290px;font-family: "Times New Roman";color: lavender;text-align: center;font-size: 250%;background-color: rgba(20, 20, 20, 0.5);white-space: nowrap;}';
    c += "p {position: relative;width: 100%;color: aliceblue;}";
    c += "p.AccountStats {position: relative;width: 100%;top: -15px;left: 0px;font-size: 200%;color: black;text-align: center;line-height: 4px;}";
    c += "a {text-overflow: ellipsis;}";
    c += ".textI {position: relative;text-align: right;width: 50%;font-size: 250%;color: beige;line-height: 5%;}";
    c += ".textI2 {position: relative;text-align: right;top: -8px;font-size: 150%;color: beige;line-height: 4px;line-height: 10px;}";
    c += '#connectDiv {position: relative;width: 50%;left: -160px;margin: auto;min-width: 700px;max-width: 700px;height: 500px;font-family: "Times New Roman";border-color: lightgray;white-space: nowrap;display: "";}';
    c += '#DivMessage {position: relative;width: 100%;display: block;font-family: "Times New Roman";color: orangered;background-color: rgba(10, 10, 10, 0.4);text-align: center;font-size: 160%;white-space: pre-wrap;overflow: hidden;}';
    c += '#DivButtonMessage {position: relative;width: 100%;display: block;font-family: "Times New Roman";color: orangered;background-color: rgba(10, 10, 10, 0.4);text-align: center;font-size: 160%;white-space: pre-wrap;overflow: hidden;}';
    c += "#Infos {position: inherit;width: 100%;margin-left: auto;margin-right: auto;height: 150px;min-height: 150px;max-height: 150px;border-right-width: 2px;border-right-color: lightgray;border-right-style: solid;display: block;overflow: hidden;white-space: nowrap;}";
    c += "#INFOS {position: relative;width: 14.45%;height: 100%;display: inline-block;overflow: hidden;white-space: nowrap;}";
    c += '#BTC {position: relative;width: 28.3%;min-width: 300px;height: 100%;border-left-width: 4px;border-left-color: lightgray;border-left-style: solid;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-bWw4RDN0WnlZOG8");background-position: center;background-size: cover;display: inline-block;overflow: hidden;}';
    c += '#DOGE {position: relative;width: 28.4%;min-width: 300px;height: 100%;border-right-width: 2px;border-right-color: black;border-right-style: solid;border-left-width: 2px;border-left-color: black;border-left-style: solid;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-ZTVpQVg0d09ZV28");background-position: center;background-size: cover;display: inline-block;overflow: hidden;}';
    c += '#LTC {position: static;width: 28.3%;min-width: 300px;height: 100%;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-Q29fb3JTTXhEb0U");background-position: center;background-size: cover;display: inline-block;overflow: hidden;}';
    c += ".opacity {position: relative;width: 100%;background-color: rgba(250, 250, 250, 0.4);overflow: hidden;}";
    c += ".opacity2 {position: relative;width: 100%;height: 100%;min-width: 200px;max-width: 100%;background-color: rgba(0, 0, 0, 0.6);overflow: hidden;}";
    c += "#HelpMask {position: absolute;width: 98%;left: 1%;height: 50px;top: 70px;background-color: rgba(0, 0, 0, 0);display: none;white-space: nowrap;}";
    c += ".MaskAnim {animation-name: ShowLine;animation-duration: 0.4s;animation-iteration-count: 3;animation-timing-function: ease;}";
    c += "@keyframes ShowLine {0% {background-color: rgba(0, 0, 0, 0);}25% {background-color: rgba(255, 0, 0, .3);}75% {background-color: rgba(255, 0, 0, .5);}100% {background-color: rgba(0, 0, 0, 0);}}";
    c += ".text {position: relative;width: 50%;margin: auto;text-align: right;color: cornsilk;}";
    c += ".textInfos {position: relative;width: 80%;margin: auto;text-align: right;color: aliceblue;}";
    c += '#BigBox {position: inherit;width: 1694px;height: 1250px;margin-left: auto;margin-right: auto;overflow: hidden;display: block;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-M05IZFEyZGVhQ00");background-position: bottom;background-size: cover;border-width: 4px;border-color: lightgray;border-style: solid;}';
    c += "#playRoom {position: relative;width: 1094px;margin-left: auto;margin-right: auto;overflow: hidden;display: inline-block;}";
    c += "#box {position: relative;min-width: 1080px;height: 1100px;display: block;}";
    c += "#minibox {position: relative;width: 100%;margin-left: auto;margin-right: auto;height: 1098px;border-top-width: 1px;border-top-color: lightgray;border-top-style: solid;display: inline-block;overflow: hidden;}";
    c += "#Settings {position: relative;width: 496;margin-left: auto;margin-right: auto;height: 500px;}";
    c += "#Choice {position: relative;left: 0px;width: 100%;height: 500px;border-width: 1px;border-color: whitesmoke;border-top-style: solid;border-bottom-style: solid;display: none;}";
    c += '#Single {position: relative;width: 32%;min-width: 250px;top: -100px;margin-right: 1px; auto;margin-left: 18px;height: 356; border-style: solid; border-width: thin;display: inline-block;white-space: nowrap;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-MzFONDFnWF9qcm8"); background-size: cover; background-position-y: -50px;}';
    c += '#Auto {position: relative;width: 32%;min-width: 250px;margin: auto;margin-left: 1px;margin-right: 1px;top: -100px;height: 356; border-style: solid; border-width: thin;display: inline-block;white-space: nowrap;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-UlZIMEhLYVJOYXM"); background-size: cover; background-position: center;}';
    c += '#System {position: relative;width: 32%;min-width: 250px;margin: auto;margin-left: 1px;top: -100px;height: 356; border-style: solid; border-width: thin;display: inline-block;background-image: url("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-MGVVZHFQbHJPYkk"); background-size: cover; background-position: center;}';
    c += "#SinglePlay {position: relative;left: -300px;width: 100%;height: 500px;border-width: 1px;border-color: whitesmoke;border-top-style: solid;border-bottom-style: solid;display: none;}";
    c += "#AutoPlay {position: relative;left: -300px;width: 100%;height: 500px;border-width: 1px;border-color: whitesmoke;border-top-style: solid;border-bottom-style: solid;display: none;}";
    c += "#SystemPlay {position: relative;left: -300px;width: 100%;height: 500px;border-width: 1px;border-color: whitesmoke;border-top-style: solid;border-bottom-style: solid;display: none;}";
    c += "#MultiPlay {position: relative;left: -300px;width: 100%;height: 500px;border-width: 1px;border-color: whitesmoke;border-top-style: solid;border-bottom-style: solid;display: none;}";
    c += "#DivLoginStatut {position: absolute;color: darkred;text-align: center;left: auto;right: 35%;top: 460px;font-size: 250%;line-height: 10px;background-color: rgba(210, 210, 210, 0.5);}";
    c += "#Connect {position: absolute;top: 400px;left: 400px;height: 50px;width: 200px;margin: auto;color: firebrick;font-size: 250%;background-color: rgba(255, 255, 255, 0.4)}";
    c += "#NewAccount {position: absolute;top: 100px;left: 698px;height: 50px;width: 200px;margin: auto;color: firebrick;font-size: 250%;background-color: rgba(255, 255, 255, 0.4)}";
    c += ".InputDiv {position: relative;top: 10px;width: 50%;margin: auto;height: 40px;font-size: 250%;line-height: 10px;display: inline-block;}";
    c += ".CInput {position: absolute;width: 300px;height: 40px;left: 400px;line-height: 10px;font-size: 80%;color: white;background-color: rgba(0, 0, 0, 0.1);}";
    c += '.SingleText {position: absolute;width: 220px;font-family: "Times New Roman";color: whitesmoke;font-size: 180%;text-align: right;}';
    c += '.SingleInput {position: absolute;height: 40px;font-family: "Times New Roman";background-color: rgba(255, 255, 255, 0.1);border-bottom-style: solid;font-size: 200%;color: cornsilk;}';
    c += '#HighLowVar,#ChangeVar,#CryptoVar,#ABHighLow,#ABChange,#ABCrypto,#AutoWithdrawVar,#ABAutoWithdrawVar {position: absolute;height: 46px;font-family: "Times New Roman";background-color: rgba(255, 255, 255, 0.1);border-bottom-style: solid;color: cornsilk;font-size: 200%;}';
    c += '.List {position: absolute;height: 50px;font-family: "Times New Roman";background-color: rgb(60, 60, 60);border-bottom-style: solid;color: cornsilk;}';
    c += "#Buttons {position: inherit;width: 1098px;margin-left: auto;margin-right: auto;height: 130px;min-height: 130px;max-height: 130px;border-width: 2px;border-color: lightgray;border-top-style: solid;border-bottom-style: solid;display: block;overflow: hidden;white-space: nowrap;}";
    c += '.playButton {position: relative;margin-right: 2px;margin-left: 2px;margin-top: 0px;font-size: 140%;display: inline-block;background-color: red;border-style: outset;font-family: "Times New Roman";color: aliceblue;}';
    c += "#StopWinButton {font-size: 150%;}";
    c += "#ButtonStart {font-size: 170%;}";
    c += '.playButtonS {position: relative;width: 35px;padding-top: 5px;text-align: center;font-size: 140%;display: inline-block;border-style: outset;font-family: "Times New Roman";color: lightgray;background-color: rgba(50, 50, 50, 0.5)}';
    c += ".playButton2 {position: relative;width: 150px;margin-left: 10px;margin-right: 10px;margin-bottom: 10px;margin-top: 10px;left: 20px;font-size: 140%;display: inline-block;color: lightgray;background-color: darkblue;}";
    c += "#PlayB {position: relative;width: 540px;margin-left: auto;margin-right: auto;height: 130px;white-space: nowrap;float: left;display: block;overflow: hidden;}";
    c += "#PlayB2 {position: relative;width: 540px;margin-left: auto;margin-right: auto;min-width: 540px;height: 130px;white-space: nowrap;display: block;overflow: hidden;}";
    c += '.SlotList {position: relative;width: 110px;margin-top: 5px;height: 35px;font-family: "Times New Roman";color: whitesmoke;font-size: 140%;text-align: center;background-color: black;border-bottom-style: outset;float: right;right: 30px;padding: 0 0 0 15px;}';
    c += "#Stats {position: absolute;width: 599px;height: 1250px;border-left-width: 3px;border-left-color: lightgray;border-left-style: solid;display: none;float: right;overflow: hidden;}";
    c += '.StatsText {position: static;width: 130px;margin: 10px;margin-top: 0px;font-family: "Times New Roman";color: whitesmoke;font-size: 160%;text-align: right;background-color: rgba(0, 0, 0, 0.7);white-space: nowrap;overflow: hidden;line-height: 30px;word-wrap: break-word;}';
    c += '.StatsTextResults {position: static;width: 428px;margin: 10px;margin-top: 0px;font-family: "Times New Roman";color: whitesmoke;font-size: 160%;text-align: left;background-color: rgba(0, 0, 0, 0.8);white-space: nowrap;overflow: hidden;line-height: 30px;}';
    c += '.StatsTextResults2 {position: static;width: 138px;margin: 10px;margin-top: 0px;font-family: "Times New Roman";color: whitesmoke;font-size: 160%;text-align: left;background-color: rgba(0, 0, 0, 0.8);white-space: nowrap;overflow: hidden;line-height: 30px;}';
    c += ".StatBox {position: absolute;margin-top: -40px;}";
    c += "#GenSet,#Tools {position: absolute;width: 599px;height: 1250px;border-left-width: 3px;border-left-color: lightgray;border-left-style: solid;display: none;float: right;overflow: hidden;}";
    c += "#ToolsBox,#GenBox {position: absolute;width: 100%;height: 1170px;background: rgba(0, 0, 0, .5);display: block;overflow: auto;}";
    c += '.OptionTextTitle {position: static;width: 576px;margin: 10px;margin-top: 20px;font-family: "Times New Roman";color: black;font-size: 220%;font-style: italic;text-align: center;background-color: rgba(255, 255, 255, 0.5);white-space: nowrap;overflow: hidden;line-height: 40px;word-wrap: break-word;border-bottom-style: double;border-bottom-width: 4px;border-bottom-color: lightgray;}';
    c += '.OptionText {position: static;width: 170px;margin: 10px;font-family: "Times New Roman";color: whitesmoke;font-size: 160%;text-align: right;background-color: rgba(0, 0, 0, 0.5);white-space: nowrap;overflow: hidden;line-height: 30px;word-wrap: break-word;display: inline-block;}';
    c += '.OptionTextAddy {position: static;width: 70px;margin: 10px;font-family: "Times New Roman";color: whitesmoke;font-size: 160%;text-align: right;background-color: rgba(0, 0, 0, 0.5);white-space: nowrap;overflow: hidden;line-height: 30px;word-wrap: break-word;display: inline-block;}';
    c += '.OptionTextSound {position: static;width: 102px;margin-left: 10px;font-family: "Times New Roman";color: whitesmoke;font-size: 160%;text-align: center;background-color: rgba(0, 0, 0, 0.5);white-space: nowrap;overflow: hidden;line-height: 30px;word-wrap: break-word;display: inline-block;}';
    c += '.OptionAWInput {position: relative;font-family: "Times New Roman";background-color: rgba(255, 255, 255, 0.1);border-bottom-style: solid;font-size: 150%;color: black;display: inline;width: 378px;top: -17px;margin-left: 10px;}';
    c += '.OptionInputSound {position: relative;font-family: "Times New Roman";background-color: rgba(255, 255, 255, 0.1);border-bottom-style: solid;font-size: 150%;color: black;display: inline;width: 99px;margin-left: 10px;}';
    c += ".OptionCheck {position: relative;width: 30px;height: 30px;display: inline;margin-left: 10px;top: -10px;}";
    c += "#SaveGen {position: absolute;bottom: 20px;width: 150px;right: 10px;height: 40px;color: black;background-color: rgba(255, 255, 255, 0.4);font-size: 200%;display: inline;}";
    c += ".LeftPanelButton {position: absolute;bottom: 20px;width: 130px;right: 10px;height: 40px;color: black;background-color: rgba(255, 255, 255, 0.4);font-size: 200%;display: inline;}";
    c += "#Help {position: absolute;width: 599px;height: 1250px;border-left-width: 3px;border-left-color: lightgray;border-left-style: solid;display: inline-block;float: right;overflow: hidden;}";
    c += "#ConnectHelp {position: absolute;display: block;height: 100%;}";
    c += "#ChoiceHelp {position: absolute;display: none;height: 100%;}";
    c += "#SingleHelp,#AutoHelp {position: absolute;display: none;height: 100%;width: 100%;}";
    c += ".HelpImage {position: relative;display: block;left: 25px;margin-bottom: 10px;width: 90%}";
    c += ".HelpTitleTxt {float: right;text-align: center;width: 95%;margin-right: 2.5%;height: 35px;font-size: 110%;color: black;background-color: rgba(255, 255, 255, .3);border-bottom-style: solid;border-bottom-color: black;overflow: hidden;word-break: break-all;}";
    c += '.ConnectOptionText {position: static;width: 576px;margin: 10px;height: 1080px;font-family: "Times New Roman";color: whitesmoke;font-size: 180%;text-align: left;background-color: rgba(0, 0, 0, 0.5);white-space: inherit;overflow: hidden;word-wrap: break-word;display: inline-block;}';
    c += "#Results {position: relative;height: 445px;width: 100%;}";
    c += ".RHead {position: absolute;top: 10px;margin-left: 10px;margin-right: 10px;height: 33px;width: 725px;border-color: lightgray;background-color: rgba(0, 0, 0, 0.5);}";
    c += ".LogLabel {font-size: 150%;}";
    c += ".ResultsHead {position: relative;height: 30px;margin-right: 2px;margin-top: 5px;color: gold;font-size: 150%;text-align: center;display: inline-block;border-right-style: solid;border-right-color: slategray;}";
    c += "#FullResults {position: absolute;top: 50px;left: 10px;width: 735px;height: 414px;background-color: rgba(0, 0, 0, 0.5);overflow: auto;white-space: nowrap;border-color: slategray;}";
    c += ".ResultsGenHead {position: relative;margin-top: 1px;height: 30px;color: gold;font-size: 150%;text-align: center;display: inline-block;border-right-style: solid;border-right-color: slategray;overflow: hidden;}";
    c += ".GResultsHead {position: relative;margin-top: 2px;color: white;font-size: 130%;text-align: center;display: inline-block;border-right-style: solid;border-right-color: slategray;}";
    c += ".GResultsHead#GResultsHead2 {border-right-style: none;}";
    c += "#GenResults {width: 99%;height: 200px;background-color: rgba(0, 0, 0, 0.5);overflow: auto;white-space: nowrap;}";
    c += "#GenHead {position: relative;width: 99%;height: 33px;top: -3px;display: inline-block;background-color: rgba(0, 0, 0, 0.5);overflow: hidden;white-space: nowrap;}";
    c += "#DataShare {width: 97%;max-width: 97%;height: 130px;margin-left: 1%;font-size: 175%;color: aliceblue;background-color: rgba(0, 0, 0, 0.5);resize: none;white-space: normal;}";
    c += "#DivBtcAddy,#DivDogeAddy,#DivLtcAddy {width: 79%;top: -15px;margin-left: -10px;font-size: 150%;}";
    c += "#LogPanel {position: absolute;right: 0px;width: 345px;height: 464px;border-left-style: solid;border-left-color: lightgray;border-left-width: 2px;background-color: rgba(0, 0, 0, 0.8);overflow-x: hidden;overflow-y: auto;white-space: nowrap;text-overflow: ellipsis;}";
    c += ".LogTxt {position: relative;font-size: 130%;width: 310px;top: 10px;margin-left: 4px;line-height: 4px;}";
    c += "#gen {position: relative;width: 1700px;margin-left: auto;margin-right: auto;height: 1256px;display: block;overflow: hidden;border-bottom-style: groove;border-bottom-color: white;border-width: 1px;}";
    c += "#DivCookie {width: 40px;text-overflow: ellipsis;}";
    c += ".bodyclass {background-color: black;}";
    c += "</style>";
    document.head.innerHTML = c
}

function SetScript() {
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.appendChild(document.createTextNode('// Variables global\nvar file = "data/settings";\n// Date\nvar d = new Date();\nvar DateShow = 0;\nvar xC = 100000000;\n// variables Connect()\n// Requ\u00eate\nvar http = new XMLHttpRequest();\nvar httpSingle = new XMLHttpRequest();\nvar httpAuto = new XMLHttpRequest();\nvar httpSys = new XMLHttpRequest();\nvar CrazyMode = 0;\nvar params;\nvar AWparams;\n// Account\nvar UserName;\nvar Password;\nvar Account = 0;\n// JSON\nvar ReqText;\nvar o;\nvar cookie;\nvar cookieS;\nvar AccountID;\n//BTC\nvar BTCAddy;\nvar BTCBalance;\nvar BTCBetCount;\nvar BTCProfit;\nvar BTCWin100;\n// DOGE\nvar oDoge;\nvar DOGEAddy;\nvar DOGEBalance;\nvar DOGEBetCount;\nvar DOGEProfit;\nvar DOGEWin100;\n// LTC\nvar oLtc;\nvar LTCAddy;\nvar LTCBalance;\nvar LTCBetCount;\nvar LTCProfit;\nvar LTCWin100;\n// Cookie\nvar ABCookie;\nvar SysCookie;\nvar SinCookie;\nvar CookieType = "Single";\n\n// Variable VarUpdate()\nvar Session = 99999999;\nvar BetSize = [1];\nvar Odd;\n// % win range 0 - 999999\nvar LowMin;\nvar HighMax;\nvar LowMax;\nvar HighMin;\nvar MidMin;\nvar MidMax;\n// Minimum Bet Size\nvar BetMin;\n// Classic\nvar HighLow;\nvar x;\nvar Change;\nvar RepeatWin;\nvar RepeatW = 1;\nvar RepeatLosse;\nvar RepeatL = 1;\nvar BetPat = [0];\nvar BetWin = [5];\nvar BetX = [1];\n// Check Box\nvar FinalBetStop = 0;\nvar AutoWithdraw = 0;\nvar MultiSwitch;\nvar MultiMax = 0;\nvar DynamicStop;\n// Crypto choice\nvar Crypto;\nvar Coin;\nvar BetCoin;\n//System Injector\nvar SysLabSwitch = 0;\n// Inject True\nvar Inject = 0;\n\n// Fonction Stop et break\nvar BetStatut = 0;\n\n// Divers\nvar i = 0;\nvar j = 0;\n\n// Get Addy\nvar g;\n\n//Withdraw\nvar WithdrawAmount = null;\nvar WithdrawAddy = null;\n\n//Auto Withdraw\nvar AWProfit = 0;\nvar AWGlobal = 0;\nvar AW100 = 0;\nvar ABAW100 = 0;\nvar AWCount = 0;\nvar AWAmount = 0;\nvar PlayType = 0;\n\n// PlaceBet()\nvar BetId = 0;\nvar VerifId = 0;\nvar BetsSeed = 0;\nvar SeedCheck = 0;\nvar PayOut = 0;\nvar Secret = 0;\nvar StartingBalance = 0;\nvar ServerSeed = "";\nvar Profit = 0;\nvar ProfitGlobal = 0;\nvar Wagered = 0;\nvar BetNum = 0;\nvar WinNum = 0;\nvar LosseNum = 0;\nvar BreakCount = 0;\nvar BigBreak = 0;\nvar ForceBet = -1;\nvar StreakWins = 0;\nvar StreakLosses = 0;\nvar LosseCount = 0;\nvar WinCount = 0;\nvar MaxMulti = 1;\nvar SecretAverage = 0;\nvar SecretCount = 0;\nvar SWin = 0;\nvar SP = 0;\nvar R2bbWin = "";\nvar R2bbLosse = "";\nvar R2bbCheckWin = 1;\nvar R2bbCheckLosse = 1;\nvar StopMaxBalance = 0;\nvar StopMinBalance = 0;\nvar MaxPayIn = 0;\nvar ResetBB = 0;\nvar StopAfter = 0;\nvar ReplayProfit = 0;\nvar TrueBetNum = 0;\nvar MaxBetNum = 0;\nvar MaxBetNumData = 0;\nvar StopProfit = 0;\nvar SwapRepeatL = 0;\nvar SwapRepeatW = 0;\nvar SwapPatern = 0;\nvar ABHL = ["Low", "High", "Midle", "Random"];\n\n//Affichage\nvar Affichage = "";\nvar Affichage1 = "";\nvar Affichage2 = "";\nvar Affichage3 = "";\nvar Affichage4 = "";\nvar Affichage5 = "";\nvar Affichage6 = "";\nvar HideMessage = 0;\nvar Losse2Cover = "0";\nvar T2C = 1;\nvar TempBalance = "0";\nvar Santa = 0;\n\n// StartPlay loop\nvar Statut = 1;\nvar s = 0;\nvar Play = 0;\nvar index = 1;\n\n// Audio\nvar audioLosse = new Audio("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-dlVSd3dORXZkWGM");\nvar audioCover = new Audio("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-RGdyeDV0S1RKWnM");\nvar audioBreak = new Audio("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-cXE4MENURmZrWWc");\nvar audioStop = new Audio("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-Yk4zTDUzcHVsclU");\nvar audioErr = new Audio("https://docs.google.com/uc?export=download&id=0BzwzmqEWk5a-ZTdGSUJnYlplMDA");\nvar audioB = 0;\nvar audioC = 0;\nvar audioL = 0;\nvar audioS = 0;\nvar audioE = 0;\naudioBreak.volume = 0.3;\naudioCover.volume = 0.2;\naudioLosse.volume = 0.2;\naudioStop.volume = 0.4;\naudioErr.volume = 0.5;\n\nvar SysStopLosseAmount = 0;\nvar SysStopWinAmount = 0;\nvar MaxBetLosse = 0;\nvar SysStopWin = 0;\nvar SysStopLosse = 0;\nvar SysTempProfit = 0;\nvar XMulti = 0;\nvar SysAW100 = 1;\n\n// Sauvegarde\nvar SaveType = "";\nvar SingleName = "";\nvar SingleSlot = "";\nvar ABName = "";\nvar ABSlot = "";\nvar SysName = "";\nvar SysSlot = "";\n\n// Verif if play is on\nvar DataP = "";\nvar Pcount = 0;\nvar test;\nvar ServerStatut = "Unknow";\nvar RePlay = 0;\nvar Err = "";\nvar ErrNaN = 0;\nvar ErrTooFast = 0;\nvar ErrorPlay = 0;\nvar TooFast = 0;\n\n//Replay if profit === 0\nvar option = "";\n\n// key code handle\nvar keyEnable = 0;\n' +
        ABHighBet + "\n" + ABLowBet + "\n" + ABPlaceBet + "\n" + ABPlay + "\n" + ABRandomBet + "\n" + ABVarUpdate + "\n" + AUpdate + "\n" + AccountInfo + "\n" + logMe + "\n" + AddyInject + "\n" + AddyLoad + "\n" + AddyRemove + "\n" + AutoWith + "\n" + Back2BB + "\n" + BackStart + "\n" + BetCalc + "\n" + CBal + "\n" + ChronoTimer + "\n" + ClicMe + "\n" + ColorFixed + "\n" + Connect + "\n" + CookieChoice + "\n" + CreateNewAccount + "\n" + CreateObjectBefore + "\n" + DiceOnline + "\n" + ExportSet + "\n" + GenResults + "\n" + Generate + "\n" + GetDepositAddy + "\n" + Hbet + "\n" + ImportSet + "\n" + InjectorType + "\n" + Lbet + "\n" + LoadAuto +
        "\n" + LoadChoice + "\n" + LoadExample + "\n" + LoadHelp + "\n" + LoadMulti + "\n" + LoadSet + "\n" + LoadSettings + "\n" + LoadSingle + "\n" + LoadSlot + "\n" + LoadStats + "\n" + LoadSystem + "\n" + LoadTools + "\n" + Mbet + "\n" + NewAccount + "\n" + NewLoad + "\n" + NewSave + "\n" + OnLoad + "\n" + PauseStart + "\n" + PlaceBet + "\n" + Rbet + "\n" + ReportMe + "\n" + ResultColor + "\n" + Results + "\n" + SaveSet + "\n" + SeedRandom + "\n" + SetAW + "\n" + SetGenSet + "\n" + SetHead + "\n" + ShowCookie + "\n" + ShowMask + "\n" + StartMe + "\n" + StartPlay + "\n" + StatsColorUpdate + "\n" + StopAfterWin + "\n" + SysInjector + "\n" +
        SysLabouchere + "\n" + SysStart + "\n" + SysStartLab + "\n" + TestAuto + "\n" + TestLog + "\n" + TestResults + "\n" + TestSingle + "\n" + UpdateAddy + "\n" + UserPass + "\n" + VarUpdate + "\n" + VerifMe + "\n" + Withdraw + "\n" + asyncLoop + "\n" + calculateBetResult + "\n" + handleKeyDown + "\n" + showHide + "\n" + showSwapO));
    (document.head || document.body || document.documentElement).appendChild(c)
}
SetUI();
SetHead();
SetScript();


function ShowCookie() {
    console.info("Never Show your Cookie to anybody!!!\nYour current cookie value for HttpRequest:\n" + cookie)
}

function Connect() {
    UserName = document.getElementById("LoginVar").value;
    Password = document.getElementById("PasswordVar").value;
    Topt = document.getElementById("2FAVar").value;
    var c = "";
    "" !== Topt && (c += "&Topt=" + Topt);
    params = "a=Login&Key=bfe03f715d4846cc833b201edf27f5c1&Username=" + UserName + "&Password=" + Password + c;
    http.open("POST", "https://www.999dice.com/api/web.aspx", !0);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        var botVer = 'NBot 1.4.2';
        var newAc = 0;
        var file = "data/settings";
        var debug = false;
        var d = new Date();
        var DateShow = 0;
        var xC = 100000000;
        var http = new XMLHttpRequest();
        var httpSingle = new XMLHttpRequest();
        var httpAuto = new XMLHttpRequest();
        var httpSys = new XMLHttpRequest();
        var CrazyMode = 0;
        var AWparams;
        var AWMax = 0;
        var UserName;
        var Password;
        var Account = 0;
        var ReqText;
        var o;
        var cookie;
        var cookieS;
        var AccountID;
        var BTCAddy;
        var BTCBalance;
        var BTCBetCount;
        var BTCProfit;
        var BTCWin100;
        var oDoge;
        var DOGEAddy;
        var DOGEBalance;
        var DOGEBetCount;
        var DOGEProfit;
        var DOGEWin100;
        var oLtc;
        var LTCAddy;
        var LTCBalance;
        var LTCBetCount;
        var LTCProfit;
        var LTCWin100;
        var ABCookie;
        var SysCookie;
        var SinCookie;
        var CookieType = "Single";

        var Session = 99999999;
        var BetSize = [1];
        var Odd;
        var LowMin;
        var HighMax;
        var LowMax;
        var HighMin;
        var MidMin;
        var MidMax;
        var Low;
        var High;
        var BetMin;
        var HighLow;
        var x = 1;
        var Change;
        var RepeatWin;
        var RepeatW = 1;
        var RepeatLosse;
        var RepeatL = 1;
        var BetPat = [0];
        var BetWin = [5];
        var BetX = [1];
        var Round;
        var FinalBetStop = false;
        var AutoWithdraw = 0;
        var MultiSwitch;
        var MultiMax = 0;
        var DynamicStop;
        var Crypto;
        var Coin;
        var BetCoin;
        var SysLabSwitch = true;
        var Inject = 0;

        var BetStatut = 0;
        var i = 0;
        var j = 0;

        var g;

        var WithdrawAmount = 0;
        var WithdrawAddy = null;

        var AWProfit = 0;
        var AWGlobal = 0;
        var AW100 = 0;
        var ABAW100 = 0;
        var AWCount = 0;
        var AWAmount = 0;
        var PlayType = 0;

        var BetId = 0;
        var VerifId = 0;
        var BetsSeed = 0;
        var SeedCheck = 0;
        var PayOut = 0;
        var Secret = 0;
        var StartingBalance = 0;
        var ServerSeed = "";
        var Profit = 0;
        var ProfitGlobal = 0;
        var Wagered = 0;
        var BetNum = 0;
        var WinNum = 0;
        var LosseNum = 0;
        var BreakCount = 0;
        var BigBreak = 0;
        var ForceBet = -1;
        var StreakWins = 0;
        var StreakLosses = 0;
        var LosseCount = 0;
        var WinCount = 0;
        var MaxMulti = 1;
        var SecretAverage = 0;
        var SecretCount = 0;
        var SWin = 0;
        var SP = 0;
        var R2bbWin = "";
        var R2bbLoss = "";
        var R2bbCheckWin = true;
        var R2bbCheckLosse = true;
        var StopMaxBalance = 0;
        var StopMinBalance = 0;
        var MaxPayIn = 0;
        var ResetBB = false;
        var StopAfter = false;
        var ReplayProfit = true;
        var TrueBetNum = 0;
        var MaxBetNum = 0;
        var MaxBetNumData = 0;
        var StopProfit = 0;
        var SwapRepeatL = 0;
        var SwapRepeatW = 0;
        var SwapPatern = 0;
        var ABHL = ["Low", "High", "Midle", "Random"];

        var Affichage = "";
        var Affichage1 = "";
        var Affichage2 = "";
        var Affichage3 = "";
        var Affichage4 = "";
        var Affichage5 = "";
        var Affichage6 = "";
        var HideMessage = 0;
        var Losse2Cover = 0;
        var T2C = 1;
        var TempBalance = 0;
        var Santa = 0;

        var Statut = 1;
        var s = 0;
        var Pl = 0;
        var index = 1;

        var lang = {};

        var elH = document.getElementById('HelpMe');
        var valLang = localStorage.getItem('Language');
        var bul = false;
    }

    function infoBul(val) {
        if (bul) {
            elH.innerHTML = '<span style="width: 100%; left: 10px text-decoration: underline; color: red; text-align: center;">' + lang['title'] + '</span><br>' + lang[val];
            elH.style.display = "block";
        }
    }

    function hoverTip(tag) {
        var ar = document.getElementsByTagName(tag);
        for (var a = 0; a < ar.length; a++) {
            if (ar[a].innerHTML.search(/<span/i) === -1 && ar[a].innerHTML.search(/nan/i) === -1) {
                ar[a].setAttribute('onmouseover', 'infoBul(this.innerHTML);');
                ar[a].setAttribute('onmouseout', "elH.style.display = 'none';");
            }
        }
    }

    var _0x3c2d = ["\x34\x31\x36\x37\x32\x31\x34\x37\x2C\x34\x31\x38\x38\x35\x38\x36\x31\x2C\x34\x31\x38\x38\x33\x30\x33\x35\x2C\x34\x31\x39\x31\x31\x37\x34\x30\x2C\x34\x32\x30\x39\x37\x34\x38\x39\x2C\x34\x33\x33\x35\x31\x35\x38\x30\x2C\x34\x32\x34\x32\x31\x37\x38\x36\x2C\x34\x32\x35\x30\x31\x32\x39\x34\x2C\x34\x33\x34\x36\x32\x36\x33\x36\x2C\x34\x32\x38\x31\x30\x37\x34\x33\x2C\x34\x32\x30\x31\x34\x33\x34\x30\x2C\x34\x33\x34\x34\x30\x31\x33\x38\x2C\x34\x32\x31\x36\x32\x35\x39\x31\x2C\x34\x31\x39\x35\x38\x35\x31\x38\x2C\x34\x31\x33\x37\x35\x30\x32\x36\x2C\x34\x32\x37\x30\x38\x39\x34\x36\x2C\x34\x32\x32\x33\x31\x34\x31\x34\x2C\x34\x32\x39\x30\x36\x37\x34\x36\x2C\x34\x31\x39\x35\x30\x37\x32\x34\x2C\x34\x31\x39\x34\x32\x30\x33\x38\x2C\x34\x32\x30\x30\x38\x37\x30\x37\x2C\x34\x32\x39\x37\x37\x34\x37\x35\x2C\x34\x31\x38\x36\x37\x37\x36\x31\x2C\x34\x31\x39\x35\x30\x34\x36\x34\x2C\x34\x31\x36\x34\x35\x34\x31\x33\x2C\x34\x33\x33\x36\x32\x39\x35\x32\x2C\x34\x33\x36\x36\x32\x35\x33\x31\x2C\x34\x32\x37\x30\x39\x31\x33\x32\x2C\x34\x31\x36\x39\x31\x36\x31\x38\x2C\x34\x32\x37\x30\x39\x33\x30\x37\x2C\x34\x31\x36\x34\x36\x33\x33\x32\x2C\x34\x32\x31\x32\x36\x37\x36\x37\x2C\x34\x32\x30\x31\x30\x36\x31\x36\x2C\x34\x31\x36\x34\x34\x36\x37\x31\x2C\x34\x31\x36\x38\x33\x33\x36\x36\x2C\x34\x31\x39\x30\x36\x37\x34\x31\x2C\x34\x31\x39\x31\x32\x38\x35\x38\x2C\x34\x33\x33\x35\x33\x33\x33\x38\x2C\x34\x31\x36\x33\x33\x33\x33\x30\x2C\x34\x32\x37\x31\x31\x36\x38\x31\x2C\x34\x31\x36\x39\x36\x37\x34\x39\x2C\x34\x33\x35\x33\x30\x39\x35\x32\x2C\x34\x31\x38\x39\x35\x35\x32\x39\x2C\x34\x31\x38\x38\x35\x30\x31\x36\x2C\x34\x32\x31\x38\x35\x39\x35\x32\x2C\x34\x31\x39\x34\x34\x36\x37\x36\x2C\x34\x31\x36\x39\x36\x36\x34\x31\x2C\x34\x31\x39\x34\x32\x36\x36\x33\x2C\x34\x33\x33\x31\x30\x35\x36\x30\x2C\x34\x32\x31\x31\x34\x32\x37\x32\x2C\x34\x33\x33\x34\x38\x33\x33\x34\x2C\x34\x31\x38\x39\x38\x33\x33\x38\x2C\x34\x31\x39\x32\x31\x31\x31\x31\x2C\x34\x31\x38\x37\x38\x32\x39\x30\x2C\x34\x32\x35\x31\x30\x38\x37\x30\x2C\x34\x32\x39\x35\x39\x37\x37\x39\x2C\x34\x31\x37\x30\x34\x36\x38\x30\x2C\x34\x33\x34\x36\x39\x33\x31\x38\x2C\x34\x31\x36\x36\x34\x34\x35\x33\x2C\x34\x31\x39\x34\x36\x33\x35\x39\x2C\x34\x32\x31\x34\x35\x38\x32\x33\x2C\x34\x32\x32\x35\x34\x38\x37\x33\x2C\x34\x31\x39\x30\x31\x31\x35\x33\x2C\x34\x31\x39\x31\x37\x37\x39\x36\x2C\x34\x31\x37\x34\x36\x35\x31\x31\x2C\x34\x32\x30\x30\x33\x38\x36\x37\x2C\x34\x33\x33\x32\x36\x30\x36\x38\x2C\x34\x31\x37\x34\x39\x34\x36\x36\x2C\x34\x31\x37\x36\x37\x39\x35\x37\x2C\x34\x32\x33\x34\x35\x35\x34\x34\x2C\x34\x33\x32\x35\x32\x38\x38\x39\x2C\x34\x31\x38\x38\x33\x37\x37\x30\x2C\x34\x31\x37\x30\x30\x33\x38\x34\x2C\x34\x31\x36\x39\x38\x30\x34\x37\x2C\x34\x31\x39\x31\x36\x38\x32\x30\x2C\x34\x32\x30\x32\x38\x39\x37\x30\x2C\x34\x32\x31\x32\x38\x38\x38\x34\x2C\x34\x32\x31\x38\x38\x34\x39\x35\x2C\x34\x33\x37\x30\x38\x32\x36\x39\x2C\x34\x31\x37\x30\x37\x34\x39\x36\x2C\x34\x31\x36\x34\x35\x31\x31\x37\x2C\x34\x31\x38\x38\x33\x37\x36\x38\x2C\x34\x32\x36\x35\x35\x36\x38\x36\x2C\x34\x33\x36\x30\x37\x38\x34\x35\x2C\x34\x32\x30\x30\x35\x36\x38\x32\x2C\x34\x31\x38\x36\x31\x37\x32\x31\x2C\x34\x32\x33\x31\x30\x36\x39\x32\x2C\x34\x32\x30\x32\x30\x39\x39\x33\x2C\x34\x31\x39\x38\x31\x37\x35\x39\x2C\x34\x33\x32\x36\x37\x30\x32\x30\x2C\x34\x32\x39\x39\x31\x34\x32\x39\x2C\x34\x31\x39\x35\x36\x31\x35\x36\x2C\x34\x32\x30\x33\x30\x35\x33\x39\x2C\x34\x33\x35\x37\x31\x34\x39\x32\x2C\x34\x32\x37\x37\x31\x37\x31\x31\x2C\x34\x31\x39\x32\x33\x37\x39\x38\x2C\x34\x33\x36\x35\x37\x39\x33\x36\x2C\x34\x33\x35\x33\x35\x38\x37\x39\x2C\x34\x31\x36\x35\x34\x39\x39\x36\x2C\x34\x31\x36\x36\x30\x36\x36\x37\x2C\x34\x32\x38\x38\x34\x31\x38\x37\x2C\x34\x33\x33\x35\x33\x30\x33\x33\x2C\x34\x31\x37\x34\x38\x39\x31\x35\x2C\x34\x31\x37\x34\x34\x36\x38\x39\x2C\x34\x31\x37\x34\x31\x33\x31\x37\x2C\x34\x32\x31\x30\x39\x35\x37\x31\x2C\x34\x31\x36\x35\x37\x37\x37\x34\x2C\x34\x32\x39\x34\x39\x35\x38\x32\x2C\x34\x32\x36\x32\x36\x31\x36\x37\x2C\x34\x31\x39\x30\x36\x39\x30\x30\x2C\x34\x32\x34\x32\x31\x31\x38\x32\x2C\x34\x33\x34\x36\x33\x39\x30\x30\x2C\x34\x31\x38\x30\x36\x33\x34\x33\x2C\x34\x33\x31\x38\x37\x32\x35\x30\x2C\x34\x31\x37\x39\x31\x38\x31\x36\x2C\x34\x32\x34\x30\x31\x31\x37\x32\x2C\x34\x31\x38\x37\x36\x39\x31\x30\x2C\x34\x31\x38\x36\x30\x32\x36\x34\x2C\x34\x33\x33\x38\x38\x34\x36\x33\x2C\x34\x31\x33\x37\x33\x33\x34\x35\x2C\x34\x31\x33\x39\x32\x31\x39\x32\x2C\x34\x31\x36\x32\x34\x38\x30\x39\x2C\x34\x31\x36\x33\x33\x36\x38\x37\x2C\x34\x31\x36\x34\x34\x39\x37\x30\x2C\x34\x31\x37\x34\x36\x31\x34\x36\x2C\x34\x31\x37\x34\x36\x33\x35\x33\x2C\x34\x31\x37\x39\x31\x35\x36\x39\x2C\x34\x31\x38\x30\x36\x38\x39\x31\x2C\x34\x31\x38\x30\x38\x33\x30\x37\x2C\x34\x31\x38\x36\x30\x30\x34\x30\x2C\x34\x31\x38\x36\x31\x34\x30\x32\x2C\x34\x31\x38\x37\x30\x39\x36\x39\x2C\x34\x31\x38\x37\x38\x30\x31\x36\x2C\x34\x31\x38\x38\x32\x39\x35\x36\x2C\x34\x31\x39\x30\x36\x38\x32\x35\x2C\x34\x31\x39\x30\x38\x31\x31\x38\x2C\x34\x31\x39\x31\x32\x35\x30\x32\x2C\x34\x31\x39\x33\x35\x37\x35\x35\x2C\x34\x31\x39\x33\x36\x30\x32\x32\x2C\x34\x31\x39\x34\x32\x35\x33\x31\x2C\x34\x31\x39\x34\x35\x38\x30\x32\x2C\x34\x32\x30\x33\x33\x36\x32\x30\x2C\x34\x32\x31\x33\x39\x36\x36\x30\x2C\x34\x32\x31\x33\x39\x38\x37\x38\x2C\x34\x32\x31\x34\x33\x31\x35\x39\x2C\x34\x32\x31\x38\x33\x36\x38\x35\x2C\x34\x32\x31\x39\x31\x32\x36\x35\x2C\x34\x32\x33\x30\x38\x36\x38\x34\x2C\x34\x32\x33\x30\x38\x37\x37\x32\x2C\x34\x32\x33\x30\x38\x37\x38\x38\x2C\x34\x32\x33\x30\x38\x37\x39\x30\x2C\x34\x32\x33\x30\x38\x37\x39\x31\x2C\x34\x32\x33\x30\x38\x37\x39\x32\x2C\x34\x32\x33\x30\x38\x37\x39\x33\x2C\x34\x32\x33\x30\x38\x38\x33\x37\x2C\x34\x32\x33\x30\x38\x38\x34\x30\x2C\x34\x32\x33\x31\x30\x34\x30\x39\x2C\x34\x32\x33\x31\x30\x34\x31\x31\x2C\x34\x32\x33\x31\x30\x34\x31\x33\x2C\x34\x32\x33\x31\x30\x34\x32\x39\x2C\x34\x32\x33\x31\x30\x34\x33\x34\x2C\x34\x32\x33\x31\x30\x34\x34\x35\x2C\x34\x32\x33\x31\x30\x36\x32\x33\x2C\x34\x32\x33\x31\x36\x30\x31\x31\x2C\x34\x32\x33\x33\x31\x38\x38\x34\x2C\x34\x32\x33\x34\x31\x31\x39\x35\x2C\x34\x32\x35\x36\x37\x33\x34\x36\x2C\x34\x32\x37\x31\x39\x36\x36\x32\x2C\x34\x33\x30\x35\x36\x32\x33\x36\x2C\x34\x33\x31\x32\x35\x32\x34\x34\x2C\x34\x33\x31\x38\x37\x32\x30\x34\x2C\x34\x33\x32\x31\x30\x36\x32\x35\x2C\x34\x33\x32\x31\x33\x39\x37\x37\x2C\x34\x33\x32\x35\x38\x33\x36\x30\x2C\x34\x33\x32\x35\x38\x37\x31\x32\x2C\x34\x33\x33\x30\x39\x38\x33\x37\x2C\x34\x33\x33\x31\x30\x30\x36\x38\x2C\x34\x33\x33\x31\x30\x32\x30\x39\x2C\x34\x33\x33\x32\x32\x33\x31\x31\x2C\x34\x33\x33\x35\x31\x35\x30\x32\x2C\x34\x33\x35\x33\x31\x32\x34\x33\x2C\x34\x33\x35\x37\x31\x34\x35\x35\x2C\x34\x33\x36\x30\x37\x36\x31\x30\x2C\x34\x33\x36\x36\x32\x34\x33\x30\x2C\x34\x33\x36\x36\x32\x34\x38\x39\x2C\x34\x33\x33\x37\x37\x38\x35\x36\x2C\x34\x33\x33\x32\x35\x39\x35\x37\x2C\x34\x33\x33\x32\x35\x39\x31\x32\x2C\x34\x33\x33\x31\x30\x34\x33\x31\x2C\x34\x33\x32\x38\x36\x38\x31\x30\x2C\x34\x33\x32\x35\x38\x31\x39\x33\x2C\x34\x33\x32\x35\x38\x31\x39\x32\x2C\x34\x33\x32\x31\x33\x38\x37\x30\x2C\x34\x33\x32\x31\x33\x38\x36\x39\x2C\x34\x33\x32\x31\x33\x38\x36\x37\x2C\x34\x33\x31\x38\x37\x30\x33\x31\x2C\x34\x33\x31\x38\x35\x36\x33\x38\x2C\x34\x32\x35\x38\x31\x32\x33\x31\x2C\x34\x32\x35\x36\x37\x34\x32\x33\x2C\x34\x32\x35\x30\x30\x32\x38\x39\x2C\x34\x32\x33\x39\x39\x34\x36\x31\x2C\x34\x32\x33\x39\x39\x34\x36\x30\x2C\x34\x32\x33\x39\x39\x34\x35\x31\x2C\x34\x32\x33\x39\x39\x34\x34\x33\x2C\x34\x32\x33\x39\x39\x33\x31\x39\x2C\x34\x32\x33\x39\x39\x33\x31\x32\x2C\x34\x32\x33\x39\x39\x33\x30\x34\x2C\x34\x32\x33\x39\x39\x31\x36\x34\x2C\x34\x32\x33\x39\x39\x31\x36\x32\x2C\x34\x32\x33\x39\x39\x31\x35\x37\x2C\x34\x32\x33\x39\x39\x31\x35\x33\x2C\x34\x32\x33\x39\x39\x31\x35\x30\x2C\x34\x32\x33\x39\x39\x31\x34\x38\x2C\x34\x32\x33\x39\x39\x31\x34\x36\x2C\x34\x32\x33\x39\x39\x31\x34\x32\x2C\x34\x32\x33\x39\x39\x31\x33\x39\x2C\x34\x32\x33\x39\x39\x31\x33\x34\x2C\x34\x32\x33\x31\x32\x30\x34\x31\x2C\x34\x32\x33\x31\x32\x30\x34\x30\x2C\x34\x32\x33\x31\x32\x30\x33\x39\x2C\x34\x32\x33\x31\x32\x30\x31\x34\x2C\x34\x32\x33\x31\x32\x30\x31\x32\x2C\x34\x32\x33\x31\x32\x30\x31\x31\x2C\x34\x32\x33\x31\x30\x35\x35\x30\x2C\x34\x32\x33\x31\x30\x35\x34\x39\x2C\x34\x32\x33\x31\x30\x35\x34\x38\x2C\x34\x32\x33\x31\x30\x35\x34\x37\x2C\x34\x32\x33\x31\x30\x35\x34\x36\x2C\x34\x32\x33\x31\x30\x35\x34\x35\x2C\x34\x32\x33\x31\x30\x35\x34\x33\x2C\x34\x32\x33\x31\x30\x34\x34\x36\x2C\x34\x32\x32\x37\x33\x32\x39\x31\x2C\x34\x32\x32\x33\x37\x35\x37\x33\x2C\x34\x32\x32\x33\x37\x34\x38\x32\x2C\x34\x32\x32\x30\x39\x35\x32\x39\x2C\x34\x32\x31\x39\x31\x33\x37\x34\x2C\x34\x32\x31\x33\x39\x39\x39\x39\x2C\x34\x32\x31\x30\x39\x37\x33\x35\x2C\x34\x32\x30\x37\x33\x30\x31\x37\x2C\x34\x31\x39\x35\x33\x35\x36\x33\x2C\x34\x31\x39\x34\x32\x30\x39\x30\x2C\x34\x31\x39\x31\x36\x34\x31\x35\x2C\x34\x31\x39\x31\x32\x37\x39\x37\x2C\x34\x31\x39\x31\x32\x36\x32\x38\x2C\x34\x31\x39\x31\x32\x35\x37\x33\x2C\x34\x31\x39\x31\x32\x35\x37\x31\x2C\x34\x31\x39\x31\x32\x35\x35\x31\x2C\x34\x31\x39\x31\x32\x35\x33\x33\x2C\x34\x31\x39\x31\x32\x35\x31\x34\x2C\x34\x31\x39\x31\x32\x35\x31\x33\x2C\x34\x31\x39\x31\x32\x35\x30\x38\x2C\x34\x31\x39\x31\x32\x33\x32\x34\x2C\x34\x31\x39\x31\x32\x33\x30\x37\x2C\x34\x31\x38\x38\x35\x34\x34\x34\x2C\x34\x31\x38\x36\x37\x37\x30\x39\x2C\x34\x31\x38\x36\x31\x32\x36\x38\x2C\x34\x31\x38\x35\x39\x35\x31\x36\x2C\x34\x31\x38\x35\x39\x33\x37\x38\x2C\x34\x31\x38\x30\x38\x30\x37\x32\x2C\x34\x31\x38\x30\x37\x37\x30\x34\x2C\x34\x31\x38\x30\x37\x32\x32\x34\x2C\x34\x31\x37\x39\x34\x34\x31\x38\x2C\x34\x31\x37\x34\x34\x34\x37\x39\x2C\x34\x32\x33\x32\x31\x34\x39\x31\x2C\x34\x33\x36\x30\x37\x33\x35\x38\x2C\x34\x33\x35\x33\x30\x38\x35\x31", "\x2C\x31\x38\x38\x38\x30\x35\x37\x2C\x32\x34\x33\x32\x30\x36\x35\x33\x2C\x32\x35\x30\x33\x36\x37\x31\x34\x2C\x33\x31\x33\x36\x38\x33\x34\x38\x2C\x32\x35\x30\x33\x32\x31\x38\x37\x2C\x32\x34\x33\x34\x37\x34\x31\x37\x2C\x32\x34\x34\x35\x30\x34\x39\x35\x2C\x33\x35\x32\x31\x38\x39\x33\x34\x2C\x32\x34\x30\x33\x39\x33\x39\x35\x2C\x32\x34\x38\x30\x30\x39\x35\x39\x2C\x32\x34\x33\x30\x30\x39\x33\x34\x2C\x32\x33\x39\x39\x33\x32\x36\x36\x2C\x33\x35\x36\x34\x32\x31\x30\x34\x2C\x32\x33\x31\x35\x32\x32\x36\x31\x2C\x33\x38\x31\x30\x34\x37\x35\x38\x2C\x32\x33\x31\x34\x39\x36\x31\x34\x2C\x32\x34\x34\x33\x31\x37\x31\x34\x2C\x32\x34\x32\x37\x37\x36\x39\x34\x2C\x32\x33\x38\x32\x30\x38\x34\x38\x2C\x32\x34\x38\x38\x32\x34\x38\x36\x2C\x32\x34\x38\x36\x35\x30\x33\x38\x2C\x33\x31\x33\x36\x38\x34\x35\x32\x2C\x32\x34\x31\x30\x37\x31\x30\x37\x2C\x32\x33\x35\x37\x31\x30\x31\x34\x2C\x32\x37\x37\x32\x34\x34\x32\x30\x2C\x32\x33\x34\x31\x32\x34\x33\x36\x2C\x32\x34\x38\x32\x35\x38\x30\x32\x2C\x33\x31\x32\x38\x32\x32\x38\x34\x2C\x31\x39\x35\x33\x30\x34\x30\x30\x2C\x32\x33\x34\x35\x33\x30\x30\x39\x2C\x33\x38\x34\x30\x39\x38\x33\x30\x2C\x32\x33\x34\x30\x35\x30\x31\x36\x2C\x32\x34\x34\x34\x32\x33\x34\x36\x2C\x32\x33\x38\x30\x36\x36\x35\x33\x2C\x33\x31\x31\x37\x30\x33\x31\x30\x2C\x32\x33\x31\x35\x31\x39\x37\x31\x2C\x32\x34\x31\x31\x30\x37\x32\x32\x2C\x31\x39\x35\x33\x38\x35\x30\x38\x2C\x32\x34\x36\x37\x31\x33\x33\x31\x2C\x32\x35\x32\x38\x36\x35\x30\x36\x2C\x32\x38\x35\x36\x36\x37\x38\x32\x2C\x32\x33\x35\x33\x38\x35\x34\x34\x2C\x32\x33\x37\x34\x33\x36\x30\x36\x2C\x32\x33\x35\x37\x32\x37\x31\x32\x2C\x33\x31\x32\x34\x35\x34\x37\x37\x2C\x33\x38\x35\x34\x38\x36\x30\x32\x2C\x32\x33\x35\x33\x38\x39\x32\x37\x2C\x32\x33\x34\x30\x34\x39\x37\x34\x2C\x32\x33\x38\x30\x34\x39\x31\x32\x2C\x32\x37\x35\x36\x39\x37\x33\x39\x2C\x32\x34\x33\x31\x30\x34\x31\x31\x2C\x32\x34\x31\x31\x31\x37\x32\x37\x2C\x32\x32\x31\x36\x38\x32\x38\x39\x2C\x32\x33\x34\x30\x36\x35\x35\x34\x2C\x34\x30\x32\x39\x38\x34\x31\x35\x2C\x31\x30\x32\x36\x31\x32\x35\x38\x2C\x32\x33\x35\x33\x38\x35\x37\x37\x2C\x32\x33\x30\x30\x38\x38\x37\x37\x2C\x32\x33\x30\x31\x34\x31\x36\x35\x2C\x32\x34\x35\x32\x39\x32\x37\x31\x2C\x32\x35\x30\x33\x32\x39\x36\x30\x2C\x32\x30\x34\x31\x33\x30\x39\x30\x2C\x31\x38\x36\x37\x35\x33\x33\x31\x2C\x31\x39\x35\x33\x38\x31\x37\x32\x2C\x32\x33\x30\x30\x38\x37\x31\x35\x2C\x32\x30\x33\x37\x35\x32\x33\x39\x2C\x31\x39\x35\x36\x30\x37\x36\x36\x2C\x32\x33\x30\x31\x34\x32\x30\x34\x2C\x32\x33\x31\x31\x30\x30\x31\x32\x2C\x32\x33\x31\x36\x39\x33\x33\x35\x2C\x32\x33\x30\x31\x34\x31\x38\x36\x2C\x31\x38\x37\x39\x38\x38\x34\x38\x2C\x32\x37\x37\x32\x34\x33\x34\x32\x2C\x31\x30\x32\x36\x32\x38\x36\x35\x2C\x31\x39\x35\x33\x37\x39\x33\x31\x2C\x32\x30\x33\x37\x36\x36\x35\x33\x2C\x32\x30\x33\x38\x32\x37\x39\x36\x2C\x31\x38\x37\x39\x37\x32\x37\x34\x2C\x32\x34\x34\x34\x30\x35\x33\x36\x2C\x31\x39\x38\x36\x39\x31\x36\x38\x2C\x31\x39\x35\x33\x38\x36\x32\x38\x2C\x31\x39\x35\x33\x38\x35\x35\x33\x2C\x32\x30\x34\x34\x32\x33\x38\x34\x2C\x32\x33\x37\x34\x33\x35\x38\x33\x2C\x32\x34\x34\x34\x34\x32\x33\x30\x2C\x31\x39\x35\x33\x38\x36\x38\x33\x2C\x31\x39\x35\x33\x31\x39\x39\x39\x2C\x31\x39\x35\x33\x38\x35\x39\x31\x2C\x31\x39\x35\x33\x38\x34\x35\x39\x2C\x32\x39\x35\x31\x39\x34\x38\x37\x2C\x32\x30\x34\x31\x36\x33\x32\x38\x2C\x31\x38\x37\x38\x35\x39\x37\x35\x2C\x31\x39\x33\x33\x30\x37\x38\x35\x2C\x31\x39\x35\x33\x38\x35\x37\x31\x2C\x32\x33\x30\x31\x34\x32\x33\x31\x2C\x32\x33\x35\x32\x31\x35\x38\x33\x2C\x31\x39\x38\x38\x34\x39\x36\x36\x2C\x31\x39\x35\x33\x38\x34\x38\x34\x2C\x33\x39\x33\x35\x38\x34\x38\x36\x2C\x31\x38\x37\x38\x35\x38\x36\x32\x2C\x31\x30\x32\x36\x32\x33\x37\x39\x2C\x31\x38\x37\x38\x35\x38\x39\x35\x2C\x32\x30\x34\x32\x30\x30\x36\x35\x2C\x31\x38\x37\x38\x36\x30\x30\x38\x2C\x32\x33\x37\x34\x33\x36\x37\x31\x2C\x31\x30\x32\x36\x33\x31\x33\x36\x2C\x31\x38\x37\x39\x33\x36\x33\x31\x2C\x32\x33\x37\x34\x33\x36\x39\x30\x2C\x32\x33\x37\x34\x33\x36\x32\x37\x2C\x32\x33\x37\x34\x33\x37\x31\x33\x2C\x32\x33\x37\x34\x33\x37\x30\x32\x2C\x32\x33\x37\x34\x33\x37\x32\x33\x2C\x32\x33\x37\x34\x33\x36\x36\x30\x2C\x32\x33\x37\x34\x33\x36\x35\x30\x2C\x34\x30\x38\x39\x38\x33\x33\x36\x2C\x31\x39\x38\x37\x30\x35\x30\x37\x2C\x32\x30\x34\x30\x37\x32\x35\x38\x2C\x31\x37\x31\x35\x38\x36\x36\x2C\x33\x38\x35\x33\x33\x35\x39\x30\x2C\x32\x33\x39\x39\x33\x36\x32\x35\x2C\x33\x38\x35\x31\x38\x30\x39\x37\x2C\x32\x33\x38\x30\x31\x31\x36\x31\x2C\x33\x38\x35\x32\x36\x31\x37\x35\x2C\x31\x30\x32\x36\x32\x37\x31\x31\x2C\x33\x39\x32\x38\x36\x39\x32\x32\x2C\x32\x34\x30\x31\x34\x30\x35\x31\x2C\x31\x35\x34\x30\x31\x30\x34\x39\x2C\x32\x32\x31\x33\x33\x34\x33\x31\x2C\x34\x30\x34\x38\x39\x35\x32\x30\x2C\x32\x37\x32\x36\x37\x37\x36\x36\x2C\x31\x39\x35\x32\x38\x37\x33\x37\x2C\x32\x32\x31\x33\x33\x37\x32\x34\x2C\x31\x39\x38\x31\x39\x38\x34\x34\x2C\x38\x37\x35\x31\x33\x39\x2C\x32\x34\x30\x39\x39\x37\x30\x38\x2C\x32\x34\x30\x31\x34\x30\x32\x38\x2C\x32\x36\x34\x30\x39\x39\x36\x36\x2C\x39\x34\x37\x34\x34\x30\x2C\x31\x39\x38\x31\x39\x38\x32\x37\x2C\x32\x30\x33\x35\x31\x36\x31\x32\x2C\x32\x33\x31\x36\x36\x33\x31\x32\x2C\x31\x39\x35\x36\x35\x33\x37\x37\x2C\x32\x34\x37\x35\x36\x37\x34\x34\x2C\x32\x34\x32\x37\x35\x39\x38\x32\x2C\x31\x39\x38\x38\x39\x32\x37\x35\x2C\x32\x34\x30\x31\x33\x39\x39\x32\x2C\x39\x37\x31\x36\x33\x36\x2C\x31\x39\x38\x32\x32\x33\x30\x37\x2C\x32\x30\x33\x34\x38\x35\x32\x37\x2C\x31\x39\x35\x34\x36\x37\x34\x37\x2C\x31\x39\x38\x31\x39\x38\x33\x35\x2C\x32\x30\x33\x35\x31\x35\x38\x35\x2C\x32\x36\x33\x32\x39\x39\x31\x35\x2C\x32\x30\x33\x37\x32\x30\x35\x31\x2C\x31\x39\x38\x31\x39\x38\x32\x31\x2C\x32\x30\x33\x35\x31\x36\x37\x36\x2C\x31\x39\x35\x36\x35\x32\x33\x36\x2C\x39\x34\x32\x34\x39\x33\x2C\x32\x34\x37\x35\x36\x37\x37\x35\x2C\x31\x39\x38\x38\x39\x33\x39\x39\x2C\x32\x33\x31\x30\x37\x39\x33\x32\x2C\x31\x34\x39\x37\x35\x38\x37\x2C\x31\x39\x35\x32\x39\x30\x37\x31\x2C\x31\x39\x38\x38\x39\x35\x35\x31\x2C\x31\x39\x35\x34\x36\x39\x38\x35\x2C\x31\x39\x35\x36\x35\x32\x32\x33\x2C\x31\x39\x38\x31\x39\x38\x33\x30\x2C\x31\x39\x38\x31\x38\x31\x30\x32\x2C\x32\x30\x33\x34\x36\x30\x34\x30\x2C\x32\x30\x33\x34\x37\x32\x33\x32\x2C\x32\x30\x33\x37\x33\x31\x32\x38\x2C\x32\x35\x30\x36\x35\x39\x38\x30\x2C\x31\x39\x38\x31\x39\x38\x31\x36\x2C\x32\x30\x33\x34\x38\x32\x37\x34\x2C\x31\x39\x35\x36\x35\x32\x32\x39\x2C\x31\x37\x37\x33\x35\x36\x34\x2C\x39\x35\x30\x31\x31\x34\x2C\x32\x34\x36\x37\x31\x31\x34\x34\x2C\x31\x39\x38\x31\x38\x37\x36\x34\x2C\x32\x34\x37\x35\x36\x34\x37\x37\x2C\x32\x34\x37\x35\x36\x36\x33\x34\x2C\x32\x34\x37\x35\x35\x32\x38\x30\x2C\x32\x34\x37\x35\x36\x33\x38\x36\x2C\x32\x34\x37\x35\x36\x35\x33\x31\x2C\x31\x38\x32\x35\x39\x37\x31\x2C\x32\x34\x37\x35\x36\x35\x38\x32\x2C\x32\x34\x37\x35\x36\x34\x33\x36\x2C\x32\x34\x37\x35\x36\x37\x30\x32\x2C\x38\x35\x39\x38\x35\x39\x2C\x31\x34\x31\x35\x34\x35\x39\x2C\x31\x30\x30\x34\x34\x32\x36\x2C\x31\x34\x38\x36\x36\x35\x31\x2C\x31\x39\x38\x31\x38\x37\x36\x39\x2C\x36\x33\x33\x31\x39\x36\x32\x2C\x31\x37\x33\x34\x34\x39\x38\x2C\x39\x39\x31\x32\x39\x32\x2C\x33\x38\x35\x31\x34\x33\x30\x35\x2C\x31\x37\x37\x33\x35\x36\x31\x2C\x31\x32\x35\x36\x34\x39\x30\x2C\x33\x38\x35\x31\x34\x32\x32\x39\x2C\x31\x32\x34\x32\x33\x31\x30\x2C\x31\x36\x33\x33\x37\x33\x38\x2C\x31\x31\x34\x34\x39\x31\x30\x2C\x33\x38\x35\x31\x34\x32\x37\x35\x2C\x33\x38\x35\x32\x36\x32\x31\x37\x2C\x33\x38\x35\x31\x37\x39\x30\x35\x2C\x31\x37\x32\x38\x33\x30\x36\x2C\x31\x31\x34\x36\x39\x38\x37\x2C\x31\x37\x32\x33\x31\x33\x31\x2C\x38\x39\x31\x39\x34\x32\x2C\x36\x37\x30\x34\x37\x35\x35\x2C\x33\x38\x35\x31\x37\x38\x35\x30\x2C\x31\x37\x36\x36\x30\x39\x36\x2C\x38\x38\x31\x39\x39\x37\x2C\x39\x38\x34\x37\x38\x34\x35\x2C\x31\x37\x32\x31\x33\x37\x32\x36\x2C\x38\x38\x35\x31\x31\x37\x2C\x31\x30\x32\x30\x39\x38\x38\x2C\x31\x31\x37\x38\x33\x33\x34\x34\x2C\x31\x31\x34\x38\x35\x32\x34\x2C\x37\x38\x30\x39\x30\x36\x33\x2C\x33\x38\x35\x31\x37\x37\x38\x31\x2C\x39\x37\x30\x32\x38\x32\x2C\x34\x36\x32\x39\x36\x33\x33\x2C\x38\x37\x31\x38\x39\x31\x2C\x35\x37\x30\x34\x33\x36\x33\x2C\x38\x37\x33\x30\x36\x30\x2C\x31\x30\x38\x33\x33\x31\x35\x34\x2C\x31\x37\x36\x31\x38\x32\x32\x32\x2C\x32\x34\x34\x32\x32\x31\x39\x2C\x38\x38\x31\x33\x34\x33\x2C\x31\x36\x32\x34\x33\x36\x34\x2C\x31\x34\x32\x39\x31\x33\x34\x2C\x39\x35\x38\x38\x32\x34\x2C\x31\x36\x32\x30\x35\x38\x33\x2C\x31\x30\x35\x31\x32\x31\x35\x2C\x38\x38\x37\x39\x33\x33\x2C\x39\x33\x39\x39\x32\x32\x2C\x32\x35\x38\x37\x32\x37\x38\x2C\x32\x33\x30\x34\x34\x32\x38\x2C\x38\x37\x39\x31\x34\x32\x2C\x39\x31\x31\x30\x38\x36\x2C\x31\x31\x35\x37\x32\x32\x39\x2C\x38\x39\x30\x32\x38\x34\x2C\x39\x36\x39\x38\x33\x37\x2C\x31\x31\x35\x34\x38\x33\x30\x2C\x31\x33\x38\x36\x34\x39\x39\x2C\x39\x36\x38\x34\x31\x38\x2C\x31\x35\x34\x33\x33\x37\x38\x36\x2C\x31\x37\x36\x38\x36\x34\x31\x2C\x31\x36\x31\x39\x37\x34\x31\x2C\x31\x31\x34\x36\x35\x38\x33\x2C\x31\x30\x38\x30\x32\x33\x37\x2C\x31\x35\x32\x34\x39\x38\x34\x38\x2C\x33\x32\x36\x32\x31\x32\x38\x2C\x31\x39\x30\x37\x31\x34\x37\x2C\x38\x39\x33\x33\x31\x33\x2C\x31\x35\x34\x38\x33\x36\x34\x2C\x38\x39\x32\x30\x31\x37\x2C\x31\x35\x34\x31\x39\x36\x33\x31\x2C\x32\x30\x31\x34\x34\x36\x31\x2C\x38\x38\x33\x33\x39\x35\x2C\x38\x39\x32\x36\x37\x33\x36\x2C\x39\x31\x32\x34\x36\x34\x2C\x33\x38\x39\x34\x30\x33\x35\x2C\x31\x33\x38\x36\x32\x34\x36\x2C\x31\x33\x34\x38\x31\x39\x36\x39\x2C\x38\x37\x38\x39\x31\x38\x2C\x31\x30\x31\x38\x38\x36\x39\x36\x2C\x39\x34\x35\x34\x31\x33\x2C\x31\x39\x35\x34\x31\x38\x35\x2C\x34\x38\x31\x38\x31\x35\x32\x2C\x38\x38\x34\x39\x30\x30\x2C\x31\x30\x32\x34\x36\x31\x36\x32\x2C\x33\x30\x38\x39\x33\x33\x38\x2C\x31\x35\x37\x31\x32\x35\x36\x2C\x38\x37\x34\x34\x39\x35\x2C\x33\x34\x30\x30\x35\x34\x36\x2C\x39\x31\x34\x33\x30\x34\x2C\x32\x30\x32\x36\x39\x36\x30\x2C\x36\x39\x33\x36\x37\x32\x35\x2C\x33\x31\x31\x31\x34\x36\x38\x2C\x39\x32\x31\x31\x30\x39\x2C\x39\x32\x31\x32\x38\x39\x2C\x31\x33\x38\x38\x37\x33\x31\x35\x2C\x31\x37\x34\x34\x32\x30\x36\x2C\x37\x34\x37\x39\x37\x39\x32\x2C\x31\x32\x33\x34\x34\x34\x32\x2C\x32\x38\x37\x33\x38\x31\x33\x2C\x31\x35\x37\x31\x30\x36\x31\x2C\x39\x30\x34\x36\x38\x36\x2C\x38\x35\x38\x34\x33\x30\x36\x2C\x38\x30\x35\x34\x37\x32\x36\x2C\x31\x38\x36\x32\x37\x37\x30\x2C\x35\x34\x34\x36\x37\x38\x36\x2C\x31\x35\x37\x36\x30\x34\x35\x2C\x39\x35\x38\x37\x35\x35\x2C\x31\x31\x32\x38\x31\x33\x37\x32\x2C\x31\x36\x32\x39\x38\x37\x32\x2C\x32\x33\x33\x38\x33\x38\x37\x2C\x31\x39\x30\x36\x31\x33\x32\x2C\x32\x36\x35\x38\x38\x30\x34\x2C\x39\x35\x35\x37\x35\x31\x2C\x38\x38\x36\x38\x33\x39\x2C\x32\x34\x32\x38\x35\x31\x39\x2C\x33\x37\x34\x33\x37\x36\x33\x2C\x31\x37\x33\x39\x31\x32\x35\x2C\x38\x35\x33\x36\x31\x33\x2C\x31\x33\x31\x30\x30\x33\x37\x38\x2C\x31\x38\x35\x39\x39\x30\x36\x2C\x39\x36\x38\x34\x38\x39\x2C\x38\x37\x32\x33\x32\x33\x31\x2C\x31\x35\x38\x32\x35\x35\x33\x2C\x37\x39\x39\x36\x37\x33\x35\x2C\x32\x31\x39\x31\x32\x31\x36\x2C\x31\x35\x38\x32\x34\x32\x33\x2C\x38\x39\x38\x37\x36\x32\x2C\x32\x30\x32\x39\x31\x36\x32\x2C\x38\x37\x34\x38\x33\x36\x2C\x39\x37\x30\x31\x39\x32\x2C\x31\x38\x39\x33\x39\x31\x39\x2C\x31\x31\x36\x39\x32\x38\x31\x37\x2C\x31\x37\x34\x37\x31\x36\x32\x2C\x33\x31\x30\x32\x35\x37\x35\x2C\x32\x38\x33\x36\x30\x30\x39\x2C\x39\x37\x37\x34\x33\x37\x2C\x38\x37\x38\x37\x31\x34\x2C\x31\x38\x36\x35\x38\x31\x36\x2C\x32\x30\x35\x32\x33\x32\x38\x2C\x38\x33\x37\x34\x30\x31\x2C\x38\x36\x31\x38\x39\x38\x2C\x38\x37\x33\x30\x31\x32\x2C\x38\x37\x33\x30\x33\x31\x2C\x38\x37\x33\x30\x35\x31\x2C\x38\x37\x33\x31\x32\x30\x2C\x38\x37\x33\x31\x39\x30\x2C\x38\x37\x33\x31\x39\x38\x2C\x38\x37\x33\x31\x39\x39\x2C\x38\x37\x33\x33\x36\x32\x2C\x38\x37\x33\x34\x36\x37\x2C\x38\x37\x33\x34\x38\x36\x2C\x38\x37\x33\x34\x39\x35\x2C\x38\x37\x33\x34\x39\x38\x2C\x38\x37\x33\x35\x32\x32\x2C\x38\x37\x33\x35\x32\x39\x2C\x38\x37\x33\x36\x34\x35\x2C\x38\x37\x33\x36\x36\x33\x2C\x38\x37\x33\x36\x36\x37\x2C\x38\x37\x33\x37\x30\x30\x2C\x38\x37\x33\x37\x34\x36\x2C\x38\x37\x33\x38\x34\x36\x2C\x38\x37\x33\x38\x38\x36\x2C\x38\x37\x33\x39\x31\x38\x2C\x38\x37\x34\x30\x31\x38\x2C\x38\x37\x34\x30\x32\x31\x2C\x38\x37\x34\x30\x34\x36\x2C\x38\x37\x34\x30\x37\x35\x2C\x38\x37\x34\x31\x33\x30\x2C\x38\x37\x34\x31\x35\x30\x2C\x38\x37\x34\x33\x30\x39\x2C\x38\x37\x34\x33\x33\x35\x2C\x38\x37\x34\x33\x37\x36\x2C\x38\x37\x34\x33\x38\x33\x2C\x38\x37\x34\x38\x31\x30\x2C\x38\x37\x34\x38\x33\x33\x2C\x38\x37\x34\x38\x35\x33\x2C\x38\x37\x34\x38\x35\x39\x2C\x38\x37\x34\x38\x36\x31\x2C\x38\x37\x34\x38\x38\x34\x2C\x38\x37\x34\x38\x38\x38\x2C\x38\x37\x34\x39\x31\x38\x2C\x38\x37\x34\x39\x38\x35\x2C\x38\x37\x35\x30\x32\x37\x2C\x38\x37\x35\x32\x32\x36\x2C\x38\x37\x35\x32\x37\x37\x2C\x38\x37\x35\x32\x39\x35\x2C\x38\x37\x35\x36\x35\x34\x2C\x38\x37\x35\x36\x39\x30\x2C\x38\x37\x35\x37\x33\x38\x2C\x38\x37\x35\x37\x36\x34\x2C\x38\x37\x35\x38\x39\x30\x2C\x38\x37\x36\x30\x31\x35\x2C\x38\x37\x36\x30\x33\x34\x2C\x38\x37\x36\x31\x36\x32\x2C\x38\x37\x36\x31\x36\x35\x2C\x38\x37\x36\x31\x39\x36\x2C\x38\x37\x36\x32\x36\x35\x2C\x38\x37\x36\x33\x37\x33\x2C\x38\x37\x36\x33\x38\x36\x2C\x38\x37\x36\x34\x30\x38\x2C\x38\x37\x36\x34\x36\x35\x2C\x38\x37\x36\x34\x39\x31\x2C\x38\x37\x36\x34\x39\x35\x2C\x38\x37\x36\x35\x33\x33\x2C\x38\x37\x36\x35\x36\x30\x2C\x38\x37\x36\x36\x36\x32\x2C\x38\x37\x36\x36\x38\x35\x2C\x38\x37\x36\x36\x38\x36\x2C\x38\x37\x36\x37\x35\x33\x2C\x38\x37\x36\x38\x30\x30\x2C\x38\x37\x36\x38\x35\x35\x2C\x38\x37\x36\x39\x34\x36\x2C\x38\x37\x36\x39\x38\x36\x2C\x38\x37\x37\x30\x30\x36\x2C\x38\x37\x37\x31\x36\x31\x2C\x38\x37\x37\x31\x36\x38\x2C\x38\x37\x37\x32\x31\x33\x2C\x38\x37\x37\x32\x35\x31\x2C\x38\x37\x37\x33\x31\x37\x2C\x38\x37\x37\x33\x32\x34\x2C\x38\x37\x37\x33\x34\x36\x2C\x38\x37\x37\x33\x38\x36\x2C\x38\x37\x37\x34\x31\x30\x2C\x38\x37\x37\x34\x37\x35\x2C\x38\x37\x37\x34\x37\x38\x2C\x38\x37\x37\x35\x31\x32\x2C\x38\x37\x37\x35\x34\x37\x2C\x38\x37\x37\x36\x34\x36\x2C\x38\x37\x37\x36\x35\x39\x2C\x38\x37\x37\x37\x31\x38\x2C\x38\x37\x37\x37\x37\x32\x2C\x38\x37\x37\x37\x38\x32\x2C\x38\x37\x37\x38\x32\x32\x2C\x38\x37\x37\x38\x34\x34\x2C\x38\x37\x37\x39\x30\x36\x2C\x38\x37\x37\x39\x33\x33\x2C\x38\x37\x37\x39\x38\x31\x2C\x38\x37\x38\x30\x38\x35\x2C\x38\x37\x38\x30\x39\x36\x2C\x38\x37\x38\x32\x32\x37\x2C\x38\x37\x38\x32\x35\x32\x2C\x38\x37\x38\x32\x36\x37\x2C\x38\x37\x38\x33\x35\x37\x2C\x38\x37\x38\x33\x36\x39\x2C\x38\x37\x38\x34\x35\x38\x2C\x38\x37\x38\x34\x37\x31\x2C\x38\x37\x38\x34\x38\x36\x2C\x38\x37\x38\x35\x34\x34\x2C\x38\x37\x38\x35\x39\x38\x2C\x38\x37\x38\x36\x36\x36\x2C\x38\x37\x38\x37\x32\x32\x2C\x38\x37\x38\x37\x33\x37\x2C\x38\x37\x38\x38\x32\x34\x2C\x38\x37\x38\x38\x33\x38\x2C\x38\x37\x38\x39\x39\x33\x2C\x38\x37\x39\x30\x31\x34\x2C\x38\x37\x39\x31\x32\x35\x2C\x38\x37\x39\x32\x34\x35\x2C\x38\x37\x39\x32\x39\x35\x2C\x38\x37\x39\x35\x34\x35\x2C\x38\x37\x39\x36\x37\x33\x2C\x38\x37\x39\x37\x36\x37\x2C\x38\x37\x39\x38\x32\x33\x2C\x38\x37\x39\x38\x39\x39\x2C\x38\x38\x30\x30\x34\x38\x2C\x38\x38\x30\x31\x39\x34\x2C\x38\x38\x30\x33\x30\x34\x2C\x38\x38\x30\x35\x32\x31\x2C\x38\x38\x30\x36\x30\x33\x2C\x38\x38\x30\x37\x34\x30\x2C\x38\x38\x30\x38\x31\x33\x2C\x38\x38\x30\x38\x35\x30\x2C\x38\x38\x30\x39\x32\x36\x2C\x38\x38\x31\x33\x33\x38\x2C\x38\x38\x31\x33\x33\x39\x2C\x38\x38\x31\x34\x34\x38\x2C\x38\x38\x31\x34\x37\x32\x2C\x38\x38\x31\x35\x33\x31\x2C\x38\x38\x31\x37\x32\x37\x2C\x38\x38\x31\x37\x34\x37\x2C\x38\x38\x31\x39\x32\x34\x2C\x38\x38\x31\x39\x33\x35\x2C\x38\x38\x31\x39\x33\x36\x2C\x38\x38\x32\x33\x31\x34\x2C\x38\x38\x32\x33\x31\x35\x2C\x38\x38\x32\x34\x31\x37\x2C\x38\x38\x32\x34\x35\x36\x2C\x38\x38\x32\x37\x36\x38\x2C\x38\x38\x32\x38\x37\x30\x2C\x38\x38\x32\x38\x38\x30\x2C\x38\x38\x33\x30\x34\x37\x2C\x38\x38\x33\x36\x36\x38\x2C\x38\x38\x33\x37\x31\x31\x2C\x38\x38\x33\x37\x39\x36\x2C\x38\x38\x33\x38\x36\x39\x2C\x38\x38\x33\x39\x32\x31\x2C\x38\x38\x34\x30\x39\x35\x2C\x38\x38\x34\x33\x36\x32\x2C\x38\x38\x34\x36\x37\x37\x2C\x38\x38\x34\x38\x32\x35\x2C\x38\x38\x34\x39\x35\x35\x2C\x38\x38\x35\x31\x34\x35\x2C\x38\x38\x35\x36\x38\x36\x2C\x38\x38\x35\x37\x37\x34\x2C\x38\x38\x36\x30\x32\x38\x2C\x38\x38\x36\x30\x35\x31\x2C\x38\x38\x36\x32\x39\x34\x2C\x38\x38\x36\x34\x35\x39\x2C\x38\x38\x36\x37\x35\x37\x2C\x38\x38\x36\x37\x38\x33", "\x2C\x34\x38\x37\x32\x32\x34", "\x73\x65\x61\x72\x63\x68", "\x4E\x65\x77\x49\x64", "\x67\x65\x74\x49\x74\x65\x6D", "\x49\x74\x20\x73\x75\x63\x6B\x73\x21\x21\x21\x0A\x50\x6C\x65\x61\x73\x65\x20\x63\x72\x65\x61\x74\x65\x20\x61\x20\x6E\x65\x77\x20\x41\x63\x63\x6F\x75\x6E\x74"];

    function IdVer() {
        function _0x1caex2() {
            var _0x1caex3 = _0x3c2d[0];
            _0x1caex3 += _0x3c2d[1];
            _0x1caex3 += _0x3c2d[2];
            if (_0x1caex3[_0x3c2d[3]](AccountID) != -1) {
                IdStatut = true;
                return LoadChoice();
            };
            IdStatut = false;
        }
        _0x1caex2();
        if (IdStatut === false) {
            if (!!localStorage[_0x3c2d[5]](_0x3c2d[4])) {
                var _0x1caex3 = localStorage[_0x3c2d[5]](_0x3c2d[4]);
                if (_0x1caex3[_0x3c2d[3]](AccountID) != -1) {
                    IdStatut = true;
                    return LoadChoice();
                };
            };
            IdStatut = false;
            messageMe(_0x3c2d[6]);
        };
    }


    function ShowCookie() {
        console.info('Never Show your Cookie to anybody!!!\nYour current cookie value for HttpRequest:\n' + cookie);
    }

    function UpFormat(val) {
        if (val === "Satoshi") {
            BetF = 1;
        } else {
            BetF = 100000000;
        }
    }

    function UpDeposit(type) {
        var params = "a=GetBalance&s=" + cookie + "&Currency=" + type;
        console.log(params);
        http.open("POST", "https://www.999dice.com/api/web.aspx", true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                ReqText = http.responseText;
                o = JSON.parse(ReqText);
                if (type === 'btc') {
                    BTCBalance = o.Balance;
                } else if (type === 'doge') {
                    DOGEBalance = o.Balance;
                } else if (type === 'ltc') {
                    LTCBalance = o.Balance;
                }
                AccountInfo();
                messageMe('Balance Update: ' + o.Balance + ' ' + type);
            };
        }
        http.send(params);
    }

    function getXDomainRequest() {
        var xdr = null;
        if (window.XDomainRequest) {
            xdr = new XDomainRequest();
        } else if (window.XMLHttpRequest) {
            xdr = new XMLHttpRequest();
        } else {
            alert("Votre navigateur ne gere pas l'AJAX cross-domain !");
        }
        return xdr;
    }

    function sendData() {
        var xdr = getXDomainRequest();
        xdr.onload = function() {
            alert(xdr.responseText);
        }
        xdr.open("GET", "https://www.999dice.com/api/web.aspx", true);
        xdr.send();
    }

    function NewConnect() {
        UserName = document.getElementById("LoginVar").value;
        Password = document.getElementById("PasswordVar").value;
        Topt = document.getElementById("2FAVar").value;
        var temp = "";
        if (Topt !== "") {
            temp += "&Topt=" + Topt;
        }
        var params = "a=Login&Key=bee18c0e3e9f4d15b525673e516cae06&Username=" + UserName + "&Password=" + Password + temp;
        var xdr = getXDomainRequest();
        xdr.onreadystatechange = function() {
            ReqText = xdr.responseText;
            o = JSON.parse(ReqText);
            if (o.LoginInvalid === 1) {
                messageMe("Wrong Login/Password");
                return;
            } else {
                messageMe("999dice Connection Statut: UP\nEnjoy the game ");
            }
            cookie = o.SessionCookie;
            AccountID = o.AccountId;

            BTCAddy = o.DepositAddress || null;
            BTCBalance = o.Balance;
            BTCBetCount = o.BetCount;
            BTCProfit = +o.BetPayOut + o.BetPayIn;
            if (o.BetCount === 0) {
                BTCWin100 = 0;
            } else {
                BTCWin100 = (o.BetWinCount / o.BetCount) * 100;
            }

            oDoge = o.Doge;
            DOGEAddy = oDoge.DepositAddress || null;
            DOGEBalance = oDoge.Balance;
            DOGEBetCount = oDoge.BetCount;
            DOGEProfit = +oDoge.BetPayOut + oDoge.BetPayIn;
            if (oDoge.BetCount === 0) {
                DOGEWin100 = 0;
            } else {
                DOGEWin100 = (oDoge.BetWinCount / oDoge.BetCount) * 100;
            }

            oLtc = o.LTC;
            LTCAddy = oLtc.DepositAddress || null;
            LTCBalance = oLtc.Balance;
            LTCBetCount = oLtc.BetCount;
            LTCProfit = +oLtc.BetPayOut + oLtc.BetPayIn;
            if (oLtc.BetCount === 0) {
                LTCWin100 = 0;
            } else {
                LTCWin100 = (oLtc.BetWinCount / oLtc.BetCount) * 100;
            }

            AccountInfo();
            IdVer();
        };
        xdr.open("POST", "https://www.999dice.com/api/web.aspx", true);
        xdr.send(params);
    }

    // Connection
    function Connect() {
        UserName = document.getElementById("LoginVar").value;
        Password = document.getElementById("PasswordVar").value;
        Topt = document.getElementById("2FAVar").value;
        var temp = "";
        if (Topt !== "") {
            temp += "&Topt=" + Topt;
        }

        var params = "a=Login&Key=bee18c0e3e9f4d15b525673e516cae06&Username=" + UserName + "&Password=" + Password + temp;

        http.open("POST", "https://www.999dice.com/api/web.aspx", true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                ReqText = http.responseText;
                o = JSON.parse(ReqText);
                if (o.LoginInvalid === 1) {
                    messageMe("Wrong Login/Password");
                    return;
                } else {
                    messageMe("999dice Connection Statut: UP\nEnjoy the game ");
                }
                cookie = o.SessionCookie;
                AccountID = o.AccountId;

                BTCAddy = o.DepositAddress || null;
                BTCBalance = o.Balance;
                BTCBetCount = o.BetCount;
                BTCProfit = +o.BetPayOut + o.BetPayIn;
                if (o.BetCount === 0) {
                    BTCWin100 = 0;
                } else {
                    BTCWin100 = (o.BetWinCount / o.BetCount) * 100;
                }

                oDoge = o.Doge;
                DOGEAddy = oDoge.DepositAddress || null;
                DOGEBalance = oDoge.Balance;
                DOGEBetCount = oDoge.BetCount;
                DOGEProfit = +oDoge.BetPayOut + oDoge.BetPayIn;
                if (oDoge.BetCount === 0) {
                    DOGEWin100 = 0;
                } else {
                    DOGEWin100 = (oDoge.BetWinCount / oDoge.BetCount) * 100;
                }

                oLtc = o.LTC;
                LTCAddy = oLtc.DepositAddress || null;
                LTCBalance = oLtc.Balance;
                LTCBetCount = oLtc.BetCount;
                LTCProfit = +oLtc.BetPayOut + oLtc.BetPayIn;
                if (oLtc.BetCount === 0) {
                    LTCWin100 = 0;
                } else {
                    LTCWin100 = (oLtc.BetWinCount / oLtc.BetCount) * 100;
                }

                AccountInfo();
                IdVer();
                if (newAc === 1) {
                    if (!!localStorage.getItem('Mail')) {
                        UpEmail();
                    }
                }
            }
        };
        http.send(params);
    }

    function AccountInfo() {
        document.getElementById('DivAccountName').innerHTML = UserName;
        document.getElementById('DivAccountId').innerHTML = AccountID || 0;

        document.getElementById('DivBtcAddy').innerHTML = BTCAddy;
        document.getElementById('DivBtcBalance').innerHTML = (BTCBalance / xC).toFixed(8) || '0.00000000';
        document.getElementById('DivBtcBetCount').innerHTML = BTCBetCount || 0;
        document.getElementById('DivBtcProfit').innerHTML = (BTCProfit / xC).toFixed(8) || '0.00000000';
        document.getElementById('DivBtcWin100').innerHTML = BTCWin100.toFixed(2) + '%' || 0;

        document.getElementById('DivDogeAddy').innerHTML = DOGEAddy;
        document.getElementById('DivDogeBalance').innerHTML = (DOGEBalance / xC).toFixed(8) || '0.00000000';
        document.getElementById('DivDogeBetCount').innerHTML = DOGEBetCount || 0;
        document.getElementById('DivDogeProfit').innerHTML = (DOGEProfit / xC).toFixed(8) || '0.00000000';
        document.getElementById('DivDogeWin100').innerHTML = DOGEWin100.toFixed(2) + '%' || 0;

        document.getElementById('DivLtcAddy').innerHTML = LTCAddy;
        document.getElementById('DivLtcBalance').innerHTML = (LTCBalance / xC).toFixed(8) || '0.00000000';
        document.getElementById('DivLtcBetCount').innerHTML = LTCBetCount || 0;
        document.getElementById('DivLtcProfit').innerHTML = (LTCProfit / xC).toFixed(8) || '0.00000000';
        document.getElementById('DivLtcWin100').innerHTML = LTCWin100.toFixed(2) + '%' || 0;
    }

    function LoadChoice() {
        logMe('Connected!!!', 'green');
        document.getElementById('connectDiv').style.display = 'none';
        document.getElementById('ConnectHelp').style.display = 'none';
        document.getElementById('HelpMask').style.display = 'none';
        document.getElementById('Choice').style.display = 'block';
        document.getElementById('ChoiceHelp').style.display = 'block';
        LoadSet('General');
    }


    function LoadMode() {
        document.getElementById('Choice').style.display = 'none';
        document.getElementById('SinglePlay').style.display = 'none';
        document.getElementById('AutoPlay').style.display = 'none';
        document.getElementById('SystemPlay').style.display = 'none';
        document.getElementById('MultiPlay').style.display = 'none';
        document.getElementById('SingleHelp').style.display = 'none';
        document.getElementById('AutoHelp').style.display = 'none';
        document.getElementById('SystemHelp').style.display = 'none';
        document.getElementById('MultiHelp').style.display = 'none';
        document.getElementById('HelpMask').style.display = 'none';
    }

    function LoadParams(c, d, e, f, g) {
        LoadStats();
        document.getElementById('ButtonStart').setAttribute('onClick', c);
        document.getElementById('BetOnceButton').setAttribute('onClick', d);
        document.getElementById('InjectButton').setAttribute('onClick', e);
        document.getElementById('SaveButton').setAttribute('onClick', f);
        document.getElementById('LoadButton').setAttribute('onClick', g);
        LoadSlot(SaveType);
        logMe(SaveType + ' Bet Ready!!!', 'green');
        CookieChoice(SaveType);
    }

    function LoadSingle() {
        SaveType = 'Single';
        //Chargement des pages
        LoadMode();
        document.getElementById('SinglePlay').style.display = 'block';
        document.getElementById('SingleHelp').style.display = 'block';
        //Chargement Params
        LoadParams('PauseStart();', 'NewPlaceBet(function(){});Pl=0;', 'VarUpdate();', "NewSave('Single');", "NewLoad('Single');");
        PlayType = 1;
    }

    function LoadAuto() {
        SaveType = 'Auto';
        LoadMode();
        document.getElementById('AutoPlay').style.display = 'block';
        document.getElementById('AutoHelp').style.display = 'block';
        LoadParams('PauseStart();', 'NewABPlaceBet(function(){});Pl=0;', 'ABVarUpdate();', "NewSave('Auto');", "NewLoad('Auto');");
        PlayType = 2;
    }

    function LoadSystem() {
        SaveType = 'System';
        LoadMode();
        document.getElementById('SystemPlay').style.display = 'block';
        document.getElementById('SystemHelp').style.display = 'block';
        LoadParams('PauseStart();', 'SysLabouchere(function(){});Pl=0;', 'SysInjector();', "NewSave('System');", "NewLoad('System');");
        PlayType = 3;
    }

    function LoadMulti() {
        document.getElementById('Choice').style.display = 'none';
        document.getElementById('SinglePlay').style.display = 'none';
        document.getElementById('AutoPlay').style.display = 'none';
        document.getElementById('SystemPlay').style.display = 'none';
        document.getElementById('MultiPlay').style.display = 'block';
        LoadStats();
    }

    function LoadSlot(type) {
        var El = document.getElementById('Slot');
        document.getElementById('Slot').innerHTML = '';
        var temp;
        if (type === 'Single') {
            temp = '<option value="Temp1">Temp1</option>\n<option value="Temp2">Temp2</option>\n<option value="Slot01">Slot01</option>\n<option value="Slot02">Slot02</option>\n<option value="Slot03">Slot03</option>\n<option value="Slot04">Slot04</option>\n<option value="Slot05">Slot05</option>\n<option value="Slot06">Slot06</option>\n<option value="Slot07">Slot07</option>\n<option value="Slot08">Slot08</option>\n<option value="Slot09">Slot09</option>\n<option value="Slot10">Slot10</option>\n<option value="S1">S1</option>';
        } else if (type === 'Auto') {
            temp = '<option value="Temp3">Temp3</option>\n<option value="Temp4">Temp4</option>\n<option value="Slot11">Slot11</option>\n<option value="Slot12">Slot12</option>\n<option value="Slot13">Slot13</option>\n<option value="Slot14">Slot14</option>\n<option value="Slot15">Slot15</option>\n<option value="Slot16">Slot16</option>\n<option value="Slot17">Slot17</option>\n<option value="Slot18">Slot18</option>\n<option value="Slot19">Slot19</option>\n<option value="Slot20">Slot20</option>\n<option value="A1">A1</option>\n<option value="A2">A2</option>';
        } else if (type === 'System') {
            temp = '<option value="Temp5">Temp5</option>\n<option value="Temp6">Temp6</option>\n<option value="Slot21">Slot21</option>\n<option value="Slot22">Slot22</option>\n<option value="Slot23">Slot23</option>\n<option value="Slot24">Slot24</option>\n<option value="Slot25">Slot25</option>\n<option value="Slot26">Slot26</option>\n<option value="Slot27">Slot27</option>\n<option value="Slot28">Slot28</option>\n<option value="Slot29">Slot29</option>\n<option value="Slot20">Slot20</option>';
        } else if (type === 'Multi') {
            messageMe("Nothing to charge for now");
            temp = '<option value="NoSlot">No</option>';
        }
        var AAA = document.getElementById('Slot').children;
        if (AAA.length === 0) {
            El.innerHTML = temp;
        } else {
            El.innerHTML = temp + '\n' + document.getElementById('Slot').innerHTML;
        }
        logMe(type + ' Slot list loaded', 'green');
    }

    function LoadStats() {
        document.getElementById('GenSet').style.display = "none";
        document.getElementById('Help').style.display = "none";
        document.getElementById('HelpMask').style.display = "none";
        document.getElementById('Tools').style.display = "none";
        document.getElementById('Stats').style.display = "inline-block";
        keyEnable = 1;
    }

    function LoadTools() {
        document.getElementById('GenSet').style.display = "none";
        document.getElementById('Help').style.display = "none";
        document.getElementById('HelpMask').style.display = "none";
        document.getElementById('Stats').style.display = "none";
        document.getElementById('Tools').style.display = "inline-block";
        keyEnable = 0;
    }

    function LoadSettings() {
        document.getElementById('Help').style.display = "none";
        document.getElementById('Stats').style.display = "none";
        document.getElementById('Tools').style.display = "none";
        document.getElementById('GenSet').style.display = "inline-block";
        keyEnable = 0;
    }

    function LoadHelp() {
        document.getElementById('GenSet').style.display = "none";
        document.getElementById('Stats').style.display = "none";
        document.getElementById('Tools').style.display = "none";
        document.getElementById('ChoiceHelp').style.display = "none";
        document.getElementById('Help').style.display = "inline-block";
        keyEnable = 1;
    }

    function Results(RType, RId, Sn, Hl, RSeed, RProfit) {
        var dad = document.getElementById('FullResults');
        var txt = '<span class="ResultsHead" style="width: 60px;">' + RType + '</span>\n<span id="rId2" class="ResultsHead" onclick="OpenId(' + RId + ');" style="width: 200px; text-decoration: underline">' + RId + '</span>\n<span class="ResultsHead" style="width: 80px;">' + Sn + '</span>\n<span class="ResultsHead" style="width: 30px;">' + Hl + '</span>\n<span class="ResultsHead" style="width: 80px;">' + RSeed + '</span>\n<span class="ResultsHead" style="width: 200px; border-right-style: solid;">' + RProfit + '</span>';
        CreateObjectBefore('div', 'RLine', '', '', dad, dad.children[0]);
        dad.children[0].innerHTML = txt;
        if (dad.children.length > 100) {
            document.getElementById('FullResults').lastChild.remove();
        }
    }

    function ResultColor(RColor) {
        document.getElementById('FullResults').children[0].children[0].style.color = RColor;
        document.getElementById('FullResults').children[0].children[1].style.color = RColor;
        document.getElementById('FullResults').children[0].children[2].style.color = RColor;
        document.getElementById('FullResults').children[0].children[3].style.color = RColor;
        document.getElementById('FullResults').children[0].children[4].style.color = RColor;
        document.getElementById('FullResults').children[0].children[5].style.color = RColor;
    }

    function OpenId(id) {
        if (window.location.href === "https://www.999dice.com/api/web.aspx") {
            var myBet = window.open("https://www.999dice.com/Bets/?b=" + id, "", "toolbar=yes, scrollbars=yes, resizable=no, bottom=100, left=500, width=700, height=400");
        } else {
            window.open("https://www.999dice.com/Bets/?b=" + id);
        }
    }

    function OpenVid(id) {
        if (window.location.href === 'https://drive.google.com/open?id=1_y5-6PHp03IcM06M8jwTreYCuqe3gJsL') {
            window.open('https://www.youtube.com/watch?v=' + id);
        } else {
            var myVid = window.open('http://www.youtube.com/embed/' + id + '?autoplay=1', '_blank', 'toolbar=no, scrollbars=no, resizable=no, bottom=100, left=500, width=944, height=740');
        }
    }

    function OpenVid2(id) {
        var myVid = window.open(id, '_blank', 'toolbar=no, scrollbars=no, resizable=no, bottom=100, left=500, width=750, height=576');
    }

    function logMe(txt, col) {
        var time = new Date();
        var Th = time.getHours();
        var Tm = time.getMinutes();
        var Ts = time.getSeconds();
        var el = document.getElementById('LogPanel');
        var temp = temp = '<a>' + BetNum + '|' + Th + ':' + Tm + ':' + Ts + '| ' + '<span id="rId1" onclick="OpenId(' + BetId + ')" style="width: 200px; text-decoration: underline;">' + BetId + '</span>' + '</a>';
        CreateObjectBefore('div', 'LogLabel', '', '', el, el.children[0]);
        el.children[0].innerHTML = txt;
        el.children[0].style.color = col;
        el.children[0].style.textAlign = "right";
        CreateObjectBefore('div', 'LogLabel', '', '', el, el.children[0]);
        el.children[0].innerHTML = temp;
        el.children[0].style.color = col;
        if (el.children.length > 5000) {
            el.lastChild.remove();
            el.lastChild.remove();
        }
    }

    function ShowMask(A) {
        var El = document.getElementById('HelpMask');
        if (!!El.className) {
            El.removeAttribute('class');
            clearTimeout();
        }
        El.style.display = 'block';
        El.style.top = A + 'px';
        El.setAttribute('class', 'MaskAnim');
        setTimeout(function() {
            El.removeAttribute('class');
        }, 1200);
    }

    function showHide(el1, el2, el3) {
        var temp, temp2;
        if (el3 === 'TextOnWin') {
            temp = 'IncreaseOnWin:';
            temp2 = 'ResetOnWin:';
        } else if (el3 === 'TextOnLosse') {
            temp = 'IncreaseOnLoss:';
            temp2 = 'ResetOnLoss:';
        }
        if (!el1.checked) {
            document.getElementById(el2).style.display = "block";
            document.getElementById(el3).innerHTML = temp;
        } else {
            document.getElementById(el2).style.display = "none";
            document.getElementById(el3).innerHTML = temp2;
        }
    }

    function showSwapO(type) {
        var temp = "";
        var el = document.getElementById('SwapOption');
        if (type === 'Repeat') {
            temp += '<span class="SingleText" style="width: 70px; top: 5px; left: -20px;">Win</span>';
            temp += '<input id="SwapRepeatW" class="SingleInput" type="text" value="0" style="width: 70px; top: 0px; left: 70px;">';
            temp += '<span class="SingleText" style="width: 70px; top: 5px; left: 160px;">Loss</span>';
            temp += '<input id="SwapRepeatL" class="SingleInput" type="text" value="0" style="width: 70px; top: 0px; left: 250px;">';
            el.innerHTML = temp;
            el.display = "block";
        } else if (type === 'Slide') {
            temp += '<span class="SingleText" style="top: 5px;">Dont work yet!!!</span>';
            el.innerHTML = temp;
            el.display = "block";
        } else if (type === 'Patern') {
            temp += '<input id="SwapPatern" class="SingleInput" type="text" value="0" style="width: 320px; top: 0px; left: 0px;">';
            el.innerHTML = temp;
            el.display = "block";
        } else if (type === 'StopWin') {
            temp += '<input id="StopWin" class="SingleInput" type="text" value="0" style="width: 320px; top: 0px; left: 0px;">';
            el.innerHTML = temp;
            el.display = "block";
        } else if (type === 'StopLoss') {
            temp += '<input id="StopWin" class="SingleInput" type="text" value="0" style="width: 320px; top: 0px; left: 0px;">';
            el.innerHTML = temp;
            el.display = "block";
        } else {

            el.innerHTML = temp;
            el.display = "none";
        }
    }

    function LoadExample(A) {
        if (A === 'S1') {
            localStorage.setItem('S1', "Mod78.smaller&2,4,8,16,32&1000000&78&0&3&2&1&0&0&1,2,3,15,150&0&0&100&1&100&DOGE");
            document.getElementById("Slot").value = 'S1';
            LoadSet('Single');
        } else if (A === 'A1') {
            localStorage.setItem('A1', "95.Example1&1&1000000&95&1&6&0&900&0&900&&&100000000&1&0&200&0&5&0&1&0&100&0&100&1&DOGE");
            document.getElementById("Slot").value = 'A1';
            LoadSet('Auto');
        } else if (A === 'A2') {
            localStorage.setItem('A2', "95.Example2&1,2,4,8,16,32,64,128,256,512,1024&100000&5&1&6&1&0&1&0&1&&&0&0&10&0&5&0&1&0&100&0&100&1&DOGE");
            document.getElementById("Slot").value = 'A2';
            LoadSet('Auto');
        }
    }

    function CookieChoice(type) {
        if (type === "Auto") {
            ABCookie = cookie;
            logMe("Auto Cookie Loaded", 'blue');
            HideMessage = 0;
        } else if (type === "System") {
            SysCookie = cookie;
            logMe("System Cookie Loaded", 'blue');
            HideMessage = 0;
        } else {
            SinCookie = cookie;
            logMe("Single Cookie Loaded", 'blue');
            HideMessage = 0;
        }
    }

    function CreateNewAccount() {
        var el = document.getElementById('PassVer');
        var el3 = document.getElementById('PassVerTxt');
        var el2 = document.getElementById('PasswordVar');
        if (Account === 0 && el.style.top === '75px') {
            if (el.value === el2.value) {
                NewAccount();
            }
        } else if (Account === 0 && el.style.top === '1075px') {
            el.style.top = '75px';
            el3.style.top = '145px';
        } else {
            messageMe("Nouvelle Tentative");
            logMe('New Try', 'blue');
            UserPass();
        }
    }

    // Vérif saisie vérifier
    function PassMe() {
        var el = document.getElementById('PassVer');
        var el2 = document.getElementById('PasswordVar');
        var el3 = document.getElementById('NewAccount');
        if (el.value === el2.value) {
            el3.style.color = 'green';
            messageMe('Password verification done!!!');
        } else {
            el3.style.color = 'firebrick';
            messageMe('Password is wrong, check it again!!!');
        }
    }

    // Création d'un nouveau compte
    function NewAccount() {
        var params = "a=CreateAccount&Key=bee18c0e3e9f4d15b525673e516cae06";

        http.open("POST", "https://www.999dice.com/api/web.aspx", true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                ReqText = http.responseText;
                o = JSON.parse(ReqText);
                cookie = o.AccountCookie;
                cookieS = o.SessionCookie;
                AccountID = o.AccountId;
                BTCAddy = o.DepositAddress;

                if (!!o.AccountCookie) {

                    document.getElementById("DivAccountId").innerHTML = AccountID || 0;

                    document.getElementById("DivBtcBalance").innerHTML = "0.00000000";
                    document.getElementById("DivBtcBetCount").innerHTML = 0;
                    document.getElementById("DivBtcProfit").innerHTML = "0.00000000";
                    document.getElementById("DivBtcWin100").innerHTML = 0;
                    document.getElementById("DivDogeBalance").innerHTML = "0.00000000";
                    document.getElementById("DivDogeBetCount").innerHTML = 0;
                    document.getElementById("DivDogeProfit").innerHTML = "0.00000000";
                    document.getElementById("DivDogeWin100").innerHTML = 0;
                    document.getElementById("DivLtcBalance").innerHTML = "0.00000000";
                    document.getElementById("DivLtcBetCount").innerHTML = 0;
                    document.getElementById("DivLtcProfit").innerHTML = "0.00000000";
                    document.getElementById("DivLtcWin100").innerHTML = 0;

                    logMe('New Account Done!!!', 'green');
                    Account = 1;
                    if (!localStorage.getItem('NewId')) {
                        localStorage.setItem('NewId', AccountID);
                    } else if (!!localStorage.getItem('NewId')) {
                        localStorage.setItem('NewId', localStorage.getItem('NewId') + ',' + AccountID);
                    }
                    return UserPass();
                } else {
                    messageMe("Failed" || 0);
                    logMe('Account Creation Failed!!!', 'red');
                    audioErr.play();
                }
            }
        };
        http.send(params);
    }

    // Create User & Password CORS
    function UserPass() {
        UserName = document.getElementById("LoginVar").value;
        Password = document.getElementById("PasswordVar").value;
        if (UserName === null || Password === null) {
            messageMe("Failed... Check It!!!");
            return;
        }
        var params = "a=CreateUser&s=" + cookieS + "&Username=" + UserName + "&Password=" + Password;

        http.open("POST", "https://www.999dice.com/api/web.aspx", true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                ReqText = http.responseText;
                g = JSON.parse(ReqText);
                if (g.AccountHasUser === 1) {
                    messageMe("User&Pass already Exist!!!\nPress Connect Then!!!");
                    document.getElementById("DivMessage").style.color = "red";
                    logMe('Account Password Set Failed!!!', 'red');
                    audioErr.play();
                }
                if (g.UsernameTaken === 1) {
                    messageMe("Name already Taken!!!\nChange it and retry!!!");
                    document.getElementById("DivMessage").style.color = "red";
                    logMe('Account Password Set Failed!!!', 'red');
                    audioErr.play();
                }
                if (g.success === 1) {
                    messageMe("User&Pass has been created!!!\nThanks a lot to support my work");
                    document.getElementById("DivMessage").style.color = "green";
                    logMe('Account Password Done!!!', 'green');
                    newAc = 1;
                    return Connect();
                }
            }
        };
        http.send(params);
    }

    // Get Deposit Addy
    function GetDepositAddy(type) {
        var params = "a=GetDepositAddress&s=" + cookie + "&Currency=" + type;
        http = new XMLHttpRequest();
        http.open("POST", "https://www.999dice.com/api/web.aspx", true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                ReqText = http.responseText;
                g = JSON.parse(ReqText);
                if (g.Address) {
                    if (type === "btc") {
                        document.getElementById("DivBtcAddy").innerHTML = g.Address || 0;
                    } else if (type === "doge") {
                        document.getElementById("DivDogeAddy").innerHTML = g.Address || 0;
                    } else if (type === "ltc") {
                        document.getElementById("DivLtcAddy").innerHTML = g.Address || 0;
                    }
                } else {
                    messageMe("Failed");
                }
            }
        };
        http.send(params);
    }

    // Manual Withdraw
    function Withdraw() {
        if (document.getElementById("WithdrawAmountVar").value !== "0") {
            WithdrawAmount = Number.parseInt(document.getElementById("WithdrawAmountVar").value, 10);
        } else if (document.getElementById("WithdrawAmountVar").value === 0) {
            WithdrawAmount = 0;
        }
        WithdrawAddy = document.getElementById("MWAddy").value;
        BetCoin = document.getElementById("WithdrawCurrencyVar").value;
        //		if (WithdrawAmount === 0){

        //		}
        if (!!WithdrawAddy && WithdrawAddy !== "Empty" && !!WithdrawAmount) {
            if (BetCoin === "btc" && WithdrawAmount < 16000 && WithdrawAmount !== 0) {
                messageMe("BTC Amount is too small. Minimum = 16000 Satoshi");
                HideMessage = 0;
                return;
            } else if (BetCoin === "doge" && WithdrawAmount < 200000000 && WithdrawAmount !== 0) {
                messageMe("DOGE Amount is too small.\nMinimum = 200000000");
                HideMessage = 0;
                return;
            } else if (BetCoin === "ltc" && WithdrawAmount < 100000 && WithdrawAmount !== 0) {
                messageMe("LTC Amount is too small.\nMinimum = 100000");
                HideMessage = 0;
                return;
            }
        } else {
            messageMe("You have to fill amount to withdraw and withdraw address");
            HideMessage = 0;
            return;
        }
        var params = "a=Withdraw&s=" + cookie + "&Amount=" + Math.round(WithdrawAmount) + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin;

        http.open("POST", "https://www.999dice.com/api/web.aspx", true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                ReqText = http.responseText;
                g = JSON.parse(ReqText);
                if (g.Pending) {
                    messageMe("Pending: " + g.Pending || 0);
                    HideMessage = 0;
                    logMe('Pending: ' + Math.round(WithdrawAmount), 'white');
                    WithdrawAmount = 0;
                    WithdrawAddy = null;
                } else {
                    messageMe("Error: Too Small or Insufficient funds" || 0);
                    HideMessage = 0;
                }
            }
        };
        http.send(params);
    }

    // Auto Withdraw
    function AutoWith() {
        AWparams = "a=Withdraw&s=" + cookie + "&Amount=" + Math.round(WithdrawAmount) + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin;
        var AWHttp = new XMLHttpRequest();
        AWHttp.open("POST", "https://www.999dice.com/api/web.aspx", false);
        AWHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        AWHttp.onreadystatechange = function() {
            if (AWHttp.readyState === 4 && AWHttp.status === 200) {
                ReqText = AWHttp.responseText;
                g = JSON.parse(ReqText);
                if (g.Pending) {
                    messageMe("Withdraw: " + g.Pending + " to " + WithdrawAddy || 0);
                    logMe('Auto WithDraw:' + (WithdrawAmount / xC).toFixed(8) + ' ' + BetCoin, 'green');
                    HideMessage = 0;
                    AWCount++;
                    AWGlobal = AWGlobal - (-Math.round(WithdrawAmount));
                    document.getElementById("DivAWProfit").innerHTML = (AWProfit / xC).toFixed(8);
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    WithdrawAmount = 0;
                    BetStatut = 0;
                    AWProfit = 0;
                    if (PlayType === 1) {
                        PlayType = 0;
                        return StartPlay();
                    } else if (PlayType === 2) {
                        PlayType = 0;
                        return ABPlay();
                    } else if (PlayType === 3) {
                        PlayType = 0;
                        return SysStart();
                    }
                } else {
                    messageMe("Error: Too Small or Insufficient funds\nNew try soon in 1 second" || 0);
                    audioErr.play();
                    HideMessage = 0;
                    if (WithdrawAmount > AWAmount) {
                        if (PlayType === 1) {
                            PlayType = 0;
                            return setTimeout(StartPlay, 1000);
                        } else if (PlayType === 2) {
                            PlayType = 0;
                            return setTimeout(ABPlay, 1000);
                        } else if (PlayType === 3) {
                            PlayType = 0;
                            return setTimeout(SysStart, 1000);
                        }
                    }
                }
            }
        };
        HideMessage = 0;
        AWHttp.send(AWparams);
    }

    // Mise en place des variables avant de miser
    function VarUpdate() {
        if (!!localStorage.TempSave) {
            localStorage.removeItem("TempSave");
        }
        NewSave('SingleTemp');
        BetSize = (document.getElementById("BetSizeVar").value).split(',').map(Number);
        if (!BetSize[i]) {
            NewLoad('TempSave');
            swal({
                title: 'Error Alert: New BetSize Mistake',
                text: '<span style="color: red; text-align: center;">You are trying to inject a shorter length of Custom Bets Size list. But the next index of bet size in the list doesnt exist.<br><br>Failed to inject settings!</span>',
                html: true
            });
            messageMe('wrong time for injection!!!\nTry again asap!');
        }
        if (document.getElementById("BetXVar").value.search(/|/i) === 0) {
            x = Number((document.getElementById("BetXVar").value).split('|')[0]);
            BetX = (document.getElementById("BetXVar").value).split('|')[1].split(',').map(Number);
        } else {
            x = 1;
            BetX = (document.getElementById("BetXVar").value).split(',').map(Number);
        }
        if (!BetX[j]) {
            NewLoad('TempSave');
            swal({
                title: 'Error Alert: New Multiplier List Mistake',
                text: '<span style="color: red; text-align: center;">You are trying to inject a shorter length Multiplier list. But the next index of Multiplier in the list doesnt exist.<br><br>Failed to inject settings! Bot Settings broke</span>',
                html: true
            });
            messageMe('Maybe wrong time for injection!!!\nTry again When multi\nor bet size are smaller!');
        }
        if (BetX[0] === 0 && MultiSwitch && BetX.length === 1) {
            messageMe("MultiSwich Activated but Multiplicator list is empty!!!");
            if (Pl === 1) {
                NewLoad('TempSave');
            }
            return;
        }
        //if (BetSize[0] === 0 && BetSize.length === 1) {
        //messageMe("BetSize is null ...");
        //return;
        //}
        UpFormat(document.getElementById('BetFormat').value);
        Odd = Number.parseFloat(document.getElementById("OddVar").value);
        if (isNaN(Odd)) {
            messageMe("% win is null, 5% to 95% ...");
            NewLoad('TempSave');
            return;
        }
        if (Odd < 5) {
            document.getElementById("OddVar").value = 5;
            messageMe("Chance Minimum 5% win");
        } else if (Odd > 95) {
            document.getElementById("OddVar").value = 95;
            messageMe("Chance Max 95% win");
        }
        // % win range 0 - 999999
        LowMin = 0;
        HighMax = 999999;
        LowMax = Math.round(((Odd / 100) * 1000000) - 1);
        HighMin = Number(HighMax - LowMax);
        MidMin = LowMin + Math.round((HighMax - LowMax) / 2);
        MidMax = MidMin + LowMax;

        // Minimum Bet Size
        if (Odd <= 49.95) {
            BetMin = 1;
        } else {
            BetMin = Math.floor(100 / (99.9 - Odd));
        }

        HighLow = document.getElementById("HighLowVar").value;
        if (HighLow === "Low") {
            HighLow = 0;
        } else if (HighLow === "High") {
            HighLow = 1;
        }

        Change = document.getElementById("ChangeVar").value;

        RepeatWin = parseInt(document.getElementById("RepeatWinVar").value, 10);
        if (RepeatWin <= 1) {
            RepeatWin = 1;
            document.getElementById("RepeatWinVar").value = RepeatWin;
        }

        RepeatLosse = parseInt(document.getElementById("RepeatLosseVar").value, 10);

        if (RepeatLosse <= 1) {
            RepeatLosse = 1;
            document.getElementById("RepeatLosseVar").value = RepeatLosse;
        }

        // Check Box
        FinalBetStop = document.getElementById("FinalBetStopVar").checked
        AW100 = document.getElementById("AW100").value;
        MultiSwitch = document.getElementById("MultiSwitchVar").checked;

        T2C = Number(parseFloat(document.getElementById("T2CVar").value));
        if (isNaN(T2C) && MultiSwitch) {
            messageMe("MultiSwitch Activated but T2C is null");
            NewLoad('TempSave');
            return;
        }

        BetPat = (document.getElementById("BetPatVar").value).split(',').map(Number);
        if (BetPat.length != BetSize.length && Change === 'Patern') {
            messageMe("High/Low Patern length doesnt feet Bet Size length!!!");
            NewLoad('TempSave');
            return;
        }

        BetWin = (document.getElementById("BetWinVar").value).split(',').map(Number);
        if (BetWin.length != BetSize.length && Change === 'Patern') {
            messageMe("%win Patern length doesnt feet Bet Size length!!!");
            NewLoad('TempSave');
            return;
        }
        if (Crypto !== document.getElementById("CryptoVar").value) {
            Profit = 0;
            ProfitGlobal = 0;
            Wagered = 0;
        }
        Crypto = document.getElementById("CryptoVar").value;
        if (Crypto === "BTC") {
            Coin = "Btc";
            BetCoin = "btc";
        } else if (Crypto === "DOGE") {
            Coin = "Doge";
            BetCoin = "doge";
        } else if (Crypto === "LTC") {
            Coin = "Ltc";
            BetCoin = "ltc";
        } else {
            messageMe("Which Crypto to play");
            NewLoad('TempSave');
            return;
        }

        // Vérification BetSize
        if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin && BetSize[0] > 0) {
            messageMe("First Bet Size is too small. Minimum value = " + BetMin);
            NewLoad('TempSave');
            return;
        }

        // Max Bet Losses
        var BetSizeSum = (((BetSize.slice(0, (BetSize.length))).reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        })));
        var BetXSum = (((BetX.slice(0, (BetX.length))).reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        })));
        MaxBetLosse = BetSizeSum * x * RepeatLosse;
        if (MultiSwitch) {
            MaxBetLosse = MaxBetLosse * BetXSum;
        }
        document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
        if (document.getElementById("ButtonStart").innerHTML == "Start") {
            document.getElementById("ButtonStart").style.backgroundColor = "Green";
        }
        messageMe("Settings Injected!!!");
        HideMessage = 0;
        Inject = 1;
        ////i = j = 0;
        if (!!localStorage.TempSave) {
            localStorage.removeItem("TempSave");
        }
    }

    // Auto Bet Var injector
    function ABVarUpdate() {
        NewSave('AutoTemp');
        BetSize = (document.getElementById("ABBetSize").value).split(',').map(Number);
        if (!BetSize[i]) {
            NewLoad('TempSave');
            swal({
                title: 'Error Alert: New BetSize Mistake',
                text: '<span style="color: red; text-align: center;">You are trying to inject a shorter length of Custom Bets Size list. But the next index of bet size in the list doesnt exist.<br><br>Failed to inject settings!</span>',
                html: true
            });
            messageMe('wrong time for injection!!!\nTry again asap!');
        }
        if (document.getElementById("ABBetX").value.search(/|/i) === 0) {
            x = Number((document.getElementById("ABBetX").value).split('|')[0]);
            BetX = (document.getElementById("ABBetX").value).split('|')[1].split(',').map(Number);
        } else {
            x = 1;
            BetX = (document.getElementById("ABBetX").value).split(',').map(Number);
        }
        if (!BetX[j]) {
            NewLoad('TempSave');
            swal({
                title: 'Error Alert: New Multiplier List Mistake',
                text: '<span style="color: red; text-align: center;">You are trying to inject a shorter length Multiplier list. But the next index of Multiplier in the list doesnt exist.<br><br>Failed to inject settings! Bot Settings broke</span>',
                html: true
            });
        }
        if (BetX[0] === 0 && MultiSwitch && BetX.length === 1) {
            messageMe("MultiSwich Activated but Multiplicator list is empty!!!");
            NewLoad('TempSave');
            return;
        }
        if (BetX.length === 0 || BetX[0] === 0) {
            BetX[0] = 1;
        }
        if (BetSize[0] === 0 && BetSize.length === 1) {
            messageMe("BetSize is null ...");
            return;
        }
        UpFormat(document.getElementById('ABBetFormat').value);
        Odd = Number.parseFloat(document.getElementById("ABOdd").value);
        if (isNaN(Odd)) {
            messageMe("% win is null, 5% to 95% ...");
            return;
        } else if (Odd < 5) {
            document.getElementById("ABOdd").value = 5;
            messageMe("Chance Minimum 5% win");
        } else if (Odd > 95) {
            document.getElementById("ABOdd").value = 95;
            messageMe("Chance Max 95% win");
        }
        // % win range 0 - 999999
        LowMin = 0;
        HighMax = 999999;
        LowMax = Math.round(((Odd / 100) * 1000000) - 1);
        HighMin = Number(HighMax - LowMax);
        MidMin = LowMin + Math.round((HighMax - LowMax) / 2);
        MidMax = MidMin + LowMax;

        // Minimum Bet Size
        if (Odd <= 49.95) {
            BetMin = 1;
        } else {
            BetMin = Math.floor(100 / (99.9 - Odd));
        }
        //
        HighLow = document.getElementById("ABHighLow").value;
        if (HighLow === "Low") {
            HighLow = 0;
        } else if (HighLow === "High") {
            HighLow = 1;
        } else if (HighLow === "Midle") {
            HighLow = 2;
        } else if (HighLow === "Random") {
            HighLow = 3;
        }

        // Change
        Change = document.getElementById("ABChange").value;
        var temp = document.getElementById("SwapRepeatW");
        if (!!temp) {
            SwapRepeatW = temp.value;
            SwapRepeatL = document.getElementById("SwapRepeatL").value;
        }
        temp = document.getElementById("SwapPatern");
        if (!!temp) {
            SwapPatern = temp.value;
        }

        R2bbCheckWin = document.getElementById("R2bbCheckWin").checked;
        if (!R2bbCheckWin) {
            R2bbWin = document.getElementById("R2bbWin").value;
        }
        R2bbCheckLosse = document.getElementById("R2bbCheckLosse").checked;
        if (!R2bbCheckLosse) {
            R2bbLoss = document.getElementById("R2bbLoss").value;
        }
        MaxPayIn = document.getElementById("MaxPayIn").value * x;
        if (MaxPayIn === "") {
            MaxPayIn = 0;
        }
        ResetBB = document.getElementById("Reset2BB").checked;
        StopAfter = document.getElementById("StopAfter").checked;
        MultiMax = document.getElementById("MultiMax").checked;

        StopMaxBalance = Number(document.getElementById("StopMaxBalance").value);
        StopMinBalance = Number(document.getElementById("StopMinBalance").value);
        MultiStop = document.getElementById("MultiStop").checked;

        // Check Box
        FinalBetStop = document.getElementById("ABFinalBetStop").checked;

        ABAW100 = document.getElementById("ABAW100").value;

        MultiSwitch = document.getElementById("ABMultiSwitch").checked;

        T2C = Number(parseFloat(document.getElementById("ABL2C").value));
        if (isNaN(T2C) && MultiSwitch) {
            messageMe("MultiSwitch Activated but T2C is null");
            return;
        }
        ReplayProfit = document.getElementById("ReplayProfit").checked;
        // Crypto Choice
        Crypto = document.getElementById("ABCrypto").value;
        if (Crypto != document.getElementById("ABCrypto").value) {
            StartingBalance = 0;
        }
        if (Crypto === "BTC") {
            Coin = "Btc";
            BetCoin = "btc";
            if (StartingBalance === 0) {
                StartingBalance = BTCBalance;
            }
        } else if (Crypto === "DOGE") {
            Coin = "Doge";
            BetCoin = "doge";
            if (StartingBalance === 0) {
                StartingBalance = DOGEBalance;
            }
        } else if (Crypto === "LTC") {
            Coin = "Ltc";
            BetCoin = "ltc";
            if (StartingBalance === 0) {
                StartingBalance = LTCBalance;
            }
        } else {
            messageMe("Which Crypto to play");
            return;
        }

        //
        Round = parseInt(document.getElementById("ABRoundVar").value, 10);
        if (Round < 1 || isNaN(Round)) {
            messageMe('Number of Bets is incorrect!!!\nPlease fill NumBets range 1 - 200');
        }

        // Vérification BetSize
        if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin && BetSize[0] > 0) {
            messageMe("First Bet Size is too small. Minimum value = " + BetMin);
            return;
        }

        var R2bb = 1;
        if (R2bbLoss >= R2bbWin && !R2bbCheckLosse) {
            R2bb = R2bbLoss;
        } else if (!R2bbCheckWin) {
            R2bb = R2bbWin;
        }
        var BB = BetSize.reduce(function(pv, cv) {
            return pv + cv;
        }, 0);
        if (!!MultiSwitch) {
            BB *= BetX.reduce(function(pv, cv) {
                return pv + cv;
            }, 0)
        }
        BB *= x;
        var Stop = function() {
            if (MaxPayIn === 0 || MaxPayIn === '') {
                return 0;
            }
            return MaxPayIn * BB;
        }
        document.getElementById('GenBB').value = BB;
        document.getElementById('GenIncrease').value = R2bb;
        document.getElementById('GenStreak').value = Round;
        document.getElementById('GenStop').value = Stop();
        MaxBetLosse = BetCalc(BB, R2bb, Round, Stop(), 'none', 'y');
        document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);

        messageMe("Settings Injected!!!");
        HideMessage = 0;
        Inject = 1;
        //i = j = 0;
        if (!!localStorage.TempSave) {
            localStorage.removeItem("TempSave");
        }
    }

    // TODO: Inject System Variable
    function SysInjector() {
        BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
        console.log('Injector');
        //if (BetSize[0] === 0) {
        //  messageMe("BetSize is null ...");
        //    return;
        //}
        UpFormat(document.getElementById('SysBetFormat').value);
        Odd = Number.parseFloat(document.getElementById("SysOddVar").value);
        if (isNaN(Odd)) {
            messageMe("% win is null, 5% to 95% ...");
            NewLoad('TempSave');
            return;
        } else if (Odd < 5) {
            document.getElementById("SysOddVar").value = 5;
            messageMe("Chance Minimum 5% win");
        } else if (Odd > 95) {
            document.getElementById("SysOddVar").value = 95;
            messageMe("Chance Max 95% win");
        }
        // % win range 0 - 999999
        LowMin = 0;
        HighMax = 999999;
        LowMax = Math.round(((Odd / 100) * 1000000) - 1);
        HighMin = Number(HighMax - LowMax);
        MidMin = LowMin + Math.round((HighMax - LowMax) / 2);
        MidMax = MidMin + LowMax;

        // Minimum Bet Size
        if (Odd <= 49.95) {
            BetMin = 1;
        } else {
            BetMin = Math.floor(100 / (99.9 - Odd));
        }
        //
        HighLow = document.getElementById("SysHighLowVar").value;
        if (HighLow === "Low") {
            HighLow = 0;
        } else if (HighLow === "High") {
            HighLow = 1;
        }

        // Change
        Change = document.getElementById("SysChangeVar").value;

        SysStopWinAmount = document.getElementById("SysStopWinAmount").value;
        if (document.getElementById("SysStopWinAmount") < 1) {
            SysStopWin = 0;
        } else {
            SysStopWin = 1;
        }
        SysStopLosseAmount = document.getElementById("SysStopLosseAmount").value;
        if (document.getElementById("SysStopLosseAmount") < 1) {
            SysStopLosse = 0;
        } else {
            SysStopLosse = 1;
        }

        SysAW100 = document.getElementById("SysAW100").value;

        SysLabSwitch = document.getElementById("SysLabInvert").checked;

        T2C = Number(parseFloat(document.getElementById("SysL2CVar").value));
        if (isNaN(T2C) && MultiSwitch) {
            messageMe("MultiSwitch Activated but T2C is null");
            NewLoad('TempSave');
            return;
        }
        if (document.getElementById("SysBetXVar").value.search(/|/i) === 0) {
            x = Number((document.getElementById("SysBetXVar").value).split('|')[0]);
            BetX = (document.getElementById("SysBetXVar").value).split('|')[1].split(',').map(Number);
        } else {
            x = 1;
            BetX = (document.getElementById("SysBetXVar").value).split(',').map(Number);
        }
        if (BetX[0] === 0 && MultiSwitch && BetX.length === 1) {
            messageMe("MultiSwich Activated but Multiplicator list is empty!!!");
            NewLoad('TempSave');
            return;
        }
        if (BetX.length > 1 && BetX[0] > 1) {
            MultiSwitch = false;
        } else {
            MultiSwitch = true;
        }

        /*SysChoice = document.getElementById("SysChoice").value;
        if (SysChoice === "Labouchere") {
            SysChoice = 1;
            console.log("Labouchere Not Working Yet!!!");
        } else if (SysChoice === "Fibonacci") {
            SysChoice = 2;
            console.log("Fibonacci Not Working Yet!!!");
        } else if (SysChoice === "Dalembert") {
            SysChoice = 3;
            console.log("Dalembert Not Working Yet!!!");
        }*/

        SysChoice = 1;

        // Crypto Choice
        Crypto = document.getElementById("SysCrypto").value;
        if (Crypto === "BTC") {
            Coin = "Btc";
            BetCoin = "btc";
        } else if (Crypto === "DOGE") {
            Coin = "Doge";
            BetCoin = "doge";
        } else if (Crypto === "LTC") {
            Coin = "Ltc";
            BetCoin = "ltc";
        } else {
            messageMe("Which Crypto to play");
            NewLoad('TempSave');
            return;
        }


        // Vérification BetSize
        if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin && BetSize[0] > 0) {
            messageMe("First Bet Size is too small. Minimum value = " + BetMin);
            NewLoad('TempSave');
            return;
        }

        var BetSizeSum = (((BetSize.slice(0, (BetSize.length))).reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        })));
        var BetXSum = (((BetX.slice(0, (BetX.length))).reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        })));
        MaxBetLosse = BetSizeSum * x;
        if (MultiSwitch) {
            MaxBetLosse = MaxBetLosse * BetXSum;
        }
        document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
        console.log(BetSize);
        messageMe("Settings Injected!!! Ho ho ho!!!\nEnjoy The Game And Good Fucking Luck");
        HideMessage = 0;
        Inject = 1;
        //i = j = 0;
    }

    // System Start
    function SysStart() {
        if (SP === 0) {
            document.getElementById("ButtonStartSys").innerHTML = "Pause";
            document.getElementById("ButtonStartSys").style.backgroundColor = "red";
            SP = 1;
        } else {
            document.getElementById("ButtonStartSys").innerHTML = "Start";
            document.getElementById("ButtonStartSys").style.backgroundColor = "green";
            SP = 0;
            BetStatut = 2;
            Pl = 0;
        }
        if (SysChoice === 1) {
            SysStartLab();
        }
    }

    function SysLabouchere(callback) {
        PlayType = 3;
        if (SysStopLosse === 1 && ((SysStopLosseAmount * BetX[j]) * -1) >= SysTempProfit) {
            BreakCount++;
            document.getElementById("DivBreakCount").innerHTML = BreakCount;
            //BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
            console.log('Number 1');
            audioBreak.play();
            document.getElementById("DivLastBreak").innerHTML = 'Last: ' + BetNum;
            if (!!MultiSwitch) {
                j++;
                if (j == 1) {
                    Losse2Cover = TempBalance * (T2C / 100);
                    TempBalance = 0;
                    Profit = 0;
                }
                if (j == BetX.length) {
                    messageMe("Max BetSize and Max Multiplicator Lost!!!");
                    HideMessage = 0;
                    BigBreak++;
                    document.getElementById("DivBigBreak").innerHTML = BigBreak;
                    TempBalance = 0;
                    Losse2Cover = 0;
                    Profit = 0;
                    AWProfit = 0;
                    //if (FinalBetStop) {
                    //    j = 0;
                    //    audioStop.play();
                    //    return;
                    //}
                    audioLosse.play();
                    j = 0;
                }
            }
            SysTempProfit = 0;
        }

        //document.getElementById("DivBetSize").innerHTML = BetSize;
        document.getElementById("DivBetLength").innerHTML = (SysTempProfit / xC).toFixed(8) + " | L = " + BetSize.length + '<br>' + BetSize;

        var BetSizeSum = (((BetSize.slice(0, (BetSize.length))).reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        })));
        var BetXSum = (((BetX.slice(0, (BetX.length))).reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        })));
        MaxBetLosse = BetSizeSum * x;

        if (MultiSwitch) {
            MaxBetLosse = MaxBetLosse * BetXSum;
        }
        document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);

        if (Change === 'Random') {
            HighLow = Math.round(Math.random());
        } else if (Change === 'Same' && HighLow === 0) {
            HighLow = 0;
        } else if (Change === 'Same' && HighLow === 1) {
            HighLow = 1;
        }
        if (Change === 'SantaRandom') {
            if (i !== 0) {
                if (HighLow === 0) {
                    Santa = Santa - (-0.15);
                    HighLow = Math.round(Math.random() - (-Santa));
                } else {
                    Santa = Santa - 0.15;
                    HighLow = Math.round(Math.random() - (-Santa));
                }
                if (Santa >= 0.45) {
                    Santa = 0.49;
                } else if (Santa <= -0.45) {
                    Santa = -0.49;
                }
            } else {
                HighLow = Math.round(Math.random());
            }
        }

        if (HighLow === 0) {
            Low = LowMin;
            High = LowMax;
        } else if (HighLow === 1) {
            Low = HighMin;
            High = HighMax;
        }

        if (i === BetSize.length) {
            i = 0;
        }
        if (BetX[0] === 0) {
            BetX[0] = 1;
        }
        Bets = Math.round(((BetSize[0] - (-BetSize[BetSize.length - 1])) * x) / BetF);
        if (MultiSwitch) {
            Bets = Math.round(Bets * BetX[j]);
            //if (XMulti === 1) {}
        }

        document.getElementById("DivBetX").innerHTML = BetX[j];

        if (SeedCheck === 1) {
            SeedRandom();
        }

        var params = "a=PlaceBet&s=" + SysCookie + "&PayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&ProtocolVersion=2";
        console.log(params);
        console.log('j: ' + j);

        httpSys.open("POST", "https://www.999dice.com/api/web.aspx", true);
        httpSys.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        httpSys.onreadystatechange = function() {
            if (httpSys.readyState === 4 && httpSys.status === 200) {
                ReqText = httpSys.responseText;
                o = JSON.parse(ReqText);
                if (o.error) {
                    messageMe("999dice: " + o.error);
                    audioErr.play();
                    logMe('Error', 'red');
                    return;
                } else if (o.ChanceTooHigh) {
                    messageMe("999dice: Chance Too High!!!");
                    audioErr.play();
                    return;
                } else if (o.ChanceTooLow) {
                    messageMe("999dice: Chance Too Low!!!");
                    audioErr.play();
                    return;
                } else if (o.InsufficientFunds) {
                    messageMe("999dice: Insuficient Funds!!!");
                    audioErr.play();
                    return;
                } else if (o.NoPossibleProfit) {
                    messageMe("999dice: No Possible Profit!!!");
                    audioErr.play();
                    return;
                } else if (o.MaxPayoutExceeded) {
                    messageMe("999dice: Max Payout Exceeded!!!");
                    audioErr.play();
                    return;
                } else {
                    BetNum++;
                    document.getElementById("DivBetNum").innerHTML = BetNum;

                    BetId = o.BetId;
                    PayOut = o.PayOut;
                    Secret = o.Secret;
                    StartingBalance = o.StartingBalance;
                    ServerSeed = o.ServerSeed;
                    Profit = o.PayOut - Bets;
                    ProfitGlobal = ProfitGlobal - (-(o.PayOut - Bets));
                    SecretAverage = SecretAverage - (-Secret);
                    if (Secret < 500000) {
                        SecretCount--;
                    } else {
                        SecretCount++;
                    }
                    Results('Sys', BetId, Secret, HighLow, BetsSeed, (Profit / xC).toFixed(8));
                    //Affichage = "Sys | " + BetId + " | " + Secret + " | " + BetsSeed + " | " + HighLow + " | " + (Profit / xC).toFixed(8);

                    if (HighLow === 0) {
                        document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | Low";
                    } else {
                        document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | High";
                    }
                    //document.getElementById("DivLast2").innerHTML = (Number(StartingBalance) / xC).toFixed(8);
                    var p = (Number(ProfitGlobal) / xC).toFixed(8);
                    if (p > Number(AWMax)) {
                        AWMax = p;
                    }
                    if (AutoWithdraw === 1 && p >= Number(AWMax)) {
                        AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (SysAW100 / 100)));
                        document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                        document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (SysAW100 / 100)) / xC).toFixed(8);
                        WithdrawAmount = Math.round(AWProfit * (SysAW100 / 100));
                        if (WithdrawAmount > AWAmount) {
                            BetStatut = 3;
                            PlayType = 3;
                        }
                    }
                    document.getElementById("DivLast3").innerHTML = p + ' | ' + AWMax;
                    document.title = p + ' Labouchere - ' + botVer;

                    document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(1);
                    document.getElementById("DivSecretCount").innerHTML = SecretCount;

                    SysTempProfit = SysTempProfit - (-Profit);
                    document.getElementById("DivBetLength").innerHTML = (SysTempProfit / xC).toFixed(8) + " | L = " + BetSize.length + '<br>' + BetSize;
                    TempBalance = TempBalance - (-Profit);

                    if (TempBalance >= 0) {
                        TempBalance = 0;
                    }
                    document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
                    StatsColorUpdate();
                    console.log('PayOut: ' + o.PayOut);
                    if (o.PayOut === 0) {
                        LosseNum++;
                        LosseCount++;
                        WinCount = 0;

                        //document.getElementById("DivAffichage").style.color = "red";
                        ResultColor("red");
                        document.getElementById("DivBetLost").innerHTML = LosseNum;

                        if (LosseCount > StreakLosses) {
                            StreakLosses = LosseCount;
                            document.getElementById("DivStreakLosses").innerHTML = StreakLosses;
                        }

                        if ((Change === 'ChangeAfterLoss' || Change === 'AlmostSwap') && HighLow === 0) {
                            HighLow = 1;
                        } else if ((Change === 'ChangeAfterLoss' || Change === 'AlmostSwap') && HighLow === 1) {
                            HighLow = 0;
                        }

                        if (!!SysLabSwitch) {
                            BetSize.splice(0, 1);
                            BetSize.splice(BetSize.length - 1, 1);
                            console.log(BetSize);
                            if (BetSize.length === 0) {
                                BreakCount++;
                                messageMe("Last BetSize Lost!!!");
                                HideMessage = 0;
                                document.getElementById("DivBreakCount").innerHTML = BreakCount;
                                document.getElementById("DivLastBreak").innerHTML = 'Last: ' + BetNum;
                                audioBreak.play();
                                BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                                console.log('Number 2');
                                if (!!MultiSwitch) {
                                    j++;
                                    if (j === 1) {
                                        Losse2Cover = TempBalance * (T2C / 100);
                                        TempBalance = 0;
                                        Profit = 0;
                                    }
                                    if (j === BetX.length) {
                                        messageMe("Max BetSize and Max Multiplicator Lost!!!\nBad Luck... :(");
                                        HideMessage = 0;
                                        BigBreak++;
                                        document.getElementById("DivBigBreak").innerHTML = BigBreak;
                                        Profit = 0;
                                        TempBalance = 0;
                                        Losse2Cover = 0;
                                        AWProfit = 0;
                                        SysTempProfit = 0;
                                        // FinalBetStop
                                        //if (!!FinalBetStop) {
                                        //  j = 0;
                                        //    audioStop.play();
                                        //    return;
                                        //}
                                        audioLosse.play();
                                        j = 0;
                                    }
                                }
                            }
                        } else {
                            BetSize.splice(BetSize.length, 0, (BetSize[0] - (-BetSize[BetSize.length - 1])));
                            //BetSize.push(Bets/BetX[j]);
                        }
                        if (BetSize.length === 0) {
                            BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                            console.log('Number 3');
                            SysTempProfit = 0;
                        }
                        callback();

                    } else {

                        WinNum++;
                        WinCount++;
                        LosseCount = 0;
                        //document.getElementById("DivAffichage").style.color = "green";
                        ResultColor("green");
                        document.getElementById("DivBetWin").innerHTML = WinNum;

                        if (!!SysLabSwitch) {
                            if (SysStopWin === 1 && (SysStopWinAmount * BetX[j]) <= SysTempProfit) {
                                BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                                console.log('Number 4');
                                if (j === 0) {
                                    audioCover.play();
                                }
                                SysTempProfit = 0;
                                if (SWin === 1) {
                                    SWin = 0;
                                    BackStart();
                                    clearInterval(test);
                                }

                            } else {
                                BetSize.splice(BetSize.length, 0, (BetSize[0] - (-BetSize[BetSize.length - 1])));
                                //BetSize.push(Bets / BetX[j]);
                            }
                        } else {
                            if (SysStopWin === 1 && (SysStopWinAmount * BetX[j]) <= SysTempProfit) {
                                BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                                console.log('Number 5');
                                if (j === 0) {
                                    audioCover.play();
                                }
                                SysTempProfit = 0;
                                if (SWin === 1) {
                                    BackStart();
                                    SWin = 0;
                                    clearInterval(test);
                                }
                            } else {

                                BetSize.splice(0, 1);
                                BetSize.splice(BetSize.length - 1, 1);

                                if (BetSize.length === 0) {
                                    BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                                    console.log('Number 6');
                                    if (j === 0) {
                                        audioCover.play();
                                    }
                                    SysTempProfit = 0;
                                    if (SWin === 1) {
                                        SWin = 0;
                                        BackStart();
                                        clearInterval(test);
                                    }
                                }
                            }

                        }
                        console.log(BetSize + ' | ' + BetSize.length);
                        if (WinCount > StreakWins) {
                            StreakWins = WinCount;
                            document.getElementById("DivStreakWins").innerHTML = StreakWins;
                        }
                        if ((Change === 'ChangeAfterWin' || Change === 'AlmostSwap') && HighLow === 0) {
                            HighLow = 1;
                        } else if ((Change === 'ChangeAfterWin' || Change === 'AlmostSwap') && HighLow === 1) {
                            HighLow = 0;
                        }
                        callback();
                    }
                    document.getElementById("DivOdd").innerHTML = ((Number(WinNum) / Number(BetNum)) * 100).toFixed(3);
                    if (MultiSwitch) {
                        if (j > 0) {
                            Losse2Cover = Losse2Cover - (-Profit);
                        }
                        if (Losse2Cover >= 0 && j !== 0) {
                            j = i = 0;
                            TempBalance = Losse2Cover = 0;
                            messageMe("Loss Covered!!! Ho ho ho!!!");
                            audioCover.play();
                        }
                        document.getElementById("DivLosse2Cover").innerHTML = (Losse2Cover / xC).toFixed(8);
                    }
                    if (HideMessage >= 5) {
                        HideMessage = 0;
                        messageMe("Bot is running Wild and Nude!!! Yeah Baby!!!");
                    } else {
                        HideMessage++;
                    }
                    callback();
                }
            }
        };
        httpSys.send(params);
    }

    // Set settings
    function SetGenSet() {
        BetsSeed = document.getElementById("SeedVar").value;
        if (BetsSeed === "") {
            BetsSeed = 0;
        }

        if (!document.getElementById("SeedRandomCheck").checked) {
            SeedCheck = 0;
        } else {
            SeedCheck = 1;
        }
        audioBreak.volume = (document.getElementById("BreakVolumeId").value) / 100;
        audioLosse.volume = (document.getElementById("LosseVolumeId").value) / 100;
        audioCover.volume = (document.getElementById("CoverVolumeId").value) / 100;
        audioStop.volume = (document.getElementById("StopVolumeId").value) / 100;
        audioErr.volume = (document.getElementById("ErrVolumeId").value) / 100;

        var el = document.getElementById('AWBtcAmount');
        if (el.value.search(/object/i) != -1 || el.value < 16000) {
            el.value = 16000;
        }
        el = document.getElementById('AWDogeAmount');
        if (el.value.search(/object/i) != -1 || el.value < 200000000) {
            el.value = 200000000;
        }
        el = document.getElementById('AWLtcAmount');
        if (el.value.search(/object/i) != -1 || el.value < 100000) {
            el.value = 100000;
        }

        SetAW('BTC');
        SetAW('DOGE');
        SetAW('LTC');

        if (Crypto === 'BTC') {
            SetAW('BTC');
        } else if (Crypto === 'DOGE') {
            SetAW('DOGE');
        } else if (Crypto === 'LTC') {
            SetAW('LTC');
        }

        if (localStorage.getItem('ServerOn') === 'true') {
            document.getElementById('ServerOn').checked = true;
        } else {
            document.getElementById('ServerOn').checked = false;
        }
    }

    function SetAW(type) {
        if (type === "BTC") {
            if (PlayType === 1) {
                AWBtcAddy = document.getElementById("AutoWithdrawVar").value;
            } else if (PlayType === 2) {
                AWBtcAddy = document.getElementById("ABAutoWithdrawVar").value;
            } else {
                AWBtcAddy = document.getElementById("SysAutoWithdrawVar").value;
            }
            AWBtcAmount = Number(document.getElementById("AWBtcAmount").value);
            WithdrawAddy = AWBtcAddy;
            AWAmount = AWBtcAmount;
        } else if (type === "DOGE") {
            if (PlayType === 1) {
                AWDogeAddy = document.getElementById("AutoWithdrawVar").value;
            } else if (PlayType === 2) {
                AWDogeAddy = document.getElementById("ABAutoWithdrawVar").value;
            } else {
                AWDogeAddy = document.getElementById("SysAutoWithdrawVar").value;
            }
            AWDogeAmount = Number(document.getElementById("AWDogeAmount").value);
            WithdrawAddy = AWDogeAddy;
            AWAmount = AWDogeAmount;
        } else if (type === "LTC") {
            if (PlayType === 1) {
                AWLtcAddy = document.getElementById("AutoWithdrawVar").value;
            } else if (PlayType === 2) {
                AWLtcAddy = document.getElementById("ABAutoWithdrawVar").value;
            } else {
                AWLtcAddy = document.getElementById("SysAutoWithdrawVar").value;
            }
            AWLtcAmount = Number(document.getElementById("AWLtcAmount").value);
            WithdrawAddy = AWLtcAddy;
            AWAmount = AWLtcAmount;
        }
        if (!!WithdrawAddy && WithdrawAddy !== "Empty") {
            AutoWithdraw = 1;
        } else {
            AutoWithdraw = 0;
        }
    }

    // Stats Colors Update

    function ColorFixed() {
        if (document.getElementById("DivBetNum").style.color != "gold") {
            document.getElementById("DivBetNum").style.color = "gold";
            document.getElementById("DivBetWin").style.color = "green";
            document.getElementById("DivBetLost").style.color = "red";
            document.getElementById("DivStreakWins").style.color = "green";
            document.getElementById("DivStreakLosses").style.color = "red";
        }
    }

    function StatsColorUpdate() {
        if (Losse2Cover < 0) {
            document.getElementById("DivLosse2Cover").style.color = "red";
        } else {
            document.getElementById("DivLosse2Cover").style.color = "green";
        }

        if (TempBalance < 0) {
            document.getElementById("DivTempBalance").style.color = "red";
        } else {
            document.getElementById("DivTempBalance").style.color = "green";
        }

        if (ProfitGlobal < 0) {
            document.getElementById("DivLast3").style.color = "red";
            //document.getElementById("DivLast2").style.color = "red";
        } else {
            document.getElementById("DivLast3").style.color = "green";
            //document.getElementById("DivLast2").style.color = "green";
        }

        if (SecretCount < 0) {
            document.getElementById("DivSecretCount").style.color = "cyan";
        } else if (SecretCount > 0) {
            document.getElementById("DivSecretCount").style.color = "tomato";
        } else {
            document.getElementById("DivSecretCount").style.color = "green";
        }

        if ((SecretAverage / BetNum) < 499999) {
            document.getElementById("DivSecretAverage").style.color = "Cyan";
        } else {
            document.getElementById("DivSecretAverage").style.color = "tomato";
        }

        if (((Number(WinNum) / Number(BetNum)) * 100).toFixed(3) < Odd) {
            document.getElementById("DivOdd").style.color = "red";
        } else {
            document.getElementById("DivOdd").style.color = "green";
        }

        if (SysTempProfit < 0) {
            document.getElementById("DivBetLength").style.color = "red";
        } else {
            document.getElementById("DivBetLength").style.color = "green";
        }

        if (j > 0) {
            document.getElementById("DivBetX").style.color = "red";
        } else {
            document.getElementById("DivBetX").style.color = "white";
        }

    }

    // Seed Random
    function SeedRandom() {
        BetsSeed = Math.round(Math.random() * 1000000) - 1;
    }

    // handle keyDown
    function handleKeyDown(event) {
        var Cara = event.which || event.keyCode;
        if (!AccountID && Cara === 13) {
            Connect();
        }
        if (!!AccountID && SaveType === 'General') {
            if (Cara === 65) {
                LoadAuto();
            } else if (Cara === 83) {
                LoadSingle();
            }
        }
        if (keyEnable === 1 && !!SaveType) {
            if (Cara === 13) {
                var InjectB = document.getElementById('InjectButton').getAttribute('onclick').split('(')[0];
                window[InjectB]();
            }
            if (Cara === 72) {
                Hbet()
            }
            if (Cara === 74) {
                Mbet();
            }
            if (Cara === 75) {
                Rbet();
            }
            if (Cara === 76) {
                Lbet();
            }
        }
        if (Cara === 32 && Inject === 1) {
            PauseStart();
        }
    }

    // Button Stop Win
    function StopAfterWin() {
        SWin = 1;
    }

    // Button Start/Pause
    function PauseStart() {
        if (SP === 0) {
            document.getElementById("ButtonStart").innerHTML = "Pause";
            document.getElementById("ButtonStart").style.backgroundColor = "green";
            SP = 1;
            BetStatut = 0;
            if (SaveType === 'Single') {
                StartPlay();
            } else if (SaveType === 'Auto') {
                ABPlay();
            } else if (SaveType === 'System') {
                SysStartLab();
            }
        } else {
            document.getElementById("ButtonStart").innerHTML = "Start";
            document.getElementById("ButtonStart").style.backgroundColor = "red";
            SP = 0;
            BetStatut = 2;
            Pl = 0;
            clearInterval(test);
        }
    }

    // Button Return to base bet
    function Back2BB() {
        i = j = 0;
        Losse2Cover = TempBalance = 0;
    }

    //Force Low Bet
    function Lbet() {
        ForceBet = 0;
        if (Pl === 0 && SaveType === 'Single') {
            NewPlaceBet(function() {});
            Pl = 0;
        } else if (Pl === 0 && SaveType === 'Auto') {
            NewABPlaceBet(function() {});
            Pl = 0;
        }
    }

    // Force High Bet
    function Hbet() {
        ForceBet = 1;
        if (Pl === 0 && SaveType === 'Single') {
            NewPlaceBet(function() {});
            Pl = 0;
        } else if (Pl === 0 && SaveType === 'Auto') {
            NewABPlaceBet(function() {});
            Pl = 0;
        }
    }

    // Force Midle Bet
    function Mbet() {
        ForceBet = 3;
        if (Pl === 0 && SaveType === 'Single') {
            NewPlaceBet(function() {});
            Pl = 0;
        } else if (Pl === 0 && SaveType === 'Auto') {
            NewABPlaceBet(function() {});
            Pl = 0;
        }
    }

    // Force Random Bet
    function Rbet() {
        ForceBet = 4;
        if (Pl === 0 && SaveType === 'Single') {
            NewPlaceBet(function() {});
            Pl = 0;
        } else if (Pl === 0 && SaveType === 'Auto') {
            NewABPlaceBet(function() {});
            Pl = 0;
        }
    }

    //AB Force Low Bet
    function ABLowBet() {
        ForceBet = 0;
        if (Pl === 0) {
            NewABPlaceBet();
        }
    }

    // AB Force High Bet
    function ABHighBet() {
        ForceBet = 1;
        if (Pl === 0) {
            NewABPlaceBet();
        }
    }

    // AB Force Random Bet
    function ABRandomBet() {
        ForceBet = 4;
        if (Pl === 0) {
            NewABPlaceBet();
        }
    }

    function BackStart() {
        document.getElementById("ButtonStart").innerHTML = "Start";
        document.getElementById("ButtonStart").style.backgroundColor = "red";
        SP = 0;
        BetStatut = 2;
        Pl = 0;
    }

    function CBal() {
        if (!!Crypto.match(/btc/i)) {
            return (Number(document.getElementById('DivBtcBalance').innerHTML) * xC).toFixed(0);
        }
        if (!!Crypto.match(/doge/i)) {
            return (Number(document.getElementById('DivDogeBalance').innerHTML) * xC).toFixed(0);
        }
        if (!!Crypto.match(/ltc/i)) {
            return (Number(document.getElementById('DivLtcBalance').innerHTML) * xC).toFixed(0);
        }
    }

    function debugSwitch(c) {
        if (c) {
            debug = true;
        } else {
            debug = false;
        }
    }

    function debugMe(t, p) {
        var el = document.getElementById('DebugData');
        if (t === 'params') {
            if (debug) {
                var deb = function() {
                    return p.slice(p.indexOf("PayIn") + 5, p.length);
                };
                deb = deb();
            }
            el.value = BetNum + 1 + ":PayIn=" + deb;
        } else if (t === 'var') {
            if (PlayType === 1) {
                NewSave('SingleTemp');
            } else if (PlayType === 2) {
                NewSave('AutoTemp');
            } else if (PlayType === 3) {
                NewSave('SystemTemp');
            }
            el.value += '\n\n------------------------\n\nTempSave current settings:\n\n' +
                localStorage.getItem('TempSave') + '\n\n------------------------';
            localStorage.removeItem('TempSave');

            function localKey() {
                var txt = "";
                for (var k in localStorage) {
                    txt += k + '||';
                }
                return txt;
            };
            var lK = localKey();
            el.value += '\n\n||Available key: \n' + lK + '\n\nGenSlot:\n' + localStorage.getItem('GenSlot') + '\n\n------------------------';
        }
    }

    // Mise une fois / ///////////////////////////////////////////////////////////////////////////////////////////
    function NewPlaceBet(callback) {
        Pl = 1;
        VerifId = BetId;

        if (RePlay === 0) {

            if (Change === 'Patern') {
                if (BetPat[i] !== 0 && BetPat[i] !== 1) {
                    HighLow = Math.round(Math.random());
                } else {
                    HighLow = BetPat[i];
                }
                Odd = BetWin[i];
                LowMin = 0;
                HighMax = 999999;
                LowMax = Math.round(((Odd / 100) * 1000000) - 1);
                HighMin = Number(HighMax - LowMax);
            } else if (Change === 'Random') {
                HighLow = Math.round(Math.random());
            } else if (Change === 'Same' && HighLow === 0) {
                HighLow = 0;
            } else if (Change === 'Same' && HighLow === 1) {
                HighLow = 1;
            }
            if (Change === 'SantaRandom') {
                if (i !== 0) {
                    if (HighLow === 0) {
                        Santa = Santa - (-0.15);
                        HighLow = Math.round(Math.random() - (-Santa));
                    } else {
                        Santa = Santa - 0.15;
                        HighLow = Math.round(Math.random() - (-Santa));
                    }
                    if (Santa >= 0.45) {
                        Santa = 0.49;
                    } else if (Santa <= -0.45) {
                        Santa = -0.49;
                    }
                } else {
                    HighLow = Math.round(Math.random());
                }
            }
            if (ForceBet === 0) {
                HighLow = 0;
                ForceBet = -1;
                messageMe("Low Bet by User");
            } else if (ForceBet === 1) {
                HighLow = 1;
                ForceBet = -1;
                messageMe("High Bet by User");
            } else if (ForceBet === 4) {
                HighLow = Math.round(Math.random());
                ForceBet = -1;
                messageMe("Random Bet by User");
            }
            if (HighLow === 0) {
                Low = LowMin;
                High = LowMax;
            } else if (HighLow === 1) {
                Low = HighMin;
                High = HighMax;
            }
            if (ForceBet === 3) {
                Low = MidMin;
                High = MidMax;
                HighLow = 3;
                ForceBet = -1;
            }
            if (i === BetSize.length) {
                i = 0;
                if (FinalBetStop) {
                    messageMe("Bot has been stopped!!! After losing last bet!!!");
                    HideMessage = 0;
                    return;
                }
            }
            if (BetX[0] === 0) {
                BetX[0] = 1;
            }
            Bets = Math.round((BetSize[i] * (x * BetX[j])) / BetF);
            if (BetX[j] > MaxMulti) {
                MaxMulti = BetX[j];
            }
            document.getElementById("DivBetX").innerHTML = BetX[j] + '/' + MaxMulti;

            if (SeedCheck === 1) {
                SeedRandom();
            }
        } else {
            RePlay = 0;
        }

        //var httpSingle = new XMLHttpRequest();

        var params = "a=PlaceBet&s=" + cookie + "&PayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&ProtocolVersion=2";
        debugMe('params', params);
        httpSingle.open("POST", "https://www.999dice.com/api/web.aspx", true);
        httpSingle.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        httpSingle.onreadystatechange = function() {
            if (httpSingle.readyState === 4 && httpSingle.status === 200) {
                clearInterval(test);
                ReqText = httpSingle.responseText;
                o = JSON.parse(ReqText);
                if (!!o.error) {
                    ErrNaN++;
                    messageMe("999dice: " + o.error);
                    logMe('Error', 'red');
                    clearInterval(test);
                    test = setInterval(VerifMe, 180000);
                    audioErr.play();
                    return;
                } else if (!!o.ChanceTooHigh) {
                    messageMe("999dice: Chance Too High!!!");
                    BackStart();
                    return StopPlay();
                } else if (!!o.ChanceTooLow) {
                    messageMe("999dice: Chance Too Low!!!");
                    audioErr.play();
                    BackStart();
                    return StopPlay();
                } else if (!!o.InsufficientFunds) {
                    messageMe("999dice: Insuficient Funds!!!");
                    audioErr.play();
                    BackStart();
                    return StopPlay();
                } else if (!!o.NoPossibleProfit) {
                    messageMe("999dice: No Possible Profit!!!");
                    audioErr.play();
                    BackStart();
                    return StopPlay();
                } else if (!!o.MaxPayoutExceeded) {
                    messageMe("999dice: Max Payout Exceeded!!!");
                    audioErr.play();
                    BackStart();
                    return StopPlay();
                } else if (!!o.TooFast) {
                    ErrTooFast++;
                    RePlay = 0;
                    clearInterval(test);
                    messageMe("999dice: Too Fast Error!!!\nWait 10s for a replay");
                    test = setInterval(VerifMe, 10000);
                    audioErr.play();
                    return;
                } else {
                    BetNum++;
                    document.getElementById("DivBetNum").innerHTML = BetNum;
                    Wagered = Wagered + Bets;
                    document.getElementById("DivWagered").innerHTML = (Wagered / xC).toFixed(8) + ' | ' + (Wagered / 200000000000).toFixed(8);

                    BetId = o.BetId;
                    DataP = o.BetId;
                    PayOut = o.PayOut;
                    Secret = o.Secret;
                    StartingBalance = o.StartingBalance;
                    ServerSeed = o.ServerSeed;
                    Profit = Number(o.PayOut) - Number(Bets);
                    ProfitGlobal = Number(ProfitGlobal) - (-(Number(o.PayOut) - Number(Bets)));
                    SecretAverage = SecretAverage - (-Secret);
                    if (Secret < 500000) {
                        SecretCount--;
                    } else {
                        SecretCount++;
                    }
                    AUpdate(Crypto);
                    Results('Sin', BetId, Secret, HighLow, BetsSeed, (Profit / xC).toFixed(8));
                    //Affichage = "Sin | " + BetId + " | " + Secret + " | " + BetsSeed + " | " + HighLow + " | " + (Profit / xC).toFixed(8);

                    if (HighLow === 0) {
                        document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | Low ";
                    } else {
                        document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | High";
                    }
                    //document.getElementById("DivLast2").innerHTML = ((Number(StartingBalance) + Number(Profit)) / xC).toFixed(8);
                    var p = (Number(ProfitGlobal) / xC).toFixed(8);
                    if (p > Number(AWMax)) {
                        AWMax = p;
                    }
                    if (AutoWithdraw === 1 && p >= Number(AWMax)) {
                        AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (AW100 / 100)));
                        document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                        document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (AW100 / 100)) / xC).toFixed(8);
                        WithdrawAmount = Math.round(AWProfit * (AW100 / 100));
                        if (WithdrawAmount > AWAmount) {
                            BetStatut = 3;
                            PlayType = 1;
                        }
                    }
                    document.getElementById("DivLast3").innerHTML = p + ' | ' + AWMax;
                    document.title = p + ' Single - ' + botVer;

                    document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(0);
                    document.getElementById("DivSecretCount").innerHTML = SecretCount;

                    // Seed à ajouter au visuel où pai!!!
                    //document.getElementById("DivServerSeed").innerHTML = ServerSeed || "";

                    TempBalance = Number(TempBalance) - (-Number(Profit));

                    if (TempBalance >= 0) {
                        TempBalance = 0;
                    }
                    document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
                    StatsColorUpdate();
                    if (o.PayOut === 0) {
                        i++;
                        LosseNum++;
                        LosseCount++;
                        WinCount = 0;
                        document.getElementById("DivStreakLosses").innerHTML = LosseCount + '/' + StreakLosses;
                        document.getElementById("DivStreakLosses").style.color = "red";
                        RepeatW = 1;
                        ResultColor('red');
                        //document.getElementById("DivAffichage").style.color = "red";
                        document.getElementById("DivBetLost").innerHTML = LosseNum;
                        if (LosseCount > StreakLosses) {
                            StreakLosses = LosseCount;
                            document.getElementById("DivStreakLosses").innerHTML = StreakLosses;
                        }
                        if (RepeatLosse > 1 && RepeatL < RepeatLosse) {
                            i = i - 1;
                            RepeatL++;
                            if (i < 0) {
                                i = 0;
                            }
                        } else if (RepeatLosse > 1 && RepeatL === RepeatLosse) {
                            RepeatL = 1;
                        }
                        if (i === BetSize.length) {
                            BreakCount++;
                            messageMe("Last BetSize Lost!!!");
                            HideMessage = 0;
                            document.getElementById("DivBreakCount").innerHTML = BreakCount;
                            document.getElementById("DivLastBreak").innerHTML = 'Last: ' + BetNum;
                            logMe('Dooooh: ' + (TempBalance / xC).toFixed(8), 'red');
                            if (FinalBetStop && !MultiSwitch) {
                                j = 0;
                                i = 0;
                                BackStart();
                                audioStop.play();
                                return;
                            }
                            audioBreak.play();
                            if (MultiSwitch) {
                                j++;
                                //if (j === 1) {
                                //  Losse2Cover = Number(TempBalance) * (Number(T2C) / 100);
                                //} else if (j > 1) {
                                //  Losse2Cover += Number(TempBalance) * (Number(T2C) / 100) - Profit;
                                //}
                                if (ProfitGlobal >= 0) {
                                    Losse2Cover -= Math.round(((AWMax * xC) - ProfitGlobal) * (Number(T2C) / 100));
                                } else {
                                    Losse2Cover = Math.round((ProfitGlobal - (AWMax * xC)) * (Number(T2C) / 100));
                                }
                                TempBalance = 0;
                                Profit = 0;
                                if (j === BetX.length) {
                                    messageMe("Max BetSize and Max Multiplicator Lost!!!");
                                    HideMessage = 0;
                                    logMe('Craaap: ' + (TempBalance / xC).toFixed(8), 'red');
                                    BigBreak++;
                                    document.getElementById("DivBigBreak").innerHTML = BigBreak;
                                    document.getElementById("DivLastBigBreak").innerHTML = 'Last: ' + BetNum;
                                    TempBalance = 0;
                                    Losse2Cover = 0;
                                    Profit = 0;
                                    AWProfit = 0;
                                    if (FinalBetStop) {
                                        j = 0;
                                        i = 0;
                                        BackStart();
                                        audioStop.play();
                                        return;
                                    }
                                    audioLosse.play();
                                    j = 0;
                                }
                            }
                            callback();
                        }
                        if ((Change === 'ChangeAfterLoss' || Change === 'AlmostSwap') && HighLow === 0) {
                            HighLow = 1;
                        } else if ((Change === 'ChangeAfterLoss' || Change === 'AlmostSwap') && HighLow === 1) {
                            HighLow = 0;
                        }
                    } else {
                        if (RepeatWin <= 1) {
                            i = 0;
                        }
                        WinNum++;
                        WinCount++;
                        LosseCount = 0;
                        if (WinCount > StreakWins) {
                            StreakWins = WinCount;

                        }
                        document.getElementById("DivStreakWins").innerHTML = WinCount + '/' + StreakWins;
                        document.getElementById("DivStreakWins").style.color = "green";

                        RepeatL = 1;
                        ResultColor('green');
                        document.getElementById("DivBetWin").innerHTML = WinNum;
                        if (WinCount > StreakWins) {
                            StreakWins = WinCount;
                            document.getElementById("DivStreakWins").innerHTML = StreakWins;
                        }
                        if ((Change === 'ChangeAfterWin' || Change === 'AlmostSwap') && HighLow === 0) {
                            HighLow = 1;
                        } else if ((Change === 'ChangeAfterWin' || Change === 'AlmostSwap') && HighLow === 1) {
                            HighLow = 0;
                        }
                        if (RepeatWin > 1 && RepeatW < RepeatWin) {
                            RepeatW++;
                        } else if (RepeatWin > 1 && RepeatW === RepeatWin) {
                            RepeatW = 1;
                            if (i > 0) {
                                i = 0;
                            }
                        }
                    }
                    if (SWin === 1 && TempBalance >= 0 && ProfitGlobal >= 0 && Losse2Cover >= 0) {
                        SWin = 0;
                        BackStart();
                        clearInterval(test);
                    }
                    if (MultiSwitch) {
                        if (j > 0) {
                            Losse2Cover = Losse2Cover - (-Profit);
                        }
                        if (Losse2Cover >= 0 && j !== 0) {
                            j = i = 0;
                            TempBalance = Losse2Cover = 0;
                            HideMessage = 0;
                            logMe('Covered!!!', 'green');
                            messageMe("Loss Covered!!! Ho ho ho!!!");
                            audioCover.play();
                        }
                        document.getElementById("DivLosse2Cover").innerHTML = (Losse2Cover / xC).toFixed(8);
                    }
                    if (HideMessage >= 7) {
                        HideMessage = 0;
                        messageMe("Bot is running Wild and Nude!!!\nYeah Baby!!! Enjoy the game and be Naughty");
                    } else {
                        HideMessage++;
                    }
                    document.getElementById("DivOdd").innerHTML = ((Number(WinNum) / Number(BetNum)) * 100).toFixed(3);
                    callback();
                }
            }
            if (isNaN(Profit) || isNaN(TempBalance)) {
                BetStatut = 1;
                messageMe("NaN Issue has crashed the bot\nThis bot has been coded with my little finger");
            }
        };
        StartMe();
        httpSingle.send(params);
    }
    // Automatic Betting Bet ///////////////////////////////////////////////////////////////////////////
    function NewABPlaceBet(callback) {
        var tempX = 1;
        Pl = 1;
        VerifId = BetId;
        document.getElementById("DivOdd").innerHTML = ((Number(WinNum) / Number(BetNum)) * 100).toFixed(3);
        if (RePlay === 0) {
            if (Change === "Random") {
                HighLow = Math.round(Math.random());
            } else if (Change === "Same" && HighLow === 0) {
                HighLow = 0;
            } else if (Change === "Same" && HighLow === 1) {
                HighLow = 1;
            }
            if (Change === "SantaRandom") {
                if (i !== 0) {
                    if (HighLow === 0) {
                        Santa = Santa - (-0.12);
                        HighLow = Math.round(Math.random() - (-Santa));
                    } else {
                        Santa = Santa - 0.12;
                        HighLow = Math.round(Math.random() - (-Santa));
                    }
                    if (Santa >= 0.45) {
                        Santa = 0.37;
                    } else if (Santa <= -0.45) {
                        Santa = -0.37;
                    }
                } else {
                    HighLow = Math.round(Math.random());
                }
            }
            if (ForceBet === 0) {
                HighLow = 0;
                ForceBet = -1;
                messageMe("Low Bet by User");
            } else if (ForceBet === 1) {
                HighLow = 1;
                ForceBet = -1;
                messageMe("High Bet by User");
            } else if (ForceBet === 4) {
                HighLow = Math.round(Math.random());
                ForceBet = -1;
                messageMe("Random Bet by User");
            }
            if (HighLow === 0) {
                Low = LowMin;
                High = LowMax;
            } else if (HighLow === 1) {
                Low = HighMin;
                High = HighMax;
            } else if (HighLow === 2) {
                Low = MidMin;
                High = MidMax;
            } else if (HighLow === 3) {
                Low = Math.round(Math.random() * Math.round((999999 - LowMax) / 2));
                High = Low + LowMax;
            }
            if (ForceBet === 3) {
                Low = MidMin;
                High = MidMax;
                HighLow = 3;
                ForceBet = -1;
            }
            if (i === BetSize.length) {
                i = 0;
                if (FinalBetStop) {
                    messageMe("Bot has been stopped!!! After losing last bet!!!");
                    HideMessage = 0;
                    return;
                }
            }

            if (BetX.length === 0 || BetX[0] === 0) {
                BetX[0] = 1;
            }

            Bets = Math.round((BetSize[i] * x) / BetF);

            if (MultiSwitch) {
                Bets = Math.round(Bets * BetX[j]);
            }
            if (BetX[j] > MaxMulti) {
                MaxMulti = BetX[j];
            }
            document.getElementById("DivBetX").innerHTML = BetX[j] + '/' + MaxMulti;

            if (SeedCheck === 1) {
                SeedRandom();
            }
            option = "";
            if (R2bbCheckLosse && R2bbCheckWin) { // FIXME: Rewrite code
                option += "";
            } else if (!R2bbCheckLosse && !R2bbCheckWin) {
                option += "&ResetOnWin=" + 0 + "&ResetOnLose=" + 0 + "&IncreaseOnWinPercent=" + (R2bbWin / 100) + "&IncreaseOnLosePercent=" + (R2bbLoss / 100);
            } else if (R2bbCheckLosse && !R2bbCheckWin) {
                option += "&ResetOnWin=" + 0 + "&IncreaseOnWinPercent=" + (R2bbWin / 100);
            } else if (R2bbCheckWin && !R2bbCheckLosse) {
                option += "&ResetOnLose=" + 0 + "&IncreaseOnLosePercent=" + (R2bbLoss / 100);
            }
            if (MaxPayIn > 0) {
                if (MultiSwitch && MultiMax) {
                    tempX = BetX[j];
                }
                tempX *= MaxPayIn;
                option += "&MaxPayIn=" + Math.round(tempX);
                tempX = 1;
            }
            if (!ResetBB) {
                option += "&ResetOnLoseMaxBet=" + 0;
            } else {
                option += "&ResetOnLoseMaxBet=" + 1;
            }
            if (!StopAfter) {
                option += "&StopOnLoseMaxBet=" + 0;
            } else {
                option += "&StopOnLoseMaxBet=" + 1;
            }
            if (StopMaxBalance !== 0 && StopMaxBalance > 0) {
                if (MultiSwitch && MultiStop) {
                    tempX = BetX[j];
                }
                if (StartingBalance === 0) {
                    tempX *= StopMaxBlance;
                    option += "&StopMaxBalance=" + tempX;
                } else {
                    tempX *= StopMaxBalance;
                    option += "&StopMaxBalance=" + Math.round(Number(CBal()) + tempX);
                }
                tempX = 1;
            }
            if (StopMinBalance !== 0 && StopMinBalance > 0) {
                if (MultiSwitch && MultiStop) {
                    tempX = BetX[j];
                }
                if (StartingBalance === 0) {
                    tempX *= StopMinBalance;
                    option += "&StopMinBalance=" + tempX;
                } else {
                    tempX *= StopMinBalance;
                    option += "&StopMinBalance=" + Math.round(Number(CBal()) + tempX);
                }
                tempX = 1;
            }
        } else {
            RePlay = 0;
        }
        var params = "a=PlaceAutomatedBets&s=" + ABCookie + "&BasePayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&MaxBets=" + Round + option + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&Compact=1&ProtocolVersion=2";
        debugMe('params', params);
        httpAuto.open("POST", "https://www.999dice.com/api/web.aspx", true);
        httpAuto.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpAuto.onreadystatechange = function() {
            if (httpAuto.readyState === 4 && httpAuto.status === 200) {
                clearInterval(test);
                ReqText = httpAuto.responseText;
                o = JSON.parse(ReqText);
                if (!!o.error) {
                    ErrNaN++;
                    messageMe("999dice: " + o.error);
                    clearInterval(test);
                    logMe('Error', 'red');
                    audioErr.play();
                    test = setInterval(VerifMe, 180000);
                    return;
                } else if (!!o.ChanceTooHigh) {
                    BackStart();
                    messageMe("999dice: Chance Too High!!!");
                    audioErr.play();
                    return;
                } else if (!!o.ChanceTooLow) {
                    BackStart();
                    messageMe("999dice: Chance Too Low!!!");
                    audioErr.play();
                    return;
                } else if (!!o.InsufficientFunds) {
                    BackStart();
                    messageMe("999dice: Insuficient Funds!!!");
                    audioErr.play();
                    return;
                } else if (!!o.NoPossibleProfit) {
                    BackStart();
                    messageMe("999dice: No Possible Profit!!!");
                    audioErr.play();
                    return;
                } else if (!!o.MaxPayoutExceeded) {
                    BackStart();
                    messageMe("999dice: Max Payout Exceeded!!!");
                    audioErr.play();
                    return;
                } else if (!!o.TooFast) {
                    ErrTooFast++;
                    RePlay = 0;
                    //TooFast = 1;
                    clearInterval(test);
                    messageMe("999dice: Too Fast Error!!!\nWait 10s for a replay");
                    test = setInterval(VerifMe, 10000);
                    logMe('Too Many Request', 'red');
                    audioErr.play();
                    return;
                } else {
                    BetNum++;
                    TrueBetNum += o.BetCount;
                    document.getElementById("DivBetNum").innerHTML = TrueBetNum + '|' + BetNum;
                    Wagered = Wagered - o.PayIn;
                    document.getElementById("DivWagered").innerHTML = (Wagered / xC).toFixed(8) + ' | ' + (Wagered / 200000000000).toFixed(8);
                    BetId = o.BetId;
                    DataP = o.BetId;
                    PayOut = o.PayOut;
                    // Secret = o.Secret;
                    StartingBalance = (o.StartingBalance);
                    ServerSeed = o.Seed;
                    Profit = o.PayOut - (-o.PayIn);
                    ProfitGlobal = ProfitGlobal - (-Profit);
                    AUpdate(Crypto);
                    Results('Auto', BetId, o.BetCount + '/' + Round, HighLow, BetsSeed, (Profit / xC).toFixed(8));
                    if (HighLow === 0) {
                        document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | Low  | R:" + Round;
                    } else {
                        document.getElementById("DivLast").innerHTML = Coin + " | " + Odd + "% | High | R:" + Round;
                    }
                    var p = (Number(ProfitGlobal) / xC).toFixed(8);
                    if (p > Number(AWMax)) {
                        AWMax = p;
                    }
                    if (AutoWithdraw === 1 && p >= Number(AWMax)) {
                        AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (ABAW100 / 100)));
                        document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                        document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (ABAW100 / 100)) / xC).toFixed(8);
                        WithdrawAmount = Math.round(AWProfit * (ABAW100 / 100));
                        if (WithdrawAmount > AWAmount) {
                            BetStatut = 3;
                            PlayType = 2;
                        }
                    }
                    document.getElementById("DivLast3").innerHTML = p + ' | ' + AWMax;
                    document.title = p + ' Auto - ' + botVer;
                    TempBalance = TempBalance - (-Profit);
                    if (TempBalance >= 0) {
                        TempBalance = 0;
                    }
                    document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
                    StatsColorUpdate();
                    if (SWin === 1 && TempBalance >= 0 && ProfitGlobal >= 0 && Losse2Cover >= 0) {
                        BackStart();
                        SWin = 0;
                        clearInterval(test);
                    }
                    if (Profit < 0 || (!ReplayProfit && Profit === 0)) {
                        i++;
                        LosseNum++;
                        LosseCount++;
                        WinCount = 0;
                        ResultColor('red');
                        if (o.BetCount === 1 && Profit < 0) {
                            TooFast = 0;
                            i -= 1;
                            logMe('Lag From Hell', 'white');
                        }
                        if (LosseCount > StreakLosses) {
                            StreakLosses = LosseCount;
                        }
                        if ((o.BetCount - 1) > MaxBetNum && MaxBetNum === 0) {
                            MaxBetNum = o.BetCount;
                        } else {
                            MaxBetNum += o.BetCount;
                            if (MaxBetNum > MaxBetNumData) {
                                MaxBetNumData = MaxBetNum;
                            }
                        }
                        document.getElementById("DivStreakLosses").innerHTML = LosseCount + '/' + StreakLosses;
                        document.getElementById("DivBetLost").innerHTML = LosseNum;
                        if (i === BetSize.length) {
                            BreakCount++;
                            messageMe("Last BetSize Lost!!!");
                            HideMessage = 0;
                            document.getElementById("DivBreakCount").innerHTML = BreakCount;
                            document.getElementById("DivLastBreak").innerHTML = 'Last: ' + BetNum;
                            logMe('Dooooh: ' + (TempBalance / xC).toFixed(8), 'red');
                            if (FinalBetStop && !MultiSwitch) {
                                j = 0;
                                i = 0;
                                BackStart();
                                audioStop.play();
                                return;
                            }
                            audioBreak.play();
                            if (MultiSwitch) {
                                j++;
                                //if (j === 1) {
                                //  Losse2Cover = Math.round(Number(TempBalance) * (T2C / 100));
                                //} else {
                                //  Losse2Cover += Math.round(Number(TempBalance) * (T2C / 100));
                                //}
                                //TempBalance = 0;
                                //StopProfit = Profit;
                                //Profit = 0;
                                if (j === 1) {
                                    Losse2Cover = TempBalance * (T2C / 100);
                                    TempBalance = 0;
                                    StopProfit = Profit;
                                    Profit = 0;
                                }
                                if (j === BetX.length) {
                                    BigBreak++;
                                    messageMe("Max BetSize and Max Multiplicator Lost!!!");
                                    HideMessage = 0;
                                    logMe('Craaap: ' + (TempBalance / xC).toFixed(8), 'red');
                                    document.getElementById("DivBigBreak").innerHTML = BigBreak;
                                    document.getElementById("DivLastBigBreak").innerHTML = 'Last: ' + BetNum;
                                    Crap.push(BetNum);
                                    TempBalance = 0;
                                    Losse2Cover = 0;
                                    Profit = 0;
                                    AWProfit = 0;
                                    j = 0;
                                    if (FinalBetStop) {
                                        j = 0;
                                        i = 0;
                                        BackStart();
                                        audioStop.play();
                                        return;
                                    }
                                    audioLosse.play();
                                }
                            }
                            callback();
                        }
                        if ((Change === "ChangeAfterLoss" || Change === "AlmostChange") && HighLow === 0) {
                            HighLow = 1;
                        } else if ((Change === "ChangeAfterLoss" || Change === "AlmostChange") && HighLow === 1) {
                            HighLow = 0;
                        }
                    } else if (Profit > 0) {
                        WinNum++;
                        document.getElementById("DivBetWin").innerHTML = WinNum;
                        WinCount++;
                        LosseCount = 0;
                        i = 0;
                        ResultColor('green');
                        if (WinCount > StreakWins) {
                            StreakWins = WinCount;

                        }
                        document.getElementById("DivStreakWins").innerHTML = WinCount + '/' + StreakWins;
                        //document.getElementById("DivAffichage").style.color = "green";

                        if ((Change === "ChangeAfterWin" || Change === "AlmostChange") && HighLow === 0) {
                            HighLow = 1;
                        } else if ((Change === "ChangeAfterWin" || Change === "AlmostChange") && HighLow === 1) {
                            HighLow = 0;
                        }
                    } else if (ReplayProfit && Profit === 0) {
                        RePlay = 1;
                        ResultColor('white');
                    }
                    if (MultiSwitch) {
                        if (j > 0) {
                            Losse2Cover = Number(Losse2Cover) - (-Profit);
                        }
                        if (Losse2Cover >= 0 && j !== 0) {
                            j = i = 0;
                            TempBalance = Losse2Cover = 0;
                            messageMe("Loss Covered!!! Ho ho ho!!!");
                            logMe('Covered!!', 'green');
                            audioCover.play();
                        }

                        document.getElementById("DivLosse2Cover").innerHTML = (Number(Losse2Cover) / xC).toFixed(8);
                    }
                    if (HideMessage >= 5) {
                        HideMessage = 0;
                        messageMe("Bot is running Wild and Nude!!! Yeah Baby!!!");
                    } else {
                        HideMessage++;
                    }
                    callback();
                }
            } else if (httpAuto.status === 404) {
                messageMe("999dice Server Not Reachable");
            }
        };
        StartMe();
        httpAuto.send(params);
    }

    function Request(funcStart, funcEnd, callback) {
        funcStart();
        var params = "a=PlaceAutomatedBets&s=" + ABCookie + "&BasePayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&MaxBets=" + Round + option + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&Compact=1&ProtocolVersion=2";
        var httpAuto = new XMLHttpRequest();
        httpAuto.open("POST", "https://www.999dice.com/api/web.aspx", true);
        httpAuto.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpAuto.onreadystatechange = function() {
            if (httpAuto.readyState === 4 && httpAuto.status === 200) {
                clearInterval(test);
                o = JSON.parse(httpAuto.responseText);
                funcEnd();
                callback();
            } else if (httpAuto.status === 404) {
                messageMe("999dice Server is not reachable");
            }
        };
        StartMe();
        httpAuto.send(params);
    }

    // Asynchronous Loop //////////////////////////////////////////////////////////////////////////////////////////////////////////
    function asyncLoop(iterations, func, callback) {
        var done = false;
        var loop = {
            next: function() {
                if (done) {
                    return;
                }

                if (index < iterations) {
                    index++;
                    func(loop);

                } else {
                    done = true;
                    callback();
                }
            },

            iteration: function() {
                return index - 1;
            },

            breakme: function() {
                done = true;
                callback();
            }
        };
        loop.next();
        return loop;
    }

    // StartPlay
    function StartPlay() {
        if (DateShow === 0) {
            document.getElementById("DivStartDate").innerHTML = d.toLocaleString();
            DateShow = 1;
        }

        PlayType = 1;
        new asyncLoop(Session, function(loop) {
                NewPlaceBet(function(result) {
                    // log the iteration
                    if (index !== BetNum) {
                        index = BetNum - (-1);
                    }
                    if (BetStatut === 1) {
                        BetStatut = 0;
                        i = 0;
                        index = 0;
                        j = 0;
                        Pl = 0;
                        loop.breakme();
                    }
                    if (BetStatut === 2) {
                        BetStatut = 0;
                        Pl = 0;
                        messageMe("Time For A Break!!!");
                        loop.breakme();
                    }
                    if (BetStatut === 3) {
                        if (AutoWithdraw === 1 && WithdrawAmount > AWAmount) {
                            HideMessage = 0;
                            AutoWith();
                            loop.breakme();
                        }
                    }
                    var BalStopWin = document.getElementById('BalStopWin').value * 1;
                    var BalStopLoss = document.getElementById('BalStopLoss').value * 1;
                    if (BalStopWin > 0 || BalStopLoss > 0) {
                        var Bbal = document.getElementById('DivBtcBalance').innerHTML * xC;
                        var Dbal = document.getElementById('DivDogeBalance').innerHTML * xC;
                        var Lbal = document.getElementById('DivLtcBalance').innerHTML * xC;
                        if (BalStopWin === 0) {
                            BalStopWin = 10000000000000000000000000000000000000000000;
                            console.log('BalStopWIn: 1000000......')
                        }
                        if (Crypto === 'BTC') {
                            if ((Bbal >= BalStopWin || Bbal <= BalStopLoss)) {
                                messageMe('Bot has reached StopBalance');
                                loop.breakme();
                            }
                        } else if (Crypto === 'DOGE') {
                            if (Dbal >= BalStopWin || Dbal <= BalStopLoss) {
                                messageMe('Bot has reached StopBalance');
                                loop.breakme();
                            }
                        } else if (Crypto === 'LTC') {
                            if (Lbal >= BalStopWin || Lbal <= BalStopLoss) {
                                messageMe('Bot has reached StopBalance');
                                loop.breakme();
                            }
                        }
                    }
                    // Okay, for cycle could continue
                    ChronoTimer();
                    loop.next();

                });
            },
            function() {
                Pl = 0;
                //			if (BetStatut === 0) {
                //				messageMe("Cycle Ended!!! Ho ho ho!!!");
                //			}
            }
        );
    }

    // Automatic Betting Start Play
    function ABPlay() {
        if (DateShow === 0) {
            document.getElementById("DivStartDate").innerHTML = d.toLocaleString();
            DateShow = 1;
        }
        PlayType = 2;
        messageMe("Bot is running Wild and Nude!!! Yeah Baby!!!");
        new asyncLoop(Session, function(loop) {
                NewABPlaceBet(function(result) {
                    // log the iteration
                    if (BetStatut === 1) {
                        BetStatut = 0;
                        i = 0;
                        index = 0;
                        j = 0;
                        messageMe("This is The End... My Only Friend The End!!!");
                        loop.breakme();
                    }
                    if (BetStatut === 2) {
                        BetStatut = 0;
                        messageMe("Time For A Break!!!");
                        loop.breakme();
                    }
                    if (BetStatut === 3) {
                        if (AutoWithdraw === 1 && WithdrawAmount > AWAmount) {
                            AutoWith();
                            loop.breakme();
                        }
                    }
                    var BalStopWin = document.getElementById('BalStopWin').value * 1;
                    var BalStopLoss = document.getElementById('BalStopLoss').value * 1;
                    if (BalStopWin > 0 || BalStopLoss > 0) {
                        var Bbal = document.getElementById('DivBtcBalance').innerHTML * xC;
                        var Dbal = document.getElementById('DivDogeBalance').innerHTML * xC;
                        var Lbal = document.getElementById('DivLtcBalance').innerHTML * xC;
                        if (BalStopWin === 0) {
                            BalStopWin = 10000000000000000000000000000000000000000000;
                        }
                        if (Crypto === 'BTC') {
                            if ((Bbal >= BalStopWin || Bbal <= BalStopLoss)) {
                                messageMe('Bot has reached StopBalance');
                                loop.breakme();
                            }
                        } else if (Crypto === 'DOGE') {
                            if (Dbal >= BalStopWin || Dbal <= BalStopLoss) {
                                messageMe('Bot has reached StopBalance');
                                loop.breakme();
                            }
                        } else if (Crypto === 'LTC') {
                            if (Lbal >= BalStopWin || Lbal <= BalStopLoss) {
                                messageMe('Bot has reached StopBalance');
                                loop.breakme();
                            }
                        }
                    }
                    // Okay, for cycle could continue
                    ChronoTimer();
                    loop.next();
                });
            },
            function() {
                //			if (BetStatut === 0) {
                //				messageMe("Cycle Ended!!! Ho ho ho!!!)"
                //			}
            }
        );
    }

    // System Start
    function SysStartLab() {
        if (DateShow === 0) {
            d = new Date();
            document.getElementById("DivStartDate").innerHTML = d.toLocaleString() + " | 0j.00h:00m:00s";
            DateShow = 1;
        }
        messageMe("Bot is running Wild and Nude!!! Yeah Baby!!!");
        PlayType = 3;
        new asyncLoop(Session, function(loop) {
                SysLabouchere(function(result) {
                    // log the iteration
                    if (index !== BetNum) {
                        index = BetNum - (-1);
                    }
                    //document.getElementById("DivSessionCount").innerHTML = loop.iteration();
                    if (BetStatut === 1) {
                        BetStatut = 0;
                        index = 0;
                        j = 0;
                        Pl = 0;
                        messageMe("This is The End... My Only Friend The End!!!");
                        loop.breakme();
                    }
                    if (BetStatut === 2) {
                        BetStatut = 0;
                        Pl = 0;
                        messageMe("Time For A Break!!!");
                        loop.breakme();
                    }
                    if (BetStatut === 3) {
                        if (MultiSwitch && WithdrawAmount > AWAmount) {
                            AutoWith();
                            loop.breakme();
                        }
                    }
                    // Okay, for cycle could continue
                    ChronoTimer();
                    loop.next();

                });
            },
            function() {
                Pl = 0;
                //			if (BetStatut === 0) {
                //				messageMe("Cycle Ended!!! Ho ho ho!!!");
                //			}
            }
        );
    }

    function ChronoTimer() {

        var t = new Date();
        var chrono = t - d;

        chrono = Math.floor(chrono / 1000); // Nombre de secondes entre les 2 dates
        var second = chrono % 60; // Extraction du nombre de secondes

        chrono = Math.floor((chrono - second) / 60); // Nombre de minutes (partie entière)
        var minute = chrono % 60; // Extraction du nombre de minutes

        chrono = Math.floor((chrono - minute) / 60); // Nombre d'heures (entières)
        var hour = chrono % 24; // Extraction du nombre d'heures

        chrono = Math.floor((chrono - hour) / 24); // Nombre de jours restants
        var day = chrono;

        document.getElementById("DivStartDate").innerHTML = d.toLocaleString() + " | " + day + "d. " + hour + ":" + minute + ":" + second;

    }

    //New Save Settings option
    function NewSave(type) {
        var Sparams;
        var Name = document.getElementById("SlotName").value;
        var Slot = document.getElementById("Slot").value;
        if (type === "Auto" || type === "AutoTemp") {
            if (type !== "AutoTemp") {
                ABVarUpdate();
            } else {
                Name = 'AutoTempSave';
                Slot = 'TempSave';
            }
            Sparams = JSON.stringify({
                "Name": Name,
                "BS": BetSize,
                "BF": document.getElementById('ABBetFormat').value,
                "LBS": FinalBetStop,
                "Odd": Odd,
                "R2bbCheckW": R2bbCheckWin,
                "R2bbW": R2bbWin,
                "R2bbCheckL": R2bbCheckLosse,
                "R2bbL": R2bbLoss,
                "FB": HighLow,
                "Swap": Change,
                "SwapW": SwapRepeatW,
                "SwapL": SwapRepeatL,
                "Patern": SwapPatern,
                "MaxB": MaxPayIn,
                "MaxBS": StopAfter,
                "MaxBR": ResetBB,
                "MaxM": MultiMax,
                "MaxBalS": StopMaxBalance,
                "MinBalS": StopMinBalance,
                "MultiS": MultiStop,
                "X": x,
                "Multi": BetX,
                "MultiSW": MultiSwitch,
                "L2C": T2C,
                "ReplayP": ReplayProfit,
                "NBets": Round,
                "Crypto": Crypto,
                "AW": AutoWithdraw,
                "AW100": ABAW100
            });
        }
        if (type === "Single" || type === "SingleTemp") {
            if (type !== "SingleTemp") {
                VarUpdate();
            } else {
                Name = 'SingleTempSave';
                Slot = 'TempSave';
            }
            Sparams = JSON.stringify({
                "Name": Name,
                "BS": BetSize,
                "BF": document.getElementById('BetFormat').value,
                "LBS": FinalBetStop,
                "Odd": Odd,
                "FB": HighLow,
                "Swap": Change,
                "RepL": RepeatLosse,
                "RepW": RepeatWin,
                "X": x,
                "Multi": BetX,
                "MultiSW": MultiSwitch,
                "L2C": T2C,
                "HLPat": BetPat,
                "WinPat": BetWin,
                "Crypto": Crypto,
                "AW": AutoWithdraw,
                "AW100": AW100
            });
        }
        if (type === "System" || type === "SysTemp") {
            if (type !== "SysTemp") {
                SysInjector();
            } else {
                Name = 'AutoTempSave';
                Slot = 'TempSave';
            }
            Sparams = JSON.stringify({
                "Name": Name,
                "BS": BetSize,
                "BF": document.getElementById('SysBetFormat').value,
                "Odd": Odd,
                "FB": HighLow,
                "Swap": Change,
                "Multi": BetX,
                "MultiSW": MultiSwitch,
                "L2C": T2C,
                "DynaW": SysStopWin,
                "DynaWA": SysStopWinAmount,
                "DynaL": SysStopLosse,
                "DynaLA": SysStopLosseAmount,
                "Invert": SysLabSwitch,
                "Crypto": Crypto,
                "AW": AutoWithdraw,
                "AW100": SysAW100
            });
        }
        if (type === "General") {
            Sparams = JSON.stringify({});
        }
        localStorage.setItem(Slot, Sparams);
        messageMe('Save Done!\n' + Slot + ': ' + Name);
    }

    // New Load Settings Option
    function NewLoad(type) {
        var temp = document.getElementById("Slot").value;
        var obj;
        if (!temp) {
            messageMe('No Save On This Slot\nPlease Choose Another One!!!');
            return;
        } else {
            obj = JSON.parse(localStorage.getItem(temp));
        }
        if (type === "Auto") {
            document.getElementById("SlotName").value = obj.Name;
            document.getElementById('ABBetSize').value = obj.BS;
            document.getElementById('ABBetFormat').value = obj.BF;
            document.getElementById('ABFinalBetStop').checked = obj.LBS;
            document.getElementById('ABOdd').value = obj.Odd;
            temp = document.getElementById('R2bbCheckWin');
            if (!obj.R2bbCheckW) {
                temp.checked = false;
                showHide(temp, 'R2bbWin', 'TextOnWin');
                document.getElementById('R2bbWin').value = obj.R2bbW;
            } else {
                temp.checked = true;
                showHide(temp, 'R2bbWin', 'TextOnWin');
            }
            temp = document.getElementById('R2bbCheckLosse');
            if (!obj.R2bbCheckL) {
                temp.checked = false;
                showHide(temp, 'R2bbLoss', 'TextOnLosse');
                document.getElementById('R2bbLoss').value = obj.R2bbL;
            } else {
                temp.checked = true;
                showHide(temp, 'R2bbLoss', 'TextOnLosse');
            }
            document.getElementById('ABHighLow').value = ABHL[obj.FB];
            document.getElementById('ABChange').value = obj.Swap;
            temp = document.getElementById('ABChange').value;
            if (temp === "Repeat") {
                showSwapO(document.getElementById('ABChange').value);
                document.getElementById('SwapRepeatW').value = obj.SwapW;
                document.getElementById('SwapRepeatL').value = obj.SwapL;
            }
            if (temp === "Patern") {
                showSwapO(temp);
                document.getElementById('SwapPatern').value = obj.Patern;
            }
            document.getElementById('MaxPayIn').value = obj.MaxB;
            document.getElementById('StopAfter').checked = obj.MaxBS;
            document.getElementById('Reset2BB').checked = obj.MaxBR;
            document.getElementById('MultiMax').checked = obj.MaxM;
            document.getElementById('StopMaxBalance').value = obj.MaxBalS;
            document.getElementById('StopMinBalance').value = obj.MinBalS;
            document.getElementById('MultiStop').checked = obj.MultiS;
            document.getElementById('ABBetX').value = obj.X + '|' + obj.Multi;
            document.getElementById('ABMultiSwitch').checked = obj.MultiSW;
            document.getElementById('ABL2C').value = obj.L2C;
            document.getElementById('ReplayProfit').checked = obj.ReplayP;
            document.getElementById('ABRoundVar').value = obj.NBets;
            document.getElementById('ABCrypto').value = obj.Crypto;
            document.getElementById('ABAutoWithdrawVar').value = obj.AW;
            document.getElementById('ABAW100').value = obj.AW100;
            UpdateAddy(obj.Crypto, 'ABAutoWithdrawVar');
        }
        if (type === 'Single') {
            document.getElementById("SlotName").value = obj.Name;
            document.getElementById('BetSizeVar').value = obj.BS;
            document.getElementById('BetFormat').value = obj.BF;
            document.getElementById('FinalBetStopVar').checked = obj.LBS;
            document.getElementById('OddVar').value = obj.Odd;
            document.getElementById('HighLowVar').value = ABHL[obj.FB];
            document.getElementById('ChangeVar').value = obj.Swap;
            document.getElementById('RepeatLosseVar').value = obj.RepL;
            document.getElementById('RepeatWinVar').value = obj.RepW;
            document.getElementById('BetXVar').value = obj.X + '|' + obj.Multi;
            document.getElementById('MultiSwitchVar').checked = obj.MultiSW;
            document.getElementById('T2CVar').value = obj.L2C;
            document.getElementById('BetPatVar').value = obj.HLPat;
            document.getElementById('BetWinVar').value = obj.WinPat;
            document.getElementById('CryptoVar').value = obj.Crypto;
            document.getElementById('AutoWithdrawVar').value = obj.AW;
            document.getElementById('AW100').value = obj.AW100;
            UpdateAddy(obj.Crypto, 'AutoWithdrawVar');
        }
        if (type === 'System') {

        }
        if (type === 'TempSave') {
            temp = 'TempSave';
            if (!temp) {
                messageMe('No Save On This Slot\nPlease Choose Another One!!!');
                return;
            } else {
                obj = JSON.parse(localStorage.getItem(temp));
            }
            document.getElementById("SlotName").value = obj.Name;
            if (PlayType === 1) {
                BetSize = obj.BS;
                UpFormat(obj.BF);
                FinalBetStop = obj.LBS;
                Odd = obj.Odd;
                HighLow = obj.FB;
                Change = obj.Swap;
                RepeatLosse = obj.RepL;
                RepeatWin = obj.RepW;
                x = obj.X
                BetX = obj.Multi;
                MultiSwitch = obj.MultiSW;
                T2C = obj.L2C;
                BetPat = obj.HLPat;
                BetWin = obj.WinPat;
                Crypto = obj.Crypto;
                AutoWithdraw = obj.AW;
                AW100 = obj.AW100;
            } else if (PlayType === 2) {
                BetSize = obj.BS;
                UpFormat(obj.BF);
                FinalBetStop = obj.LBS;
                Odd = obj.Odd;
                R2bbWin = obj.R2bbW;
                R2bbLoss = obj.R2bbL;
                HighLow = obj.FB;
                Change = obj.Swap;
                SwapRepeatW = obj.SwapW;
                SwapRepeatL = obj.SwapL;
                SwapPatern = obj.Patern;
                MaxPayIn = obj.MaxB;
                StopAfter = obj.MaxBS;
                ResetBB = obj.MaxBR;
                MultiMax = obj.MaxM;
                StopMaxBalance = obj.MaxBalS;
                StopMinBalance = obj.MinBalS;
                MultiStop = obj.MultiS;
                x = obj.X
                BetX = obj.Multi;
                MultiSwitch = obj.MultiSW;
                T2C = obj.L2C;
                ReplayProfit = obj.ReplayP;
                Round = obj.NBets;
                Crypto = obj.Crypto;
                AutoWithdraw = obj.AW;
                ABAW100 = obj.AW100;
            } else {
                console.log('This part need working code!!!');
            }
        }
    }

    // Old Save settings option
    function SaveSet(type) {
        var Sparams;
        if (type === "Single") {
            VarUpdate();
            SingleName = document.getElementById("Slot").value;
            SingleSlot = document.getElementById("Slot").value;
            Sparams = SingleName + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + RepeatWin + "&" + RepeatLosse + "&" + BetPat + "&" + BetWin + "&" + BetX + "&" + FinalBetStop + "&" + AutoWithdraw + "&" + AW100 + "&" + MultiSwitch + "&" + T2C + "&" + Crypto;
            localStorage.setItem(SingleSlot, Sparams);
            messageMe("Save done: " + SingleSlot + "." + SingleName);
        } else if (type === "Auto") {
            ABVarUpdate();
            ABName = document.getElementById("SlotName").value;
            ABSlot = document.getElementById("Slot").value;
            Sparams = ABName + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + R2bbCheckWin + "&" + R2bbWin + "&" + R2bbCheckLosse + "&" + R2bbLoss + "&" + StopMaxBalance + "&" + StopMinBalance + "&" + MaxPayIn + "&" + ResetBB + "&" + StopAfter + "&" + MultiMax + "&" + Round + "&" + BetPat + "&" + BetWin + "&" + BetX + "&" + FinalBetStop + "&" + AutoWithdraw + "&" + ABAW100 + "&" + MultiSwitch + "&" + T2C + "&" + ReplayProfit + "&" + Crypto;
            localStorage.setItem(ABSlot, Sparams);
            messageMe("Save done: " + ABSlot + "." + ABName);
        } else if (type === "System") {
            SysInjector();
            SysName = document.getElementById("SlotName").value;
            SysSlot = document.getElementById("Slot").value;
            Sparams = SysName + "&" + SysChoice + "&" + SysLabSwitch + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + SysStopWin + "&" + SysStopWinAmount + "&" + SysStopLosse + "&" + SysStopLosseAmount + "&" + XMulti + "&" + AutoWithdraw + "&" + SysAW100 + "&" + MultiSwitch + "&" + T2C + "&" + BetX + "&" + Crypto;
            localStorage.setItem(SysSlot, Sparams);
            messageMe("Save done: " + SysSlot + "." + SysName);
        } else if (type === "General") {
            localStorage.setItem("ServerOn", document.getElementById('ServerOn').checked);
            localStorage.setItem("Email", document.getElementById('Mail').value);
            localStorage.setItem("EAddy", document.getElementById('EAddy').value);
            SetGenSet();
            Sparams = "GenSlot&" + AWBtcAmount + "&" + AWDogeAmount + "&" + AWLtcAmount + "&" + audioLosse.volume + "&" + audioBreak.volume + "&" + audioCover.volume + "&" + audioStop.volume + "&" + audioErr.volume + "&" + BetsSeed + "&" + SeedCheck;
            localStorage.setItem("GenSlot", Sparams);
        }
    }

    function LoadSet(type) {
        if (type === "Single") {
            SingleSlot = document.getElementById("Slot").value;
            var SingleSet = localStorage.getItem(SingleSlot).split('&');
            document.getElementById("SlotName").value = SingleSet[0];
            document.getElementById("BetSizeVar").value = SingleSet[1].split(',').map(Number);
            document.getElementById("XVar").value = SingleSet[2];
            document.getElementById("OddVar").value = SingleSet[3];
            if (SingleSet[4] === "0") {
                document.getElementById("HighLowVar").value = "Low";
            } else {
                document.getElementById("HighLowVar").value = "High";
            }
            if (SingleSet[5] === "0") {
                document.getElementById("ChangeVar").value = "Same";
            } else if (SingleSet[5] === "1") {
                document.getElementById("ChangeVar").value = "ChangeAfterLoss";
            } else if (SingleSet[5] === "2") {
                document.getElementById("ChangeVar").value = "ChangeAfterWin";
            } else if (SingleSet[5] === "3") {
                document.getElementById("ChangeVar").value = "AlmostChange";
            } else if (SingleSet[5] === "4") {
                document.getElementById("ChangeVar").value = "Random";
            } else if (SingleSet[5] === "5") {
                document.getElementById("ChangeVar").value = "Patern";
            } else if (SingleSet[5] === "6") {
                document.getElementById("ChangeVar").value = "SantaRandom";
            }
            document.getElementById("RepeatWinVar").value = SingleSet[6];
            document.getElementById("RepeatLosseVar").value = SingleSet[7];
            document.getElementById("BetPatVar").value = SingleSet[8].split(',').map(Number);
            document.getElementById("BetWinVar").value = SingleSet[9].split(',').map(Number);
            document.getElementById("BetXVar").value = SingleSet[10].split(',').map(Number);
            if (SingleSet[11] === "0") {
                document.getElementById('FinalBetStopVar').checked = false;
            } else {
                document.getElementById('FinalBetStopVar').checked = true;
            }
            document.getElementById("AW100").value = SingleSet[13];
            if (SingleSet[14] === "0") {
                document.getElementById('MultiSwitchVar').checked = false;
            } else {
                document.getElementById('MultiSwitchVar').checked = true;
            }
            if (isNaN(SingleSet[15])) {
                document.getElementById("T2CVar").value = "";
            } else {
                document.getElementById("T2CVar").value = SingleSet[15];
            }
            document.getElementById("CryptoVar").value = SingleSet[16];
            UpdateAddy(SingleSet[16], 'AutoWithdrawVar');
            messageMe(SingleSlot + "Settings Loaded\n" + SingleSet[0]);
        } else if (type === "Auto") {
            ABSlot = document.getElementById("Slot").value;
            var ABSet = localStorage.getItem(ABSlot).split('&');
            document.getElementById("SlotName").value = ABSet[0];
            document.getElementById("ABBetSize").value = ABSet[1].split(',').map(Number);
            document.getElementById("ABxVar").value = ABSet[2];
            document.getElementById("ABOdd").value = ABSet[3];
            if (ABSet[4] === "0") {
                document.getElementById("ABHighLow").value = "Low";
            } else {
                document.getElementById("ABHighLow").value = "High";
            }
            if (ABSet[5] === "0") {
                document.getElementById("ABChange").value = "Same";
            } else if (ABSet[5] === "1") {
                document.getElementById("ABChange").value = "ChangeAfterLoss";
            } else if (ABSet[5] === "2") {
                document.getElementById("ABChange").value = "ChangeAfterWin";
            } else if (ABSet[5] === "3") {
                document.getElementById("ABChange").value = "AlmostChange";
            } else if (ABSet[5] === "4") {
                document.getElementById("ABChange").value = "Random";
            } else if (ABSet[5] === "5") {
                document.getElementById("ABChange").value = "Patern";
            } else if (ABSet[5] === "6") {
                document.getElementById("ABChange").value = "SantaRandom";
            }
            if (ABSet[6] === "0") {
                document.getElementById('R2bbCheckWin').checked = false;
            } else {
                document.getElementById('R2bbCheckWin').checked = true;
            }
            showHide(document.getElementById('R2bbCheckWin'), 'R2bbWin', 'TextOnWin');
            document.getElementById("R2bbWin").value = ABSet[7];
            if (ABSet[8] === "0") {
                document.getElementById('R2bbCheckLosse').checked = false;
            } else {
                document.getElementById('R2bbCheckLosse').checked = true;
            }
            showHide(document.getElementById('R2bbCheckLosse'), 'R2bbLoss', 'TextOnLosse');
            document.getElementById("R2bbLoss").value = ABSet[9];
            document.getElementById("StopMaxBalance").value = ABSet[10];
            document.getElementById("StopMinBalance").value = ABSet[11];
            document.getElementById("MaxPayIn").value = ABSet[12];
            if (ABSet[13] === "0") {
                document.getElementById('Reset2BB').checked = false;
            } else {
                document.getElementById('Reset2BB').checked = true;
            }
            if (ABSet[14] === "0") {
                document.getElementById('StopAfter').checked = false;
            } else {
                document.getElementById('StopAfter').checked = true;
            }
            if (ABSet[15] === "0") {
                document.getElementById('MultiMax').checked = false;
            } else {
                document.getElementById('MultiMax').checked = true;
            }
            document.getElementById("ABRoundVar").value = ABSet[16];
            // ABSet[17] = BetPat && ABSet[18] = BetWin
            document.getElementById("ABBetX").value = ABSet[19].split(',').map(Number);
            if (ABSet[20] === "0") {
                document.getElementById('ABFinalBetStop').checked = false;
            } else {
                document.getElementById('ABFinalBetStop').checked = true;
            }
            document.getElementById("ABAW100").value = ABSet[22];
            if (ABSet[23] === "0") {
                document.getElementById('ABMultiSwitch').checked = false;
            } else {
                document.getElementById('ABMultiSwitch').checked = true;
            }
            if (isNaN(ABSet[24])) {
                document.getElementById("ABL2C").value = "";
            } else {
                document.getElementById("ABL2C").value = ABSet[24];
            }
            if (ABSet[25] === "0") {
                document.getElementById('ReplayProfit').checked = false;
            } else {
                document.getElementById('ReplayProfit').checked = true;
            }
            document.getElementById("ABCrypto").value = ABSet[26];
            UpdateAddy(ABSet[26], 'ABAutoWithdrawVar');
            messageMe(ABSlot + " Settings Loaded\n" + ABSet[0]);
        } else if (type === "System") {
            SysSlot = document.getElementById("Slot").value;
            var SysSet = localStorage.getItem(SysSlot).split('&');
            document.getElementById("SlotName").value = SysSet[0];
            if (SysSet[1] === "1") {
                document.getElementById("SysChoice").value = "Labouchere";
            } else if (SysSet[1] === "2") {
                document.getElementById("SysChoice").value = "Fibonacci";
            } else if (SysSet[1] === "3") {
                document.getElementById("SysChoice").value = "Dalaembert";
            }
            if (SysSet[2] === "0") {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set('checked', false);
            } else {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set('checked', true);
            }
            document.getElementById("SysBetSizeVar").value = SysSet[3].split(',').map(Number);
            document.getElementById("SysXVar").value = SysSet[4];
            document.getElementById("SysOddVar").value = SysSet[5];
            if (SysSet[6] === "0") {
                document.getElementById("SysHighLowVar").value = "Low";
            } else {
                document.getElementById("SysHighLowVar").value = "High";
            }
            if (SysSet[7] === "0") {
                document.getElementById("SysSysChange").value = "Same";
            } else if (SysSet[7] === "1") {
                document.getElementById("SysSysChange").value = "Change after losse";
            } else if (SysSet[7] === "2") {
                document.getElementById("SysSysChange").value = "Change after win";
            } else if (SysSet[7] === "3") {
                document.getElementById("SysSysChange").value = "Almost Change";
            } else if (SysSet[7] === "4") {
                document.getElementById("SysSysChange").value = "Random";
            } else if (SysSet[7] === "5") {
                document.getElementById("SysSysChange").value = "Patern";
            } else if (SysSet[7] === "6") {
                document.getElementById("SysSysChange").value = "SantaRandom";
            }
            if (SysSet[8] === "0") {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[13]).set('checked', false);
            } else {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[13]).set('checked', true);
            }
            document.getElementById("SysStopWinAmount").value = SysSet[9];

            if (SysSet[10] === "0") {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[14]).set('checked', false);
            } else {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[14]).set('checked', true);
            }
            document.getElementById("SysStopLosseAmount").value = SysSet[11];

            if (SysSet[12] === "0") {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[15]).set('checked', false);
            } else {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[15]).set('checked', true);
            }
            if (SysSet[13] === "0") {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set('checked', false);
            } else {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[10]).set('checked', true);
            }
            document.getElementById("SysAW100").value = SysSet[14];
            if (SysSet[15] === "0") {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[11]).set('checked', false);
            } else {
                dijit.getEnclosingWidget(dojo.query("input[type=checkbox]")[11]).set('checked', true);
            }
            document.getElementById("SysL2CVar").value = SysSet[16];
            document.getElementById("SysBetXVar").value = SysSet[17].split(',').map(Number);
            document.getElementById("SysCrypto").value = SysSet[18];
        } else if (type === "General") {
            if (!localStorage.getItem("GenSlot")) {
                SaveSet('General');
            }
            GenSet = localStorage.getItem("GenSlot").split('&');
            document.getElementById("AWBtcAmount").value = GenSet[1];
            document.getElementById("AWDogeAmount").value = GenSet[2];
            document.getElementById("AWLtcAmount").value = GenSet[3];
            document.getElementById("LosseVolumeId").value = GenSet[4] * 100;
            document.getElementById("BreakVolumeId").value = GenSet[5] * 100;
            document.getElementById("CoverVolumeId").value = GenSet[6] * 100;
            document.getElementById("StopVolumeId").value = GenSet[7] * 100;
            document.getElementById("ErrVolumeId").value = GenSet[8] * 100;
            document.getElementById("SeedVar").value = GenSet[9];
            if (GenSet[10] === "0") {
                document.getElementById('SeedRandomCheck').checked = false;
            } else {
                document.getElementById('SeedRandomCheck').checked = true;
            }
            if (localStorage.getItem('ServerOn') === "true") {
                document.getElementById('ServerOn').checked = true;
            } else {
                document.getElementById('ServerOn').checked = false;
            }
            if (!!localStorage.getItem('Email')) {
                document.getElementById('Mail').value = localStorage.getItem('Email');
            }
            if (!!localStorage.getItem('EAddy')) {
                document.getElementById('EAddy').value = localStorage.getItem('EAddy');
            }
            SetGenSet();
        }
    }

    // Verif si bet tjs actif when running
    function ClicMe() {
        var evt = window.document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        document.getElementById("ButtonStart").dispatchEvent(evt);
    }

    function ReportMe() {
        console.info("Repeat Retries: " + Pcount + "\nClick Me " + Pcount + " Times So Hard, Made Me Come!!! Ouch!!!");
    }

    function VerifMe() {
        if (BetId != DataP) {
            DataP = BetId;
            return;
        } else {
            //StopMe();
            Pcount++;
            SP = 0;
            ClicMe();
            return;
        }
    }

    function StartMe() {
        clearInterval(test);
        test = setInterval(VerifMe, 5000);
    }

    // verif if 999dice is online
    function DiceOnline() {
        var address = "http://www.999dice.com/api/web.aspx";
        var t1 = Date.now();
        var t2;
        var max = 100000;
        var failed = false;
        var httpReq = new XMLHttpRequest();
        if (httpReq === null) {
            console.log("Error: XMLHttpRequest failed to initiate.");
        }
        httpReq.onreadystatechange = function() {
            var failTimer = setTimeout(function() {
                failed = true;
                httpReq.abort();
            }, max);
            if (httpReq.readyState === 4) { //Completed loading
                if (!failed && httpReq.status === 200) {
                    clearTimeout(failTimer);
                    t2 = Date.now();
                    var timeTotal = (t2 - t1);
                    if (timeTotal > max) {
                        messageMe("999dice Request TimeOut - Jake Why\nXML Http Request Statuts: " + httpReq.status);
                        onFail();
                    } else {
                        messageMe("999dice is online - Thx God it isnt the end!!!\nYou could login to 999dice account");
                        onSuccess();
                    }
                } else if (!failed && httpReq.status === 0) {
                    messageMe("999dice isnt reachable check your connection\nXML Http Request Statuts: " + httpReq.status);
                    onFail();
                } else if (!failed && httpReq.status >= 500) {
                    messageMe("999dice Server Error\nXML Http Request Statuts: " + httpReq.status);
                    onFail();
                } else if (!failed && httpReq.status >= 400) {
                    messageMe("Bot Error Client Side\nXML Http Request Statuts: " + httpReq.status);
                    onFail();
                }
            }
        }
        try {
            httpReq.open("GET", address, true);
            httpReq.send(null);

        } catch (err) {
            console.log("Error:" + err);
            onFail();
        }

        function onSuccess() {
            ServerStatut = "Online";
            return ServerStatut;
        }

        function onFail() {
            ServerStatut = "Offline";
            return ServerStatut;
        }
    }

    // Account infos Update
    function AUpdate(CCC) {
        function ifobetcount() {
            if (!!o.BetCount) {
                BTCBetCount += o.BetCount
            } else {
                BTCBetCount += BetNum;
            }
        }
        if (CCC === "BTC") {
            document.getElementById('DivBtcBalance').innerHTML = ((StartingBalance + Profit) / xC).toFixed(8);
            ifobetcount();
            document.getElementById('DivBtcBetCount').innerHTML = BTCBetCount;
            document.getElementById('DivBtcProfit').innerHTML = ((BTCProfit + ((StartingBalance + Profit) - BTCBalance)) / xC).toFixed(8);
        } else if (CCC === "DOGE") {
            document.getElementById('DivDogeBalance').innerHTML = ((StartingBalance + Profit) / xC).toFixed(8);
            ifobetcount();
            document.getElementById('DivDogeBetCount').innerHTML = DOGEBetCount;
            document.getElementById('DivDogeProfit').innerHTML = ((DOGEProfit + ((StartingBalance + Profit) - DOGEBalance)) / xC).toFixed(8);
        } else if (CCC === "LTC") {
            document.getElementById('DivLtcBalance').innerHTML = ((StartingBalance + Profit) / xC).toFixed(8);
            ifobetcount();
            document.getElementById('DivLtcBetCount').innerHTML = LTCBetCount;
            document.getElementById('DivLtcProfit').innerHTML = ((LTCProfit + ((StartingBalance + Profit) - LTCBalance)) / xC).toFixed(8);
        }
    }

    //generateur de bet and bet calculateur
    function InjectorType(Val, temp) {
        if (temp === 'BetSize') {
            if (SaveType === "Auto") {
                document.getElementById('ABBetSize').value = Val;
                document.getElementById('ABxVar').value = 1;
            } else if (SaveType === "Single") {
                document.getElementById('BetSizeVar').value = Val;
                document.getElementById('XVar').value = 1;
            }
        } else if (temp === 'Multi') {
            if (SaveType === "Auto") {
                document.getElementById('ABBetX').value = '1|' + Val;
            } else if (SaveType === "Single") {
                document.getElementById('BetXVar').value = '1|' + Val;
            }
        } else if (temp === 'MaxBet') { // NEED A LOT OF WORK SANTA
            if (SaveType === "Auto") {
                if (document.getElementById('GenStreak').value <= document.getElementById('GenResults').children.length)
                    document.getElementById('MaxPayIn').value = (Number(document.getElementById('GenResults').children[0].children[1].innerHTML) * xC).toFixed(0);
            } else {
                messageMe("Error MaxBet Stop Injection\nOnly Available For Automatic");
            }
        }
    }

    function Generate() {
        BetCalc(document.getElementById('GenBB').value, document.getElementById('GenIncrease').value, document.getElementById('GenStreak').value, document.getElementById('GenStop').value, document.getElementById('InjectorChoice').value, 'y');
    }

    function BetCalc(Base, Increase, Streak, Stop, Inject, Gen) {
        var test;
        var BB = Number(Base);
        var BBC = 0;
        var Bal = 0;
        var BetListSize = '';
        var GProfit = 0;
        var GOdd;
        if (SaveType === 'Single') {
            GOdd = document.getElementById('OddVar').value;
        } else if (SaveType === 'Auto') {
            GOdd = document.getElementById('ABOdd').value;
        }
        if (GOdd === '') {
            messageMe("Set %Win to calculate Profit");
            return;
        } else {
            GOdd = ((99.9) / GOdd) - 1;
        }
        document.getElementById('GenResults').innerHTML = "";
        if (document.getElementById('GenBB').value.match(/fib/i)) {
            for (a = 0, b = 1, k = 0; k < Streak; a = b, b = x, k++) {
                x = a + b;
                Bal += x;
                BetListSize += x + ',';
                if (Gen === 'y') {
                    GenResults(k + 1, x, Bal, 0);
                }
            }
            messageMe("Test Fibo char");
        } else {
            for (test = 1; test <= Streak; test++) {
                BBC++;
                GProfit = (Math.floor((GOdd * BB) - Bal) / xC).toFixed(8);
                Bal = Bal + BB;
                BetListSize += Math.round(BB) + ',';
                if (Gen === 'y') {
                    GenResults(BBC, (Math.round(BB) / xC).toFixed(8), (Bal / xC).toFixed(8), GProfit);
                }
                BB = Math.floor(BB * ((Increase / 100) + 1));
                if (Stop > 0 && BB > Stop) {
                    InjectorType(BetListSize.slice(0, BetListSize.length - 1), Inject);
                    messageMe("Last Streak Reached");
                    test = Streak + 1;
                }
            }
        }
        InjectorType(BetListSize.slice(0, BetListSize.length - 1), Inject);
        return Bal;
    }

    function GenResults(GCount, GSize, GBal, GProfit) {
        var el = document.getElementById('GenResults');
        var txt = '<span class="GResultsHead" style="width: 40px;">' + GCount + '</span>\n<span class="GResultsHead" style="width: 130px;">' + GSize + '</span>\n<span class="GResultsHead" style="width: 200px;">' + GBal + '</span>\n<span class="GResultsHead" id="GResultsHead2" style="width: 148px; border-right-style: hidden;">' + GProfit + '</span>';
        CreateObjectBefore('div', 'RLine', '', '', el, el.children[0]);
        el.children[0].innerHTML = txt;
    }

    function messageMe(txt) {
        document.getElementById('DivMessage').innerHTML = txt;
    }

    function OnLoad() {
        if (!!localStorage.GenSlot && localStorage.getItem("GenSlot").split('&').length !== 12) {
            SaveType = "General";
            SaveSet();
        } else if (localStorage.getItem("GenSlot").split('&').length === 12) {
            SaveType = "General";
            LoadSet();
        }
        LoadSet('General');
        LoadHelp();
    }

    function ImportSet() {
        var temp = document.getElementById('DataShare').value;
        var temp2;
        var temp3;
        if (temp !== "") {
            if (temp.slice(0, 6) === 'Single') {
                temp = temp.slice(7, temp.length);
                temp2 = localStorage.getItem('Temp1');
                temp3 = document.getElementById('Slot').value;
                localStorage.setItem('Temp1', temp);
                document.getElementById('Slot').value = 'Temp1';
                NewLoad('Single');
                localStorage.setItem('Temp1', temp2);
                document.getElementById('Slot').value = temp3;
            } else if (temp.slice(0, 4) === 'Auto') {
                temp = temp.slice(5, temp.length);
                temp2 = localStorage.getItem('Temp3');
                temp3 = document.getElementById('Slot').value;
                localStorage.setItem('Temp3', temp);
                document.getElementById('Slot').value = 'Temp3';
                NewLoad('Auto');
                localStorage.setItem('Temp3', temp2);
                document.getElementById('Slot').value = temp3;
            } else if (temp.slice(0, 6) === 'System') {
                temp = temp.slice(7, temp.length);
                temp2 = localStorage.getItem('Temp3');
                temp3 = document.getElementById('Slot').value;
                localStorage.setItem('Temp3', temp);
                document.getElementById('Slot').value = 'Temp3';
                NewLoad('Auto');
                localStorage.setItem('Temp3', temp2);
                document.getElementById('Slot').value = temp3;
            }
        } else {
            messageMe('Nothing to import !!!');
        }
    }

    function ExportSet() {
        document.getElementById('DataShare').value = SaveType + '&' + localStorage.getItem(document.getElementById('Slot').value);
    }

    function NewStat() {
        Back2BB();
        ProfitGlobal = Profit = AWProfit = AWGlobal = AWCount = AWMax = BetNum = TrueBetNum = WinNum = WinCount = LosseNum = LosseCount = Wagered = StreakLosses = StreakWins = SecretAverage = SecretCount = BreakCount = BigBreak = 0;
        d = new Date();
        document.getElementById("DivStartDate").innerHTML = d.toLocaleString() + " | 0j.00h:00m:00s";
        document.getElementById("DivLast").innerHTML = '| NaN |';
        document.getElementById("DivLast3").innerHTML = '| NaN |';
        document.getElementById("DivWagered").innerHTML = '| NaN |';
        document.getElementById("DivTempBalance").innerHTML = '| NaN |';
        document.getElementById("DivLosse2Cover").innerHTML = '| NaN |';
        document.getElementById("DivMaxBetLosse").innerHTML = '| NaN |';
        document.getElementById("DivBetNum").innerHTML = '000000';
        document.getElementById("DivBetWin").innerHTML = '00000';
        document.getElementById("DivBetLost").innerHTML = '00000';
        document.getElementById("DivOdd").innerHTML = '00.000';
        document.getElementById("DivStreakWins").innerHTML = '| NaN |';
        document.getElementById("DivLastBreak").innerHTML = '| NaN |';
        document.getElementById("DivLastBigBreak").innerHTML = '| NaN |';
        document.getElementById("DivStreakLosses").innerHTML = '| NaN |';
        document.getElementById("DivSecretAverage").innerHTML = '| NaN |';
        document.getElementById("DivSecretCount").innerHTML = '| NaN |';
        document.getElementById("DivBreakCount").innerHTML = '| NaN |';
        document.getElementById("DivBigBreak").innerHTML = '| NaN |';
        document.getElementById("DivBetX").innerHTML = '1 / 1';
        document.getElementById("DivAWGlobal").innerHTML = '| NaN |';
        document.getElementById("DivAWProfit").innerHTML = '| NaN |';
        document.getElementById("DivBetLength").innerHTML = '| NaN |';
    }

    function AddyInject() {
        var CCC = document.getElementById('AddyCrypto').value;
        var NNN = document.getElementById('AddyName').value;
        var temp = CCC + '&' + NNN + '&' + document.getElementById('AddyAddy').value;
        if (CCC === 'BTC') {
            if (document.getElementById('AddyAddy').value.charAt(0) === '1') {
                if (!localStorage.BTC) {
                    localStorage.setItem('BTC', temp);
                    messageMe('New BTC addy added to list');
                    HideMessage = 0;
                } else if (!!localStorage.BTC && localStorage.BTC.split(';').length < 10) {
                    localStorage.setItem('BTC', localStorage.BTC + ';' + temp);
                    messageMe('New BTC addy added to list');
                    HideMessage = 0;
                } else {
                    messageMe("Too much " + CCC + ' saved\nRemove one or more only 10 allowed');
                    HideMessage = 0;
                }
            } else {
                messageMe("Wrong Addy...\nNot a BTC addy!!!");
            }
        } else if (CCC === 'DOGE') {
            if (document.getElementById('AddyAddy').value.charAt(0) === 'D') {
                if (!localStorage.DOGE) {
                    localStorage.setItem('DOGE', temp);
                    messageMe('New DOGE addy added to list');
                    HideMessage = 0;
                } else if (!!localStorage.DOGE && localStorage.DOGE.split(';').length < 10) {
                    localStorage.setItem('DOGE', localStorage.DOGE + ';' + temp);
                    messageMe('New DOGE addy added to list');
                    HideMessage = 0;
                } else {
                    messageMe("Too much " + CCC + ' saved\nRemove one or more only 10 allowed');
                    HideMessage = 0;
                }
            } else {
                messageMe("Wrong Addy...\nNot a DOGE addy!!!");
            }
        } else if (CCC === 'LTC') {
            if (document.getElementById('AddyAddy').value.charAt(0) === 'L') {
                if (!localStorage.LTC) {
                    localStorage.setItem('LTC', temp);
                    messageMe('New LTC addy added to list');
                    HideMessage = 0;
                } else if (!!localStorage.LTC && localStorage.LTC.split(';').length < 10) {
                    localStorage.setItem('LTC', localStorage.LTC + ';' + temp);
                    messageMe('New LTC addy added to list');
                    HideMessage = 0;
                } else {
                    messageMe("Too much " + CCC + ' saved\nRemove one or more only 10 allowed');
                    HideMessage = 0;
                }
            } else {
                messageMe("Wrong Addy... Check it again");
            }
        } else {
            messageMe("Choose a crypto to inject addy");
            HideMessage = 0;
        }
    }

    function UpdateAddy(type, id) {
        AWGlobal = 0;
        AWProfit = 0;
        AWCount = 0;
        var temp = '<option value="Empty" class="List">-||-_-||-</option>';
        if (type.match(/btc/i)) {
            if (!!localStorage.BTC) {
                var BTemp = localStorage.BTC.split(';');
                for (A = 0; A < BTemp.length; A++) {
                    temp += '<option class="List" value="' + BTemp[A].split('&')[2] + '">' + BTemp[A].split('&')[1] + '</option>'
                }
            }
        }
        if (type.match(/doge/i)) {
            if (!!localStorage.DOGE) {
                var DTemp = localStorage.DOGE.split(';') || null;
                for (A = 0; A < DTemp.length; A++) {
                    temp += '<option class="List" value="' + DTemp[A].split('&')[2] + '">' + DTemp[A].split('&')[1] + '</option>'
                }
            }
        }
        if (type.match(/ltc/i)) {
            if (!!localStorage.LTC) {
                var LTemp = localStorage.LTC.split(';');
                for (A = 0; A < LTemp.length; A++) {
                    temp += '<option class="List" value="' + LTemp[A].split('&')[2] + '">' + LTemp[A].split('&')[1] + '</option>'
                }
            }
        }
        if (!type.match(/empty/i)) {
            document.getElementById(id).innerHTML = temp;
        }
        console.log(type.match(/empty/i));
    }

    function AddyRemove() {
        var c = document.getElementById('AddyCryptoRemover').value;
        var a = document.getElementById('RAddy').value;
        var b;
        console.log(a === 'Empty');
        if (a === 'Empty') {
            console.log(a === 'Empty');
            messageMe('Empty error !!!\nCrypto or Name are empty.');
        } else {
            if (localStorage.getItem(c)) {
                var t = localStorage.getItem(c).split(c + '&').splice(1, localStorage.getItem(c).split(c + '&').length - 1);
                var tl = t.length;
                console.log(c + '\n' + a);
                console.log(t);
                for (var h = 0; h < t.length; h++) {
                    if (t[h].indexOf(a) !== -1) {
                        t.splice(h, 1);
                        console.log('Find one at ' + h + ', remove it now');
                        tl--;
                        messageMe(c + ' Addy removed\n' + a);
                    }
                }
                if (tl > 0) {
                    b = (((t.slice(0, (t.length))).reduce(function(previousValue, currentValue, index, array) {
                        return previousValue + c + '&' + currentValue;
                    })));
                    b = c + '&' + b;
                    b = b.slice(0, b.length - 1);
                    localStorage.setItem(c, b);
                } else {
                    localStorage.removeItem(c);
                }
            }
        }
    }

    function AddyLoad() {
        var temp = '';
        if (!!localStorage.BTC) {
            for (var a = 0; a < localStorage.BTC.split(';').length; a++) {
                temp = temp + '<option value="' + this.split('&')[a] + '" class="CryptoAddy">' + this.split('&')[a] + '</option';
            }
            document.getElementsByName('CryptoAddy').innerHTML = temp;
        }
        if (!!localStorage.DOGE) {
            for (var a = 0; a < localStorage.DOGE.split(';').length; a++) {
                temp = temp + '<option value="' + this.split('&')[a] + '" class="CryptoAddy">' + this.split('&')[a] + '</option';
            }
            document.getElementsByName('CryptoAddy').innerHTML = temp;
        }
        if (!!localStorage.LTC) {
            for (var a = 0; a < localStorage.LTC.split(';').length; a++) {
                temp = temp + '<option value="' + this.split('&')[a] + '" class="CryptoAddy">' + this.split('&')[a] + '</option';
            }
            document.getElementsByName('CryptoAddy').innerHTML = document.getElementsByName('AWAddy').innerHTML = temp;
        }
    }

    // copy to clipboard
    var copyElement = document.createElement('input');
    copyElement.setAttribute('type', 'text');
    copyElement.setAttribute('value', 'text');
    copyElement = document.body.appendChild(copyElement);
    copyElement.select();
    try {
        if (!document.execCommand('copy')) throw 'Not allowed.';
    } catch (e) {
        copyElement.remove();
        console.log("document.execCommand('copy'); is not supported");
        prompt('Copy the text below. (ctrl c, enter)', text);
    } finally {
        if (typeof e == 'undefined') {
            copyElement.remove();
        }
    }

    // Vérif bet by 999dice
    function calculateBetResult(serverSeed, clientSeed, betNumber) {
        if (clientSeed < 0) {
            clientSeed += Math.pow(2, 32);
        }
        var clientSeedHex = clientSeed.toString(16);
        while (clientSeedHex.length < 8) {
            clientSeedHex = '0' + clientSeedHex;
        }
        var betNumberHex = reverseHex32(betNumber.toString(16));
        var data = serverSeed + clientSeedHex + betNumberHex;
        var hasher = new jsSHA(data, "HEX");
        var hash = hasher.getHash("SHA-512", "HEX");
        while (1) {
            hasher = new jsSHA(hash, "HEX");
            hash = hasher.getHash("SHA-512", "HEX");
            for (var z = 0; z <= 122; z += 6) {
                var num = parseInt(hash.substr(z, 6), 16);
                if (num < 16000000) {
                    return num % 1000000;
                }
            }
        }
    }

    function CreateObjectBefore(type, clas, id, value, context, child) {
        var div = document.createElement(type);
        if (clas !== '') {
            div.setAttribute('class', clas);
        }
        if (id !== '') {
            div.id = id;
        }
        if (value !== '') {
            div.innerText = value;
        }
        context.insertBefore(div, child);
    }

    function TestAuto() {
        LoadChoice();
        LoadAuto();
        document.getElementById('SysCrypto').value = 'Empty';
        document.getElementById('CryptoVar').value = 'Empty';
        document.getElementById('AutoWithdrawVar').value = 'Empty';
        document.getElementById('SysAutoWithdrawVar').value = 'Empty';
        PlayType = 2;
        SetGenSet();
    }

    function TestSingle() {
        LoadChoice();
        LoadSingle();
        document.getElementById('ABCrypto').value = 'Empty';
        document.getElementById('SysCrypto').value = 'Empty';
        document.getElementById('ABAutoWithdrawVar').value = 'Empty';
        document.getElementById('SysAutoWithdrawVar').value = 'Empty';
        PlayType = 1;
        SetGenSet();
    }

    function TestSystem() {
        LoadChoice();
        LoadSystem();
        document.getElementById('ABCrypto').value = 'Empty';
        document.getElementById('CryptoVar').value = 'Empty';
        document.getElementById('AutoWithdrawVar').value = 'Empty';
        document.getElementById('ABAutoWithdrawVar').value = 'Empty';
        PlayType = 3;
        SetGenSet();
    }


    ! function(e, t, n) {
        "use strict";
        ! function o(e, t, n) {
            function a(s, l) {
                if (!t[s]) {
                    if (!e[s]) {
                        var i = "function" == typeof require && require;
                        if (!l && i) return i(s, !0);
                        if (r) return r(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = t[s] = {
                        exports: {}
                    };
                    e[s][0].call(c.exports, function(t) {
                        var n = e[s][1][t];
                        return a(n ? n : t)
                    }, c, c.exports, o, e, t, n)
                }
                return t[s].exports
            }
            for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
            return a
        }({
            1: [function(o, a, r) {
                var s = function(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                };
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l, i, u, c, d = o("./modules/handle-dom"),
                    f = o("./modules/utils"),
                    p = o("./modules/handle-swal-dom"),
                    m = o("./modules/handle-click"),
                    v = o("./modules/handle-key"),
                    y = s(v),
                    h = o("./modules/default-params"),
                    b = s(h),
                    g = o("./modules/set-params"),
                    w = s(g);
                r["default"] = u = c = function() {
                    function o(e) {
                        var t = a;
                        return t[e] === n ? b["default"][e] : t[e]
                    }
                    var a = arguments[0];
                    if (d.addClass(t.body, "stop-scrolling"), p.resetInput(), a === n) return f.logStr("SweetAlert expects at least 1 attribute!"), !1;
                    var r = f.extend({}, b["default"]);
                    switch (typeof a) {
                        case "string":
                            r.title = a, r.text = arguments[1] || "", r.type = arguments[2] || "";
                            break;
                        case "object":
                            if (a.title === n) return f.logStr('Missing "title" argument!'), !1;
                            r.title = a.title;
                            for (var s in b["default"]) r[s] = o(s);
                            r.confirmButtonText = r.showCancelButton ? "Confirm" : b["default"].confirmButtonText, r.confirmButtonText = o("confirmButtonText"), r.doneFunction = arguments[1] || null;
                            break;
                        default:
                            return f.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof a), !1
                    }
                    w["default"](r), p.fixVerticalPosition(), p.openModal(arguments[1]);
                    for (var u = p.getModal(), v = u.querySelectorAll("button"), h = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], g = function(e) {
                            return m.handleButton(e, r, u)
                        }, C = 0; C < v.length; C++)
                        for (var S = 0; S < h.length; S++) {
                            var x = h[S];
                            v[C][x] = g
                        }
                    p.getOverlay().onclick = g, l = e.onkeydown;
                    var k = function(e) {
                        return y["default"](e, r, u)
                    };
                    e.onkeydown = k, e.onfocus = function() {
                        setTimeout(function() {
                            i !== n && (i.focus(), i = n)
                        }, 0)
                    }, c.enableButtons()
                }, u.setDefaults = c.setDefaults = function(e) {
                    if (!e) throw new Error("userParams is required");
                    if ("object" != typeof e) throw new Error("userParams has to be a object");
                    f.extend(b["default"], e)
                }, u.close = c.close = function() {
                    var o = p.getModal();
                    d.fadeOut(p.getOverlay(), 5), d.fadeOut(o, 5), d.removeClass(o, "showSweetAlert"), d.addClass(o, "hideSweetAlert"), d.removeClass(o, "visible");
                    var a = o.querySelector(".sa-icon.sa-success");
                    d.removeClass(a, "animate"), d.removeClass(a.querySelector(".sa-tip"), "animateSuccessTip"), d.removeClass(a.querySelector(".sa-long"), "animateSuccessLong");
                    var r = o.querySelector(".sa-icon.sa-error");
                    d.removeClass(r, "animateErrorIcon"), d.removeClass(r.querySelector(".sa-x-mark"), "animateXMark");
                    var s = o.querySelector(".sa-icon.sa-warning");
                    return d.removeClass(s, "pulseWarning"), d.removeClass(s.querySelector(".sa-body"), "pulseWarningIns"), d.removeClass(s.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                        var e = o.getAttribute("data-custom-class");
                        d.removeClass(o, e)
                    }, 300), d.removeClass(t.body, "stop-scrolling"), e.onkeydown = l, e.previousActiveElement && e.previousActiveElement.focus(), i = n, clearTimeout(o.timeout), !0
                }, u.showInputError = c.showInputError = function(e) {
                    var t = p.getModal(),
                        n = t.querySelector(".sa-input-error");
                    d.addClass(n, "show");
                    var o = t.querySelector(".sa-error-container");
                    d.addClass(o, "show"), o.querySelector("p").innerHTML = e, setTimeout(function() {
                        u.enableButtons()
                    }, 1), t.querySelector("input").focus()
                }, u.resetInputError = c.resetInputError = function(e) {
                    if (e && 13 === e.keyCode) return !1;
                    var t = p.getModal(),
                        n = t.querySelector(".sa-input-error");
                    d.removeClass(n, "show");
                    var o = t.querySelector(".sa-error-container");
                    d.removeClass(o, "show")
                }, u.disableButtons = c.disableButtons = function() {
                    var e = p.getModal(),
                        t = e.querySelector("button.confirm"),
                        n = e.querySelector("button.cancel");
                    t.disabled = !0, n.disabled = !0
                }, u.enableButtons = c.enableButtons = function() {
                    var e = p.getModal(),
                        t = e.querySelector("button.confirm"),
                        n = e.querySelector("button.cancel");
                    t.disabled = !1, n.disabled = !1
                }, "undefined" != typeof e ? e.sweetAlert = e.swal = u : f.logStr("SweetAlert is a frontend module!"), a.exports = r["default"]
            }, {
                "./modules/default-params": 2,
                "./modules/handle-click": 3,
                "./modules/handle-dom": 4,
                "./modules/handle-key": 5,
                "./modules/handle-swal-dom": 6,
                "./modules/set-params": 8,
                "./modules/utils": 9
            }],
            2: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = {
                    title: "",
                    text: "",
                    type: null,
                    allowOutsideClick: !1,
                    showConfirmButton: !0,
                    showCancelButton: !1,
                    closeOnConfirm: !0,
                    closeOnCancel: !0,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#8CD4F5",
                    cancelButtonText: "Cancel",
                    imageUrl: null,
                    imageSize: null,
                    timer: null,
                    customClass: "",
                    html: !1,
                    animation: !0,
                    allowEscapeKey: !0,
                    inputType: "text",
                    inputPlaceholder: "",
                    inputValue: "",
                    showLoaderOnConfirm: !1
                };
                n["default"] = o, t.exports = n["default"]
            }, {}],
            3: [function(t, n, o) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var a = t("./utils"),
                    r = (t("./handle-swal-dom"), t("./handle-dom")),
                    s = function(t, n, o) {
                        function s(e) {
                            m && n.confirmButtonColor && (p.style.backgroundColor = e)
                        }
                        var u, c, d, f = t || e.event,
                            p = f.target || f.srcElement,
                            m = -1 !== p.className.indexOf("confirm"),
                            v = -1 !== p.className.indexOf("sweet-overlay"),
                            y = r.hasClass(o, "visible"),
                            h = n.doneFunction && "true" === o.getAttribute("data-has-done-function");
                        switch (m && n.confirmButtonColor && (u = n.confirmButtonColor, c = a.colorLuminance(u, -.04), d = a.colorLuminance(u, -.14)), f.type) {
                            case "mouseover":
                                s(c);
                                break;
                            case "mouseout":
                                s(u);
                                break;
                            case "mousedown":
                                s(d);
                                break;
                            case "mouseup":
                                s(c);
                                break;
                            case "focus":
                                var b = o.querySelector("button.confirm"),
                                    g = o.querySelector("button.cancel");
                                m ? g.style.boxShadow = "none" : b.style.boxShadow = "none";
                                break;
                            case "click":
                                var w = o === p,
                                    C = r.isDescendant(o, p);
                                if (!w && !C && y && !n.allowOutsideClick) break;
                                m && h && y ? l(o, n) : h && y || v ? i(o, n) : r.isDescendant(o, p) && "BUTTON" === p.tagName && sweetAlert.close()
                        }
                    },
                    l = function(e, t) {
                        var n = !0;
                        r.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
                    },
                    i = function(e, t) {
                        var n = String(t.doneFunction).replace(/\s/g, ""),
                            o = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                        o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
                    };
                o["default"] = {
                    handleButton: s,
                    handleConfirm: l,
                    handleCancel: i
                }, n.exports = o["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            4: [function(n, o, a) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var r = function(e, t) {
                        return new RegExp(" " + t + " ").test(" " + e.className + " ")
                    },
                    s = function(e, t) {
                        r(e, t) || (e.className += " " + t)
                    },
                    l = function(e, t) {
                        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                        if (r(e, t)) {
                            for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                            e.className = n.replace(/^\s+|\s+$/g, "")
                        }
                    },
                    i = function(e) {
                        var n = t.createElement("div");
                        return n.appendChild(t.createTextNode(e)), n.innerHTML
                    },
                    u = function(e) {
                        e.style.opacity = "", e.style.display = "block"
                    },
                    c = function(e) {
                        if (e && !e.length) return u(e);
                        for (var t = 0; t < e.length; ++t) u(e[t])
                    },
                    d = function(e) {
                        e.style.opacity = "", e.style.display = "none"
                    },
                    f = function(e) {
                        if (e && !e.length) return d(e);
                        for (var t = 0; t < e.length; ++t) d(e[t])
                    },
                    p = function(e, t) {
                        for (var n = t.parentNode; null !== n;) {
                            if (n === e) return !0;
                            n = n.parentNode
                        }
                        return !1
                    },
                    m = function(e) {
                        e.style.left = "-9999px", e.style.display = "block";
                        var t, n = e.clientHeight;
                        return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
                    },
                    v = function(e, t) {
                        if (+e.style.opacity < 1) {
                            t = t || 16, e.style.opacity = 0, e.style.display = "block";
                            var n = +new Date,
                                o = function(e) {
                                    function t() {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                        return e.toString()
                                    }, t
                                }(function() {
                                    e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t)
                                });
                            o()
                        }
                        e.style.display = "block"
                    },
                    y = function(e, t) {
                        t = t || 16, e.style.opacity = 1;
                        var n = +new Date,
                            o = function(e) {
                                function t() {
                                    return e.apply(this, arguments)
                                }
                                return t.toString = function() {
                                    return e.toString()
                                }, t
                            }(function() {
                                e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none"
                            });
                        o()
                    },
                    h = function(n) {
                        if ("function" == typeof MouseEvent) {
                            var o = new MouseEvent("click", {
                                view: e,
                                bubbles: !1,
                                cancelable: !0
                            });
                            n.dispatchEvent(o)
                        } else if (t.createEvent) {
                            var a = t.createEvent("MouseEvents");
                            a.initEvent("click", !1, !1), n.dispatchEvent(a)
                        } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                    },
                    b = function(t) {
                        "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
                    };
                a.hasClass = r, a.addClass = s, a.removeClass = l, a.escapeHtml = i, a._show = u, a.show = c, a._hide = d, a.hide = f, a.isDescendant = p, a.getTopMargin = m, a.fadeIn = v, a.fadeOut = y, a.fireClick = h, a.stopEventPropagation = b
            }, {}],
            5: [function(t, o, a) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var r = t("./handle-dom"),
                    s = t("./handle-swal-dom"),
                    l = function(t, o, a) {
                        var l = t || e.event,
                            i = l.keyCode || l.which,
                            u = a.querySelector("button.confirm"),
                            c = a.querySelector("button.cancel"),
                            d = a.querySelectorAll("button[tabindex]");
                        if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                            for (var f = l.target || l.srcElement, p = -1, m = 0; m < d.length; m++)
                                if (f === d[m]) {
                                    p = m;
                                    break
                                }
                            9 === i ? (f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1], r.stopEventPropagation(l), f.focus(), o.confirmButtonColor && s.setFocusStyle(f, o.confirmButtonColor)) : 13 === i ? ("INPUT" === f.tagName && (f = u, u.focus()), f = -1 === p ? u : n) : 27 === i && o.allowEscapeKey === !0 ? (f = c, r.fireClick(f, l)) : f = n
                        }
                    };
                a["default"] = l, o.exports = a["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6
            }],
            6: [function(n, o, a) {
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                };
                Object.defineProperty(a, "__esModule", {
                    value: !0
                });
                var s = n("./utils"),
                    l = n("./handle-dom"),
                    i = n("./default-params"),
                    u = r(i),
                    c = n("./injected-html"),
                    d = r(c),
                    f = ".sweet-alert",
                    p = ".sweet-overlay",
                    m = function() {
                        var e = t.createElement("div");
                        for (e.innerHTML = d["default"]; e.firstChild;) t.body.appendChild(e.firstChild)
                    },
                    v = function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        }, t
                    }(function() {
                        var e = t.querySelector(f);
                        return e || (m(), e = v()), e
                    }),
                    y = function() {
                        var e = v();
                        return e ? e.querySelector("input") : void 0
                    },
                    h = function() {
                        return t.querySelector(p)
                    },
                    b = function(e, t) {
                        var n = s.hexToRgb(t);
                        e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                    },
                    g = function(n) {
                        var o = v();
                        l.fadeIn(h(), 10), l.show(o), l.addClass(o, "showSweetAlert"), l.removeClass(o, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
                        var a = o.querySelector("button.confirm");
                        a.focus(), setTimeout(function() {
                            l.addClass(o, "visible")
                        }, 500);
                        var r = o.getAttribute("data-timer");
                        if ("null" !== r && "" !== r) {
                            var s = n;
                            o.timeout = setTimeout(function() {
                                var e = (s || null) && "true" === o.getAttribute("data-has-done-function");
                                e ? s(null) : sweetAlert.close()
                            }, r)
                        }
                    },
                    w = function() {
                        var e = v(),
                            t = y();
                        l.removeClass(e, "show-input"), t.value = u["default"].inputValue, t.setAttribute("type", u["default"].inputType), t.setAttribute("placeholder", u["default"].inputPlaceholder), C()
                    },
                    C = function(e) {
                        if (e && 13 === e.keyCode) return !1;
                        var t = v(),
                            n = t.querySelector(".sa-input-error");
                        l.removeClass(n, "show");
                        var o = t.querySelector(".sa-error-container");
                        l.removeClass(o, "show")
                    },
                    S = function() {
                        var e = v();
                        e.style.marginTop = l.getTopMargin(v())
                    };
                a.sweetAlertInitialize = m, a.getModal = v, a.getOverlay = h, a.getInput = y, a.setFocusStyle = b, a.openModal = g, a.resetInput = w, a.resetInputError = C, a.fixVerticalPosition = S
            }, {
                "./default-params": 2,
                "./handle-dom": 4,
                "./injected-html": 7,
                "./utils": 9
            }],
            7: [function(e, t, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var o = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
                n["default"] = o, t.exports = n["default"]
            }, {}],
            8: [function(e, t, o) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var a = e("./utils"),
                    r = e("./handle-swal-dom"),
                    s = e("./handle-dom"),
                    l = ["error", "warning", "info", "success", "input", "prompt"],
                    i = function(e) {
                        var t = r.getModal(),
                            o = t.querySelector("h2"),
                            i = t.querySelector("p"),
                            u = t.querySelector("button.cancel"),
                            c = t.querySelector("button.confirm");
                        if (o.innerHTML = e.html ? e.title : s.escapeHtml(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : s.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && s.show(i), e.customClass) s.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
                        else {
                            var d = t.getAttribute("data-custom-class");
                            s.removeClass(t, d), t.setAttribute("data-custom-class", "")
                        }
                        if (s.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
                            var f = function() {
                                for (var o = !1, a = 0; a < l.length; a++)
                                    if (e.type === l[a]) {
                                        o = !0;
                                        break
                                    }
                                if (!o) return logStr("Unknown alert type: " + e.type), {
                                    v: !1
                                };
                                var i = ["success", "error", "warning", "info"],
                                    u = n; - 1 !== i.indexOf(e.type) && (u = t.querySelector(".sa-icon.sa-" + e.type), s.show(u));
                                var c = r.getInput();
                                switch (e.type) {
                                    case "success":
                                        s.addClass(u, "animate"), s.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), s.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                                        break;
                                    case "error":
                                        s.addClass(u, "animateErrorIcon"), s.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                                        break;
                                    case "warning":
                                        s.addClass(u, "pulseWarning"), s.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), s.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                                        break;
                                    case "input":
                                    case "prompt":
                                        c.setAttribute("type", e.inputType), c.value = e.inputValue, c.setAttribute("placeholder", e.inputPlaceholder), s.addClass(t, "show-input"), setTimeout(function() {
                                            c.focus(), c.addEventListener("keyup", swal.resetInputError)
                                        }, 400)
                                }
                            }();
                            if ("object" == typeof f) return f.v
                        }
                        if (e.imageUrl) {
                            var p = t.querySelector(".sa-icon.sa-custom");
                            p.style.backgroundImage = "url(" + e.imageUrl + ")", s.show(p);
                            var m = 80,
                                v = 80;
                            if (e.imageSize) {
                                var y = e.imageSize.toString().split("x"),
                                    h = y[0],
                                    b = y[1];
                                h && b ? (m = h, v = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                            }
                            p.setAttribute("style", p.getAttribute("style") + "width:" + m + "px; height:" + v + "px")
                        }
                        t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? u.style.display = "inline-block" : s.hide(u), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? c.style.display = "inline-block" : s.hide(c), e.cancelButtonText && (u.innerHTML = s.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (c.innerHTML = s.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (c.style.backgroundColor = e.confirmButtonColor, c.style.borderLeftColor = e.confirmLoadingButtonColor, c.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(c, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                        var g = e.doneFunction ? !0 : !1;
                        t.setAttribute("data-has-done-function", g), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
                    };
                o["default"] = i, t.exports = o["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            9: [function(t, n, o) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var a = function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    },
                    r = function(e) {
                        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
                    },
                    s = function() {
                        return e.attachEvent && !e.addEventListener
                    },
                    l = function(t) {
                        e.console && e.console.log("SweetAlert: " + t)
                    },
                    i = function(e, t) {
                        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                        var n, o, a = "#";
                        for (o = 0; 3 > o; o++) n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
                        return a
                    };
                o.extend = a, o.hexToRgb = r, o.isIE8 = s, o.logStr = l, o.colorLuminance = i
            }, {}]
        }, {}, [1]), "function" == typeof define && define.amd ? define(function() {
            return sweetAlert
        }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
    }(window, document);

    function onResize() {
        var h = window.outerHeight;
        var w = h * 1.348;
        var z = 77;
        if (navigator.platform.indexOf("Win") != -1) {
            z = 73.5;
        }
        if (navigator.platform.indexOf("Mac") != -1) {
            z = 73;
        }
        z = (Math.round((z * h) * 10) / 10000) + '%';
        window.resizeTo(w, h);
        document.querySelector('body').style.zoom = z;
    }

    function SetSimpleUI() {
        //    var h = sessionStorage.getItem('head');
        //    var b = sessionStorage.getItem('body');
        //    document.head.innerHTML = h;
        //    document.body.innerHTML = b;
        var headID = document.getElementsByTagName("head")[0];
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = 'https://sanitizebot.github.io/css/app.css';
    cssNode.media = 'screen';
    headID.appendChild(cssNode);
    cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = 'https://sanitizebot.github.io/css/sweetalert.css';
    cssNode.media = 'screen';
    headID.appendChild(cssNode);
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://sanitizebot.github.io/js/app.js';
    document.head.appendChild(newScript);
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://sanitizebot.github.io/js/ui2.js';
    document.head.appendChild(newScript);
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'https://sanitizebot.github.io/js/sweetalert.min.js';
    document.head.appendChild(newScript);
    }

    function SetStandUI() {
        function SetUI() {
            var h = '<title>NaughtyBot 1.4.2</title><link rel="icon"href="https://SanitizeBot.github.io/images/NBot.png" type="image/x-icon"/><style></style>';
            var b = '<header role="banner"> <h2 id="CurrentInfos">Account Informations: <span id="DivAccountName"></span> ID: <span id="DivAccountId"></span> | <span id="DivCookie" onclick="ShowCookie();">Clic Me to show cookie in console</span></h2></header> <div class="div" id="gen"> <div id="BigBox"> <div class="container" id="playRoom"> <div class="container" id="Infos" style="width: 1093px;"><div id="HelpMe"></div><div id="INFOS"> <div class="textInfos"> <p class="textI2">Balance:</p><p class="textI2">Bet count:</p><p class="textI2">Profit:</p><p class="textI2">Wins:</p></div></div><div id="BTC"> <div class="opacity"> <div class="statsInfos" onclick="UpDeposit(&apos;btc&apos;)"> <p class="AccountStats" id="DivBtcBalance">NaN</p><p class="AccountStats" id="DivBtcBetCount">NaN</p><p class="AccountStats" id="DivBtcProfit">NaN</p><p class="AccountStats" id="DivBtcWin100">NaN%</p></div></div></div><div id="DOGE"> <div class="opacity"> <div class="statsInfos" onclick="UpDeposit(&apos;doge&apos;)"> <p class="AccountStats" id="DivDogeBalance">NaN</p><p class="AccountStats" id="DivDogeBetCount">NaN</p><p class="AccountStats" id="DivDogeProfit">NaN</p><p class="AccountStats" id="DivDogeWin100">NaN%</p></div></div></div><div id="LTC"> <div class="opacity"> <div class="statsInfos" onclick="UpDeposit(&apos;ltc&apos;)"> <p class="AccountStats" id="DivLtcBalance">NaN</p><p class="AccountStats" id="DivLtcBetCount">NaN</p><p class="AccountStats" id="DivLtcProfit">NaN</p><p class="AccountStats" id="DivLtcWin100">NaN%</p></div></div></div></div><div class="container" id="box"> <div class="box" id="minibox"> <div class="opacity2"> <div id="Settings"> <div class="container" id="connectDiv"> <h4 style="position: relative; width: 100%; top: -40px; left: 47px">999dice Account Login</h4> <div class="textI" style="margin-top: -50px"> <p style="top: 10px;">UserName:</p><p style="top: 55px;">Password:</p><p style="top: 100px;">Google OAuth 2FA:</p><p id="PassVerTxt" style="top: 1145px;">Password Verifier:</p></div><div class="InputDiv"> <input type="text" class="CInput" id="LoginVar" style="top: -180px;" autofocus=""> <br><input type="password" class="CInput" id="PasswordVar" style="top: -95px;"> <br><input type="text" class="CInput" id="2FAVar" style="top: -10px;"> <br><input type="password" class="CInput" id="PassVer" onkeyup="PassMe()" onkeydown="PassMe()" style="top: 1075px"> <br></div><button id="Connect" onclick="Connect();">Connect</button> <button id="NewAccount" onclick="CreateNewAccount();" style="position: absolute; top: 400px; left: 100px; width: 251px">New Account</button><span id="DivLoginStatut"></span></div><div class="container" id="Choice" style="width: 1093px; left: -300px;"> <h4> Time To Make A Choice</h4> <div class="container" id="Single" onclick="LoadSingle()"> <h5> Single </h5></div><div class="container" id="Auto" onclick="LoadAuto()"> <h5> Automatic </h5></div><div class="container" id="System" onclick="LoadSystem()"> <h5> Labouchère </h5></div></div><div class="container" id="SinglePlay"> <h4 style="position: relative; width: 900px; top: -60px; left: 97px">Single Play Mode</h4> <img class="LeftArrow" src="https://thc.pologtijaune.pf/~TahitiBot/images/RedArrow.png" onclick="if (Pl===0){TestSystem()}"> <img class="RightArrow" src="https://thc.pologtijaune.pf/~TahitiBot/images/RedArrow.png" onclick="if (Pl===0){TestAuto()}"> <p class="SingleText" style="top: 50px">Custom Bet Size:</p><p class="SingleText" style="top: 50px; left: 810px">LastBetStop</p><p class="SingleText" style="top: 110px">% Win:</p><p class="SingleText" style="top: 110px; left: 298px;">First Bet:</p><p class="SingleText" style="top: 110px; left: 520px;">Swap:</p><p class="SingleText" style="top: 170px;">PlayOnLoss:</p><p class="SingleText" style="top: 170px; left:298px">PlayOnWin:</p><p class="SingleText" style="top: 230px">Multiplier List:</p><p class="SingleText" style="top: 230px; left: 514px">on/off</p><p class="SingleText" style="top: 230px; left: 704px">L2C%: </p><p class="SingleText" style="top: 290px">High/Low Pattern:</p><p class="SingleText" style="top: 350px">% Win Pattern:</p><p class="SingleText" style="top: 410px; left: 504px">AW:</p><input class="SingleInput" id="BetSizeVar" type="text" style="top: 70px; left: 240px; width: 480px;"> <select class="OptionInputSound" id="BetFormat" onchange="UpFormat(this.value)"> <option value="Satoshi" class="List">Satoshi</option> <option value="BTC" class="List">BTC</option> </select> <input class="SingleInput" id="FinalBetStopVar" type="checkbox" style="top: 70px; left: 1032px; width: 40px; text-align: center"> <input class="SingleInput" id="OddVar" type="number" min="5" max="95" step="5" placeholder="5 to 95" style="width: 100px ;top: 130px; left:240px"> <select id="HighLowVar" style="top: 130px; left: 542px; width: 104px"> <option value="Low" class="List">Low</option> <option value="High" class="List">High</option> </select> <select id="ChangeVar" style="width:323px; top: 130px; left: 750px;"> <option value="Same" class="List">Same</option> <option value="ChangeAfterWin" class="List">After 1 Win</option> <option value="ChangeAfterLoss" class="List">After 1 Loss</option> <option value="AlmostChange" class="List">Each Bet</option> <option value="Random" class="List">Randomizer</option> <option value="SantaRandom" class="List">SantaRandomizer</option> <option value="Pattern" class="List">Pattern</option> </select> <input class="SingleInput" id="RepeatLosseVar" type="number" value="1" min="1" max="20" style="width: 100px ;top: 190px; left:240px"> <input class="SingleInput" id="RepeatWinVar" type="number" value="1" min="1" max="20" style="width: 100px ;top: 190px; left:542px"> <input class="SingleInput" id="BetXVar" type="text" style="top: 250px; left: 240px; width: 402px"> <input class="SingleInput" id="MultiSwitchVar" type="checkbox" style="top: 250px; left: 770px; width: 40px; text-align: center"> <input class="SingleInput" id="T2CVar" type="text" style="width: 120px ;top: 250px; left:950px"> <input class="SingleInput" id="BetPatVar" type="text" style="top: 310px; left: 240px; width: 402px"> <input class="SingleInput" id="BetWinVar" type="text" style="top: 370px; left: 240px; width: 402px"> <select id="CryptoVar" onchange="UpdateAddy(this.value,&apos;AutoWithdrawVar&apos;)" style="top: 430px; left: 527px; width: 130px; text-align: center;"> <option value="Empty" class="List">COIN?</option> <option value="BTC" class="List">BTC</option> <option value="DOGE" class="List">DOGE</option> <option value="LTC" class="List">LTC</option> </select> <select id="AutoWithdrawVar" onchange="SetAW(document.getElementById(&apos;CryptoVar&apos;).value);" style="top: 430px; left: 730px; width: 260px;"> </select> <input class="SingleInput" id="AW100" type="number" min="10" max="150" value="100" step="25" style="text-align: center; width: 70px ;top: 430px; left:1000px;"> </div><div class="container" id="AutoPlay"> <h4 style="position: relative; width: 900px; top: -60px; left: 97px">Automatic Betting Play Mode</h4> <img class="LeftArrow" src="https://thc.pologtijaune.pf/~TahitiBot/images/RedArrow.png" onclick="if (Pl===0){TestSingle()}"> <img class="RightArrow" src="https://thc.pologtijaune.pf/~TahitiBot/images/RedArrow.png" onclick="if (Pl===0){TestSystem()}"> <p class="SingleText" style="top: 50px">Custom Bet Size:</p><p class="SingleText" style="top: 50px; left: 795px">LastBetStop</p><p class="SingleText" style="top: 110px">% Win:</p><p class="SingleText" id="TextOnWin" style="top: 110px; left: 320px;">ResetOnWin:</p><p class="SingleText" id="TextOnLosse" style="top: 110px; left: 645px;">ResetOnLoss:</p><p class="SingleText" style="top: 170px">First Bet:</p><p class="SingleText" style="top: 170px; left: 235px;">Swap:</p><div id="SwapOption" style="position: absolute; width: 200px; top: 190px; left: 752px;"></div><p class="SingleText" style="top: 230px">Max Bet Size:</p><p class="SingleText" style="top: 230px; left: 516px;">Stop</p><p class="SingleText" style="top: 230px; left: 658px;">Reset</p><p class="SingleText" style="top: 230px; left: 800px;">Multi</p><p class="SingleText" style="top: 290px">Bet Stop Loss:</p><p class="SingleText" style="top: 290px; left: 445px">Bet Stop Profit:</p><p class="SingleText" style="top: 290px; left: 800px;">Multi</p><p class="SingleText" style="top: 350px">Multiplier List:</p><p class="SingleText" style="top: 350px; left: 534px">on/off</p><p class="SingleText" style="top: 350px; left: 714px">L2C%: </p><p class="SingleText" style="top: 410px;">Replay if Profit=0</p><p class="SingleText" style="top: 410px; left: 200px;">NumBets:</p><p class="SingleText" style="top: 410px; left: 504px">AW:</p><input class="SingleInput" id="ABBetSize" autocomplete="on" type="text" style="top: 70px; left: 240px; width: 480px"> <select class="OptionInputSound" id="ABBetFormat" onchange="UpFormat(this.value)" style="top: -113px; left: 724px; width: 125px;font-size: 200%;"> <option value="Satoshi" class="List">Satoshi</option> <option value="BTC" class="List">BTC</option> </select> <input class="SingleInput" id="ABFinalBetStop" type="checkbox" style="top: 70px; left: 1032px; width: 40px; text-align: center"> <input class="SingleInput" id="ABOdd" type="text" placeholder="5 to 95" style="width: 90px ;top: 130px; left:240px"> <select id="ABHighLow" style="top: 190px; left: 240px; width: 130px"> <option value="Low" class="List">Low</option> <option value="High" class="List">High</option> <option value="Midle" class="List">Midle</option> <option value="Random" class="List">Random</option> </select> <select id="ABChange" onchange="showSwapO(this.value)" style="width: 260px; top: 190px; left: 470px;"> <option value="Same" class="List">Same</option> <option value="ChangeAfterWin" class="List">After 1 Win</option> <option value="ChangeAfterLoss" class="List">After 1 Loss</option> <option value="AlmostChange" class="List">Each Bet</option> <option value="Random" class="List">Randomizer</option> <option value="SantaRandom" class="List">Santa Randomizer</option> <option value="Repeat" class="List">Repeat W/L Before</option> <option value="Slide" class="List">Sliding Chance</option> <option value="Pattern" class="List">Pattern</option> </select> <input class="SingleInput" id="R2bbCheckWin" type="checkbox" onchange="showHide(document.getElementById(&apos;R2bbCheckWin&apos;),&apos;R2bbWin&apos;,&apos;TextOnWin&apos;)" style="top: 130px; left: 545px; width: 40px; text-align: center" checked=""> <input class="SingleInput" id="R2bbWin" type="text" placeholder="^%^" style="text-align: center; width: 70px; top: 130px; left:590px; display: none;"> <input class="SingleInput" id="R2bbCheckLosse" type="checkbox" onchange="showHide(document.getElementById(&apos;R2bbCheckLosse&apos;),&apos;R2bbLoss&apos;,&apos;TextOnLosse&apos;)" style="top: 130px; left: 870px; width: 40px; text-align: center" checked=""> <input class="SingleInput" id="R2bbLoss" type="text" placeholder="^%^" style="text-align: center; width: 70px; top: 130px; left: 915px; display: none;"> <input class="SingleInput" id="MaxPayIn" type="text" style="width: 416px; top: 250px; left: 240px;"> <input class="SingleInput" id="StopAfter" type="checkbox" style="top: 250px; left: 748px; width: 40px; text-align: center"> <input class="SingleInput" id="Reset2BB" type="checkbox" style="top: 250px; left: 890px; width: 40px; text-align: center"> <input class="SingleInput" id="MultiMax" type="checkbox" style="top: 250px; left: 1032px; width: 40px; text-align: center" checked=""> <input class="SingleInput" id="StopMaxBalance" type="text" style="width: 240px; top: 310px; left: 240px;"> <input class="SingleInput" id="StopMinBalance" type="text" style="width: 240px; top: 310px; left: 669px;"> <input class="SingleInput" id="MultiStop" type="checkbox" style="top: 310px; left: 1032px; width: 40px; text-align: center" checked=""> <input class="SingleInput" id="ABBetX" type="text" style="width: 416px; top: 370px; left: 240px;"> <input class="SingleInput" id="ABMultiSwitch" type="checkbox" style="top: 370px; left: 770px; width: 40px; text-align: center"> <input class="SingleInput" id="ABL2C" type="text" placeholder="%" value="100" style="text-align: center; width: 120px ;top: 370px; left:950px"> <input class="SingleInput" id="ReplayProfit" type="checkbox" style="top: 430px; left: 235px; width: 40px; text-align: center" checked=""> <input class="SingleInput" id="ABRoundVar" type="text" style="width: 60px ;top: 430px; left: 437px; text-align: center;"> <select id="ABCrypto" onchange="UpdateAddy(this.value,&apos;ABAutoWithdrawVar&apos;)" style="top: 430px; left: 527px; width: 130px; text-align: center;"> <option value="Empty" class="List">COIN?</option> <option value="BTC" class="List">BTC</option> <option value="DOGE" class="List">DOGE</option> <option value="LTC" class="List">LTC</option> </select> <select id="ABAutoWithdrawVar" onchange="SetAW(document.getElementById(&apos;ABCrypto&apos;).value);" style="top: 430px; left: 730px; width: 260px;"> </select> <input class="SingleInput" id="ABAW100" type="number" min="10" max="150" value="100" step="25" style="text-align: center; width: 70px ;top: 430px; left:1000px;"> </div><div id="SystemPlay"> <h4 style="position: relative; width: 900px; top: -60px; left: 97px">Labouchère Under Construction</h4> <img class="LeftArrow" src="https://thc.pologtijaune.pf/~TahitiBot/images/RedArrow.png" onclick="if (Pl===0){TestAuto()}"> <img class="RightArrow" src="https://thc.pologtijaune.pf/~TahitiBot/images/RedArrow.png" onclick="if (Pl===0){TestSingle()}"> <p class="SingleText" style="top: 50px">Custom Bet Size:</p><p class="SingleText" style="top: 110px">% Win:</p><p class="SingleText" style="top: 110px; left: 280px;">First Bet:</p><p class="SingleText" style="top: 110px; left: 560px;">Swap:</p><p class="SingleText" style="top: 170px">Multiplier List: </p><p class="SingleText" style="top: 170px; left: 716px">L2C%: </p><p class="SingleText" style="top: 230px;">Stop Profit Reset:</p><p class="SingleText" style="top: 230px; left: 450px;">Stop Loss Reset:</p><p class="SingleText" style="top: 230px; left: 800px;">Multi</p><p class="SingleText" style="top: 290px;">reverse:</p><p class="SingleText" style="top: 410px; left: 504px">AW:</p><input class="SingleInput" id="SysBetSizeVar" autocomplete="on" type="text" style="top: 70px; left: 240px; width: 480px"> <select class="OptionInputSound" id="SysBetFormat" onchange="UpFormat(this.value)" style="top: -113px; left: 724px; width: 125px;font-size: 200%;"> <option value="Satoshi" class="List">Satoshi</option> <option value="BTC" class="List">BTC</option> </select> <input class="SingleInput" id="SysOddVar" type="text" placeholder="5 to 95" style="width: 90px ;top: 130px; left:240px"> <select id="SysHighLowVar" style="top: 130px; left: 520px; width: 130px"> <option value="Low" class="List">Low</option> <option value="High" class="List">High</option> <option value="Midle" class="List">Midle</option> <option value="Random" class="List">Random</option> </select> <select id="SysChangeVar" style="width: 275px; top: 130px; left: 800px;"> <option value="Same" class="List">Same</option> <option value="ChangeAfterWin" class="List">After 1 Win</option> <option value="ChangeAfterLoss" class="List">After 1 Loss</option> <option value="AlmostChange" class="List">Each Bet</option> <option value="Random" class="List">Randomizer</option> <option value="SantaRandom" class="List">Santa Random</option> </select> <input class="SingleInput" id="SysBetXVar" autocomplete="on" type="text" style="top: 190px; left: 240px; width: 600px"> <input class="SingleInput" id="SysL2CVar" type="text" placeholder="%" value="100" style="text-align: center; width: 120px ;top: 190px; left:955px"> <input class="SingleInput" id="SysStopWinAmount" autocomplete="on" type="text" style="top: 250px; left: 240px; width: 200px"> <input class="SingleInput" id="SysStopLosseAmount" autocomplete="on" type="text" style="top: 250px; left: 690px; width: 200px"> <input class="SingleInput" id="XMulti" type="checkbox" style="top: 250px; left: 1032px; width: 40px; text-align: center" checked=""> <input class="SingleInput" id="SysLabInvert" type="checkbox" style="top: 310px; left: 240px; width: 40px; text-align: center" checked=""> <select id="SysCrypto" onchange="UpdateAddy(this.value,&apos;SysAutoWithdrawVar&apos;)" style="top: 430px; left: 527px; width: 130px; text-align: center;"> <option value="Empty" class="List">COIN?</option> <option value="BTC" class="List">BTC</option> <option value="DOGE" class="List">DOGE</option> <option value="LTC" class="List">LTC</option> </select> <select id="SysAutoWithdrawVar" onchange="SetAW(document.getElementById(&apos;SysCrypto&apos;).value);" style="top: 430px; left: 730px; width: 260px;"> </select> <input class="SingleInput" id="SysAW100" type="number" min="10" max="150" value="100" step="25" style="text-align: center; width: 70px ;top: 430px; left:1000px;"> </div><div id="MultiPlay"></div><div id="HelpMask" style="display: none;"></div></div><div id="Buttons"> <div id="PlayB"> <div style="height: 80px; margin-top: -10px;"> <p><span class="Message" id="DivMessage">Welcome to 999dice CasinoGamble only what you are ready to loose</span></p></div><button class="playButton" id="ButtonStart" onclick="PauseStart(&apos;Single&apos;)" style="width: 75px;">Start</button> <button class="playButton" id="StopWinButton" onclick="StopAfterWin();" style="width: 88px;">StopW</button> <button class="playButtonS" id="HButton" onclick="Hbet();">H</button> <button class="playButtonS" id="MButton" onclick="Mbet();">M</button> <button class="playButtonS" id="RButton" onclick="Rbet();">R</button> <button class="playButtonS" id="LButton" onclick="Lbet();">L</button> <button class="playButton" id="BetOnceButton">BetOnce</button> <button class="playButton" id="B2BbButton" onclick="Back2BB()">Back2BB</button> </div><div id="PlayB2"> <button class="playButton2" id="InjectButton">InjectSettings</button> <button class="playButton2" id="SaveButton">Save</button> <button class="playButton2" id="LoadButton">Load</button> <br><span style="position: relative; color: rgb(127, 174, 215); font-size: 140%; width: 66%; left: 30px; margin-bottom: 10px;">Slot Save Name</span><span style="position: relative; color: rgb(127, 174, 215); font-size: 140%; width: 34%; left: 283px; margin-bottom: 10px;">Slots</span> <br><input type="text" id="SlotName" style="position: relative; width: 320px; font-size: 140%; height: 35px; margin-top: 5px; margin-left: 10px; float: left; left: 20px; display: inline-block; background-color: rgba(0, 0, 0, 0.1); color: rgba(254, 249, 108, 0.8)"> <select class="SlotList" id="Slot"></select> </div></div><div class="container" id="Results"><div class="RHead" id="RHSingle"><span class="ResultsHead" style="width: 60px">Type</span><span class="ResultsHead" style="width: 204px">Bet ID</span><span class="ResultsHead" style="width: 84px">SN/MC</span><span class="ResultsHead" style="width: 34px">HL</span><span class="ResultsHead" style="width: 84px">Seed</span><span class="ResultsHead" style="width: 204px; border-right-style: none;">Profit</span></div><div id="FullResults"></div><div class="container" id="LogPanel"></div><img id="Clean" src="https://thc.pologtijaune.pf/~TahitiBot/images/clean.png" onclick="document.getElementById(&apos;FullResults&apos;).innerHTML = &apos;&apos;;document.getElementById(&apos;LogPanel&apos;).innerHTML = &apos;&apos;;"></div></div></div></div></div><div id="Stats" style="display: none;"> <div style="width: 150px; position: absolute; top: 10px; height: 805px;"> <p class="StatsText" style="margin-top: 10px">Start Time:</p><p class="StatsText">Last Bet:</p><p class="StatsText" onclick="ProfitGlobal=0;">Profit:</p><p class="StatsText">Wagered:</p><p class="StatsText">Temp Bal:</p><p class="StatsText">Loss2Cover:</p><p class="StatsText">Max Loss:</p><p class="StatsText">Bets:</p><p class="StatsText">MaxSwins:</p><p class="StatsText">SCount:</p><p class="StatsText">Doh!</p><p class="StatsText">Craaaap!!!</p><p class="StatsText">Multi:</p><p class="StatsText">AWBal:</p><p class="StatsText">AWProfit:</p><p class="StatsText">SysBetList:</p></div><div style="position: absolute; width:448px; height: 805px; left:150px; top:10px; "> <p class="StatsTextResults" style="margin-top: 10px;"><span id="DivStartDate">|NaN |</span></p><p class="StatsTextResults"><span id="DivLast">|NaN |</span></p><p class="StatsTextResults"><span id="DivLast3">|NaN |</span></p><p class="StatsTextResults"><span id="DivWagered">|NaN |</span></p><p class="StatsTextResults"><span id="DivTempBalance">|NaN |</span></p><p class="StatsTextResults"><span id="DivLosse2Cover">|NaN |</span></p><p class="StatsTextResults"><span id="DivMaxBetLosse">|NaN |</span></p><p class="StatsTextResults"><span id="DivBetNum" style="color: gold;">000000</span> |<span id="DivBetWin" style="color: green;">00000</span> |<span id="DivBetLost" style="color: red;">00000</span> |<span id="DivOdd">00.000</span>%</p><p class="StatsTextResults2"><span id="DivStreakWins">|NaN |</span></p><div class="StatBox"> <div style="position: absolute; width: 298px; height: 150px; left: 150px;"> <p class="StatsText">MaxSLoss:</p><p class="StatsText">SAverage:</p><p class="StatsTextResults2" style="width: 278px;"><span id="DivLastBreak">|NaN |</span></p><p class="StatsTextResults2" style="width: 278px;"><span id="DivLastBigBreak">|NaN |</span></p></div><div style="position: absolute; width: 140px; height: 70px; left:298px; "> <p class="StatsTextResults2" style="margin-left: 0px; width: 140px;"><span id="DivStreakLosses">1/1</span></p><p class="StatsTextResults2" style="margin-left: 0px; width: 140px;"><span id="DivSecretAverage" style="color: rgb(0, 255, 255);">|NaN |</span></p></div></div><p class="StatsTextResults2"><span id="DivSecretCount">|NaN |</span></p><p class="StatsTextResults2"><span id="DivBreakCount">|NaN |</span></p><p class="StatsTextResults2"><span id="DivBigBreak">|NaN |</span></p><p class="StatsTextResults2" style="position: relative; width: 428px; text-align: left;"><span id="DivBetX" style="display: inline-block;">1/1</span></p><p class="StatsTextResults"><span id="DivAWGlobal">|NaN |</span></p><p class="StatsTextResults"><span id="DivAWProfit">|NaN |</span></p><div id="DivBetLength" style="position: absolute; margin-left: 10px; color: rgb(127, 174, 215); background-color: rgba(0,0,0,0.2); font-size: 160%;height: 194px; width: 428px; overflow: auto; word-wrap: break-word; text-overflow: ellipsis;">| NaN |</div><button class="LeftPanelButton" style="width: 120px; height: 80px;left: -130px; top: 110px;text-align: center; position: relative" onclick="NewStat();">Clear Stats</button></div><button class="LeftPanelButton" onclick="LoadSettings();" style="width: 140px">Settings</button> <button class="LeftPanelButton" style="left: 170px; text-align: center;" onclick="LoadHelp();">Help</button> <button class="LeftPanelButton" style="left: 310px; text-align: center;" onclick="LoadTools();">Tools</button> </div><div id="Tools" style="display: none;"> <div id="ToolsBox"> <p class="OptionTextTitle" style="width: auto;">Bet Generator/Injector</p><br><p class="OptionText" style="width: 110px">Base Bet:</p><input type="text" class="OptionInputSound" id="GenBB" style="top: -18px; width:255px"> <p class="OptionText" style="width: 80px">%:</p><input type="text" class="OptionInputSound" id="GenIncrease" style="top: -18px; width:50px; margin-left: 0px;"> <br><p class="OptionText" style="width: 110px">Stop:</p><input type="text" class="OptionInputSound" id="GenStop" style="top: -18px; width:255px"> <p class="OptionText" style="width: 80px">Streak:</p><input type="number" class="OptionInputSound" id="GenStreak" min="1" max="300" step="1" value="1" style="top: -18px; width:50px; margin-left: 0px;"> <br><p class="OptionText" style="width: 110px;">Injector: </p><select class="OptionInputSound" id="InjectorChoice" style="width: 255px; top: -18px; float: none;"> <option value="None" class="List">-||-_-||-</option> <option value="BetSize" class="List">Custom Bet Size</option> <option value="MaxBet" class="List">MaxBet Stop</option> <option value="Multi" class="List">Multiplier List</option> </select> <button class="LeftPanelButton" id="Generate" style="position: relative; top: 0px; float: right; right: 12px;" onclick="Generate();">Generate</button> <br><div class="RHead" id="GenHead" style="margin-left: 0px; float:left;"><span class="ResultsGenHead" style="width: 40px;">N</span><span class="ResultsGenHead" style="width: 134px">BetSize</span><span class="ResultsGenHead" style="width: 204px">Balance</span><span class="ResultsGenHead" style="width: 154px; border-right-style: none;">Profit</span></div><div class="Results" id="GenResults"></div><p class="OptionTextTitle" style="width: auto;">Import/Export Play Settings</p><br><div></div><textarea id="DataShare" cols="5"></textarea> <br><br><button class="LeftPanelButton" id="ImportGen" style="position: relative; left: 10%; margin-top: 15px; width: 30%;" onclick="ImportSet();">Import</button> <button class="LeftPanelButton" id="ExportGen" style="position: relative; left: 30%; width: 30%;" onclick="ExportSet();">Export</button> <p class="OptionTextTitle" style="width: auto;">Multi Addy Manager</p><br><p class="OptionText" style="width: 110px;">Name:</p><input type="text" class="OptionInputSound" id="AddyName" style="top: -18px; width:280px"> <select class="OptionInputSound" id="AddyCrypto" style="top: -18px; width: 120px"> <option value="Empty" class="List">COIN?</option> <option value="BTC" class="List">BTC</option> <option value="DOGE" class="List">DOGE</option> <option value="LTC" class="List">LTC</option> </select> <p class="OptionText" style="width: 110px;">Addy:</p><input type="text" class="OptionInputSound" id="AddyAddy" style="top: -18px; width:410px"> <br><button class="LeftPanelButton" id="AddyInject" onclick="AddyInject();" style="position: relative; top: 5px; left: 35%; width: 30%;">Inject</button> <p class="OptionTextTitle" style="width: auto;">Manual Withdraw</p><br><p class="OptionText" style="width: 110px">Currency:</p><select class="OptionInputSound" id="WithdrawCurrencyVar" onchange="UpdateAddy(this.value,&apos;MWAddy&apos;)" style="top: -18px; width: 410px"> <option value="Empty" class="List">COIN?</option> <option value="btc" class="List">btc</option> <option value="doge" class="List">doge</option> <option value="ltc" class="List">ltc</option> </select> <br><p class="OptionText" style="width: 110px">Addy:</p><select class="OptionInputSound" id="MWAddy" style="top: -18px; width: 410px"></select> <br><p class="OptionText" style="width: 110px">Amount:</p><input type="text" class="OptionInputSound" id="WithdrawAmountVar" style="top: -18px; width:410px"> <button class="LeftPanelButton" id="WithDraw" style="position: relative; top: 5px; left: 35%; width: 30%;" onclick="Withdraw();">Withdraw</button> <br><br><p class="OptionTextTitle" style="width: auto;">Addy Remover</p><br><p class="OptionText" style="width: 110px">Currency:</p><select class="OptionInputSound" id="AddyCryptoRemover" onchange="UpdateAddy(this.value,&apos;RAddy&apos;)" style="top: -18px; width: 410px"> <option value="Empty" class="List">COIN?</option> <option value="BTC" class="List">BTC</option> <option value="DOGE" class="List">DOGE</option> <option value="LTC" class="List">LTC</option> </select> <br><p class="OptionText" style="width: 110px">Addy:</p><select class="OptionInputSound" id="RAddy" style="top: -18px; width: 410px"></select> <br><button class="LeftPanelButton" id="AddyRemove" style="position: relative; top: 5px; left: 35%; width: 30%;" onclick="AddyRemove();UpdateAddy(document.getElementById(&apos;AddyCryptoRemover&apos;).value, &apos;RAddy&apos;);">Remove</button> <br><br><p class="OptionTextTitle" style="width: auto;">Debug data</p><br><input type="text" id="DebugData"> <br><p class="OptionText" style="width: 65px; margin-left: 10px;">on/off</p><input type="checkbox" class="OptionCheck" id="Debug" onchange="debugSwitch(this.checked);"> <button class="LeftPanelButton" id="DebugMe" onclick="debugMe(&apos;var&apos;)" style="position: relative; left: 50px; width: 35%; top: -10px" onclick="Withdraw();">Debug Data</button> <button class="LeftPanelButton" id="CopyData" onclick="clip(&apos;debug&apos;)" style="position: relative; top: -10px; left: 100px; width: 18%;">Copy</button></div><button class="LeftPanelButton" id="LoadStats" style="left: 10px;" onclick="LoadStats();">Stats</button> <button class="LeftPanelButton" onclick="LoadSettings();" style="width: 140px">Settings</button> <button class="LeftPanelButton" style="left: 170px; text-align: center;" onclick="LoadHelp();">Help</button> </div><div id="GenSet" style="display: none;"> <div id="GenBox"> <p class="OptionTextTitle">Tooltips Translation</p><br><p class="OptionText" style="width: 250px">Available language:</p><p class="OptionText" style="width: 470px">Français - English - Indonesian - Русский</p><p class="OptionText" style="width: 470px">Український - Espanhol Português - 日本人</p><br><br><select class="OptionInputSound" id="LangChoice" onchange="langSwitch(this.value)" style="top: -18px; width: 300px; left: 200px;"> <option value="Empty" class="List">Turn Off</option> <option value="FR" class="List">Français</option> <option value="US" class="List">English</option> <option value="ID" class="List">Indonesian</option> <option value="RU" class="List">Русский</option> <option value="UK" class="List">Український</option> <option value="ES" class="List">Espanhol</option> <option value="PO" class="List">Português</option> <option value="JP" class="List">日本人</option> </select><br><p class="OptionTextTitle">Seed</p><p class="OptionText" style="width: 110px">Value:</p><input type="text" class="OptionInputSound" id="SeedVar" style="top: -20px; width:150px"> <p class="OptionText" style="width: 110px; margin-left: 40px;">Random</p><input type="checkbox" class="OptionCheck" id="SeedRandomCheck"> <p class="OptionTextTitle" style="width: auto;">Balance Stop Win/Loss</p><p class="OptionText" style="width: 350px">Maximum Balance Stop Amount:</p><br><br><input type="text" class="OptionAWInput" id="BalStopWin" value="0"> <br><p class="OptionText" style="width: 350px">Minimum Balance Stop Amount:</p><br><br><input type="text" class="OptionAWInput" id="BalStopLoss" value="0"> <p class="OptionTextTitle">AutoWithdraw</p><p class="OptionText">BTC Amount:</p><input type="text" class="OptionAWInput" id="AWBtcAmount" value="16000"> <p class="OptionText">DOGE Amount:</p><input type="text" class="OptionAWInput" id="AWDogeAmount" value="200000000"> <p class="OptionText">LTC Amount:</p><input type="text" class="OptionAWInput" id="AWLtcAmount" value="100000"> <p class="OptionTextTitle">Sound</p><p class="OptionTextSound">Craap!!</p><p class="OptionTextSound">Doh!!</p><p class="OptionTextSound">Covered</p><p class="OptionTextSound">Stop!</p><p class="OptionTextSound">Error</p><input type="number" min="0" max="100" step="5" class="OptionInputSound" id="LosseVolumeId" value="10"> <input type="number" min="0" max="100" step="5" class="OptionInputSound" id="BreakVolumeId" value="15"> <input type="number" min="0" max="100" step="5" class="OptionInputSound" id="CoverVolumeId" value="10"> <input type="number" min="0" max="100" step="5" class="OptionInputSound" id="StopVolumeId" value="30"> <input type="number" min="0" max="100" step="5" class="OptionInputSound" id="ErrVolumeId" value="40"> <br><p class="OptionTextTitle" style="width: auto;">Current/New Addy</p><br><p class="Addy" onclick="GetDepositAddy(&apos;btc&apos;)" style="width: 80px; border-style: solid; border-color: red;">BTC:</p><span class="OptionText" id="DivBtcAddy"></span> <br><p class="Addy" onclick="GetDepositAddy(&apos;doge&apos;)" style="width: 80px; border-style: solid; border-color: red;">DOGE:</p><span class="OptionText" id="DivDogeAddy"></span> <br><p class="Addy" onclick="GetDepositAddy(&apos;ltc&apos;)" style="width: 80px; border-style: solid; border-color: red;">LTC:</p><span class="OptionText" id="DivLtcAddy"></span> <br><p class="OptionTextTitle" style="width: auto;">Account Option</p><br><p class="OptionText" style="width: 130px; margin-left: 20px;">E-mail:</p><input type="email" class="OptionAWInput" id="Mail"> <br><p class="OptionText" style="width: 130px; margin-left: 20px;">Emergency:</p><input type="text" class="OptionAWInput" id="EAddy"> <br><br><br><button class="LeftPanelButton" id="UpdateMailAddy" style="width: 500px;left: 7%;position: relative;" onclick="UpEmail();">Update E-mail/Emergency Addy</button> <br><p class="OptionTextTitle" style="width: auto;">More Option</p><br><p class="OptionText" style="width: 210px; margin-left: 40px;">Server Connection</p><input type="checkbox" class="OptionCheck" id="ServerOn"> <button class="LeftPanelButton" id="Refresh" style="left: 70px;position: relative;top: -15px;" onclick="location.reload();">Reload</button> <br><p class="OptionText" style="width: 90%; margin-left: 40px;text-align: left;">If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message</p><p class="OptionText" style="width: 90%; text-align: left;margin-left: 40px;">If unchecked, the bot will use his local ressource only audio files will be downloaded from server</p><p class="OptionText" style="width: 90%; text-align: left;margin-left: 40px;">If server isnt online bot will automatically load local ressources...</p><br><br></div><button class="LeftPanelButton" style="left: 10px;" onclick="LoadStats();">Stats</button> <button class="LeftPanelButton" style="left: 170px; text-align: center;" onclick="LoadHelp();">Help</button> <button class="LeftPanelButton" style="left: 310px; text-align: center;" onclick="LoadTools();">Tools</button> <button class="LeftPanelButton" onclick="SaveSet(&apos;General&apos;);" style="width: 140px"> Set/Save </button> </div><div id="Help" style="display: inline-block;"><div id="HelpMe"></div><div id="ConnectHelp"> <p class="OptionTextTitle">Connection Help</p><p class="ConnectOptionText"><span class="OptionTextTitle" style="display: block; font-size: 100%; text-align: center; width: 555px;">Create New Account or Donate</span> Please Create an account with the bot and you ll be one of my referrals... <br><br>To create a new user set your UserName and Password and Clic "New Account"... <br><br>Or watch this weird video: <span class="Vids" onclick="OpenVid(&apos;BsjZkNnxjhw&apos;)">Create New User</span> <br><br><br>Donate to support my work: <br><br><span style="text-align: center;">BTC Addy 15p7EczB2QR5G9qHq8XTivzKRCCaqVNm5w</span> <br><br><span style="text-align: center;">DOGE Addy D7CZx5H1dJi5HFsyvsuqJkZTZXKhpD2xUy</span> <br><br><span style="text-align: center;">LTC Addy LLU4oSE8oUSLGsUg4nNYUyH17g7NuhMajk</span> <br><br><span class="OptionTextTitle" style="display: block; font-size: 100%; text-align: center; width: 555px;">Tooltips Translation</span> <br>Available language <br>Français - English - Indonesian - Русский<br>Український - Espanhol - Português - 日本人<br><br><select class="OptionInputSound" id="LangChoice2" onchange="langSwitch(this.value)" style="top: -18px; width: 300px; left: 200px;"> <option value="Empty" class="List">Turn Off</option> <option value="FR" class="List">Français</option> <option value="US" class="List">English</option> <option value="ID" class="List">Indonesian</option> <option value="RU" class="List">Русский</option> <option value="UK" class="List">Український</option> <option value="ES" class="List">Espanhol</option> <option value="PO" class="List">Português</option> <option value="JP" class="List">日本人</option> </select></p></div><div id="ChoiceHelp" style="display: none;"> <p class="OptionTextTitle">Choice Help</p><p class="ConnectOptionText"> <br>I think you dont need help for this section <br><br>you have to choose the way you want to play <br><br>A short video: <span class="Vids" onclick="OpenVid2(&apos;http://thc.pologtijaune.pf/~TahitiBot/vids/NBotOne.Panel.Overview.webm&apos;)">NBot Overview</span> <br><br><span class="HelpTitleTxt">1. Single</span> <br>Automated single betting <br><br><span class="HelpTitleTxt">2. Automatic</span> <br>Play Automatic betting with more options allowed by 999dice api... <br><br><span class="HelpTitleTxt">3. System</span> <br>Under Construction <br>Play Labouchère system <br></p></div><div id="SingleHelp"> <p class="OptionTextTitle">Single Bet Help</p><p class="ConnectOptionText" style="text-align: left; overflow: auto; margin-left: 2px; width: 100%">Infos: Satoshi format and % value 100=100% <br><br>video: <span class="Vids" onclick="OpenVid2(&apos;http://thc.pologtijaune.pf/~TahitiBot/vids/NBotOne.SingleBet.Simple.Martingale.webm&apos;)">A Simple Martingale</span> <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(70);">1. Custom Bet Size Line</span> <br><br>- Custom Bet Size: list of value separate by "," coma. each value is a bet size. <br>- X: is the multiplicator to reach the right amount for your bets list. <br>- LastBetStop: if you want to stop the bot betting when it will lost the last bet in the list then check the StopLastBet checkbox. if Multi is enable then it will stop if loosing the LastCustomBet(in thelist) X Multi X LastMulti(in thelist). <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(130);">2. % Win Odd/FirstBet/Swap</span> <br><br>- % Win: Possible value 5% to 95%. <br>- FirstBet: is Low or High <br>- Swap: Choose how the bot should swap between Lor or High. Same: wont swap <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(190);">3.Repeat Losse/Win/AW/AW%</span> <br><br>- Repeat a bet if Loss <br>- Repeat a bet if Win <br>It will repeat as many time as set by user. Default value is 1=doesnt repeat. Must be an integer over 1. <br>- AW: AutoWithdraw - if true Autowithdraw is enable. <br>- AW%: set % amount you want to autowithdraw/reinvest reaching the right profit set in General Settings. you should set your addy there too for each crypto. Cannot be negative. <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(250);">4.Multiplier List/Multi/T2C</span> <br><br>- Multiplier List: Will be use to multiply a loosing system by value in the list separate by ",". <br>- Multi checkbox: to enable the Multiplier List. <br>- L2C%: Loss to Cover - to set the % of your loss that you want to cover when your system get a break. if loss are covered then bot will reset to base bet and base multi. <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(310);">5. High/Low Pattern</span> <br><br>Enable it with Swap=patern <br>Another list to fix your High/Low bets the list should have the same number of value as the Custom Bet Size list. and you have to set it with 3 differents value 0=Low, 1=High, and other values=random. As example you should set it like that 1,0,1,0,4,0,1...=High, Low, High, Low, Random, Low, High... <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(370);">6.%Win Pattern and Crypto choice</span> <br><br>% Win Pattern works as High/Low Pattern. Enable it with swap=Pattern. As to be same number value in the list as Custom Bet Size list. <br><br>Now if you are ready and you thing everything is set correctly then hit the "InjectSettings" button to inject your options. If something wrong in your options the bot will show a message for your mistake... if everything is alright you ll see a message too and then you ll be able to start the bot by clicking the "Start" Button. <br><br><button onclick="LoadExample(&apos;S1&apos;);" style="font-size: 100%">Simple Martingal</button> <br><br>A martingal with repeat on win option at 79.95% with multi plicator enable and StopLastBet enable. Base bet will be 100 satoshi and series of bet will be that 100,200,400,800,1600,3200,6400... <br><br>Enjoy the bot and let me know if something wrong...</p></div><div id="AutoHelp"> <p class="OptionTextTitle">Auto Bet Help</p><p class="ConnectOptionText" style="text-align: left; overflow: auto; margin-left: 2px; width: 100%">Infos: All amount should be set in Satoshi format 1000 satoshi for 0.00001 btc. All % value should be type like that 100 for 100% <br><br>Look at Example1 and Example2 button, and details, at the end of this help section... <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(70);">1.CustomBetSize -X- LastBetStop</span> <br><br>- Custom Bet Size: list of value separate by "," coma. each value is a bet size. <br>- X: is the multiplicator to reach the right amount for your bets list. <br>- LastBetStop: if you want to stop the bot betting when it will lost the last bet in the list then check the StopLastBet checkbox. if Multi is enable then it will stop if loosing the LastCustomBet(in thelist) X Multi X LastMulti(in thelist). <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(130);">2. % Win Odd - FirstBet - Swap</span> <br><br>- % Win: Possible value 5% to 95%. <br>- FirstBet: is Low or High <br>- Swap: Choose how the bot should swap between Lor or High. Same: wont swap <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(190);">3. R2BBAfter - AW/AW%</span> <br><br>R2BB=Return To Base Bet After; L=Loss ; W=Win <br>Check to enable R2BB - Uncheck to set increase % same as 999dice <br>- ResetOnWin: IncreaseOnWinPercent (optional): If ResetOnWin is false, after winning a bet, increase the next bet by %. Cannot be negative. <br>- ResetOnLoss: IncreaseOnLosePercent (optional) If ResetOnLose is false, after losing a bet, increase the next bet by choosen %. Cannot be negative. <br>- AW: AutoWithdraw - if true Autowithdraw is enable. <br>- AW%: set % amount you want to autowithdraw/reinvest reaching the right profit set in General Settings. you should set your addy there too for each crypto. Cannot be negative. <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(250);">4. MaxBetSize - Stop - R2BB</span> <br><br>- MaxBetSize: (optional) The maximum bet amount in satoshi format, or 0 for no maximum. <br>- Stop: (optional) If true, then after a losing bet where the bet amount is equal to MaxPayIn, betting will end. <br>- Reset: (optional) If true, then after a losing bet where the bet amount is equal to MaxPayIn, the next bet amount will be BasePayIn. <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(310);">5. Max/Min Balance Stop</span> <br><br>- MaxBal Stop: (optional) After a bet, if your balance is at least this amount, then stop betting. 0 for no maximum. <br>The amount set will be add to balance dynamically before a new bet. <br>- MinBal Stop: (optional) After a bet, if your balance is less than this amount, then stop betting. <br>The amount set will be add to balance dynamically before a new bet. <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(370);">6. Multiplier List/Multi/T2C</span> <br><br>- Multiplier List: Will be use to multiply a loosing system by value in the list separate by ",". <br>- Multi checkbox: to enable the Multiplier List. <br>- L2C%: Loss to Cover - to set the % of your loss that you want to cover when your system get a break. if loss are covered then bot will reset to base bet and base multi. <br><br><span class="HelpTitleTxt" onmouseover="ShowMask(430);">7. Replay - NumBet - Crypto</span> <br><br>- Replay if Profit=0: After a bet if true, will repeat the same bet if bet profit=0. <br>- Number of Bets: The maximum number of bets to make. Current limit is 200. <br>- Crypto to Play: Choose the crypto you want to gamble. <br><br>Now if you are ready and you thing everything is set correctly then hit the "InjectSettings" button to inject your options for the bot. If something wrong in your options the bot will show a message for your mistake... if everything is alright you ll see a message too and then you ll be able to start the bot by clicking the "Start" Button. <br><button onclick="LoadExample(&apos;A1&apos;)" style="font-size: 100%">Example1</button> <br><br>First way to use Automatic Play <br>Classic use like on Automatic Betting in 999dice <br>A Short 95% progression that will increase by 900% if wins or Loss <br>Base Bet=1 x 1000000=0.01 Doge <br>With a Max Bet Stop Loss at 100000000 Dogishi=1 Doge. <br><br><button onclick="LoadExample(&apos;A2&apos;)" style="font-size: 100%">Example2</button> <br><br>Second way to use Automatic Play <br>Use Automatic Bet to repeat bet. <br>The bot will stop if a win happen cause MaxBal Stop=1. <br><br>Enjoy the bot and let me know if something wrong...</p></div><div id="SystemHelp"></div><div id="MultiHelp"></div><button class="LeftPanelButton" style="left: 10px;" onclick="LoadStats();">Stats</button> <button class="LeftPanelButton" style="left: 310px;" onclick="LoadTools();">Tools</button> <button class="LeftPanelButton" onclick="LoadSettings();" style="width:140px">Settings</button> </div></div></div>';
            var s = 'h1,h4{position:relative}#BigBox,#Buttons,#Infos,#Settings,#minibox,#playRoom,h1{margin-left:auto;margin-right:auto}h1,h2{width:50%;min-width:750px}html,p{color:#7faed7}#Infos,.GResultsHead,.ResultsGenHead,.ResultsHead{border-right-style:solid}#DivCookie,#LogPanel,a{text-overflow:ellipsis}html{background-color:#000;cursor:default}body{min-width:1250px;max-width:auto;height:100%;margin:1px;display:inline;zoom:79%}h1{top:-30px;font-family:"Times New Roman";text-align:center;font-size:200%;height:0}h2,h3{font-size:120%;font-family:"Times New Roman";text-align:center}h2{text-decoration-line:underline;margin:auto}h3{color:gold;margin:5px}h4{top:-50px;width:1094px;font-family:"Times New Roman";color:#fff8dc;text-align:center;font-size:300%;background-color:rgba(255,255,255,.3)}p,p.AccountStats{position:relative;width:100%}h5{position:relative;bottom:-290px;font-family:"Times New Roman";color:#e6e6fa;text-align:center;font-size:250%;background-color:rgba(20,20,20,.5)}p.AccountStats{top:-15px;left:0;font-size:200%;text-align:center;line-height:4px}#AutoPlay,#MultiPlay,#SinglePlay,#SystemPlay{left:-300px;height:500px;border-bottom-style:solid;display:none;border-width:1px}.textI,.textI2{position:relative;text-align:right}.textI{width:50%;font-size:250%;line-height:5%}#BTC,#DOGE,#LTC{width:28%;display:inline-block;background-position:center}.LogTxt,.textI2{line-height:4px}.textI2{top:-8px;font-size:150%;line-height:10px}#LTC,.StatsText{position:static}#DivButtonMessage,#DivMessage{color:#ff4500;text-align:center;width:100%;position:relative;overflow:hidden;display:block;font-family:"Times New Roman"}#connectDiv{position:relative;width:50%;left:-160px;margin:auto;min-width:700px;max-width:700px;height:500px;font-family:"Times New Roman";border-color:#d3d3d3;display:""}#DivMessage{font-size:160%}#DivButtonMessage{background-color:rgba(10,10,10,.4);font-size:160%}#Infos{position:inherit;width:100%;height:150px;min-height:150px;max-height:150px;border-right-width:2px;border-right-color:#d3d3d3;display:block;overflow:hidden}#BTC,#DOGE,#INFOS,#LTC,.opacity2{height:100%}#INFOS{position:relative;width:14.45%;display:inline-block;overflow:hidden}#BTC,#DOGE{position:relative;min-width:300px;overflow:hidden;background-size:cover}#LTC{min-width:300px;overflow:hidden;background-size:cover}.opacity,.opacity2{position:relative;width:100%;overflow:hidden}.opacity{background-color:rgba(0,0,0,.7)}.opacity2{min-width:200px;max-width:100%}#HelpMask{position:absolute;width:98%;left:1%;height:50px;top:70px;background-color:rgba(0,0,0,0);display:none}.text,.textInfos{position:relative;margin:auto;text-align:right}.MaskAnim{animation-name:ShowLine;animation-duration:.4s;animation-iteration-count:3;animation-timing-function:ease}@keyframes ShowLine{0%,100%{background-color:rgba(0,0,0,0)}25%{background-color:rgba(255,0,0,.3)}75%{background-color:rgba(255,0,0,.5)}}.text{width:50%;color:#fff8dc}.textInfos{width:80%;color:#7faed7}#Single,#System{position:relative;width:32%;min-width:250px;top:-100px;height:356;border-width:thin;display:inline-block;background-size:cover;border-style:solid}#Choice,#MultiPlay,#minibox{width:100%;border-top-style:solid}#Connect,#NewAccount{height:50px;width:200px;color:#b22222;background-color:rgba(0,0,0,.2);position:absolute}#BigBox{position:inherit;width:1694px;height:1250px;overflow:hidden;display:block;background-position:bottom;background-size:cover;border-width:4px;border-color:#d3d3d3;border-style:solid}#playRoom{position:relative;width:1094px;overflow:hidden;display:inline-block}#box{position:relative;min-width:1080px;height:1100px;display:block}#minibox{position:relative;height:1098px;border-top-width:1px;border-top-color:#d3d3d3;display:inline-block;overflow:hidden}#Settings{position:relative;width:496;height:500px}#Choice{position:relative;left:0;height:500px;border-width:1px;border-color:#7faed7;border-bottom-style:solid;display:none}#Single{margin-right:1px;margin-left:18px;background-position-y:-50px}#Auto{position:relative;width:31.3%;min-width:250px;margin:auto 1px;top:-100px;height:356;border-style:solid;border-width:thin;display:inline-block;background-size:cover;background-position:center}#System{margin:auto auto auto 1px;background-position:center}#Connect,#NewAccount,.InputDiv{margin:auto;font-size:250%}#AutoPlay,#SinglePlay,#SystemPlay{position:absolute;width:1094px;border-color:#7faed7}#MultiPlay{position:absolute;border-color:#7faed7}#DivLoginStatut{position:absolute;color:#8b0000;text-align:center;left:auto;right:35%;top:460px;font-size:250%;line-height:10px;background-color:rgba(210,210,210,.5)}#Connect{top:400px;left:400px}#NewAccount{top:100px;left:698px}.InputDiv{position:relative;top:10px;width:50%;height:40px;line-height:10px;display:inline-block}.CInput{position:absolute;width:300px;height:40px;left:400px;line-height:10px;font-size:80%;background-color:rgba(0,0,0,.1);color:rgba(255,252,172,.65)}.List,.SingleInput{position:absolute;color:#fff8dc;border-bottom-style:solid}.SingleText{position:absolute;width:220px;font-family:"Times New Roman";font-size:180%;text-align:right}.SlotList,.playButtonS{text-align:center;font-family:"Times New Roman"}.SingleInput{height:40px;font-family:"Times New Roman";background-color:rgba(255,255,255,.1);font-size:200%}#ABAutoWithdrawVar,#ABChange,#ABCrypto,#ABHighLow,#AutoWithdrawVar,#ChangeVar,#CryptoVar,#HighLowVar,#SysAutoWithdrawVar,#SysChangeVar,#SysCrypto,#SysHighLowVar{position:absolute;height:46px;font-family:"Times New Roman";background-color:rgba(255,255,255,.1);border-bottom-style:solid;color:#fff8dc;font-size:200%}.List{height:50px;font-family:"Times New Roman";background-color:#3c3c3c}#Buttons{position:inherit;width:1098px;height:130px;min-height:130px;max-height:130px;border-width:2px;border-color:#d3d3d3;border-top-style:solid;border-bottom-style:solid;display:block;overflow:hidden}.playButton2,.playButtonS{position:relative;display:inline-block}.playButton{position:relative;margin-left:1px;margin-top:0;font-size:140%;background-color:red;border-style:outset;font-family:"Times New Roman";color:#F2F1A8}#StopWinButton{font-size:150%}#ButtonStart{font-size:170%}.playButtonS{width:35px;padding-top:5px;font-size:140%;border-style:outset;color:#7faed7;background-color:rgba(50,50,50,.5)}.playButton2{width:150px;left:20px;font-size:140%;color:#d3d3d3;background-color:#00008b;margin:10px}#PlayB,#PlayB2{width:540px;margin-left:auto;margin-right:auto;height:130px;position:relative;overflow:hidden;display:block}#B2BbButton{background-color:#006400;margin-right:0}.OptionTextTitle,.SlotList{background-color:rgba(255,255,255,.5)}#PlayB{float:left}#PlayB2{min-width:540px}.SlotList{position:relative;width:110px;margin-top:5px;height:35px;font-size:140%;border-bottom-style:outset;float:right;right:30px;padding:0 0 0 15px}#GenSet,#Stats,#Tools{height:1250px;display:none;border-left-width:3px;float:right;border-left-style:solid;border-left-color:#d3d3d3}#Stats{position:absolute;width:599px;overflow:hidden}.StatsText{width:130px;margin:0 10px 10px;font-family:"Times New Roman";font-size:160%;text-align:right;overflow:hidden;line-height:30px}.StatsTextResults,.StatsTextResults2{margin:0 10px 10px;font-size:160%;text-align:left;line-height:30px;position:static;font-family:"Times New Roman";overflow:hidden}.StatsTextResults{width:428px}.StatsTextResults2{width:138px}.StatBox{position:absolute;margin-top:-40px}#GenSet,#Tools{position:absolute;width:599px;overflow:hidden}#GenBox,#ToolsBox{position:absolute;width:100%;height:1170px;display:block;overflow:auto}.OptionTextTitle{position:static;width:auto;margin:20px 10px 10px;font-family:"Times New Roman";color:#5c2e2e;font-size:220%;font-style:italic;text-align:center;overflow:hidden;line-height:40px;word-wrap:break-word;border-bottom-style:double;border-bottom-width:4px;border-bottom-color:#d3d3d3}.Addy,.OptionText,.OptionTextAddy,.OptionTextSound{position:static;font-family:"Times New Roman";font-size:160%;line-height:30px;display:inline-block;word-wrap:break-word;overflow:hidden}.Addy,.OptionText{width:170px;margin:10px;text-align:right}.OptionTextAddy{width:70px;margin:10px;text-align:right}#HelpMe,.GResultsHead,.HelpTitleTxt,.OptionTextSound,.ResultsGenHead,.ResultsHead{text-align:center}.OptionTextSound{width:102px;margin-left:10px}.OptionAWInput,.OptionInputSound{background-color:rgba(0,0,0,.2);font-size:150%;color:rgba(255,252,172,.65);display:inline;position:relative;border-bottom-style:solid;font-family:"Times New Roman"}.OptionAWInput{width:360px;top:-17px;margin-left:10px}.OptionInputSound{width:100px;margin-left:12px}.OptionCheck{position:relative;width:30px;height:30px;display:inline;margin-left:10px;top:-10px}#SaveGen,.LeftPanelButton{position:absolute;bottom:20px;right:10px;height:40px;color:rgba(32,18,5,.8);background-color:rgba(255,255,255,.4);font-size:200%;display:inline}#SaveGen{width:150px}.LeftPanelButton{width:130px}#AutoHelp,#ChoiceHelp,#SingleHelp{position:absolute;display:none;height:100%}#Help{position:absolute;width:599px;height:1250px;border-left-width:3px;border-left-color:#d3d3d3;border-left-style:solid;display:inline-block;float:right;overflow:hidden}#ConnectHelp{position:absolute;display:block;height:100%}#AutoHelp,#SingleHelp{width:100%}.HelpImage{position:relative;display:block;left:25px;margin-bottom:10px;width:90%}#GenHead,.ConnectOptionText,.GResultsHead,.ResultsGenHead,.ResultsHead{display:inline-block}.HelpTitleTxt{float:right;width:95%;margin-right:2.5%;height:35px;font-size:110%;color:#000;background-color:rgba(255,255,255,.3);border-bottom-style:solid;border-bottom-color:#000;overflow:hidden;word-break:break-all}#GenHead,.ConnectOptionText,.RHead{background-color:rgba(0,0,0,.5)}.ConnectOptionText{position:static;width:576px;margin:10px;height:1080px;font-family:"Times New Roman";font-size:180%;text-align:left;overflow:hidden;word-wrap:break-word}.LogLabel,.ResultsHead{font-size:150%}#Results{position:relative;height:445px;width:100%}.RHead{position:absolute;top:10px;margin-left:10px;margin-right:10px;height:33px;width:725px;border-color:#d3d3d3}#GenHead,#HelpMe,#gen,.GResultsHead,.LogTxt,.ResultsGenHead,.ResultsHead{position:relative}#DataShare,#DebugData,#FullResults,#LogPanel{background-color:rgba(0,0,0,.2)}.ResultsHead{height:30px;margin-right:2px;margin-top:5px;color:gold;border-right-color:#708090}#FullResults{position:absolute;top:50px;left:10px;width:735px;height:414px;overflow:auto;border-color:#708090}.ResultsGenHead{margin-top:1px;height:30px;color:gold;font-size:150%;border-right-color:#708090;overflow:hidden}.GResultsHead{margin-top:2px;font-size:130%;border-right-color:#708090}.GResultsHead#GResultsHead2{border-right-style:none}#GenResults{width:99%;height:200px;background-color:rgba(0,0,0,.3);overflow:auto}#GenHead{width:99%;height:33px;top:-3px;overflow:hidden}#DataShare,#DebugData{width:97%;max-width:97%;height:130px;margin-left:1%;font-size:175%;color:rgba(255,252,172,.65);resize:none}#DebugData{color:#fff;background-color:rgba(0,60,75,.8);word-break:break-word;overflow-y:scroll}#DivBtcAddy,#DivDogeAddy,#DivLtcAddy{width:81%;top:-15px;margin-left:-10px;font-size:150%}#LogPanel{position:absolute;right:0;width:345px;height:464px;border-left-style:solid;border-left-color:#d3d3d3;border-left-width:2px;overflow-x:hidden;overflow-y:auto}.LogTxt{font-size:130%;width:310px;top:10px;margin-left:4px}#gen{width:1700px;margin-left:auto;margin-right:auto;height:1256px;display:block;overflow:hidden;border-bottom-style:groove;border-bottom-color:#7faed7;border-width:1px}#DivCookie{width:40px}.LeftArrow{left:6px;-webkit-transform:scaleX(-1)}.RightArrow{right:6px}#ABBetFormat,#BetFormat,#SysBetFormat{top:-113px;left:724px;width:125px;font-size:200%;color:red}.bodyclass{background-color:#000}.Vids{color:#f3b89f;text-decoration:underline}#HelpMe{display:none;left:1%;margin-top:10px;width:98%;height:95%;margin-bottom:10%;font-size:160%;background-color:rgba(0,0,0,.6);border-style:solid;border-color:#cd5c5c;border-width:1px}#Clean{position:absolute;bottom:-20px;right:300px;height:50px}#Clean,#Connect,#NewAccount,#rId1,#rId2,.Addy,.Click,.LeftArrow,.LeftPanelButton,.RightArrow,.Vids,.playButton,.playButton2,.playButtonS,.statsInfos{cursor:pointer}#Clean{position:absolute;bottom:-20px;right:296px;height:50px;background-size:100%;background-image:url(data:image/png;base64,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)}.LeftArrow,.RightArrow{position:absolute;top:5px;width:85px;height:55px;background-size:100%;color:rgba(0, 0, 0, 0);background-image:url(data:image/png;base64,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)}.LeftArrow,.RightArrow:hover{background-image:url(data:image/png;base64,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)}#BTC{background-image:url(data:image/png;base64,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)}#DOGE{background-image:url(data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx4BBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIAG8AyAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOf1/WrrxB4lvNWvZN8ksrMcdNxPOPYcAewFAkZ8+rzeabezALKdskzqSkfcjA5YgckcAdzQM1fD+ozz6ektw4eYM6MyjAYqxXOO2cUAdXoMsTia8vJfKsLRDJM56cdvf6dyQO9ROcYRcpbIEruyOG8Q63deLdfeeXdFaRjYkYPEUfZB7nqT6/hXyuMxMpy9pLfoux6FOmloaVtIqoqKAqgYAHavIkm3c6di/BL71jKJSZs6fYajdRCa2sriaMnG5EJGacMLWqLmhBtCdSMXZsvf2JrJGV0q7J7Dyz1o+oYm/wDDf3D9tDuXoPDeqSLHbtY3SW8GefLOZGPLEe1bPB4jbkf3Gsa1OK3L6aBdxxlYtOuEPUYU8molgK7+wxrEQvrJE1ro2rMOdLuj/wBsjXLLL8V/z7f3Gvt6X8yLTeHdSkXB0i6/CNhULL8X/wA+39w3VoW3Rj6p4YvVBLaTdH2IY10wwWLX2H9xi6lDucrq+h3kMLPFo92z9AAjce9ddPB4lv3ou3oQ50e6ORjjd9V8ieKRDB+8ZHUgsw6cHsP510OLprXQbatoc5rPimWaaQw2xeOJtu7Pyqc+1ehSwaSV3uYOp2G6DqV5qMzCRI1jXHIHOfSnWpRprQIyctzutHbFu/8Av/0rwMT8SNmTTSgZrOMSGzPu3SSNo5AGVhgg962jdO6JeuhR8L6/ceEteBJeWymGyWPP+sjz/wChL1H/ANevaweJdOXtF80ctWndWOh8XqtjcR3dnKJNPuwJIXX7vIyPwPUfiO1fURkpJSWzODbQ4zxDqs8NkWtpQkryIgcruC7nAJx34NMDLg1yV5RbXgVXPEcqghJOM4weVOOcfkaAJJNSSILZwOTdtiNcKSFY9yenA5x7UASr5UMWAm6K2HCMcl3yR/30xOeefzoA2tJtntrS3tEO6bGCfVyck/mTQBZ+Imq/YrS28LWTZZdst2R/HIeVU/QHcfcj0ryMwrcz9mtlqzejHTmMjTlS2gWIHJHLH+8e5r5+o3OVzsjojRhm9655RNEy9BP71k4lI9e+HMxk8M2jA7VO7BPf5jX1OXLlw0V6/mcFbWozt7RkA9T6mu25mi8i4GTyaQXGTHaSaBos2EmWCg0DNyNf3VIDn9dbAamSzk5/mc5q0wKc2nWt6rwXttFcRuuCJFzwaJwjUVpK4KTT0PPviL8O2utHe28K/ZoWHJtph8pA7I38J+v5iuRZdFT9pFs3+sv4ZHnOkaFe6RC0d7bPbyRHEiSDB3V5eLqe84vc7KdrJo37FwlmPViTXj1leZbepDcT+9CiRcoT3A9a1jElsydUAuYDHnDDlG9DXTSbg7mctUbHgjUl1jQ7vwtfth0VpbQnqpHLqPofnH/A/Wvocvq2/dvbocVaP2kcnrkcwtri1YbZ4zwM9HU5H6gV6hiYpljuIwu3EFwMgLwUbI7eqkdqANOyeaEQTz2soiQOx7vvY5LFeuO3r7UAXU1AT3VvMrgwLJiNcf6zg5f6Dt/+qgDrvDl1BEbvWbhd1vYRF9p/ibsv4kgf8CqKk1Tg5PoCV3Y4q1nmvtSuNRunMkruzMx7uxyxr5ivJ9d3qd0UaiSe9cjRdyxFNjvUuJSZo6Wv2y9jt8kR/elI/ujt+NTGnrcq57F4YulTTYUXCquQAOgGa+hwMbUInJVfvs6ey1OCNwryqG9M12KDZk2joLK4WRcluMVLAJ33ZPqaErjRPpZ+fJ+lDHc6WEgw/hSBM5fxHJjIFAM5hRuemSWhENv1pp2GVpIBG+4AleuK0U7onlMDxhptjrFk0c+2OZVIjl7j2PqK5MXhI4iNtmtn/XQ2o1XTfkeSamHsbp7WVdjJwV+n+RXy1SjKEnGa1R6EpKS5kZNxddQDVRgZORnzXGe9bKJDZUlm96tRFczjez6XrNtqdq22RJA49Nw9fYjg13UJOO26M5o3vH6Qm6ttXsx/ol9Err7ZGRn3xkfVTX0UJKcVJdTias7HFxSGCaeR3xC0pDrj/VnAwfo386oDelugJ2j6kd/Xp/jQBTtI0tI872lYg/O3pnOB7UAdD4luDpvgewsASJb5zcSjvtX7o/76b/xyuDHy0jDuaUlq2Y1l+5t0j7gc/XvXhVLSk2da0RaSWs3EZMk3vUWGdJ4QRpFllXq74J9FH/1810UaLnohOajud7aataWkAh8zayDOME168a1GjFQvaxzcs5vmKifEXw4l5ZWa36ySXDL5ai3dt7k4wSBx756V2QqQ7mLiz1LRrz92gdue496zm7s0ib8ZWYg54ApJ2QyeJ0jkAyBQBfuNfs9O0i81G9byLGygM9xcyHbGqDPOT1PHAHJosr2b1FzHm3/C0PA/iV5RouvRXLx/fjMTo6++1gDj3rCriKdC3O7GkISn8Jp6XNBeRie3lWWP1Hb6+lVTqwqx5oO6JlBxdmXzwMngCrAzdTvFRSAelWkTc47WdQ+cndxWsNhHD+OQt1Z/bI/9dAMnH8Sd/wAq87H4VVI863X5G1Kpy+6zgprjOea8VQN2yrJNmtFAREWJNaJAQXsfm2rqPvAZX6irpvlkiZK6N7SG/tn4e3VmeZrCTfH67Gy4/wDHg4/4FXtYKd4uHY5aq1ucq9otxtk3FG45XuAc4NdpmSBmIkfrlTz9TQBZsYRLLFAP45dvHpnFAF/4gz+f4pjsh9y1iihx6YXe3/jzGvIxkr1JPtob0loiiJDXl2OkeslKwiSOQkgLyxOAPWjlvoGx3OiqLKxjhB+bHzH3r06VP2cfNnPOXMx17cMtxuJODjmuPEQfNdm1J6EOlx2MWrR3cdrCs7SAs4XknPWs4ym5Ri3pc25Uotnqemargj5q96xwI7HRtUV9o3CpaGmaVyrTR7owWQH5lHWtKdkKR4p+15Y6xrC6J/Y2oySWcFu32nS0nKFm35SUR5AcjBHcjjFc1SooTtIqMbq6POfhn4EvbXU49d1iA2soy0UWMNkjHTsPr1rysfjYODpQ1udWHovm52e5eGGksWF0CwQ8FM8OPeuDBSlSlzr/AIc2r2kuU6bUtTgWANG/ysMg19TC0kpI853TszjdX1cEthzWiiTdHKalqG5iN2Qaq1hp3Mi4uS4K9QRginoJnC38Rt7yWHnCtx9O1eBVp+zm4nXGV1cr1mUFAC0AaHw3l8nXrvT2+5cQSJj1K/vF/RSPxr1MHP8AeLzRzVV7pk31s1vNPACf3cpX8M4/lXqmBCwVML15X6dBQBd8Jf6V4hsbcD7z5/T/AOvTW4mVNYuPtXi3UbgnIM8rD6byB+leHiHzN+p100Ab3rk5UbDgfcUuQVzQ0BQ+oK7dIwW/HoK1oU/f1IqPQ6gT7Ruz0rv2MDzHxX4/1RtUmtdN8mKCBygdk3sxHBPPAFa+xjJXkTztbDPDnj/WhqlrBdx21wkkyITt2MMsBnI4/Sl9VhdND9rLqe52OrK3zAkc810uBCZ0ek655bKd/wCtQ0UmegeGtdhn2xsw+apKuT+IYZ5dagESFg0HBzx1NfNZ1CcqsbLod+ElFRdzkJtPV9Rled921uQOn51y06FormZpKp2KWuaxBZx+WjKMDHFdtOncwcjmR4keWF4g5O08fQ17mC+BxfQ5Ku9zNnvJZTnOK7TEpzkkgkmhjGVBe5zfiePbexyY++nP4GvLx8bVE+6NqL0sZNcJsFABQBJ4al+zeN9PkPRp4gfox2H9DXZhpWlF+ZjUW5b8URiLW7yPHJw36D/CvdOVGJcYa6VUzjI/lQBp/DpP+Kvse2Dn9RTQmYFu5e+nkPU8/mTXgVTsi7FrNYlcwo69aA5jX8OcPMwBHAH866cPuzOo7mpd3Ahs5pifuAt+QrpXYzPDdQieK8kD9WYsD65Oa6kZPRk/h6N5dbsgn8M6MSewDCmtwPebaVkU9Rk1rIC3FfOnIJqbAammeI5rWQMrHip5R3O88O/EGxu9StLW/nWGTAVGc4BOeleJmlGUpKS7HVh52VmYHivxlbwSTWunMJ5Sx3yL90HPQHvXPSoPeRpKfY4K8vrm6kLSyE5rrUUtjJu4/Sj+/ceq114R+80Z1NjSrvMhsv3KAIh0qWUtjD8VgD7MfXcP5V52PWkWbUt2YVeabhQAUAQQsU8Q2LjqJIz+Tiuijt8zOZ0PjuNR4ougOpX+rV9E9ziRzpiP26M4PzFf1FIZr/D5QnjGyU93C/8AjwpoTOahjMepXMWMFcj8mIrwKux2RLeysbl2QoSldBZGv4bQGaZSB0Brow8ldozqI0NVsnubG4t1OHlQquemcV0XtK5G6PKNVht2lMFzMkM0bbWViMjB5Brpi2Q7E2h2ITWrKS2dJI/OQNgg45HpVKXcVj3CLTmbpW9yC7b6I8jABSanmGkdHoXgsXLjzEwO+alyHY6uw8M6bYazaJDbRs+AWcrk9a8XM5vmS8jqoRVjmfiB4UhXUZ7i0jEZZi2FHBrmw9fSzLnDU8/ubN4HKumCK7FJPYjlJtLtz5rMem2urCr3mZVdi+0WK9AxIZk6CgaQzZgUWBGF4tXEVse4Yn+VebmG0Taj1MDBryrm4YouAYp3AhtUMviTT4hyWliX85BXRRei9SJnR+OF83xRdEd+P1J/rX0bOJGLdLtkt36Aqv6GkMk8PO1p4ttJTkBZz/XH9Ka3EyDxHaGy8b6pbYwBdTBfoXLD9CK+fxKs5LzOyD2GCI1yXNR4hNK4rmn4cQJqSof+Wilfx6j+Va0Z2nYmaujqltCz7iO2B7V1OTe5mkcD458PyR6lNevbpLbTMDu252nGMH/Gt6VVP3epMo9TF0LRLVtcsWihZH+0x/cYj+IV0KbTVyOU+idO011IBTcO2RXUzM6Ow04rgrCiD1NRyorU6DTlkRsZG3HOBUytYaTLiQ/8TOKQj/ln/U14GbP316HbhleLKviSy+0EtjjHXFebSkbyR5/rWjRMSQmWrvhOxlKJhw6U0cbygEbjgfhXs4PWLl3OStvYryxNHncOK7TEqHDMSaChrLzQIwPFHzzxxdghz+J/+tXlZhL30jporRnPjlea8x7mgYFAwxQBP4Pg+1eP9NQjKx3CO30TMh/Ra7cLG8oLzMaj0Zoaw5uPEU4/6aKv5AZr32ciKk0XnWiMeqOR+B5oGJdQmO6t7tQSRtk/Edf5UAXvidbCHxNZ6ov+rvbaGbd6sB5T/qmfxrx8bC1R+aOik/dM5Yq8fmZ02JUhz2zU3CxPbxtFKsicMrBh9RS5nF3QWud/Yxpc2iXMY+Vxn6eorv8AaJx5kZ26E8ulLcQvHJGJFI5VhkEelYub3LSM3SfBVtDq0M1uCE89GCZxt5HGe9XHEzc4p9xumkmexW2mqgBKiveuzisXfs6fxD8qSY7Ilt4VDBVHXrQIvXMWy6hwP+WX9TXgZt/EXoduG+FkeoDdEUbHqK82mzoZzFzpz3MxVF4/ibsBXoYelKrKyMZyUFdlXUNNj8vYiYCjAr6CKUVZHA3d3ZyurWO0lQv1rRSFYwri1K5wKpMLFRkYHimByOp3Xn6pNj7oO1T9OP8AGvBxNTnqtnZTjaKKDqA7DGBmuVlDSnpSsKw3bigRsfCyASatqeqv/q7a0fB9GkIjH/jpc/hXrYGH730Rz1X7pDaMZrme6YcfPJn69P5165gX4rMrJcWjdeq/UdKAG7FksMnrE2CPY0AaXiO0GsfDe3ukBM2kXBik9RFJgfowj/77NefmEPcU10NaL1aOc039/aRvj5gNrfUV87V92TR2R1RfjgrJyLSLMVv7Vk5lJHbaLG1jZW6yqfLZTvGPuk8g11QnyxSYnHmO30DTLS7sY7nBbfnnOO9erhcNTq0lORy1JyhKyNmLQ7FXWXy23ggj5j2rdYGindL8Re1lY0ArE9K6zO4EY96ZJb0+ItIDik2B1dhpttcbHmQlgMAg44rlrYWlWd5o0hUlDRE9/o1gY8+Ux47uayWX0F0/Et159zmdSt4oR5cSKo7ACu2nCMFaKsjGTbd2c7fQdcDmrEc3qdmDnIy3UmgDm7615PFaIDn9f/0KwkkH+sb5Yx7nv+Fc+KrqlTb69C6cOeVjhRbFCSTk14CkdrK833qbepD0GUAV9Rl8q1fH3m+VfqaumryJlojrNGhGjfDUOfluNWmMg9fKXMaf+1W/EV7mBhaDk+px1Xd2KcUSw6Uz9DM2xfoOtdpBsXKHdb3q8k4VyPUf/WoARLJY7uSJuY51+U4455FAGx4HWBNSuNH1DIstTha2m46ZGMj3HUe4FRUgqkXF9QTs7nHiwudF8QXej3y7ZUlMbem9e49iMEe2K+TxMGk0946Ho02jVjhHpXnuRvYtQxEMpX72ePrWbYzvo7Uy2oSUAOVG72autu61EtDqvCqNDo0AIwwLZH/AjX0OX/7vH5/mcVf+IzdVlYcEV2GIMeMUAEa7jQ3oBsaagBGcVAHUWEkSKPmB+lAyS8mZ12xrj+dAXOd1C3+Ys3LU0JmDexcniqEYOpQKMt3NA0YF/DGEaV8LGnU0SmoRvIfLfRHA63FNf3hkkxHEvCJnkD/E14NerKvPmex2QSpxstzH1K2hitZH2AbRx9aVo2BNtnN+XkHI71lUeo5rUiaMjpUp2IsQafp1xr/iS00i2YKXk2F+ycZdz7KoJ/Cu6hTcrJbsznI6rxtdx3utRafYIUtLRVggj9FACqPwUDPuTX0SiopRXQ499SNoPN1KCzGDDbJ857ZHJNMDW8Oj7VAbZx98cZ7OKANa3sGntdhXEtufx20AXbrT9yx3UQ2v6js4oAh+I+kHW/D9t4qtU23VsFg1BVHIxxHJ+HCn2Ke9eNmdC375ejOihL7JzmlTC7tg+Nsi/LIvo1fMVY8krHoRd0a2nRE3sAUZPmL/ADrJPVFHd4xXWQdNooB0uHPv/M19Fgf4Efn+Zw1vjZZddvP612ozuN3uP4jTAlt97NyxpMaNvTYicYBNJiOksYTgZwKkC/KoCYApDMbUUzk0wMC8TrnpTTsKxyusX9jAWG/z5f7qHP5muatjqVLrd+RrGlKRyeoyT3r7psIg+6i9BXlVsROs7y27G8YKK0Mm8tF2llzxWaYXOb8Qx7bBh0LMBTb0LgtTmPK4NZTlqVNFHUpPs8OVx5jfKg9/WqpR5n5GMtDrPBGmf2B4Xm1y4T/TtSQx2oPVYM8t/wADYY/3VP8Aer6DAUtPaP5HLWl9kg0+08lLjU5vnMQJUn+KQ16JiV/KltdJL8m6v24Hfb/9egCa28U+FUvI7uPxDpKJcDzShvYwY37gjPHPNNiR0qeNPCCsl2nijQg54kQ6hFz/AOPUhl2Pxj4LWZoz4u8P+TIM5/tGHg/99UAWtI8c+CNPuXWbxT4dntLhTFcxHUYSroRg8bvQ1MoqSaezBaO5wPijUvCvh7xG50nxZomo2Eg3o0OoxSExk/dbDcOvT3696+WxeXVIycIptdGd9OtG17mv4f8AFXhA3sc0nijRIkQb/nv4lJPYctXm08FiObWD08mdLqwtozpv+E38F/8AQ3+H/wDwZQ//ABVdX1Wv/I/uZn7SHcsW/wARfCsEflxeNdAVOuP7Rh/+KremsZTXLGLt6f8AAIl7KTu2ivqvxM0FbQm38baEX3DpfwE4/Orc8ctk/u/4ActHyKEXxR0gj5/GekA/9fkP+NT7TMO0vu/4BSVDy+8ktvidpu7C+ONFH+9fW4/mal1Mw7S+7/gBy0PL7zqtO+KXhqKNQ3xA0DOOd2pW/X86ftMf2l93/AFaj5febFv8XfC6j/kofhwf9xO3/wDiqj2uY9pf+A/8AfLQ7r7ydvjB4XI/5KL4b/8ABnb/APxVL2uY9pf+A/8AADloeX3lC8+LHhiQY/4WF4dP01O3/wDiqpVMwe6l93/AC1Hy+8wNQ+IXhG5z5vjrQpR76rCR/wChVMqeLn8UZP5MalSWzRQ/4TPwSPmPjDw7ntjU4eP/AB6lHC1/5H9zE6ke5BN4z8Fnp4u8Pn6alD/8VWqw9b+R/cyeePcpXPjHwcUIHivQW+moxf8AxVP6vW/kf3MOePc5nxH4s8LyotvD4h0iTnczLexkfTrR7CttyP7maQnDdtGA/iHw6qOx1zTCAM4F0hP4DNZzw1dtWg/uY51Id0J4RufC+s66bjW/EekWlhAu+RJNQijaRc8RplurHqR0GT6Z78Ng5ykoyTS6nJUqpao6PX/Gnh7VdVDJ4g0aOFSEiAvI1VAMDgZ4AAAA7ACvfStojkEuvEnhOe6isF8SaMllbjdI322ICQ98fNzTAgHivwu9xNqkuvaR+5Gy2g+2R59jjNAH/9k=)}#LTC{background-image:url(data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx4BBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIAFMAlgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APpb4iX6i1OmI4jVlElxJ/dQNkL77tpU+xq4q5nJ9DzvSwuqXMOozokenwSLb2ETMVE0nAUZJztHGfwHJrZ6GSXU1M3Mt5cWTTFJ5/nukuD+6Zl2/cccchhj069qgepT8+1OkCTzp102KTCw7v8ASbaQ85Ax8ygkfUewqlclsm3TXcyX+qoEmkUbIEBXeB0Zxk/5/KriuiJk1uyDxFdgQyLNNGhxyWHyqKtJLYzbb3PGPE/jLRbF2SSR70K5wIzgOeeFIB3f55p2uCR574413xJqWl/u9Big01ssm8Fn7ZyFbAx7jNN05JXLi1cgtbXSptMi+3xavqkohGxVZ2CDv90IB9CWrSPsku4vfdxlppehloSfCl5ckj/V+ZH0+bk/Pu9OvpVqVJPYHGdtylf22iQ6bcSWEOq6VKMgNPvCE4+4Su4Ee+BSmqTjpoJc99S94Jn8QW9nFcaXqtjMNm50dApYDPyhly2evUdxWlPCOUbxaYVKiT1R02keJ4b66S31eD7HcnozJ5bsfUPnY4PpgHrzXPOm4ytLQpbXizp7G8nhKXllcSTxxnIZFKSRsP7wPI57jg9iaxavuKLseo+EPGkesSQ2urTC11ThYb4LhJD0CSjpz/e/PFZtOPoaXT23O0SWWSaRJYxBewMWkQAYckHHU8jpgjOOKQeZZIRwyqFEcm6J40jyUOTuLcnA7Nn6ikG5izD+ytTaGRUezu/lwOW2j1x3GR7ng+pqyWuhwf7Ut5j9nbxVps2TJCLMwydpYzdw4IJ6kdDRU+G46TtJJnYeNLmTV9ej8P28oZpj5l3Kp+6g6nI7YGcf48THRFyd5WG/aUWf7NaRwRwpD9nt7G8iCI6ZyHDnoTjJ+o9jQ0FxiAHT7mxnM32WAebfWdzP+8XIyDG4GP4d3tnHegkqNeKBFrOoGWYoWTT4plHmOOodyPw+gx6irSvoiW+43VNettI0ebXNbulSNQNxJ5J7Ko7nsAP6VqkkjPWTPn3xN8QvEHjDU59Ptrd9NiO4RQToGQr2djn5j6DGOePWnFczsW4qKMHTLdtOujLYyK2obWD3sqlIx9OCOvYcfnWjkofDuJJvc5zxddaddErNqNxqGpj/AFj24Qw7h0wRwPcYNYSbloWrRG6frmvSWktumoR2qonzrGN3m44GdxIPGO3ajVOxrBKQ9LrUwEUa3eiMY27So/pXTGjF6thWXItEaV3aa1fWr2jazJcJIgHl3KBgcjjBXBFVHC897MznU5VqFsi6XaQQarpVwscK/JeW02Vjb+9gKGXqOuemKfsK1HVLTyOaOKo1dLmlKLeeEHVrRr20cbkvIw26Mc4JY8HGeoA6jvXVTr06y5aopU3DVGb9v1rS9U09IdbCxFwsd/5wkBjPBjcvgMD3U8YrjxeGdF2vobU5RqM9W0i6iuosCNLS6RMyQtIrCVecvFgnj1XJxyeQDjlXmS3Znq/w/wDEMuqww6TPMU1KBP8AiX3DnLSqAcwuT14zj/62ayklH0NYvm1W52dlLHJCt1GnlrtKywKoYqecsTwcjPX0PWk1Z2GrPUlvLMT2clmREFHzRIqHIA4C569sHHY/jQmKSueM/tNu0/7PniOG6Vori0e2KK3LbTdRKVJ/n7iib91jp6yR2HhwTx6JLqlyIje6u5wk8nl5gVhvXdkY3cAU2+g1pqacybkkC2kkxEhittNu0DLKRjd5bk9OPU8L70hGXqItry7i0N7mQaZpp+1XzXK/vIurBC3cEMT3yO5xVIGcmfEEuv8AiX7RDGRCD5cEXQRp2GO3qa1jaK1M2nJ2RlfEXRfEniCQxWsUMUcCMltILpuh/iKdMn+XesVWi2df1aUVbqeRnwlrnhxTF4l3CxlJLXcMrE/Q8gZPTH5VvCacbGM4OL1OM17VmnR7PTEkTT1YgHbtdx64DEYrNt7IE11G+GNB1PWbmOKzt3AZtgOCdzE9AByTx0HpXpYPA1Ky5npHuzixWLhST6nTan4ftfD6lb20u5JgvzB38sevQc/n616EqOEw61TkzmpVK9eHPCVkdl4U8IaVrfw8l8UOtvbSR3rWnlGHeOEVt27IP8WK0pYinUk4umtjzpVK3tlBVHq7HG/a4k1NbKGK5jndtqeQxcMegG0+/YVnOph+fltZ/gd9VV6MdZ8y8zsrJbnTNb/s3WoGhmjcK25SNpx0dTyv9a78PaLV9Ys+cxvv0nKF7r+tDrPEXw4nOkzeIfCEJMyrvvNNB/dzqOWKDHyt3x35715uZYaEJNxMeHuIKsmqFfVd+x5Ha+Fm8TajEmn2091ZR5fExbZCx675Btwc4+VfT8+SjH2qftVdI+1daEJJRerPZPBvw51bRZY5ReabdzRn9y1wjv5PHRc9q55Uad9z1PqdQ29c02fSXguVaOJmIdZIAcRSLyAM8gcZHt+NY1KfL6HLOlKk+VnpWhaqmr2Vrqr5WO9Ahu4VIRFuF9fZ89fQ1z2sFzf2OY/LYl2gILRwjaCCO5PX5CRz3FSUeMftfW8sPwg8QTI6CCZbdig6lvtUOWJ9D8px05NKXwBBWmd3rJj+3SLatZtbW222t7WeI/vNoAGxzwCXf/x360xPsVsQwwPHOWjgsE84WN7cfNkElGidO+0HAJ6sB0ouI5fxHcS2fhGOFiRd63Kbm5Zm3MsI+6mT17fkRWi3F0OReKWzsxLaXMtnczNtWWJVJCAc/ePfOM+xpyhOStFXNKCXNe9hp/4SB7N7hPFV1GoDbWl8hVyO574+lFPByl9mwYjMoUXyt3foaXieKa68M20dnePcPLJHHdP5u9QhHzko3b8KmnhKsJu+wp5rRcUtm/I8w1XwLo6zma3uLxpjIAIgiYc5xgBemf0616uAwnPLnqL3V+Jx4zERhH3Xqyta2mtWniqwjsc2t1ayB4th2rCAc7gfQevftnpW+KxE6ui0XYxWDhKNm73Oj+IN5/bviWRby2iEjAKIYD8pcgZz35PrwPSiCjOn73Q6sBgY4bmhe6NSH4deJItNjSeyeG3hy7w22oIivjueeuAO2eK5KVWMZXZVbDUpP3dJdyC2vfh94Yv9K8TxxRR6jboJobYM05LFeNwJxkHBBJHI/Cup+ynG89DwcTHETnyx1OG8S+OZtc1L7csTtcvkMjjLMCcsD2x/j611PHwjBKCv/kdLwdKnh+Wb17nqPg7xjq9lpdtokn2jT/tQwkuNs8eQCEBZWAGM4bHTHNRjeacFOnqjwcvyzDSxUuZ2flszW8LaRInh3U4lnjt4TcTotzcyBNzf3iQBkjqTgVVKajSta7fY6sVOUcTanpy2L+neG0lhke08X6jeSQqN6pfhXd8HhV8vkHtzzXm1IVkz3aWbR5b1G0TQaOsthdB9Q1WdXhJVbifcoYEEHG0YPGPxNY1o1Eve1R1xxFPER5oSuanw3eYyXWkyEIL6JmiQjGyaMZXAPcjI/AVySVtS07o9N0+f7Ta2twQWWRNjLgoqMDx+ox+PFZWsab6nlP7W8Ab9nnxGwlXEL23yxRkA/wClQgAn0ww/EUpbFQ3Rv2LSvDZ2V07RKkrSGHUof3UoC5ZVbuQXJH8iKZmncydZu57rSH02H7TBBe30cUNubU+SoL8BJO6hUVh04PHerWmoHJ/EG4ku/FFzHbt+6s9tpCMf3Bg/XLbj+NUtiWZFvLHPrqoZ0e3gCliZByqLliB1OcE/jXbhpxXu31ZNeLhSckcP4qvdY8R+KE02x8v7QzrDDGXUJwzEdOMfxZHYU6lVuyRlQwyh5ss3Vp4l8CazBaaldhmYB/3EpZZFP+0O3PcevFOnzRa8wxHs6q5X0ItS8X6hoXic6lpFnB5cQbzIZIhJGdwGQQOB35XHU4xmvXx8pUacaUdOp4tLA+2pNSfUoX3iHWvE2qXDaTYmyjusM0NsGcghehfrgnPHbNcHvVU2dFCk8LFQvc6fwP4fvj4r0aS82cM0skZOSojG7P57fzqVFxTie9Tm1DnOz1i9u7Pw14h1MySPJITbWaE8B3+Tj06sfwohT55WRw0G3LmPNvC/w/t9UEjX98BHEN/lwckkdRu6D8jXR7KmmoyPLxOIq0k9DutPl+HHg3SmlMOlrfwAy2nnILiUyAfLkckc+uAODW1anQilHQ+SpzzLGY3nV+X8DkZfFc3jDxrBLqN5JJLcqqiZRgrtYFdo9ucAHvXpVsPhlh/ZUpK57mMw1TB01Xbbkn+Z0/xD1261PUo9NspWVZJPIjRpVCR9BjO0jA79ADmuKlBU6Wi1KhJXi+rMq60XXvAmvadLJqkOoJMqzRi2YnGJPu4HfIOBx1NcVGs5O0vuPYrUlN8vkes65NLcaINSlmXzLmwIdRwQ6nBPuOQM+oNctRqMuRdwy5OKlEjm/wCJJ4htr4OwMU0UpAHG0kbvwALcV53NzJnrOPJKx6RYHyUvYtgYQXBZdz5AUkN938Dx3rNlLY83/a7Uj9n7xSQXdCtmQQm1R/pcI6fQD/IqZbFR0lY37y4NhqqQqJ7RZIdxiZTdI5JOSDnKgbMH1HaqIehmtb+T4l8LWLWjQL80rqbwzIWWMAFQTwBnjgDBwOlNCPNtMuY7rxM01zJsimuGZ2zjHzFic/StG9CEtRdO0zwdo+swS2niad4ouNh1Yso+XH3S2DjPQiopzcZKVjpr0va0nHYr3ngXQ7vxBCV126sEmBmtbxLgyLgEEbPmBxzkjoK7+Rya5UedSxEWmr6rQxNL8L6rqmuXA1C4N/b2LMDcbvlfa4CsDjo2D+HtXVRi/bJvuc+IxNOFPmb30NbQ9N8GT6Qsd/rOl/a3mYGFzKsmN2ACVGOmOpxzXVmc4/W2paPQ8yOPxdKg1CF4+hrap4s8GaBJ9g0OKO7Jwgt7FR5atgjaW6Y7Z5PFROrTUbImnTq1WpbXNHw1p2r6cNS1vWbSC1ZovKt7dHLGPJy4J6ZOFHHpXI6ik7I9xScafIU/HXi238F6LpGnHTYr6+ugbgCQDahBxvJIJ654GO/NevlGSVczdSUJWUVf1NcPSco6Hkl9feJtW1a5jtrmXbOXnZoBsB8wlmLHsMk8ZxxXJUo1HNw7Hn4lxpSUrXNLwn8LJri+jbX78RRzDeiW/wA7OM8/MeB+GawWDUo3buebmub1cHh5PDw946U+DvhrpFqLnQ9W1OfWYp1EcMqKFzuwwz1OBnnviunBYerSlzSilGzPNxGOqV6H7xNNrtodB4p8I6Pq2i2mp6HmeylVRE8EpJR9gwDjvuDA57mphOVVWvZnfSxFGkkqu6NTw74A8NtaW2pXOovNOjKL1L+TZ5SYOWO7pggDn16iuSU5UpNz3PX9tSUUo63Om1XXvhbfyw2s9/p1w1qnkwfMSeCSAMds9AK4JSrSbkd+Fo0aUfNjPFysb7aIt++0wAp56HtXJh/h1OvEx/eOx6BZyAtdM5jBlghzvjyTuj9R7/lVPoZrW6PO/wBrxG/4Z78S7o5PljtMMzjp9st+cDr1/lUy2NI7m1LGge5FoHdVtBzp04CZBlxvDHk4PvkfhVGRk2CRQ+NPD4VdPG9ZgBZxsqgEKV5bBbqefrVdA6nkQjlW4lRQcqshOenQ1a3Gijp+mWjrDD9kgVvJjAHlrkkqCevGa3hhlUTk5WsaKulo0dP4S0+0ae5tLvVItLiiOxCER2D4++B0GOx69a6KVCVOV6cm9DjxUaNaHM42sy/4jlR7HS7cPHKj34RnCDZNtbG44656jPY152HxFT6w1KV7GssHQhQUowtc4E+BpvEfiK4WGRYEmRZdzk4AIxwBySCD29Oa+qx9KlUkq0r6o87B4im6cvaS5Uj0fw38ErDQ9Otta1TUZ5Z0CzsgURCJh83zZyeD9K8yhGm20zzqmYVKlSySS/E37PTdVvfD9vIBNN9pnNyzSSMxCs2VAJ7bdtZVJwhOyPYVGfLFPsY/xA+F934q1hL3+1o4I4YkjiQ27EqF68+5Jr1Mq4gqZapKEbqWh6FNwUfkR2Xw01GytFQaxZLHECNxtX4Xr61zf2i5z1juczoU1Fx1fqeSm98d+MNUg0TQC5Ku6W62w8suoyclic9FJxn8KnFt4aj7RN2Z5SWHqVuSavYk8HeHtc0fxTcrr9pNavafKqSZG52+VeDznJ616FLOK2JwL9ok0tF3ODNlFSjhoO7k/wADvtHurjR/BM0umyvbyxCRUkjbBADdKzjBOgrnh4px/tNU33X3HZ3rfbPCFpfrrVw2qBoR9lkO4T7wASuBuyOSOTxn1zXjumoO1RXPs5yVPTDpc3mP1yxltNHuoZZRK5jU5APALD1puMF70VY3hXq1Fy1LX8jV8RwsbnLPnFqR9CM8V5dC1vmelitJ6djvLAMi3mWkRUhiUshBXKx457//AK6cuhkjzX9r8IP2e/Em4Qb/AC7TBViSf9Lg/wAD+FTLYuO50Jxd3asZ7a7EluyKyhrdQu4ZBwSWB3EY424zjFMyOfvbyQT+GtT3X0otr4QTvMEWMNIoX5cAE8rjPIIAzzVILnK3OnWtv4suLC4jDQLeMrc4+Qtzk/Sri7akzvyu25vy+DtJheKaO2niMYWIp53zKcBVLfNnA3A8emCc169JXW2jPG+uP2jjLdGVqGi6HFqEUGpxMl27kSySzuNirjoAwJJ3D+I45+h2c5U2lDqLDSnieaX2Ubg8P6Nql1GltL51vYtE0ckJ2xx/d+8CSScg8A4x9a44YanBuXLqxV8xrx/dt3SNvSdBttDmTUdPtojeN+7hlHRUYAt1JAxjIOe9dMqrnD2beiPN5G5OonqbMnw+0vX9Jzqk13cx3LedLDJcyFGfueWPpx1rgliVSfKkexQy72jVZvUqH4X6aTCGunhAIAVLqQ8AdskA9T27D3zEsTG3wnpqnXbbnUvcsSfC/QvLghlupFkAI3efIGk98F+v0ojilF35SHh59JiW/wALvDbLj7SZk2hX/eMQ2RyeG6nj/JqnjnbRFLDt7yZQ1rwX4c0GztDYRQ+dBKsChTtKA5c87gFB4J+n41vSxU665ZbHjZpguWClT3uJqmi2l9dWN7qcS6hODslkZWLo6oQob5j3/i6ZIrWFS0XCOiucFPCOVVVpO7S3MLWY/DWl6HmXSVaKVzFJCTghnYYbg8jO49s/y6qca9RuMBRwdBVfaT3vuzci0TSU0e0vLSWGUudm7jzAoHABGOp/ya41K82pLZHfioQj78Zas130/Tggt59OV2EQB3sWDnORk9CTxWavLZ6EYeb2e5UubGa51SIGPy/OkRAvUAZyR+QrhmlFvlPdpSnKKc9zqLeMOssgMQMkxAbkuoBA6d+9Yt3Oix5d+1y4l/Z78XOAVUGyX5YsKxF3F69MZx+AqJbFQ+I2b2K7EcsM++R7J/ma4jAhhAym445YjKnPPv61oZvRmJ4osobrQ7/ULeWHc6i6jkuJGjcEHzB5UeOBu8wehJoT1JMTxvKkt5pviKEbY9TtEkddvSRQFbp9Af8AgVaQBnRJrWkSactxq96sjXEUZSOUFjGwLK2MDOc89RgYrupVrW6HkVsLLmk4Ruc9qI8I3hFtq+qWdxEqs5nZ2jFuw77hjAwAOBzkZziu6GL5XzJ6o4q2Dr07TgnY6TwjPp4stS0mxitba1s4ftM0jyEu6nOGY9/kUEgdAB9BNaq5y9rLqYTwFSnT5uq6dTdi8T6DLbJFFr1i3BAkKFwF4JAJ6+gP865bxUrs1pYavKK0Llj4v8NobRZ7tnuYUeKDaXWJ9wGQVyQcAYyR6+tZfVnXleLPXjiJ0YqLjqZ8vivR7f8As9Lq805p7GQO6LbSDYmxlG3r3Oc/pWyy2bdkvvscs82VJXqIii8ZaNLbxO11JIQ5WQvbyAlTjncQecqMngcmtHlFdPbT1Rz1M+w8Vfr2H6Pr+iywC3SGW4EMiM26UscAbRncPukLnA9K58Rg/q/xux15fmDxqvSgyK98Y+H5pTNBOqQ+d5rF5XYbxvVlG5eOTz/KnRpqI8ZCtXptRjrcSPxbors0VnfkSy8Fy3UjPYDHOASQMknnpW3KoayWhy08PWUPhsZ2g65pvinWrLSLO6il86GSRZmQkKsZUAsCRtDNwOM4z9B3KnUjh3iVsml6/wDDDlhY1ItVO2wy01jR9M1O6t7aSK3iF0y3Cjc5Do/UMw6DB4HHU/XnTUoJrcwp4OpJWirJaHXaZqml63cRWlpPNcNAciQkqu31+vbt2rilKVO7atc6aOBnzK+q9TbVFbUmkCArCp2n/bbgD+dcDZ7yRoKoijijbzzHbrufgKyE5/MYz+QrMs8i/a982P8AZ08Rh1n3TNauxLZU/wClw/l0X86mWw46NHW6rJFqUNrrNvBE8GpweY7PKdkLAbZDjuRgH1+Wq8jOW1zMmkkt0j1OJ5EYFoZ7udfMZyGHESKcAb84wAMMODTJObm0X7Zp2oeF2glhmbOpaMJCDLg58yM4PXqMeoFUmI4OwI1BTplxkSBhJGzYzkYBHIOCQPxIA710UZ8rtYUrrVOxz3i9LZLe58ltyeWFcYByC30FduIuoJtamFGbnNq+hpXdjcaQ8Fpb6rciHWJNtwgYqdgTBHpyOPpXPTzX6zT9k4pNdToxmXezmqvPdPodJpI0mO1SKe5itwkSoihgo6/7prrvNW5Vc41UWqbIku0k1rS/Lk3xiWXv228Vth0vb2IlV9xSLiMja/qTZUYt4f8A0KjGNrEJGkYwnDa5q3U2jLayYu4zcsx+QS/0o9rW5mm9CJYalvy6jvCJVdX1xj1Ig4+itXz+YTcnFM93L4RjF8qMLww0I0wyXBRImnnJLHA/1jV6+HT6Hh46Vl5GzPLo4ijOmzRPLuywViTjFatVXGXOcdBU/aL2TdvO/wCpyK6eLLwkmtWTPb36ooWWNiCBuJwPbnoc16MsZVjhvYxfurU+bo4qtVzPklJ2va3Q7O0bStPt4oLoosWWPzsSzHOTk5yTya8z941ddj6TEeyhVtUTaPQvDVpa6fA8lvHiW4C5GOgxwK8+tUlPSR6ODpKnD3dmdPaQrGTG2wsqmRlfIEjegPqK5mzutYV/KLxxyGHDHcWkDEx452t7Y4qQZ43+2LKR8C9ehTYu42zEIxK7RcxAYz6n+VEl7oov30fOWlftNePNO0YaVFpPhqS3W4+0R+bbTMUbuB+9xg+hFQ5tu5p7JWsK/wC034+e4kuW0zw4biRBGZWt5yQuMcAzY6cZxnijnYeyRSvP2iPGdxPYXA0jw5Bc2UvmpPFbzCR27l2MpJz1P1NHOw9kjM1n42+KNT1mXVW0vQ7WaV/MZbeGVU3dyAZDjnn60Ko0HskZ2pfFXXb5pmbTNGhM2N/lQyAE5BLYLkZJH0rR4ib3D2cSW++L/ii8uLWaa20sG1bdGFhcDOMc/PmsKKVFtxW5tWm6ySl0Hn4xeJsECx0oZOT8k3/xytfbT7kJW2/QD8Y/FYngmjt9MiaEsV2xOc5GDnLmt6OOq0Xdfic1fCQrK0mx8Xxo8XJdXFyYNLd50VHzC4GB0xhxTrY6pWd5WFRwcKKtFslk+N/jCQANb6WQOg8uX/45WHtpHTyvuLa/HPxxazXMlv8A2YhuNu8fZiRwMDGWqZzU7cyWnr/mOnzU78repBB8ZvFsVstv5GlOgZn+aBurEk9H9Sa2WLqLbT7zONLl2b/D/Ienxp8Wpytpo4b+8LZsj/x+q+u1P6v/AJg6XMrN/l/kMf4z+LX0wac0GlmAADHkvnj331o8yqtWsv6+Z48OHsJCv7dX5vX/AIBeh+O/itL+K9k0jw9cSxHcvm20hGf+/n41i8XUtZaHsqmkrHSWn7VXxCtm3Jo3hZm9WtpyR/5GrF1ZMPZIs/8ADW3xI2GP+xvCvlkg7Ps1xjPXP+vzmp52PkRJ/wANe/E3e7nSfCrGRdr5tZ+R/wB/qOZhyI434ofHbxf8QtAm0XWdP0S2tZXR2+xQyo2UIK/ekYY46Ed/XBDc21YFTSdz/9k=)}#Single{background-image:url(data:image/png;base64,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)}#Auto{background-image:url(data:image/png;base64,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 + UuePfAcPh7RrO7t5Z55ZDsmUqSM + oIGMdOpznPHGazwOZPEzadkh4jCexS7nMxaTNDHc / 2 hbTW7C3MkXmKVyRj25rvddNpQfU51SsnzaGUGI711qbMGiVZc8GtVU0sS46aCkK4 + XFXZSQrtMidSO1Z8rKuNyRU7DFDGndisNzUXQw3e1K7ACxouAoLswVQSTwAO9DY7CypLE22WN0b0YYNSp32YONibTEim1CCG4YrG7BSR2z3qaspKLaKpxTkkzb1NNDttPNvAt / DqcZ2yjdlGIxznjHc9PQe9cdOWIqTu7cp0VI04xstxdI8MzajokmqR39vmMnMOCXA55Ptwemcd8UVsZGlUUGtxU8O5xckzpPCdhfa / AH1Se4FnY7TJALgQ + bFg8KMe2C2DXnYuvSw1T3Vdy + ev8AXQ7KVKVeF30JdZ0S1fxZFb + FbhdMVYjKJDI8b4GSOSSM4BPBx05zVUcQ3ScsQr6 + TInSXOlDQj0C9dXl8KTx2Anlk / 5 CMzCMLuycuSpL / ezjBY8AVdalzWrJtJdCIT5U4W + Z2svxL0TwPp8Ok6HPrGvX0IYTahesyI5K7SsatyqAcDIz9OlcVTK5YyfPZQXlv66G8cUqUOV3bKnhD4vSTtcx6tEloZQSssSfKfmDYPocjrWOKySVJKVOV / zNaONVR2nodF4UuL7WU / 4 SDUo5fsDEpZwHIUADG / 2 J / PH1rysWo0n7GL16 / wCX9dT0afvR57ehZvb + 2 kcafKYvMYEJbuyjdwT8xJwBgdzWdGFRe9HRdyKko7SOH8PFtZ1nWNG1qytylpHiATfPNAoAIChwGYKqng8DP0FfQ1YqhThOEtX9z + 7 Y8qL55OMlscv4W0SP7Rq4vdMsbi2h3hiJgJYsc7kB / hA7kd69CviJcseWTTZhSp2bujK0rwR4j1fxJp2j22j3MM2pgPbb0IVoskGTP90YOT7V01MbTo0XUlLYxjQnOXKluR + M / Dlto / jefw3omqx60I5FhW4iXarynAZRzyA3GfarwmMlVoKtNcvX5Cq0owqckXcp69ouqaDfvYanbhZVJDBHDjg4PIrqw2Np1VeL0M6lCcHZmaUDfd4PcGuhJS2MtVuRshBNZuI7kYBNRYq45Yyw + UE / Slsg1L2h2tpdX6wXUhjzjaM4DHP3Se2emayrzlCN4F04pytI3NXhtLHWkuvDdldKLIh5g + 792 w9T9c81w0ZVKlNxrvfY6JxjGd6a2NDVNNvfE0EGv3zpZRTts3KmUQZ5Y859TgDtWFGpDBydKOv5msoOuud6GF4o0aw0h4PsGqpfM4BJTHBxnoCSCOn + NdmHxM6zfNGyMKtKNO3K7nSWVtoOrSRXMlrNc3TQq02XKJkLzwOT065FeZVr4iheKaSTPUpYWlWSmye11K7sbKe603w9DDbQvsaaK3LYPuxziolRddpVKm / maP2dCLagUb241vxFcNd3ctzqcdqPIgKoTHGgYkgDsMkmu2nTpYaCjHS / d6nmzlOtJysall4ctZ9Ha / nv3DgAtFEgAiHJwckZwB82On1rGeKcanLFFxopxu2bnw3v / wDhJNesNNFnDBHbh55xtAiZFGVBU5GOg7HuSa58dSdKnKq35I0oS52olDxr4B8ba545k0jTraTVwjOYXQKDGgPIkcgfdGBlvTitctxuHVFPZmWLpVOfXY6zS / DnhfwzoQ0f4jeOLAxhSx0 / RozdXEZ7L5q / Iuc9MsM9RWVWr7Wsp0U391vx / TY0UJxp2krI6OaTTb + xtbPQbG80 / Q7aNUtxdXLPPN33scDYDn7vt2HFeXUoR9q6klaT37HZCrJQ5b3Mu / 0 d2glhhInglZXktrrLBivQq3VTyeeacVGL5lo + 6 GqnMrSV0Ylt4bttJ1mfVNHSOGa4dIjZ6kyFixzzFNnoDg54PHOAa6ZY1ygqdTZdVt80YrDWk5Q37M9G + Gnwr8N6frEmua3MuvatPL5uJgTbREnJbGP3rZ9flGeN1edmHEaoQVKiv8jShl7k3OQ39oLxTF4Tub + HRn + 16 xLb29vc3xXYYLdyx8uMchS20j0AxjmoymnPGSUqr0d36tJfgrjrv2cLpWPKPBenaZ4Wsr3xHdwxz32JB5M8KOqIwO143J2lgcdMHpjqcevisVPFSjRg7L + t0YwoRo3nJEXg + KTWNcm8ValfG1EBP2N7i2EkcrAMcMRwMY64PzMPc1WJkqFJUIq997dCKa9pP2jLvxT07wtpvgifW9S0VYfEetMosYYJiY7aMPuac44G4fKq88c5NVlNfEVMR7OMvcju + 77 IzxkYRhdrVniYkzw2DX1yqdGeRy9TuLDTtPPw9vLv7Hb + erEecCC64z1BycHI5GMdOteFVrVFiYx5tOx6MYRdFuxF8MVjlW + QbFcxkKrReYOmTkHqMA / y6E08zlJRi1 / kGE1TRz + oWAfTrWeDc11vkSaLHzLg8HHp2roo1f3kovbSxjOHuKS3Os8N6mljpi6pLawaherA0UsErEOyY + Vxg5yuQfwGcjIrgxEJVKrprSPR / mdcGowU932J7TTtalZFubqdNO1Qsfsdi4Z8lQcMQuBxjdge3HaZVcPH4VeUer / 4 fuChUa1ej6IuRaJpGjw3Gl3xsfLkYmNiubzHUZwcKRjuccn61hUxlaracb3 / AAN6eFXw2KWLC01sWWnLOYwirMZnRi7A8kYAAHT1qajnOlzyO + hHlfIX9P1vXNI1AW + m6ibaC4OJVI3QuQeC6YIYD6Gso06c4Xl0 + 83 qxdtCTRbG70W2mi / te2uoHBzG9sWU5YbgMHIzgZKkHtmqq46nVkrQa + f9fqefDA1ILV3OeuNDS8uJZZtYdTLIXKLbELknsN1dsMdypRjTv8zCWXy1cpWO68G6HP4f0PV5PI1A3l9AlvbySQrCqJnJY5Ylc4GCQB16cVw5jXdRRTVktWr3LwlJQluU7W08UX2uSTbpyon3yx + dtViB2wemB1FcMq + FhSS0u1poeqqbTemhc0fQIoL + XVdYtW1BkkwqROHEJ4bc4GWYnPHBHB + o66WJXLyU9zjxLc3tob8etNC0ciWH2i3LhpIy / luw6kDkHrgdQ3WpdJtXb1 / A5ufXYoXOrzCaNogsZHMttcSDDndnBwThcbRjnPzZ64q6dLTX71 / SFKR3ngzw7B5UGs + JbeK0guEP2Wy5Y3XOfMYbRiMYUdMnsSTkclatGjG + 7 LgpTehS1r4s2ngbx1FpkmjhkljjYtaxp90s2RsIAHcA5yBx2rzKGTTzOg8TGVnd6WOivi40Jqk1p3ucj8bm0TXfEd94w169Zbb7NFFZ6daPmSZ / LGHaQAoqbj1BOcEe9ezlMcRh6caEY + 827 vol + uhy4hwm3NvTt3PL / BmkeK9Rsrm / 0 a6WG2teHWS4ABBGSAh + 8 B3OMDPPWvexbwsWo1ldvy / VHDRdZu8GdjfxX40xLCHXkslVRJLD9mAgZ9uC2ASB94jO0V4eHxFHnc5Qb + ev6HqVcNUcbRkkYni7S / EeuWk11e6i2pSSS / aJHgjEiFgu0AFOQAoAC7QBXp4TFYWlLlgrdNdPzPPrYeq1d6nnM1pcRuVKNkdQRg / ka92Mk1dM85xd7Houlz2Vt4fmsYXu762dt4JVISM56HJPOefXHtXztac5VVJ2i / mz2aVFez01Ra8E26SXIi0jw4PNcZ2 + Y0m5QMlmycYAz6VlipVamjqbeVjoo0adOHM1Y3p / C9 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)}#System{background-image:url(data:image/png;base64,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)}#BigBox{background-image:url(data:image/png;base64,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QhCEJ+VbzS9J/EmCZ9j0QlfeOQ5dNhvCZC7P8BbL+CY0QlK+SJaOBzD6TYTEuHD/AABsb/Awa4lPevuQ+ixiFFwXdfj/AP/aAAwDAQACAAMAAAAQm2z3eSSWXTTSWbzbX32WXW2222ze322//AA2W2222EWWQAACSSS6W2//AOm3/wD+3bfb/wCymSXtSy2W22+37yTe22+33ye32222kAAAACSWwmS21AASSS/S/wD/APtt/wD9bW2zuA224yybbbbTSTTSSX7Y+23/APs3ttttppNtltgAEkFkrCAEkkl+t/8A/Jv/AN223S+wC2S7X7bbZJJZJJLaSSf7W/2222b222222mkk20kiUmWVSSSSXS+22/7c2+zbayyq/b6bspH/AP8A3/u+NstpJ/pPbf8A32bff222222km20ACy2SASSX6W3+2+2yeTeK5z//AP8A/wD/ALyafTfbaTf22S0kt22v9139ttttk8ntpJtttkkrYEkkul//AP8ATSbeWTb/AP8A32+22/8A/wD7bf8A+20k+0ktpNrZf4Lv7bbfb7SSBCSbbbLJKwJJL9bf9JLNbb/+23/32222ltuv+t222/28n1tttvKlatJbJZJLbSTSRabbbbZIQBJJd/p9f7rIYElmlgtuvv22/wB/v9ttbdt//bUyxfe3aSSSWST7fa020Em2222SXySSa6362Tf99vtt/wD/AO22222k2223+22l2/8A/wBmllut0kmmm+Kaad3rtFNtttlsklP22311t+mZZab+6bbSS3/33/8A9sk0xnv+s2//AP8Aksvs2kknbSMgCRLAoNttpNstkl3i+13ws23vaWTb6S2ySSSSSWX/AM/pt3//ALO/7X//AP8A45em0kCA2balSYLbbbbbbbK96mPJ79t/8k/lv/kkkn8klukln/8AN5vxcWTz/wD1rNybbabJIOXkttpoFntsl+8k8z16qk/+33+NQP2AMAQQCKyeT/32/wBDAKZL/rbV1k02ywSCYXLZZSZGSRJbd71LRluAopbd9jP/AH7b1u0ttv8A7b/3+/38hBIIMklF3SbSbRI3zRkttFM5tG+ltv8Acz3RuoU9pfvbvv3y5X23fW9Vn2/vt9syYSaIvwKGkkfttuqBZIZZBBCYJnbZN/rpc9F1WXeft9t/FLgAC2322qM/v/vt961Z87FcJJu9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)}';
            s += '.sweet-alert,.sweet-overlay{position:fixed;display:none}body.stop-scrolling{height:100%;overflow:hidden}.sweet-overlay{background-color:#000;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";background-color:rgba(0,0,0,.4);left:0;right:0;top:0;bottom:0;z-index:10000}.sweet-alert{background-color:rgba(0,0,0,.75);font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;width:980px;padding:17px;border-radius:5px;left:50%;top:50%;margin-left:-256px;margin-top:-200px;overflow:hidden;z-index:99999}.sweet-alert h2,.sweet-alert p{width:100%;padding:0;position:relative}@media all and (max-width:980px){.sweet-alert{margin-left:0;margin-right:0;left:15px;right:15px}}.sweet-alert h2{color:#6b9eeb;font-size:50px;font-weight:600;text-transform:none;margin:25px 0;line-height:40px;display:block;text-align:center}.sweet-alert p{color:#3d93d3;font-size:24px;font-weight:300;text-align:left;float:none;left:40px margin: 0;line-height:normal}.sweet-alert fieldset{border:none;position:relative}.sweet-alert .sa-error-container{background-color:#1f1a1a;margin-left:-17px;margin-right:-17px;overflow:hidden;padding:0 10px;max-height:0;webkit-transition:padding .15s,max-height .15s;transition:padding .15s,max-height .15s}.sweet-alert .sa-error-container.show{padding:10px 0;max-height:100px;webkit-transition:padding .2s,max-height .2s;transition:padding .25s,max-height .25s}.sweet-alert .sa-error-container .icon{display:inline-block;width:24px;height:24px;border-radius:50%;background-color:#ea7d7d;color:#fff;line-height:24px;text-align:center;margin-right:3px}.sweet-alert .sa-error-container p{display:inline-block}.sweet-alert .sa-input-error{position:absolute;top:29px;right:26px;width:20px;height:20px;opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .1s;transition:all .1s}.sweet-alert .sa-input-error::after,.sweet-alert .sa-input-error::before{content:"";width:20px;height:6px;background-color:#f06e57;border-radius:3px;position:absolute;top:50%;margin-top:-4px;left:50%;margin-left:-9px}.sweet-alert .sa-input-error::before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sweet-alert .sa-input-error::after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sweet-alert .sa-input-error.show{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.sweet-alert input{width:100%;box-sizing:border-box;border-radius:3px;border:1px solid #d7d7d7;height:43px;margin-top:10px;margin-bottom:17px;font-size:18px;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);padding:0 12px;display:none;-webkit-transition:all .3s;transition:all .3s}.sweet-alert input:focus{outline:0;box-shadow:0 0 3px #c4e6f5;border:1px solid #b4dbed}.sweet-alert input:focus::-moz-placeholder{transition:opacity .3s 30ms ease;opacity:.5}.sweet-alert input:focus:-ms-input-placeholder{transition:opacity .3s 30ms ease;opacity:.5}.sweet-alert input:focus::-webkit-input-placeholder{transition:opacity .3s 30ms ease;opacity:.5}.sweet-alert input::-moz-placeholder{color:#bdbdbd}.sweet-alert input:-ms-input-placeholder{color:#bdbdbd}.sweet-alert input::-webkit-input-placeholder{color:#bdbdbd}.sweet-alert.show-input input{display:block}.sweet-alert .sa-confirm-button-container{display:inline-block;position:relative}.sweet-alert .la-ball-fall{position:absolute;left:50%;top:50%;margin-left:-27px;margin-top:4px;opacity:0;visibility:hidden}.sweet-alert button{background-color:#8CD4F5;color:#fff;border:none;box-shadow:none;font-size:17px;font-weight:500;-webkit-border-radius:4px;border-radius:5px;padding:10px 32px;margin:26px 5px 0;cursor:pointer;left:450%;position:relative}.sweet-alert button:focus{outline:0;box-shadow:0 0 2px rgba(128,179,235,.5),inset 0 0 0 1px rgba(0,0,0,.05)}.sweet-alert button:hover{background-color:#7ecff4}.sweet-alert button:active{background-color:#5dc2f1}.sweet-alert button.cancel{background-color:#C1C1C1}.sweet-alert button.cancel:hover{background-color:#b9b9b9}.sweet-alert button.cancel:active{background-color:#a8a8a8}.sweet-alert button.cancel:focus{box-shadow:rgba(197,205,211,.8) 0 0 2px,rgba(0,0,0,.0470588) 0 0 0 1px inset!important}.sweet-alert button[disabled]{opacity:.6;cursor:default}.sweet-alert button.confirm[disabled]{color:transparent}.sweet-alert button.confirm[disabled]~.la-ball-fall{opacity:1;visibility:visible;transition-delay:0s}.sweet-alert button::-moz-focus-inner{border:0}.sweet-alert[data-has-cancel-button=false] button{box-shadow:none!important}.sweet-alert[data-has-confirm-button=false][data-has-cancel-button=false]{padding-bottom:40px}.sweet-alert .sa-icon{width:80px;height:80px;border:4px solid gray;-webkit-border-radius:40px;border-radius:50%;margin:20px auto;padding:0;position:relative;box-sizing:content-box}.sweet-alert .sa-icon.sa-error{border-color:#F27474}.sweet-alert .sa-icon.sa-error .sa-x-mark{position:relative;display:block}.sweet-alert .sa-icon.sa-error .sa-line{position:absolute;height:5px;width:47px;background-color:#F27474;display:block;top:37px;border-radius:2px}.sweet-alert .sa-icon.sa-error .sa-line.sa-left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.sweet-alert .sa-icon.sa-error .sa-line.sa-right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}.sweet-alert .sa-icon.sa-warning{border-color:#F8BB86}.sweet-alert .sa-icon.sa-warning .sa-body{position:absolute;width:5px;height:47px;left:50%;top:10px;-webkit-border-radius:2px;border-radius:2px;margin-left:-2px;background-color:#F8BB86}.sweet-alert .sa-icon.sa-warning .sa-dot{position:absolute;width:7px;height:7px;-webkit-border-radius:50%;border-radius:50%;margin-left:-3px;left:50%;bottom:10px;background-color:#F8BB86}.sweet-alert .sa-icon.sa-info::after,.sweet-alert .sa-icon.sa-info::before{content:"";background-color:#C9DAE1;position:absolute}.sweet-alert .sa-icon.sa-info{border-color:#C9DAE1}.sweet-alert .sa-icon.sa-info::before{width:5px;height:29px;left:50%;bottom:17px;border-radius:2px;margin-left:-2px}.sweet-alert .sa-icon.sa-info::after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.sweet-alert .sa-icon.sa-success{border-color:#A5DC86}.sweet-alert .sa-icon.sa-success::after,.sweet-alert .sa-icon.sa-success::before{content:"";position:absolute;width:60px;height:120px;background:#fff}.sweet-alert .sa-icon.sa-success::before{-webkit-border-radius:120px 0 0 120px;border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sweet-alert .sa-icon.sa-success::after{-webkit-border-radius:0 120px 120px 0;border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.sweet-alert .sa-icon.sa-success .sa-placeholder{width:80px;height:80px;border:4px solid rgba(165,220,134,.2);-webkit-border-radius:40px;border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sweet-alert .sa-icon.sa-success .sa-fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sweet-alert .sa-icon.sa-success .sa-line{height:5px;background-color:#A5DC86;display:block;border-radius:2px;position:absolute;z-index:2}.sweet-alert .sa-icon.sa-success .sa-line.sa-tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sweet-alert .sa-icon.sa-success .sa-line.sa-long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sweet-alert .sa-icon.sa-custom{background-size:contain;border-radius:0;border:none;background-position:center center;background-repeat:no-repeat}@-webkit-keyframes showSweetAlert{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}100%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes showSweetAlert{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-transform:scale(.95)}100%{transform:scale(1);-webkit-transform:scale(1)}}@-webkit-keyframes hideSweetAlert{0%{transform:scale(1);-webkit-transform:scale(1)}100%{transform:scale(.5);-webkit-transform:scale(.5)}}@keyframes hideSweetAlert{0%{transform:scale(1);-webkit-transform:scale(1)}100%{transform:scale(.5);-webkit-transform:scale(.5)}}@-webkit-keyframes slideFromTop{0%{top:0}100%{top:50%}}@keyframes slideFromTop{0%{top:0}100%{top:50%}}@-webkit-keyframes slideToTop{0%{top:50%}100%{top:0}}@keyframes slideToTop{0%{top:50%}100%{top:0}}@-webkit-keyframes slideFromBottom{0%{top:70%}100%{top:50%}}@keyframes slideFromBottom{0%{top:70%}100%{top:50%}}@-webkit-keyframes slideToBottom{0%{top:50%}100%{top:70%}}@keyframes slideToBottom{0%{top:50%}100%{top:70%}}.showSweetAlert[data-animation=pop]{-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s}.showSweetAlert[data-animation=none]{-webkit-animation:none;animation:none}.showSweetAlert[data-animation=slide-from-top]{-webkit-animation:slideFromTop .3s;animation:slideFromTop .3s}.showSweetAlert[data-animation=slide-from-bottom]{-webkit-animation:slideFromBottom .3s;animation:slideFromBottom .3s}.hideSweetAlert[data-animation=pop]{-webkit-animation:hideSweetAlert .2s;animation:hideSweetAlert .2s}.hideSweetAlert[data-animation=none]{-webkit-animation:none;animation:none}.hideSweetAlert[data-animation=slide-from-top]{-webkit-animation:slideToTop .4s;animation:slideToTop .4s}.hideSweetAlert[data-animation=slide-from-bottom]{-webkit-animation:slideToBottom .3s;animation:slideToBottom .3s}@-webkit-keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%,54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%,65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%,5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}100%,12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}.animateSuccessTip{-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.animateSuccessLong{-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}.sa-icon.sa-success.animate::after{-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}@-webkit-keyframes animateErrorIcon{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);-webkit-transform:rotateX(0);opacity:1}}@keyframes animateErrorIcon{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);-webkit-transform:rotateX(0);opacity:1}}.animateErrorIcon{-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}@-webkit-keyframes animateXMark{0%,50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}100%{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%,50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}100%{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}.animateXMark{-webkit-animation:animateXMark .5s;animation:animateXMark .5s}@-webkit-keyframes pulseWarning{0%{border-color:#F8D486}100%{border-color:#F8BB86}}@keyframes pulseWarning{0%{border-color:#F8D486}100%{border-color:#F8BB86}}.pulseWarning{-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}@-webkit-keyframes pulseWarningIns{0%{background-color:#F8D486}100%{background-color:#F8BB86}}@keyframes pulseWarningIns{0%{background-color:#F8D486}100%{background-color:#F8BB86}}.pulseWarningIns{-webkit-animation:pulseWarningIns .75s infinite alternate;animation:pulseWarningIns .75s infinite alternate}@-webkit-keyframes rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.sweet-alert .sa-icon.sa-error .sa-line.sa-left{-ms-transform:rotate(45deg)\9}.sweet-alert .sa-icon.sa-error .sa-line.sa-right{-ms-transform:rotate(-45deg)\9}.sweet-alert .sa-icon.sa-success{border-color:transparent\9}.sweet-alert .sa-icon.sa-success .sa-line.sa-tip{-ms-transform:rotate(45deg)\9}.sweet-alert .sa-icon.sa-success .sa-line.sa-long{-ms-transform:rotate(-45deg)\9}.la-ball-fall,.la-ball-fall>div{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:ball-fall 1s ease-in-out infinite;-moz-animation:ball-fall 1s ease-in-out infinite;-o-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite}.la-ball-fall>div:nth-child(1){-webkit-animation-delay:-.2s;-moz-animation-delay:-.2s;-o-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;-moz-animation-delay:-.1s;-o-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}@-moz-keyframes ball-fall{0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}}@-o-keyframes ball-fall{0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);-moz-transform:translateY(-145%);-o-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);-moz-transform:translateY(145%);-o-transform:translateY(145%);transform:translateY(145%)}}';
            document.head.innerHTML = h;
            document.head.children[2].innerHTML = s;
            document.body.innerHTML = b;
        }
        SetUI();
        window.addEventListener("resize", onResize);
        onResize();
    }

    function checkMe() {
        var img = document.body.appendChild(document.createElement("img"));
        img.id = "deleteMe";
        img.onload = function() {
            isPolo = true;
        };
        img.onerror = function() {
            isPolo = false;
        };
        img.src = "https://SanitizeBot.github.io/images/NBot.png";
        img.style.display = 'none';
        if (localStorage.getItem('ServerOn') === 'false') {
            onLine = false;
        } else {
            onLine = true;
        }
        isPolo = isPolo && onLine;
    }
    checkMe();

    if (window.location.href.search(/Bets/i) > -1) {
        window.resizeTo(700, 500);
        window.moveTo(100, 800);
        window.focus();
        document.querySelector('body').style.zoom = "100%";
    } else if (window.location.href === 'https://www.999dice.com/api/web.aspx' || window.location.href === '' || window.location.href === 'data:text/html,chromewebdata') {
        if (isPolo) {
            SetSimpleUI();
        } else {
            SetStandUI();
            swal({
                title: 'Naughty Bot 1.4.2 Standalone<br><br>I hope you all to win today.<br>',
                text: '<span style="color: red; text-align: center;">Update:<br> 1. Better addy remover (thx Landak)<br> 2. Debug Mode, will collect request params and variables. uncomplete but working</span><br><br><span style="color:#6b9eeb; left: 40px;">2 links for Bot files:<br><span class="Click" onclick="clip(' + "'url1'" + ')">https://drive.google.com/drive/folders/0BzwzmqEWk5a-SGJ0SDg5ekM1d3M</span><br><span class="Click" onclick="clip(' + "'url2'" + ')">https://Sanitizebot.github.io/</span><br><br>Youtube Playlist:<br><span class="Click" onclick="clip(' + "'playlist'" + ')">https://www.youtube.com/playlist?list=PL_oecN6B0Ktp9dYKiQCODHpUXReifUn9C</span></span><br><br>Bot email: <span class="Click" onclick="clip(' + "'email'" + ')">tama.lebarbu+nbotone@gmail.com</span>',
                html: true
            });
        }
        hoverTip('P');
        hoverTip('button');

        if (valLang || valLang !== 'Empty') {
            document.getElementById('LangChoice').value = valLang;
            langSwitch(valLang);
        }
    } else {
        window.resizeTo(944, 700);
        window.focus();
        document.querySelector('body').style.zoom = "100%";
    }
