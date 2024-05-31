const MyLibrary = [];

function Book(author,title,numberOfPages,readStatus)
{
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
    this.info = function()
    {
        const infoarray = [this.author, this.title, this.numberOfPages, this.readStatus];
        return infoarray;
    }
};

function addBookToLibrary(author, title, numberOfPages, readStatus)
{
        let newBook = new Book(author,title,numberOfPages,readStatus);
        MyLibrary.push(newBook)
        console.log(MyLibrary)

}
addBookToLibrary("Author Test","Title Test","Pages Test","Status Test");
addBookToLibrary("Author Test 2","Title Test 2","Pages Test 2","Status Test 2");