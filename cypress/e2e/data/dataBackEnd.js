
import { faker } from '@faker-js/faker';
//export page = ''
export const user = {

    nome: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true'

}

export const userDeleted = {

    nome: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true'

}