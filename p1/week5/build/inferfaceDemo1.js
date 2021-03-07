"use strict";
function printBook(book) {
    console.log(book.title + book.author + book.published + book.pages);
    // book.author = "poul" fordi at author er sat til readonly kan man ikke ændre værdien efter den er belvet instancieret
}
printBook({ title: 'Hej', author: 'mig', pages: 100, published: new Date() });
//if it has a title, author, published date and pages it is a book, IDK
//# sourceMappingURL=inferfaceDemo1.js.map