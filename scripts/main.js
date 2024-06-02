const MyLibrary = [];

const body = document.body;
const visualLibraryContainer = body.querySelector("#container")

function Book(author,title,numberOfPages,readStatus)
{
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readStatus = Boolean(readStatus).valueOf();
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

addBookToLibrary("The Guy","A really bad good book","200",true);
addBookToLibrary("The Guy 2","WEEE","2440",false);

function updateVisualLibrary()
{
    for(let i = 0; i < MyLibrary.length; i++)
        {
            let visualBook = document.createElement("div");

            visualBook.className =("book");
            
            visualBook.id = (Number(i)); //Used for unique specific changes

            let author = MyLibrary[visualBook.id].author
            let title = MyLibrary[visualBook.id].title
            let numberOfPages = MyLibrary[visualBook.id].numberOfPages
            let readStatus = MyLibrary[visualBook.id].readStatus

            visualBook.addEventListener( "click", () => presentInfo(author,title,numberOfPages,readStatus) )
            visualBook.addEventListener( "click", () => updateReadStatus(MyLibrary[visualBook.id]) )
            
            if (visualBook.id < 1)
                {
                    visualBook.style.backgroundColor="blue";
                }
            
            visualLibraryContainer.appendChild(visualBook);
        }
}

function updateReadStatus(bookIndex)
{       
    if(bookIndex.readStatus == true)
    {
        console.log("READ IT")
        bookIndex.readStatus = false;
        
    }
    else
    {
        console.log("DID NOT READ IT")
        bookIndex.readStatus = true;
    }
}

//Function name is not good
function presentInfo(author,title,numberOfPages,readStatus)
{
    alert("The Author is: " + author + "\nThe Title is: " + title + "\n" + "You have Read: " + numberOfPages + " Pages \n" + "and have " + readStatus + " read it before")
}

updateVisualLibrary()