let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.pages = numPages;
    this.read = read;
}

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
Book.prototype.info = function () {
    if (this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, read`;
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
};

Book.prototype.returnBook = function () {
    const book = document.createElement('div');
    book.classList.add('book');

    const title = document.createElement('p');
    const author = document.createElement('p');
    const numPages = document.createElement('p');
    const read = document.createElement('p');
    
    title.textContent = `${this.title}`;
    author.textContent = `${this.author}`;
    numPages.textContent = `${this.pages}`;
    
    read.textContent = this.read ? "Read = True" : "Read = False";

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(numPages);
    book.appendChild(read);

    return book;
};

function addBookToLibrary(title, author, numPages, read) {
    let book = new Book(title, author, numPages, read);
    myLibrary.push(book);
}

function printBooks() {
    let library = document.querySelector(".library");

    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    
    myLibrary.forEach( function (book) {
        library.appendChild(book.returnBook());
    })
}

printBooks();



function create_card () {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('num-pages').value;
    const read = document.getElementById('read').checked;
    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('num-pages').value = '';
    document.getElementById('read').checked = true;

    addBookToLibrary("Title: " + title, "Author: " + author, "Length: " + numPages.toString() + " Pages", read);
    console.log(numPages.toString());
    printBooks();
}