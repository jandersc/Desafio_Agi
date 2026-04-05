describe('Dog API - Testes', () => {

  // 🔹 GET /breeds/list/all
  it('Deve listar todas as raças', () => {
    cy.request('/breeds/list/all').then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.an('object')

      // valida se tem alguma raça conhecida
      expect(response.body.message).to.have.property('bulldog')
    })
  })


  // 🔹 GET /breed/{breed}/images
  it('Deve retornar imagens da raça hound', () => {
    cy.request('/breed/hound/images').then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.an('array')

      // valida se retornou imagens
      expect(response.body.message.length).to.be.greaterThan(0)

      // valida formato da URL
      expect(response.body.message[0]).to.include('https://')
    })
  })


  // 🔹 GET /breeds/image/random
  it('Deve retornar uma imagem aleatória', () => {
    cy.request('/breeds/image/random').then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')

      expect(response.body.message).to.be.a('string')
      expect(response.body.message).to.include('https://')
    })
  })


  // 🔥 Cenário negativo (diferencial)
  it('Deve retornar erro para raça inválida', () => {
    cy.request({
      url: '/breed/invalidbreed/images',
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404)
      expect(response.body.status).to.eq('error')
    })
  })

})