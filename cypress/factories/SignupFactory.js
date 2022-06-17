var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastNamea9

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '47999999999',
      address: {    
        postalcode: '88330522',
        street: 'Rua 1500',
        number: '1000',
        details: 'ap 75',
        district: 'Centro',
        city_uf: 'Balneário Camboriú/SC',
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg',
    }

    return data
  }
}
