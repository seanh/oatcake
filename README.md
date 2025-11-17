<p align="center">🎉 <strong>Oatcake 1.0 released!</strong> 🎉 Read the <a href="">blog post</a>.</p>

[![NPM Version](https://img.shields.io/npm/v/oatcake)](https://www.npmjs.com/package/oatcake)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/oatcake/badge)](https://www.jsdelivr.com/package/npm/oatcake)

# Oatcake

A drop-in CSS stylesheet that makes pages attractive and readable. Looks good
without drawing attention to the design. Works great on both mobile and desktop.

## Getting started

To style your own page with Oatcake just add this link to your HTML file's
`<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/oatcake@1.0.0-rc.2" />
```

That's it! If all you want is a simple page like [Oatcake's demo
page](https://www.seanh.cc/oatcake/) just add a little CSS layout of your own
(`max-width`, `margin`, `padding`) and you're done. Here's a complete HTML file
that you can copy-and-paste to get started:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page title</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/oatcake@1.0.0-rc.2"
    />
  </head>
  <body style="max-width:40em; margin:0 auto; padding:0 12px;">
    <h1>Page Title</h1>
    <p>Page content goes here…</p>
  </body>
</html>
```

### Applying Oatcake to only part of a page

You might want to apply Oatcake to only part of your HTML page. For example
maybe you're using `<aside>` for a site-wide sidebar and `<footer>` for a
site-wide footer and don't want Oatcake's `<aside>` and `<footer>` styles to
affect those, but you _do_ want to apply Oatcake to the page's main content.

You can apply Oatcake to only part of a page by loading it in a
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM).
Here's an example:

```html
<div>
  <template shadowrootmode="open">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/oatcake@1.0.0-rc.2"
    />

    <p>
      Oatcake's styles will be applied to everything within the "template"
      element.
    </p>
  </template>
</div>
```

Any other CSS or JavaScript that you want to work within the `<template>`
element will need to be loaded within it as well: the content inside the
`<template>` is isolated from _any_ JavaScript or CSS running in the outer page.

## Releases

Releases are published to [GitHub](https://github.com/seanh/oatcake/releases)
and [npm](https://www.npmjs.com/package/oatcake?activeTab=versions).
Subscribe to [GitHub's Atom feed for new releases](https://github.com/seanh/oatcake/releases.atom)
to get notified so you can update your version number.

## Documentation

For full documentation see: <https://www.seanh.cc/oatcake/>
