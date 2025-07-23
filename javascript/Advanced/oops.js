class Book
{
    #_rating;

    constructor(title, author, rating)
    {
        this.title = title;
        this.author = author;
        this.#_rating = rating;
    }

    get rating() {
        return `Rating: ${this.#_rating} stars`;
    }

    set rating(newRating)
    {
        if (newRating >= 1 && newRating <= 5) {
            this.#_rating = newRating;
        } else {
            console.log("Invalid rating! Must be between 1 and 5");
        }
    }

    getDetails()
    {
        console.log(`Title: ${this.title}, Author: ${this.author}, and Rating: ${this.#_rating}`);
        
    }
}

class eBook extends Book
{
    title;
    filesize;

    download()
    {
        console.log(`Downloading ${this.title} of size ${this.filesize} MB`);
    }
}

const book = new Book("Title 1", "Author 1", 5);
book.getDetails();
book.rating = 10;
book.getDetails();

const ebook = new eBook()
ebook.title = "Title 1 of eBook"
ebook.filesize = 10;

ebook.download();
