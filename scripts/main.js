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

const Hobbit = new Book("tom", "bob", "bobagain", "boboncemore");

function addBookToLibrary(Book)
{

}

console.log(Hobbit.info())