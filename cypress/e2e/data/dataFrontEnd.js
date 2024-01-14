
import { faker } from '@faker-js/faker';
export const site = 'https://demo.nopcommerce.com/'
export const phpSite = 'https://phptravels.net/'

export const emailPhpTravels = '9e209d65a3f284@cashbenties.com'
export const passPhpTravels = '123456'

export const randomFirtName = faker.person.firstName()
export const randomLastName = faker.person.lastName()
export const randomDateOfBirthDay = faker.number.int({ min: 1, max: 31 })
export const randomDateOfBirthMonth = faker.date.month()
export const randomDateOfBirthYear = faker.number.int({ min: 1, max: 110 })
export const radomEmail =  faker.internet.email()
export const loginEmail = radomEmail
export const randomPass = faker.internet.password()
export const randonConfirmPassword = randomPass
export const randoncompanyName = 'Quality Map - Anderson Galvão'

export const adult1FirstName = faker.person.firstName();
export const adult1LastName = faker.person.lastName();
export const adult2FirstName = faker.person.firstName();
export const adult2LastName = faker.person.lastName();
export const adult3FirstName = faker.person.firstName();
export const adult3LastName = faker.person.lastName();

//export const pass = '123456'
