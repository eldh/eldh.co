React = require 'react'
_ = require 'lodash'
logo = require '../logo.svg'

{ div, p, a, ul, li } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Index'

	render: ->
		div {className: 'post post--front'},
			div className: 'logo logo--front', dangerouslySetInnerHTML: __html: logo
			# h1 'Hello'
			p "I'm Andreas Eldh. I make things on the Internet. I design, I develop, I create."
			p 'I build tools that help people reach their goals. The magic wands, the hammers and the nails.'
			ul {className: 'link-list'},
				li a href: '/blog', 'Blog'
				li a href: 'http://www.twitter.com/eldh', 'Twitter'
				li a href: 'http://github.com/eldh', 'Github'
				li a href: 'http://instagram.com/eldh', 'Instagram'
