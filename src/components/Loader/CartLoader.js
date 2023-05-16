import { getShoppingCart } from "../../utilities/fakedb";

const cartLoader = async () => {
    const res = await fetch('http://localhost:5000/products')
    const products = await res.json()

    const storedCart = getShoppingCart()
    const savedCart = []
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd._id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart;

}
export default cartLoader;