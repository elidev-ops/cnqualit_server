import { Product } from "../entities/Products";

export default function serializeUrl(data: Product[]) {
  const SerializedProducts = data.map(product => {
    return {
      ...product,
      image: `https://api-cnquality-com-br.umbler.net/uploads/${product.image}`
    }
  });
  return SerializedProducts;
}
