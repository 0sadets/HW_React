import { useContext } from "react";
import { ItemContext } from "../contexts/item-context";
import ItemList from "./ItemList";

export default function Basket(){
    const { isChosedItems } = useContext(ItemContext);
    return(
        <div className="basket">
            <h2>Моя корзина: </h2>
            <ItemList items={isChosedItems}/>
        </div>
    )
}