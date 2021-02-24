/// <reference types="cypress" />

context('MoodEntry Actions', () => {
  it('opens login page', () => {
    cy.visit('http://localhost:8080/');
    cy.screenshot('login-page');
  });
  
  it('logs in user', () => {
    cy.server();
    cy.route('POST', '/auth/login').as('login');
    // TODO: find by XPath in place of ids.
    cy.get('#username').type('testuser');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.screenshot('mood-entry-page');
  });
  
  it('navigates to /statistics', () => {
    cy.get('#statistics').click();
    cy.screenshot('statistics-page-en');
  });
  
  it('changes languages', () => {
    cy.get('#statistics').contains('Statistics');
    cy.get('#toggle-menu').click();
    cy.get('#change-language').click();
    cy.get('#statistics').contains('Statistiken');
    cy.screenshot('statistics-page-de');
  });
  
  it('logs out user', () => {
    cy.get('#toggle-menu').click();
    cy.wait(100);
    cy.get('#logout').click();
    cy.wait(100);
    cy.screenshot('redirected-home-page');
  });
});
