describe('Dog API - Testes', () => {

  it('Deve listar todas as raças', () => {
    cy.request('/breeds/list/all').then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.an('object')

      expect(response.body.message).to.have.property('bulldog')
    })
  })

  it('Deve retornar imagens da raça dachshund', () => {
    cy.request('/breed/dachshund/images').then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.an('array')

      expect(response.body.message.length).to.be.greaterThan(0)

    })
  })

  it('Deve retornar uma imagem aleatória', () => {
    cy.request('/breeds/image/random').then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')

      expect(response.body.message).to.be.a('string')
    })
  })

  it('Deve retornar erro para raça inválida', () => {
    cy.request({
      url: '/breed/caramelo/images',
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404)
      expect(response.body.status).to.eq('error')
      expect(response.body.message).to.eq('Breed not found (main breed does not exist)')
    })
  })

})