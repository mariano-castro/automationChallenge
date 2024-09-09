import LoginPage from '../pageObjects/loginPage';
import InventoryPage from '../pageObjects/inventoryPage';
import CartPage from '../pageObjects/cartPage';
import CheckoutPage from '../pageObjects/checkoutPage';

describe('Standard User Tests', () => {
  const username = 'standard_user';
  const password = 'secret_sauce';

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.submit();
  });

  it('Log In', () => {
    cy.url().should('include', '/inventory.html');
  });

  it('Add an item to Cart', () => {
    InventoryPage.addItemToCart();
    InventoryPage.getCartBadge().should('have.text', '1');
  });

  it('Remove an item from Cart', () => {
    InventoryPage.addItemToCart(); 
    InventoryPage.openCart();
    InventoryPage.getCartItems().first().find('button').click(); 
    InventoryPage.getCartBadge().should('not.exist');
  });

  it('Checkout an item in the Cart', () => {
    InventoryPage.addItemToCart(); 
    InventoryPage.openCart();
    CartPage.proceedToCheckout();
    CheckoutPage.fillFirstName('John');
    CheckoutPage.fillLastName('Doe');
    CheckoutPage.fillPostalCode('12345');
    CheckoutPage.continue();
    CheckoutPage.finish();
    CheckoutPage.getCompleteHeader().should('contain', 'Thank you for your order');
  });

  it('Log Out', () => {
    InventoryPage.openMenu();
    InventoryPage.logout();
    cy.url().should('include', '/');
  });
});
