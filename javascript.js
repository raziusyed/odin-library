const library = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
}

addBookToLibrary('Cool book', 'Cool author', 333, true);
addBookToLibrary('Cool book', 'Cool author', 333, true);
addBookToLibrary('Cool book', 'Cool author', 333, true);

console.log(library);

const books = document.querySelector(".books");

library.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    books.appendChild(bookDiv);

    const { title, author, pages, read } = book;

    const titleP = document.createElement("p");
    const authorP = document.createElement("p");
    const pagesP = document.createElement("p");
    
    titleP.textContent = title;
    titleP.classList.add("bookTitle");

    authorP.textContent = author;
    authorP.classList.add("bookAuthor");
    
    pagesP.textContent = pages;
    pagesP.classList.add("bookPages");

    bookDiv.append(titleP, authorP, pagesP);

});

