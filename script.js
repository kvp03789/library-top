let library = [];
const addBookButton = document.querySelector("#addBookButton");



addBookButton.addEventListener("click", () => console.log("works"));

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
};

function addBookToLibrary(...arg) {
    let book = new Book(...arg)
}