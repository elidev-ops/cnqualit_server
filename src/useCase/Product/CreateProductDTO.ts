export interface ICreateProductRequestDTO {
  id: number;
  name: string;
  image: string;
  available: boolean;
  category_id: number;
}