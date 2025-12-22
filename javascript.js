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

    const imageContainer = document.createElement("div");
    const image = document.createElement("img");

    const textContainer = document.createElement("div");
    const titleP = document.createElement("p");
    const authorP = document.createElement("p");
    const pagesP = document.createElement("p");

    image.setAttribute("src", "images/book.svg");
    imageContainer.classList.add("imageContainer");
    imageContainer.appendChild(image);
    
    titleP.textContent = title;
    titleP.classList.add("bookTitle");

    authorP.textContent = "by: " + author;
    authorP.classList.add("bookAuthor");
    
    pagesP.textContent = pages + " pages";
    pagesP.classList.add("bookPages");

    textContainer.classList.add("textContainer");
    textContainer.append(titleP, authorP, pagesP);


    bookDiv.append(imageContainer, textContainer);

});

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

const form = document.querySelector("form");
const formSubmitButton = document.querySelector("button[type='submit']")

formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
})

