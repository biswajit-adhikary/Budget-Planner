// calculate expenses
function calculateExpenses() {
    const foodExpensesInput = document.getElementById('food-expenses');
    const foodExpenses = parseFloat(foodExpensesInput.value);
    const rentExpensesInput = document.getElementById('rent-expenses');
    const rentExpenses = parseFloat(rentExpensesInput.value);
    const clothesExpensesInput = document.getElementById('clothes-expenses');
    const clothesExpenses = parseFloat(clothesExpensesInput.value);
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    return totalExpenses;
}

// calculate balance
function calculateBalance() {
    const totalIncomeInput = document.getElementById('input-income');
    const totalIncome = parseFloat(totalIncomeInput.value);
    const totalExpenses = calculateExpenses();
    const balanceNow = totalIncome - totalExpenses;
    return balanceNow;
}

// calculate saving
function calculateSaving() {
    const balanceNow = calculateBalance();
    const savingRateInput = document.getElementById('input-saving');
    const savingRate = parseFloat(savingRateInput.value);
    const savingAmount = (balanceNow * savingRate) / 100;
    return savingAmount;
}

// calculate balance & expenses
document.getElementById('button-calculate').addEventListener('click', function () {
    document.getElementById('total-expenses').innerHTML = calculateExpenses();
    document.getElementById('balance').innerHTML = calculateBalance();
})

// calculate saving & remaining balance
document.getElementById('saving-calculate').addEventListener('click', function () {
    const balanceNow = calculateBalance();
    const savingAmount = calculateSaving();
    const remainingBalance = balanceNow - savingAmount;
    document.getElementById('saving-amount').innerHTML = savingAmount;
    document.getElementById('remaining-balance').innerHTML = remainingBalance;
})
