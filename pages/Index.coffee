React = require 'react'
_ = require 'lodash'
logo = require '../logo.svg'

{ div, h1, p, a } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Index'

	render: ->
		div {className: 'post post--front'},
			p className: 'logo logo--front', dangerouslySetInnerHTML: __html: logo
			h1 'Hello'
			p "I'm Andreas Eldh. I make things on the Internet. I design, I develop, I create."
			p 'I build tools that help people reach their goals. The magic wands, the hammers and the nails.'



