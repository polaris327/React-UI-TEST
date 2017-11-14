import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import 'sanitize.css/sanitize.css'
import theme from '../theme'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </ThemeProvider>
    )
  }
}

// Example global injection
// Should really be reserved only for non-components (i.e, body/html)
injectGlobal`
  html {
    text-rendering: optimizeLegibility;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "proxima-nova", "Helvetica Neue", Helvetica, arial, sans-serif;
    font-weight: 600;
  }

  hr {
    margin: 2rem 0;
    border: none;
    background: #dcdcde;
    width: 100%;
    height: 2px;
  }
  code[class*=language-], pre[class*=language-] {
    font-size: 12px;
  }
  h1 {
    color: #2e2e2e;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

// Example
const Wrapper = styled.section`
  margin: 50px;
`
export default App
