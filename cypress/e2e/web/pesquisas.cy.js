describe('Pesquisas', () => {

  beforeEach(() => {
    cy.visit("https://blog.agibank.com.br/")
  });

  it('Realizar pesquisa com sucesso', () => {

    realizarPesquisa("Drex")

    cy.url().should('include', 's=Drex')

    cy.get('.page-title.ast-archive-title span')
      .invoke('text')
      .should('match', /drex/i)

    cy.get('article').should('have.length.greaterThan', 0)
  });

  it('Realizar pesquisa sem resultado', () => {

    realizarPesquisa("cypress")

    cy.url().should('include', 's=cypress')

    cy.get('.page-title.ast-archive-title span')
      .invoke('text')
      .should('match', /cypress/i)

    cy.get('.no-results')
        .should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  });

});

function realizarPesquisa(descricao) {
  cy.get('input[name="s"]')
    .first()
    .type(descricao + '{enter}', { force: true })
}