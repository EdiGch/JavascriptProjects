var books  = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function (book) {

       book.textContent +=  ' (book title)';

       console.log(book.textContent);
})



var shopBooks  = document.getElementsByClassName('name');


const bookList = document.querySelector('#book-list');

bookList.innerHTML += '<p>Add html</p>';