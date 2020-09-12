import filterName  from '../util/filterName';

class Product {
  public id!: number;
  public name!: string;
  public image!: string;
  public available!: boolean;
  public category_id!: number;

  constructor(props: Omit<Product, 'name'>) {
    Object.assign(this, props);
    this.name = filterName(this.name);
  }
}

export { Product };