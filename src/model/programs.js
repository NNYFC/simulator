
let dailyGain;
let totalGain;
let tonBenefice;
let apportFCFA;
let apportAND;
let delaiDays;
let delaiMonths = document.querySelector("#takenDelai").value;
let tonApport;

function clickSimulate(apportFCFA,delaiDays,delaiMonths) {
    console.log("Simulation button click");

    //FCFA to AND conversion
    apportFCFA = document.querySelector("#takenAmount").value;
    tonApport = conversionFCFA_AND(apportFCFA);

    getSelectedPT(tonApport);
}

function getSelectedPT(tonApport) {
    delaiDays = document.querySelector("#takenDelai").value;
    console.log(tonApport);
    const selectedPT = document.querySelector("#profilteam").value;
    console.log(selectedPT);
    if(selectedPT === "binar"){
        binarPT(delaiDays,tonApport);
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
/**End Conversion AND FCFA and vice versa */

/**Delai either on Days or Months */
let tondelai;
/**End delai */

/**Binar Profil Team
 * Start
 */
function binarPT(delaiDays,tonApport) {
    dailyGain = 0.0092 * tonApport;
    document.getElementById("dailyGain").innerText = dailyGain +" AND";
    console.log(dailyGain);
    totalGain = dailyGain * delaiDays;//200 days maximum
    document.getElementById("totalGain").innerText = totalGain +" AND";
    console.log(totalGain);
    tonBenefice = totalGain - tonApport;
    document.getElementById("yourBenefice").innerText = tonBenefice +" AND";
    console.log(tonBenefice);
}
/**End Binar Profil Team */

/**Line Profil Team
 * Start
 */
 dailyGain = 0.0096 * tonApport;
 totalGain = dailyGain * delaiDays;//300 days maximum
 tonBenefice = totalGain - tonApport;
 /**End Line Profil Team */

/**Step Profil Team
 * Start
 */
 dailyGain = 0.0091 * tonApport;
 totalGain = dailyGain * delaiDays;//400 days maximum
 tonBenefice = totalGain - tonApport;
 /**End Step Profil Team */

/**Union Profil Team
 * Start
 */
function unionPT() {
    if (tonApport>=27500 && delaiMonths>=1 && delaiMonths<=12) {
        //dailyGain = 0.0092 * tonApport; gele en attente de debloquage
        let delaiAccount = [1.2,1.5,1.9,2.4,3,3.7,4.5,5.4,6.4,7.5,8.7,10];
        totalGain = tonApport * delaiAccount[delaiMonths-1];//12 months maximum
        tonBenefice = totalGain - tonApport;
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