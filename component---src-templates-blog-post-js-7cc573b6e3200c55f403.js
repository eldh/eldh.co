(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});var a=n(20),r=n.n(a),o=n(0),i=n.n(o),l=n(250),u=n.n(l),c=n(241),s=n(252),p=n.n(s),d=n(244),m=n(245),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=p()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,a=n.previous,r=n.next;return i.a.createElement(m.a,{location:this.props.location},i.a.createElement(u.a,{title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",null,e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",null),i.a.createElement(d.a,null),i.a.createElement("ul",null,a&&i.a.createElement("li",null,i.a.createElement(c.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r&&i.a.createElement("li",null,i.a.createElement(c.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(i.a.Component);t.default=f;var h="525352797"},241:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(10),i=n.n(o),l=n(240),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(242),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var p=n(51);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},242:function(e,t,n){var a;e.exports=(a=n(243))&&a.default||a},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),l=n(55),u=n(2),c=function(e){var t=e.location,n=u.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},244:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(20),r=n.n(a),o=n(0),i=n.n(o),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Written by ",i.a.createElement("a",{href:"https://twitter.com/eldh"},"@eldh")))},t}(i.a.Component)},245:function(e,t,n){"use strict";var a=n(20),r=n.n(a),o=n(0),i=n.n(o),l=n(241),u=n(120);Object(u.injectGlobal)('*{margin:0;padding:0;box-sizing:border-box;}div,p{display:flex;flex-direction:column;flex:1 0 auto;}p{margin-bottom:1rem;}html,body{font-family:"-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Roboto Light","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}');var c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children,a="/"===t.pathname?null:"/blog"===t.pathname?i.a.createElement("h1",null,i.a.createElement(l.Link,{to:"/"},"eldh.co")):i.a.createElement("h3",null,i.a.createElement(l.Link,{to:"/blog"},"eldh.co blog"));return i.a.createElement("div",null,a,n)},t}(i.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7cc573b6e3200c55f403.js.map