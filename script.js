let library = [];
let addBookButton = document.querySelector("#addBookButton");
let popup = document.querySelector(".popup-container");
let closeButton = document.querySelector("#close");

//open and close popup
addBookButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popup.classList.add("block")
});


closeButton.addEventListener("click", () => {
    popup.classList.remove("block");
    popup.classList.add("hidden")
});





function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
};

function addBookToLibrary(...arg) {
    let book = new Book(...arg)
}