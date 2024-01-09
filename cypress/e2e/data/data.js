
import { faker } from '@faker-js/faker';



export const randomFirtName = faker.person.firstName()
export const randomLastName = faker.person.lastName()
export const randomDateOfBirthDay = faker.number.int({ min: 1, max: 31 })
export const randomDateOfBirthMonth = faker.date.month()
export const randomDateOfBirthYear = faker.number.int({ min: 1, max: 110 })
export const radomEmail =  faker.internet.email()
export const loginEmail = radomEmail
export const randomPass = faker.internet.password()
export const randonConfirmPassword = randomPass
export const randonCompanyName = 'Quality Map - Anderson Galvão'
//export const pass = '123456'
