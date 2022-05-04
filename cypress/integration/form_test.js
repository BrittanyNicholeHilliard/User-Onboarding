describe('Form Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    const firstName = () => cy.get('input[name=first_name');
    const emailInput = () => cy.get('input[name=email]');

    it('has a first name input', () => {
        firstName().should('exist');
    })

    it('has an email input', () => {
        emailInput().should('exist');
    })


})