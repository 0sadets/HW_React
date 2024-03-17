import {Link} from 'react-router-dom';
import '../App.css';
export default function Menu()
{
    return(
        <div className='nav'>
            <nav>
                <Link  to="/ItemList">Каталог</Link>
                <Link  to="/Basket">Корзина</Link>
            </nav>
        </div>
    )
}