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
              & + hr {
                margin-top: 1rem;
              }
            }
            ul {
              margin-left: 2em;
              @media screen and (max-width: 540px) {
                margin-left: 1em;
              }
            }

            hr {
              margin-bottom: 2rem;
              margin-top: 2rem;
              border-style: solid;
              border-color: #eee;
              border-width: 0;
              border-top-width: 1px;
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
              font-size: 16px;
              line-height: 1.475;
              font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
                'Roboto', sans-serif, 'Apple Color Emoji', 'Segoe UI Symbol';
            }
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #111;
                color: #eee;
                overscroll-behavior: none;
                :before {
                  content: '';
                  width: 100vw;
                  position: fixed;
                  top: 0;
                  left: 0;
                  height: 0;
                  z-index: 1;
                  overscroll-behavior: none;
                  box-shadow: 0 0 50px 5px rgb(0, 0, 0, 0.2),
                    0 0 20px 2px rgb(0, 0, 0, 0.3),
                    0 0 10px 2px rgb(0, 0, 0, 0.1);
                }
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
