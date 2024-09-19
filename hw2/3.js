class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBooksByAuthor(author) {
        let ans = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].author === author) {
                ans.push(this.books[i]);
            }
        }
        return ans;
    }

    listAllBooks() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Book: '${this.books[i].title}'` + `Author: ${this.books[i].author};` + `${this.books[i].pages} pages`);
        }
    }
}

class LibraryUser{
    constructor(library) {
        this.user_books = [];
        this.library = library;
    }

    borrowBook(book) {

        if (this.user_books.length === 3) {
            throw new Error('You can not have more than three books.');
        }

        let needed_book_index = this.library.books.indexOf(book);

        if (needed_book_index === -1) {
            throw new Error('This book is unavailable');
        }

        this.library.books.splice(needed_book_index, 1);
        this.user_books.push(book);
    }

    returnBook(book) {
        this.user_books.splice(this.user_books.indexOf(book), 1);
        this.library.books.push(book);
    }
}