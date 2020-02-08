// @name         999Dice Naughty Bot
// @namespace    https://drive.google.com/open?id=0BzwzmqEWk5a-fmNJNVV6b01udDEyUWF6WmFmaHBfSXpTUmh4U0pldUV3a3NlNm1WeS02SlE
// @version      1.1 Standalone
// @description  One file bot... Single and Automatic bet play...
// @author       Naughty Santa
// @match        https://www.999dice.com/api/web.aspx
// @grant        none
// ==/UserScript==

var botVer = 'NBot 1.3.0';
var newAc = 0;
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
    "% Win:": "удача%",
    "% Win Patern:": "Схема встановити% шанс",
    "Account Option": "Додатковий аккаунт",
    "Addy:": "адреса",
    "Amount:": "баланс",
    "Auto Bet Help": "Автоматична настройка допомогу",
    "AutoWithdraw": "автоматичний висновок",
    "AW:": "Автоматичний вивід Адреса",
    "AWBal:": "збалансувати автоматичне зняття",
    "AWProfit:": "Тимчасова перевага наступного автоматичного виведення",
    "Balance Stop Win/Loss": "Припиніть, якщо приріст сальдо рахунку або бот втрата досягається",
    "Balance:": "сальдо рахунку",
    "Base Bet:": "основна ставка",
    "Bet count:": "Кількість ставок",
    "Bet Generator/Injector": "/ Генератор набір інжектор",
    "Bets:": "ставка",
    "BTC Amount:": "Bitcoin баланс",
    "BTC:": "Bitcoin адреса",
    "Choice Help": "вибір за допомогою",
    "Connection Help": "Допомога Підключення",
    "Covered": "покритий",
    "Craaaap!!!": "дерьмо !!!",
    "Currency:": "валюта",
    "Current/New Addy": "Тока / нову адресу",
    "Custom Bet Size:": "на замовлення\nЄдине значення або список розділених комами поновлення ','.\nПриклад: 10 (один) або 1,2,3.4,2,10,25 (список).\nЗа замовчуванням = 1",
    "DOGE Amount:": "баланс dogecoin",
    "DOGE:": "dogecoin адреса",
    "Doh!": "блін!",
    "Dynamic": "динамічний",
    "DynaStopLoss:": "динамічний стоп-лосс",
    "DynaStopWin:": "Off набирає обертів",
    "Emergency:": "Аварійний Bitcoin адреса",
    "Error": "помилка",
    "First Bet:": "Перша ставка висока / низька",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Patern:": "встановлення високих схеми / Низький",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "якщо він встановлений, бот буде завантажити всі ресурси мого сервера. Ви будете в днях.",
    "If server isnt online bot will automatically load local ressources...": "якщо сервер не в мережі бот буде автоматично завантажувати локальні ресурси ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "якщо перевірити, бот буде використовувати свої місцеві ресурси",
    "Import/Export Play Settings": "системні параметри імпорту / експорту гра",
    "Injector: ": "інжектор",
    "Inverted:": "зворотний",
    "L2C%: ": "для покриття збитків у%",
    "Last Bet:": "останній",
    "LastBetStop": "зупинити втрату, якщо остання користувача установка",
    "Loss2Cover:": "щоб покрити втрати",
    "LTC Amount:": "Litecoin баланс",
    "LTC:": "Litecoin адреса",
    "email:": "електронна пошта",
    "Manual Withdraw": "ручне видалення",
    "Manual:": "керівництво",
    "Max Bet Size:": "Максимальний розмір ставки",
    "Max Loss:": "Максимальна просадка",
    "Max Bal Stop": "Динамічний зупинити автоматичну ставку, якщо баланс рахунку досягнуто до прибутку.\nЦіле ≥ 0\nЗа замовчуванням = 0 відключений\nСтоп значення = 1 переможець активується і зупиняється, коли є прибуток\nСтоп значення> 1 активізується, коли прибуток перестає досягається",
    "Maximum Balance Stop Amount:": "Максимальний залишок на рахунку",
    "MaxSLoss:": "Серія максимальних втрат",
    "MaxSwins:": "Максимальна серія перемога",
    "Min Bal Stop": "Динамічний зупинити автоматичну ставку, якщо баланс рахунку досягне втрати сигналу.\nЦіле ≥ 0\nЗа замовчуванням = 0 відключений",
    "Minimum Balance Stop Amount:": "незнижуваний залишок рахунку",
    "More Option": "Додаткові параметри",
    "Multi": "Включити / відключити список множник для цієї лінії.\nЗа замовчуванням = перевірив",
    "Emulti": "Включити / відключити список множників",
    "Multi Addy Manager": "Директор Адрес",
    "Multi:": "Показує поточний множник / показує найбільшу множник, використовуваний",
    "Multiplicator list: ": "множник список\nМультиплікатор до | Мультиплікатор система покриття\nЗначення за замовчуванням = 1 | 1",
    "Name:": "ім'я",
    "NumBets:": "Кількість ставок",
    "Password Verifier:": "перевірити свій пароль",
    "Password:": "пароль",
    "PlayOnLoss:": "Париж X раз те ж саме, якщо ставка втратив.\nЗа замовчуванням = 1",
    "PlayOnWin:": "Париж X раз те ж саме, якщо ставка перемога.\nЗа замовчуванням = 1",
    "Profit:": "прибуток",
    "Random": "випадковий",
    "Replay if Profit=0": "переграти, якщо прибуток = 0",
    "Reset": "скидання",
    "ResetOnLoss:": "грати в ту ж ставку після втрати",
    "ResetOnWin:": "грати в ту ж ставку після перемоги",
    "IncreaseOnWin:": "Збільште настройку х%, якщо перемоги ставку",
    "IncreaseOnLoss:": "Збільште створення х%, якщо втратили",
    "SAverage:": "Середні цифри секретні",
    "SCount:": "вважаючи секретний номер",
    "Seed": "насіння",
    "Server Connection": "підключення до сервера",
    "Single Bet Help": "просто допомога ставки",
    "Sound": "Звук бот",
    "Start Time:": "Час початку",
    "Stop": "зупинити",
    "Stop:": "зупинитися.",
    "Streak:": "серія",
    "Swap:": "Обмін висока / низька:\n1. Номери для\n2. після 1 посиленням\n3. після втрати\n4. коли\n5. Випадкова\n6. Випадкова внесеними Санта\n7. активний шаблон гри High / Low і удача%",
    "SysBetList:": "Показати замовлення макет для системи Лабушер",
    "Temp Bal:": "тимчасова втрата рівноваги\nЗавжди ≤ 0, дозволяє розрахувати збитки з системою покриття збитків.",
    "UserName:": "ім'я користувача",
    "Wagered:": "сума оновлень Парижі",
    "Wins:": "Перемоги",
    "Connect": "Ввійти",
    "New Account": "Створити новий обліковий запис",
    "Pause": "пауза",
    "StopW": "щоб покрити втрати і прибуток ≥ 0",
    "H": "Зробити керівництво прогноз або високий високий змусити ставку, коли бот працює",
    "M": "Ставки середовища: зробити ставку між високим і низьким",
    "R": "Випадкова Ставка: ставку до випадкового високою або низькою",
    "L": "Зробіть річний Низький Низький силу ставку або ставку, коли бот працює",
    "BetOnce": "Ставка раз вручну",
    "Back2BB": "Повернутися до початкової ставки",
    "InjectSettings": "Вводите ваші поточні настройки",
    "Save": "Зберегти поточні установки під",
    "Load": "Завантажте поточні налаштування під",
    "Clear Stats": "Очищення статистики і повернення до вихідного",
    "Settings": "кнопка Налаштування",
    "Help": "кнопка Help",
    "Tools": "Кнопка панелі інструментів",
    "Generate": "Кнопка генератора ставки",
    "Import": "Імпорт налаштувань Кнопка",
    "Export": "Кнопка налаштування експорту",
    "Remove": "Видалити адреса криптовалюта",
    "Inject": "Впровадити нову адресу криптовалюта",
    "Withdraw": "Кнопка видалення Керівництво",
    "Stats": "Кнопкова панель Статистика",
    "Update Email/Emergency Addy": "Сповіщення і аварійної адреса",
    "Reload": "Оновити бота після застосування і збереження налаштувань доступу до сервера.",
    " Set/Save ": "Застосувати і зберегти налаштування",
    "Simple Martingal": "простий мартінгальная",
    "Example1": "Приклад 1 Введення параметрів",
    "Example2": "Ін'єкційне параметри з прикладу 2",
    "Cancel": "Скасувати",
    "OK": "добре"

};
var TipRU = {
    "country": "RU",
    "title": "Russian Translation",
    "% Win:": "Удача%",
    "% Win Patern:": "Схема установить% шанс",
    "Account Option": "Дополнительный аккаунт",
    "Addy:": "адрес",
    "Amount:": "баланс",
    "Auto Bet Help": "Автоматическая настройка помощь",
    "AutoWithdraw": "автоматический вывод",
    "AW:": "Автоматический вывод Адрес",
    "AWBal:": "сбалансировать автоматическое снятие",
    "AWProfit:": "Временное преимущество следующего автоматического вывода",
    "Balance Stop Win/Loss": "Прекратите, если прирост сальдо счета или бот потеря достигается",
    "Balance:": "сальдо счета",
    "Base Bet:": "основная ставка",
    "Bet count:": "Количество ставок",
    "Bet Generator/Injector": "/ генератор набор инжектор",
    "Bets:": "ставка",
    "BTC Amount:": "Bitcoin баланс",
    "BTC:": "Bitcoin адрес",
    "Choice Help": "выбор с помощью",
    "Connection Help": "помощь Подключение",
    "Covered": "покрытый",
    "Craaaap!!!": "дерьмо !!!",
    "Currency:": "валюта",
    "Current/New Addy": "тока / новый адрес",
    "Custom Bet Size:": "на заказ\nЕдинственное значение или список разделенных запятыми обновления ','.\nПример: 10 (один) или 1,2,3.4,2,10,25 (список).\nПо умолчанию = 1",
    "DOGE Amount:": "баланс dogecoin",
    "DOGE:": "dogecoin адрес",
    "Doh!": "блин!",
    "Dynamic": "динамический",
    "DynaStopLoss:": "динамический стоп-лосс",
    "DynaStopWin:": "Off набирает обороты",
    "Emergency:": "Аварийный Bitcoin адрес",
    "Error": "ошибка",
    "First Bet:": "Первая ставка высокая / низкая",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Patern:": "установления высоких схемы / Низкий",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "если он установлен, бот будет скачать все ресурсы моего сервера. Вы будете в днях.",
    "If server isnt online bot will automatically load local ressources...": "если сервер не в сети бот будет автоматически загружать локальные ресурсы ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "если проверить, бот будет использовать свои местные ресурсы",
    "Import/Export Play Settings": "системные параметры импорта / экспорта игра",
    "Injector: ": "инжектор",
    "Inverted:": "Обратный",
    "L2C%: ": "для покрытия убытков в%",
    "Last Bet:": "последний",
    "LastBetStop": "остановить потерю, если последняя пользовательская установка",
    "Loss2Cover:": "чтобы покрыть потери",
    "LTC Amount:": "Litecoin баланс",
    "LTC:": "Litecoin адрес",
    "email:": "Эл. почта",
    "Manual Withdraw": "ручное удаление",
    "Manual:": "руководство",
    "Max Bet Size:": "Максимальный размер ставки",
    "Max Loss:": "Максимальная просадка",
    "Max Bal Stop": "Динамический остановить автоматическую ставку, если баланс счета достигнуто до прибыли.\nЦелое ≥ 0\nПо умолчанию = 0 отключен\nСтоп значение = 1 победитель активируется и останавливается, когда есть прибыль\nСтоп значение> 1 активизируется, когда прибыль перестает достигается",
    "Maximum Balance Stop Amount:": "Максимальный остаток на счете",
    "MaxSLoss:": "Серия максимальных потерь",
    "MaxSwins:": "Максимальная серия победа",
    "Min Bal Stop": "Динамический остановить автоматическую ставку, если баланс счета достигнет потери сигнала.\nЦелое ≥ 0\nПо умолчанию = 0 отключен",
    "Minimum Balance Stop Amount:": "Неснижаемый остаток счета",
    "More Option": "Дополнительные параметры",
    "Multi": "Включить / отключить список множитель для этой линии.\nПо умолчанию = проверил",
    "Emulti": "Включить / отключить список множителей",
    "Multi Addy Manager": "директор Адрес",
    "Multi:": "Показывает текущий множитель / показывает наибольшую множитель, используемый",
    "Multiplicator list: ": "множитель список\nМультипликатор до | Мультипликатор система покрытия\nЗначение по умолчанию = 1 | 1",
    "Name:": "имя",
    "NumBets:": "Количество ставок",
    "Password Verifier:": "проверить свой пароль",
    "Password:": "пароль",
    "PlayOnLoss:": "Париж X раз то же самое, если ставка потерял.\nПо умолчанию = 1",
    "PlayOnWin:": "Париж X раз то же самое, если ставка победа.\nПо умолчанию = 1",
    "Profit:": "прибыль",
    "Random": "случайный",
    "Replay if Profit=0": "переиграть, если прибыль = 0",
    "Reset": "сброс",
    "ResetOnLoss:": "играть в ту же ставку после потери",
    "ResetOnWin:": "играть в ту же ставку после победы",
    "IncreaseOnWin:": "Увеличьте настройку х%, если победы ставку",
    "IncreaseOnLoss:": "Увеличьте создание х%, если потеряли",
    "SAverage:": "Средние цифры секретные",
    "SCount:": "считая секретный номер",
    "Seed": "семена",
    "Server Connection": "подключение к серверу",
    "Single Bet Help": "просто помощь ставки",
    "Sound": "Звук бот",
    "Start Time:": "Время начала",
    "Stop": "остановить",
    "Stop:": "остановиться.",
    "Streak:": "серия",
    "Swap:": "Обмен высокая / низкая:\n1. Номера для\n2. после 1 усилением\n3. после потери\n4. когда\n5. Случайная\n6. Случайная внесенными Санта\n7. активный шаблон игры High / Low и удача%",
    "SysBetList:": "Показать заказ макет для системы Лабушер",
    "Temp Bal:": "временная потеря равновесия\nВсегда ≤ 0, позволяет рассчитать убытки с системой покрытия убытков.",
    "UserName:": "имя пользователя",
    "Wagered:": "сумма обновлений Париже",
    "Wins:": "Победы",
    "Connect": "Войти",
    "New Account": "Создать новую учетную запись",
    "Pause": "Пауза",
    "StopW": "Победный Стоп: остановить бота",
    "H": "Сделать руководство прогноз или высокий высокий заставить ставку",
    "M": "Ставки среды: сделать ставку между высоким и низким",
    "R": "Случайная Ставка: ставку к случайному высокой или низкой",
    "L": "Сделайте ручной Низкий Низкий силу ставку или ставку",
    "BetOnce": "Ставка раз вручную",
    "Back2BB": "Вернуться к первоначальной ставки",
    "InjectSettings": "Вводите ваши текущие настройки",
    "Save": "Сохранить текущие настройки под",
    "Load": "Загрузите текущие настройки под",
    "Clear Stats": "Очистка статистики и возвращение к исходному",
    "Settings": "Кнопка Настройки",
    "Help": "Кнопка Help",
    "Tools": "Кнопка панели инструментов",
    "Generate": "Кнопка генератора ставки",
    "Import": "Импорт настроек Кнопка",
    "Export": "Кнопка настройки экспорта",
    "Remove": "Удалить адрес криптовалюта",
    "Inject": "Внедрить новый адрес криптовалюта",
    "Withdraw": "Кнопка удаления Руководство",
    "Stats": "Кнопочная панель Статистика",
    "Update Email/Emergency Addy": "Оповещения и аварийной адрес",
    "Reload": "Обновить бота после применения и сохранения настроек доступа к серверу.",
    " Set/Save ": "Применить и сохранить настройки",
    "Simple Martingal": "Простой мартингальная",
    "Example1": "Пример 1 Введение параметров",
    "Example2": "Инъекционное параметры из примера 2",
    "Cancel": "Отменить",
    "OK": "Хорошо"
};
var TipID = {
    "country": "ID",
    "title": "Indonesian Translation",
    "% Win:": "% Keberuntungan",
    "% Win Patern:": "Skema mengatur% kemungkinan",
    "Account Option": "Akun opsional",
    "Addy:": "alamat",
    "Amount:": "keseimbangan",
    "Auto Bet Help": "bantuan pengaturan otomatis",
    "AutoWithdraw": "penarikan otomatis",
    "AW:": "Otomatis penarikan Alamat",
    "AWBal:": "menyeimbangkan penarikan otomatis",
    "AWProfit:": "manfaat sementara dari penarikan otomatis berikutnya",
    "Balance Stop Win/Loss": "berhenti jika gain saldo rekening bot atau kerugian dicapai",
    "Balance:": "saldo rekening",
    "Base Bet:": "taruhan dasar",
    "Bet count:": "count taruhan",
    "Bet Generator/Injector": "/ generator set injector",
    "Bets:": "taruhan",
    "BTC Amount:": "keseimbangan Bitcoin",
    "BTC:": "alamat bitcoin",
    "Choice Help": "pilihan menggunakan",
    "Connection Help": "koneksi bantuan",
    "Covered": "tercakup",
    "Craaaap!!!": "sialan !!!",
    "Currency:": "mata uang",
    "Current/New Addy": "saat ini / alamat baru",
    "Custom Bet Size:": "custom made\nSebuah nilai tunggal atau daftar dipisahkan koma update ','.\nContoh: 10 (tunggal) atau 1,2,3.4,2,10,25 (daftar).\nDefault = 1",
    "DOGE Amount:": "keseimbangan dogecoin",
    "DOGE:": "alamat dogecoin",
    "Doh!": "sialan!",
    "Dynamic": "dinamis",
    "DynaStopLoss:": "stop loss dinamis",
    "DynaStopWin:": "momentum off keuntungan",
    "Emergency:": "Alamat bitcoin darurat",
    "Error": "error",
    "First Bet:": "taruhan pertama tinggi / rendah",
    "Google OAuth 2FA:": "Google OAuth 2FA",
    "High/Low Patern:": "pengaturan Tinggi skema / Rendah",
    "If checked, the bot will download all ressources from my server. Like that you ll be up to date everyday and you ll see my message": "jika diperiksa, bot akan men-download semua sumber daya dari server saya. Anda akan berada di hari.",
    "If server isnt online bot will automatically load local ressources...": "jika server tidak online bot secara otomatis akan memuat sumber daya lokal ...",
    "If unchecked, the bot will use his local ressource only audio files will be downloaded from server": "jika diperiksa, bot akan menggunakan sumber daya lokal",
    "Import/Export Play Settings": "parameter sistem impor / ekspor permainan",
    "Injector: ": "penyuntik",
    "Inverted:": "terbalik",
    "L2C%: ": "untuk menutupi kerugian di%",
    "Last Bet:": "lalu",
    "LastBetStop": "stop loss jika setting custom terakhir",
    "Loss2Cover:": "untuk menutup kerugian",
    "LTC Amount:": "keseimbangan litecoin",
    "LTC:": "alamat litecoin",
    "email:": "e-mail",
    "Manual Withdraw": "penghapusan manual",
    "Manual:": "panduan",
    "Max Bet Size:": "Ukuran taruhan maksimum",
    "Max Loss:": "penarikan maksimum",
    "Max Bal Stop": "dinamis menghentikan taruhan otomatis jika saldo rekening mencapai sebelum keuntungan.\nInteger ≥ 0\nDefault = 0 cacat\nNilai berhenti = 1 pemenang diaktifkan dan berhenti ketika ada keuntungan\nNilai berhenti> 1 diaktifkan, berhenti ketika keuntungan tercapai",
    "Maximum Balance Stop Amount:": "saldo rekening maksimum",
    "MaxSLoss:": "serangkaian kerugian maksimum",
    "MaxSwins:": "seri menang maksimum",
    "Min Bal Stop": "dinamis menghentikan taruhan otomatis jika saldo rekening mencapai hilangnya masukan.\nInteger ≥ 0\nDefault = 0 cacat",
    "Minimum Balance Stop Amount:": "saldo rekening minimal",
    "More Option": "lebih banyak pilihan",
    "Multi": "Mengaktifkan / menonaktifkan daftar multiplier untuk baris itu.\nDefault = diperiksa",
    "Emulti": "Mengaktifkan / menonaktifkan daftar pengganda",
    "Multi Addy Manager": "Manajer Alamat",
    "Multi:": "Menunjukkan multiplier saat / menunjukkan multiplier terbesar digunakan",
    "Multiplicator list: ": "daftar multiplier\nMultiplier up | Sistem cakupan multiplier\nNilai default = 1 | 1",
    "Name:": "nama",
    "NumBets:": "jumlah taruhan",
    "Password Verifier:": "memeriksa sandi Anda",
    "Password:": "kata sandi",
    "PlayOnLoss:": "paris X kali taruhan yang sama jika hilang.\nDefault = 1",
    "PlayOnWin:": "paris X kali taruhan yang sama jika kemenangan.\nDefault = 1",
    "Profit:": "keuntungan",
    "Random": "tdk sengaja",
    "Replay if Profit=0": "memutar ulang jika laba = 0",
    "Reset": "ulang",
    "ResetOnLoss:": "bermain taruhan yang sama setelah kerugian",
    "ResetOnWin:": "bermain taruhan yang sama setelah menang",
    "IncreaseOnWin:": "Meningkatkan pengaturan x% jika menang taruhan",
    "IncreaseOnLoss:": "Meningkatkan pengaturan dari x% jika hilang",
    "SAverage:": "nomor rahasia rata",
    "SCount:": "menghitung jumlah rahasia",
    "Seed": "benih",
    "Server Connection": "koneksi ke server",
    "Single Bet Help": "sederhana bantuan taruhan",
    "Sound": "bot suara",
    "Start Time:": "waktu mulai",
    "Stop": "berhenti",
    "Stop:": "berhenti.",
    "Streak:": "seri",
    "Swap:": "pertukaran Tinggi / Rendah:\n1. Non\n2. setelah 1 gain\n3. setelah kerugian\n4. setiap kali\n5. Acak\n6. sembarang diubah dengan Santa\n7. pola permainan aktif Tinggi / Rendah dan keberuntungan%",
    "SysBetList:": "Tampilan tata letak kustom untuk sistem Labouchere",
    "Temp Bal:": "kerugian sementara keseimbangan\nSelalu ≤ 0, memungkinkan perhitungan kerugian dengan sistem hilangnya penutup.",
    "UserName:": "user name",
    "Wagered:": "jumlah update paris",
    "Wins:": "kemenangan",
    "Connect": "Log",
    "New Account": "Buat akun baru",
    "Pause": "Berhenti sebentar",
    "StopW": "Menang Berhenti: menghentikan bot ketika keseimbangan sementara",
    "H": "Membuat pengguna taruhan atau kekuatan tinggi Tinggi taruhan ketika bot sedang berjalan",
    "M": "Taruhan lingkungan: menempatkan taruhan antara tinggi dan rendah",
    "R": "Bet acak: memasang taruhan untuk acak Tinggi atau Rendah",
    "L": "Membuat Rendah kekuatan Rendah pengguna taruhan atau taruhan saat bot sedang berjalan",
    "BetOnce": "Bertaruh sekali secara manual",
    "Back2BB": "Kembali ke taruhan asli",
    "InjectSettings": "Menyuntikkan pengaturan Anda saat ini",
    "Save": "Menyimpan pengaturan Anda saat ini di bawah",
    "Load": "Memuat pengaturan Anda saat ini di bawah",
    "Clear Stats": "Membersihkan statistik dan kembali ke dasar",
    "Settings": "Tombol pengaturan",
    "Help": "Bantuan Tombol",
    "Tools": "Tombol panel Tools",
    "Generate": "Tombol untuk bertaruh Generator",
    "Import": "Pengaturan tombol impor",
    "Export": "Pengaturan ekspor tombol",
    "Remove": "Menghapus alamat cryptocurrency",
    "Inject": "Menyuntikkan alamat cryptocurrency baru",
    "Withdraw": "Tombol manual removal",
    "Stats": "Tombol panel statistik",
    "Update Email/Emergency Addy": "Update email dan alamat darurat",
    "Reload": "Reload bot setelah menerapkan dan menyimpan pengaturan akses server.",
    " Set/Save ": "Menerapkan dan menyimpan pengaturan",
    "Simple Martingal": "Sederhana martingale",
    "Example1": "Contoh 1 Injeksi parameter",
    "Example2": "Menyuntikkan parameter Contoh 2",
    "Cancel": "Membatalkan",
    "OK": "Oke"
};
var TipUS = {
    "country": "US",
    "title": "English Translation"
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
        var id = '41672147,41885861,41883035,41911740,42097489,42162591,41958518,41375026,41950724,41942038,42008707,41867761,41950464,41645413,42231414,41691618,41646332,42126767,42014340,41644671,41683366,41906741,41633330,41696749,41885016,41895529,42185952,41944676,41696641,41942663,42114272,41898338,41921111,41878290,41912858,41704680,41664453,41946359,42145823,42254873,41901153,41917796,41746511,42003867,41749466,41767957,42345544,41883770,41700384,41698047,41916820,42028970,42128884,41707496,41645117,41883768,42005682,41861721,42310692,42020993,41981759,41956156,42188495,42030539,42010616,41923798,42421786,41654996,41660667,41748915,41744689,41741317,42109571,41657774,41906900,42421182,41806343,41791816,42401172,41876910,41860264,41373345,41392192,41624809,41633687,41644970,41744479,41746146,41746353,41791569,41794418,41806891,41807224,41807704,41808072,41808307,41859378,41859516,41860040,41861268,41861402,41867709,41870969,41878016,41882956,41885444,41906825,41908118,41912307,41912324,41912502,41912508,41912513,41912514,41912533,41912551,41912571,41912573,41912628,41912797,41916415,41935755,41936022,41942090,41942531,41945802,41953563,42033620,42073017,42109735,42139660,42139878,42139999,42143159,42183685,42191265,42191374,42209529,42237482,42237573,42273291,42308684,42308772,42308788,42308790,42308791,42308792,42308793,42308837,42308840,42310409,42310411,42310413,42310429,42310434,42310445,42310446,42310543,42310545,42310546,42310547,42310548,42310549,42310550,42310623,42312011,42312012,42312014,42312039,42312040,42312041,42316011,42321491,42331884,42341195,42399134,42399139,42399142,42399146,42399148,42399150,42399153,42399157,42399162,42399164,42399304,42399312,42399319,42399443,42399451,42399460,42399461';
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
        };
    }
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
        };
    }
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
}

function LoadAuto() {
    SaveType = 'Auto';
    LoadMode();
    document.getElementById('AutoPlay').style.display = 'block';
    document.getElementById('AutoHelp').style.display = 'block';
    LoadParams('PauseStart();', 'NewABPlaceBet(function(){});Pl=0;', 'ABVarUpdate();', "NewSave('Auto');", "NewLoad('Auto');");
}

function LoadSystem() {
    SaveType = 'System';
    LoadMode();
    document.getElementById('SystemPlay').style.display = 'block';
    document.getElementById('SystemHelp').style.display = 'block';
    LoadParams('PauseStart();', 'SysLabouchere(function(){});Pl=0;', 'SysInjector();', "NewSave('System');", "NewLoad('System');");
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
                messageMe("Error: Too Small or Insufficient funds\nNew try soon" || 0);
                audioErr.play();
                HideMessage = 0;
                logMe('WithdrawAmount = ' + WithdrawAmount + '\nAWProfit = ' + AWProfit, 'white');
                WithdrawAmount = Math.round(AWProfit * SysAW100);
                logMe('WithdrawAmount = ' + WithdrawAmount, 'pink');
                if (WithdrawAmount > AWAmount) {
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
                }
            }
        }
    };
    HideMessage = 0;
    AWHttp.send(AWparams);
}

// Mise en place des variables avant de miser
function VarUpdate() {
    BetSize = (document.getElementById("BetSizeVar").value).split(',').map(Number);
    //if (BetSize[0] === 0 && BetSize.length === 1) {
    //messageMe("BetSize is null ...");
    //return;
    //}
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
    if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin && BetSize[0] > 0) {
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
    i = j = 0;
}

// Auto Bet Var injector
function ABVarUpdate() {
    BetSize = (document.getElementById("ABBetSize").value).split(',').map(Number);
    //if (BetSize[0] === 0 && BetSize.length === 1) {
    //  messageMe("BetSize is null ...");
    //    return;
    //}
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
    i = j = 0;
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
    if (((BetSize[0] * x) || (BetSize[0] * BetX[0])) < BetMin && BetSize[0] > 0) {
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
    i = j = 0;
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
                if (AutoWithdraw === 1) {
                    AWProfit = AWProfit - (-Profit);
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * SysAW100) / xC).toFixed(8);
                }
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
                    WithdrawAmount = Math.round(AWProfit * SysAW100);
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
                if (AutoWithdraw === 1) {
                    AWProfit = AWProfit - (-Profit);
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (AW100 / 100)) / xC).toFixed(8);
                }

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
                    WithdrawAmount = Math.round(AWProfit * (AW100 / 100));
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
                if (AutoWithdraw === 1) {
                    AWProfit = AWProfit - (-Profit);
                    document.getElementById("DivAWGlobal").innerHTML = (AWGlobal / xC).toFixed(8) + " | C: " + AWCount;
                    document.getElementById("DivAWProfit").innerHTML = ((AWProfit * (ABAW100 / 100)) / xC).toFixed(8);
                }
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
                    WithdrawAmount = Math.round(AWProfit * (ABAW100 / 100));
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
    ProfitGlobal = Profit = AWProfit = AWGlobal = AWCount = BetNum = TrueBetNum = WinNum = WinCount = LosseNum = LosseCount = Wagered = StreakLosses = StreakWins = SecretAverage = SecretCount = BreakCount = BigBreak = 0;
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
    document.getElementById(id).innerHTML = temp;
}

function AddyRemove(type, name) {
    var c = document.getElementById('AddyCrypto').value;
    var a = document.getElementById('AddyName').value;
    var t = localStorage.getItem(c).split(c + '&').splice(1, localStorage.getItem(c).split(c + '&').length - 1);
    console.log(c + '\n' + a);
    console.log(t);
    for (var h = 0; h < t.length; h++) {
        if (t[h].indexOf(a) !== -1) {
            t.splice(h, 1);
            console.log('Find one at ' + h + ', remove it now');
        }
    }
    var b = (((t.slice(0, (t.length))).reduce(function (previousValue, currentValue, index, array) {
        return previousValue + 'DOGE&' + currentValue;
    })));
    b = 'DOGE&' + b;
    localStorage.setItem(c, b);
    messageMe(c + ' Addy ' + a + ' has been removed!!!')
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
    document.getElementById('SysCrypto').value = 'Empty';
    document.getElementById('CryptoVar').value = 'Empty';
    document.getElementById('AutoWithdrawVar').value = 'Empty';
    document.getElementById('SysAutoWithdrawVar').value = 'Empty';
}

function TestSingle() {
    LoadChoice();
    LoadSingle();
    document.getElementById('ABCrypto').value = 'Empty';
    document.getElementById('SysCrypto').value = 'Empty';
    document.getElementById('ABAutoWithdrawVar').value = 'Empty';
    document.getElementById('SysAutoWithdrawVar').value = 'Empty';
}

function TestSystem() {
    LoadChoice();
    LoadSystem();
    document.getElementById('ABCrypto').value = 'Empty';
    document.getElementById('CryptoVar').value = 'Empty';
    document.getElementById('AutoWithdrawVar').value = 'Empty';
    document.getElementById('ABAutoWithdrawVar').value = 'Empty';
}

////////////////////////
hoverTip('P');
hoverTip('button');

if (valLang || valLang !== 'Empty') {
    document.getElementById('LangChoice').value = valLang;
    langSwitch(valLang);
}