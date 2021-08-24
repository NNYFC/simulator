
let dailyGain;
let totalGain;
let tonBenefice;
let apportFCFA;
let apportAND;
let delaiDays;
let delaiMonths = document.querySelector("#takenDelai");
let tonApport;

function onSelectUnionPT() {
    const selectPT = document.querySelector("#profilteam").value;
    if (selectPT === "union") {
        delaiMonths.setAttribute("placeholder","Months");
    }
}

function clickSimulate(apportFCFA) {
    console.log("Apport Simulation button click");

    //FCFA to AND conversion
    apportFCFA = document.querySelector("#takenAmount").value;
    tonApport = conversionFCFA_AND(apportFCFA);

    //get selected profil team
    getSelectedPT(tonApport);
}

function getSelectedPT(tonApport) {
    delaiDays = document.querySelector("#takenDelai").value;
    console.log(tonApport);
    const selectedPT = document.querySelector("#profilteam").value;
    console.log(selectedPT);
    if(selectedPT === "binar"){
        binarPT(delaiDays,tonApport);
    }else if(selectedPT === "line"){
        linePT(delaiDays,tonApport);
    }else if(selectedPT === "step"){
        stepPT(delaiDays,tonApport);
    }else  if(selectedPT === "union"){
        unionPT(delaiDays,tonApport);
    }
}

/**Conversion from AND to FCFA and vice versa
 * start
 */
function conversionFCFA_AND(apportFCFA) {
    apportAND = apportFCFA / 650.00000019500000005850000001755;
    document.getElementById("conAmount").innerText = apportAND +" AND";
    return apportAND;
}

function conversionAND_FCFA(apportAND) {
    apportFCFA = apportAND * 550;
    return apportFCFA;
}
/**End Conversion AND FCFA and vice versa */

/**Binar Profil Team
 * Start
 */
function binarPT(delaiDays,tonApport) {
    dailyGain = 0.0092 * tonApport;
    document.getElementById("dailyGain").innerText = dailyGain +" AND";
    document.getElementById("dailyGainfrs").innerText = Math.round(conversionAND_FCFA(dailyGain))+" FCFA";
    totalGain = dailyGain * delaiDays;//200 days maximum
    document.getElementById("totalGain").innerText = totalGain +" AND";
    document.getElementById("totalGainfrs").innerText = Math.round(conversionAND_FCFA(totalGain))+" FCFA";
    tonBenefice = totalGain - tonApport;
    document.getElementById("yourBenefice").innerText = tonBenefice +" AND";
    document.getElementById("yourBeneficefrs").innerText = Math.round(conversionAND_FCFA(tonBenefice))+" FCFA";
}
/**End Binar Profil Team */

/**Line Profil Team
 * Start
 */
function linePT(delaiDays,tonApport) {
    dailyGain = 0.0096 * tonApport;
    document.getElementById("dailyGain").innerText = dailyGain +" AND";
    document.getElementById("dailyGainfrs").innerText = Math.round(conversionAND_FCFA(dailyGain))+" FCFA";
    totalGain = dailyGain * delaiDays;//300 days maximum
    document.getElementById("totalGain").innerText = totalGain +" AND";
    document.getElementById("totalGainfrs").innerText = Math.round(conversionAND_FCFA(totalGain))+" FCFA";
    tonBenefice = totalGain - tonApport;
    document.getElementById("yourBenefice").innerText = tonBenefice +" AND";
    document.getElementById("yourBeneficefrs").innerText = Math.round(conversionAND_FCFA(tonBenefice))+" FCFA";
}
 /**End Line Profil Team */

/**Step Profil Team
 * Start
 */
function stepPT(delaiDays,tonApport) {
    dailyGain = 0.0091 * tonApport;
    document.getElementById("dailyGain").innerText = dailyGain +" AND";
    document.getElementById("dailyGainfrs").innerText = Math.round(conversionAND_FCFA(dailyGain))+" FCFA";
    totalGain = dailyGain * delaiDays;//400 days maximum
    document.getElementById("totalGain").innerText = totalGain +" AND";
    document.getElementById("totalGainfrs").innerText = Math.round(conversionAND_FCFA(totalGain))+" FCFA";
    tonBenefice = totalGain - tonApport;
    document.getElementById("yourBenefice").innerText = tonBenefice +" AND";
    document.getElementById("yourBeneficefrs").innerText = Math.round(conversionAND_FCFA(tonBenefice))+" FCFA";
}
 /**End Step Profil Team */

/**Union Profil Team
 * Start
 */
function unionPT(delaiDays,tonApport) {
    //tonapport >= 27500
    if (tonApport>=42.307692295  && delaiDays>=1 && delaiDays<=12) {
        //dailyGain = 0.0092 * tonApport; gele en attente de debloquage
        document.getElementById("dailyGain").innerText = "Gele en attente de debloquage";
        document.getElementById("dailyGainfrs").innerText = "Gele en attente de debloquage";
        let delaiAccount = [1.2,1.5,1.9,2.4,3,3.7,4.5,5.4,6.4,7.5,8.7,10];
        totalGain = tonApport * delaiAccount[delaiDays-1];//12 months maximum
        document.getElementById("totalGain").innerText = totalGain +" AND";
        document.getElementById("totalGainfrs").innerText = Math.round(conversionAND_FCFA(totalGain))+" FCFA";
        tonBenefice = totalGain - tonApport;
        document.getElementById("yourBenefice").innerText = tonBenefice +" AND";
        document.getElementById("yourBeneficefrs").innerText = Math.round(conversionAND_FCFA(tonBenefice))+ +" FCFA";
    } else {
        console.log("incorrect investment amount or Month delai");
    }
}
 /**End Union Profil Team */


/*
let binarPT;
//start
const investmentVolume = 100/1000000;//AND
const bonuses = 2/100;//percent per day of your investment
//facteur d'efficasite 0,9% min a 
const durationTerm = 200/400;//days
//end

let synergyPT;
//start
const programDuration = 45/180;//days
const bonuses = 2/100;//percent
const downPayment = 25/70;//percent
//end
*/
