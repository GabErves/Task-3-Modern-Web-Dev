import products from '../utils/products';

const ArrayReduce = () => {
    // const products = [
    //     { id: 1, name: 'Apple iPhone', price: 999, onSale: false },
    //     { id: 2, name: 'Samsung Galaxy S21', price: 799, onSale: true },
    //     { id: 3, name: 'Google Pixel 5', price: 699, onSale: false },
    //     { id: 4, name: 'OnePlus 9 Pro', price: 899, onSale: true },
    //     { id: 5, name: 'AirPods Pro', price: 249, onSale: false },
    //     ];

        const totalPrice = products.reduce((accumulator, product) => {
            return accumulator + product.price;
        }, 0);

        const productNames = products.reduce((accumulator, product, i, products) => {
            return `
                ${accumulator}
                ${i === 0 ? '' : ', '}
                ${i === products.length - 1 ? 'and ' :''}
                ${product.name}`;
        }, '');

        return  <div>
                <p className="text-center">The total cost of all the products is ${totalPrice} dollars.</p>
                <p className="text-center">The products, by the way are <ol>{productNames}</ol></p>
            </div>
    
    }


export default ArrayReduce;