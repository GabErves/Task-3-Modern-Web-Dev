// import Data from "../data";

import products from '../utils/products';



const ArraySort = () => {
    products.sort((a,b)=> a.price - b.price);
    const Names = products.map(function(item){
        return item.name + ", ";
    });

    return <div>
        <p className="text-center">Products sorted by price: <ol>{Names}</ol></p>
    </div>



}
export default ArraySort;