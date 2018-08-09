import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/ShortBio'
import Layout from '../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.blogTitle')
    const posts = get(this, 'props.data.allMarkdownRemark.edges').filter(
      ({
        node: {
          frontmatter: { language },
        },
      }) => language !== 'swedish'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={siteTitle}
          meta={[
            {
              name: 'description',
              content: 'eldh.co blog',
            },
          ]}
          htmlAttributes={{
            lang: 'en',
          }}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogTitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            language
          }
        }
      }
    }
  }
`
