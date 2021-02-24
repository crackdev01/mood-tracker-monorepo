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
    cy.get('#login-button').click();
    cy.screenshot('mood-entry-page');
  });
  
  it('changes languages', () => {
    cy.get('#mood-entry').contains('Mood Entry');
    cy.get('#toggle-menu').click();
    cy.get('#change-language').click();
    cy.get('#mood-entry').contains('Stimmungseintrag');
    cy.screenshot('mood-entry-page-de');
  });
  
  it('navigates to /statistics', () => {
    cy.get('#statistics').click();
    cy.wait(1000);
    cy.screenshot('statistics-page');
  });
  
  it('logs out user', () => {
    cy.get('#toggle-menu').click();
    cy.wait(100);
    cy.get('#logout').click();
    cy.wait(100);
    cy.screenshot('redirected-home-page');
  });
});
