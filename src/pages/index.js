import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Base from '../components/Base'
import TextContent from '../components/TextContent'
import Links from '../components/Links'

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
          <p>
            {
              "I'm Andreas Eldh, a freelance designer, developer and problem solver from Stockholm."
            }
          </p>
          <p>
            {
              'I have built things together with organizations ranging from small startups to government agencies and Fortune 500 companies. Nowadays I mostly use React (Native) & ReasonML to build ambitious applications.'
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
