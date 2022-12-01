import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import CounterApp from "../../components/CounterApp"

describe('Pruebas en CouterApp', () => {
    let wrapper = shallow(<CounterApp />)

    //Se ejecuta antes de cada prueba
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('debe de mostrar componente CounterApp correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el valor enviado al contador correctamente', () => {
        const valor = '10'

        const wrapper = shallow(<CounterApp value={10} />)

        const textoContador = wrapper.find('h2').text().trim()

        expect(textoContador).toBe(valor)
    })

    test('debe de disminuir con el boton -1', () => {
        wrapper.find('button').at(0).simulate('click')

        const textoContador = wrapper.find('h2').text().trim()

        expect(textoContador).toBe('-1')
    })

    //El estado del componente se mantiene al hacer las pruebas, por eso se pueden hacer 2 clics, para que cambie el numero
    //Pero mejor inicializar el componente antes de cada test con el beforeEach
    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(2).simulate('click')
        // wrapper.find('button').at(2).simulate('click')

        const textoContador = wrapper.find('h2').text().trim()

        expect(textoContador).toBe('1')
    })

    test('debe de resetear con el boton de resetear', () => {
        const wrapper = shallow(<CounterApp value={512} />)

        //Hacerle cambios al valor para probar
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(0).simulate('click')

        wrapper.find('button').at(1).simulate('click')

        const textoContador = wrapper.find('h2').text().trim()

        expect(textoContador).toBe('0')
    })
})