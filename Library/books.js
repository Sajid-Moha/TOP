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

function addBookToLibrary(title, author, numPages, read) {
    let book = new Book(title, author, numPages, read);
    myLibrary.push(book);
}

