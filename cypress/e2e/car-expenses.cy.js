import GaragePage from '../pages/GaragePage';
import ExpensesPage from '../pages/ExpensesPage';

const garagePage = new GaragePage();
const expensesPage = new ExpensesPage();

describe('Car and Expenses Management', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        cy.login(Cypress.config('user.email'), Cypress.config('user.password'));
    });

    it('should add a car', () => {
        garagePage.visit();
        garagePage.addCar({ name: 'Toyota', model: 'Camry' });
        cy.get('.success-message').should('contain', 'Car added successfully');
    });

    it('should add fuel expense to the car', () => {
        expensesPage.addFuelExpense({ amount: 50, date: '2023-09-21' });
        cy.get('.success-message').should('contain', 'Expense added successfully');
    });
});
