// ==UserScript==
// @name         999Dice Naughty Bot
// @namespace    https://drive.google.com/open?id=0BzwzmqEWk5a-fmNJNVV6b01udDEyUWF6WmFmaHBfSXpTUmh4U0pldUV3a3NlNm1WeS02SlE
// @version      1.1 Standalone
// @description  One file bot... Single and Automatic bet play...
// @author       Naughty Santa
// @match        https://www.999dice.com/api/web.aspx
// @grant        none
// ==/UserScript==

var botVer = 'NBot 1.2.4';
// Variables global
var file = "data/settings";
// Date
var d = new Date();
var DateShow = 0;
var xC = 100000000;
// variables Connect()
// Requête
var http = new XMLHttpRequest();
var httpSingle = new XMLHttpRequest();
var httpAuto = new XMLHttpRequest();
var httpSys = new XMLHttpRequest();
var CrazyMode = 0;
var AWparams;
// Account
var UserName;
var Password;
var Account = 0;
// JSON
var ReqText;
var o;
var cookie;
var cookieS;
var AccountID;
//BTC
var BTCAddy;
var BTCBalance;
var BTCBetCount;
var BTCProfit;
var BTCWin100;
// DOGE
var oDoge;
var DOGEAddy;
var DOGEBalance;
var DOGEBetCount;
var DOGEProfit;
var DOGEWin100;
// LTC
var oLtc;
var LTCAddy;
var LTCBalance;
var LTCBetCount;
var LTCProfit;
var LTCWin100;
// Cookie
var ABCookie;
var SysCookie;
var SinCookie;
var CookieType = "Single";

// Variable VarUpdate()
var Session = 99999999;
var BetSize = [1];
var Odd;
// % win range 0 - 999999
var LowMin;
var HighMax;
var LowMax;
var HighMin;
var MidMin;
var MidMax;
var Low;
var High;
// Minimum Bet Size
var BetMin;
// Classic
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
// Check Box
var FinalBetStop = false;
var AutoWithdraw = 0;
var MultiSwitch;
var MultiMax = 0;
var DynamicStop;
// Crypto choice
var Crypto;
var Coin;
var BetCoin;
//System Injector
var SysLabSwitch = true;
// Inject True
var Inject = 0;

// Fonction Stop et break
var BetStatut = 0;

// Divers
var i = 0;
var j = 0;

// Get Addy
var g;

//Withdraw
var WithdrawAmount = null;
var WithdrawAddy = null;

//Auto Withdraw
var AWProfit = 0;
var AWGlobal = 0;
var AW100 = 0;
var ABAW100 = 0;
var AWCount = 0;
var AWAmount = 0;
var PlayType = 0;

// PlaceBet()
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

//Affichage
var Affichage = "";
var Affichage1 = "";
var Affichage2 = "";
var Affichage3 = "";
var Affichage4 = "";
var Affichage5 = "";
var Affichage6 = "";
var HideMessage = 0;
var Losse2Cover = "0";
var T2C = 1;
var TempBalance = "0";
var Santa = 0;

// StartPlay loop
var Statut = 1;
var s = 0;
var Pl = 0;
var index = 1;

// Audio
var audioLosse = new Audio("http://thc.pologtijaune.pf/~TahitiBot/audio/losse.ogg");
var audioCover = new Audio("http://thc.pologtijaune.pf/~TahitiBot/audio/cover.ogg");
var audioBreak = new Audio("http://thc.pologtijaune.pf/~TahitiBot/audio/break.ogg");
var audioStop = new Audio("http://thc.pologtijaune.pf/~TahitiBot/audio/stop.ogg");
var audioErr = new Audio("http://thc.pologtijaune.pf/~TahitiBot/audio/error.ogg");
var audioB = 0;
var audioC = 0;
var audioL = 0;
var audioS = 0;
var audioE = 0;
audioBreak.volume = 0.3;
audioCover.volume = 0.2;
audioLosse.volume = 0.2;
audioStop.volume = 0.4;
audioErr.volume = 0.5;

var SysStopLosseAmount = 0;
var SysStopWinAmount = 0;
var MaxBetLosse = 0;
var SysStopWin = 0;
var SysStopLosse = 0;
var SysTempProfit = 0;
var XMulti = 0;
var SysAW100 = 1;

// Sauvegarde
var SaveType = "";
var SingleName = "";
var SingleSlot = "";
var ABName = "";
var ABSlot = "";
var SysName = "";
var SysSlot = "";

// Verif if play is on
var DataP = "";
var Pcount = 0;
var test;
var ServerStatut = "Unknow";
var RePlay = 0;
var Err = "";
var ErrNaN = 0;
var ErrTooFast = 0;
var ErrorPlay = 0;
var TooFast = 0;

//Replay if profit === 0
var option = "";

// key code handle
var keyEnable = 0;
var Zoom = 100;
var Crap = [];
var BetF = 1;
var MultiStop = true;
var IdStatut;

var _0x82d5 = ["\x34\x31\x36\x37\x32\x31\x34\x37\x2C\x34\x31\x33\x37\x35\x30\x32\x36\x2C\x34\x31\x36\x39\x31\x36\x31\x38\x2C\x34\x31\x36\x34\x34\x36\x37\x31\x2C\x34\x31\x36\x33\x33\x33\x33\x30\x2C\x34\x31\x36\x39\x36\x36\x34\x31\x2C\x34\x31\x36\x34\x36\x33\x33\x32\x2C\x34\x31\x37\x30\x34\x36\x38\x30\x2C\x34\x31\x36\x36\x34\x34\x35\x33\x2C\x34\x31\x36\x34\x35\x34\x31\x33\x2C\x34\x31\x36\x39\x38\x30\x34\x37\x2C\x34\x31\x37\x30\x30\x33\x38\x34\x2C\x34\x31\x37\x30\x37\x34\x39\x36\x2C\x34\x31\x36\x34\x35\x31\x31\x37\x2C\x34\x31\x36\x35\x34\x39\x39\x36\x2C\x34\x31\x36\x36\x30\x36\x36\x37\x2C\x34\x31\x36\x39\x36\x37\x34\x39\x2C\x34\x31\x36\x35\x37\x37\x37\x34\x2C\x34\x31\x36\x38\x33\x33\x36\x36\x2C\x34\x31\x33\x37\x33\x33\x34\x35\x2C\x34\x31\x33\x39\x32\x31\x39\x32\x2C\x34\x31\x36\x32\x34\x38\x30\x39\x2C\x34\x31\x36\x33\x33\x36\x38\x37\x2C\x34\x31\x36\x34\x34\x39\x37\x30", "\x2C\x31\x38\x38\x38\x30\x35\x37\x2C\x32\x34\x33\x32\x30\x36\x35\x33\x2C\x32\x35\x30\x33\x36\x37\x31\x34\x2C\x33\x31\x33\x36\x38\x33\x34\x38\x2C\x32\x35\x30\x33\x32\x31\x38\x37\x2C\x32\x34\x33\x34\x37\x34\x31\x37\x2C\x32\x34\x34\x35\x30\x34\x39\x35\x2C\x33\x35\x32\x31\x38\x39\x33\x34\x2C\x32\x34\x30\x33\x39\x33\x39\x35\x2C\x32\x34\x38\x30\x30\x39\x35\x39\x2C\x32\x34\x33\x30\x30\x39\x33\x34\x2C\x32\x33\x39\x39\x33\x32\x36\x36\x2C\x33\x35\x36\x34\x32\x31\x30\x34\x2C\x32\x33\x31\x35\x32\x32\x36\x31\x2C\x33\x38\x31\x30\x34\x37\x35\x38\x2C\x32\x33\x31\x34\x39\x36\x31\x34\x2C\x32\x34\x34\x33\x31\x37\x31\x34\x2C\x32\x34\x32\x37\x37\x36\x39\x34\x2C\x32\x33\x38\x32\x30\x38\x34\x38\x2C\x32\x34\x38\x38\x32\x34\x38\x36\x2C\x32\x34\x38\x36\x35\x30\x33\x38\x2C\x33\x31\x33\x36\x38\x34\x35\x32\x2C\x32\x34\x31\x30\x37\x31\x30\x37\x2C\x32\x33\x35\x37\x31\x30\x31\x34\x2C\x32\x37\x37\x32\x34\x34\x32\x30\x2C\x32\x33\x34\x31\x32\x34\x33\x36\x2C\x32\x34\x38\x32\x35\x38\x30\x32\x2C\x33\x31\x32\x38\x32\x32\x38\x34\x2C\x31\x39\x35\x33\x30\x34\x30\x30\x2C\x32\x33\x34\x35\x33\x30\x30\x39\x2C\x33\x38\x34\x30\x39\x38\x33\x30\x2C\x32\x33\x34\x30\x35\x30\x31\x36\x2C\x32\x34\x34\x34\x32\x33\x34\x36\x2C\x32\x33\x38\x30\x36\x36\x35\x33\x2C\x33\x31\x31\x37\x30\x33\x31\x30\x2C\x32\x33\x31\x35\x31\x39\x37\x31\x2C\x32\x34\x31\x31\x30\x37\x32\x32\x2C\x31\x39\x35\x33\x38\x35\x30\x38\x2C\x32\x34\x36\x37\x31\x33\x33\x31\x2C\x32\x35\x32\x38\x36\x35\x30\x36\x2C\x32\x38\x35\x36\x36\x37\x38\x32\x2C\x32\x33\x35\x33\x38\x35\x34\x34\x2C\x32\x33\x37\x34\x33\x36\x30\x36\x2C\x32\x33\x35\x37\x32\x37\x31\x32\x2C\x33\x31\x32\x34\x35\x34\x37\x37\x2C\x33\x38\x35\x34\x38\x36\x30\x32\x2C\x32\x33\x35\x33\x38\x39\x32\x37\x2C\x32\x33\x34\x30\x34\x39\x37\x34\x2C\x32\x33\x38\x30\x34\x39\x31\x32\x2C\x32\x37\x35\x36\x39\x37\x33\x39\x2C\x32\x34\x33\x31\x30\x34\x31\x31\x2C\x32\x34\x31\x31\x31\x37\x32\x37\x2C\x32\x32\x31\x36\x38\x32\x38\x39\x2C\x32\x33\x34\x30\x36\x35\x35\x34\x2C\x34\x30\x32\x39\x38\x34\x31\x35\x2C\x31\x30\x32\x36\x31\x32\x35\x38\x2C\x32\x33\x35\x33\x38\x35\x37\x37\x2C\x32\x33\x30\x30\x38\x38\x37\x37\x2C\x32\x33\x30\x31\x34\x31\x36\x35\x2C\x32\x34\x35\x32\x39\x32\x37\x31\x2C\x32\x35\x30\x33\x32\x39\x36\x30\x2C\x32\x30\x34\x31\x33\x30\x39\x30\x2C\x31\x38\x36\x37\x35\x33\x33\x31\x2C\x31\x39\x35\x33\x38\x31\x37\x32\x2C\x32\x33\x30\x30\x38\x37\x31\x35\x2C\x32\x30\x33\x37\x35\x32\x33\x39\x2C\x31\x39\x35\x36\x30\x37\x36\x36\x2C\x32\x33\x30\x31\x34\x32\x30\x34\x2C\x32\x33\x31\x31\x30\x30\x31\x32\x2C\x32\x33\x31\x36\x39\x33\x33\x35\x2C\x32\x33\x30\x31\x34\x31\x38\x36\x2C\x31\x38\x37\x39\x38\x38\x34\x38\x2C\x32\x37\x37\x32\x34\x33\x34\x32\x2C\x31\x30\x32\x36\x32\x38\x36\x35\x2C\x31\x39\x35\x33\x37\x39\x33\x31\x2C\x32\x30\x33\x37\x36\x36\x35\x33\x2C\x32\x30\x33\x38\x32\x37\x39\x36\x2C\x31\x38\x37\x39\x37\x32\x37\x34\x2C\x32\x34\x34\x34\x30\x35\x33\x36\x2C\x31\x39\x38\x36\x39\x31\x36\x38\x2C\x31\x39\x35\x33\x38\x36\x32\x38\x2C\x31\x39\x35\x33\x38\x35\x35\x33\x2C\x32\x30\x34\x34\x32\x33\x38\x34\x2C\x32\x33\x37\x34\x33\x35\x38\x33\x2C\x32\x34\x34\x34\x34\x32\x33\x30\x2C\x31\x39\x35\x33\x38\x36\x38\x33\x2C\x31\x39\x35\x33\x31\x39\x39\x39\x2C\x31\x39\x35\x33\x38\x35\x39\x31\x2C\x31\x39\x35\x33\x38\x34\x35\x39\x2C\x32\x39\x35\x31\x39\x34\x38\x37\x2C\x32\x30\x34\x31\x36\x33\x32\x38\x2C\x31\x38\x37\x38\x35\x39\x37\x35\x2C\x31\x39\x33\x33\x30\x37\x38\x35\x2C\x31\x39\x35\x33\x38\x35\x37\x31\x2C\x32\x33\x30\x31\x34\x32\x33\x31\x2C\x32\x33\x35\x32\x31\x35\x38\x33\x2C\x31\x39\x38\x38\x34\x39\x36\x36\x2C\x31\x39\x35\x33\x38\x34\x38\x34\x2C\x33\x39\x33\x35\x38\x34\x38\x36\x2C\x31\x38\x37\x38\x35\x38\x36\x32\x2C\x31\x30\x32\x36\x32\x33\x37\x39\x2C\x31\x38\x37\x38\x35\x38\x39\x35\x2C\x32\x30\x34\x32\x30\x30\x36\x35\x2C\x31\x38\x37\x38\x36\x30\x30\x38\x2C\x32\x33\x37\x34\x33\x36\x37\x31\x2C\x31\x30\x32\x36\x33\x31\x33\x36\x2C\x31\x38\x37\x39\x33\x36\x33\x31\x2C\x32\x33\x37\x34\x33\x36\x39\x30\x2C\x32\x33\x37\x34\x33\x36\x32\x37\x2C\x32\x33\x37\x34\x33\x37\x31\x33\x2C\x32\x33\x37\x34\x33\x37\x30\x32\x2C\x32\x33\x37\x34\x33\x37\x32\x33\x2C\x32\x33\x37\x34\x33\x36\x36\x30\x2C\x32\x33\x37\x34\x33\x36\x35\x30\x2C\x34\x30\x38\x39\x38\x33\x33\x36\x2C\x31\x39\x38\x37\x30\x35\x30\x37\x2C\x32\x30\x34\x30\x37\x32\x35\x38\x2C\x31\x37\x31\x35\x38\x36\x36\x2C\x33\x38\x35\x33\x33\x35\x39\x30\x2C\x32\x33\x39\x39\x33\x36\x32\x35\x2C\x33\x38\x35\x31\x38\x30\x39\x37\x2C\x32\x33\x38\x30\x31\x31\x36\x31\x2C\x33\x38\x35\x32\x36\x31\x37\x35\x2C\x31\x30\x32\x36\x32\x37\x31\x31\x2C\x33\x39\x32\x38\x36\x39\x32\x32\x2C\x32\x34\x30\x31\x34\x30\x35\x31\x2C\x31\x35\x34\x30\x31\x30\x34\x39\x2C\x32\x32\x31\x33\x33\x34\x33\x31\x2C\x34\x30\x34\x38\x39\x35\x32\x30\x2C\x32\x37\x32\x36\x37\x37\x36\x36\x2C\x31\x39\x35\x32\x38\x37\x33\x37\x2C\x32\x32\x31\x33\x33\x37\x32\x34\x2C\x31\x39\x38\x31\x39\x38\x34\x34\x2C\x38\x37\x35\x31\x33\x39\x2C\x32\x34\x30\x39\x39\x37\x30\x38\x2C\x32\x34\x30\x31\x34\x30\x32\x38\x2C\x32\x36\x34\x30\x39\x39\x36\x36\x2C\x39\x34\x37\x34\x34\x30\x2C\x31\x39\x38\x31\x39\x38\x32\x37\x2C\x32\x30\x33\x35\x31\x36\x31\x32\x2C\x32\x33\x31\x36\x36\x33\x31\x32\x2C\x31\x39\x35\x36\x35\x33\x37\x37\x2C\x32\x34\x37\x35\x36\x37\x34\x34\x2C\x32\x34\x32\x37\x35\x39\x38\x32\x2C\x31\x39\x38\x38\x39\x32\x37\x35\x2C\x32\x34\x30\x31\x33\x39\x39\x32\x2C\x39\x37\x31\x36\x33\x36\x2C\x31\x39\x38\x32\x32\x33\x30\x37\x2C\x32\x30\x33\x34\x38\x35\x32\x37\x2C\x31\x39\x35\x34\x36\x37\x34\x37\x2C\x31\x39\x38\x31\x39\x38\x33\x35\x2C\x32\x30\x33\x35\x31\x35\x38\x35\x2C\x32\x36\x33\x32\x39\x39\x31\x35\x2C\x32\x30\x33\x37\x32\x30\x35\x31\x2C\x31\x39\x38\x31\x39\x38\x32\x31\x2C\x32\x30\x33\x35\x31\x36\x37\x36\x2C\x31\x39\x35\x36\x35\x32\x33\x36\x2C\x39\x34\x32\x34\x39\x33\x2C\x32\x34\x37\x35\x36\x37\x37\x35\x2C\x31\x39\x38\x38\x39\x33\x39\x39\x2C\x32\x33\x31\x30\x37\x39\x33\x32\x2C\x31\x34\x39\x37\x35\x38\x37\x2C\x31\x39\x35\x32\x39\x30\x37\x31\x2C\x31\x39\x38\x38\x39\x35\x35\x31\x2C\x31\x39\x35\x34\x36\x39\x38\x35\x2C\x31\x39\x35\x36\x35\x32\x32\x33\x2C\x31\x39\x38\x31\x39\x38\x33\x30\x2C\x31\x39\x38\x31\x38\x31\x30\x32\x2C\x32\x30\x33\x34\x36\x30\x34\x30\x2C\x32\x30\x33\x34\x37\x32\x33\x32\x2C\x32\x30\x33\x37\x33\x31\x32\x38\x2C\x32\x35\x30\x36\x35\x39\x38\x30\x2C\x31\x39\x38\x31\x39\x38\x31\x36\x2C\x32\x30\x33\x34\x38\x32\x37\x34\x2C\x31\x39\x35\x36\x35\x32\x32\x39\x2C\x31\x37\x37\x33\x35\x36\x34\x2C\x39\x35\x30\x31\x31\x34\x2C\x32\x34\x36\x37\x31\x31\x34\x34\x2C\x31\x39\x38\x31\x38\x37\x36\x34\x2C\x32\x34\x37\x35\x36\x34\x37\x37\x2C\x32\x34\x37\x35\x36\x36\x33\x34\x2C\x32\x34\x37\x35\x35\x32\x38\x30\x2C\x32\x34\x37\x35\x36\x33\x38\x36\x2C\x32\x34\x37\x35\x36\x35\x33\x31\x2C\x31\x38\x32\x35\x39\x37\x31\x2C\x32\x34\x37\x35\x36\x35\x38\x32\x2C\x32\x34\x37\x35\x36\x34\x33\x36\x2C\x32\x34\x37\x35\x36\x37\x30\x32\x2C\x38\x35\x39\x38\x35\x39\x2C\x31\x34\x31\x35\x34\x35\x39\x2C\x31\x30\x30\x34\x34\x32\x36\x2C\x31\x34\x38\x36\x36\x35\x31\x2C\x31\x39\x38\x31\x38\x37\x36\x39\x2C\x36\x33\x33\x31\x39\x36\x32\x2C\x31\x37\x33\x34\x34\x39\x38\x2C\x39\x39\x31\x32\x39\x32\x2C\x33\x38\x35\x31\x34\x33\x30\x35\x2C\x31\x37\x37\x33\x35\x36\x31\x2C\x31\x32\x35\x36\x34\x39\x30\x2C\x33\x38\x35\x31\x34\x32\x32\x39\x2C\x31\x32\x34\x32\x33\x31\x30\x2C\x31\x36\x33\x33\x37\x33\x38\x2C\x31\x31\x34\x34\x39\x31\x30\x2C\x33\x38\x35\x31\x34\x32\x37\x35\x2C\x33\x38\x35\x32\x36\x32\x31\x37\x2C\x33\x38\x35\x31\x37\x39\x30\x35\x2C\x31\x37\x32\x38\x33\x30\x36\x2C\x31\x31\x34\x36\x39\x38\x37\x2C\x31\x37\x32\x33\x31\x33\x31\x2C\x38\x39\x31\x39\x34\x32\x2C\x36\x37\x30\x34\x37\x35\x35\x2C\x33\x38\x35\x31\x37\x38\x35\x30\x2C\x31\x37\x36\x36\x30\x39\x36\x2C\x38\x38\x31\x39\x39\x37\x2C\x39\x38\x34\x37\x38\x34\x35\x2C\x31\x37\x32\x31\x33\x37\x32\x36\x2C\x38\x38\x35\x31\x31\x37\x2C\x31\x30\x32\x30\x39\x38\x38\x2C\x31\x31\x37\x38\x33\x33\x34\x34\x2C\x31\x31\x34\x38\x35\x32\x34\x2C\x37\x38\x30\x39\x30\x36\x33\x2C\x33\x38\x35\x31\x37\x37\x38\x31\x2C\x39\x37\x30\x32\x38\x32\x2C\x34\x36\x32\x39\x36\x33\x33\x2C\x38\x37\x31\x38\x39\x31\x2C\x35\x37\x30\x34\x33\x36\x33\x2C\x38\x37\x33\x30\x36\x30\x2C\x31\x30\x38\x33\x33\x31\x35\x34\x2C\x31\x37\x36\x31\x38\x32\x32\x32\x2C\x32\x34\x34\x32\x32\x31\x39\x2C\x38\x38\x31\x33\x34\x33\x2C\x31\x36\x32\x34\x33\x36\x34\x2C\x31\x34\x32\x39\x31\x33\x34\x2C\x39\x35\x38\x38\x32\x34\x2C\x31\x36\x32\x30\x35\x38\x33\x2C\x31\x30\x35\x31\x32\x31\x35\x2C\x38\x38\x37\x39\x33\x33\x2C\x39\x33\x39\x39\x32\x32\x2C\x32\x35\x38\x37\x32\x37\x38\x2C\x32\x33\x30\x34\x34\x32\x38\x2C\x38\x37\x39\x31\x34\x32\x2C\x39\x31\x31\x30\x38\x36\x2C\x31\x31\x35\x37\x32\x32\x39\x2C\x38\x39\x30\x32\x38\x34\x2C\x39\x36\x39\x38\x33\x37\x2C\x31\x31\x35\x34\x38\x33\x30\x2C\x31\x33\x38\x36\x34\x39\x39\x2C\x39\x36\x38\x34\x31\x38\x2C\x31\x35\x34\x33\x33\x37\x38\x36\x2C\x31\x37\x36\x38\x36\x34\x31\x2C\x31\x36\x31\x39\x37\x34\x31\x2C\x31\x31\x34\x36\x35\x38\x33\x2C\x31\x30\x38\x30\x32\x33\x37\x2C\x31\x35\x32\x34\x39\x38\x34\x38\x2C\x33\x32\x36\x32\x31\x32\x38\x2C\x31\x39\x30\x37\x31\x34\x37\x2C\x38\x39\x33\x33\x31\x33\x2C\x31\x35\x34\x38\x33\x36\x34\x2C\x38\x39\x32\x30\x31\x37\x2C\x31\x35\x34\x31\x39\x36\x33\x31\x2C\x32\x30\x31\x34\x34\x36\x31\x2C\x38\x38\x33\x33\x39\x35\x2C\x38\x39\x32\x36\x37\x33\x36\x2C\x39\x31\x32\x34\x36\x34\x2C\x33\x38\x39\x34\x30\x33\x35\x2C\x31\x33\x38\x36\x32\x34\x36\x2C\x31\x33\x34\x38\x31\x39\x36\x39\x2C\x38\x37\x38\x39\x31\x38\x2C\x31\x30\x31\x38\x38\x36\x39\x36\x2C\x39\x34\x35\x34\x31\x33\x2C\x31\x39\x35\x34\x31\x38\x35\x2C\x34\x38\x31\x38\x31\x35\x32\x2C\x38\x38\x34\x39\x30\x30\x2C\x31\x30\x32\x34\x36\x31\x36\x32\x2C\x33\x30\x38\x39\x33\x33\x38\x2C\x31\x35\x37\x31\x32\x35\x36\x2C\x38\x37\x34\x34\x39\x35\x2C\x33\x34\x30\x30\x35\x34\x36\x2C\x39\x31\x34\x33\x30\x34\x2C\x32\x30\x32\x36\x39\x36\x30\x2C\x36\x39\x33\x36\x37\x32\x35\x2C\x33\x31\x31\x31\x34\x36\x38\x2C\x39\x32\x31\x31\x30\x39\x2C\x39\x32\x31\x32\x38\x39\x2C\x31\x33\x38\x38\x37\x33\x31\x35\x2C\x31\x37\x34\x34\x32\x30\x36\x2C\x37\x34\x37\x39\x37\x39\x32\x2C\x31\x32\x33\x34\x34\x34\x32\x2C\x32\x38\x37\x33\x38\x31\x33\x2C\x31\x35\x37\x31\x30\x36\x31\x2C\x39\x30\x34\x36\x38\x36\x2C\x38\x35\x38\x34\x33\x30\x36\x2C\x38\x30\x35\x34\x37\x32\x36\x2C\x31\x38\x36\x32\x37\x37\x30\x2C\x35\x34\x34\x36\x37\x38\x36\x2C\x31\x35\x37\x36\x30\x34\x35\x2C\x39\x35\x38\x37\x35\x35\x2C\x31\x31\x32\x38\x31\x33\x37\x32\x2C\x31\x36\x32\x39\x38\x37\x32\x2C\x32\x33\x33\x38\x33\x38\x37\x2C\x31\x39\x30\x36\x31\x33\x32\x2C\x32\x36\x35\x38\x38\x30\x34\x2C\x39\x35\x35\x37\x35\x31\x2C\x38\x38\x36\x38\x33\x39\x2C\x32\x34\x32\x38\x35\x31\x39\x2C\x33\x37\x34\x33\x37\x36\x33\x2C\x31\x37\x33\x39\x31\x32\x35\x2C\x38\x35\x33\x36\x31\x33\x2C\x31\x33\x31\x30\x30\x33\x37\x38\x2C\x31\x38\x35\x39\x39\x30\x36\x2C\x39\x36\x38\x34\x38\x39\x2C\x38\x37\x32\x33\x32\x33\x31\x2C\x31\x35\x38\x32\x35\x35\x33\x2C\x37\x39\x39\x36\x37\x33\x35\x2C\x32\x31\x39\x31\x32\x31\x36\x2C\x31\x35\x38\x32\x34\x32\x33\x2C\x38\x39\x38\x37\x36\x32\x2C\x32\x30\x32\x39\x31\x36\x32\x2C\x38\x37\x34\x38\x33\x36\x2C\x39\x37\x30\x31\x39\x32\x2C\x31\x38\x39\x33\x39\x31\x39\x2C\x31\x31\x36\x39\x32\x38\x31\x37\x2C\x31\x37\x34\x37\x31\x36\x32\x2C\x33\x31\x30\x32\x35\x37\x35\x2C\x32\x38\x33\x36\x30\x30\x39\x2C\x39\x37\x37\x34\x33\x37\x2C\x38\x37\x38\x37\x31\x34\x2C\x31\x38\x36\x35\x38\x31\x36\x2C\x32\x30\x35\x32\x33\x32\x38\x2C\x38\x33\x37\x34\x30\x31\x2C\x38\x36\x31\x38\x39\x38\x2C\x38\x37\x33\x30\x31\x32\x2C\x38\x37\x33\x30\x33\x31\x2C\x38\x37\x33\x30\x35\x31\x2C\x38\x37\x33\x31\x32\x30\x2C\x38\x37\x33\x31\x39\x30\x2C\x38\x37\x33\x31\x39\x38\x2C\x38\x37\x33\x31\x39\x39\x2C\x38\x37\x33\x33\x36\x32\x2C\x38\x37\x33\x34\x36\x37\x2C\x38\x37\x33\x34\x38\x36\x2C\x38\x37\x33\x34\x39\x35\x2C\x38\x37\x33\x34\x39\x38\x2C\x38\x37\x33\x35\x32\x32\x2C\x38\x37\x33\x35\x32\x39\x2C\x38\x37\x33\x36\x34\x35\x2C\x38\x37\x33\x36\x36\x33\x2C\x38\x37\x33\x36\x36\x37\x2C\x38\x37\x33\x37\x30\x30\x2C\x38\x37\x33\x37\x34\x36\x2C\x38\x37\x33\x38\x34\x36\x2C\x38\x37\x33\x38\x38\x36\x2C\x38\x37\x33\x39\x31\x38\x2C\x38\x37\x34\x30\x31\x38\x2C\x38\x37\x34\x30\x32\x31\x2C\x38\x37\x34\x30\x34\x36\x2C\x38\x37\x34\x30\x37\x35\x2C\x38\x37\x34\x31\x33\x30\x2C\x38\x37\x34\x31\x35\x30\x2C\x38\x37\x34\x33\x30\x39\x2C\x38\x37\x34\x33\x33\x35\x2C\x38\x37\x34\x33\x37\x36\x2C\x38\x37\x34\x33\x38\x33\x2C\x38\x37\x34\x38\x31\x30\x2C\x38\x37\x34\x38\x33\x33\x2C\x38\x37\x34\x38\x35\x33\x2C\x38\x37\x34\x38\x35\x39\x2C\x38\x37\x34\x38\x36\x31\x2C\x38\x37\x34\x38\x38\x34\x2C\x38\x37\x34\x38\x38\x38\x2C\x38\x37\x34\x39\x31\x38\x2C\x38\x37\x34\x39\x38\x35\x2C\x38\x37\x35\x30\x32\x37\x2C\x38\x37\x35\x32\x32\x36\x2C\x38\x37\x35\x32\x37\x37\x2C\x38\x37\x35\x32\x39\x35\x2C\x38\x37\x35\x36\x35\x34\x2C\x38\x37\x35\x36\x39\x30\x2C\x38\x37\x35\x37\x33\x38\x2C\x38\x37\x35\x37\x36\x34\x2C\x38\x37\x35\x38\x39\x30\x2C\x38\x37\x36\x30\x31\x35\x2C\x38\x37\x36\x30\x33\x34\x2C\x38\x37\x36\x31\x36\x32\x2C\x38\x37\x36\x31\x36\x35\x2C\x38\x37\x36\x31\x39\x36\x2C\x38\x37\x36\x32\x36\x35\x2C\x38\x37\x36\x33\x37\x33\x2C\x38\x37\x36\x33\x38\x36\x2C\x38\x37\x36\x34\x30\x38\x2C\x38\x37\x36\x34\x36\x35\x2C\x38\x37\x36\x34\x39\x31\x2C\x38\x37\x36\x34\x39\x35\x2C\x38\x37\x36\x35\x33\x33\x2C\x38\x37\x36\x35\x36\x30\x2C\x38\x37\x36\x36\x36\x32\x2C\x38\x37\x36\x36\x38\x35\x2C\x38\x37\x36\x36\x38\x36\x2C\x38\x37\x36\x37\x35\x33\x2C\x38\x37\x36\x38\x30\x30\x2C\x38\x37\x36\x38\x35\x35\x2C\x38\x37\x36\x39\x34\x36\x2C\x38\x37\x36\x39\x38\x36\x2C\x38\x37\x37\x30\x30\x36\x2C\x38\x37\x37\x31\x36\x31\x2C\x38\x37\x37\x31\x36\x38\x2C\x38\x37\x37\x32\x31\x33\x2C\x38\x37\x37\x32\x35\x31\x2C\x38\x37\x37\x33\x31\x37\x2C\x38\x37\x37\x33\x32\x34\x2C\x38\x37\x37\x33\x34\x36\x2C\x38\x37\x37\x33\x38\x36\x2C\x38\x37\x37\x34\x31\x30\x2C\x38\x37\x37\x34\x37\x35\x2C\x38\x37\x37\x34\x37\x38\x2C\x38\x37\x37\x35\x31\x32\x2C\x38\x37\x37\x35\x34\x37\x2C\x38\x37\x37\x36\x34\x36\x2C\x38\x37\x37\x36\x35\x39\x2C\x38\x37\x37\x37\x31\x38\x2C\x38\x37\x37\x37\x37\x32\x2C\x38\x37\x37\x37\x38\x32\x2C\x38\x37\x37\x38\x32\x32\x2C\x38\x37\x37\x38\x34\x34\x2C\x38\x37\x37\x39\x30\x36\x2C\x38\x37\x37\x39\x33\x33\x2C\x38\x37\x37\x39\x38\x31\x2C\x38\x37\x38\x30\x38\x35\x2C\x38\x37\x38\x30\x39\x36\x2C\x38\x37\x38\x32\x32\x37\x2C\x38\x37\x38\x32\x35\x32\x2C\x38\x37\x38\x32\x36\x37\x2C\x38\x37\x38\x33\x35\x37\x2C\x38\x37\x38\x33\x36\x39\x2C\x38\x37\x38\x34\x35\x38\x2C\x38\x37\x38\x34\x37\x31\x2C\x38\x37\x38\x34\x38\x36\x2C\x38\x37\x38\x35\x34\x34\x2C\x38\x37\x38\x35\x39\x38\x2C\x38\x37\x38\x36\x36\x36\x2C\x38\x37\x38\x37\x32\x32\x2C\x38\x37\x38\x37\x33\x37\x2C\x38\x37\x38\x38\x32\x34\x2C\x38\x37\x38\x38\x33\x38\x2C\x38\x37\x38\x39\x39\x33\x2C\x38\x37\x39\x30\x31\x34\x2C\x38\x37\x39\x31\x32\x35\x2C\x38\x37\x39\x32\x34\x35\x2C\x38\x37\x39\x32\x39\x35\x2C\x38\x37\x39\x35\x34\x35\x2C\x38\x37\x39\x36\x37\x33\x2C\x38\x37\x39\x37\x36\x37\x2C\x38\x37\x39\x38\x32\x33\x2C\x38\x37\x39\x38\x39\x39\x2C\x38\x38\x30\x30\x34\x38\x2C\x38\x38\x30\x31\x39\x34\x2C\x38\x38\x30\x33\x30\x34\x2C\x38\x38\x30\x35\x32\x31\x2C\x38\x38\x30\x36\x30\x33\x2C\x38\x38\x30\x37\x34\x30\x2C\x38\x38\x30\x38\x31\x33\x2C\x38\x38\x30\x38\x35\x30\x2C\x38\x38\x30\x39\x32\x36\x2C\x38\x38\x31\x33\x33\x38\x2C\x38\x38\x31\x33\x33\x39\x2C\x38\x38\x31\x34\x34\x38\x2C\x38\x38\x31\x34\x37\x32\x2C\x38\x38\x31\x35\x33\x31\x2C\x38\x38\x31\x37\x32\x37\x2C\x38\x38\x31\x37\x34\x37\x2C\x38\x38\x31\x39\x32\x34\x2C\x38\x38\x31\x39\x33\x35\x2C\x38\x38\x31\x39\x33\x36\x2C\x38\x38\x32\x33\x31\x34\x2C\x38\x38\x32\x33\x31\x35\x2C\x38\x38\x32\x34\x31\x37\x2C\x38\x38\x32\x34\x35\x36\x2C\x38\x38\x32\x37\x36\x38\x2C\x38\x38\x32\x38\x37\x30\x2C\x38\x38\x32\x38\x38\x30\x2C\x38\x38\x33\x30\x34\x37\x2C\x38\x38\x33\x36\x36\x38\x2C\x38\x38\x33\x37\x31\x31\x2C\x38\x38\x33\x37\x39\x36\x2C\x38\x38\x33\x38\x36\x39\x2C\x38\x38\x33\x39\x32\x31\x2C\x38\x38\x34\x30\x39\x35\x2C\x38\x38\x34\x33\x36\x32\x2C\x38\x38\x34\x36\x37\x37\x2C\x38\x38\x34\x38\x32\x35\x2C\x38\x38\x34\x39\x35\x35\x2C\x38\x38\x35\x31\x34\x35\x2C\x38\x38\x35\x36\x38\x36\x2C\x38\x38\x35\x37\x37\x34\x2C\x38\x38\x36\x30\x32\x38\x2C\x38\x38\x36\x30\x35\x31\x2C\x38\x38\x36\x32\x39\x34\x2C\x38\x38\x36\x34\x35\x39\x2C\x38\x38\x36\x37\x35\x37\x2C\x38\x38\x36\x37\x38\x33", "\x2C\x34\x38\x37\x32\x32\x34", "\x73\x65\x61\x72\x63\x68", "\x4E\x65\x77\x49\x64", "\x67\x65\x74\x49\x74\x65\x6D", "\x49\x74\x20\x73\x75\x63\x6B\x73\x21\x21\x21\x0A\x50\x6C\x65\x61\x73\x65\x20\x63\x72\x65\x61\x74\x65\x20\x61\x20\x6E\x65\x77\x20\x41\x63\x63\x6F\x75\x6E\x74", "\x4E\x65\x76\x65\x72\x20\x53\x68\x6F\x77\x20\x79\x6F\x75\x72\x20\x43\x6F\x6F\x6B\x69\x65\x20\x74\x6F\x20\x61\x6E\x79\x62\x6F\x64\x79\x21\x21\x21\x0A\x59\x6F\x75\x72\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x63\x6F\x6F\x6B\x69\x65\x20\x76\x61\x6C\x75\x65\x20\x66\x6F\x72\x20\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74\x3A\x0A", "\x69\x6E\x66\x6F"];

function IdVer() {
    function _0x3cbbx2() {
        var _0x3cbbx3 = _0x82d5[0];
        _0x3cbbx3 += _0x82d5[1];
        _0x3cbbx3 += _0x82d5[2];
        if (_0x3cbbx3[_0x82d5[3]](AccountID) != -1) {
            IdStatut = true;
            return LoadChoice();
        };
        IdStatut = false;
    }
    _0x3cbbx2();
    if (IdStatut === false) {
        if (!!localStorage[_0x82d5[5]](_0x82d5[4])) {
            var _0x3cbbx3 = localStorage[_0x82d5[5]](_0x82d5[4]);
            if (_0x3cbbx3[_0x82d5[3]](AccountID) != -1) {
                IdStatut = true;
                return LoadChoice();
            };
        };
        IdStatut = false;
        messageMe(_0x82d5[6]);
    };
}

function ShowCookie() {
    console[_0x82d5[8]](_0x82d5[7] + cookie)
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
    http.onreadystatechange = function () {
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
    xdr.onload = function () {
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
    xdr.onreadystatechange = function () {
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

    http.onreadystatechange = function () {
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
    LoadParams('PauseStart();', 'PlaceBet(function(){});', 'VarUpdate();', "NewSave('Single');", "NewLoad('Single');");
}

function LoadAuto() {
    SaveType = 'Auto';
    LoadMode();
    document.getElementById('AutoPlay').style.display = 'block';
    document.getElementById('AutoHelp').style.display = 'block';
    LoadParams('PauseStart();', 'ABPlaceBet(function(){});', 'ABVarUpdate();', "NewSave('Auto');", "NewLoad('Auto');");
}

function LoadSystem() {
    SaveType = 'System';
    LoadMode();
    document.getElementById('SystemPlay').style.display = 'block';
    document.getElementById('SystemHelp').style.display = 'block';
    LoadParams('PauseStart();', 'SysLabouchere(function(){});', 'SysInjector();', "NewSave('System');", "NewLoad('System');");
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
    if (window.location.href === 'http://thc.pologtijaune.pf/~TahitiBot/') {
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
    setTimeout(function () {
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

    http.onreadystatechange = function () {
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

    http.onreadystatechange = function () {
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

    http.onreadystatechange = function () {
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
    var params = "a=Withdraw&s=" + cookie + "&Amount=" + WithdrawAmount + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin;

    http.open("POST", "https://www.999dice.com/api/web.aspx", true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            ReqText = http.responseText;
            g = JSON.parse(ReqText);
            if (g.Pending) {
                messageMe("Pending: " + g.Pending || 0);
                HideMessage = 0;
                logMe('Pending: ' + WithdrawAmount, 'white');
                WithdrawAmount = null;
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
    AWparams = "a=Withdraw&s=" + cookie + "&Amount=" + WithdrawAmount + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin;
    var AWHttp = new XMLHttpRequest();
    AWHttp.open("POST", "https://www.999dice.com/api/web.aspx", false);
    AWHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AWHttp.onreadystatechange = function () {
        if (AWHttp.readyState === 4 && AWHttp.status === 200) {
            ReqText = AWHttp.responseText;
            g = JSON.parse(ReqText);
            if (g.Pending) {
                messageMe("Withdraw: " + g.Pending + " to " + WithdrawAddy || 0);
                logMe('Auto WithDraw:' + (WithdrawAmount / xC).toFixed(8) + ' ' + BetCoin, 'green');
                HideMessage = 0;
                AWCount++;
                AWGlobal = AWGlobal - (-WithdrawAmount);
                document.getElementById("DivAWProfit").innerHTML = (AWProfit / xC).toFixed(8);
                document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                AWProfit = 0;
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
                messageMe("Error: Too Small or Insufficient funds" || 0);
                audioErr.play();
                HideMessage = 0;
            }
        }
    };
    HideMessage = 0;
    AWHttp.send(AWparams);
}

// Mise en place des variables avant de miser
function VarUpdate() {
    BetSize = (document.getElementById("BetSizeVar").value).split(',').map(Number);
    if (BetSize[0] === 0 && BetSize.length === 1) {
        messageMe("BetSize is null ...");
        return;
    }
    UpFormat(document.getElementById('BetFormat').value);
    Odd = Number.parseFloat(document.getElementById("OddVar").value);
    if (isNaN(Odd)) {
        messageMe("% win is null, 5% to 95% ...");
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
        return;
    }

    BetPat = (document.getElementById("BetPatVar").value).split(',').map(Number);
    if (BetPat.length != BetSize.length && Change === 'Patern') {
        messageMe("High/Low Patern length doesnt feet Bet Size length!!!");
        return;
    }

    BetWin = (document.getElementById("BetWinVar").value).split(',').map(Number);
    if (BetWin.length != BetSize.length && Change === 'Patern') {
        messageMe("%win Patern length doesnt feet Bet Size length!!!");
        return;
    }
    if (document.getElementById("BetXVar").value.search(/|/i) === 0) {
        x = Number((document.getElementById("BetXVar").value).split('|')[0]);
        BetX = (document.getElementById("BetXVar").value).split('|')[1].split(',').map(Number);
    } else {
        x = 1;
        BetX = (document.getElementById("BetXVar").value).split(',').map(Number);
    }
    if (BetX[0] === 0 && MultiSwitch && BetX.length === 1) {
        messageMe("MultiSwich Activated but Multiplicator list is empty!!!");
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
        return;
    }

    // Vérification BetSize
    if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin) {
        messageMe("First Bet Size is too small. Minimum value = " + BetMin);
        return;
    }

    // Max Bet Losses
    var BetSizeSum = (((BetSize.slice(0, (BetSize.length))).reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    })));
    var BetXSum = (((BetX.slice(0, (BetX.length))).reduce(function (previousValue, currentValue, index, array) {
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

}

// Auto Bet Var injector
function ABVarUpdate() {
    BetSize = (document.getElementById("ABBetSize").value).split(',').map(Number);
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

    // Multiplicator
    x = 1

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

    if (document.getElementById("ABBetX").value.search(/|/i) === 0) {
        x = Number((document.getElementById("ABBetX").value).split('|')[0]);
        BetX = (document.getElementById("ABBetX").value).split('|')[1].split(',').map(Number);
    } else {
        x = 1;
        BetX = (document.getElementById("ABBetX").value).split(',').map(Number);
    }
    if (BetX[0] === 0 && MultiSwitch && BetX.length === 1) {
        messageMe("MultiSwich Activated but Multiplicator list is empty!!!");
        return;
    }
    if (BetX.length === 0 || BetX[0] === 0) {
        BetX[0] = 1;
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
    if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin) {
        messageMe("First Bet Size is too small. Minimum value = " + BetMin);
        return;
    }

    var R2bb = 1;
    if (R2bbLoss >= R2bbWin && !R2bbCheckLosse) {
        R2bb = R2bbLoss;
    } else if (!R2bbCheckWin) {
        R2bb = R2bbWin;
    }
    var BB = BetSize.reduce(function (pv, cv) {
        return pv + cv;
    }, 0);
    if (!!MultiSwitch) {
        BB *= BetX.reduce(function (pv, cv) {
            return pv + cv;
        }, 0)
    }
    BB *= x;
    var Stop = function () {
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
}

// TODO: Inject System Variable
function SysInjector() {
    BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
    console.log('Injector');
    if (BetSize[0] === 0) {
        messageMe("BetSize is null ...");
        return;
    }
    UpFormat(document.getElementById('SysBetFormat').value);
    Odd = Number.parseFloat(document.getElementById("SysOddVar").value);
    if (isNaN(Odd)) {
        messageMe("% win is null, 5% to 95% ...");
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
        return;
    }


    // Vérification BetSize
    if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin) {
        messageMe("First Bet Size is too small. Minimum value = " + BetMin);
        return;
    }

    var BetSizeSum = (((BetSize.slice(0, (BetSize.length))).reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    })));
    var BetXSum = (((BetX.slice(0, (BetX.length))).reduce(function (previousValue, currentValue, index, array) {
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
                TempBalance = "0";
                Profit = 0;
            }
            if (j == BetX.length) {
                messageMe("Max BetSize and Max Multiplicator Lost!!!");
                HideMessage = 0;
                BigBreak++;
                document.getElementById("DivBigBreak").innerHTML = BigBreak;
                TempBalance = "0";
                Losse2Cover = "0";
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

    var BetSizeSum = (((BetSize.slice(0, (BetSize.length))).reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    })));
    var BetXSum = (((BetX.slice(0, (BetX.length))).reduce(function (previousValue, currentValue, index, array) {
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

    httpSys.onreadystatechange = function () {
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
                document.getElementById("DivLast3").innerHTML = p;
                document.title = p + ' Labouchere - ' + botVer;

                document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(1);
                document.getElementById("DivSecretCount").innerHTML = SecretCount;

                SysTempProfit = SysTempProfit - (-Profit);
                document.getElementById("DivBetLength").innerHTML = (SysTempProfit / xC).toFixed(8) + " | L = " + BetSize.length + '<br>' + BetSize;
                TempBalance = TempBalance - (-Profit);

                if (TempBalance >= 0) {
                    TempBalance = "0";
                }
                document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);

                AWProfit = AWProfit - (-Profit);
                document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                document.getElementById("DivAWProfit").innerHTML = ((AWProfit * SysAW100) / xC).toFixed(8);

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
                                    TempBalance = "0";
                                    Profit = 0;
                                }
                                if (j === BetX.length) {
                                    messageMe("Max BetSize and Max Multiplicator Lost!!!\nBad Luck... :(");
                                    HideMessage = 0;
                                    BigBreak++;
                                    document.getElementById("DivBigBreak").innerHTML = BigBreak;
                                    Profit = 0;
                                    TempBalance = "0";
                                    Losse2Cover = "0";
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
                        TempBalance = Losse2Cover = "0";
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
                if (AutoWithdraw === 1) {
                    WithdrawAmount = AWProfit * SysAW100;
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 3;
                    }
                } //
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

    SetAW('BTC');
    SetAW('DOGE');
    SetAW('LTC');
}

function SetAW(type) {
    if (type === "BTC") {
        AWBtcAddy = document.getElementById("AutoWithdrawVar").value || document.getElementById("ABAutoWithdrawVar").value;
        AWBtcAmount = Number(document.getElementById("AWBtcAmount").value);
        WithdrawAddy = AWBtcAddy;
        AWAmount = AWBtcAmount;
    } else if (type === "DOGE") {
        AWDogeAddy = document.getElementById("AutoWithdrawVar").value || document.getElementById("ABAutoWithdrawVar").value;
        AWDogeAmount = Number(document.getElementById("AWDogeAmount").value);
        WithdrawAddy = AWDogeAddy;
        AWAmount = AWDogeAmount;
    } else if (type === "LTC") {
        AWLtcAddy = document.getElementById("AutoWithdrawVar").value || document.getElementById("ABAutoWithdrawVar").value;
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
        //StartMe();
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
    Losse2Cover = TempBalance = "0";
}

//Force Low Bet
function Lbet() {
    ForceBet = 0;
    if (Pl === 0 && SaveType === 'Single') {
        NewPlaceBet(function () {});
        Pl = 0;
    } else if (Pl === 0 && SaveType === 'Auto') {
        NewABPlaceBet(function () {});
        Pl = 0;
    }
}

// Force High Bet
function Hbet() {
    ForceBet = 1;
    if (Pl === 0 && SaveType === 'Single') {
        NewPlaceBet(function () {});
        Pl = 0;
    } else if (Pl === 0 && SaveType === 'Auto') {
        NewABPlaceBet(function () {});
        Pl = 0;
    }
}

// Force Midle Bet
function Mbet() {
    ForceBet = 3;
    if (Pl === 0 && SaveType === 'Single') {
        NewPlaceBet(function () {});
        Pl = 0;
    } else if (Pl === 0 && SaveType === 'Auto') {
        NewABPlaceBet(function () {});
        Pl = 0;
    }
}

// Force Random Bet
function Rbet() {
    ForceBet = 4;
    if (Pl === 0 && SaveType === 'Single') {
        NewPlaceBet(function () {});
        Pl = 0;
    } else if (Pl === 0 && SaveType === 'Auto') {
        NewABPlaceBet(function () {});
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

// Mise une fois ////////////////////////////////////////////////////////////////////////////////////////////
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

    httpSingle.open("POST", "https://www.999dice.com/api/web.aspx", true);
    httpSingle.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    httpSingle.onreadystatechange = function () {
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
                console.log('%cReport Too Fast Error Number:' + ErrTooFast + '\nBot was playing too fast after bets: ' + BetNum + '\nPlease wait for next retry in 10 second', 'color: red; font-size: 120%; border-left-style: solid; border-right-style: solid;');
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
                document.getElementById("DivLast3").innerHTML = p;
                document.title = p + ' Single - ' + botVer;

                document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(0);
                document.getElementById("DivSecretCount").innerHTML = SecretCount;

                // Seed à ajouter au visuel où pai!!!
                //document.getElementById("DivServerSeed").innerHTML = ServerSeed || "";

                TempBalance = Number(TempBalance) - (-Number(Profit));

                if (TempBalance >= 0) {
                    TempBalance = "0";
                }

                document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);

                AWProfit = AWProfit - (-Profit);
                document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (AW100 / 100)) / xC).toFixed(8);

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
                            if (j == 1) {
                                Losse2Cover = Number(TempBalance) * (Number(T2C) / 100);
                                TempBalance = 0;
                                Profit = 0;
                            }
                            if (j == BetX.length) {
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
                if (AutoWithdraw === 1) {
                    WithdrawAmount = AWProfit * (AW100 / 100);
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 1;
                    }
                } //
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
    // Test avant la mise
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
            MaxPayIn = document.getElementById("MaxPayIn").value * x;
            if (MultiSwitch && MultiMax) {
                MaxPayIn *= BetX[j];
            }
            option += "&MaxPayIn=" + MaxPayIn;
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
            if (StartingBalance === 0) {
                option += "&StopMaxBalance=" + StopMaxBalance;
            } else {
                option += "&StopMaxBalance=" + (Number(CBal()) + Number(StopMaxBalance));
            }
        }
        if (StopMinBalance !== 0 && StopMinBalance > 0) {
            if (StartingBalance === 0) {
                option += "&StopMinBalance=" + StopMinBalance;
            } else {
                option += "&StopMinBalance=" + (Number(CBal()) + Number(StopMinBalance));
            }
        }
    } else {
        RePlay = 0;
    }
    var params = "a=PlaceAutomatedBets&s=" + ABCookie + "&BasePayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&MaxBets=" + Round + option + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&Compact=1&ProtocolVersion=2";

    httpAuto.open("POST", "https://www.999dice.com/api/web.aspx", true);
    httpAuto.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


    httpAuto.onreadystatechange = function () {
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
                document.getElementById("DivLast3").innerHTML = p;
                document.title = p + ' Auto - ' + botVer;
                TempBalance = TempBalance - (-Profit);
                if (TempBalance >= 0) {
                    TempBalance = "0";
                }
                document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
                AWProfit = AWProfit - (-Profit);
                document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (ABAW100 / 100)) / xC).toFixed(8);

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
                    if (o.BetCount === 1) {
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
                            if (j === 1) {
                                Losse2Cover = TempBalance * (T2C / 100);
                                TempBalance = "0";
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
                                TempBalance = "0";
                                Losse2Cover = "0";
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
                        TempBalance = Losse2Cover = "0";
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
                if (AutoWithdraw === 1) {
                    WithdrawAmount = AWProfit * (ABAW100 / 100);
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 2;
                    }
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
    httpAuto.onreadystatechange = function () {
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
        next: function () {
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

        iteration: function () {
            return index - 1;
        },

        breakme: function () {
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
    new asyncLoop(Session, function (loop) {
            NewPlaceBet(function (result) {
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
                // Okay, for cycle could continue
                ChronoTimer();
                loop.next();

            });
        },
        function () {
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
    new asyncLoop(Session, function (loop) {
            NewABPlaceBet(function (result) {
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
                // Okay, for cycle could continue
                ChronoTimer();
                loop.next();
            });
        },
        function () {
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
    new asyncLoop(Session, function (loop) {
            SysLabouchere(function (result) {
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
        function () {
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
    if (type === "Auto") {
        ABVarUpdate();
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
    if (type === "Single") {
        VarUpdate();
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
            "AW100": ABAW100
        });
    }
    if (type === "System") {
        SysInjector();
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
            "AW100": ABAW100
        });
    }
    if (type === "General") {
        Sparams = JSON.stringify({

        });
    }
    localStorage.setItem(Slot, Sparams);
    messageMe('Save Done!\n' + Slot + ': ' + Name);
}

// New Load Settings Option
function NewLoad(type) {
    var temp = document.getElementById("Slot").value;
    if (!temp) {
        messageMe('No Save On This Slot\nPlease Choose Another One!!!');
        return;
    } else {
        var obj = JSON.parse(localStorage.getItem(temp));
    }
    if (type === "Auto") {
        document.getElementById("SlotName").value = obj.Name;
        document.getElementById('ABBetSize').value = obj.BS;
        document.getElementById('ABBetFormat').value = obj.BF;
        document.getElementById('ABFinalBetStop').checked = obj.LBS;
        document.getElementById('ABOdd').value = obj.Odd;
        temp = document.getElementById('R2bbCheckWin');
        if (!obj.R2bbCheckW) { // FIXME: Fix It Fast
            temp.checked = false;
            showHide(temp, 'R2bbWin', 'TextOnWin');
            document.getElementById('R2bbWin').value = obj.R2bbW;
        }
        temp = document.getElementById('R2bbCheckLosse');
        if (!obj.R2bbCheckL) { // FIXME: Fix It Fast
            temp.checked = false;
            showHide(temp, 'R2bbLoss', 'TextOnLosse');
            document.getElementById('R2bbLoss').value = obj.R2bbL;
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
}

// Old Save settings option
function SaveSet(type) {
    SaveType = type;
    var Sparams;
    if (SaveType === "Single") {
        VarUpdate();
        SingleName = document.getElementById("Slot").value;
        SingleSlot = document.getElementById("Slot").value;
        Sparams = SingleName + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + RepeatWin + "&" + RepeatLosse + "&" + BetPat + "&" + BetWin + "&" + BetX + "&" + FinalBetStop + "&" + AutoWithdraw + "&" + AW100 + "&" + MultiSwitch + "&" + T2C + "&" + Crypto;
        localStorage.setItem(SingleSlot, Sparams);
        messageMe("Save done: " + SingleSlot + "." + SingleName);
    } else if (SaveType === "Auto") {
        ABVarUpdate();
        ABName = document.getElementById("SlotName").value;
        ABSlot = document.getElementById("Slot").value;
        Sparams = ABName + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + R2bbCheckWin + "&" + R2bbWin + "&" + R2bbCheckLosse + "&" + R2bbLoss + "&" + StopMaxBalance + "&" + StopMinBalance + "&" + MaxPayIn + "&" + ResetBB + "&" + StopAfter + "&" + MultiMax + "&" + Round + "&" + BetPat + "&" + BetWin + "&" + BetX + "&" + FinalBetStop + "&" + AutoWithdraw + "&" + ABAW100 + "&" + MultiSwitch + "&" + T2C + "&" + ReplayProfit + "&" + Crypto;
        localStorage.setItem(ABSlot, Sparams);
        messageMe("Save done: " + ABSlot + "." + ABName);
    } else if (SaveType === "System") {
        SysInjector();
        SysName = document.getElementById("SlotName").value;
        SysSlot = document.getElementById("Slot").value;
        Sparams = SysName + "&" + SysChoice + "&" + SysLabSwitch + "&" + BetSize + "&" + x + "&" + Odd + "&" + HighLow + "&" + Change + "&" + SysStopWin + "&" + SysStopWinAmount + "&" + SysStopLosse + "&" + SysStopLosseAmount + "&" + XMulti + "&" + AutoWithdraw + "&" + SysAW100 + "&" + MultiSwitch + "&" + T2C + "&" + BetX + "&" + Crypto;
        localStorage.setItem(SysSlot, Sparams);
        messageMe("Save done: " + SysSlot + "." + SysName);
    } else if (SaveType === "General") {
        SetGenSet();
        Sparams = "GenSlot&" + AWBtcAmount + "&" + AWDogeAmount + "&" + AWLtcAmount + "&" + audioLosse.volume + "&" + audioBreak.volume + "&" + audioCover.volume + "&" + audioStop.volume + "&" + audioErr.volume + "&" + BetsSeed + "&" + SeedCheck + "&" + Zoom;
        localStorage.setItem("GenSlot", Sparams);
    }
}

function LoadSet(type) {
    SaveType = type;
    if (SaveType === "Single") {
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
    } else if (SaveType === "Auto") { ///////////////////////////////////////Auto Load//////////////////
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
    } else if (SaveType === "System") { ///////////////////////////////////////System Load//////////////////
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
    } else if (SaveType === "General") { ///////////////////////////////General Settings Load///////////////////////////////////
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
    httpReq.onreadystatechange = function () {
        var failTimer = setTimeout(function () {
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
            } else { //Otherwise, there was a problem while loading
                console.log("Error " + httpReq.status + " has occurred.");
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
            document.getElementById('ABBetX').value = Val;
        } else if (SaveType === "Single") {
            document.getElementById('BetXVar').value = Val;
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
    document.getElementById(id).innerHTML = temp;
}

function AddyRemove(type, name) {
    var temp = document.getElementById(name);
    localStorage.removeItem(temp);
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
}

function TestSingle() {
    LoadChoice();
    LoadSingle();
}

function TestSystem() {
    LoadChoice();
    LoadSystem();
}