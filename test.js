const petContainer = document.querySelector(".pet-container");


let devBot = {
    energy: 100,
    bugs: 0,
    isAlive: true
};

// Selecting DOM elements [cite: 1, 2]
const energyVal = document.querySelector("#energy-val"); // [cite: 2]
const bugsVal = document.querySelector("#bugs-val"); // [cite: 2]
const statusText = document.querySelector("#status-text"); // [cite: 2]

const chargeBtn = document.querySelector("#charge-btn"); // [cite: 2]
const debugBtn = document.querySelector("#debug-btn"); // [cite: 2]
const rebootBtn = document.querySelector("#reboot-btn");



const updateSystemStatus = () => {

    petContainer.classList.remove("warning-battery", "warning-bugs", "dead");

    if (!devBot.isAlive) {
        petContainer.classList.add("dead");
        statusText.textContent = "CRASHED";
        rebootBtn.classList.remove("hidden");

    } else if (devBot.bugs > 70) {
        petContainer.classList.add("warning-bugs");
        statusText.textContent = "WARNING: HIGH BUG RATE";
    } else if (devBot.energy < 30) {
        petContainer.classList.add("warning-battery");
        statusText.textContent = "WARNING: LOW BATTERY";
    } else {
        statusText.textContent = "ONLINE";
    }
};

// Function to handle charging
chargeBtn.addEventListener("click", () => {
    // Check if the bot is still alive before charging
    if (devBot.isAlive) {
        devBot.energy += 10;

        // Cap the energy at 100%
        if (devBot.energy > 100) devBot.energy = 100;
        
        // Update the ui text on the screen
        energyVal.textContent = devBot.energy;
        updateSystemStatus();
    }
});

debugBtn.addEventListener("click", () => {
    if (devBot.isAlive) {
        devBot.bugs -= 5;

        if (devBot.bugs < 0) devBot.bugs = 0;
        
        bugsVal.textContent = devBot.bugs;
        updateSystemStatus();
    }
});

rebootBtn.addEventListener("click", () => {
    devBot.isAlive = true;
    devBot.energy = 100; 
    devBot.bugs = 0;
    
    energyVal.textContent = devBot.energy;
    bugsVal.textContent = devBot.bugs;

    rebootBtn.classList.add("hidden");
    
    updateSystemStatus();
});

setInterval (() => {
    if (!devBot.isAlive) {
        return; 
    }
    devBot.energy -= 2;
    devBot.bugs += 1;

    if (devBot.energy <= 0 || devBot.bugs >= 100) {
        devBot.isAlive = false;
        statusText.textContent = "CRASHED";

       if (devBot.energy < 0) devBot.energy = 0;
        if (devBot.bugs > 100) devBot.bugs = 100;
    }
    
    energyVal.textContent = devBot.energy;
    bugsVal.textContent = devBot.bugs;
    updateSystemStatus();

}, 1000);

