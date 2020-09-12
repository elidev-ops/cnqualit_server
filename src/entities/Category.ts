class Category {
  public id!: number;
  public name!: string;
  public image!: string;

  constructor(props: Category) {
    Object.assign(this, props);
  }
}

export { Category };