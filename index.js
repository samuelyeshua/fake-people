let faker = require('faker')
let { randomRg, randomCpf } = require('./lib/documents')

let fakePeople = function(){

	let people = () => {
		return {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			contacts: {
				phone: faker.phone.phoneNumber(),
				email: faker.internet.email()
			},
			documents: {
				cpf: randomCpf(),
				rg: randomRg()
			},
			residency: faker.address.county(),
			birthday: faker.date.past(),
			bankAccount: {
				account: faker.finance.account(),
				type: faker.finance.accountName(),
				balance: faker.finance.amount(),
				currency: faker.finance.currencyName()
			},
			job: {
				company: faker.company.companyName(),
				area: faker.name.jobArea(),
				office: faker.name.jobType()
			},
			adress: {
				street: faker.address.streetName(),
				streetAddress: faker.address.streetAddress(),
				zip: faker.address.zipCode(),
				city: faker.address.city(),
				state: faker.address.state() + ' - ' + faker.address.stateAbbr()
			}
		}
	}

	let filter = ( person, fields ) => {
		let result = {};

		for(_field in fields) {
			result[ fields[_field] ] = person[ fields[_field] ]
		}

		return result
	}

	let generate = ( qnt, fields ) => {

		qnt = qnt || 1

		if ( qnt <= 1 && !fields )
			return people()

		if( qnt <= 1 && fields )
			return filter( people(), fields )

		let peoples = []
		for (let i = 1; i <= qnt; i++) {
			if( !fields )
				peoples.push( people() )

			if( fields )
				peoples.push( filter( people(), fields ) )
		}

		return peoples
	}

	return {
		generate,
	}
}

module.exports = fakePeople()