let library = [];
let addBookButton = document.querySelector("#addBookButton");
let popup = document.querySelector(".popup-container");
let closeButton = document.querySelector("#close");
let saveButton = document.querySelector("#save-book")




//open and close popup
addBookButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popup.classList.add("block");
});


closeButton.addEventListener("click", () => {
    popup.classList.remove("block");
    popup.classList.add("hidden");
});

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    let titleValue = document.getElementById("form-title").value;
    let authorValue = document.getElementById("form-author").value;
    let pagesValue = document.getElementById("form-pages").value;
    let readValue = document.querySelector('input[name="read"]:checked').value;

    var newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    library.push(newBook);
    popup.classList.remove("block");
    popup.classList.add("hidden");
    console.log(library);

    addBookToLibrary();
})


//constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};



//create div, give class
function addBookToLibrary() {
    let bookShelf = document.querySelector(".book-shelf");
    let bookDiv = document.createElement("div");
    let bookTitle = document.createElement("h3");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let removeButton = document.createElement("button");

    bookDiv.classList.add("book-div");
    removeButton.classList.add("remove-button")
    removeButton.innerHTML = "Remove";

    removeButton.addEventListener("click", (e) => {
        library.splice(library.indexOf(e), 1);
    })

    library.forEach(item => {
        bookTitle.innerHTML = item.title;
        bookAuthor.innerHTML = item.author;
        bookPages.innerHTML = item.pages;
    })


    bookDiv.append(bookTitle, bookAuthor, bookPages, removeButton);
    bookShelf.appendChild(bookDiv);

}

