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

export function nbSeries(nbBookPerTome: number[]): number{
  let nbSerie = 0;
  for (let i = 0; i < nbBookPerTome.length; i++) {
    nbSerie = nbBookPerTome[i] > nbSerie ? nbBookPerTome[i] : nbSerie;
  }
  return nbSerie;
}

export function getReductionForSerie(nbBookPerTome: number[], nbSeries: number, iteration: number): number {
  const reducs = [1, 0.95, 0.9];
  let serieSize = 0;
  const unitBookPrice = 8;

  for (let i = 0; i < nbBookPerTome.length; i++) {
    if (nbBookPerTome[i] - iteration > 0) {
      serieSize++;
    }
  }
  return serieSize * reducs[serieSize] * unitBookPrice;
}

export function cart(books: Book[]): number {
  const nbBookPerTome: number[] = this.countBooks(books);
  let price = 0; 

  const nbSeries = this.nbSeries(nbBookPerTome);
  for (let i = 0; i < nbSeries; i++){
    price += getReductionForSerie(nbBookPerTome, nbSeries, i);
  }


  return price;

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
