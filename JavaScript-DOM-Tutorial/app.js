const wrap = document.querySelector('#wrapper');

var el = document.querySelector('#book-list > ul > li:nth-child(2) > span.name');

var span  = document.querySelectorAll('#book-list li .name');

Array.from(span).forEach(function (name) {
       console.log(name);
})