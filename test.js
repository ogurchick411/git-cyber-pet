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

// Function to handle charging
chargeBtn.addEventListener("click", () => {
    // Check if the bot is still alive before charging
    if (devBot.isAlive) {
        devBot.energy += 10;

        // Cap the energy at 100%
        if (devBot.energy > 100) {
            devBot.energy = 100;
        }

        // Update the ui text on the screen
        energyVal.textContent = devBot.energy;
    }
});

debugBtn.addEventListener("click", () => {
    if (devBot.isAlive) {
        devBot.bugs -= 15;

        if (devBot.bugs < 0) {
            devBot.bugs = 0;
        }
        bugsVal.textContent = devBot.bugs;
    }
});