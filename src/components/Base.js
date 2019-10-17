import React from 'react'
import { css, Global } from '@emotion/core'

// injectGlobal`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   div, main {
//     display: flex;
//     flex-direction: column;
//     flex: 1 0 auto;
//   }
//   p, ul {
//     margin-bottom: 1rem;
//   }
//   a, a:visited {
//     text-decoration: none;
//     color: #55d;
//   }
//   li {
//     margin-bottom: 0.5rem;

//   }
//   body {
//     background-color: #fff;
//     color: #444;
//     font-family: -apple-system,
//       "BlinkMacSystemFont",
//       "Segoe UI",
//       "Roboto",
//       sans-serif,
//       "Apple Color Emoji",
//       "Segoe UI Symbol";
//   }
//   @media (prefers-color-scheme: dark) {
//     body {
//       background-color: #333;
//       color: #eee;
//     }
//     a, a:visited {
//       color: #aaf;
//     }
//   }
//   `

class Base extends React.Component {
  render() {
    return (
      <>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            div,
            main {
              display: flex;
              flex-direction: column;
              flex: 1 0 auto;
            }
            p,
            ul {
              margin-bottom: 1rem;
            }
            a,
            a:visited {
              text-decoration: none;
              color: #55d;
            }
            li {
              margin-bottom: 0.5rem;
            }
            body {
              background-color: #fff;
              color: #444;
              line-height: 1.475;
              font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
                'Roboto', sans-serif, 'Apple Color Emoji', 'Segoe UI Symbol';
            }
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #222;
                color: #eee;
              }
              a,
              a:visited {
                color: #7eb6f1;
              }
            }
          `}
        />
        {this.props.children}
      </>
    )
  }
}

export default Base
