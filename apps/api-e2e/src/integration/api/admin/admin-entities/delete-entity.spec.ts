import { Entity, EntityType } from '@dark-rush-photography/shared/types';
import {
  getAuthHeaders,
  getAuthHeadersAdmin,
} from '../../../../support/commands/api/auth-headers.functions';

describe('deleteEntity', () => {
  beforeEach(() =>
    cy
      .loginAdmin()
      .then(() =>
        cy
          .findAllEntityAdmin(getAuthHeadersAdmin(), EntityType.ImagePost)
          .then(($body) =>
            $body.body.forEach((entity: Entity) =>
              cy.deleteEntityAdmin(entity.type, entity.id!)
            )
          )
      )
  );

  /*
  it('should delete a created about', () => {
    const randomNumber = Cypress._.random(0, 100).toString();
    cy.createAboutAdmin(`test-about-${randomNumber}`)
      .its('body.id')
      .then((id) => cy.deleteAboutAdmin(id))
      .then(() => cy.findAllAboutAdmin())
      .its('body.length')
      .should('equal', 0);
  });

  it('should return a status of 204 when delete', () => {
    const randomNumber = Cypress._.random(0, 100).toString();
    cy.aboutCreateAdmin(`test-about-${randomNumber}`)
      .its('body.id')
      .then((id) => cy.aboutDeleteAdmin(id))
      .its('status')
      .should('equal', 204);
  });

  it('should return an empty body when delete', () => {
    const randomNumber = Cypress._.random(0, 100).toString();
    cy.aboutCreateAdmin(`test-about-${randomNumber}`)
      .its('body.id')
      .then((id) => cy.aboutDeleteAdmin(id))
      .its('body')
      .should('equal', '');
  });

  it('should not fail when deleting multiple times', () => {
    const randomNumber = Cypress._.random(0, 100).toString();
    cy.aboutCreateAdmin(`test-about-${randomNumber}`)
      .its('body.id')
      .then((id) => cy.aboutDeleteAdmin(id))
      .then(() => cy.aboutDeleteAdmin(DUMMY_MONGODB_ID))
      .its('status')
      .should('equal', 204);
  });*/
});
