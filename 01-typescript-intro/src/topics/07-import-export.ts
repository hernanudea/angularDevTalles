import { Product, taxCalculator } from "./06-funtion-destructuring-result";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];


const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
});




console.log('Total', total)
console.log('Tax', tax)