(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(242),s=n(252),u=n.n(s),l=n(251),p=n.n(l),d=n(257),m=n(249),f=n(120),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.blogTitle"),t=u()(this,"props.data.allMarkdownRemark.edges").filter(function(e){return"swedish"!==e.node.frontmatter.language});return i.a.createElement(d.a,{location:this.props.location},i.a.createElement(p.a,{title:e,meta:[{name:"description",content:"eldh.co blog"}],htmlAttributes:{lang:"en"}}),t.map(function(e){var t=e.node,n=u()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug,className:Object(f.css)("margin:0 0 1rem;")},i.a.createElement(m.a,{className:Object(f.css)("margin:0;")},t.frontmatter.date),i.a.createElement("h3",null,i.a.createElement(c.Link,{to:t.fields.slug},n)))}))},t}(i.a.Component);t.default=h;var g="3368583218"},242:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=n(241),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(243),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var p=n(53);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},243:function(e,t,n){var a;e.exports=(a=n(259))&&a.default||a},244:function(e,t,n){"use strict";var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(120);Object(c.injectGlobal)('*{margin:0;padding:0;box-sizing:border-box;}div,main{display:flex;flex-direction:column;flex:1 0 auto;}p,ul{margin-bottom:1rem;}a,a:visited{text-decoration:none;color:#55d;}li{margin-bottom:0.5rem;}body{font-family:-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto",sans-serif,"Apple Color Emoji","Segoe UI Symbol";}');var s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,this.props.children)},t}(i.a.Component);t.a=s},245:function(e,t,n){"use strict";var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(120),s=Object(c.css)("max-width:600px;padding:1rem;margin:0 auto;"),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("main",{className:s},this.props.children)},t}(i.a.Component);t.a=u},249:function(e,t,n){"use strict";var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(120),s=n(266),u=Object(s.a)("p",{target:"exmnivm0"})(Object(c.css)("color:#555;font-size:13px;")),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u,{className:this.props.className},this.props.children)},t}(i.a.Component);t.a=l},257:function(e,t,n){"use strict";var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(242),s=n(244),u=n(245),l=n(120),p=Object(l.css)("padding-bottom:2rem;"),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children,a="/blog"===t.pathname?i.a.createElement("h1",{className:p},i.a.createElement(c.Link,{to:"/"},"eldh.co")):i.a.createElement("h3",{className:p},i.a.createElement(c.Link,{to:"/blog"},"eldh.co blog"));return i.a.createElement(s.a,null,i.a.createElement(u.a,null,a,n))},t}(i.a.Component);t.a=d},259:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=n(72),s=n(2),u=function(e){var t=e.location,n=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-blog-js-18248bcfa73b126b088b.js.map