const inventoryElements = {
  inventoryItem: '.inventory_item',
  shoppingCartButton: '.shopping_cart_link',
  shoppingCartBadge: '.shopping_cart_badge',
  cartItem: '.cart_item',
  cartBadgeButton: '#react-burger-menu-btn',
  logoutButton: '[data-test="logout-sidebar-link"]',
}

class InventoryPage {
  addItemToCart(index = 0) {
    cy.get(inventoryElements.inventoryItem).eq(index).find("button").click()
  }

  openCart() {
    cy.get(inventoryElements.shoppingCartButton).click()
  }

  getCartBadge() {
    return cy.get(inventoryElements.shoppingCartBadge)
  }

  getCartItems() {
    return cy.get(inventoryElements.cartItem)
  }

  openMenu() {
    cy.get(inventoryElements.cartBadgeButton).click()
  }

  logout() {
    cy.get(inventoryElements.logoutButton).click()
  }
}

export default new InventoryPage()
