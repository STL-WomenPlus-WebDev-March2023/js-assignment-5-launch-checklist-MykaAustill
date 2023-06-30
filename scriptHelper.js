// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (pilotName.value === "" || copilotName.value === "") {
        return "Empty";
    } else if (isNaN(fuelLevel) || isNaN(cargoMass)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotValidation = validateInput(pilotName);
    let copilotValidation = validateInput(copilotName);
    let fuelLevelValidation = validateInput(fuelLevel);
    let cargoMassValidation = validateInput(cargoMass);

    if ( pilotValidation === "" || copilotValidation === "") {
        document.getElementByID("faultyItems").style.visibility  = "visible";
        document.getElementByID("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementByID("launchStatus").style.color = "red";
        document.getElementByID("pilotStatus").innerHTML = "`Pilot: ${pilotName} is required`";
        document.getElementByID("copilotStatus").innerHTML = "`CoPilot: ${copilotName} is required";
        return;

    } if (fuelLevel < 10000) {
        document.getElementByID("faultyItems").style.visibility = "visible";
        document.getElementByID("launchStatus").innerHTML = "Shuttle is not ready for launch";
        document.getElementByID("launchStatus").style.color - "red";
        document.getElementByID("pilotStatus").innerHTML = "`Pilot: ${pilotName}`";
        document.getElementByID("copilotStatus").innerHTML = "`CoPilot: ${copilotName}`";
        document.getElementByID("fuelStatus").innerHTML = "Fuel level is too low for launch";
        document.getElementByID("cargoStatus").innerHTML = "Cargo mass low enough for launch";

    } if(cargoMass > 10000) {
        document.getElementByID("faultyItems").style.visibility = "visible";
        document.getElementByID("launchStatus").innerHTML = "Shuttle is not ready for launch";
        document.getElementByID("launchStatus").style.color - "red";
        document.getElementByID("pilotStatus").innerHTML = "`Pilot: ${pilotName}`";
        document.getElementByID("copilotStatus").innerHTML = "`CoPilot: ${copilotName}`";
        document.getElementByID("fuelStatus").innerHTML = "Fuel level is high enough for launch";
        document.getElementByID("cargoStatus").innerHTML = "Cargo mass is too high for launch"; 
    } else {
        document.getElementByID("faultyItems").style.visibility = "hidden";
        document.getElementByID("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementByID("launchStatus").style.color - "green";
        document.getElementByID("pilotStatus").innerHTML = "`Pilot: ${pilotName}`";
        document.getElementByID("copilotStatus").innerHTML = "`CoPilot: ${copilotName}`";
        document.getElementByID("fuelStatus").innerHTML = "Fuel level is high enough for launch";
        document.getElementByID("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
    }
        
    
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
