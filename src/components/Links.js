import React from 'react'
import { css } from '@emotion/core'

const liStyles = css`
  display: flex;
  &:not(:nth-child(1)) {
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
  margin-left: 0;
`
const links = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/eldh',
  },
  {
    name: 'Github',
    href: 'https://github.com/eldh',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/eldh',
  },
]
class Links extends React.Component {
  render() {
    return (
      <ul css={ulStyles}>
        {links.map(({ name, href }) => (
          <li css={liStyles} key={href}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default Links
