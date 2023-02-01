class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getAgeInYears() {
    const now = new Date();
    return now.getFullYear() - this.year;
  }
}

export default Book;
