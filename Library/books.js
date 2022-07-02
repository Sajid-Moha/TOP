function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.pages = numPages;
    this.read = read;
    // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
    this.info = function () {
        if (this.read) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    };
}

const GEH = new Book('Green Eggs & Ham' , 'Dr. Seuss', 10, true);
console.log(GEH);
console.log(GEH.info());