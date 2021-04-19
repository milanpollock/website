import { getGreeting } from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to website!');
  });

  beforeEach(() => {
    cy.task('clear:db');
    cy.task('seed:db', userSeed.data);

    cy.visit('http://localhost:8080/login');

    cy.login('amir@cypress.io', '1234');
  });

  it('load tweets for selected hashtags', () => {
    cy.intercept('GET', '/tweets', 'fixture:tweets').as('tweets');

    cy.fixture('tweets').then((tweets) => {
      cy.intercept({
        url: '/tweets',
        response: tweets,
        delay: 3_000, // simulate slow response
        status: 404, // simulate error scenarios
      }).as('tweets');
    });

    cy.get('#hashtags').type('javascript{enter}').type('cypressio{enter}');

    cy.window().then((win) => {
      cy.wait('@tweets')
        .its('response.body.tweets')
        .should('have.length', win.app.$store.state.tweets.length);
    });
  });

  it('should render the component', () => {
    cy.get('drp-button').click().should('have.class', 'active');

    cy.request('/users/1').its('body').should('deep.eql', { name: 'Amir' });

    cy.get('#name-input').type('Amir');

    cy.get('#email-input').type('amir@cypress.io');

    cy.get('#form').submit();

    cy.get('#success-message').should('be.visible');
  });

  it('should login a user', () => {
    cy.visit('http://localhost:8080/signup');

    cy.location('pathname').should('eq', '/login');

    cy.location('pathname').should('eq', '/board');
  });
});
