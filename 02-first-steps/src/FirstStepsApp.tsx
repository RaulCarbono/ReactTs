import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemInCart: ItemInCart[] = [
    {productName: 'xbox serie x', quantity:2},
    {productName: 'play 5', quantity:1},
    {productName: 'nintendo ds', quantity:4},
    {productName: 'super smash', quantity:1}
]

export function FirstStepsApp() {
    return(
        <>
        <h1>Carrito de compras </h1>
            {itemInCart.map(({productName, quantity}) => (
                <ItemCounter key={productName} name={productName} quantity={quantity}/>
            ))}
        </>
    )
}