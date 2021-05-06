import { shallow } from 'enzyme'

import LoginPage from './index'

describe('test LoginPage', () => {
    let props: any
    beforeEach(() => {
        props = {
            history: {
                push: jest.fn()
            }
        }
    })

    it('snapshot', () => {
        const wrapper = shallow(<LoginPage {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should success to login page and register page', () => {
        const wrapper = shallow(<LoginPage {...props} />)


        expect(wrapper.state()).toEqual(
            expect.objectContaining({
                isRegister: false
            })
        )
        expect(wrapper.find('h2').text()).toEqual('LOGIN')
        expect(wrapper.find('.switch-page-state').text()).toEqual('Not ready? Click here to register')

        wrapper.find('.switch-page-state').simulate('click')

        expect(wrapper.state()).toEqual(
            expect.objectContaining({
                isRegister: true
            })
        )
        expect(wrapper.find('h2').text()).toEqual('REGISTER')
        expect(wrapper.find('.switch-page-state').text()).toEqual('Ready? Click here to login')
    })
})