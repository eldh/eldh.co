import React from 'react'
import QuietText from './QuietText'
import { css } from 'emotion'

export default class ShortBio extends React.Component {
  render() {
    return (
      <QuietText
        className={css`
          padding: 1rem 0;
        `}
      >
        Written by <a href="https://twitter.com/eldh">@eldh</a>
      </QuietText>
    )
  }
}
