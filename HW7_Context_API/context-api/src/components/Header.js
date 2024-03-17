import { useContext } from "react";
import { ItemContext } from "../contexts/item-context";
import Menu from "./Menu";
export default function Header()
{
    const { isChosedItems } = useContext(ItemContext);
    console.log(isChosedItems.length)
    return(
        <div className="header">
            <h2>Кількість товарів в корзині: {isChosedItems.length}</h2>
            <Menu/>
        </div>
    );
}