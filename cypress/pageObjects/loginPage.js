const loginElements = {
  usernameInput: '[data-test=username]',
  passwordInput: '[data-test=password]',
  loginButton: '[data-test=login-button]',
}

class LoginPage {
  visit() {
    cy.visit("/")
  }

  fillUsername(username) {
    cy.get(loginElements.usernameInput).type(username)
  }

  fillPassword(password) {
    cy.get(loginElements.passwordInput).type(password)
  }

  submit() {
    cy.get(loginElements.loginButton).click()
  }
}

export default new LoginPage()
