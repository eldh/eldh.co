/* global __PATH_PREFIX__ */
import React from 'react'
import { Link } from 'gatsby'
import Base from './Base'
import TextContent from './TextContent'
import { css } from '@emotion/core'

const styles = css`
  padding-bottom: 2rem;
`

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const blogRootPath = `${__PATH_PREFIX__}/blog`

    const header =
      location.pathname === blogRootPath ? (
        <h1 css={styles}>
          <Link to={'/'}>eldh.co</Link>
        </h1>
      ) : (
        <h3 css={styles}>
          <Link to={'/blog'}>eldh.co blog</Link>
        </h3>
      )
    return (
      <Base>
        <TextContent>
          {header}
          {children}
        </TextContent>
      </Base>
    )
  }
}

export default Layout
