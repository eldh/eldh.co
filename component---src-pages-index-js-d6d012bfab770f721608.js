(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{239:function(e,t,n){"use strict";n.r(t);var c=n(20),r=n.n(c),a=n(0),o=n.n(a),i=n(247),l=n.n(i),s=n(246),u=n.n(s),m=n(255),p=(n(334),function(e){function t(){for(var t,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))||this).state={fill:0},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.interval=setInterval(function(){return e.setState(function(e){var t=e.fill;return{fill:t>=360?0:t+1}})},100)},n.componentWillUnmount=function(){clearInterval(this.interval)},n.render=function(){return o.a.createElement("svg",{className:this.props.className,version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"200px",height:"200px",fill:"hsl("+this.state.fill+", 100%, 70%)",viewBox:"0 0 841.89 841.89"},o.a.createElement("g",null,o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M420.5,1.976C188.709,1.976,0.806,189.879,0.806,421.67 S188.709,841.363,420.5,841.363c231.786,0,419.693-187.902,419.693-419.693S652.286,1.976,420.5,1.976z M643.926,391 c-6.226,11.647-14.36,20.79-24.404,27.419c-10.039,6.63-21.486,11.244-34.346,13.857c-12.855,2.609-25.71,4.316-38.57,5.121 c-21.288,1.211-39.562,2.311-54.834,3.317c-15.261,0.999-27.812,3.014-37.663,6.022c-9.842,3.019-17.074,7.629-21.693,13.863 c-4.614,6.221-6.929,15.16-6.929,26.814c0,9.238,0.805,18.882,2.41,28.926c1.605,10.035,5.526,19.283,11.746,27.721 c6.234,8.434,15.367,15.367,27.422,20.787c12.055,5.425,28.318,8.135,48.807,8.135c32.543,0,57.853-7.937,75.93-23.801 c18.077-15.873,28.126-38.266,30.127-67.188h12.055c-0.801,14.461-3.814,28.02-9.036,40.672 c-5.217,12.658-12.754,23.599-22.6,32.842c-9.842,9.238-21.892,16.472-36.159,21.693c-14.254,5.218-31.033,7.831-50.316,7.831 c-13.65,0-26.606-1.408-38.863-4.214c-12.248-2.816-22.996-7.739-32.239-14.765c-9.239-7.03-16.665-16.178-22.296-27.417 c-4.258-8.521-6.992-18.68-8.258-30.416c-3.226,9.947-8.311,19.494-15.269,28.646c-7.035,9.243-15.876,17.474-26.516,24.707 c-10.649,7.228-22.805,12.956-36.458,17.17c-13.66,4.22-28.528,6.326-44.592,6.326c-31.334,0-56.444-6.929-75.325-20.787 c-18.887-13.857-28.321-34.649-28.321-62.37c0-19.282,3.108-34.741,9.34-46.4c6.225-11.646,14.359-20.787,24.406-27.417 c10.037-6.628,21.486-11.242,34.349-13.858c12.853-2.608,25.703-4.313,38.565-5.123c21.289-1.206,39.566-2.308,54.836-3.315 c15.264-0.999,27.815-3.011,37.664-6.025c9.839-3.014,17.069-7.626,21.694-13.86c4.612-6.223,6.929-15.16,6.929-26.814 c0-9.239-0.81-18.88-2.411-28.926c-1.61-10.037-5.525-19.283-11.751-27.718c-6.232-8.436-15.364-15.367-27.417-20.79 c-12.052-5.424-28.323-8.137-48.809-8.137c-32.543,0-57.851,7.939-75.93,23.804c-18.077,15.875-28.124,38.266-30.13,67.189h-12.052 c0.8-14.463,3.814-28.02,9.038-40.675c5.218-12.654,12.749-23.596,22.598-32.841c9.839-9.236,21.892-16.466,36.157-21.693 c14.256-5.217,31.034-7.835,50.319-7.835c13.65,0,26.606,1.413,38.866,4.219c12.25,2.816,22.993,7.739,32.239,14.765 c9.236,7.033,16.664,16.175,22.296,27.417c4.255,8.521,6.989,18.678,8.253,30.419c3.23-9.945,8.312-19.497,15.271-28.646 c7.035-9.246,15.878-17.477,26.516-24.708c10.651-7.23,22.802-12.957,36.458-17.173c13.66-4.219,28.53-6.328,44.592-6.328 c31.338,0,56.445,6.931,75.327,20.789c18.888,13.86,28.319,34.65,28.319,62.371C653.266,363.885,650.16,379.344,643.926,391z"}),o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M621.325,295.489c-7.228-6.628-16.567-12.052-28.02-16.271 c-11.447-4.217-25.609-6.326-42.48-6.326c-20.083,0-37.963,3.409-53.634,10.244c-15.666,6.828-28.82,15.763-39.467,26.816 c-10.642,11.045-18.68,23.801-24.104,38.264c-3.086,8.228-5.266,16.587-6.591,25.074c-0.01,0.47-0.02,0.972-0.029,1.451 c-2.918,9.767-7.864,16.727-12.026,21.72h-0.663c-4.019,5.632-10.244,9.943-18.68,12.957s-18.077,5.328-28.924,6.929 c-10.847,1.61-22.598,2.618-35.252,3.014c-12.655,0.405-25.009,1.008-37.061,1.808c-12.052,0.81-23.803,2.314-35.252,4.518 c-11.449,2.213-21.597,6.234-30.431,12.055c-8.841,5.829-15.874,13.858-21.091,24.1c-5.225,10.246-7.833,23.607-7.833,40.074 c0,8.843,1.507,17.581,4.518,26.212c3.014,8.646,8.137,16.273,15.367,22.898c7.23,6.631,16.57,12.055,28.02,16.273 c11.449,4.215,25.611,6.327,42.485,6.327c20.083,0,37.962-3.409,53.631-10.242c15.666-6.827,28.82-15.767,39.469-26.819 c10.639-11.047,18.68-23.801,24.104-38.266c3.031-8.086,5.184-16.298,6.522-24.635c0.014-0.926,0.029-1.891,0.043-2.854 c2.608-7.561,7.481-15.16,12.093-20.753h0.646c4.026-5.633,10.246-9.943,18.685-12.957c8.434-3.014,18.077-5.328,28.922-6.929 c10.849-1.61,22.6-2.618,35.257-3.014c12.652-0.405,25.001-1.008,37.056-1.809c12.055-0.81,23.801-2.319,35.253-4.518 c11.447-2.213,21.602-6.235,30.431-12.053c8.838-5.829,15.873-13.86,21.091-24.104c5.227-10.244,7.835-23.605,7.835-40.072 c0-8.841-1.509-17.581-4.522-26.214C633.684,309.745,628.562,302.117,621.325,295.489z"})))},t}(o.a.Component)),h=n(256),f=(n(336),n(120)),d=Object(f.css)("display:flex;&:not(:nth-child(1)){margin-left:1rem;}&:before{display:none;}"),g=Object(f.css)("display:flex;flex-direction:row;list-style-type:none;"),v=[{name:"Twitter",href:"https://twitter.com/eldh"},{name:"Github",href:"https://github.com/eldh"},{name:"Instagram",href:"https://instagram.com/eldh"}],y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("ul",{className:g},v.map(function(e){var t=e.name,n=e.href;return o.a.createElement("li",{className:d,key:n},o.a.createElement("a",{href:n},t))}))},t}(o.a.Component),b=n(265);n.d(t,"pageQuery",function(){return x});var w=Object(b.b)(p,{target:"e7sp5qs0"})(Object(b.a)("margin:2rem auto 3rem;width:8rem;height:8rem;")),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=l()(this.props,"data.site.siteMetadata.title");return o.a.createElement(m.a,null,o.a.createElement(u.a,{title:e,meta:[{name:"description",content:"The website of Andreas Eldh, a freelance designer, developer and problem solver from Stockholm."}],htmlAttributes:{lang:"en"}}),o.a.createElement(h.a,null,o.a.createElement(w,null),o.a.createElement("p",null,"I'm Andreas Eldh, a freelance designer, developer and problem solver from Stockholm."),o.a.createElement("p",null,"I have built things together with organizations ranging from small startups to government agencies and Fortune 500 companies. Nowadays I mostly use React (Native) & ReasonML to build ambitious applications."),o.a.createElement("p",null,o.a.createElement("span",null,"I want to make people's lives better. If you need help with something interesting, ",o.a.createElement("a",{href:"mailto:andreas.eldh@gmail.com"},"get in touch!"))),o.a.createElement(y,null)))},t}(o.a.Component),x=(t.default=E,"1097489062")},255:function(e,t,n){"use strict";var c=n(20),r=n.n(c),a=n(0),o=n.n(a),i=n(120);Object(i.injectGlobal)('*{margin:0;padding:0;box-sizing:border-box;}div,main{display:flex;flex-direction:column;flex:1 0 auto;}p,ul{margin-bottom:1rem;}a,a:visited{text-decoration:none;color:#55d;}li{margin-bottom:0.5rem;}body{font-family:-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto",sans-serif,"Apple Color Emoji","Segoe UI Symbol";}');var l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,this.props.children)},t}(o.a.Component);t.a=l},256:function(e,t,n){"use strict";var c=n(20),r=n.n(c),a=n(0),o=n.n(a),i=n(120),l=Object(i.css)("max-width:600px;padding:1rem;margin:0 auto;"),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("main",{className:l},this.props.children)},t}(o.a.Component);t.a=s},334:function(e,t,n){var c=n(11);c(c.P,"Array",{fill:n(335)}),n(55)("fill")},335:function(e,t,n){"use strict";var c=n(41),r=n(124),a=n(53);e.exports=function(e){for(var t=c(this),n=a(t.length),o=arguments.length,i=r(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>i;)t[i++]=e;return t}},336:function(e,t,n){var c=n(16).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(17)&&c(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-d6d012bfab770f721608.js.map