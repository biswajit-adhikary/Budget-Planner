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
    if (totalExpenses > totalIncome) {
        const balanceNow = totalIncome - totalExpenses;
        document.getElementById('error-expenses').innerText = "Expenses is greater than income!"
        return balanceNow;
    } else {
        const balanceNow = totalIncome - totalExpenses;
        document.getElementById('error-expenses').innerText = ""
        return balanceNow;
    }

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
    const currentExpenses = calculateExpenses();
    const balanceNow = calculateBalance();
    if (currentExpenses > 0) {
        document.getElementById('total-expenses').innerHTML = currentExpenses;
        document.getElementById('balance').innerHTML = balanceNow;
        document.getElementById('error-number').innerText = "";
    } else {
        document.getElementById('error-number').innerText = "Please fill all fields, number only!";
        document.getElementById('total-expenses').innerHTML = '00';
        document.getElementById('balance').innerHTML = '00';
    }
})

// calculate saving & remaining balance
document.getElementById('saving-calculate').addEventListener('click', function () {
    const balanceNow = calculateBalance();
    const savingAmount = calculateSaving();
    if (balanceNow > 0 && savingAmount > 0) {
        const remainingBalance = balanceNow - savingAmount;
        document.getElementById('saving-amount').innerHTML = savingAmount;
        document.getElementById('remaining-balance').innerHTML = remainingBalance;
        document.getElementById('error-saving').innerText = "";
    } else {
        document.getElementById('error-saving').innerText = "Need some balance for saving!";
        document.getElementById('saving-amount').innerHTML = "00";
        document.getElementById('remaining-balance').innerHTML = "00";
    }
})
