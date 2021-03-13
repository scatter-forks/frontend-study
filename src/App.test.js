import App from './App';
import { shallow } from 'enzyme'

describe('App test', () => {
  it('snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})