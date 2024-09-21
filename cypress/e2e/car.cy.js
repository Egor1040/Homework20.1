describe('Car Management', () => {
    let carId;
  
    it('should create a car and validate through API', () => {
      // Перехоплення запиту
      cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('createCar');
  
      // Додаємо машину через UI
      cy.visit('/garage');
      cy.get('#add-car-button').click();
      cy.get('#car-name').type('Toyota');
      cy.get('#car-model').type('Camry');
      cy.get('#submit').click();
  
      // Чекаємо на перехоплений запит
      cy.wait('@createCar').then((interception) => {
        // Перевірка статусу
        expect(interception.response.statusCode).to.eq(201);
        carId = interception.response.body.id; // Зберігаємо ID машини
      });
  
      // Перевірка через API
      cy.request('GET', 'https://qauto.forstudy.space/api/cars').then((response) => {
        expect(response.status).to.eq(200);
        const car = response.body.find((car) => car.id === carId);
        expect(car).to.exist; // Переконуємось, що машина є в списку
        expect(car.name).to.eq('Toyota'); // Перевірка даних
        expect(car.model).to.eq('Camry');
      });
    });
  });
  