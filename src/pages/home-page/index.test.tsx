import { shallow } from "enzyme"
import HomePage from "."
import React from "react"

describe('test for home page', () => {
  it('snapshot test', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  })
})