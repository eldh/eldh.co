import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ShortBio from '../components/ShortBio'
import Layout from '../components/Layout'
import PrevNext from '../components/PrevNext'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          meta={[
            { name: 'description', content: 'Blog post on the eldh.co blog' },
          ]}
          htmlAttributes={{
            lang: post.frontmatter.language === 'swedish' ? 'se' : 'en',
          }}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ShortBio />

        <PrevNext {...this.props.pageContext} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        language
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
