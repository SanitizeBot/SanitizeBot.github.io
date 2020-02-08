// ==UserScript==
// @name         999Dice Naughty Bot
// @namespace    https://drive.google.com/open?id=0BzwzmqEWk5a-fmNJNVV6b01udDEyUWF6WmFmaHBfSXpTUmh4U0pldUV3a3NlNm1WeS02SlE
// @version      1.1 Standalone
// @description  One file bot... Single and Automatic bet play...
// @author       Naughty Santa
// @match        https://www.999dice.com/api/web.aspx
// @grant        none
// ==/UserScript==

var botVer = 'NBot 1.7.0 Update';
var newAc = 0;
// Variables global
var file = "data/settings";
var debug = false;
// Date
var d = new Date();
var DateShow = 0;
var xC = 100000000;
// variables Connect()
// Requête
var http = new XMLHttpRequest();
var ingle = new XMLHttpRequest();
var httpAuto = new XMLHttpRequest();
var httpSys = new XMLHttpRequest();
var CrazyMode = 0;
var AWparams;
var AWMax = 0;
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
var ran = win = winO = "";
var randW = false;
// % win range 0 - 999999
var LowMin = 0;
var HighMax = 999999;
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
var BetWin = [0];
var BetWinOp = "E";
var BetWinSwitch = false;
var BetX = [1];
var Round;
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
var m = 0;
var p = 0;
var w = 0;
var MaxBreak = true;

// Get Addy
var g;

//Withdraw
var WithdrawAmount = 0;
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
var SXL = 0;
var SXLC = 0;
var SXW = 0;
var SXWC = 0;
var SwapPatern = 0;
var ABHL = ["Low", "High", "Midle", "Random"];
var MaxPayInAr = [];
var MaxSwitch = false;
var PatSwitch = "";

//Affichage
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

// StartPlay loop
var Statut = 1;
var s = 0;
var Pl = 0;
var index = 1;

// Audio
var audioLosse = new Audio("https://thc.pologtijaune.pf/~TahitiBot/audio/losse.ogg");
var audioCover = new Audio("https://thc.pologtijaune.pf/~TahitiBot/audio/cover.ogg");
var audioBreak = new Audio("https://thc.pologtijaune.pf/~TahitiBot/audio/break.ogg");
var audioStop = new Audio("https://thc.pologtijaune.pf/~TahitiBot/audio/stop.ogg");
var audioErr = new Audio("https://thc.pologtijaune.pf/~TahitiBot/audio/error.ogg");
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

// Seed
var SeedRandC = "1";
var randSeedCount = 1;

// Bet Speed
var BetSpeed = 0.300;

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

// Multi Bot
var arMBot = [];

//// Language var
var lang = {};
var TipFR = {
    "country": "FR",
    "title": "Traduction française",
    "% Win:": "% chance",
    "% Win Patern:": "schéma de mise % de chance",
    "Account Option": "option du compte",
    "Addy:": "adresse",
    "Amount:": "solde",
    "Auto Bet Help": "aide mise automatique",
    "AutoWithdraw": "retrait automatique",
    "AW:": "Adresse retrait automatique",
    "AWBal:": "solde des retraits automatiques",
    "AWProfit:": "bénéfice temporaire du prochain retrait automatique",
    "Balance Stop Win/Loss": "arrêt du bot si solde du compte en gain ou perte est atteint",
    "Balance:": "solde du compte",
    "Base Bet:": "mise de base",
    "Bet count:": "décompte de pari",
    "Bet Generator/Injector": "générateur / injecteur de mise",
    "Bets:": "pari",
    "BTC Amount:": "solde bitcoin",
    "BTC:": "adresse bitcoin",
    "Choice Help": "choix aide",
    "Connection Help": "connexion aide",
    "Covered": "couvert",
    "Craaaap!!!": "merde!!!",
    "Currency:": "monnaie",
    "Current/New Addy": "actuel / nouvelle adresse",
    "Custom Bet Size:": "mises personnalisées\nUne valeur unique ou une liste de mises séparées par une virgule ',' .\nExemple : 10 (unique) ou 1,2,3.4,2,10,25 (liste).\nValeur par défaut=1\n",
    "DOGE Amount:": "solde dogecoin",
    "DOGE:": "adresse dogecoin",
    "Doh!": "zut!",
    "Dynamic": "dynamique",
    "DynaStopLoss:": "arrêt dynamique de pertes",
    "DynaStopWin:": "arrêt dynamique de gains",
    "Emergency:": "adresse bitcoin de secours",
    "Error": "erreur",
    "First Bet:": "premier pari High / Low",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Patern:": "schéma de mise High / Low",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "si c'est cochée, le bot va télécharger toutes les ressources de mon serveur. vous serez ainsi à jours.",
    "If server isnt online bot will automatically load local ressources...": "si le serveur n'est pas en ligne le bot va charger automatiquement les ressources locales ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "si décoché, le bot va utiliser ses ressources locales",
    "Import/Export Play Settings": "importer / exporter paramètres de système de jeu",
    "Injector: ": "injecteur",
    "Inverted:": "inversé",
    "L2C%: ": "pertes à couvrir en %",
    "Last Bet:": "dernière mise",
    "LastBetStop": "arrêt si perte de la dernière mise personalisée",
    "Loss2Cover:": "perte à couvrir",
    "LTC Amount:": "solde litecoin",
    "LTC:": "adresse litecoin",
    "email:": "E-mail",
    "Manual Withdraw": "retrait manuel",
    "Manual:": "manuel",
    "Max Bet Size:": "taille de mise maximale",
    "Max Loss:": "perte maximale",
    "Max Bal Stop": "arrêt dynamique d'une mise automatique si le solde du compte a atteint le bénéfice saisi.\nNombre entier ≥ 0\nValeur par défaut=0 désactivé\nValeur arrêt gagnant=1 activé et s'arrête dès qu'il y a un bénéfice\nValeur arrêt > 1 activé, s'arrête dès que le bénéfice est atteint\n",
    "Maximum Balance Stop Amount:": "solde du compte maximum",
    "MaxSLoss:": "série de pertes maximum",
    "MaxSwins:": "séries de victoire maximum",
    "Min Bal Stop": "arrêt dynamique d'une mise automatique si le solde du compte a atteint la perte saisie.\nNombre entier ≥ 0\nValeur par défaut=0 désactivé\n",
    "Minimum Balance Stop Amount:": "solde du compte minimum",
    "More Option": "plus d'option",
    "Multi": "Active/désactive la liste des multiplicateur pour cette ligne.\nValeur par défaut=coché",
    "Emulti": "Active / désactive la liste des multiplicateurs",
    "Multi Addy Manager": "gestionnaire d'addresse",
    "Multi:": "Montre le multiplicateur en cours / montre le plus grand multiplicateur utilisé",
    "Multiplicator list: ": "liste de multiplicateur\nMultiplicateur de mise | Multiplicateur du system de couverture\nValeur par defaut=1|1\n",
    "Name:": "nom",
    "NumBets:": "nombre de pari",
    "Password Verifier:": "vérifier votre mot de passe",
    "Password:": "mot de passe",
    "PlayOnLoss:": "pari X fois la même mise si perte.\nValeur par défaut=1\n",
    "PlayOnWin:": "pari X fois la même mise si victoire.\nValeur par défaut=1\n",
    "Profit:": "bénéfice",
    "Random": "aléatoire",
    "Replay if Profit=0": "rejouer si le bénéfice=0",
    "Reset": "réinitialiser",
    "ResetOnLoss:": "jouer la même mise après une perte",
    "ResetOnWin:": "jouer la même mise après une victoire",
    "IncreaseOnWin:": "Augmenter la mise de x % si mise gagnante",
    "IncreaseOnLoss:": "Augmenter la mise de x % si mise perdue",
    "SAverage:": "moyenne des nombres secret",
    "SCount:": "décompte du nombre secret",
    "Seed": "graine",
    "Server Connection": "connection au serveur",
    "Single Bet Help": "pari simple aide",
    "Sound": "son du bot",
    "Start Time:": "heure de début",
    "Stop": "arrêter",
    "Stop:": "arrêter.",
    "Streak:": "série",
    "Swap:": "échanger High / Low:\n1. non\n2. après 1 gain\n3. après une perte\n4. à chaque fois\n5. aléatoire\n6. aléatoire modifié par Santa\n7. active schéma de jeu High/Low et % chance\n",
    "SysBetList:": "Affichage mise personalisée pour system Labouchère",
    "Temp Bal:": "solde temporaire de perte\nToujours ≤ 0, permet le calcul des pertes avec le système de couverture de pertes.",
    "UserName:": "nom d'utilisateur",
    "Wagered:": "somme des mises pariées",
    "Wins:": "victoires",
    "Connect": "Connectez vous",
    "New Account": "Créer un nouveau compte",
    "Pause": "Pause",
    "StopW": "Arrêt victorieux: s'arrête lorsque le solde temporaire, de la couverture de perte et du bénéfice est >= 0",
    "H": "Faites un pari High manuel ou forcer un pari High quand le bot est en marche",
    "M": "Pari milieu: placer un pari entre High et Low",
    "R": "Pari Aléatoire: placer un pari aléatoire soit High soit Low",
    "L": "Faites un pari Low manuel ou forcer un pari Low quand le bot est en marche",
    "BetOnce": "Pariez manuellement une fois",
    "Back2BB": "Retour à la mise initiale",
    "InjectSettings": "Injecter vos paramètres actuels",
    "Save": "Enregistrez vos paramètres actuels à sous",
    "Load": "Chargez vos paramètres de sous actuelles",
    "Clear Stats": "Nettoyage des statistiques et retour aux valeurs initiales",
    "Settings": "Bouton Paramètres",
    "Help": "Bouton Aide",
    "Tools": "Bouton du panneau Outils",
    "Generate": "Bouton pour le générateur de pari",
    "Import": "Bouton importer les paramètres",
    "Export": "Bouton exporter les paramètres",
    "Remove": "Supprimer une adresse de crypto-monnaie",
    "Inject": "Injecter une nouvelle adresse de crypto-monnaie",
    "Withdraw": "Bouton retrait manuel",
    "Stats": "Bouton du panneau Statistiques",
    "Update Email/Emergency Addy": "Mise à jour d’email et de l'adresse de secours",
    "Reload": "Recharger le bot après avoir appliquer et sauvegarder le paramètre d'accès serveur.",
    " Set/Save ": "Appliquer et sauvegarder les paramètres",
    "Simple Martingal": "Simple martingale",
    "Example1": "Injecter les paramètres de l'exemple 1",
    "Example2": "Injecter les paramètres de l'exemple 2",
    "Cancel": "Annuler",
    "OK": "OK"
};
var TipUK = {
    "country": "UK",
    "title": "Ukrainian Translation",
    "% Win:": "% Перемог. Значення від 5% до 95%",
    "% Win Pattern:": "% Перемог шаблон",
    "Account Option": "опція аккаунт",
    "Addy:": "Встановіть крипто Адді",
    "Amount:": "кількість",
    "Auto Bet Help": "Автоматична настройка допомогу",
    "AutoWithdraw": "автоматичний висновок",
    "AW:": "Автоматичний вивід Адді",
    "AWBal:": "кількість автоматичних вилучень | Автоматичний підрахунок висновок",
    "AWProfit:": "Тимчасове прибуток наступного автоматичного виведення",
    "Balance Stop Win/Loss": "Бот зупиниться, якщо прибуток або збиток досягається",
    "Balance:": "баланс",
    "Base Bet:": "база ставка",
    "Bet count:": "кількість ставок",
    "Bet Generator/Injector": "Ставка генератор і інжектор",
    "Bets:": "ставки",
    "BTC Amount:": "Bitcoin: мінімальна сума прибутку, щоб досягти до виходу",
    "BTC:": "Кнопка БТД для генерації Bitcoin Адді. Якщо ні, то Адді він буде просити 999dice сервер для нової.",
    "Choice Help": "вибір Допомога",
    "Connection Help": "підключення Допомога",
    "Covered": "Обкладинка обсяг звукова система",
    "Craaaap!!!": "дерьмо !!!",
    "Craap!!": "Гомер Craaap !!! гучності звуку",
    "Currency:": "зміна",
    "Current/New Addy": "Тока / нову адресу",
    "Custom Bet Size:": "користувальницький розмір ставки: одиночне значення або список розміру ставки розділення ','. Приклад: 10 (один) або 1,2,3.4,2,10,25 (список). Значення за замовчуванням = 1",
    "DOGE Amount:": "dogecoin: мінімальна сума прибутку, щоб досягти до виходу",
    "DOGE:": "Кнопка DOGE генерувати dogecoin Адді. Якщо ні, то Адді він буде просити 999dice сервер для нової.",
    "Doh!": "Чорт! Відбувається, коли є перерва.",
    "Doh!!": "Гомер Doh! гучність звуку",
    "Bet Stop Loss:": "Втрата Ставка зупинка (за бажанням): Після ставки, якщо ваш баланс менше або дорівнює ця сума + баланс рахунку, перш ніж ставки, то зупинити торгівлю. Значення за замовчуванням = 0 відключена | значення> 0 зупинка ставка. Не може бути негативним!",
    "Bet Stop Profit:": "Стоп прогноз прибутку (за бажанням): Після ставки, якщо ваш баланс, принаймні ця сума + баланс рахунку перед ставкою, то зупинити торгівлю. 0 для немає максимуму. Значення за замовчуванням = 0 відключена | Стоп виграти значення = 1 стоп, коли є прибуток. | Зупинка значення> 1 стоп, коли прибуток буде досягнута",
    "Emergency:": "Аварійний Bitcoin Адді",
    "Error": "Помилка гучності звуку",
    "First Bet:": "Перша ставка висока / низька",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Pattern:": "Шаблон висока / низька: Повинні мати однакову кількість вартості як користувальницький розмір ременя. Значення розділені ','. 0 = низька або 1 = Високий або інше значення = випадкових",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "якщо він встановлений, бот буде завантажити всі ресурси мого сервера. Ви будете в курсі.",
    "If server isnt online bot will automatically load local ressources...": "якщо сервер не в мережі бот буде автоматично завантажувати локальні ресурси ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "якщо не встановлено, то бот буде використовувати свої місцеві ресурси",
    "Import/Export Play Settings": "імпорт / експорт, граючи параметри",
    "Injector: ": "Виберіть де ввести значення: 1. Користувальницький розмір ставки 2. Макс розмір ставки (тільки для автоматичного) 3. список множник",
    "Reverse": "зворотний",
    "L2C%: ": "Система обкладинки% втрат для покриття",
    "Last Bet:": "Показати Вам остання ставка короткі налаштування: Coin | % Перемоги | High-Low | Раунд, якщо ви граєте автоматичний",
    "LastBetStop": "Якщо встановлено, то зупинитися, якщо розмір втрати бот останнє замовлення ставок.\nЯкщо перевіряється і система кришка активована, то бот буде зупинити, якщо він Втрата останню ставку з останнього множника.",
    "Loss2Cover:": "Обкладинка баланс втрата для охоплення",
    "LTC Amount:": "litecoin: мінімальна кількість автоматичного прибуток висновок досягти до виходу",
    "LTC:": "Кнопка LTC генерувати litecoin Адді. Якщо ні, то Адді він буде просити 999dice сервер для нової.",
    "E-mail": "електронна пошта",
    "Manual Withdraw": "Керівництво висновок",
    "Value": "Насіння значення. Не може бути негативним",
    "Max Bet Size:": "Максимальний розмір ставки, щоб грати, щоб зупинити ставки або скинути значення.",
    "Max Loss:": "Оцінка максимальну кількість втрат.",
    "Stop Profit Reset:": "Стоп прибутку Reset (необов'язково): Після ставки, якщо ваш баланс, принаймні ця сума + баланс рахунку перед ставкою, то скинути серію Лабушер.\nЗначення за замовчуванням = 0 відключена | Стоп виграти значення = 1 стоп, коли є прибуток. | Зупинка значення> 1 стоп, коли прибуток буде досягнута",
    "Maximum Balance Stop Amount:": "Після ставки, зупинитися, якщо бот досягти максимальний баланс рахунку. Не може бути негативним! 0 для скасування зупинки!",
    "MaxSLoss:": "Поточна серія втрати / Максимальна серія втрати",
    "MaxSwins:": "Поточні перемог серія / Максимальна виграє серію",
    "Stop Loss Reset:": "Stop Loss Reset (необов'язковий): Після ставки, якщо ваш баланс менше або дорівнює ця сума + баланс рахунку, перш ніж ставки, то зупинити торгівлю.\nЗначення за замовчуванням = 0 відключена | значення> 0 зупинка ставка. Не може бути негативним!",
    "Minimum Balance Stop Amount:": "Після ставки, зупинити, якщо ви досягти мінімального залишку рахунку. Не може бути негативним! 0 для скасування зупинки!",
    "More Option": "більше варіантів",
    "Multi": "Включити / відключити список множник для цієї лінії. За замовчуванням = перевірив",
    "on/off": "Включити / відключити список Multiplier для системи покриття",
    "Multi Addy Manager": "Ви можете зберегти / видалити багато Адді по імені і криптовалюта.",
    "Multi:": "Показує поточний множник / показує найбільшу множник, використовуваний",
    "Multiplier List:": "множник список\nМультиплікатор до | Мультиплікатор система покриття\nЗначення за замовчуванням = 1 | 1",
    "Name:": "ім'я",
    "NumBets:": "кількість ставок",
    "Password Verifier:": "перевірити свій пароль",
    "Password:": "пароль",
    "PlayOnLoss:": "парі Х раз ту ж ставку, якщо втрачені.\nЗа замовчуванням = 1",
    "PlayOnWin:": "парі X раз ту ж ставку на перемогу.\nЗа замовчуванням = 1",
    "Profit:": "прибуток",
    "Random": "випадковий",
    "Replay if Profit=0": "переграти, якщо прибуток = 0",
    "Reset": "Скидання на Lose Bet Max (за бажанням): Якщо це правда, то після програшною ставкою, де сума ставки дорівнює MaxPayIn, наступний розмір ставки буде BasePayIn.",
    "ResetOnLoss:": "Скидання на Програли (за бажанням): Якщо це правда, після втрати ставку, наступний розмір ставки буде BasePayIn.",
    "ResetOnWin:": "Скидання на Win (опція): Якщо це правда, після перемоги ставку, наступний розмір ставки буде BasePayIn.",
    "IncreaseOnWin:": "Збільште На Win% (за бажанням): Якщо ResetOnWin є помилковим, після перемоги ставку, підвищити наступну ставку по цій відсотка. 0,5 = 50%, 1,0 = 100% (двомісний), 2.0 = 200% (потрійний). Не може бути негативним.",
    "IncreaseOnLoss:": "Збільште На Lose відсотків (за бажанням): Якщо ResetOnLose є хибним, після втрати ставку, підвищити наступну ставку по цій відсотка. 0,5 = 50%, 1,0 = 100% (двомісний), 2.0 = 200% (потрійний). Не може бути негативним.",
    "SAverage:": "Середні цифри секретні",
    "SCount:": "вважаючи секретний номер",
    "Seed": "насіння",
    "Server Connection": "підключення до сервера",
    "Single Bet Help": "просто допомога ставки",
    "Sound": "звук бот",
    "Start Time:": "Час початку",
    "Start": "Почніть запуску бота",
    "Stop": "Стоп На Lose Bet Max (за бажанням): Якщо це правда, то після програшною ставкою, де сума ставки дорівнює MaxPayIn, ставки закінчиться.",
    "Stop:": "Стоп.",
    "Stop!": "Стоп гучності",
    "Streak:": "серія",
    "Swap:": "Обмін висока / низька:\n1. Номери - 2. 1 після посилення - 3. після втрати - 4. коли - 5. Випадкова - 6. Випадкова внесеними Санта\n7. активний шаблон гри High / Low і удача%",
    "SysBetList:": "Показати замовлення макет для системи Лабушер",
    "Temp Bal:": "тимчасова втрата рівноваги\nЗавжди ≤ 0, дозволяє розрахувати збитки для системи покриття збитків.",
    "UserName:": "ім'я користувача",
    "Wagered:": "поставлену",
    "Wins:": "Перемоги",
    "Connect": "підключати",
    "New Account": "Створити новий акаунт",
    "Pause": "Призупинити гру",
    "Start": "Запустіть гру.",
    "StopW": "Зупинити Win: припинити тільки тоді, коли бот тимчасово баланс, втрата для покриття і балансовий прибуток є ≥ 0",
    "H": "Грати річний Висока ставку або змусити Висока ставка буде грати, коли бот працює",
    "M": "Середній ставка: ставку між високим і низьким",
    "R": "Випадкова Ставка: ставку як високий чи низький",
    "L": "Грати річний Низька ставка або змусити низький ставку, щоб бути грати, коли бот працює",
    "BetOnce": "Ставка Мануали один раз",
    "Back2BB": "Повернутися до базової ставки",
    "InjectSettings": "Вводите ваші поточні настройки",
    "Save": "Зберегти поточні установки ігрових",
    "Load": "Завантажте поточні настройки ігрових",
    "Clear Stats": "Очищення панелі статистики та встановити всі статистичні дані первісної вартості",
    "Settings": "кнопка Налаштування",
    "Help": "кнопка Допомога",
    "Tools": "Кнопка панелі інструментів",
    "Generate": "Кнопку для генератора ставка / інжектор Створити",
    "Import": "Кнопка Імпорт налаштувань",
    "Export": "Кнопка налаштування експорту",
    "Remove": "Видалити cryptocoin Адді",
    "Inject": "Вводите cryptocoin Адді",
    "Withdraw": "Керівництво кнопку вивести",
    "Stats": "Кнопкова панель Статистика",
    "Update E-mail/Emergency Addy": "Оновлення Email та надзвичайних Адді",
    "Reload": "Оновити бота після збереження сервер вкл / викл параметра",
    " Set/Save ": "Set / Зберегти",
    "Simple Martingal": "простий Мартингейл",
    "Example1": "Вводите Приклад 1 настройки",
    "Example2": "Вводите приклад 2 налаштування",
    "Cancel": "Скасувати",
    "OK": "добре"
};
var TipRU = {
    "country": "RU",
    "title": "Russian Translation",
    "% Win:": "% Побед. Значение от 5% до 95%",
    "% Win Pattern:": "% Побед шаблон",
    "Account Option": "опция аккаунт",
    "Addy:": "Установите крипто Адди",
    "Amount:": "Количество",
    "Auto Bet Help": "Автоматическая настройка помощь",
    "AutoWithdraw": "автоматический вывод",
    "AW:": "Автоматический вывод Адди",
    "AWBal:": "количество автоматических изъятий | Автоматический подсчет вывод",
    "AWProfit:": "Временное прибыль следующего автоматического вывода",
    "Balance Stop Win/Loss": "Бот остановится, если прибыль или убыток достигается",
    "Balance:": "баланс",
    "Base Bet:": "база ставка",
    "Bet count:": "Количество ставок",
    "Bet Generator/Injector": "Ставка генератор и инжектор",
    "Bets:": "Пари",
    "BTC Amount:": "Bitcoin: минимальная сумма прибыли, чтобы достичь до выхода",
    "BTC:": "Кнопка БТД для генерации Bitcoin Адди. Если нет, то Адди он будет просить 999dice сервер для новой.",
    "Choice Help": "Выбор Помощь",
    "Connection Help": "Подключение Помощь",
    "Covered": "Обложка объем звуковая система",
    "Craaaap!!!": "дерьмо!!!",
    "Craap!!": "Гомер Craaap !!! громкость",
    "Currency:": "изменение",
    "Current/New Addy": "Тока / новый адрес",
    "Custom Bet Size:": "пользовательский размер ставки: одиночное значение или список размера ставки разделенные ','. Пример: 10 (один) или 1,2,3.4,2,10,25 (список). Значение по умолчанию = 1",
    "DOGE Amount:": "dogecoin: минимальная сумма прибыли, чтобы достичь до выхода",
    "DOGE:": "Кнопка DOGE генерировать dogecoin Адди. Если нет, то Адди он будет просить 999dice сервер для новой.",
    "Doh!": "Черт! Происходит, когда есть перерыв.",
    "Doh!!": "Гомер Doh! Громкость",
    "Bet Stop Loss:": "Потеря Ставка остановка (по желанию): После ставки, если ваш баланс меньше или равна эта сумма + баланс счета, прежде чем ставки, то остановить торговлю. Значение по умолчанию = 0 отключена | значение> 0 остановка ставка. Не может быть отрицательным!",
    "Bet Stop Profit:": "Стоп прогноз прибыли (по желанию): После ставки, если ваш баланс, по крайней мере эта сумма + баланс счета перед ставкой, то остановить торговлю. 0 для нет максимума. Значение по умолчанию = 0 отключена | Стоп выиграть значение = 1 стоп, когда есть прибыль. | Остановка значение> 1 стоп, когда прибыль будет достигнута",
    "Emergency:": "Аварийный Bitcoin Адди",
    "Error": "Ошибка громкости звука",
    "First Bet:": "Первая ставка высокая / низкая",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Pattern:": "Шаблон высокая / низкая: Должны иметь одинаковое количество стоимости как пользовательский размер ремня. Значения разделены ','. 0 = низкая или 1 = Высокий или другое значение = случайных",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "если он установлен, бот будет скачать все ресурсы моего сервера. Вы будете в курсе.",
    "If server isnt online bot will automatically load local ressources...": "если сервер не в сети бот будет автоматически загружать локальные ресурсы ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "если не установлен, то бот будет использовать свои местные ресурсы",
    "Import/Export Play Settings": "импорт / экспорт, играя параметры",
    "Injector: ": "Выберите где ввести значение: 1. Пользовательский размер ставки 2. Макс размер ставки (только для автоматического) 3. список множитель",
    "Reverse": "задний ход",
    "L2C%: ": "Система обложки% потерь для покрытия",
    "Last Bet:": "Показать Вам последняя ставка короткие настройки: Coin | % Победы | High-Low | Раунд, если вы играете автоматический",
    "LastBetStop": "Если установлен, то остановиться, если размер потери бот последний заказ ставок.\nЕсли проверяется и система крышка активирована, то бот будет остановить, если он Потеря последнюю ставку с последнего множителя.",
    "Loss2Cover:": "Обложка баланс потеря для охвата",
    "LTC Amount:": "litecoin: минимальное количество автоматического прибыль вывод достичь до выхода",
    "LTC:": "Кнопка LTC генерировать litecoin Адди. Если нет, то Адди он будет просить 999dice сервер для новой.",
    "E-mail": "Эл. почта",
    "Manual Withdraw": "руководство вывод",
    "Value": "Семя значение. Не может быть отрицательным",
    "Max Bet Size:": "Максимальный размер ставки, чтобы играть, чтобы остановить ставки или сбросить значение.",
    "Max Loss:": "Оценка максимальное количество потерь.",
    "Stop Profit Reset:": "Стоп прибыли Reset (необязательно): После ставки, если ваш баланс, по крайней мере эта сумма + баланс счета перед ставкой, то сбросить серию Лабушер.\nЗначение по умолчанию = 0 отключена | Стоп выиграть значение = 1 стоп, когда есть прибыль. | Остановка значение> 1 стоп, когда прибыль будет достигнута",
    "Maximum Balance Stop Amount:": "После ставки, остановиться, если бот достичь максимальный баланс счета. Не может быть отрицательным! 0 для отмены остановки!",
    "MaxSLoss:": "Текущая серия потери / Максимальная серия потери",
    "MaxSwins:": "Текущие побед серия / Максимальная выигрывает серию",
    "Stop Loss Reset:": "Stop Loss Reset (необязательный): После ставки, если ваш баланс меньше или равна эта сумма + баланс счета, прежде чем ставки, то остановить торговлю.\nЗначение по умолчанию = 0 отключена | значение> 0 остановка ставка. Не может быть отрицательным!",
    "Minimum Balance Stop Amount:": "После ставки, остановить, если вы достичь минимального остатка счета. Не может быть отрицательным! 0 для отмены остановки!",
    "More Option": "больше вариантов",
    "Multi": "Включить / отключить список множитель для этой линии. По умолчанию = проверил",
    "on/off": "Включить / отключить список Multiplier для системы покрытия",
    "Multi Addy Manager": "Вы можете сохранить / удалить много Адди по имени и криптовалюта.",
    "Multi:": "Показывает текущий множитель / показывает наибольшую множитель, используемый",
    "Multiplier List:": "множитель список\nМультипликатор до | Мультипликатор система покрытия\nЗначение по умолчанию = 1 | 1",
    "Name:": "имя",
    "NumBets:": "количество ставок",
    "Password Verifier:": "проверить свой пароль",
    "Password:": "пароль",
    "PlayOnLoss:": "пари Х раз ту же ставку, если потеряны.\nПо умолчанию = 1",
    "PlayOnWin:": "пари X раз ту же ставку на победу.\nПо умолчанию = 1",
    "Profit:": "прибыль",
    "Random": "случайный",
    "Replay if Profit=0": "переиграть, если прибыль = 0",
    "Reset": "Сброс на Lose Bet Max (по желанию): Если это правда, то после проигрышной ставке, где сумма ставки равна MaxPayIn, следующий размер ставки будет BasePayIn.",
    "ResetOnLoss:": "Сброс на Проиграли (по желанию): Если это правда, после потери ставку, следующий размер ставки будет BasePayIn.",
    "ResetOnWin:": "Сброс на Win (опция): Если это правда, после победы ставку, следующий размер ставки будет BasePayIn.",
    "IncreaseOnWin:": "Увеличьте На Win% (по желанию): Если ResetOnWin является ложным, после победы ставку, повысить следующую ставку по этой процента. 0,5 = 50%, 1,0 = 100% (двухместный), 2.0 = 200% (тройной). Не может быть отрицательным.",
    "IncreaseOnLoss:": "Увеличьте На Lose процентов (по желанию): Если ResetOnLose является ложным, после потери ставку, повысить следующую ставку по этой процента. 0,5 = 50%, 1,0 = 100% (двухместный), 2.0 = 200% (тройной). Не может быть отрицательным.",
    "SAverage:": "Средние цифры секретные",
    "SCount:": "считая секретный номер",
    "Seed": "семена",
    "Server Connection": "подключение к серверу",
    "Single Bet Help": "просто помощь ставки",
    "Sound": "Звук бот",
    "Start Time:": "время начала",
    "Start": "Начните запуска бота",
    "Stop": "Стоп На Lose Bet Max (по желанию): Если это правда, то после проигрышной ставке, где сумма ставки равна MaxPayIn, ставки закончится.",
    "Stop:": "Стоп.",
    "Stop!": "Стоп громкости",
    "Streak:": "серии",
    "Swap:": "Обмен высокая / низкая:\n1. Номера - 2. 1 после усиления - 3. после потери - 4. когда - 5. Случайная - 6. Случайная внесенными Санта\n7. активный шаблон игры High / Low и удача%",
    "SysBetList:": "Показать заказ макет для системы Лабушер",
    "Temp Bal:": "временная потеря равновесия\nВсегда ≤ 0, позволяет рассчитать убытки для системы покрытия убытков.",
    "UserName:": "Имя пользователя",
    "Wagered:": "поставленную",
    "Wins:": "Победы",
    "Connect": "подключать",
    "New Account": "Создать новый аккаунт",
    "Pause": "Приостановить игру",
    "Start": "Начало игры.",
    "StopW": "Остановить Win: прекратить только тогда, когда бот временно баланс, потеря для покрытия и балансовая прибыль являются ≥ 0",
    "H": "Играть ручной Высокая ставку или заставить Высокая ставка будет играть, когда бот работает",
    "M": "Средний ставка: ставку между высоким и низким",
    "R": "Случайная Ставка: ставку как высокий или низкий",
    "L": "Играть ручной Низкая ставка или заставить низкий ставку, чтобы быть играть, когда бот работает",
    "BetOnce": "Ставка Мануалы один раз",
    "Back2BB": "Вернуться к базовой ставке",
    "InjectSettings": "Вводите ваши текущие настройки",
    "Save": "Сохранить текущие настройки игровых",
    "Load": "Загрузите текущие настройки игровых",
    "Clear Stats": "Очистка панели статистики и установить все статистические данные первоначальной стоимости",
    "Settings": "кнопка Настройки",
    "Help": "кнопка Помощь",
    "Tools": "Кнопка панели инструментов",
    "Generate": "Кнопку для генератора ставка / инжектор Создать",
    "Import": "Кнопка Импорт настроек",
    "Export": "Кнопка настройки экспорта",
    "Remove": "Удалить cryptocoin Адди",
    "Inject": "Вводите cryptocoin Адди",
    "Withdraw": "Руководство кнопку вывести",
    "Stats": "Кнопочная панель Статистика",
    "Update E-mail/Emergency Addy": "Обновление Email и чрезвычайных Адди",
    "Reload": "Обновить бота после сохранения сервер вкл / выкл параметра",
    " Set/Save ": "Set / Сохранить",
    "Simple Martingal": "Простой Мартингейл",
    "Example1": "Вводите Пример 1 настройки",
    "Example2": "Вводите пример 2 настройки",
    "Cancel": "Отмена",
    "OK": "ОК"
};
var TipID = {
    "country": "ID",
    "title": "Indonesian Translation",
    "% Win:": "% Menang. Nilai antara 5% sampai 95%",
    "% Win Pattern:": "% Menang pola",
    "Account Option": "pilihan akun",
    "Addy:": "Mengatur addy kripto Anda",
    "Amount:": "Jumlah",
    "Auto Bet Help": "Pengaturan otomatis bantuan",
    "AutoWithdraw": "penarikan otomatis",
    "AW:": "Penarikan otomatis Addy",
    "AWBal:": "jumlah untuk penarikan otomatis | Count penarikan otomatis",
    "AWProfit:": "Keuntungan sementara dari penarikan otomatis berikutnya",
    "Balance Stop Win/Loss": "Bot akan berhenti jika laba atau rugi dicapai",
    "Balance:": "saldo rekening",
    "Base Bet:": "dasar taruhan",
    "Bet count:": "count taruhan",
    "Bet Generator/Injector": "Generator taruhan dan injector",
    "Bets:": "taruhan",
    "BTC Amount:": "bitcoin: jumlah keuntungan minimal untuk mencapai sebelum penarikan",
    "BTC:": "Tombol BTC untuk menghasilkan addy bitcoin. Jika tidak ada addy maka akan meminta server 999dice untuk yang baru.",
    "Choice Help": "pilihan Bantuan",
    "Connection Help": "koneksi Bantuan",
    "Covered": "Penutup Volume sound system",
    "Craaaap!!!": "kotoran!!!",
    "Craap!!": "Homer Craaap !!! Volume suara",
    "Currency:": "perubahan",
    "Current/New Addy": "Saat ini / alamat baru",
    "Custom Bet Size:": "Ukuran kustom taruhan: nilai tunggal atau daftar ukuran taruhan dipisahkan oleh ','. Contoh: 10 (tunggal) atau 1,2,3.4,2,10,25 (daftar). Nilai default = 1",
    "DOGE Amount:": "dogecoin: jumlah keuntungan minimal untuk mencapai sebelum penarikan",
    "DOGE:": "Tombol Doge untuk menghasilkan addy dogecoin. Jika tidak ada addy maka akan meminta server 999dice untuk yang baru.",
    "Doh!": "Mengutuk! Terjadi ketika ada istirahat.",
    "Doh!!": "Homer Doh! Volume suara",
    "Bet Stop Loss:": "Bet stop loss (opsional): Setelah taruhan, jika saldo Anda kurang atau sama jumlah + akun ini keseimbangan sebelum taruhan, kemudian berhenti taruhan. Nilai default = 0 dinonaktifkan | nilai> 0 berhenti taruhan. Tidak dapat negatif!",
    "Bet Stop Profit:": "Berhenti keuntungan taruhan (opsional): Setelah taruhan, jika saldo Anda minimal jumlah + akun ini keseimbangan sebelum taruhan, kemudian berhenti taruhan. 0 untuk tidak maksimal. Nilai default = 0 dinonaktifkan | Berhenti menang value = 1 stop ketika ada keuntungan. | Berhenti nilai> 1 stop ketika keuntungan tercapai",
    "Emergency:": "Addy bitcoin darurat",
    "Error": "Volume suara kesalahan",
    "First Bet:": "taruhan pertama tinggi / rendah",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Pattern:": "Pola Tinggi / Rendah: Seharusnya jumlah yang sama nilai ukuran sabuk kustom. Nilai dipisahkan oleh ','. 0 = rendah atau 1 = Tinggi atau lainnya value = random",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "jika diperiksa, bot akan mendownload semua sumber daya dari server saya. Anda akan up to date.",
    "If server isnt online bot will automatically load local ressources...": "jika server tidak online bot secara otomatis akan memuat sumber daya lokal ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "jika tidak diperiksa, bot akan menggunakan sumber daya lokal",
    "Import/Export Play Settings": "impor / ekspor bermain parameter",
    "Injector: ": "Pilih mana untuk menyuntikkan nilai: 1. Kustom ukuran taruhan 2. Max ukuran Bet (hanya untuk otomatis) 3. daftar Multiplier",
    "Reverse": "membalikkan",
    "L2C%: ": "Sistem penutup% dari kerugian untuk menutupi",
    "Last Bet:": "Menunjukkan taruhan terakhir pengaturan singkat: Coin | % Wins | Tinggi Rendah | Putaran jika Anda bermain otomatis",
    "LastBetStop": "Jika diperiksa kemudian berhenti jika ukuran loss bot taruhan kustom lalu.\nJika diperiksa dan sistem penutup diaktifkan maka bot akan berhenti jika loss taruhan terakhir dengan Multiplier lalu.",
    "Loss2Cover:": "Penutup keseimbangan hilangnya sistem untuk menutupi",
    "LTC Amount:": "litecoin: Jumlah keuntungan penarikan otomatis minimum untuk mencapai sebelum penarikan",
    "LTC:": "Tombol LTC untuk menghasilkan addy litecoin. Jika tidak ada addy maka akan meminta server 999dice untuk yang baru.",
    "E-mail": "e-mail",
    "Manual Withdraw": "pengguna penarikan",
    "Value": "Nilai benih. Tidak dapat negatif",
    "Max Bet Size:": "Ukuran taruhan maksimum untuk bermain untuk menghentikan taruhan atau untuk mengatur ulang nilai.",
    "Max Loss:": "Mengevaluasi jumlah kerugian maksimum.",
    "Stop Profit Reset:": "Berhenti laba ulang (opsional): Setelah taruhan, jika saldo Anda minimal jumlah + akun ini keseimbangan sebelum bertaruh, lalu reset seri Labouchere.\nNilai default = 0 dinonaktifkan | Berhenti menang value = 1 stop ketika ada keuntungan. | Berhenti nilai> 1 stop ketika keuntungan tercapai",
    "Maximum Balance Stop Amount:": "Setelah taruhan, berhenti jika bot mencapai saldo rekening maksimal. Tidak dapat negatif! 0 untuk tidak berhenti!",
    "MaxSLoss:": "Seri loss saat / seri kerugian maksimum",
    "MaxSwins:": "Seri menang saat / Maximum menang seri",
    "Stop Loss Reset:": "Stop Loss ulang (opsional): Setelah taruhan, jika saldo Anda kurang atau sama jumlah ini + saldo rekening sebelum taruhan, kemudian berhenti taruhan.\nNilai default = 0 dinonaktifkan | nilai> 0 berhenti taruhan. Tidak dapat negatif!",
    "Minimum Balance Stop Amount:": "Setelah taruhan, berhenti jika Anda mencapai saldo minimum. Tidak dapat negatif! 0 untuk tidak berhenti!",
    "More Option": "lebih banyak pilihan",
    "Multi": "Mengaktifkan / menonaktifkan daftar multiplier untuk baris itu. Default = diperiksa",
    "on/off": "Mengaktifkan / menonaktifkan daftar Multiplier untuk sistem penutup",
    "Multi Addy Manager": "Anda dapat menyimpan / menghapus banyak addy dengan nama dan cryptocurrency.",
    "Multi:": "Menunjukkan multiplier saat / menunjukkan multiplier terbesar digunakan",
    "Multiplier List:": "daftar multiplier\nMultiplier up | Sistem cakupan multiplier\nNilai default = 1 | 1",
    "Name:": "nama",
    "NumBets:": "jumlah taruhan",
    "Password Verifier:": "memeriksa sandi Anda",
    "Password:": "kata sandi",
    "PlayOnLoss:": "bertaruh X kali taruhan yang sama jika hilang.\nDefault = 1",
    "PlayOnWin:": "bertaruh X kali taruhan yang sama kemenangan.\nDefault = 1",
    "Profit:": "keuntungan",
    "Random": "Acak",
    "Replay if Profit=0": "memutar ulang jika laba = 0",
    "Reset": "Pada ulang Menurunkan Max Bet (opsional): Jika benar, maka setelah taruhan yang kalah di mana jumlah taruhan sama dengan MaxPayIn, jumlah taruhan berikutnya akan BasePayIn.",
    "ResetOnLoss:": "Pada ulang Kehilangan (opsional): Jika benar, setelah kalah taruhan, jumlah taruhan berikutnya akan BasePayIn.",
    "ResetOnWin:": "Pada ulang Win (opsional): Jika benar, setelah memenangkan taruhan, jumlah taruhan berikutnya akan BasePayIn.",
    "IncreaseOnWin:": "Meningkatkan Pada Win% (opsional): Jika ResetOnWin adalah palsu, setelah memenangkan taruhan, meningkatkan taruhan berikutnya dengan persen ini. 0,5 = 50%, 1,0 = 100% (double), 2,0 = 200% (triple). Tidak dapat negatif.",
    "IncreaseOnLoss:": "Meningkatkan Pada Persen Menurunkan (opsional): Jika ResetOnLose adalah palsu, setelah kalah taruhan, meningkatkan taruhan berikutnya dengan persen ini. 0,5 = 50%, 1,0 = 100% (double), 2,0 = 200% (triple). Tidak dapat negatif.",
    "SAverage:": "Nomor rahasia rata",
    "SCount:": "menghitung jumlah rahasia",
    "Seed": "benih",
    "Server Connection": "koneksi ke server",
    "Single Bet Help": "sederhana bantuan taruhan",
    "Sound": "bot suara",
    "Start Time:": "waktu mulai",
    "Start": "Mulai berjalan bot",
    "Stop": "Berhenti Pada Menurunkan Max Bet (opsional): Jika benar, maka setelah taruhan yang kalah di mana jumlah taruhan sama dengan MaxPayIn, taruhan akan berakhir.",
    "Stop:": "Berhenti.",
    "Stop!": "Volume suara berhenti",
    "Streak:": "seri",
    "Swap:": "pertukaran Tinggi / Rendah:\n1. Non - 2. setelah 1 gain - 3. setelah kerugian - 4. setiap kali - 5. Acak - 6. sembarang diubah dengan Santa\n7. pola permainan aktif Tinggi / Rendah dan keberuntungan%",
    "SysBetList:": "Tampilan tata letak kustom untuk sistem Labouchere",
    "Temp Bal:": "kerugian sementara keseimbangan\nSelalu ≤ 0, memungkinkan perhitungan kerugian untuk sistem hilangnya penutup.",
    "UserName:": "nama pengguna",
    "Wagered:": "bertaruh",
    "Wins:": "menang",
    "Connect": "Menghubungkan",
    "New Account": "Buat akun baru",
    "Pause": "Pause game",
    "Start": "Memulai permainan.",
    "StopW": "Berhenti Win: berhenti hanya ketika bot keseimbangan sementara, kerugian untuk menutupi dan keseimbangan keuntungan yang ≥ 0",
    "H": "Bermain Tinggi taruhan pengguna atau memaksa taruhan tinggi untuk menjadi bermain ketika bot berjalan",
    "M": "Taruhan Tengah: menempatkan taruhan antara tinggi dan rendah",
    "R": "Bet acak: menempatkan taruhan sebagai tinggi atau rendah",
    "L": "Bermain Rendah taruhan pengguna atau memaksa taruhan Rendah menjadi bermain ketika bot berjalan",
    "BetOnce": "Bertaruh manualy satu waktu",
    "Back2BB": "Kembali ke dasar taruhan",
    "InjectSettings": "Menyuntikkan pengaturan Anda saat ini",
    "Save": "Simpan pengaturan slot Anda saat ini",
    "Load": "Memuat pengaturan slot Anda saat ini",
    "Clear Stats": "Membersihkan panel statistik dan mengatur semua statistik untuk nilai awal",
    "Settings": "tombol pengaturan",
    "Help": "Bantuan tombol",
    "Tools": "Tombol alat panel",
    "Generate": "Tombol untuk taruhan Generator / injector menghasilkan",
    "Import": "Tombol pengaturan impor",
    "Export": "Tombol pengaturan ekspor",
    "Remove": "Hapus addy cryptocoin",
    "Inject": "Menyuntikkan addy cryptocoin",
    "Withdraw": "Tombol pengguna menarik",
    "Stats": "Tombol panel statistik",
    "Update E-mail/Emergency Addy": "Perbarui Email dan Darurat Addy",
    "Reload": "Reload bot setelah menyimpan server di / off parameter",
    " Set/Save ": "Set / Save",
    "Simple Martingal": "sederhana Martingale",
    "Example1": "Menyuntikkan contoh 1 pengaturan",
    "Example2": "Menyuntikkan contoh 2 pengaturan",
    "Cancel": "Membatalkan",
    "OK": "oke"
};
var TipUS = {
    "country": "US",
    "title": "English Translation",
    "% Win:": "% wins. Value between 5 % to 95 %",
    "% Win Pattern:": "% wins pattern",
    "Account Option": "Account option",
    "Addy:": "Set your crypto addy",
    "Amount:": "Amount",
    "Auto Bet Help": "Automatic setting help",
    "AutoWithdraw": "automatic withdrawal",
    "AW:": "Automatic withdrawal Addy",
    "AWBal:": "amount for automatic withdrawals | Automatic withdrawal count",
    "AWProfit:": "Temporary profit of the next automatic withdrawal",
    "Balance Stop Win/Loss": "Bot will stop if profit or loss is achieved",
    "Balance:": "account balance",
    "Base Bet:": "base bet",
    "Bet count:": "bet count",
    "Bet Generator/Injector": "Bet generator and injector",
    "Bets:": "bets",
    "BTC Amount:": "bitcoin: minimum profit amount to reach before withdrawal",
    "BTC:": "BTC button to generate bitcoin addy. If there is no addy then it will ask 999dice server for a new one.",
    "Choice Help": "Choice Help",
    "Connection Help": "Connection Help",
    "Covered": "Cover system sound volume",
    "Craaaap!!!": "shit!!!",
    "Craap!!": "Homer Craaap!!! sound volume ",
    "Currency:": "change",
    "Current/New Addy": "Current / new address",
    "Custom Bet Size:": "custom bet size : a single value or a list of bet size separated by ','. Example: 10 (single) or 1,2,3.4,2,10,25 (list). Default value=1",
    "DOGE Amount:": "dogecoin: minimum profit amount to reach before withdrawal",
    "DOGE:": "DOGE button to generate dogecoin addy. If there is no addy then it will ask 999dice server for a new one.",
    "Doh!": "Damn! Happen when there is a break.",
    "Doh!!": "Homer Doh ! Sound volume",
    "Bet Stop Loss:": "Bet stop loss (optional): After a bet, if your balance is less or equal this amount + account balance before bet, then stop betting. Default value=0 disabled | value > 0 stop bet. Can not be negative !",
    "Bet Stop Profit:": "Stop bet profit (optional): After a bet, if your balance is at least this amount + account balance before bet, then stop betting. 0 for no maximum. Default value=0 disabled | Stop win value=1 stop when there is a profit. | Stop value > 1 stop when profit is reached",
    "Emergency:": "Emergency bitcoin addy",
    "Error": "Error sound volume",
    "First Bet:": "first bet high / low",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Pattern:": "Pattern High / Low : Should have same number of value as custom belt size. Values are separated by ',' . 0=Low or 1=High or other value=random",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "if it is checked, the bot will download all the resources from my server. you'll be up to date.",
    "If server isnt online bot will automatically load local ressources...": "if the server is not online the bot will automatically load local resources ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "if not checked, the bot will use its local resources",
    "Import/Export Play Settings": "import / export playing parameters",
    "Injector: ": "Choose where to inject value : 1. Custom bet size 2. Max Bet size (only for automatic) 3. Multiplier list",
    "Reverse": "reverse",
    "L2C%: ": "Cover system % of loss to cover",
    "Last Bet:": "Show you last bet short settings : Coin | % Wins | High-Low | Round if you are playing automatic",
    "LastBetStop": "If checked then stop if bot loss last custom bet size.\nIf checked and cover system is activated then bot will stop if it loss last bet with last Multiplier . ",
    "Loss2Cover:": "Cover system loss balance to cover",
    "LTC Amount:": "litecoin: minimum automatic withdrawal profit amount to reach before withdrawal",
    "LTC:": "LTC button to generate litecoin addy. If there is no addy then it will ask 999dice server for a new one.",
    "E-mail": "e-mail",
    "Manual Withdraw": "manual withdrawal",
    "Value": "Seed value. Can not be negative",
    "Max Bet Size:": "maximum bet size to play to stop betting or to reset value.",
    "Max Loss:": "Evaluate the maximum loss amount.",
    "Stop Profit Reset:": "Stop profit Reset (optional): After a bet, if your balance is at least this amount + account balance before bet, then reset Labouchère series. \nDefault value=0 disabled | Stop win value=1 stop when there is a profit. | Stop value > 1 stop when profit is reached",
    "Maximum Balance Stop Amount:": "After a bet, stop if bot reach the maximum account balance. Can not be negative ! 0 for no stop !",
    "MaxSLoss:": "Current loss series / Maximum loss series",
    "MaxSwins:": "Current wins series / Maximum wins series",
    "Stop Loss Reset:": "Stop Loss Reset(optional): After a bet, if your balance is less or equal this amount + account balance before bet, then stop betting.\nDefault value=0 disabled | value > 0 stop bet. Can not be negative !",
    "Minimum Balance Stop Amount:": "After a bet, stop if you reach the minimum account balance. Can not be negative ! 0 for no stop !",
    "More Option": "more options",
    "Multi": "Enable / disable list multiplier for that line. Default=checked",
    "on/off": "Enable / disable the list of Multiplier for cover system",
    "Multi Addy Manager": "You can save / remove many addy by name and cryptocurrency.",
    "Multi:": "Shows the current multiplier / shows the greatest multiplier used",
    "Multiplier List:": "multiplier list\nMultiplier up | Multiplier coverage system\nDefault value=1 | 1",
    "Name:": "name",
    "NumBets:": "number bet",
    "Password Verifier:": "check your password",
    "Password:": "password",
    "PlayOnLoss:": "bet X times the same bet if lost.\nDefault=1",
    "PlayOnWin:": "bet X times the same bet if victory.\nDefault=1",
    "Profit:": "profit",
    "Random": "Random",
    "Replay if Profit=0": "replay if the profit=0",
    "Reset": "Reset On Lose Max Bet (optional): If true, then after a losing bet where the bet amount is equal to MaxPayIn, the next bet amount will be BasePayIn.",
    "ResetOnLoss:": "Reset On Lose (optional): If true, after losing a bet, the next bet amount will be BasePayIn.",
    "ResetOnWin:": "Reset On Win (optional): If true, after winning a bet, the next bet amount will be BasePayIn.",
    "IncreaseOnWin:": "Increase On Win % (optional): If ResetOnWin is false, after winning a bet, increase the next bet by this percent. 0.5=50%, 1.0=100% (double), 2.0=200% (triple). Cannot be negative.",
    "IncreaseOnLoss:": "Increase On Lose Percent (optional): If ResetOnLose is false, after losing a bet, increase the next bet by this percent. 0.5=50%, 1.0=100% (double), 2.0=200% (triple). Cannot be negative.",
    "SAverage:": "Average secret numbers",
    "SCount:": "counting the secret number",
    "Seed": "seed",
    "Server Connection": "connection to server",
    "Single Bet Help": "simple help betting",
    "Sound": "Sound bot",
    "Start Time:": "start time",
    "Start": "Start running the bot",
    "Stop": "Stop On Lose Max Bet (optional): If true, then after a losing bet where the bet amount is equal to MaxPayIn, betting will end.",
    "Stop:": "Stop.",
    "Stop!": "Stop sound volume",
    "Streak:": "series",
    "Swap:": "exchange High / Low:\n1. Non - 2. after 1 gain - 3. after a loss - 4. whenever - 5. Random - 6. Random amended by Santa\n7. active game pattern High / Low and luck%",
    "SysBetList:": "Display custom layout for Labouchere system",
    "Temp Bal:": "temporary loss of balance\nAlways ≤ 0, allows the calculation of the losses for the loss cover system.",
    "UserName:": "username",
    "Wagered:": "wagered",
    "Wins:": "Wins",
    "Connect": "Connect",
    "New Account": "Create a new account",
    "Pause": "Pause the game",
    "Start": "Start the game.",
    "StopW": "Stop Win : stop only when bot temporary balance, loss to cover and profit balance are ≥ 0",
    "H": "Play a manual High bet or force a High bet to be playing when bot is running",
    "M": "Middle bet : place a bet between High and Low",
    "R": "Random Bet : place a bet as High or Low",
    "L": "Play a manual Low bet or force a Low bet to be playing when bot is running",
    "BetOnce": "Bet manualy one time",
    "Back2BB": "Back to base bet",
    "InjectSettings": "Inject your current settings",
    "Save": "Save your current slot settings",
    "Load": "Load your current slot settings",
    "Clear Stats": "Cleaning statistics panel and set all statistics to initial value",
    "Settings": "Settings button",
    "Help": "Help button",
    "Tools": "Tools panel button",
    "Generate": "Generate button for bet generator / injector",
    "Import": "Import settings button",
    "Export": "Export settings button",
    "Remove": "Remove cryptocoin addy",
    "Inject": "Inject cryptocoin addy",
    "Withdraw": "Manual withdraw button",
    "Stats": "Stats panel button",
    "Update E-mail/Emergency Addy": "Update Email and Emergency Addy",
    "Reload": "Reload the bot after saving server on / off parameter",
    " Set/Save ": "Set/Save ",
    "Simple Martingal": "Simple Martingale",
    "Example1": "Inject example 1 settings",
    "Example2": "Inject example 2 settings",
    "Cancel": "Cancel",
    "OK": "OK"
};
var TipES = {
    "country": "ES",
    "title": "Spanish Translation",
    "% Win:": "% gana. Valor entre 5% a 95%",
    "% Win Pattern:": "% Gana patrón",
    "Account Option": "opción cuenta",
    "Addy:": "Establezca su addy cripto",
    "Amount:": "Cantidad",
    "Auto Bet Help": "Ayuda Ajuste automático",
    "AutoWithdraw": "retiro automático",
    "AW:": "Retirada automática Addy",
    "AWBal:": "cantidad de retiros automáticos | Recuento automático de retirada",
    "AWProfit:": "Beneficio temporal de la próxima retirada automática",
    "Balance Stop Win/Loss": "Bot se detendrá si se logra el resultado del periodo",
    "Balance:": "saldo de la cuenta",
    "Base Bet:": "apuesta de base",
    "Bet count:": "recuento de apuesta",
    "Bet Generator/Injector": "Generador de apuesta y el inyector",
    "Bets:": "apuestas",
    "BTC Amount:": "Bitcoin: cantidad de beneficio mínimo para llegar antes de la retirada",
    "BTC:": "Botón de BTC para generar addy bitcoin. Si no hay addy entonces le preguntará servidor 999dice por uno nuevo.",
    "Choice Help": "Elección Ayuda",
    "Connection Help": "Conexión Ayuda",
    "Covered": "Volumen de sonido del sistema de la cubierta",
    "Craaaap!!!": "¡¡¡mierda!!!",
    "Craap!!": "Homero Craaap !!! volumen de sonido",
    "Currency:": "cambiar",
    "Current/New Addy": "Actual / nueva dirección",
    "Custom Bet Size:": "tamaño personalizado apuesta: un único valor o una lista de tamaño de la apuesta separados por ",
    "DOGE Amount:": "dogecoin: cantidad de beneficio mínimo para llegar antes de la retirada",
    "DOGE:": "Botón DOGE para generar addy dogecoin. Si no hay addy entonces le preguntará servidor 999dice por uno nuevo.",
    "Doh!": "¡Maldita sea! Suceder cuando hay una ruptura.",
    "Doh!!": "Homero Doh! Volumen de sonido",
    "Bet Stop Loss:": "Parada Bet pérdida (opcional): Después de una apuesta, si su saldo es inferior o igual esta cantidad + saldo de la cuenta antes de apostar, a continuación, dejar de apuestas. Valor por defecto=0 minusválidos | valor> 0 parada apuesta. No puede ser negativo!",
    "Bet Stop Profit:": "Deje de lucro apuesta (opcional): Después de una apuesta, si su saldo es de al menos esta cantidad + saldo de la cuenta antes de apuesta, y luego se detiene apuestas. 0 para ningún máximo. Valor por defecto=0 minusválidos | Deje de ganar valor=1 parada cuando hay un beneficio. | Deje de valor> 1 parada cuando se alcanza el beneficio",
    "Emergency:": "Addy bitcoin Emergencia",
    "Error": "Error volumen del sonido",
    "First Bet:": "primera apuesta alta / baja",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Pattern:": "Modelo de alta / baja: En caso de tener el mismo número de valor como el tamaño del cinturón personalizado. Los valores están separados por ','. 0=Bajo o 1=alta u otro valor=aleatoria",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "si se comprueba, el bot descargar todos los recursos de mi servidor. podrás actualizado.",
    "If server isnt online bot will automatically load local ressources...": "si el servidor no está online en el bot cargar automáticamente los recursos locales ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "si no se controla, el robot utilizará sus recursos locales",
    "Import/Export Play Settings": "parámetros de importación / exportación jugando",
    "Injector: ": "Elija dónde inyectar valor: 1. personalizado tamaño de la apuesta 2. Max tamaño de la apuesta (sólo para automático) 3. Lista Multiplicador",
    "Reverse": "marcha atrás",
    "L2C%: ": "Sistema de cubierta% de pérdida para cubrir",
    "Last Bet:": "Mostrar que la última apuesta ajustes cortos con monedas | % Wins | De menor a mayor | Ronda de si estás jugando automática",
    "LastBetStop": "Si se selecciona y luego se detiene si el tamaño de la pérdida bot apuesta última personalizado.\nSi comprueba y sistema de cobertura se activa entonces bot se detendrá si Pérdida última apuesta con Multiplicador pasado.",
    "Loss2Cover:": "Cubierta balance de pérdida del sistema para cubrir",
    "LTC Amount:": "litecoin: cantidad mínima de beneficios retiro automático para llegar antes de la retirada",
    "LTC:": "Botón de LTC para generar addy litecoin. Si no hay addy entonces le preguntará servidor 999dice por uno nuevo.",
    "E-mail": "correo electrónico",
    "Manual Withdraw": "retiro manual de",
    "Value": "Valor de la semilla. No se puede ser negativo",
    "Max Bet Size:": "máximo tamaño de la apuesta de jugar para detener las apuestas o para restablecer el valor.",
    "Max Loss:": "Evaluar la cantidad máxima pérdida.",
    "Stop Profit Reset:": "Detener Restablecer ganancias (opcional): Después de una apuesta, si su saldo es de al menos esta cantidad + saldo de la cuenta antes de la apuesta, restablezca serie Labouchère.\nValor por defecto=0 minusválidos | Deje de ganar valor=1 parada cuando hay un beneficio. | Deje de valor> 1 parada cuando se alcanza el beneficio",
    "Maximum Balance Stop Amount:": "Después de una apuesta, parar si bot alcanzar el saldo de la cuenta máxima. No puede ser negativo! 0 para no parar!",
    "MaxSLoss:": "Serie de pérdida de corriente / serie Máxima pérdida",
    "MaxSwins:": "Serie triunfos actuales / Máximo gana serie",
    "Stop Loss Reset:": "Detener la pérdida de reinicio (opcional): Después de una apuesta, si su saldo es inferior o igual esta cantidad + saldo de la cuenta antes de apuesta, y luego se detiene apuestas.\nValor por defecto=0 minusválidos | valor> 0 parada apuesta. No puede ser negativo!",
    "Minimum Balance Stop Amount:": "Después de una apuesta, parar si se llega al límite de tenencia mínimo. No puede ser negativo! 0 para no parar!",
    "More Option": "mas opciones",
    "Multi": "Activar / desactivar la lista multiplicador para esa línea. Por defecto=comprobado",
    "on/off": "Activar / desactivar la lista de Multiplicador de sistema de cobertura",
    "Multi Addy Manager": "Puede guardar / eliminar muchos addy por su nombre y criptomoneda.",
    "Multi:": "Muestra el multiplicador de corriente / muestra la mayor multiplicador utilizado",
    "Multiplier List:": "lista multiplicador\nMultiplicador de espalda | Sistema de cobertura Multiplicador\nValor por defecto=1 | 1",
    "Name:": "nombre",
    "NumBets:": "apuesta número",
    "Password Verifier:": "comprobar su contraseña",
    "Password:": "clave",
    "PlayOnLoss:": "apostar X veces la misma apuesta en caso de pérdida.\nPor defecto=1",
    "PlayOnWin:": "apostar X veces la misma apuesta de la victoria.\nPor defecto=1",
    "Profit:": "beneficio",
    "Random": "Al azar",
    "Replay if Profit=0": "reproducir si la ganancia=0",
    "Reset": "Restablecer En Pierde Apuesta Máxima (opcional): Si es verdad, entonces después de perder una apuesta donde el monto de la apuesta es igual a MaxPayIn, la siguiente cantidad de la apuesta será BasePayIn.",
    "ResetOnLoss:": "Restablecer En Pierde (opcional): Si es verdad, después de perder una apuesta, la siguiente cantidad de la apuesta será BasePayIn.",
    "ResetOnWin:": "Restablecer En Win (opcional): Si es verdad, después de ganar una apuesta, la siguiente cantidad de la apuesta será BasePayIn.",
    "IncreaseOnWin:": "Aumentar En Win% (opcional): Si ResetOnWin es falsa, después de ganar una apuesta, aumentar la próxima apuesta por este porcentaje. 0,5=50%, 1,0=100% (doble), 2,0=200% (triple). No puede ser negativo.",
    "IncreaseOnLoss:": "Aumento en el porcentaje Pierde (opcional): Si ResetOnLose es falsa, después de perder una apuesta, aumentar la próxima apuesta por este porcentaje. 0,5=50%, 1,0=100% (doble), 2,0=200% (triple). No puede ser negativo.",
    "SAverage:": "Promedio de números secretos",
    "SCount:": "contando el número secreto",
    "Seed": "semilla",
    "Server Connection": "conexión con el servidor",
    "Single Bet Help": "sencilla ayuda apuestas",
    "Sound": "bot sonido",
    "Start Time:": "hora de inicio",
    "Start": "Comience ejecutando el bot",
    "Stop": "Pare En Pierde Apuesta Máxima (opcional): Si es verdad, entonces después de perder una apuesta donde el monto de la apuesta es igual a MaxPayIn, apuestas terminará.",
    "Stop:": "Deténgase.",
    "Stop!": "Deje de volumen del sonido",
    "Streak:": "serie",
    "Swap:": "cambio alto / bajo:\n1. No - 2. después del 1 de ganancia - 3. después de una pérdida - 4. siempre - 5. Random - 6. aleatoria modificada por la de Santa\n7. patrón de juego activo alto / bajo y suerte%",
    "SysBetList:": "Pantalla diseño personalizado para el sistema de Labouchere",
    "Temp Bal:": "pérdida temporal de la balanza\nSiempre ≤ 0, permite el cálculo de las pérdidas para el sistema de compensación de pérdidas.",
    "UserName:": "nombre de usuario",
    "Wagered:": "apostada",
    "Wins:": "Gana",
    "Connect": "Conectar",
    "New Account": "Crear una nueva cuenta",
    "Pause": "Pausa el juego",
    "Start": "Comenzar el juego.",
    "StopW": "Deje de victorias: parada solamente cuando el equilibrio temporal bot, la pérdida para cubrir y el equilibrio de beneficios son ≥ 0",
    "H": "Juega un alto apuesta manual o forzar una alta apuesta para estar jugando al bot está en ejecución",
    "M": "Apuesta Secundaria: colocar una apuesta entre alta y baja",
    "R": "Apuesta aleatoria: colocar una apuesta tan alta o baja",
    "L": "Juega un bajo apuesta manual o forzar una apuesta Menor a estar jugando al bot está en ejecución",
    "BetOnce": "Apuesta manualy una vez",
    "Back2BB": "Volver a la apuesta de base",
    "InjectSettings": "Inyectar la configuración actual",
    "Save": "Guardar la configuración de ranura actuales",
    "Load": "Cargue la configuración de tragamonedas actuales",
    "Clear Stats": "Limpieza panel de estadísticas y establecer todas las estadísticas a valor inicial",
    "Settings": "botón Configuración",
    "Help": "botón Ayuda",
    "Tools": "Botón del panel Herramientas",
    "Generate": "Botón para el generador apuesta / inyector Generar",
    "Import": "Botón Importar configuración",
    "Export": "Botón Exportar configuración",
    "Remove": "Retire addy cryptocoin",
    "Inject": "Inyectar addy cryptocoin",
    "Withdraw": "Botón Manual retirar",
    "Stats": "Botón del panel Estadísticas",
    "Update E-mail/Emergency Addy": "Actualización de correo electrónico y Addy Emergencia",
    "Reload": "Actualizar el robot después de guardar servidor en el parámetro / off",
    " Set/Save ": "Set / Guardar",
    "Simple Martingal": "sencillo Martingala",
    "Example1": "Inyectar ejemplo 1 ajustes",
    "Example2": "Inyectar ejemplo 2 ajustes",
    "Cancel": "Cancelar",
    "OK": "Okay"
};
var TipPO = {
    "country": "PO",
    "title": "Portugase Translation",
    "% Win:": "% Vitórias. Valor entre 5% a 95%",
    "% Win Pattern:": "% Ganha padrão",
    "Account Option": "opção de conta",
    "Addy:": "Defina o seu addy cripto",
    "Amount:": "Quantidade",
    "Auto Bet Help": "Ajuda ajuste automático",
    "AutoWithdraw": "retirada automática",
    "AW:": "Retirada automática Addy",
    "AWBal:": "montante para levantamentos automáticos | Contagem automática de retirada",
    "AWProfit:": "Lucro temporário da próxima retirada automática",
    "Balance Stop Win/Loss": "Bot vai parar se lucro ou prejuízo é alcançada",
    "Balance:": "saldo da conta",
    "Base Bet:": "aposta de base",
    "Bet count:": "contagem aposta",
    "Bet Generator/Injector": "Gerador de aposta e injector",
    "Bets:": "apostas",
    "BTC Amount:": "bitcoin: quantidade mínima de lucro para chegar antes da retirada",
    "BTC:": "BTC botão para gerar addy bitcoin. Se não houver nenhum Addy, então ele irá pedir 999dice servidor para um novo.",
    "Choice Help": "escolha Ajuda",
    "Connection Help": "Connection Ajuda",
    "Covered": "Capa volume de som do sistema",
    "Craaaap!!!": "merda!!!",
    "Craap!!": "Homer Craaap !!! volume do som",
    "Currency:": "alterar",
    "Current/New Addy": "Atual / novo endereço",
    "Custom Bet Size:": "tamanho personalizado aposta: um único valor ou uma lista de tamanho da aposta separados por ','. Exemplo: 10 (single) ou 1,2,3.4,2,10,25 (lista). Valor padrão = 1",
    "DOGE Amount:": "dogecoin: quantidade mínima de lucro para chegar antes da retirada",
    "DOGE:": "DOGE botão para gerar addy dogecoin. Se não houver nenhum Addy, então ele irá pedir 999dice servidor para um novo.",
    "Doh!": "Droga! Acontecem quando há uma pausa.",
    "Doh!!": "Homer Doh! Volume do som",
    "Bet Stop Loss:": "Stop loss Bet (opcional): Depois de uma aposta, se o seu saldo for igual ou inferior este montante + conta de saldo antes de aposta, em seguida, parar de apostas. Valor default = 0 desactivado | valor da aposta> 0 stop. Não pode ser negativo!",
    "Bet Stop Profit:": "Pare de lucro aposta (opcional): Depois de uma aposta, se o seu saldo é pelo menos esta quantidade + conta de saldo antes de aposta, então pare de apostas. 0 para nenhum máximo. Valor default = 0 desactivado | Pare de ganhar value = 1 paragem quando há um lucro. | Pare de valor> 1 paragem quando o lucro é atingido",
    "Emergency:": "Bitcoin addy emergência",
    "Error": "Volume do som de erro",
    "First Bet:": "primeira aposta alto / baixo",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Pattern:": "Padrão / Alta Baixa: Deve ter mesmo número de valor como o tamanho da cinta personalizada. Os valores são separados por ','. 0 = Baixa ou 1 = alta ou outro valor = random",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "se for verificado, o bot irá baixar todos os recursos do meu servidor. você vai ser atualizado.",
    "If server isnt online bot will automatically load local ressources...": "se o servidor não está online o bot irá carregar automaticamente os recursos locais ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "se não for controlada, o bot irá utilizar os seus recursos locais",
    "Import/Export Play Settings": "parâmetros de importação / exportação jogar",
    "Injector: ": "Escolha onde injetar valor: 1. Tamanho personalizado aposta 2. Max tamanho Bet (apenas para o automático) 3. lista Multiplicador",
    "Reverse": "reverso",
    "L2C%: ": "Sistema de cobertura% de perda para cobrir",
    "Last Bet:": "Mostrar-lhe as definições curtas última aposta: Moeda | % Wins | Alto Baixo | Rodada se você estiver jogando automática",
    "LastBetStop": "Se marcada, então parar se o tamanho perda bot aposta última personalizado.\nSe marcada e sistema de cobertura é ativado depois bot vai parar se ele última perda aposta com Multiplicador passado.",
    "Loss2Cover:": "Capa equilíbrio perda do sistema para cobrir",
    "LTC Amount:": "litecoin: quantidade mínima de lucro retirada automática para chegar antes da retirada",
    "LTC:": "LTC botão para gerar addy litecoin. Se não houver nenhum Addy, então ele irá pedir 999dice servidor para um novo.",
    "E-mail": "o email",
    "Manual Withdraw": "retirada manual do",
    "Value": "Valor de semente. Não pode ser negativo",
    "Max Bet Size:": "tamanho máximo de aposta para jogar para parar de apostar ou para repor o valor.",
    "Max Loss:": "Avaliar o montante de perda máxima.",
    "Stop Profit Reset:": "Pare Redefinir lucro (opcional): Depois de uma aposta, se o seu saldo é pelo menos esta quantidade + conta de saldo antes de aposta, em seguida, redefinir série Labouchère.\nValor default = 0 desactivado | Pare de ganhar value = 1 paragem quando há um lucro. | Pare de valor> 1 paragem quando o lucro é atingido",
    "Maximum Balance Stop Amount:": "Depois de uma aposta, parar se bot alcançar o equilíbrio máxima conta. Não pode ser negativo! 0 para não parar!",
    "MaxSLoss:": "Série de perda de corrente / série máxima perda",
    "MaxSwins:": "Série vitórias atuais / Máximo ganha série",
    "Stop Loss Reset:": "Pare Redefinir Loss (opcional): Depois de uma aposta, se o seu saldo for igual ou inferior este montante + conta de saldo antes de aposta, então pare de apostas.\nValor default = 0 desactivado | valor da aposta> 0 stop. Não pode ser negativo!",
    "Minimum Balance Stop Amount:": "Depois de uma aposta, parar se você chegar ao saldo mínimo. Não pode ser negativo! 0 para não parar!",
    "More Option": "mais opções",
    "Multi": "Ativar / desativar lista multiplicador para essa linha. Padrão = verificada",
    "on/off": "Ativar / desativar a lista de Multiplicador para sistema de cobertura",
    "Multi Addy Manager": "Você pode salvar / remover muitos addy pelo nome e criptomoeda.",
    "Multi:": "Mostra o multiplicador atual / mostra o maior multiplicador usado",
    "Multiplier List:": "lista multiplicador\nMultiplicador-se | Sistema de cobertura Multiplicador\nValor padrão = 1 | 1",
    "Name:": "nome",
    "NumBets:": "número de aposta",
    "Password Verifier:": "verificar a sua senha",
    "Password:": "senha",
    "PlayOnLoss:": "apostar X vezes a mesma aposta se perdeu.\nPadrão = 1",
    "PlayOnWin:": "apostar X vezes a mesma aposta da vitória.\nPadrão = 1",
    "Profit:": "lucro",
    "Random": "aleatório",
    "Replay if Profit=0": "repetir se o lucro = 0",
    "Reset": "Reset na Perde Max Bet (opcional): Se for verdade, então depois de uma aposta perdedora, onde o valor da aposta é igual a MaxPayIn, o próximo valor da aposta será BasePayIn.",
    "ResetOnLoss:": "Reset na Perde (opcional): Se for verdade, depois de perder uma aposta, o próximo valor da aposta será BasePayIn.",
    "ResetOnWin:": "Redefinição Em Vitória (opcional): Se for verdade, depois de ganhar uma aposta, o próximo valor da aposta será BasePayIn.",
    "IncreaseOnWin:": "Aumente No Win% (opcional): Se ResetOnWin é falso, depois de ganhar uma aposta, aumente a próxima aposta por esta cento. 0,5 = 50%, 1,0 = 100% (duplo), 2.0 = 200% (triplo). Não pode ser negativo.",
    "IncreaseOnLoss:": "Aumento na percentagem Perde (opcional): Se ResetOnLose é falso, depois de perder uma aposta, aumente a próxima aposta por esta cento. 0,5 = 50%, 1,0 = 100% (duplo), 2.0 = 200% (triplo). Não pode ser negativo.",
    "SAverage:": "Números secretos Média",
    "SCount:": "contando o número secreto",
    "Seed": "semente",
    "Server Connection": "conexão com o servidor",
    "Single Bet Help": "simples ajuda Apostas",
    "Sound": "bot som",
    "Start Time:": "a hora de início",
    "Start": "Comece a correr o bot",
    "Stop": "Pare de perder Max Bet On (opcional): Se for verdade, então depois de uma aposta perdedora, onde o valor da aposta é igual a MaxPayIn, apostas vai acabar.",
    "Stop:": "Pare.",
    "Stop!": "Pare o volume do som",
    "Streak:": "série",
    "Swap:": "troca High / Low:\n1. Não - 2. após um ganho - 3. depois de uma perda - 4. sempre - 5. Random - 6. Aleatório alterado pelo Papai\n7. padrão de jogo ativo Alto / Baixo e sorte%",
    "SysBetList:": "Exibição layout personalizado para o sistema Labouchere",
    "Temp Bal:": "perda temporária de equilíbrio\nSempre ≤ 0, permite o cálculo das perdas para o sistema de cobertura perda.",
    "UserName:": "nome de usuário",
    "Wagered:": "apostado",
    "Wins:": "vitórias",
    "Connect": "Conectar",
    "New Account": "Criar uma nova conta",
    "Pause": "Pausar o jogo",
    "Start": "Comece o jogo.",
    "StopW": "Pare Vitória: parar apenas quando bot equilíbrio temporário, para cobrir a perda de equilíbrio e lucro são ≥ 0",
    "H": "Jogue uma alta aposta manual ou forçar uma alta aposta de estar jogando quando bot está executando",
    "M": "Aposta Médio: fazer uma aposta entre alta e baixa",
    "R": "Bet aleatória: uma aposta tão alta ou baixa",
    "L": "Jogar uma aposta Baixo manual ou forçar uma aposta Baixa de estar jogando quando bot está executando",
    "BetOnce": "Aposte manualy uma vez",
    "Back2BB": "Voltar para aposta de base",
    "InjectSettings": "Injectar as configurações atuais",
    "Save": "Salve as configurações atuais de slot",
    "Load": "Carregar as configurações atuais de slot",
    "Clear Stats": "Limpar o painel de estatísticas e definir todas as estatísticas ao valor inicial",
    "Settings": "botão Configurações",
    "Help": "botão Ajuda",
    "Tools": "Botão do painel Ferramentas",
    "Generate": "Botão para o gerador bet / injector gerar",
    "Import": "Botão de configurações de importação",
    "Export": "Botão de configurações de exportação",
    "Remove": "Remover addy cryptocoin",
    "Inject": "Injectar addy cryptocoin",
    "Withdraw": "Botão Manual retirar",
    "Stats": "Botão do painel Estatísticas",
    "Update E-mail/Emergency Addy": "Atualização-mail e Emergência Addy",
    "Reload": "Atualizar o bot depois de salvar servidor on / off parâmetro",
    " Set/Save ": "Definir / Save",
    "Simple Martingal": "simples de Gamarra",
    "Example1": "Injectar exemplo 1 Configurações",
    "Example2": "Injectar exemplo 2 definições",
    "Cancel": "Cancelar",
    "OK": "Está bem"
};
var TipJP = {
    "country": "JP",
    "title": "Japan Translation",
    "% Win:": "％勝。 5％〜95％の間の値",
    "% Win Pattern:": "％パターンを獲得",
    "Account Option": "アカウントオプション",
    "Addy:": "あなたの暗号メアドを設定します。",
    "Amount:": "量",
    "Auto Bet Help": "自動設定のヘルプ",
    "AutoWithdraw": "自動引き落とし",
    "AW:": "自動引き落としアディ",
    "AWBal:": "自動引き落としの金額|自動引き落とし数",
    "AWProfit:": "次の自動引き落としの一時的な利益",
    "Balance Stop Win/Loss": "損益が達成されている場合はボットが停止します",
    "Balance:": "勘定残高",
    "Base Bet:": "ベースベット",
    "Bet count:": "ベット数",
    "Bet Generator/Injector": "ベット・ジェネレータとインジェクタ",
    "Bets:": "賭け",
    "BTC Amount:": "ビットコイン：撤退の前に到達するための最低限の利益額",
    "BTC:": "BTCボタンはビットコインメアドを生成します。何のメアドがない場合、それは新しいものに999diceサーバに要求します。",
    "Choice Help": "選択ヘルプ",
    "Connection Help": "接続ヘルプ",
    "Covered": "カバーシステムの音量",
    "Craaaap!!!": "くそ！",
    "Craap!!": "ホーマーCraaap！音量",
    "Currency:": "変更",
    "Current/New Addy": "電流/新しいアドレス",
    "Custom Bet Size:": "カスタムベットサイズ：単一の値またはで区切られたベットサイズのリスト'、'。例：10（シングル）または1,2,3.4,2,10,25（リスト）。デフォルト値=1",
    "DOGE Amount:": "dogecoin：撤退の前に到達するための最低限の利益額",
    "DOGE:": "元首ボタンがdogecoinメアドを生成します。何のメアドがない場合、それは新しいものに999diceサーバに要求します。",
    "Doh!": "くそー！休憩がある場合に起こります。",
    "Doh!!": "ホーマーいやはや！音量",
    "Bet Stop Loss:": "ベットストップロス（オプション）：あなたの残高が少ないか、賭けの前にこの量+口座残高等しい場合賭けた後、その後の賭けを停止します。 |デフォルト値=0は無効値>0ストップ賭け。負にすることはできません！",
    "Bet Stop Profit:": "（オプション）ベット収益を停止します。残高が賭けの前に、少なくともこの量+口座残高であれば賭けた後、その後の賭けを停止します。制限なしの場合は0。 |デフォルト値=0は無効利益がある場合には値=1ストップに勝つ停止します。 |利益に達すると値>1ストップを停止",
    "Emergency:": "緊急ビットコインのメアド",
    "Error": "エラー音量",
    "First Bet:": "最初の賭けの低/高",
    "Google OAuth 2FA:": "グーグルのOAuth2FA",
    "High/Low Pattern:": "パターンハイ/ロー：カスタムベルトサイズと値の同じ数を持つ必要があります。値は '、'によって分離されています。 =低0または1= Highまたは他の値=ランダム",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "それがチェックされている場合、ボットは私のサーバーからすべてのリソースをダウンロードします。あなたが最新の状態になるでしょう。",
    "If server isnt online bot will automatically load local ressources...": "サーバーがオンラインでない場合、ボットは、自動的にローカルリソースをロードします...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "チェックされていない場合、ボットはそのローカルリソースを使用します",
    "Import/Export Play Settings": "インポート/エクスポート演奏パラメータ",
    "Injector: ": "1.カスタムベットサイズ2.最大ベットサイズ（のみ自動対応）3乗数リスト：値を注入する場所を選択します",
    "Reverse": "逆",
    "L2C%: ": "損失のカバーシステム％をカバーします",
    "Last Bet:": "あなたの最後の賭け短い設定を表示：コインを| ％勝利|ハイ・ロー|あなたは自動ラウンドを再生している場合",
    "LastBetStop": "確認された場合は、ボットの損失最後のカスタムベットサイズならば停止します。\nチェックしてカバーシステムが起動された場合は、最後の乗算器と、最後の賭けに損失ならば、ボットが停止します。",
    "Loss2Cover:": "カバーシステム損失のバランスがカバーします",
    "LTC Amount:": "ライトコイン：撤退の前に到達するための最低限の自動引き落としの利益額",
    "LTC:": "LTCボタンはライトコインメアドを生成します。何のメアドがない場合、それは新しいものに999diceサーバに要求します。",
    "E-mail": "Eメール",
    "Manual Withdraw": "マニュアル撤退",
    "Value": "シード値。負にすることはできません",
    "Max Bet Size:": "最大ベットサイズは賭けを停止するか、値をリセットするために再生します。",
    "Max Loss:": "最大損失額を評価します。",
    "Stop Profit Reset:": "利益リセット（オプション）を停止します：あなたの残高が賭けの前に、少なくともこの量+口座残高であれば賭けた後、その後Labouchèreシリーズをリセットします。\n|デフォルト値=0は無効利益がある場合には値=1ストップに勝つ停止します。 |利益に達すると値>1ストップを停止",
    "Maximum Balance Stop Amount:": "ボットは最大口座残高に達した場合、ベットした後、停止します。負にすることはできません！無停止のため0！",
    "MaxSLoss:": "電流損失シリーズ/最大損失シリーズ",
    "MaxSwins:": "現在の勝利シリーズは/最大はシリーズを受賞",
    "Stop Loss Reset:": "（オプション）損失のリセットを停止します。あなたの残高が以下であれば賭けた後に、この量+賭けの前に口座残高は、賭けを停止します。\n|デフォルト値=0は無効値>0ストップ賭け。負にすることはできません！",
    "Minimum Balance Stop Amount:": "あなたが最小の口座残高に達した場合、ベットした後、停止します。負にすることはできません！無停止のため0！",
    "More Option": "より多くのオプション",
    "Multi": "有効/その回線にリスト乗数を無効にします。デフォルト=チェックし",
    "on/off": "有効/カバーシステムの乗数のリストを無効にします",
    "Multi Addy Manager": "あなたは、保存/名前とcryptocurrencyにより多くのメアドを削除することができます。",
    "Multi:": "現在の乗算器が使用/最大乗数を示して示しています",
    "Multiplier List:": "乗数リスト\n乗数アップ|乗算器カバレッジシステム\nデフォルト値=1| 1",
    "Name:": "名",
    "NumBets:": "数ベット",
    "Password Verifier:": "あなたのパスワードを確認",
    "Password:": "パスワード",
    "PlayOnLoss:": "失われた場合はX回を同じベットを賭けます。\nデフォルト=1",
    "PlayOnWin:": "勝利のX回同じベットを賭けます。\nデフォルト=1",
    "Profit:": "利益",
    "Random": "ランダム",
    "Replay if Profit=0": "利益=0ならばリプレイ",
    "Reset": "失うマックスベットオンリセット（オプション）：trueの場合、ベット額はMaxPayInに等しい負け賭けた後、次のベット額がBasePayInになります。",
    "ResetOnLoss:": "失うオンリセット（オプション）：trueの場合、賭けを失った後、次のベット額がBasePayInになります。",
    "ResetOnWin:": "ウィン（オプション）上のリセット：trueの場合、賭けに勝った後、次のベット額はBasePayInになります。",
    "IncreaseOnWin:": "ウィン％に増加（オプション）：ResetOnWinがfalseの場合、賭けに勝った後、このパーセントによって次の賭けを増やします。 0.5= 50％、（二重）1.0= 100％、（トリプル）2.0=200％。負にすることはできません。",
    "IncreaseOnLoss:": "失う割合に増加（オプション）：ResetOnLoseがfalseの場合、賭けを失った後、このパーセントによって次の賭けを増やします。 0.5= 50％、（二重）1.0= 100％、（トリプル）2.0=200％。負にすることはできません。",
    "SAverage:": "平均秘密番号",
    "SCount:": "秘密の数を数えます",
    "Seed": "シード",
    "Server Connection": "サーバへの接続",
    "Single Bet Help": "簡単なヘルプの賭け",
    "Sound": "サウンドボット",
    "Start Time:": "始まる時間",
    "Start": "ボットを実行して起動します",
    "Stop": "失うマックスベット上のストップ（オプション）：trueの場合、ベット額はMaxPayInに等しい負け賭けた後、賭けが終了します。",
    "Stop:": "停止。",
    "Stop!": "音量を停止します",
    "Streak:": "シリーズ",
    "Swap:": "為替ハイ/ロー：\n1.非 - サンタによって改正6.ランダム - 3.損失の後 - - 4.たび - 5.ランダム2ゲイン1の後に\n7.アクティブなゲームパターンハイ/ローと運％",
    "SysBetList:": "Labouchereシステムの表示カスタムレイアウト",
    "Temp Bal:": "バランスの一時的な損失\n常に≤0は、損失のカバーシステムの損失を計算することができます。",
    "UserName:": "ユーザ名",
    "Wagered:": "賭け",
    "Wins:": "勝利",
    "Connect": "つなぎます",
    "New Account": "新しいアカウントを作成します",
    "Pause": "ゲームを一時停止",
    "Start": "ゲームを開始します。",
    "StopW": "勝利を停止します。ボット一時バランス、損失をカバーし、利益のバランスする場合にのみ≥0で停止",
    "H": "ボットが実行されている場合は、手動高い賭けを再生または演奏であることが高い賭けを強制",
    "M": "ミドルベット：HighとLowの間で賭けをします",
    "R": "ランダムベット：HighまたはLowなどの賭けをします",
    "L": "ボットが実行されている場合は、手動ローベットを再生または演奏であることが低賭けを強制",
    "BetOnce": "manualy一度ベット",
    "Back2BB": "戻る基本ベットへ",
    "InjectSettings": "あなたの現在の設定を注入",
    "Save": "あなたの現在のスロット設定を保存",
    "Load": "あなたの現在のスロットの設定をロードします",
    "Clear Stats": "初期値にすべての統計情報を統計パネルを清掃し、設定",
    "Settings": "[設定]ボタン",
    "Help": "ヘルプボタン",
    "Tools": "ツールパネルのボタン",
    "Generate": "ベットジェネレータ/インジェクタ用のボタンを生成します",
    "Import": "インポート設定]ボタン",
    "Export": "エクスポートの設定]ボタン",
    "Remove": "cryptocoinメアドを削除",
    "Inject": "cryptocoinメアドを注入",
    "Withdraw": "マニュアルボタンを撤回",
    "Stats": "統計パネルボタン",
    "Update E-mail/Emergency Addy": "更新メールと緊急アディ",
    "Reload": "/オフパラメータにサーバーを保存した後、ボットをリロード",
    " Set/Save ": "設定/保存",
    "Simple Martingal": "シンプルなマーチンゲール",
    "Example1": "例1の設定を注入",
    "Example2": "例2の設定を注入",
    "Cancel": "キャンセル",
    "OK": "[OK]"
};
var elH = document.getElementById('HelpMe');
var valLang = localStorage.getItem('Language');
var bul = false;

function langSwitch(val) {
    bul = true;
    if (val === 'Empty') {
        lang = {};
        bul = false;
    } else if (val === 'FR') {
        lang = TipFR;
    } else if (val === 'US') {
        lang = TipUS;
    } else if (val === 'ID') {
        lang = TipID;
    } else if (val === 'RU') {
        lang = TipRU;
    } else if (val === 'UK') {
        lang = TipUK;
    } else if (val === 'ES') {
        lang = TipES;
    } else if (val === 'PO') {
        lang = TipPO;
    } else if (val === 'JP') {
        lang = TipJP;
    }
    localStorage.setItem('Language', val);
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

function IdVer() {
    function IdVal() {
        var id = '41672147,41885861,41883035,41911740,42097489,43351580,42421786,42501294,43462636,42810743,43662531,42014340,43741644,43440138,42977475,41375026,42162591,41958518,42906746,43909104,42708946,42231414,41950724,41942038,42008707,41867761,41950464,41645413,43362952,43267020,41901153,42709132,41691618,41895529,45850900,42709307,41646332,42126767,42010616,41644671,41683366,43530952,46078857,41906741,46637547,41912858,43353338,41633330,42711681,45968856,41696749,41885016,42185952,41944676,41696641,41942663,43855751,43310560,43348334,42114272,41898338,41921111,41878290,42510870,42959779,41704680,43469318,41664453,41946359,44157537,42145823,43708269,42254873,41917796,41746511,42003867,43326068,41749466,41767957,42345544,44479219,42188495,43252889,41883770,41700384,41698047,45927825,41916820,42028970,42128884,47626432,41707496,41645117,41883768,45723437,42655686,43607845,42005682,43727174,41861721,42310692,45497324,45011424,42020993,41981759,42991429,41956156,43571492,42030539,43530851,42771711,41923798,46520436,45225821,47264087,43657936,43535879,47601428,45243392,41654996,46839452,45977684,41660667,42884187,42949582,43353033,41748915,41744689,41741317,42109571,41657774,42626167,41906900,42421182,45507521,47641048,43463900,47669902,41806343,43187250,41791816,47648006,42401172,41876910,45316792,45033202,41860264,43388463,45790414,41373345,41392192,41633687,41644970,41744479,41746146,41746353,41791569,41794418,41806891,41807224,41807704,41808072,41808307,41859378,41859516,41860040,41861268,41861402,41867709,41870969,41935755,42073017,42308791,42308792,42308793,42308837,42308840,42331884,42500289,42567346,42567423,42581231,42719662,43056236,43286810,43310431,43322311,43351502,43662430,43662489,43774511,44113329,44132201,44161669,44575648,44636146,44636510,44724189,44732736,44917320,44922058,44971071,45023214,45275579,45852242,45921936,45932993,45957489,45957541,45968471,45968474,45968477,45968499,45971802,46028129,46028130,46028131,46028133,46028137,46028141,46030439,46031445,46255839,46570943,46579909,46623028,46647559,46647739,46807127,47626065,47626176,47626207,47626222,47626337,47671273,47671428,47671482,47671516,41953563,41945802,41942531,41942090,41916415,41912797,41912628,41912573,41912571,41912551,41912533,41912514,41912513,41912508,41912502,41912324,41912307,41908118,41906825,41882956,41878016,41624809,47626389,47626310,47626132,47626029,47625998,47063850,46030151,46028026,46028024,46027998,46027980,46012268,46012074,44507682,44479296,44351381,44316496,44198350,44195349,43955729,43774346,43607610,43571455,43531243,43377856,43325957,43325912,43310209,43310068,43309837,43258712,43258360,43258193,43258192,43213977,43213870,43213869,43213867,43210625,43187204,43187031,43185638,43125244,42399461,42399460,42399451,42399443,42399319,42399312,42399304,42399164,42399162,42399157,42399153,42399150,42399148,42399146,42399142,42399139,42399134,42341195,42321491,42312041,42312040,42312039,42312014,42312012,42312011,42310445,42310434,42310429,42310413,42310411,42310409,42308790,42308788,42308772,42308684,42273291,42237573,42237482,42209529,42191374,42191265,42183685,42143159,42139999,42139878,42139660,42109735,42033620,41936022,41885444,47601404,45021055,44636100,44157498,44157224,42316011,42310623,42310550,42310549,42310548,42310547,42310546,42310545,42310543,42310446,46510952,45968587,45968586,45968585,45968584,45968582,45968581,45968580,45185849,45185659,45185378,44097971,43607358';
        id += ',1888057,24320653,25036714,31368348,25032187,24347417,24450495,35218934,24039395,24800959,24300934,23993266,35642104,23152261,38104758,23149614,24431714,24277694,23820848,24882486,24865038,31368452,24107107,23571014,27724420,23412436,24825802,31282284,19530400,23453009,38409830,23405016,24442346,23806653,31170310,23151971,24110722,19538508,24671331,25286506,28566782,23538544,23743606,23572712,31245477,38548602,23538927,23404974,23804912,27569739,24310411,24111727,22168289,23406554,40298415,10261258,23538577,23008877,23014165,24529271,25032960,20413090,18675331,19538172,23008715,20375239,19560766,23014204,23110012,23169335,23014186,18798848,27724342,10262865,19537931,20376653,20382796,18797274,24440536,19869168,19538628,19538553,20442384,23743583,24444230,19538683,19531999,19538591,19538459,29519487,20416328,18785975,19330785,19538571,23014231,23521583,19884966,19538484,39358486,18785862,10262379,18785895,20420065,18786008,23743671,10263136,18793631,23743690,23743627,23743713,23743702,23743723,23743660,23743650,40898336,19870507,20407258,1715866,38533590,23993625,38518097,23801161,38526175,10262711,39286922,24014051,15401049,22133431,40489520,27267766,19528737,22133724,19819844,875139,24099708,24014028,26409966,947440,19819827,20351612,23166312,19565377,24756744,24275982,19889275,24013992,971636,19822307,20348527,19546747,19819835,20351585,26329915,20372051,19819821,20351676,19565236,942493,24756775,19889399,23107932,1497587,19529071,19889551,19546985,19565223,19819830,19818102,20346040,20347232,20373128,25065980,19819816,20348274,19565229,1773564,950114,24671144,19818764,24756477,24756634,24755280,24756386,24756531,1825971,24756582,24756436,24756702,859859,1415459,1004426,1486651,19818769,6331962,1734498,991292,38514305,1773561,1256490,38514229,1242310,1633738,1144910,38514275,38526217,38517905,1728306,1146987,1723131,891942,6704755,38517850,1766096,881997,9847845,17213726,885117,1020988,11783344,1148524,7809063,38517781,970282,4629633,871891,5704363,873060,10833154,17618222,2442219,881343,1624364,1429134,958824,1620583,1051215,887933,939922,2587278,2304428,879142,911086,1157229,890284,969837,1154830,1386499,968418,15433786,1768641,1619741,1146583,1080237,15249848,3262128,1907147,893313,1548364,892017,15419631,2014461,883395,8926736,912464,3894035,1386246,13481969,878918,10188696,945413,1954185,4818152,884900,10246162,3089338,1571256,874495,3400546,914304,2026960,6936725,3111468,921109,921289,13887315,1744206,7479792,1234442,2873813,1571061,904686,8584306,8054726,1862770,5446786,1576045,958755,11281372,1629872,2338387,1906132,2658804,955751,886839,2428519,3743763,1739125,853613,13100378,1859906,968489,8723231,1582553,7996735,2191216,1582423,898762,2029162,874836,970192,1893919,11692817,1747162,3102575,2836009,977437,878714,1865816,2052328,837401,861898,873012,873031,873051,873120,873190,873198,873199,873362,873467,873486,873495,873498,873522,873529,873645,873663,873667,873700,873746,873846,873886,873918,874018,874021,874046,874075,874130,874150,874309,874335,874376,874383,874810,874833,874853,874859,874861,874884,874888,874918,874985,875027,875226,875277,875295,875654,875690,875738,875764,875890,876015,876034,876162,876165,876196,876265,876373,876386,876408,876465,876491,876495,876533,876560,876662,876685,876686,876753,876800,876855,876946,876986,877006,877161,877168,877213,877251,877317,877324,877346,877386,877410,877475,877478,877512,877547,877646,877659,877718,877772,877782,877822,877844,877906,877933,877981,878085,878096,878227,878252,878267,878357,878369,878458,878471,878486,878544,878598,878666,878722,878737,878824,878838,878993,879014,879125,879245,879295,879545,879673,879767,879823,879899,880048,880194,880304,880521,880603,880740,880813,880850,880926,881338,881339,881448,881472,881531,881727,881747,881924,881935,881936,882314,882315,882417,882456,882768,882870,882880,883047,883668,883711,883796,883869,883921,884095,884362,884677,884825,884955,885145,885686,885774,886028,886051,886294,886459,886757,886783';
        id += ',487224';
        if (id.search(AccountID) != -1) {
            IdStatut = true;
            return LoadChoice();
        }
        IdStatut = false;
    };
    IdVal();
    if (IdStatut === false) {
        if (!!localStorage.getItem('NewId')) {
            var id = localStorage.getItem('NewId');
            if (id.search(AccountID) != -1) {
                IdStatut = true;
                return LoadChoice();
            }
        }
        IdStatut = false;
        messageMe('It sucks!!!\nPlease create a new Account');
    }
}

function UpEmail() {
    var mail = document.getElementById('Mail').value;
    if (!mail) {
        messageMe('Email is empty!!! No update!!!');
        return;
    }
    var params = "a=UpdateEmail&s=" + cookie + "&Email=" + mail;
    console.log(params);
    http.open("POST", "https://www.999dice.com/api/web.aspx", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            ReqText = http.responseText;
            o = JSON.parse(ReqText);
            AccountInfo();
            messageMe('Email ' + mail + ' ' + o.success);
            logMe('Mail Updated', 'green');
            if (!!localStorage.getItem('EAddy')) {
                return UpAddy();
            }
        }
    };
    http.send(params);
}

function UpAddy() {
    var addy = document.getElementById('EAddy').value;
    if (!addy) {
        messageMe('Emergency addy is empty!!! No Update!!!');
        return;
    }
    var params = "a=UpdateEmergencyAddress&s=" + cookie + "&Address=" + addy;
    console.log(params);
    http.open("POST", "https://www.999dice.com/api/web.aspx", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            ReqText = http.responseText;
            o = JSON.parse(ReqText);
            AccountInfo();
            messageMe('Emergency Addy: ' + o.success + '\n' + addy);
            logMe('Addy Updated', 'green');
        }
    };
    http.send(params);
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
        }
    };
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

function showHome() {
    document.getElementById('backHome').style.display = 'block';
}

// Update MultiSlot
function upSlot(val) {
    var el0 = document.getElementById('Slot');
    var el1 = document.getElementById('MultiSlot');
    LoadSlot(val);
    el1.innerHTML = el0.innerHTML
}

// Multi bot creator
function addBot(multiMode, MultiSlot) {
    var cookie = Connect();
    NewLoad(multiMode);

    if (multiMode == 'Single') {
        messageMe('New Single Bot Added');
    }
    if (multiMode == 'Auto') {
        messageMe('New Automatic Bot Added');
    }
    if (multiMode == 'SysLab') {
        messageMe('New Labouchère Bot Added');
    }
    BotCount++;
}

function MultiSingle(type, ar) {
    if (arBot.length == 5) {
        messageMe('Too much bot already created!!!');
        return;
    } else {
        var ar2 = [];
        if (type == 'Single') {
            ar2.push([
                MultiPlaceBet,
                ar
            ]);
        } else if (type == 'Auto') {
            ar2.push([
            MultiABPlaceBet,
            ar
        ]);
        } else {
            ar2.push([
            MultiSysLabouchere,
            ar
        ]);
        }
    }
    arMBot.push(ar2);
    arMBotData.push([
        0,
        0,
        'New'
    ]);
    var temp = arMBot.length - 1;
    //showMBotBtn(temp);
    multiBLineUp(temp);
    messageMe('Bot ' + arMBot.length + ' created');
}

function showMBotBtn(n) {

}

function multiBLineUp(n) {

}

function singleBet(slot, ar) {
    var temp = document.getElementById("Slot").value;
    var obj;
    if (!temp) {
        messageMe('No Save On This Slot\nPlease Choose Another One!!!');
        return;
    } else {
        obj = JSON.parse(localStorage.getItem(temp));
    }
    Sparams = JSON.stringify({
        "Name": Name,
        "BS": BetSize,
        "BF": document.getElementById('BetFormat').value,
        "LBS": FinalBetStop,
        "Odd": Odd,
        "FB": HighLow,
        "Swap": Change,
        "SXW": SXW,
        "SXL": SXL,
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
    //Pl = 1;
    VerifId = BetId; // a remplacer
    if (ar.RePlay === 0) {
        if (obj.swap === 'Pattern') {
            if (BetPat[p] !== 0 && BetPat[p] !== 1) {
                obj.FB = Math.round(Math.random());
            } else {
                obj.FB = obj.HLPat[p];
            }
            if (obj.WinPat[0] !== 0) {
                obj.Odd = obj.WinPat[w];
            }
            // a definir en début de bet
            LowMin = 0;
            HighMax = 999999;
            LowMax = Math.round(((Odd / 100) * 1000000) - 1);
            HighMin = Number(HighMax - LowMax);
        } else if (obj.swap === 'Random') {
            obj.FB = Math.round(Math.random());
        } else if (obj.swap === 'Same' && HighLow === 0) {
            obj.FB = 0;
        } else if (obj.swap === 'Same' && HighLow === 1) {
            obj.FB = 1;
        }
        if (obj.swap === 'SantaRandom') {
            if (i !== 0) {
                if (HighLow === 0) {
                    ar.Santa = Santa - (-0.15);
                    obj.FB = Math.round(Math.random() - (-ar.Santa));
                } else {
                    ar.Santa = Santa - 0.15;
                    obj.FB = Math.round(Math.random() - (-ar.Santa));
                }
                if (ar.Santa >= 0.45) {
                    ar.Santa = 0.49;
                } else if (Santa <= -0.45) {
                    ar.Santa = -0.49;
                }
            } else {
                obj.FB = Math.round(Math.random());
            }
        }
        if (obj.Swap === "Repeat") {
            if ((SXLC >= SXL && SXL > 0) || (SXWC >= SXW && SXW > 0)) {
                if (HighLow === 0) {
                    obj.FB = 1;
                } else {
                    obj.FB = 0;
                }
                if (SXLC == SXL) {
                    SXLC = 0;
                }
                if (SXWC == SXW) {
                    SXWC = 0;
                }
            }
        }
        //if (ForceBet === 0) {
        //  HighLow = 0;
        //            ForceBet = -1;
        //            messageMe("Low Bet by User");
        //        } else if (ForceBet === 1) {
        //            HighLow = 1;
        //            ForceBet = -1;
        //            messageMe("High Bet by User");
        //        } else if (ForceBet === 4) {
        //            HighLow = Math.round(Math.random());
        //            ForceBet = -1;
        //            messageMe("Random Bet by User");
        //        }
        if (obj.FB === 0) {
            Low = LowMin;
            High = LowMax;
        } else if (obj.FB === 1) {
            Low = HighMin;
            High = HighMax;
        }
        //if (ForceBet === 3) {
        //            Low = MidMin;
        //            High = MidMax;
        //            HighLow = 3;
        //            ForceBet = -1;
        //        }
        if (i === obj.BS.length) {
            i = 0;
            if (obj.LBS) {
                messageMe("Bot has been stopped!!! After losing last bet!!!");
                HideMessage = 0;
                return;
            }
        }
        if (obj.Multi[0] === 0) {
            obj.Multi[0] = 1;
        }
        var SBets = Math.round((obj.BS[i] * (obj.X * obj.Multi[j])) / BetF);
        if (obj.Multi[j] > MaxMulti) {
            MaxMulti = obj.Multi[j];
        }
        document.getElementById("DivBetX").innerHTML = BetX[j] + '/' + MaxMulti;
        if (SeedCheck === 1) {
            if (randSeedCount >= SeedRandC) {
                SeedRandom();
                randSeedCount = 1;
            } else {
                randSeedCount++;
            }
        }
    } else {
        RePlay = 0;
    }
    //var httpSingle = new XMLHttpRequest();
    var params = "a=PlaceBet&s=" + ar.cookie + "&PayIn=" + SBets + "&Low=" + Low + "&High=" + High + "&ClientSeed=" + BetsSeed + "&Currency=" + ar.BetCoin + "&ProtocolVersion=2";
    debugMe('params', params);
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
                var q = (Number(ProfitGlobal) / xC).toFixed(8);
                if (q > Number(AWMax)) {
                    AWMax = q;
                }

                if (AutoWithdraw === 1 && q >= Number(AWMax)) {
                    AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (AW100 / 100)));
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (AW100 / 100)) / xC).toFixed(8);
                    WithdrawAmount = Math.round(AWProfit * (AW100 / 100));
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 1;
                    }
                }
                document.getElementById("DivLast3").innerHTML = q + ' | ' + AWMax;
                document.title = q + ' Single - ' + botVer;
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
                p++;
                if (o.PayOut === 0) {
                    i++;
                    LosseNum++;
                    LosseCount++;
                    WinCount = 0;
                    SXLC++;
                    SXWC = 0;
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
                            //    Losse2Cover += Number(TempBalance) * (Number(T2C) / 100) + Profit;
                            //}
                            //Losse2Cover += TempBalance * (Number(T2C) / 100);
                            //if (j === 1) {
                            //Losse2Cover = Math.round((ProfitGlobal - (AWMax * xC)) * (Number(T2C) / 100));
                            //}
                            if (j === 1) {
                                Losse2Cover = Number(TempBalance) * (Number(T2C) / 100);
                            } else if (j > 1) {
                                Losse2Cover += Number(TempBalance) * (Number(T2C) / 100);
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
                    SXWC++;
                    SXLC = 0;
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

// Connection
function Connect() {
    var el = document.getElementById('MultiPlay');
    if (el.style.display !== 'block') {
        UserName = document.getElementById("LoginVar").value;
        Password = document.getElementById("PasswordVar").value;
    } else {
        UserName = document.getElementById("UName").value;
        Password = document.getElementById("UPass").value;
    }
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
            if (newAc === 1) {
                if (!!localStorage.getItem('Mail')) {
                    UpEmail();
                }
            }
            return cookie;
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
    } else if (type === 'System' || type === 'SysLab') {
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
    var txt = '<span class="ResultsHead" style="width: 60px;">' + RType + '</span>\n<span id="rId2" class="ResultsHead" onclick="OpenId(' + RId + ');" style="width: 180px; text-decoration: underline">' + RId + '</span>\n<span class="ResultsHead" style="width: 80px;">' + Sn + '</span>\n<span class="ResultsHead" style="width: 30px;">' + Hl + '</span>\n<span class="ResultsHead" style="width: 80px;">' + RSeed + '</span>\n<span class="ResultsHead" style="width: 214px; border-right-style: solid;">' + RProfit + '</span>';
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
    var el;
    if (PlayType === 1) {
        el = document.getElementById('SinSwapO');
        if (type === 'Repeat') {
            temp += '<span class="SingleText" style="width: 70px; top: 5px; left: -20px;">Win</span>';
            temp += '<input id="SwapRepW" class="SingleInput" type="text" value="0" style="width: 70px; top: 0px; left: 70px;">';
            temp += '<span class="SingleText" style="width: 70px; top: 5px; left: 160px;">Loss</span>';
            temp += '<input id="SwapRepL" class="SingleInput" type="text" value="0" style="width: 70px; top: 0px; left: 250px;">';
            el.innerHTML = temp;
            el.display = "block";
        } else {
            el.innerHTML = temp;
            el.display = "none";
        }
    } else if (PlayType === 2) {
        el = document.getElementById('SwapOption');
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
        } else if (type === 'Pattern') {
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
    var params = "a=Withdraw&s=" + cookie + "&Amount=" + Math.round(WithdrawAmount) + "&Address=" + WithdrawAddy + "&Currency=" + BetCoin;

    http.open("POST", "https://www.999dice.com/api/web.aspx", true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {
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
    AWHttp.onreadystatechange = function () {
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

function RandPat(x) {
    var ar = [];
    for (var n = 0; n < x; n++) {
        ar[n] = Math.round(Math.random());
    }
    return ar;
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
    var temp = document.getElementById("SwapRepW");
    if (!!temp) {
        SXW = Number(temp.value);
        SXL = Number(document.getElementById("SwapRepL").value);
        SXLC = SXWC = 0;
    }

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
    FinalBetStop = document.getElementById("FinalBetStopVar").checked;
    AW100 = document.getElementById("AW100").value;
    MultiSwitch = document.getElementById("MultiSwitchVar").checked;

    T2C = Number(parseFloat(document.getElementById("T2CVar").value));
    if (isNaN(T2C) && MultiSwitch) {
        messageMe("MultiSwitch Activated but T2C is null");
        NewLoad('TempSave');
        return;
    }
    var el = document.getElementById("BetPatVar").value;
    if (el.search(/rand/i) !== -1 || el.search(/Santa/i) !== -1) {
        BetPat = RandPat(Number(el.split('rand')[1]));
        PatSwitch = el;
        if (Change === "Pattern") {
            document.getElementById("DivBetLength").innerHTML = BetPat;
        }
    } else {
        BetPat = el.split(',').map(Number);
        PatSwitch = 'false';
    }
    //if (BetPat.length != BetSize.length && Change === 'Patern') {
    //  messageMe("High/Low Patern length doesnt feet Bet Size length!!!");
    //NewLoad('TempSave');
    //return;
    //}

    BetWin = (document.getElementById("BetWinVar").value).split(',').map(Number);
    if (BetWin == 0) {
        BetWinSwitch = false;
    } else {
        BetWinSwitch = true;
    }
    //if (BetWin.length != BetSize.length && Change === 'Patern') {
    //messageMe("%win Patern length doesnt feet Bet Size length!!!");
    //NewLoad('TempSave');
    //return;
    //}
    BetWinOp = document.getElementById('BetWinOp').value;

    // Bet Seed Change after value
    SeedRandC = document.getElementById("SeedRandC").value;
    if (SeedRandC < 1) {
        SeedRandC = '1';
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
    Odd = winO = document.getElementById("ABOdd").value;
    if (Odd.search(/-R/) !== -1) {
        ran = Number(Odd.split('-R')[1]);
        Odd = win = Number(Odd.split('-')[0].split('W')[1]);
        randW = true;
    } else {
        Odd = parseFloat(Odd);
        ran = win = winO = "";
        randW = false;
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
        SXW = Number(temp.value);
        SXL = Number(document.getElementById("SwapRepeatL").value);
        SXLC = SXWC = 0;
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
    temp = document.getElementById("MaxPayIn").value;
    if (temp.search(/,/) !== -1) {
        MaxSwitch = true;
        MaxBreak = false;
        MaxPayInAr = temp.split(',');
        document.getElementById("DivMaxValue").innerHTML = MaxPayInAr[m];
    } else {
        MaxSwitch = false;
        MaxBreak = true;
        MaxPayIn = temp * x;
        if (MaxPayIn === "") {
            MaxPayIn = 0;
        }
        MaxPayInAr = [];
        document.getElementById("DivMaxValue").innerHTML = MaxPayIn;
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
    var BB = BetSize.reduce(function (pv, cv) {
        return pv + cv;
    }, 0);
    if (!!MultiSwitch) {
        BB *= BetX.reduce(function (pv, cv) {
            return pv + cv;
        }, 0);
    }
    BB *= x;
    var Stop = function () {
        if (MaxPayIn === 0 || MaxPayIn === '') {
            return 0;
        }
        if (SaveType === "Auto") {
            temp = MaxPayIn * (BB / x);
            return temp;
        } else {
            return MaxPayIn * BB;
        }
        return;
    };
    document.getElementById('GenBB').value = BB;
    document.getElementById('GenIncrease').value = R2bb;
    document.getElementById('GenStreak').value = Round;
    document.getElementById('GenStop').value = Stop();
    MaxBetLosse = BetCalc(BB, R2bb, Round, Stop(), 'none', 'y');
    document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
    // Bet Seed Change after value
    SeedRandC = document.getElementById("SeedRandC").value;
    if (SeedRandC < 1) {
        SeedRandC = '1';
    }
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
    XMulti = document.getElementById("SysXMulti").checked;
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
    if (!SysLabSwitch) {
        document.getElementById("DivMaxBetLosse").innerHTML = (MaxBetLosse / xC).toFixed(8);
    }
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
                ProfitGlobal = ProfitGlobal + Profit;
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
                var q = (Number(ProfitGlobal) / xC).toFixed(8);
                if (p > Number(AWMax)) {
                    AWMax = p;
                }
                if (AutoWithdraw === 1 && q >= Number(AWMax)) {
                    AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (SysAW100 / 100)));
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (SysAW100 / 100)) / xC).toFixed(8);
                    WithdrawAmount = Math.round(AWProfit * (SysAW100 / 100));
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 3;
                    }
                }
                document.getElementById("DivLast3").innerHTML = q + ' | ' + AWMax;
                document.title = q + ' Labouchere - ' + botVer;
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
                    //if (SysStopLosse === 1 && ((SysStopLosseAmount * BetX[j]) * -1) >= TempBalance) {
                    //BreakCount++;
                    //    document.getElementById("DivBreakCount").innerHTML = BreakCount;
                    //    audioBreak.play();
                    //    document.getElementById("DivLastBreak").innerHTML = BetNum;
                    //    SysTempProfit = 0;
                    //}
                    if (!!SysLabSwitch) {
                        BetSize.shift();
                        BetSize.pop();
                        console.log(BetSize);
                        if (BetSize.length === 0) {
                            BreakCount++;
                            messageMe("Last BetSize Lost!!!");
                            HideMessage = 0;
                            document.getElementById("DivBreakCount").innerHTML = BreakCount;
                            document.getElementById("DivLastBreak").innerHTML = 'Last: ' + BetNum;
                            audioBreak.play();
                            if (!!MultiSwitch) {
                                j++;
                                if (j === 1) {
                                    Losse2Cover = Number(TempBalance) * (Number(T2C) / 100);
                                } else if (j > 1) {
                                    Losse2Cover += Number(TempBalance) * (Number(T2C) / 100);
                                }
                                TempBalance = 0;
                                Profit = 0;
                                if (j === BetX.length) {
                                    messageMe("Max BetSize and Max Multiplicator Lost!!!\nBad Luck... :(");
                                    HideMessage = 0;
                                    BigBreak++;
                                    document.getElementById("DivBigBreak").innerHTML = BigBreak;
                                    Losse2Cover = 0;
                                    AWProfit = 0;
                                    SysTempProfit = 0;
                                    audioLosse.play();
                                    j = 0;
                                }
                            }
                            BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                            console.log('Number 2');
                        }
                    } else {
                        BetSize.push(BetSize[0] + BetSize[BetSize.length - 1]);
                        //BetSize.splice(BetSize.length, 0, (BetSize[0] - (-BetSize[BetSize.length - 1])));
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
                        if (SysStopWin === 1 && (SysStopWinAmount * BetX[j]) < TempBalance) {
                            if (TempBalance === 0) {
                                BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                            } else {
                                BetSize.pop();
                                BetSize.shift();
                            }
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
                            BetSize.push(BetSize[0] + BetSize[BetSize.length - 1]);
                            //BetSize.splice(BetSize.length, 0, (BetSize[0] - (-BetSize[BetSize.length - 1])));
                            //BetSize.push(Bets / BetX[j]);
                        }
                    } else {
                        if (SysStopWin === 1 && (SysStopWinAmount * BetX[j]) < TempBalance) {
                            if (TempBalance === 0) {
                                BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                            } else {
                                BetSize.pop();
                                BetSize.shift();
                            }
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
                            if (TempBalance === 0) {
                                BetSize = (document.getElementById("SysBetSizeVar").value).split(',').map(Number);
                            } else {
                                BetSize.pop();
                                BetSize.shift();
                            }
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
            Hbet();
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
        if (randW === true) {
            if (PlayType === 2) {
                document.getElementById('ABOdd').value = winO;
            } else if (PlayType === 1) {
                document.getElementById('OddVar').value = winO;
            } else {
                document.getElementById('SysOddVar').value = winO;
            }
        }
    }
}

// Button Return to base bet
function Back2BB() {
    i = j = m = w = 0;
    if (MaxSwitch) {
        logMe("MaxBetSize: " + MaxPayInAr[m], "red");
    }
    Losse2Cover = TempBalance = 0;
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
        /*if (debug) {
            var deb = function () {
                return p.slice(p.indexOf("PayIn") + 5, p.length);
            };
            deb = deb();
        }*/
        el.value = BetNum + 1 + ":=" + p;
    } else if (t === 'var') {
        if (PlayType === 1) {
            NewSave('SingleTemp');
        } else if (PlayType === 2) {
            NewSave('AutoTemp');
        } else if (PlayType === 3) {
            NewSave('SystemTemp');
        }
        el.value += '\n\n------------------------\n\nTempSave current settings:\n\n' + localStorage.getItem('TempSave') + '\n\n------------------------';
        localStorage.removeItem('TempSave');

        function localKey() {
            var txt = "";
            for (var k in localStorage) {
                txt += k + '||';
            }
            return txt;
        }
        var lK = localKey();
        el.value += '\n\n||Available key: \n' + lK + '\n\nGenSlot:\n' + localStorage.getItem('GenSlot') + '\n\n------------------------';
    }
}

function randWin(W, X) {
    var N = Math.random();
    if (N >= .5) {
        N = 1;
    } else {
        N = -1;
    }
    var WinRnd = ((X * Math.random() * N) + W).toFixed(2);
    return WinRnd;
}
var rndRun;

function startRW() {
    rndRun = setInterval(function () {
        Odd = randWin(65, 25);
        document.getElementById('ABOdd').value = Odd;
    }, 1000);
}

// Mise une fois / ///////////////////////////////////////////////////////////////////////////////////////////
function NewPlaceBet(callback) {
    Pl = 1;
    VerifId = BetId;
    if (RePlay === 0) {
        if (Change === 'Pattern') {
            if (BetPat[p] !== 0 && BetPat[p] !== 1) {
                HighLow = Math.round(Math.random());
            } else {
                HighLow = BetPat[p];
            }
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
        if (Change === "Repeat") {
            if ((SXLC >= SXL && SXL > 0) || (SXWC >= SXW && SXW > 0)) {
                if (HighLow === 0) {
                    HighLow = 1;
                } else {
                    HighLow = 0;
                }
                if (SXLC == SXL) {
                    SXLC = 0;
                }
                if (SXWC == SXW) {
                    SXWC = 0;
                }
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
        if (!!BetWinSwitch) {
            Odd = BetWin[w];
            LowMin = 0;
            HighMax = 999999;
            LowMax = Math.round(((Odd / 100) * 1000000) - 1);
            HighMin = Number(HighMax - LowMax);
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
            if (randSeedCount >= SeedRandC) {
                SeedRandom();
                randSeedCount = 1;
            } else {
                randSeedCount++;
            }
        }
    } else {
        RePlay = 0;
    }
    //var httpSingle = new XMLHttpRequest();
    var params = "a=PlaceBet&s=" + cookie + "&PayIn=" + Bets + "&Low=" + Low + "&High=" + High + "&ClientSeed=" + BetsSeed + "&Currency=" + BetCoin + "&ProtocolVersion=2";
    debugMe('params', params);
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
                var q = (Number(ProfitGlobal) / xC).toFixed(8);
                if (q > Number(AWMax)) {
                    AWMax = q;
                }

                if (AutoWithdraw === 1 && q >= Number(AWMax)) {
                    AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (AW100 / 100)));
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (AW100 / 100)) / xC).toFixed(8);
                    WithdrawAmount = Math.round(AWProfit * (AW100 / 100));
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 1;
                    }
                }
                document.getElementById("DivLast3").innerHTML = q + ' | ' + AWMax;
                document.title = q + ' Single - ' + botVer;
                document.getElementById("DivSecretAverage").innerHTML = (SecretAverage / BetNum).toFixed(0);
                document.getElementById("DivSecretCount").innerHTML = SecretCount;
                // Seed à ajouter au visuel où pai!!!
                //document.getElementById("DivServerSeed").innerHTML = ServerSeed || "";
                TempBalance = Number(TempBalance) - (-Number(Profit));
                if (TempBalance >= 0) {
                    TempBalance = 0;
                    w = 0;
                }
                document.getElementById("DivTempBalance").innerHTML = (Number(TempBalance) / xC).toFixed(8);
                StatsColorUpdate();
                p++;
                if (o.PayOut === 0) {
                    i++;
                    LosseNum++;
                    LosseCount++;
                    WinCount = 0;
                    SXLC++;
                    SXWC = 0;
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
                    if (!!BetWinSwitch && BetWinOp.search(/L/) > -1 && RepeatL == RepeatLosse) {
                        w++;
                    }
                    if (RepeatLosse > 1 && RepeatL < RepeatLosse) {
                        i = i - 1;
                        RepeatL++;
                        if (i < 0) {
                            i = 0;
                        }
                    } else if (RepeatLosse > 1 && RepeatL == RepeatLosse) {
                        RepeatL = 1;
                    }
                    if (i == BetSize.length) {
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
                            //    Losse2Cover += Number(TempBalance) * (Number(T2C) / 100) + Profit;
                            //}
                            //Losse2Cover += TempBalance * (Number(T2C) / 100);
                            //if (j === 1) {
                            //Losse2Cover = Math.round((ProfitGlobal - (AWMax * xC)) * (Number(T2C) / 100));
                            //}
                            if (j === 1) {
                                Losse2Cover = Number(TempBalance) * (Number(T2C) / 100);
                            } else if (j > 1) {
                                Losse2Cover += Number(TempBalance) * (Number(T2C) / 100);
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
                                    w = 0;
                                    BackStart();
                                    audioStop.play();
                                    return;
                                }
                                audioLosse.play();
                                j = 0;
                            }
                        }
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
                    SXWC++;
                    SXLC = 0;
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
                    /*if (!!BetWinSwitch && BetWinOp.search(/W/) > -1 && RepeatW === RepeatWin) {
                        w++;
                    } else {
                        w = 0;
                    }*/
                    if (!!BetWinSwitch && BetWinOp.search(/W/) > -1 && RepeatW === RepeatWin && TempBalance < 0) {
                        w++;
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
                if (TempBalance >= 0) {
                    w = 0;
                }
            }
            callback();
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
        if (Change === "Repeat") {
            if ((SXLC >= SXL && SXL > 0) || (SXWC >= SXW && SXW > 0)) {
                if (HighLow === 0) {
                    HighLow = 1;
                } else {
                    HighLow = 0;
                }
                if (SXLC == SXL) {
                    SXLC = 0;
                }
                if (SXWC == SXW) {
                    SXWC = 0;
                }
            }
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
            if (randSeedCount >= SeedRandC) {
                SeedRandom();
                randSeedCount = 1;
            } else {
                randSeedCount++;
            }
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
        if (Number(MaxPayIn) > 0 || Number(MaxPayInAr[m]) > 0) {
            if (MultiSwitch) {
                tempX = Number(BetX[j]);
            }
            if (MaxSwitch) {
                MaxPayIn = Number(MaxPayInAr[m]) * x;
            }
            //document.getElementById("DivMaxValue").innerHTML = MaxPayIn;
            tempX *= MaxPayIn;
            document.getElementById("DivMaxValue").innerHTML = tempX;
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
                var q = (Number(ProfitGlobal) / xC).toFixed(8);
                if (p > Number(AWMax)) {
                    AWMax = p;
                }
                if (AutoWithdraw === 1 && q >= Number(AWMax)) {
                    AWProfit = (Number(AWMax) * xC) - Math.round((AWGlobal / (ABAW100 / 100)));
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (ABAW100 / 100)) / xC).toFixed(8);
                    WithdrawAmount = Math.round(AWProfit * (ABAW100 / 100));
                    if (WithdrawAmount > AWAmount) {
                        BetStatut = 3;
                        PlayType = 2;
                    }
                }
                document.getElementById("DivLast3").innerHTML = q + ' | ' + AWMax;
                document.title = q + ' Auto - ' + botVer;
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
                    m++;
                    LosseNum++;
                    LosseCount++;
                    WinCount = 0;
                    SXLC++;
                    SXWC = 0;
                    ResultColor('red');
                    if (MaxSwitch) {
                        logMe("MaxBetSize: " + MaxPayInAr[m], "red");
                    }
                    if (MaxSwitch && m === MaxPayInAr.length) {
                        MaxBreak = true;
                        m = 0;
                        logMe("MaxBetSize: " + MaxPayInAr[m], "green");
                    }
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
                    if (i === BetSize.length && MaxBreak) {
                        BreakCount++;
                        if (MaxSwitch) {
                            MaxBreak = false;
                        }
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
                                //TempBalance = 0;
                                StopProfit = Profit;
                                Profit = 0;
                            }
                            TempBalance = 0;
                            if (j === BetX.length) {
                                BigBreak++;
                                messageMe("Max BetSize and Max Multiplicator Lost!!!");
                                HideMessage = 0;
                                logMe('Craaap: ' + (TempBalance / xC).toFixed(8), 'red');
                                document.getElementById("DivBigBreak").innerHTML = BigBreak;
                                document.getElementById("DivLastBigBreak").innerHTML = 'Last: ' + BetNum;
                                Crap[Crap.length] = BetNum;
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
                    SXWC++;
                    SXLC = 0;
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
                var test = p == BetPat.length;
                if (!!test) {
                    p = 0;
                    if (PatSwitch.search(/rand/i) > -1) {
                        BetPat = RandPat(Number(PatSwitch.split('rand')[1]));
                        document.getElementById("DivBetLength").innerHTML = BetPat;
                    }
                }
                if (w >= BetWin.length) {
                    w = 0;
                }
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
                        BalStopWin = 2200000000000000;
                        console.log('BalStopWIn: 1000000......');
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
                if (randW) {
                    Odd = randWin(win, ran);
                    var nO = Number(Odd);
                    if (nO < 5) {
                        Odd = "5";
                    } else if (nO > 95) {
                        Odd = "95";
                    }
                    LowMax = Math.round(((Odd / 100) * 1000000) - 1);
                    HighMin = Number(HighMax - LowMax);
                    MidMin = LowMin + Math.round((HighMax - LowMax) / 2);
                    MidMax = MidMin + LowMax;
                }
                if (MaxSwitch && m === MaxPayInAr.length) {
                    m = 0;
                    logMe("MaxBetSize: " + MaxPayInAr[m], "green");
                }
                if (MaxSwitch && TempBalance === 0) {
                    m = 0;
                    document.getElementById("DivMaxValue").innerHTML = MaxPayInAr[m];
                    logMe("MaxBetSize: " + MaxPayInAr[m], "green");
                }
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
            "SXW": SXW,
            "SXL": SXL,
            "Patern": SwapPatern,
            "MaxB": MaxPayIn / x,
            "MaxBAr": MaxPayInAr,
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
            "SXW": SXW,
            "SXL": SXL,
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
            "X": x, // A définir dans SysInjector
            "MultiSW": MultiSwitch,
            "L2C": T2C,
            "DynaW": SysStopWin,
            "DynaWA": SysStopWinAmount,
            "DynaL": SysStopLosse,
            "DynaLA": SysStopLosseAmount,
            "XMulti": XMulti, // a terminer
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
        temp = obj.Swap;
        showSwapO(temp);
        if (temp === "Repeat") {
            document.getElementById('SwapRepeatW').value = obj.SXW;
            document.getElementById('SwapRepeatL').value = obj.SXL;
        }
        if (temp === "Patern") {
            document.getElementById('SwapPatern').value = obj.Patern;
        }
        document.getElementById('MaxPayIn').value = obj.MaxB;
        if (!!obj.MaxBAr && obj.MaxBAr.length !== 0) {
            document.getElementById('MaxPayIn').value = obj.MaxBAr;
        }
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
        document.getElementById('HighLowVar').value = ABHL[obj.FB]; // vérifier le AB
        document.getElementById('ChangeVar').value = obj.Swap;
        temp = obj.Swap;
        showSwapO(temp);
        if (temp === "Repeat") {
            document.getElementById('SwapRepW').value = obj.SXW;
            document.getElementById('SwapRepL').value = obj.SXL;
        }
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
        document.getElementById("SlotName").value = obj.Name;
        document.getElementById('SysBetSizeVar').value = obj.BS;
        document.getElementById('SysBetFormat').value = obj.BF;
        //document.getElementById('FinalBetStopVar').checked = obj.LBS; //à ajouter
        document.getElementById('SysOddVar').value = obj.Odd;
        document.getElementById('SysHighLowVar').value = ABHL[obj.FB];
        document.getElementById('SysChangeVar').value = obj.Swap;
        document.getElementById('SysBetXVar').value = obj.X + '|' + obj.Multi;
        MultiSwitch = obj.MultiSW;
        document.getElementById('SysL2CVar').value = obj.L2C;
        SysStopWin = obj.DynaW;
        document.getElementById('SysStopWinAmount').value = obj.DynaWA;
        SysStopLosse = obj.DynaL;
        document.getElementById('SysStopLosseAmount').value = obj.DynaLA;
        temp = document.getElementById('SysXMulti');
        if (!obj.XMulti) {
            temp.checked = false;
        } else {
            temp.checked = true;
        }
        document.getElementById('SysStopLosseAmount').value = obj.DynaLA;
        temp = document.getElementById('SysLabInvert');
        if (!obj.Invert) {
            temp.checked = false;
        } else {
            temp.checked = true;
        }
        document.getElementById('SysCrypto').value = obj.Crypto;
        document.getElementById('SysAutoWithdrawVar').value = obj.AW;
        document.getElementById('SysAW100').value = obj.AW100;
        UpdateAddy(obj.Crypto, 'SysAutoWithdrawVar');
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
            x = obj.X;
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
    } else if (type === "Auto") { ///////////////////////////////////////Auto Load//////////////////
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
    } else if (type === "System") { ///////////////////////////////////////System Load//////////////////
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
    } else if (type === "General") { ///////////////////////////////General Settings Load///////////////////////////////////
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
            document.getElementById('ABBetX').value = '1|' + Val;
        } else if (SaveType === "Single") {
            document.getElementById('BetXVar').value = '1|' + Val;
        }
    } else if (temp === 'MaxBet') { // NEED A LOT OF WORK SANTA
        if (SaveType === "Auto") {
            if (document.getElementById('GenStreak').value <= document.getElementById('GenResults').children.length) {
                document.getElementById('MaxPayIn').value = (Number(document.getElementById('GenResults').children[0].children[1].innerHTML) * xC).toFixed(0);
            }
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
                b = (((t.slice(0, (t.length))).reduce(function (previousValue, currentValue, index, array) {
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
    var a;
    if (!!localStorage.BTC) {
        for (a = 0; a < localStorage.BTC.split(';').length; a++) {
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
        for (a = 0; a < localStorage.LTC.split(';').length; a++) {
            temp = temp + '<option value="' + this.split('&')[a] + '" class="CryptoAddy">' + this.split('&')[a] + '</option';
        }
        document.getElementsByName('CryptoAddy').innerHTML = document.getElementsByName('AWAddy').innerHTML = temp;
    }
}

// copy to clipboard
function clip(type) {
    var text;
    if (type === 'debug') {
        text = document.getElementById('DebugData').value;
    } else if (type === 'email') {
        text = 'tama.lebarbu@mail.pf';
    } else if (type === 'url1') {
        text = 'https://drive.google.com/drive/folders/0BzwzmqEWk5a-SGJ0SDg5ekM1d3M';
    } else if (type === 'url2') {
        text = 'https://sanitizebot.github.io/7zO0BF49C84/';
    } else if (type === 'playlist') {
        text = 'https://www.youtube.com/playlist?list=PL_oecN6B0Ktp9dYKiQCODHpUXReifUn9C';
    }
    var copyElement = document.createElement('input');
    copyElement.setAttribute('type', 'text');
    copyElement.setAttribute('value', text);
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

////////////////////////
hoverTip('P');
hoverTip('button');

if (valLang || valLang !== 'Empty') {
    document.getElementById('LangChoice').value = valLang;
    langSwitch(valLang);
}

if (window.history.length > 1) {
    document.getElementById('backHome').style.display = 'block';
}
