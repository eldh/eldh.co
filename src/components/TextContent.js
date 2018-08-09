import React from 'react'
import { css } from 'emotion'

const styles = css`
  max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
`

class TextContent extends React.Component {
  render() {
    return <div className={styles}>{this.props.children}</div>
  }
}

export default TextContent
