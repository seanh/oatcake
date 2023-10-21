Oatcake
=======

A drop-in stylesheet that makes any HTML page's text attractive and readable,
no CSS classes needed.
Looks good without drawing attention to the design,
lots of features and details,
everything works great on mobile.

Usage
-----

To add Oatcake to a page just add this link to your HTML file's
<code>&lt;head&gt;</code>:</p>

```html
<link rel="stylesheet" href="https://www.seanh.cc/oatcake/oatcake.css">
```

You don't need any CSS classes or any particular structure: Oatcake is a
drop-in stylesheet that styles the standard HTML elements directly, you can use
it to style HTML straight from Markdown.

I recommend setting a line width of about 30-50em, for example by using the CSS
`max-width` property on a container element like your page's `<body>` or a
`<main>`, an `<article>` or just a `<div>` that contains your content. Here's a
complete starter page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Page title</title>
    <link rel="stylesheet" href="https://www.seanh.cc/oatcake/oatcake.css">
  </head>
  <body style="max-width:50em; margin:0 auto; padding:0 .5em;">
    <h1>Page title</h1>
    <p>Page content goes here...</p>
  </body>
</html>
```

Hacking
-------

```terminal
git clone https://github.com/seanh/oatcake.git
cd oatcake
make dev
```
