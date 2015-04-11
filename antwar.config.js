'use strict';

var rssPlugin = require('antwar-rss-plugin');

module.exports = {
  output: 'build',
  name: 'eldh.co',
  baseUrl: 'http://eldh.co/',
  blogRoot: 'blog',
  author: {
    name: 'Andreas Eldh',
    email: 'andreas.eldh@gmail.com'
  },
  deploy: {
    branch: 'gh-pages',
  },
  plugins: [
    rssPlugin
  ],
  theme: {
    name: 'antwar-default-theme',
    navigation: [
      {title: 'Home', path: '/'},
      {title: 'Blog', path: '/blog'}
    ],
    analyticsId: 'UA-41786834-1',
    customStyles: 'specific.scss'
  }
};

