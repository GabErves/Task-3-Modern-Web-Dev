
import products from '../utils/products';
import '../css/card.css';



const ArrayMap = () => {
    
    const ProductNames = products.map(function(item){
        return item.name + ", ";
    });

    return <div>
        <p className='text-center'>Product names: {ProductNames}</p>
    </div>
}
export default ArrayMap;