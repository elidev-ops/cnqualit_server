import { Product } from "../entities/Products";

export default function serializeUrl(data: Product[]) {
  const SerializedProducts = data.map(product => {
    return {
      ...product,
      image: `http://192.168.1.106:3001/uploads/${product.image}`
    }
  });
  return SerializedProducts;
}