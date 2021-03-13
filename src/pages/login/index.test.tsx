import LoginPage from './index'
import { shallow } from 'enzyme'


describe('test LoginPage', () => {
    it('snapshot', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper).toMatchSnapshot()
    })
})