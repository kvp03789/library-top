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
    console.log(newBook);
    library.push(newBook);
    popup.classList.remove("block");
    popup.classList.add("hidden");
    console.log(library);
})



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// function addBookToLibrary(...arg) {
//     let newBook = new Book(...arg)
//     library.push(newBook);
// }

