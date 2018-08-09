/* global __PATH_PREFIX__ */
import React from 'react'
import { Link } from 'gatsby'
import Base from './Base'
import TextContent from './TextContent'
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const blogRootPath = `${__PATH_PREFIX__}/blog`

    const header =
      location.pathname === blogRootPath ? (
        <h1>
          <Link to={'/'}>eldh.co</Link>
        </h1>
      ) : (
        <h3>
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
