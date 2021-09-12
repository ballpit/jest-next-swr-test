/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import {SWRComponent} from './swr-component.jsx'

describe('Home', () => {
  it('renders a heading', () => {
    render(<SWRComponent />)
  })
})
