---
layout: post
title: Theming with SASS 
language: english
---

At my current project I'm helping [Kambi](http://kambi.com) build their responsive sports betting client (an in-depth look at the project can be found [in this post](http://blog.14islands.com/post/52546836134/betting-on-responsive)).

We have a whole bunch of different themes for different customers of the app. As functionality (and associated styles) were added to the app and the number of customers grew, we wanted to find an efficient way of structuring our themes. 

Let me just say, before I get more into the specifics of our app, that we pretty much follow the tips about SASS theming outlined in [this post by Mike Folwer](http://mikefowler.me/thoughts/efficient-theming-with-sass/). My main focus will be on the problems facing a large app, with many themes and a lot of styles.


## The old stuff
The codebase had recently been converted to _Sass_ from _LESS_. The code structure was based on a "css mindset". We hardly used variables, mixins, extends or functions, and all of the theming was done with normal css overrides. 

This was the file structure we had (some things are ommited for clarity):

	common
	- module1.scss
	- module2.scss
	- …etc
	theme
	- overwrite.scss
	- paint.scss

All the base styling was divided by module in the _common_ folder and each theme had overrides for all color declarations – background color, text color, shadows etc. – in _paint.scss_ and any non-color overrides was put in _overwrite.scss_. The downside of this was that we had to overwrite most of the color declarations in the app for each new theme. It was also very hard to maintain. When we added a new feature or changed the structure of the html, every theme had to be seperately updated. 

The overall structure of the css was also really bad, with selectors that was way too specific and complicated and a lot of redundant code.

We had to get away from this.

## New thinking
First of all we had to set up some ground rules. In order to keep the theming process from becoming to complicated we needed to limit _how_ theming could be done. This is a tricky decision. If you limit theming too much all themes will look pretty much the same, which will not sit well with our customers. If you allow the theming to be too loose you will end up with a hard-to-maintain mess.

SASS has some awesome features to use for theming, like variables, mixins and color functions. We decided to go full-on with variables. All the colors used in the css should be set using variables. 

The new structure is pretty close to what we had before, but with a few notable changes:

	common
	- variables.scss
	- module1.scss
	- module2.scss
	- …etc
	theme
	- variables.scss
	- overwrite.scss

The _commons/variables.scss_ uses the !default keyword for every variable, whichmeans we can overwrite variables anywhere without causing problems with inherited values. 

For example, if this is in our common _variables.scss_:

	$some-color: #fff !default;
	$some-other-color: $some-color !default;
	
Then we can put the following in our theme _variables.scss_:

	$some-color: #aaa;

Which will give the value **#aaa** to **$some-other-color**, just like we want to. But we can also set **$some-other-color** to something else in the theme variables file.

This allows us to set a few brand specific colors that cascade through our theming files and have all colors used in the app to be calculated via Sass functions. Pretty neat, and this is probably more or less how we will make themes in the future.

The existing themes were not easily translated into the new format and we have spent _A LOT_ of time setting variable values. There are some 700 variables in the main variables file, and each theme overrides between ten and thirty variables.

With this setup, we have a much more scalable architecture, refactoring is a lot easier, and it's easier to make the themes consistant. If we want to make changes to the html or selectors we just have to update stuff in one place. When we add something new we make sure to inherit variable values so that no theme-specific updates will have to be made. And all this without actually sacrificing any theming flexibility. 

This will help us a lot when we add functionality to the app and making new themes will be as easy as setting a handfull of variable values.

The app is live on a bunch of places, for example [here](https://mobile.888sport.com/en/offering.htm) and [here](https://touch.unibet.com/client-start/sportsbook).

Any questions or suggestions are more than welcome. Just contact me on [twitter](http://www.twitter.com/eldh).
