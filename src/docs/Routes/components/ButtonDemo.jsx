import React from 'react'
import Button from '../../../Button'

const ButtonDemo = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <h2>Colors</h2>
        <Button label='Default' />
        <Button label='Fancy' fancy />
        <Button label='Primary' primary />
        <Button label='Secondary' secondary />
        <Button label='Danger' danger />
        <Button label='Text' text />
        <pre>
          <code className='language-jsx'>
            {`
            <Button label='Default' />
            <Button label='Fancy' fancy />
            <Button label='Primary' primary />
            <Button label='Secondary' secondary />
            <Button label='Danger' danger />
            <Button label='Text' text />
            `}
          </code>
        </pre>
      </div>
      <hr />
      <div>
        <h2>Sizes</h2>
        <Button label='Small' sm />
        <Button label='Regular' />
        <Button label='Large' lg />
        <pre>
          <code className='language-jsx'>
            {`
            <Button label='Small' sm />
            <Button label='Regular' />
            <Button label='Large' lg />
            `}
          </code>
        </pre>
      </div>
      <hr />
      <div>
        <h2>Styles</h2>
        <h3>Outlined</h3>
        <Button label='Outlined' outlined />
        <Button label='Outlined' fancy outlined />
        <Button label='Outlined' primary outlined />
        <Button label='Outlined' secondary outlined />
        <Button label='Outlined' danger outlined />
        <pre>
          <code className='language-jsx'>
            {`
              <Button label='Outlined' outlined />
              <Button label='Outlined' fancy outlined />
              <Button label='Outlined' primary outlined />
              <Button label='Outlined' secondary outlined />
              <Button label='Outlined' danger outlined />
            `}
          </code>
        </pre>

        <h3>Pill</h3>
        <Button label='Pill' pill />
        <Button label='Pill' fancy pill />
        <Button label='Pill' primary pill />
        <Button label='Pill' secondary pill />
        <Button label='Pill' danger pill />
        <pre>
          <code className='language-jsx'>
            {`
              <Button label='Pill' pill />
              <Button label='Pill' fancy pill />
              <Button label='Pill' primary pill />
              <Button label='Pill' secondary pill />
              <Button label='Pill' danger pill />
            `}
          </code>
        </pre>
        <h3>Pill & Outlined</h3>
        <Button label='Pill & Outlined' pill outlined />
        <Button label='Pill & Outlined' fancy pill outlined />
        <Button label='Pill & Outlined' primary pill outlined />
        <Button label='Pill & Outlined' secondary pill outlined />
        <Button label='Pill & Outlined' danger pill outlined />
        <pre>
          <code className='language-jsx'>
            {`
              <Button label='Pill & Outlined' pill outlined />
              <Button label='Pill & Outlined' fancy pill outlined />
              <Button label='Pill & Outlined' primary pill outlined />
              <Button label='Pill & Outlined' secondary pill outlined />
              <Button label='Pill & Outlined' danger pill outlined />
            `}
          </code>
        </pre>
      </div>
      <hr />
      <div>
        <h2>States</h2>
        <h3>Loading</h3>
        <Button label='Loading' loading />
        <Button label='Loading' fancy loading />
        <Button label='Loading' primary loading />
        <Button label='Loading' secondary loading />
        <Button label='Loading' danger loading />
        <Button label='Loading' loading sm />
        <Button label='Loading' loading lg />
        <pre>
          <code className='language-jsx'>
            {`
              <Button label='Loading' loading />
              <Button label='Loading' fancy loading />
              <Button label='Loading' primary loading />
              <Button label='Loading' secondary loading />
              <Button label='Loading' danger loading />
              <Button label='Loading' loading sm />
              <Button label='Loading' loading lg />
            `}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ButtonDemo
