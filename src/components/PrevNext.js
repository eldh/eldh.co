import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const liStyles = css`
  display: flex;
  &:nth-child(2) {
    margin-left: 1rem;
  }
  &:before {
    display: none;
  }
`
const ulStyles = css`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

class PrevNext extends React.Component {
  render() {
    const { previous, next } = this.props

    return (
      <ul css={ulStyles}>
        {previous && (
          <li css={liStyles}>
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}

        {next && (
          <li css={liStyles}>
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    )
  }
}

export default PrevNext
