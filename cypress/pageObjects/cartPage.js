const cartElements = {
  checkoutButton: '[data-test=checkout]',
}

class CartPage {
    proceedToCheckout() {
      cy.get(cartElements.checkoutButton).click();
    }
  }
  
  export default new CartPage();
  