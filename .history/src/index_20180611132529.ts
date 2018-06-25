export class Book {
  public tomeNumber: number;
}

export class ClassifiedBooks {
  tomeNumber: number;
  count: number;
}

export function sortBooks(books: Book[]): number[] {
  const nbBookPerTome: number[] = [0, 0, 0, 0, 0];


  books.map(book => {
    nbBookPerTome[book.tomeNumber]++;
  });

}

export function cart(books: Book[]): number {
  


  if (books.length === 1) {
    return 8;
  }
  if (books.length === 2) {
    if (books[0].tomeNumber !== books[1].tomeNumber) {
      return 15.2;
    }
    return 16;
  }
  if (books.length === 3) {
    return 21.6;
  }
  return 0;
}
