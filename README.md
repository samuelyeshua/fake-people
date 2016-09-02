# Fake People
_Generating fake data personal from tests_

### Install
    npm install fake-people --save
### Uninstall
    npm uninstall fake-people --save

### Usage
The function *generate* is responsible for returning the data according to the necessary requirements. For it takes two parameters, the first being the number of people who should be created and the second, the fields that were to be returned.

This return one person with full property:

[All property](#property)

    let fakePeople = require('fake-people')

    /*
        -> firstName
        -> lastName
        -> ...
     */
    fakePeople.generate(0)
</br>
This return ten person with full property:

[All property](#property)

    /*
        -> firstName
        -> lastName
        -> ...
     */
    fakePeople.generate(10)
</br>
This return one person with firstName and address:

[All property](#property)

    fakePeople.generate(10)

#### <a name="property">All property</a>
For now, only top-level properties are available to be passed as argument

- firstName
- lastName
- contacts
    - phone
    - email
- documents
    - rg
    - cpf
- residency
- birthday
- bankAccount
    - account
    - type
    - balance
    - currency
- job
    - company
    - area
    - office
- adress
    - street
    - streetAddress
    - zip
    - city
    - state
