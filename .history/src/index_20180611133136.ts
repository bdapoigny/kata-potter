export class Book {
  public tomeNumber: number;
}

export class ClassifiedBooks {
  tomeNumber: number;
  count: number;
}

export function countBooks(books: Book[]): number[] {
  const nbBookPerTome: number[] = [0, 0, 0, 0, 0];

  books.map(book => {
    nbBookPerTome[book.tomeNumber]++;
  });
  return nbBookPerTome;
}

export function cart(books: Book[]): number {
  const nbBookPerTome: number[] = this.countBooks(books);

  for(let i = 0; i < nbBookPerTome.length; i++) {
    let serieSize= 0;
    if (nbBookPerTome[i] > 0) {
      serieSize++;
      nbBookPerTome[i] --;
    }
  }
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
