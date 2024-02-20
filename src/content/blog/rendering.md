---
date: 2024-02-19 
title: Rendering Demystified
image: www
---
If you've done any kind of web dev, you've probably heard terms like: SSG, SSR, CSR, hydration, etc; but most documentation doesn't do a great job at explaining what these actually are. So in this post, I'll try and explain them to the best of my understanding!
## SSG (Static Site Generation)
This is the most classical form of site deployment; it essentially means all your site's HTML is generated at build time, allowing for it to be sent directly to the client when they request it. In fact, this website itself uses SSG, allowing for much faster load times compared to...
## SSR (Server-Side Rendering)
Rather than build all the site's HTML at once, SSR websites build pages only when a user queries for them. Compared to SSG, where the same `about.html` file will be sent to all clients who navigate to the [About](/about) page, SSR will rebuild `about.html` each time a user queries for it before sending it back. While this approach may seem strictly worse at first, its use lies in *dynamic routes*. Take GitHub, for example: each user has a unique page at https://github.com/username, but with hundreds of millions of accounts, GitHub can't possibly constantly rebuild each of these pages! Not to mention, any edit made to biographies or usernames would require a rebuild as well. However, with SSR, if I navigate to a page like https://github.com/danielzsh, GitHub is not only able to reply with the most up-to-date information but also has the luxury of "lazily" building the page only when a client tries to visit it, rather than constantly rebuilding it manually.
## CSR (Client-Side Rendering)
```html
<html>
 <head>
   <title> CSR App </title>
 </head>
 
 <body>
     <main id="app"> </main>
     <script src="index.js"> </script>
 </body>
</html>
```
*Wow. Amazing website.*

In all seriousness, the above code is essentially what a CSR app looks like. Well...for a frame or two, at least. That `index.js` script actually contains all the logic for both the site UI and client interactions (button clicks, for example)! At its core, it's probably something like: 
```js
document.getElementById("app").innerHTML = /* the site! */
```
However, as you may have guessed, pure CSR has a huge initial overhead; the client has to load `index.js` in its entirety before they can view, let alone interact with the site at all&mdash;and since that JavaScript file contains essentially the whole site and all its different pages, it's more than a minor issue! This brings us to...

## Client-Side Hydration
Hydration combines the initial load speed of SSG/SSR with the blazing fast interactions provided by CSR. Popularized by React, the process first sends a scaffold of the webpage to the client with all the DOM elements and styles, but without any JavaScript (which contributes the bulk of CSR overhead). However, no JavaScript means things like buttons and the cards on [this site's homepage](/) won't work; that's where hydration comes in! Rather than send the JavaScript along with the site, we now fetch it only **after** the site's initial load. We can also optimize this through processes such as code splitting, which allows us to fetch the JS incrementally, chunks at a time; this allows us to, for example, fetch code first for buttons that are immediately presented to the client before for other buttons, located further down the page. 
<br><br>
Pretty cool, right? But don't just take my word for it; you can see this hydration process for yourself! 
1. Navigate to this site's homepage and open up Chrome DevTools.
2. Open the [Network Conditions panel](https://developer.chrome.com/docs/devtools/device-mode/override-user-agent) and select "Fast 3G" in the Network Throttling dropdown.
3. Reload the homepage, and observe!
4. Make sure to turn throttling off once you're done, or your experience on this site may become significantly slower :)

***Note:** Network throttling is essentially a way to simulate a slow connection, which makes behavior like hydration much obvious even though it always happens, regardless of connection speed.*
<br><br>
Hopefully, you saw the first `~/about` card just there on its own for a bit, before the second `~/blog` card popped into the background. That's hydration in action! Note that because the cards are regular `<a>` anchor tags, you can still click them before the page fully hydrates. However, both the swipe functionality and even the stacked card effect itself require JavaScript; hence, they don't immediately load.

## So...
In conclusion: SSG for smaller sites, SSR for larger sites or sites without dynamic routes, CSR basically never, and hydration is already shipped with most frameworks, such as Next.js and Gatsby. Whew!

## References
1. [Gatsby article with really helpful diagrams](https://www.gatsbyjs.com/blog/choosing-the-best-page-rendering-modes-for-your-gatsby-site)
2. [Nice Medium article](https://medium.com/@prashantramnyc/server-side-rendering-ssr-vs-client-side-rendering-csr-vs-pre-rendering-using-static-site-89f2d05182ef)

<hr class="mt-5">
Feel free to leave any suggestions for this post <a href="https://github.com/danielzsh/danielz.sh">here</a> by opening an Issue or Pull Request!