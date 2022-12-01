import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        //Si se pusiera toBe en lugar de toEqual no funciona, porque el toBe es como hacer ===
        //toEqual compara si tienen las mismas propiedades
        expect(userTest).toEqual(user)
    })

    test('getUsuarioActivo debe de retornar un objeto con el nombre indicado', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }

        const user = getUsuarioActivo('El_Papi1502')

        expect(userTest).toEqual(user)
    })
})