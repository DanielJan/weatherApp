import React from 'react'
import { shallow } from 'enzyme'

import Main from './Main'

describe('Main component', () => {
  it('should run main component', () => {
    const wrapper = shallow(<Main/>)
    expect(wrapper).toExist()
  })
})