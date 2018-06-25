import { Book, cart } from ".";

describe("Cart", () => {
  let books: Book[] = new Array<Book>();
  
  beforeEach(() => {
    books = new Array<Book>();
  });

  function addBook(tomeNumber: number) {
    const book: Book = new Book();
    book.tomeNumber = tomeNumber;
    books.push(book);
  }

  test("should be 8euros", () => {
    addBook(0);
    expect(cart(books)).toBe(8);
  });
  
  test("should be 15.2euros", () => {
    addBook(0);
    addBook(1);
    expect(cart(books)).toBe(15.2);
  });

  test("should be 21.6 euros", () => {
    addBook(0);
    addBook(1);
    addBook(2);
    expect(cart(books)).toBe(21.6);
  });

  test("should be 16euros", () => {
    addBook(0);
    addBook(0);
    expect(cart(books)).toBe(16);
  });

  test("should be 25.6euros", () => {
    addBook(0);
    addBook(1);
    addBook(2);
    addBook(3);
    expect(cart(books)).toBe(25.6);
  });

  test("should be 33.6euros", () => {
    addBook(0);
    addBook(0);
    addBook(1);
    addBook(2);
    addBook(3);
    expect(cart(books)).toBe(33.6);
  });
  
  test("should be 30euros", () => {
    addBook(0);
    addBook(1);
    addBook(2);
    addBook(3);
    addBook(4);
    expect(cart(books)).toBe(30);
  });

  test("should be 15.2euros", () => {
    addBook(0);
    addBook(1);
    addBook(0);
    addBook(1);

    expect(cart(books)).toBe(15.2);
  });

});
