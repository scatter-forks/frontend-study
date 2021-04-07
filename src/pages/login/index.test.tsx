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
})