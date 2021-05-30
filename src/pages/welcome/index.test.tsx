import {shallow} from 'enzyme'
import Welcome from './index'
import { shallowToJson  } from 'enzyme-to-json';

describe('test welcome', () => {
  it('snapshot test', () => {
    const wrapper = shallow(<Welcome />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})