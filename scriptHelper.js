// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
    <li>Name: ${name}</li>
    <li>Diameter: ${diameter}</li>
    <li>Star: ${star}</li>
    <li>Distance from Earth: ${distance}</li>
    <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
     } else {
       return "Is a Number"
    }
}

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    console.log("!!!");
    console.log(list);

    if ( validateInput(pilotName)=== "Empty" || validateInput(copilotName)=== "Empty" || validateInput(fuelLevel)=== "Empty" ||  validateInput(cargoMass)=== "Empty") {
        window.alert("All fields are required!");
        //list.style.visibility = "visible";
        document.getElementById("faultyItems").style.visibility  = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";

    } if (fuelLevel < 10000) {

        //list.style.visibility = "visible";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotName}`;
        document.getElementById("copilotStatus").innerHTML = `CoPilot: ${copilotName}`;
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";

    } if(cargoMass > 10000) {
        
        //list.style.visibility = "visible";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotName}`;
        document.getElementById("copilotStatus").innerHTML = `CoPilot: ${copilotName}`;
        document.getElementById("fuelStatus").innerHTML = "Fuel level is high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for launch"; 
    } else {
        //list.style.visibility = "visible";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotName}`;
        document.getElementById("copilotStatus").innerHTML = `CoPilot: ${copilotName}`;
        document.getElementById("fuelStatus").innerHTML = "Fuel level is high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });     

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random()*planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
