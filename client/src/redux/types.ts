export type AppState = {
  productsData: {
    productsData: Products[];
    error: null | string;
    loading: boolean;
  };
}
  export type Products= {
    brand: string
    name: string
    price: string
    image_link: string
    description: string
    product_type: string
    price_sign: string
  }
