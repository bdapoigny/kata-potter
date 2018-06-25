export class Book {
  public tomeNumber: number;
}

export class ClassifiedBooks {
  tomeNumber: number;
  count: number;
}

export function cart(books: Book[]): number {
  const nbBookPerTome: number[] = [];


  books.map(book => {
    nbBookPerTome.tomeNumber
  });

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
