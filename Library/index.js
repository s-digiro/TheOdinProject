let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary(book) {
    library.push(book);
}

function updateView() {
    const tbody = document.querySelector('#library');

    let html = `
        <span>&nbsp&nbsp&nbsp&nbsp</span>
        <strong>Title</strong>
        <strong>Author</strong>
        <strong>Pages</strong>
        <strong>Read?</strong>`;

    library.forEach((book, i) => {
        html += `
                <button onclick="removeBook(${i})">X</button>
                <span>${book.title}</span>
                <span>${book.author}</span>
                <span>${book.pages}</span>
                <span class="read-toggler" onclick="toggleRead(${i})" ${book.read ? 'read' : ''}></span>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function showModal() {
    document.querySelector('#blocker').hidden = false;
    document.querySelector('#modal').hidden = false;
}

function hideModal() {
    document.querySelector('#blocker').hidden = true;
    document.querySelector('#modal').hidden = true;
}

function modalAddNewBook() {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    addBookToLibrary(new Book(title, author, pages));
    updateView();
    hideModal();
}

function removeBook(i) {
    library.splice(i, 1);
    updateView();
}

function toggleRead(i) {
    library[i].read = !library[i].read;
    updateView();
}