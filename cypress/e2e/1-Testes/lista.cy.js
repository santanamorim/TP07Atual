/// <reference types="cypress" />

describe('Testes de Visualização de Lista de Livros Cadastrados', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })

  it('A página é carregada corretamente', () => {
    cy.contains('Lista de Livros').should('be.visible');
  });

  it('Deve exibir a lista de livros corretamente', () => {
    cy.get('.book-list').should('exist')
    cy.get('.book-list .card').should('have.length.gt', 0)
  })

  it('Verifica a quantidade de livros', () => {

    const numeroFornecido = 12;

    cy.get('.book-list .card').its('length').should('eq', numeroFornecido);
  });

  it('Deve conter o título "1984"', () => {
    cy.contains('h2', '1984').should('be.visible');
  });

  it('Deve conter o título "Cem Anos de Solidão"', () => {
    cy.contains('h2', 'Cem Anos de Solidão').should('be.visible');
  });

  it('Verifica se na lista tem o autor "J.R.R. Tolkien"', () => {
    cy.contains('p', 'J.R.R. Tolkien').should('be.visible');
  });
  
})






