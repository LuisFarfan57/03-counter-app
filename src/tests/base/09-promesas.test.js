import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes"

describe('Pruebas con promesas', () => {
    //El done se debe utilizar cuando se hacen llamadas asincronas
    test('getHeroeByIdAsync debe de retornar un heroe async', (done) => {
        const id = 1

        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toEqual(heroes.find(h => h.id === id))

            //Se puede llamar el done para terminar
            //Buena practica llamar siempre el done
            done()
        })
    })

    test('getHeroeByIdAsync debe de retornar un error si el heroe no existe', (done) => {
        const id = 100

        //Catch porque en la funcion entra al reject
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe')

            done()
        })
    })
})