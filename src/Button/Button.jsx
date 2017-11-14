import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

class Button extends React.Component {
  state = {
    hover: false
  }
  hover = () => {
    if (this.props.hoverLabel === '') {
      return
    }
    this.setState({
      hover: !this.state.hover
    })
  }
  render () {
    const { label, hoverLabel } = this.props
    const { hover } = this.state

    let displayLabel = label
    if (hover && hoverLabel !== '') {
      displayLabel = hoverLabel
    }

    return (
      <ButtonItem {...this.props} onMouseOver={() => this.hover()} onMouseOut={() => this.hover()}>
        {displayLabel}
      </ButtonItem>
    )
  }
}

const ButtonItem = styled.button`
    display: inline-block;
    position: relative;
    margin: 0;
    padding: .375em 1.2em;
    height: auto;
    overflow: hidden;
    cursor: pointer;
    border-style: solid;
    border-width: 0;
    border-radius: 2px;
    user-select: none;
    appearance: none;
    font-family: 'proxima-nova', 'Helvetica Neue', helvetica, sans-serif;
    font-weight: 600;
    font-size: .85em;
    line-height: 1.5;
    letter-spacing: .075em;
    text-align: center;
    white-space: nowrap;
    transition: all .15s linear, transform .1s ease;
    background: ${props => props.theme.gray};
    color: ${props => rgba(props.theme.white, 0.7)};

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(.96);
  }

  ${props => props.tooltip && css`
    overflow: visible;
    vertical-align: top;
  `}

  ${props => props.fancy && css`
    background: ${props => props.theme.green};
    background-image: linear-gradient(-85deg, ${props => props.theme.green} 0%, ${props => props.theme.blue} 100%);
    color: ${props => props.theme.white};
  `}

  ${props => props.primary && css`
    background: ${props => props.theme.green};
    color: ${props => props.theme.white};
  `}

  ${props => props.secondary && css`
    background: ${props => props.theme.darkGray};
    color: ${props => props.theme.white};
  `}

  ${props => props.danger && css`
    background: ${props => props.theme.errorColor};
    color: ${props => props.theme.white};
  `}

  ${props => props.text && css`
    background: transparent;
    color: ${props => props.theme.gray};

    &:hover {
      color: ${props => props.theme.darkGray};
    }
  `}

  ${props => props.outlined && css`
    padding-top: calc(.375em - 2px);
    padding-bottom: calc(.375em - 2px);
    background: transparent;
    border: 2px solid ${props => props.theme.gray};
    color: ${props => props.theme.gray};

    &:hover {
      background: ${props => props.theme.gray};
      color: ${props => props.theme.white};
    }
  `}

  ${props => props.pill && css`
    border-radius: 10em;
  `}

  ${props => props.sm && css`
    padding: .45em .85em;
    font-size: .7em;
    line-height: 1.2;
  `}

  ${props => props.lg && css`
    padding: .65em 2em;
    font-size: 1em;
  `}

  ${props => props.loading && css`
    color: transparent !important;
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 1rem;
      width: 1rem;
      left: 50%;
      top: 50%;
      margin-left: -.5rem;
      margin-top: -.5rem;
      border: 2px solid ${props => props.theme.white};
      border-right-color: transparent;
      border-radius: 2rem;
      animation: spin 600ms infinite linear;
    }
  `}
`

Button.defaultProps = {
  loading: false,
  hoverLabel: '',
  loadingLabel: ''
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  hoverLabel: PropTypes.string,
  loadingLabel: PropTypes.string,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  bordered: PropTypes.bool,
  pill: PropTypes.bool,
  lg: PropTypes.bool
}

export default Button
