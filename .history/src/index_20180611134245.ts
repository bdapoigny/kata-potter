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
  const reducs = [1, 0.95, 0.9];
  let serieSize = 0;
  const unitBookPrice = 8;

  do {
    for (let i = 0; i < nbBookPerTome.length; i++) {
      if (nbBookPerTome[i] > 0) {
        serieSize++;
        nbBookPerTome[i]--;
      }
    }
    if (serieSize === 0) {
      return 0;
    }
  } while (serieSize > 1);

  return serieSize * reducs[serieSize-1] * unitBookPrice;

  // if (books.length === 1) {
  //   return 8;
  // }
  // if (books.length === 2) {
  //   if (books[0].tomeNumber !== books[1].tomeNumber) {
  //     return 15.2;
  //   }
  //   return 16;
  // }
  // if (books.length === 3) {
  //   return 21.6;
  // }
  // return 0;
}
