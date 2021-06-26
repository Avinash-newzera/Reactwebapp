/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('displays Text', () => {
      cy.get('h1').should('have.length', 1)
      cy.get('h1').should('have.text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
      cy.get('p').should('have.length', 2)
      cy.get('h2').should('have.length', 1)
      cy.get('h2').should('have.text', 'Type Text')
    })

    it('displays Images and Icons',()=>{
        cy.get("img").should('have.length', 6)
    })
    it('displays Navbar correctly',()=>{
        cy.get("li").should('have.length', 4)
        cy.get("li").eq(0).should('have.text','Home')
        cy.get("li").eq(1).should('have.text','Blog')
        cy.get("li").eq(2).should('have.text','Careers')
        cy.get("li").eq(3).should('have.text','Contact')
    })
    it('displays Popup correctly',()=>{
        cy.contains("Contact").click()
        cy.contains("Name")
        cy.contains("E-mail")
        cy.contains("Message")
        cy.get("span").should('have.length', 1)
        cy.get("span").click()
        cy.contains('Name').should('not.exist')
    })
  })
  