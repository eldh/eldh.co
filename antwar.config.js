'use strict';

var rssPlugin = require('antwar-rss-plugin');
var prevnextPlugin = require('antwar-prevnext-plugin');
var highlightPlugin = require('antwar-highlight-plugin');

module.exports = {
  output: 'build',
  name: 'eldh.co',
  author: 'Andreas Eldh',
  deploy: {
    branch: 'gh-pages',
  },
  assets: [
    {
      from: 'assets',
      to: 'assets',
    },
    {
      from: './CNAME',
      to: './',
    }
  ],
  plugins: [
    // rssPlugin(),
    // prevnextPlugin(),
    highlightPlugin({
      style: function() {
        require('highlight.js/styles/github.css');
      },
      languages: ['javascript'],
    })
  ],
  handlers: {
    sectionIndex: function () {
      return require('./SectionIndex.coffee');
    },
  },
  paths: {
    '/': {
      path: function() {
        return require.context('./pages');
      }
    },
    blog: {
      path: function() {
        return require.context('./posts', true, /^\.\/.*\.md$/);
      },
      draft: function() {
        return require.context('./drafts', true, /^\.\/.*\.md$/);
      },
      processItem: {
        url: function(o) {
          if(o.file.url) {
            return o.file.url;
          }
          var page = o.fileName.split('.')[0].split('-').splice(3).join('-');
          return o.sectionName + '/' + page;
        },
        date: function(o) {
          return o.fileName.split('.')[0].split('-').splice(0,3).join('-');
        }
      },
      layout: 'blog',
      title: 'Blog posts',
    }
  },
  theme: {
    name: 'antwar-clean-theme',
    navigation: [
      {title: 'Home', url: '/'},
      {title: 'Blog', url: '/blog'}
    ],
    logo: function(){ return require('./logo.svg')},
    analyticsId: 'UA-41786834-1',
    customStyles: 'specific.scss'
  }
};

