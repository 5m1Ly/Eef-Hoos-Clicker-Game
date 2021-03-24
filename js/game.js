let Game = {
    user: {
        money: 0,
        mpc: 1,
        mps: 0,
        level: 1,
        exp: 0,
        expNeeded: 500,
        epc: 1
    },
    upgrades: [
        {
            id: 0,
            name: "Auto Diefstal",
            icon: "fa fa-car fa-3x",
            mpcToAdd: 0.5,
            mpsToAdd: 0,
            epcToAdd: 1,
            cost: 10,
            amountBought: 0,
            message: "We hebben een inval gedaan bij een lood waarbij een aantal gestolen auto's zijn aangetroffen. deze werden vermoedelijk gebruikt voor bom aanslagen bij wanbetalers in het criminele circuit."
        },
        {
            id: 1,
            name: "Inbreken",
            icon: "fa fa-home fa-3x",
            mpcToAdd: 0,
            mpsToAdd: 1,
            epcToAdd: 1,
            cost: 500,
            amountBought: 0,
            message: "We hebben vanochtend een inbreker gepakt met een tas vol met siraden, goud, autoradio's, en contant geld."
        },
        {
            id: 2,
            name: "Transport Verzekering",
            icon: "fa fa-truck fa-3x",
            mpcToAdd: 5,
            mpsToAdd: 0,
            epcToAdd: 2.5,
            cost: 1000,
            amountBought: 0,
            message: "We hebben vanavond rond 23:00 vier vrachtwagens staande gehouden. er was een vuurgevecht alle verdachten zijn aangehouden en in de vrachtwagens zijn 200kg aan hajs gevonden waarschijnlijk was dit een transport van de beruchte klaas bruinsma."
        },
        {
            id: 3,
            name: "Witwas Operatie",
            icon: "fa fa-building-o fa-3x",
            mpcToAdd: 0,
            mpsToAdd: 5,
            epcToAdd: 2.5,
            cost: 5000,
            amountBought: 0,
            message: "We zijn vanochten om 3:40 bij 4 panden binnen gevallen die mogelijk betrokken zijn bij grote witwas operatie's"
        },
        {
            id: 4,
            name: "Emperium Uitbrijding",
            icon: "fa fa-users fa-3x",
            mpcToAdd: 25,
            mpsToAdd: 0,
            epcToAdd: 5,
            cost: 10000,
            amountBought: 0,
            message: "We hebben vandaag 3 verdachte aangehouden die betrokken waren bij het importeren van de explosive stof cemtex."
        },
        {
            id: 5,
            name: "Explosiven inkoop",
            icon: "fa fa-bomb fa-3x",
            mpcToAdd: 0,
            mpsToAdd: 25,
            epcToAdd: 5,
            cost: 50000,
            amountBought: 0,
            message: "We zijn vandaag bij een loods binnen gevallen waarbij 6 containers zijn aangetroffen met profesionele bommen."
        }
    ],
    gameValues: {
        levelMultiplier: 1.5,
        upgradeCostMultiplier: 1.25,
        lossOn: [1, 7, 34, 59]
    },
    levels: [
        {
            img: "./img/eef1.jpg",
            afzender: "@Eef Hoos",
            message: "Hoe werkt dit pleuris ding dan"
        },
        {
            img: "./img/eef1.jpg",
            afzender: "@Eef Hoos",
            message: "Hoe werkt dit pleuris ding dan"
        },
        {
            img: "./img/eef1.jpg",
            afzender: "@Eef Hoos",
            message: "Heb het eidelijk uitgevonden. niet met dank aan jullie. 😉"
        },
        {
            img: "./img/eef1.jpg",
            afzender: "@Eef Hoos",
            message: "Voor de mensen die mij nog niet kennen ik ben Evert Hendrik Hoos maar jullie mogen mij Eef noemen."
        },
        {
            img: "./img/eef2.jpg",
            afzender: "@Eef Hoos",
            message: "Ik was zeventien toen ik voor het eerst de gevangenis in ging. Ik was vijftig toen ik er voor de laatste keer uit kwam."
        },
        {
            img: "./img/eef2.jpg",
            afzender: "@Eef Hoos",
            message: "Ik ben het incassobureau Toetanchamon begonnen. Ik heb een kantoor op het plein in den haag. met een parchtig uitzicht"
        },
        {
            img: "./img/eef2.jpg",
            afzender: "@Eef Hoos",
            message: "Mijn incasso bureau was niet officieel gecertificeerd dus ik kon gwn mijn gang gaan."
        },
        {
            img: "./img/eef2.jpg",
            afzender: "@Eef Hoos",
            message: "Bekijk het nieuwe reclame filmptje eens https://www.youtube.com/watch?v=XxOKcX73KYI"
        },
        {
            img: "./img/eef3.jpg",
            afzender: "@Eef Hoos",
            message: "Mensen konden voor 2500€ een incasso bij mij aanvragen dan ging ik degene bij wie ik een incasso moet plegen onderzoeken en dat kost geld. Als het dan zover was dan ging ik incaseren."
        },
        {
            img: "./img/eef3.jpg",
            afzender: "@Eef Hoos",
            message: "Vandaag weer een incasso gedaan die verliep heel zoepel https://www.youtube.com/watch?v=YV1MjBP05wg"
        },
        {
            img: "./img/eef3.jpg",
            afzender: "@Eef Hoos",
            message: "Lekker dan 2 oude werknemers van mij hebben een bom bij de haagse courant laten ontploffen. nu mag ik er voor opdraaien."
        },
        {
            img: "./img/eef3.jpg",
            afzender: "@Eef Hoos",
            message: "Vandaag rechtzaak over de bom aanslagen op de haagse courant."
        },
        {
            img: "./img/eef4.jpg",
            afzender: "@Eef Hoos",
            message: "Ik moet dus 10 jaar zitten voor iets wat ik niet heb gedaan, lekker dan."
        },
        {
            img: "./img/eef4.jpg",
            afzender: "@Eef Hoos",
            message: "Zaai hier."
        },
        {
            img: "./img/eef4.jpg",
            afzender: "@Eef Hoos",
            message: "Duurt nog wel even voor dat ik hier uit ben."
        },
        {
            img: "./img/eef4.jpg",
            afzender: "@Eef Hoos",
            message: "Dat is mooi sta ik gewoon 3 jaar eerder buiten dan afgesproken."
        },
        {
            img: "./img/eef5.jpg",
            afzender: "@Eef Hoos",
            message: "Ik ben me gaan righten op het belangenbehartigen van (ex-)gedetineerden met mijn nieuwe stichting genaamt Themis."
        },
        {
            img: "./img/eef5.jpg",
            afzender: "@Eef Hoos",
            message: "Met ex-gedetineerden maakt ik nu vanuit stichting Themis zijn naam een dag blad genaamt The mis-Take naar gedetineerden in de gevangenis."
        },
        {
            img: "./img/eef5.jpg",
            afzender: "@Eef Hoos",
            message: "Er is vandaag een bom aanslag gepleegd op het kantoor van stichting Themis."
        },
        {
            img: "./img/eef5.jpg",
            afzender: "@Eef Hoos",
            message: "Ik denkt dat ik naar het buiten land ga het word mij wat te heet onder de voeten hier."
        },
        {
            img: "./img/eef6.jpg",
            afzender: "@Eef Hoos",
            message: "Zijn we dan lekker in het zwembad van mijn nieuwe villa in portugal, bleek dus dat ze hier nog geen incassobureau hadden dus ben ik er zelf incassobureau Themis begonnen. https://www.youtube.com/watch?v=86xB-jghDGs"
        }
    ]
}

// makes the incasso button add money to the user its wallet
function incasso() {
    Game.user.money += Game.user.mpc;
    addExp();
    updateMoney();
}

// adds exp to the player its current exp amount whenever the function is called
function addExp() {
    if (Game.user.exp >= Game.user.expNeeded) {
        Game.user.level++;
        Game.user.expNeeded *= Game.gameValues.levelMultiplier;
        Game.user.exp = 0;
        drawImg();
        animateProgresBar(Game.user.exp, Game.user.expNeeded);
        updateTwitter(Game.levels[Game.user.level].message, Game.levels[Game.user.level].afzender)
    } else {
        Game.user.exp += Game.user.epc;
        drawImg();
        animateProgresBar(Game.user.exp, Game.user.expNeeded);
    }
}

window.setInterval(function addExp() {
    Game.user.money += Game.user.mps;
    updateMoney();
}, 1000);

// if the user clicks the button and has enough money it buys the upgrade
function buyUpgrade(upId) {
    for (let i = 0; i < Game.upgrades.length; i++) {
        const up = Game.upgrades[i];
        if (up.id == upId) {
            if (Game.user.money >= up.cost) {
                let lossVal = Math.floor(Math.random()*100)+1;
                let lossPercent = Math.floor(Math.random()*15)+1;
                if (Game.gameValues.lossOn.includes(lossVal)) {
                    Game.user.mpc -= ((Game.user.mpc/100)*lossPercent);
                    Game.user.mps -= ((Game.user.mps/100)*lossPercent);
                    Game.user.epc -= ((Game.user.epc/100)*lossPercent);
                    up.amountBought -= ((up.amountBought/100)*lossPercent);

                    let afzender = "@Politie"
                    let newMessage = up.message + ` Je bent ${lossPercent}% van je upgrade kwijt geraakt (Geld per incasso, Geld per second, exp per click & hoeveelheid gekocht)`

                    updateTwitter(newMessage, afzender);

                    addExp();
                    updateStats()
                    updateMoney();
                    updateCost(upId);
                } else {
                    Game.user.money -= up.cost;
                    Game.user.mpc += up.mpcToAdd;
                    Game.user.mps += up.mpsToAdd;
                    Game.user.epc += up.epcToAdd;
                    
                    up.cost *= Game.gameValues.upgradeCostMultiplier;
                    up.amountBought++;
    
                    addExp();
                    updateStats()
                    updateMoney();
                    updateCost(upId);
                }
            }
        }
    }
}

// adds upgrade buttons to the game when ever the function is called
function drawButtons() {  
    let upgradeButtons = "";
    for (let i = 0; i < Game.upgrades.length; i++) {
        const button = Game.upgrades[i];
        let newButton = `
            <button class="col-11 col-lg-5 mb-2" value="${button.id}" onclick="buyUpgrade(this.value)">
                <div class="row" id="upgradeBtn">
                    <div class="col-2 my-auto pt-2 pb-2">
                        <i class="${button.icon}" aria-hidden="true"></i>
                    </div>
                    <div class="col-10 my-auto pt-2 text-white">
                        <p id="bought" value="${button.id}">x Gekocht: ${button.amountBought}</p>
                        <p id="cost" value="${button.id}">Cost: €${drawNum(button.cost)},-</p>
                    </div>
                </div>        
            </button>
        `
        upgradeButtons += newButton;
    }
    $('#buttonBox').append(upgradeButtons);
}

// adds a dot every 3 characters to the given numbner
function drawNum(num) {
    let newNum = Math.floor(num);
    let dotNum = newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return dotNum;
}

// displays image based on level
function drawImg() {
    for (let i = 0; i < Game.levels.length; i++) {
        const level = Game.levels[i];
        const imgSource = level.img;
        const userLevel = Game.user.level;

        if (i === userLevel) {
            if ($('#imgBox').children().length > 0) {
                $('#img').remove();
                let newImgTag = `<img src="${imgSource}" id="img" class="img" alt="Eef_Hoos_afbeelding_${i}">`
                $('#imgBox').append(newImgTag);
            } else {
                let newImgTag = `<img src="${imgSource}" id="img" class="img" alt="Eef_Hoos_afbeelding_${i}">`
                $('#imgBox').append(newImgTag);
            }
        }
    }
}

function updateMoney() {
    $('#money').text(`€${drawNum(Game.user.money)},-`);
}

function updateStats() {
    $('#displayEpc').text(`Epc: ${Math.floor(Game.user.epc)}`)
    $('#displayMps').text(`Mps: ${Math.floor(Game.user.mps)}`)
    $('#displayMpc').text(`Mpc: ${Math.floor(Game.user.mpc)}`)
}

function updateCost(upId) {
    $(`#bought[value='${upId}']`).text(`x Gekocht: ${Math.floor(Game.upgrades[upId].amountBought)}`)
    $(`#cost[value='${upId}']`).text(`Cost: €${drawNum(Game.upgrades[upId].cost)},-`)
}

function updateTwitter(bericht, afzender) {
    $('#afzender').text(afzender);
    $('#bericht').text(bericht);
}

function animateProgresBar(exp, expNeeded) {
    let progres = (Math.floor(exp)/Math.floor(expNeeded))*100;
    
    $('#level').text(`Level: ${Game.user.level}`)
    $('#exp').text(`exp: ${drawNum(exp)}/${drawNum(expNeeded)}`);
    $('#progressbar').animate({width: progres+"%"}, 1);

}

$(document).ready(function() {
    drawButtons();
    drawImg();
    updateCost(0, 1, 2, 3, 4, 5);
    updateStats()
    addExp();
});


