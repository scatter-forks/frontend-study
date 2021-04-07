import { shallow } from "enzyme"
import HomePage from "."

describe('test for home page', () => {
  it('snapshot test', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  })
})