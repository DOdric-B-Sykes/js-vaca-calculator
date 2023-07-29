var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

// Function for user input
var tripInfo = function() {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodations = Number(prompt("What are your accommodation cost?"));
    var numDays = Number(prompt("How many days does your trip last?"));

    calculateDailyBudget(totalBudget, accommodations, numDays);
};

// Function to calculate daily budget
var calculateDailyBudget = function (totalBudget, accommodations, numDays) {
    var daily = ((totalBudget - accommodations)/numDays).toFixed(2);
    
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

// Log out Function with Click Event Listener
tripInfoButton.addEventListener("click", function (){
    tripInfo()
});