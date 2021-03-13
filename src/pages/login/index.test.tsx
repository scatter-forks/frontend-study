import { shallow } from 'enzyme'

import LoginPage from './index'


describe('test LoginPage', () => {
    it('snapshot', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper).toMatchSnapshot()
    })
})