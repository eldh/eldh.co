import React from 'react'
import QuietText from './QuietText'
import { css } from '@emotion/core'

export default class ShortBio extends React.Component {
  render() {
    return (
      <QuietText
        css={css`
          padding: 1rem 0;
        `}
      >
        Written by <a href="https://twitter.com/eldh">@eldh</a>
      </QuietText>
    )
  }
}
