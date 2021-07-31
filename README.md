# xr-aus

## Goals

- New developers that understand HTML, utility CSS and vanilla JavaScript can be productive in a short amount of time.
- Website content producers can create flexible layouts with minimal training, no HTML knowledge required.
- The website is built in a way that allows _all content and supporting data_ to be editable via a CMS.
- The website and CMS have a [minimal environmental impact](https://www.websitecarbon.com/).
- Website `a11y` is not an afterthought.
- Any 3rd parties used (analytics, etc) are privacy-focussed.

## Stack

- The static website is generated with [Eleventy](https://www.11ty.dev/).
- The CSS framework used is [Tailwind](https://tailwindcss.com/).
- The JavaScript framework used is [AlpineJS](https://alpinejs.dev/).
- The live website is deployed to [CloudFlare Pages](https://pages.cloudflare.com/) on push to `main`, and preview deploys are spun up on push to other branches.
- Content and JSON data updates can be made via the [Netlify CMS](https://www.netlifycms.org/).
- <TBC> OAuth for the Netlify CMS is deployed to [CloudFlare Workers](https://workers.cloudflare.com/), via [GitHub Actions](https://github.com/features/actions).

## Local development

```sh
git clone https://github.com/d3v1an7/xr-aus
npm install
npm run start
```

## Traps

- <TBC> Purging. See list in tailwind.config.js.

# Credits

- Tailwind colour definitions (and a heck lot of design inspiration) from https://github.com/owinoalfred/copxr
