console.log('DESESTRUCTURACIÓN DE ARGUMENTOS');

export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationOption {
    tax: number;
    products: Product[];
}

export function taxCalculator(options: TaxCalculationOption): [number, number] {
    // function taxCalculator({ tax, products }: TaxCalculationOption): [number, number] {
    const { tax, products } = options;

    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculator({
    products: shoppingCart,
    tax // equivale a tax: tax, cuando el nombre de la variable es identico
});



console.log('Total', total)
console.log('Tax', totalTax)

export { }