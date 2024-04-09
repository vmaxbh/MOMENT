const moment = require("moment");

Cypress.Commands.add('de0a30', () => {
    const dataNascimento30 = moment().subtract(30, 'years').format('DD/MM/YYYY');
    cy.visit('/');
    cy.get('#APjFqb').type(dataNascimento30);
    cy.screenshot('de30');

});

Cypress.Commands.add('de31a50', () => {
    const dataNascimento31 = moment().subtract(31, 'years').format('DD/MM/YYYY');
    const dataNascimento50 = moment().subtract(50, 'years').format('DD/MM/YYYY');
    cy.visit('/');
    cy.get('#APjFqb').type(dataNascimento31);
    cy.screenshot('de31');
    cy.get('#APjFqb').clear().type(dataNascimento50);
    cy.screenshot('de50');

});

Cypress.Commands.add('de51a70', () => {
    const dataNascimento51 = moment().subtract(51, 'years').format('DD/MM/YYYY');
    const dataNascimento70 = moment().subtract(70, 'years').format('DD/MM/YYYY');
    cy.visit('/');
    cy.get('#APjFqb').type(dataNascimento51);
    cy.screenshot('de51');
    cy.get('#APjFqb').clear().type(dataNascimento70);
    cy.screenshot('de70');

});

Cypress.Commands.add('acimade70', () => {
    const dataNascimento71 = moment().subtract(71, 'years').format('DD/MM/YYYY');
    cy.visit('/');
    cy.get('#APjFqb').type(dataNascimento71);
    cy.screenshot('acimade70');

});