
  function formatString(input: string, toUpper: boolean = true): string {
    console.log  (toUpper ? input.toUpperCase() : input.toLowerCase());
  }



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  console.log(items.filter(item => item.rating >= 4));
}


const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];




function concatenateArrays<T>(...arrays: T[][]): T[] {
  console.log(arrays.flat());
}



class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    console.log(`Model: ${this.model}`);
  }
}




function processValue(value: string | number): number {
  console.log(typeof value === "string" ? value.length : value * 2);
}


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  console.log(products.reduce((prev, curr) => (curr.price > prev.price ? curr : prev)));
}


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  console.log(day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday");
}




async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}


