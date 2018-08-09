import React from 'react'
import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  p, ul {
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
    
  }
  html, body {
    font-family: "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Symbol";
  }`

class Base extends React.Component {
  render() {
    return <>{this.props.children}</>
  }
}

export default Base
