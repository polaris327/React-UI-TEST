import React from 'react'
import Button from './Button.jsx'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../theme'

it('renders standard buttons', () => {
  const tree = renderer.create(
    <div>
      <Button label='Default' theme={theme} />
      <Button label='Fancy' fancy theme={theme} />
      <Button label='Primary' primary theme={theme} />
      <Button label='Secondary' secondary theme={theme} />
      <Button label='Danger' danger theme={theme} />
      <Button label='Text' text theme={theme} />
    </div>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders pill buttons', () => {
  const tree = renderer.create(
    <div>
      <Button label='Pill' pill theme={theme} />
      <Button label='Pill' fancy pill theme={theme} />
      <Button label='Pill' primary pill theme={theme} />
      <Button label='Pill' secondary pill theme={theme} />
      <Button label='Pill' danger pill theme={theme} />
    </div>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders outlined buttons', () => {
  const tree = renderer.create(
    <div>
      <Button label='Outlined' outlined theme={theme} />
      <Button label='Outlined' fancy outlined theme={theme} />
      <Button label='Outlined' primary outlined theme={theme} />
      <Button label='Outlined' secondary outlined theme={theme} />
      <Button label='Outlined' danger outlined theme={theme} />
    </div>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders pill outlined buttons', () => {
  const tree = renderer.create(
    <div>
      <Button label='Pill & Outlined' pill outlined theme={theme} />
      <Button label='Pill & Outlined' fancy pill outlined theme={theme} />
      <Button label='Pill & Outlined' primary pill outlined theme={theme} />
      <Button label='Pill & Outlined' secondary pill outlined theme={theme} />
      <Button label='Pill & Outlined' danger pill outlined theme={theme} />
    </div>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders loading buttons', () => {
  const tree = renderer.create(
    <div>
      <Button label='Loading' loading theme={theme} />
      <Button label='Loading' fancy loading theme={theme} />
      <Button label='Loading' primary loading theme={theme} />
      <Button label='Loading' secondary loading theme={theme} />
      <Button label='Loading' danger loading theme={theme} />
      <Button label='Loading' loading sm theme={theme} />
      <Button label='Loading' loading lg theme={theme} />
    </div>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
