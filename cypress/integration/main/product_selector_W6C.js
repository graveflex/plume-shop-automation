//GLOBAL VARIABLES 
import {LOCAL_HOST, 
  HEADER, 
  PRICE_MEM, 
  PRICE, 
  COLOR_LOCAL, 
  NEXT, 
  CART_BTN, 
  MEMBERSHIP,
  BACK_BTN,
  PLUS_BTN} from '../../globals'


describe('SELECT YOUR HARDWARE - SUPERPOD WITH WIFI 6 CHAMPAGNE', () => {
  it('TEST SCENERIO 1.X', () => {
    // cy.clearCookies()
    cy.visit(LOCAL_HOST)
    cy.get(PRICE).eq(1).contains('$159')
    cy.get(COLOR_LOCAL).eq(1).contains('Champagne').click()
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-hardware')
    cy.contains('1 SuperPod').click()
    cy.get(NEXT).click()
    cy.wait(500)
    cy.url().should('include', '/customize-membership')
    cy.get(MEMBERSHIP).contains('1 year').click()
    cy.get(PRICE_MEM).eq(0).contains('$99')
    cy.get(CART_BTN).should('not.be.disabled')
    cy.get(BACK_BTN).click()
    cy.url().should('include', '/customize-hardware')
    cy.contains('2 SuperPods').click()
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-membership')
    cy.get(MEMBERSHIP).contains('2 year').click()
    cy.get(PRICE_MEM).eq(1).contains('$198')
    cy.get(CART_BTN).should('not.be.disabled')
    cy.get(BACK_BTN).click()
    cy.url().should('include', '/customize-hardware')
    cy.get(PLUS_BTN).eq(1).click()
    cy.get('.ganQgv').contains('3')
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-membership')
    cy.get(MEMBERSHIP).contains('3 year').click()
    cy.get(PRICE_MEM).eq(2).contains('$297')
    cy.get(CART_BTN).should('not.be.disabled')
    cy.get(BACK_BTN).click()
    cy.url().should('include', '/customize-hardware')
    cy.get(PLUS_BTN).eq(1).dblclick()
    cy.get('.ganQgv').contains('5')
    cy.get(NEXT).click()
    cy.url().should('include', '/customize-membership')
  })
})