const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBookToLibrary(title,author,pages) {

    if(!title && !author && !pages) {

    title = prompt("Book title:");
    author = prompt("Author");
    pages = prompt("Pages:");
}

    const newBook = new Book(title,author,pages);

    myLibrary.push(newBook);
    displayLibrary();

}

addBookToLibrary("Harry Potter","JK Rowling","1055");
addBookToLibrary("Barry Trotter","Greg Mc","120");
addBookToLibrary("Sammy Trotter","Jeremy","1204");

function displayLibrary() {

    const libraryDisplay = document.getElementById('libraryDisplay');
    libraryDisplay.innerHTML = ''; // clear the div
    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `<strong>Title: </strong> ${book.title}<br><strong>Author: </strong> ${book.author}<br><strong>Pages: </strong> ${book.pages}<br><button id='${book.title}'>Remove book</button><br><br>`;
        libraryDisplay.appendChild(bookElement);;
    });
    

}



document.getElementById('addBookButton').addEventListener('click', () => {
    document.getElementById('bookDialog').showModal();
});

document.getElementById('confirmAddBook').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    addBookToLibrary(title,author,pages);

    document.getElementById('bookDialog').close();

    console.table(myLibrary);

});

displayLibrary();