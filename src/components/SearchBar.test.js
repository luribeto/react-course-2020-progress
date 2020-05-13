import React from 'react'
import Enzyme, { mount } from 'enzyme'
import SearchBar from './SearchBar'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

describe('SearchBar', () => {
  const stockOnlyValueChanged = jest.fn()
  const filterValueChanged = jest.fn()
  let isStockOnly = false
  let filterText = ''
  let wrapper

  beforeEach(() => {
    wrapper = mount(<SearchBar {...{ stockOnlyValueChanged, filterValueChanged, isStockOnly, filterText }} />)
  })

  it('Render correctly', () => {
    expect(wrapper).not.toBeNull()
    expect(wrapper.find(Checkbox)).toHaveLength(1)
    expect(wrapper.find(TextField)).toHaveLength(1)
  })

  it('Execute stockOnlyValueChanged', () => {
    const checkbox = wrapper.find(Checkbox)
    checkbox.find('input').simulate('change');
    expect(stockOnlyValueChanged).toHaveBeenCalled();
  })

  it('Execute stockOnlyValueChanged', () => {
    const textField = wrapper.find(TextField)
    textField.find('input').simulate('change', { target: { value: 'bas' } });
    expect(filterValueChanged).toHaveBeenCalled();
  })
})

