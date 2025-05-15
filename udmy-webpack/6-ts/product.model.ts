export class Product {
  public ID: string;
  public Description: string;
  public Price: number;

  constructor(id: string, description: string, price: number) {
    this.ID = id;
    this.Description = description;
    this.Price = price;
  }
}