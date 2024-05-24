Frontend System Design “CHEAT SHEET”
RADIO - requirements, architecture, data model, API (Interface), Optimizations

REQUIREMENTS: (15%)
USER STORY and USER DEFINITION
Who are they? (enterprise, consumers?)
How is the app used? (what devices, signed-in users/personalization or guest users?)
What are they primarily using it for?
How many users?
How big is the data set? What kinds of data do we need to handle (none, a lot!, long strings, big numbers, edge cases!). Pagination required? Options.

WHAT IS OUR MVP? MVP BUCKET. CREATE A “**\_\_\_**”
Core features, core user story. When a user does X interaction, what happens?
Separate the core features - if large scale, give each to an eng team.

FUTURE FEATURES BUCKET
Personalization, saving of user’s info, etc? If no auth, can use cookies to fingerprint users (uuid).
What do we PERSIST (cart, forms, etc)?
Decision: Rich App Vs. Flat Site

OPTIMIZATIONS OR NON-FUNCTIONAL REQUIREMENTS BUCKET
Prioritize these. Why is something a high priority given this specific app?
Example, for travel booking: the most important aspects are performance, SEO, internationalization, and device support.)
How Fast Should Page Load? / How Fast Should Interactions Take?

ARCHITECTURE: (20%)
Mock up simple UIs. What pages do we need. What is interactive? What is read-only?
For some UIs - think: positioning.
Choice of framework - React or Angular or others. Why?
Component hierarchy diagram. Data flows between components. (Nouns and verbs).
Error handling flows should be in the architecture!

DATA MODEL: (10%)
Where does STATE live? (Some things on client, security-concerns things on server).
Redux-style? Predictable state container. Centralized store object. Actions dispatched and processed by functions called reducers.
OR: each page has its own state.

API: (15%)
Do we need to debounce? Minimum query length? (Yes, for SEARCH). Throttle?
REST - simple, standard HTTP methods, popular, caching straightforward, fixed structure of data -> overfetching or underfetching, versioning with changes (complexity)
GraphQL - efficiency, strong typing, request aggregation into single request, complexity! Challenging to setup on backend. Overkill for simple APIs. Caching more complex.
Websockets (for real-time updates)

OPTIMIZATIONS/DEEP DIVE: (40%!!)
PERFORMANCE
How Fast Should Page Load? / How Fast Should Interactions Take?
Code split, lazy load, prioritize rendering above the fold content, defer loading of non-critical JS, prefetch JS or page upon user intent to use JS or go to page.
Client cache? (Yes, for SEARCH or similar, IF large dataset)
Cache can also be used to handle race conditions in a search.
LocalStorage (smaller) or IndexedDB (larger, supports offline state) for persisting between sessions (e.g. the State of a game).
Prevent memory leaks (clean up) or if you have a lot of events, force a page refresh every N hours.
Server Side Rendering
Virtualized lists
Images: on CDN, define priority, lazy load below-the-fold imgs, adaptive image loading (high-res for fast devices on networks, low-res for slow networks)
Bundling - use tooling like webpack. Uglify and minify to make the bundle small. Tree shaking - unused functions/etc from libs excluded in bundle. Lazy loading mins bundle.
Backend Perf:
Leverage auto-scaling solution (AWS, Azure) for load balancing, edge caching, pre-DB caching, provisioning more servers, handling large throughput, etc
“Closer to user in SPACE (CDN) and closer in TIME (memory)”
UX
THAT FAST FEELING: Optimistic updates, shimmer loading effects
Minimize layout shift, reserving space for elements with min-height, min-width, aspect-ratio.
User knows: pending, error, no data, success (toasts, e.g.)
Handle long strings: truncate, “show more” btn, popover
Error handling: connect errors to form inputs. Show what happened if there’s a server timeout or server error.
A11Y:
Semantic markup. Alt attributes. Inputs of correct type. Buttons of correct type. Tabbable (use tabindex). Aria roles and attributes. Color contract. Screen reader nav.
Aria to inform screen-reader users of new DOM content.
Forms: ease of use on mobile! Address forms: autocomplete via API. Focused inputs visually marked.

SEO:
Title and meta tags with desc, keywords. Sitemap.xml for crawlers. Semantic HTML helps. Server side rendering. Pre-gen pages for popular lists.
HEALTH:
Logging, metrics, monitoring, telemetry, observability
Lighthouse and Web Vitals to measure perf

TESTING:
Unit Testing: “given, when, then.” Make funcs have single responsibility. Write small, focused tests on single piece of functionality.
Browser E2E testing for frontend is great: Cypress, Playwright. Not language dependent.
Mocking. You can mock most things. (You can mock the Clock).

SECURITY
XSS - sanitize and input validation (w/ regex), and CSP (only auth’d JS can run)
CSRF- hacker cracks users account, antidote: anti-CSRF tokens on forms
HTTPS - encrypts data and pages both ways
DDOS - rate limiting and other measures
(Payment requires sensitive security.)
CORS
Defense in depth - don’t mess with cookies in JS -
I18N
Global user base? The website should be translated and localized.
Localized: Adapting images, symbols and colors etc to align with cultural norms. Date and time formats! Currency and number formats! Legal compliance per country, UX stuff (right to left reading, etc).
Country specific address forms
DEVICE SUPPORT
Responsive UI, responsive Images (adaptive imgs)
Think about DEVICE SPECIFIC UI - how it has to be different on mobile to be good UX.
Larger interactive elements, swiping, less content at once, less items in list, good mobile forms
MISC
Race conditions:
Disable buttons when request pending
you can keep track of the latest requests and ignore the results from the earlier ones.
Debounce/throttle: Rate limit the number of network requests fired.
Batch requests
