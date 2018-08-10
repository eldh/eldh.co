import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

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
