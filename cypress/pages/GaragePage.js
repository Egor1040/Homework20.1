class GaragePage {
    visit() {
        cy.visit('/garage');
    }

    addCar(carDetails) {
        cy.get('#add-car-button').click();
        cy.get('#car-name').type(carDetails.name);
        cy.get('#car-model').type(carDetails.model);
        cy.get('#submit').click();
    }
}

export default GaragePage;
