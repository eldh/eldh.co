import React from 'react'
import { css } from '@emotion/core'

const styles = css`
  max-width: 540px;
  padding: 1rem;
  margin: 0 auto;
`

class TextContent extends React.Component {
  render() {
    return <main css={styles}>{this.props.children}</main>
  }
}

export default TextContent
