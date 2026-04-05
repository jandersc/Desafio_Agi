describe('Pesquisas', () => {

  beforeEach(() => {
    cy.visit("https://blog.agibank.com.br/")
  });

  it('Realizar pesquisa com sucesso', () => {

    realizarPesquisa("Drex")

    // valida URL
    cy.url().should('include', 's=Drex')

    // valida título da busca
    cy.get('.page-title.ast-archive-title span')
      .invoke('text')
      .should('match', /drex/i)

    // valida que tem resultados
    cy.get('article').should('have.length.greaterThan', 0)
  });

  it('Realizar pesquisa sem resultado', () => {

    realizarPesquisa("cypress")

    // valida URL
    cy.url().should('include', 's=cypress')

    // valida título da busca
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