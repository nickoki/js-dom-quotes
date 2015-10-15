// 1
console.log(1, "Using relative selection, select the <p> element containing the second Mark Twain quote");
console.log("document.body.children[1].children[1].children[2].firstChild.nextSibling.children[0]");
var p = document.body.children[1].children[1].children[2].firstChild.nextSibling.children[0]
console.log(p);
// 2
console.log(2, "Do the same using a query selector");
console.log("document.querySelector('#mark-twain-second p')");
var p = document.querySelector('#mark-twain-second p');
console.log(p);
// 3
console.log(3, "Select all of the elements with class .quote");
console.log("document.querySelectorAll('.quote')");
var quotes = document.querySelectorAll(".quote");
// 4
console.log(quotes);
console.log(4, "Select the 'Quotes About Motivation' heading");
console.log("document.querySelector('.motivation h2')");
var heading = document.querySelector('.motivation h2');
console.log(heading);
// 5
console.log(5, "Select all of the elements with class .subject");
console.log("document.querySelectorAll('.subject')");
var sections = document.querySelectorAll('.subject');
console.log(sections);
