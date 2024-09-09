const checkoutElements = {
  firstNameInput: '[data-test=firstName]',
  lastNameInput: '[data-test=lastName]',
  postalCodeInput: '[data-test=postalCode]',
  continueButton: '[data-test=continue]',
  finishButton: '[data-test=finish]',
  header: '.complete-header',
}

class CheckoutPage {
    fillFirstName(name) {
      cy.get(checkoutElements.firstNameInput).type(name);
    }
  
    fillLastName(name) {
      cy.get(checkoutElements.lastNameInput).type(name);
    } 
    fillPostalCode(code) {
      cy.get(checkoutElements.postalCodeInput).type(code);
    }
  
    continue() {
      cy.get(checkoutElements.continueButton).click();
    }
  
    finish() {
      cy.get(checkoutElements.finishButton).click();
    }
  
    getCompleteHeader() {
      return cy.get(checkoutElements.header);
    }
  }
  
  export default new CheckoutPage();
  