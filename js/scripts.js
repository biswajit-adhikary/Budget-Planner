// calculate balance & expenses
document.getElementById('button-calculate').addEventListener('click', function () {
    // Get income
    const incomeInput = document.getElementById('input-income');
    const income = parseFloat(incomeInput.value);

    // Get expenses
    const foodExpensesInput = document.getElementById('food-expenses');
    const foodExpenses = parseFloat(foodExpensesInput.value);
    const rentExpensesInput = document.getElementById('rent-expenses');
    const rentExpenses = parseFloat(rentExpensesInput.value);
    const clothesExpensesInput = document.getElementById('clothes-expenses');
    const clothesExpenses = parseFloat(clothesExpensesInput.value);
    const totalCost = foodExpenses + rentExpenses + clothesExpenses;

    // Get Balance
    const balanceNow = income - totalCost;

    // Update balance & expenses
    document.getElementById('total-expenses').innerHTML = totalCost;
    document.getElementById('balance').innerHTML = balanceNow;
})


// calculate saving & remaining balance
document.getElementById('saving-calculate').addEventListener('click', function () {
    // Get income
    const incomeInput = document.getElementById('input-income');
    const income = parseFloat(incomeInput.value);

    // Get rate
    const savingRateInput = document.getElementById('input-saving');
    const savingRate = parseFloat(savingRateInput.value);

    // Get saving amount
    const savingAmount = (income * savingRate) / 100;

    // Get balance
    const balanceInput = document.getElementById('balance');
    const balanceNow = parseFloat(balanceInput.innerText);

    // Get remaining balance
    const remainingBalance = balanceNow - savingAmount;

    // Update saving & remaining balance
    document.getElementById('saving-amount').innerHTML = savingAmount;
    document.getElementById('remaining-balance').innerHTML = remainingBalance;
})






// // calculate expenses
// function calculateExpenses() {
//     const foodExpensesInput = document.getElementById('food-expenses');
//     const foodExpenses = parseFloat(foodExpensesInput.value);
//     const rentExpensesInput = document.getElementById('rent-expenses');
//     const rentExpenses = parseFloat(rentExpensesInput.value);
//     const clothesExpensesInput = document.getElementById('clothes-expenses');
//     const clothesExpenses = parseFloat(clothesExpensesInput.value);
//     if (foodExpenses >= 0 && rentExpenses >= 0 && clothesExpenses >= 0) {
//         const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
//         return totalExpenses;
//     }
// }


// // calculate balance
// function calculateBalance() {
//     const totalIncomeInput = document.getElementById('input-income');
//     const totalIncome = parseFloat(totalIncomeInput.value);
//     const totalExpenses = calculateExpenses();
//     const balanceNow = totalIncome - totalExpenses;
//     return balanceNow;
// }

// // calculate balance & expenses
// document.getElementById('button-calculate').addEventListener('click', function () {
//     const currentExpenses = calculateExpenses();
//     const balanceNow = calculateBalance();
//     if (currentExpenses > 0 && balanceNow > 0) {
//         document.getElementById('error-number').innerText = "";
//         document.getElementById('total-expenses').innerHTML = currentExpenses;
//         document.getElementById('balance').innerHTML = balanceNow;
//     } else {
//         document.getElementById('error-number').innerText = "Input positive number and income should be higher than expenses!";
//         document.getElementById('total-expenses').innerHTML = 0;
//         document.getElementById('balance').innerHTML = 0;
//         return;
//     }

// })


// // calculate saving
// function calculateSaving() {
//     const balanceNow = calculateBalance();
//     const savingRateInput = document.getElementById('input-saving');
//     const savingRate = parseFloat(savingRateInput.value);
//     if (savingRate > 0 && savingRate <= 100) {
//         document.getElementById('error-saving').innerText = "";
//         const savingAmount = (balanceNow * savingRate) / 100;
//         return savingAmount;
//     } else {
//         document.getElementById('error-saving').innerText = "Saving rate should be positive number between 1 - 100!";
//         return;
//     }
// }


// // calculate saving & remaining balance
// document.getElementById('saving-calculate').addEventListener('click', function () {
//     const balanceNow = calculateBalance();
//     const savingAmount = calculateSaving();
//     const remainingBalance = balanceNow - savingAmount;
//     if (savingAmount > 0 && balanceNow > 0) {
//         document.getElementById('saving-amount').innerHTML = savingAmount;
//         document.getElementById('remaining-balance').innerHTML = remainingBalance;
//     } else {
//         document.getElementById('saving-amount').innerHTML = 0;
//         document.getElementById('remaining-balance').innerHTML = 0;
//         return;
//     }
// })