import ItemCard from "./ItemCard";


export default function ItemList({items}){
    
    return(
        <div className='katalog'>
        {items.map((i) => (
            <ItemCard key={i.id} {...i}/>
        ))}
        </div>
    );

}