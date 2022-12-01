import { getImagen } from "../../base/11-async-await"

describe('Pruebas de 11-async-await.js', () => {
    test('debe de retornar el url de la imagen',async () => {
        const url = await getImagen()

        expect(url !== 'No existe').toBe(true)
        expect(typeof url).toBe('string')
    })
})