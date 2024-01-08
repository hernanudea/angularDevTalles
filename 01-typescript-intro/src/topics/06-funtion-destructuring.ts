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

export function taxCalculator(options: TaxCalculationOption): number[] {

    let total = 0;
    options.products.forEach(p => {
        total += p.price;
    })
    return [total, total * options.tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculator({
    products: shoppingCart,
    tax // equivale a tax: tax, cuando el nombre de la variable es identico
});



console.log('Total', result[0])
console.log('Tax', result[1])

// export { }