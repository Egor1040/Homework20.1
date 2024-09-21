class ExpensesPage {
    addFuelExpense(expenseDetails) {
        cy.get('#add-expense-button').click();
        cy.get('#expense-amount').type(expenseDetails.amount);
        cy.get('#expense-date').type(expenseDetails.date);
        cy.get('#submit').click();
    }
}

export default ExpensesPage;
