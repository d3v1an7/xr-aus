# xr-spring-rebellion

An example of what a rebuild of the XR Australia website could look like, showcasing an upcoming Spring Rebellion event.

Built during a 24hr hackathon.

## Goals

- Updated homepage design and build
- New landing page for Spring Rebellion
- Everything must be editable (homepage, menu, redirects)
- Minimal environmental impact (https://www.websitecarbon.com/website/withloveandrage-com/)
- Accessible (screen readers)

## Stack

- The site is generated with [Eleventy](https://www.11ty.dev/), which handles the static HTML templates, pages and navigation.
- The CSS framework used is [Tailwind](https://tailwindcss.com/).
- The site is deployed to [CloudFlare Pages](https://pages.cloudflare.com/) on merge to `main`.

## Local development

```sh
git clone https://github.com/d3v1an7/xr-spring-rebellion
npm install
npm run start

# In a new terminal tab/window
open http://localhost:3000
```

## WIP
https://docs.google.com/document/d/1Tqg_cNVG_B8P2BPmFI0jAHN3AeI62r_YlisYh3bb7Ks/edit?usp=sharing

## Reasoning

### Why not just use `eleventy --serve`?

To avoid the many circular race conditions with multiple serve/watch implementations across tooling (things get fun with `postcss --watch` while also using `postcss-hash` for cache busting), I've opted to use a light server along with nodemon to have better control over what runs when.

### Why do things refresh twice, and why does the CSS only load 'fully' on the second refresh?

The local build process will essentially:

1. Run `eleventy` to update the site HTML. This lets you see small, text based changes (and changes using already known css classes) immediately
2. `postcss` will detect any change to template files and recreate a production ready css file (picking up any newly introduced css classes)
3. `eleventy` will detect when `postcss` has finished, and re-run, adding support for any css classes that were missing from the first load.

### Why not just reference a non-prod tailwind file in dev?

Working with a 3MB tailwind file in dev is clunky and error prone (especially when outputting the file as text and trying to inspect the page), so I prefer the prod output.

### Couldn't we do it `<this other way>`?

Super open to changes/suggestions!


# Credits

- Tailwind colour definitions (and a heck lot of design inspiration) from https://github.com/owinoalfred/copxr
