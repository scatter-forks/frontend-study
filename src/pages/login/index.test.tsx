import { shallow } from 'enzyme'
import LoginPage from './index'
const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
configure({ adapter: new Adapter() })

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
        const wrapper = shallow(<LoginPage {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
})