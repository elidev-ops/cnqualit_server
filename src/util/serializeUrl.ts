import { Product } from "../entities/Products";

export default function serializeUrl(data: Product[]) {
  const SerializedProducts = data.map(product => {
    return {
      ...product,
      image: `http://localhost:3001/uploads/${product.image}`
    }
  });
  return SerializedProducts;
}
