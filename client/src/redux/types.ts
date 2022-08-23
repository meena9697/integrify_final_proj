export type AppState = {
  productsData: {
    productsData: Products[];
    error: null | string;
    loading: boolean;
  };
}
  export type Products= {
    brand: number
    name: string
    price: string
    image_link: string
    description: string
    product_type: string
  }
