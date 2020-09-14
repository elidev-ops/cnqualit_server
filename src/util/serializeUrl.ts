import { Product } from "../entities/Products";

export default function serializeUrl(data: Product[]) {
  const SerializedProducts = data.map(product => {
    return {
      ...product,
      image: `http://api.cnquality.com.br/uploads/${product.image}`
    }
  });
  return SerializedProducts;
}
