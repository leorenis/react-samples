import { Product } from './product.model';

const productOne = new Product('fa43e-ab3c2', 'the best', 500);
const jsonProduct = JSON.stringify(productOne);
console.log(jsonProduct);