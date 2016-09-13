# js-dom-quotes
## Set up

1. Clone this repo and `cd js-dom-quotes`
-  Get the jQuery branch locally by typing `git checkout -b jquery origin/jquery`
- Open the index page in your browser: `open index.html`
- Add jQuery to the page. ([You can use this CDN](https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js))
- Open Chrome's developer tools: <kbd>command + option + j</kbd>

## Exercise - Selecting DOM elements

This is an exercise in finding elements on the page (in the DOM).

Your task is to write javascript **in the console** to retrieve the objects which represent these elements.

### Part 1

1. Select the `<body>`
```js
$('body')
```
- Select the `<header>`
```js
$('header')
```
- Select all of the elements with class "quote"
```js
$('.quote')
```
- Select all of the subject elements
```js
$('.subject')
```
- Select the navigation links
```js
$('nav')
```
- Select all the quotes in the "life" section.
```js
$('.life').find('.quote')
```
- Select the 'Quotes About Motivation' heading
```js
$('.motivation').children().eq(0)
```
- Select the `<p>` element containing the **second** Mark Twain quote
```js
$('#mark-twain').siblings().eq(1).find('p')
```

### Part 2

Do the same as before, but this time **with no spaces or colons in `$( )`**. That is: retrieve the target element(s) **using only DOM traversal methods** from [jQuery's documentation](http://api.jquery.com/category/traversing/tree-traversal/).
```
$('#mark-twain').siblings().eq(1).find('p')
```

#### OK:

```js
$(".life").find(".quote");
```

#### Not OK:

```js
$(".life .quote");
```
