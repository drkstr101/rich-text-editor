import { render, screen } from '@testing-library/react'
import React from 'react'
import RichTextEditor from '../src/rich-text-editor'

test('C', () => {
  const text = 'text'
  render(<RichTextEditor defaultValue={text} />)
  expect(screen.getByText(text)).toBeVisible()
})
