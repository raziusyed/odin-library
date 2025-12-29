let library = [];
const books = document.querySelector(".books");

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
    renderLibrary();
}

function deleteBookFromLibrary(id) {
    library = library.filter(book => book.id !== id);
    renderLibrary();
}

addBookToLibrary('Cool book', 'Cool author', 333, true);
addBookToLibrary('Cool book', 'Cool author', 333, true);
addBookToLibrary('Cool book', 'Cool author', 333, true);

function renderLibrary() {
    books.innerHTML = "";

    library.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        books.appendChild(bookDiv);

        const { id, title, author, pages, read } = book;

        const imageContainer = document.createElement("div");
        const bookImage = document.createElement("img");
        const textContainer = document.createElement("div");
        const titleP = document.createElement("p");
        const authorP = document.createElement("p");
        const pagesP = document.createElement("p");
        const isRead = document.createElement("input");
        const isReadLabel = document.createElement("label");
        const deleteBookButton = document.createElement("button");

        deleteBookButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>trash-can</title>
                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
            </svg>
            `;
        deleteBookButton.classList.add("deleteBook");
        deleteBookButton.addEventListener("click", () => {
            deleteBookFromLibrary(id);
        })

        bookImage.setAttribute("src", "images/book.svg");
        imageContainer.classList.add("imageContainer");
        imageContainer.append(deleteBookButton, bookImage);

        titleP.textContent = title;
        titleP.classList.add("bookTitle");

        authorP.textContent = "by: " + author;
        authorP.classList.add("bookAuthor");

        pagesP.textContent = pages + " pages";
        pagesP.classList.add("bookPages");

        isRead.type = "checkbox";
        isRead.checked = read;
        isRead.addEventListener("change", (e) => {
            book.changeRead();
        })

        isReadLabel.appendChild(isRead);
        isReadLabel.appendChild(document.createTextNode(" Read"));

        textContainer.classList.add("textContainer");
        textContainer.append(titleP, authorP, pagesP, isReadLabel);


        bookDiv.append(imageContainer, textContainer);
    });
}


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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const book = Object.fromEntries(formData.entries());
    book.read = form.read.checked;

    const { title, author, pages, read } = book
    addBookToLibrary(title, author, pages, read);
    renderLibrary();
    dialog.close();
    form.reset();
})

