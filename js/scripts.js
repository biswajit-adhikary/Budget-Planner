function calculateExpenses() {
    const foodExpensesForm = document.getElementById('food-expenses');
    const foodExpenses = parseInt(foodExpensesForm.value);
    const rentExpensesForm = document.getElementById('rent-expenses');
    const rentExpenses = parseInt(rentExpensesForm.value);
    const clothesExpensesForm = document.getElementById('clothes-expenses');
    const clothesExpenses = parseInt(clothesExpensesForm.value);
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    return totalExpenses;
}

document.getElementById('button-calculate').addEventListener('click', function () {
    calculateExpenses()
})
