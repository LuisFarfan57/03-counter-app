import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes"

describe('Pruebas en 08-imp-exp.js', () => {
    test('Debe de retornar un heroe por id', () => {
        const id = 1
        
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
        getHeroesByOwner
    })

    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 100
        
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
    })

    test('Debe de retornar el arreglo con los heroes de DC', () => {
        const owner = 'DC'
        
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toEqual(heroes.filter(h => h.owner === owner))
    })

    test('Debe de retornar lenght 2 al buscar heroes de Marvel', () => {
        const owner = 'Marvel'
        
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)
    })
})