import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Base from '../components/Base'
import AELogo from '../components/AELogo'
import TextContent from '../components/TextContent'
import Links from '../components/Links'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Logo = styled(AELogo)(css`
  margin: 2rem auto 3rem;
  width: 8rem;
  height: 8rem;
  transition: fill 50ms linear;
`)

class Index extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Base>
        <Helmet
          title={siteTitle}
          meta={[
            {
              name: 'description',
              content:
                'The website of Andreas Eldh, a freelance designer, developer and problem solver from Stockholm.',
            },
          ]}
          htmlAttributes={{
            lang: 'en',
          }}
        />
        <TextContent>
          <Logo />
          <p>
            {
              "I'm Andreas Eldh, a freelance designer, developer and problem solver from Stockholm."
            }
          </p>
          <p>
            {
              'I have built things together with organizations ranging from small startups to government agencies and Fortune 500 companies. Lately I have focused on using React (Native) & ReasonML to build ambitious applications.'
            }
          </p>
          <p>
            <span>
              {
                "I want to make people's lives better. If you need help with something interesting, "
              }
              <a href="mailto:andreas.eldh@gmail.com">{'get in touch!'}</a>
            </span>
          </p>
          <Links />
        </TextContent>
      </Base>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
