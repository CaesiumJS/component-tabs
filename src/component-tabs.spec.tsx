import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'

import {Tabs, Tab} from './component-tabs'

describe('Component Tabs', () => {
  afterEach(() => {
    cleanup()
  })

  it('should only place the rendered tab into the DOM', () => {
    let tab = 0

    const TestComponent: React.FC = () => {
      return <Tabs onChange={(newTab) => {
        tab = newTab
      }}>
        <Tab title="Tab 1">
          <p>FOO</p>
        </Tab>
        <Tab title="Tab 2">
          <p>Bar</p>
        </Tab>
      </Tabs>
    }

    const {container, getByText} = render(<TestComponent />)

    expect(container).toMatchSnapshot()
    expect(getByText('FOO')).toBeInTheDocument()

    fireEvent.click(getByText('Tab 2'))

    expect(getByText('Bar')).toBeInTheDocument()
    expect(tab).toBe(1)
  })
})