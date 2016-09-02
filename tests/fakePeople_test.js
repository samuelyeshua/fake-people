let assert = require('assert')
let fakePeople = require('../')

describe('fakePeople Random data', () => {

	it('return one people with full property', () => {
		let people = fakePeople.generate(0)

		assert.equal( Object.prototype.toString.call(people), '[object Object]' )
	})

	it('return one people with first and last name', () => {
		let people = fakePeople.generate(0, ['firstName', 'lastName'])

		assert.equal( Object.prototype.toString.call(people), '[object Object]' )

		assert.equal( Object.prototype.toString.call(people.firstName), '[object String]' )
		assert.equal( Object.prototype.toString.call(people.lastName), '[object String]' )
	})

	it('return ten peoples with full property', () => {
		let people = fakePeople.generate(10)

		assert.equal( Object.prototype.toString.call(people), '[object Array]' )
		assert.equal( people.length , 10)
	})

	it('return ten peoples with first and last names', () => {
		let people = fakePeople.generate(10, ['firstName', 'lastName'])

		assert.equal( Object.prototype.toString.call(people), '[object Array]' )
		assert.equal( people.length , 10)

		people.map( person => {
			assert.equal( Object.prototype.toString.call(person.firstName), '[object String]' )
			assert.equal( Object.prototype.toString.call(person.lastName), '[object String]' )
		})
	})
})