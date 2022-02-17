// Get income Function
function getIncome() {
    const incomeInput = document.getElementById('input-income');
    const income = parseFloat(incomeInput.value);
    return income;
}

// calculate balance & expenses
document.getElementById('button-calculate').addEventListener('click', function () {
    // Get income
    const income = getIncome();
    if (income > 0) {
        // Get expenses
        const foodExpensesInput = document.getElementById('food-expenses');
        const foodExpenses = parseFloat(foodExpensesInput.value);
        const rentExpensesInput = document.getElementById('rent-expenses');
        const rentExpenses = parseFloat(rentExpensesInput.value);
        const clothesExpensesInput = document.getElementById('clothes-expenses');
        const clothesExpenses = parseFloat(clothesExpensesInput.value);
        if (foodExpenses >= 0 && rentExpenses >= 0 && clothesExpenses >= 0) {
            const totalCost = foodExpenses + rentExpenses + clothesExpenses;
            if (totalCost < income) {
                // Get Balance
                const balanceNow = income - totalCost;
                // Update balance & expenses
                document.getElementById('total-expenses').innerHTML = totalCost;
                document.getElementById('balance').innerHTML = balanceNow;
                document.getElementById('error-number').innerText = "";
            } else {
                // Display error & reset value
                document.getElementById('error-number').innerText = "Income should be higher than expenses!";
                document.getElementById('total-expenses').innerHTML = 0;
                document.getElementById('balance').innerHTML = 0;
            }
        } else {
            // Display error & reset value
            document.getElementById('error-number').innerText = "Input positive expenses number only!";
            document.getElementById('total-expenses').innerHTML = 0;
            document.getElementById('balance').innerHTML = 0;
        }
    } else {
        // Display error & reset value
        document.getElementById('error-number').innerText = "Income Should be positive number!";
        document.getElementById('total-expenses').innerHTML = 0;
        document.getElementById('balance').innerHTML = 0;
    }
})


// calculate saving & remaining balance
document.getElementById('saving-calculate').addEventListener('click', function () {
    // Get income
    const income = getIncome();

    // Get rate
    const savingRateInput = document.getElementById('input-saving');
    const savingRate = parseFloat(savingRateInput.value);

    if (savingRate > 0) {
        // Get saving amount
        const savingAmount = (income * savingRate) / 100;
        // Get balance
        const balanceInput = document.getElementById('balance');
        const balanceNow = parseFloat(balanceInput.innerText);
        if (balanceNow >= savingAmount) {
            // Get remaining balance
            const remainingBalance = balanceNow - savingAmount;
            // Update saving & remaining balance
            document.getElementById('saving-amount').innerHTML = savingAmount;
            document.getElementById('remaining-balance').innerHTML = remainingBalance;
            document.getElementById('error-saving').innerText = "";
        } else {
            // Display error & reset value
            document.getElementById('error-saving').innerText = "Saving should be lower than balance!";
            document.getElementById('saving-amount').innerHTML = 0;
            document.getElementById('remaining-balance').innerHTML = 0;
        }
    } else {
        // Display error & reset value
        document.getElementById('error-saving').innerText = "Input positive number only!";
        document.getElementById('saving-amount').innerHTML = 0;
        document.getElementById('remaining-balance').innerHTML = 0;
    }
})