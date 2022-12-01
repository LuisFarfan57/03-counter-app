import PrimeraApp from "../../components/PrimeraApp"
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

describe('Pruebas en PrimeraApp', () => {
    // test('', () => {
    //     const saludo = 'Luis'

    //     const wrapper = render(<PrimeraApp  saludo={saludo} />)

    //     expect(wrapper.getByText(saludo)).toBeInTheDocument()
    // })

    test('debe de mostrar componente PrimeraApp correctamente', () => {
        const saludo = 'Luis'

        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el subtitulo correctamente', () => {
        const saludo = 'Luis'
        const subtitulo = 'Soy un subtitulo desde test'

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />)

        //Parecido al querySelector
        const textoParrafo = wrapper.find('p').text()

        expect(textoParrafo).toBe(subtitulo)
    })
})