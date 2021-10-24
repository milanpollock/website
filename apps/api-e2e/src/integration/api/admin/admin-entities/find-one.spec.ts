import {
  DUMMY_MONGODB_ID,
  EntityAdmin,
} from '@dark-rush-photography/shared/types';
import { getAuthHeaders } from '../../../../support/commands/api/auth-headers.functions';

describe('Find one Admin Entity', () => {
  beforeEach(() => cy.login().then(() => cy.deleteTestData(getAuthHeaders())));

  it('should return application/json', () =>
    cy
      .createTestAdminEntities(getAuthHeaders())
      .then((response) => response.body as EntityAdmin)
      .then((entityAdmin) =>
        cy.findOneAdminEntities(getAuthHeaders(), entityAdmin.id)
      )
      .its('headers')
      .its('content-type')
      .should('include', 'application/json'));

  it('should find a created entity', () => {
    cy.createTestAdminEntities(getAuthHeaders())
      .then((response) => response.body as EntityAdmin)
      .then((entityAdmin) => {
        return cy
          .findOneAdminEntities(getAuthHeaders(), entityAdmin.id)
          .its('body')
          .then((body) => body.id)
          .should('equal', entityAdmin.id);
      });
  });

  it('should return a status of 200 when find an entity', () =>
    cy
      .createTestAdminEntities(getAuthHeaders())
      .then((response) => response.body as EntityAdmin)
      .then((entityAdmin) =>
        cy.findOneAdminEntities(getAuthHeaders(), entityAdmin.id)
      )
      .its('status')
      .should('equal', 200));

  it('should return a not found request status when cannot find an entity', () =>
    cy
      .findOneAdminEntities(getAuthHeaders(), DUMMY_MONGODB_ID)
      .its('status')
      .should('equal', 404));

  it('should return an unauthorized status when not authenticated', () =>
    cy
      .createTestAdminEntities(getAuthHeaders())
      .then((response) => response.body as EntityAdmin)
      .then((entityAdmin) =>
        cy.findOneAdminEntities({ Authorization: '' }, entityAdmin.id)
      )
      .its('status')
      .should('equal', 401));

  it('should return an unauthorized message when not authenticated', () =>
    cy
      .createTestAdminEntities(getAuthHeaders())
      .then((response) => response.body as EntityAdmin)
      .then((entityAdmin) =>
        cy.findOneAdminEntities({ Authorization: '' }, entityAdmin.id)
      )
      .its('body.message')
      .should('equal', 'Unauthorized'));
});
