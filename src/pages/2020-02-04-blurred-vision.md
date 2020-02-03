---
date: '2020-02-04T00:00:00.000Z'

title: Blurred vision
language: english
---

I had eye surgery a while back. As a result my vision was really bad for a couple of weeks - like looking through frosted glass. As frustrating as has been to notbe able to read, watch tv and write code. it's been very interesting to see how different accessibility tools worked for me in this scenario.

I found some things really helpful:

- The built-in zoom feature in web browsers are awesome. Don’t fuck it up.
- The iOS adaptive text size is great and I wish MacOS had the same feature. Right now Electron apps are easier to use than native apps because you can zoom just like in a browser.
- Dark mode makes a huge difference. It makes it so much easier to read text.
- Contrast is important. Make sure your text has enough contrast and consider adding a specific high contrast mode. Heavily saturated text is also harder to read, so go light when adding colored text.
- Focus states need to stand out a lot. Subtle borders can be used for other things.

I’m lucky enough to have reduced vision only temporarily. Others have to live with the apps you make all their lives. Make it enjoyable for them.

Of course, the things I mentioned here does by no means constitute an exhaustive list. There are a lot of different accessibility features you should support that I have not had to use this time around.

---

One thing that took me by surprise after the surgery was how it affected my thinking. The increased friction of reading and writing really hurt my ability to process information. Navigating between and within files took a bit longer than usual, but keeping track of what I was looking for and the context I was in became much harder.

I had to use too much brain power just to register the words that was on the screen, and there was not enough capacity left for me to think about the important things. This made me realize why I dislike apps that have a bad reading experience – they force my brain to waste capacity that could have been used for the tasks.

---

Designing an experience that is enjoyable for everyone is fundamental for allowing your users to get the most out of your app. Unfortunately, accessibility is not considered a core aspect of the design process - in the best case it's an afterthought or something that's tackled only at the coding level, in most cases accessiblity is completely overlooked.

I think the key to improving accessibility is to improve the tooling - both design tools and coding tools needs to do much more to make it easier to create accessible, enjoyable apps. Initiatives like [Reach UI](https://reacttraining.com/reach-ui/) and [Lighthouse](https://web.dev/accessibility-scoring/) are great, but there is much more to be done at every level of the engineering process.

Some things I would like to see:

- Static design tools (Figma, Sketch, etc.) should include simulators for different types of visual impairments.
- Interactive tools (Framer, etc.) should support accessibility features like focus states and keyboard navigation.
- Code level tools (webflow, browser dev tools, etc.) should enforce accessibility features (aria roles, labels, semantic html, focus management etc).
- Frameworks (React Native, Gatsby, Next.js, etc.) should have high-quality accessibility checks built into the default tooling.
