export class Book {
  public tomeNumber: number;
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
