---
date: '2020-02-04T00:00:00.000Z'
title: Blurred vision
language: english
---

I had eye surgery a while back, more specifically a treatment called [cross-linking](https://en.wikipedia.org/wiki/Corneal_collagen_cross-linking). As a result my vision has been really bad for a couple of weeks – like looking through frosted glass. It has been frustrating to not be able to read, watch tv or write code, but at the same time it's been very interesting to see how different accessibility tools worked for me in this scenario.

I found some things really helpful:

- The built-in zoom feature in web browsers are awesome. Don’t fuck it up.
- The iOS adaptive text size is great and I wish MacOS had the same feature. Right now Electron apps are easier to use than native apps because you can zoom just like in a browser.
- Dark mode makes it so much easier to read text. Those writing it off as a useless gimmick have not considered its importance for accessibility.
- Contrast is important. Make sure your text has enough contrast and consider adding a specific high contrast mode. Heavily saturated text is also harder to read, so go light when adding coloured text.
- Focus states need to stand out a lot. This is not the place to just add a subtle border.

I’m lucky enough to have reduced vision only temporarily. Others have to live with the apps you make all their lives. Make it enjoyable for them.

Of course, this is not an exhaustive list. There are a lot of different accessibility features you should support that I have not had to use this time around.

---

One thing that took me by surprise after the surgery was how it affected my thinking. The increased friction when reading and writing really hurt my ability to process information. Navigating between and within files took a bit longer than usual, but keeping track of what I was looking for and the context I was in became much harder.

I had to use too much brain power just to register the words that was on the screen, and there was not enough capacity left for me to think about the important things. This made me realise why I dislike apps that have a bad reading experience – they force my brain to waste capacity that could have been used for the tasks.

---

Designing an experience that is enjoyable for everyone is fundamental for allowing your users to get the most out of your app. Unfortunately, accessibility is not considered a core aspect of the design process in most companies – in the best case it's an afterthought or something that's tackled only at the coding level, in most cases accessibility is completely overlooked.

I think the key to improving accessibility is to improve the tooling. Both design tools and coding tools needs to do much more to make it easier to create accessible, enjoyable apps. Initiatives like [Reach UI](https://reacttraining.com/reach-ui/) and [Lighthouse](https://web.dev/accessibility-scoring/) are great, but there is much more to be done at every level of the product development process.

Some things I would like to see:

- Static design tools (Figma, Sketch, etc.) should include simulators for different types of visual impairments.
- Interactive tools (Framer, etc.) should support accessibility features like focus states and keyboard navigation.
- Code level tools (webflow, browser dev tools, etc.) should enforce accessibility features (aria roles, labels, semantic html, focus management etc).
- Frameworks (React Native, Gatsby, Next.js, etc.) should have high-quality accessibility checks built into the default tooling.

I realise there are a bunch of other problems that have a higher priority at any given point in time. We take short-cuts, we tackle it later.

But there's no quick fix. Accessibility needs to be at the core of what we do, at every level.

I hope we get there some day.
