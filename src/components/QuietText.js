import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const QuietP = styled('p')(css`
  color: #555;
  font-size: 13px;
`)

class QuietText extends React.Component {
  render() {
    return (
      <QuietP className={this.props.className}>{this.props.children}</QuietP>
    )
  }
}

export default QuietText
