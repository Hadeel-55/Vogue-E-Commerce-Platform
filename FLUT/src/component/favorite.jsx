import {useContext} from 'react';
import FavoriteCart from '../component/FavoriteCart';
import { FavoriteContext } from '../context/FavoriteContext';

const Favorite =()=>{
    const {favorites }=useContext(FavoriteContext);
return(
    <div>
{favorites.map((favorite)=>(
    <FavoriteCart key={favorite.id} favoriteItem={favorite} />
))}
    </div>
)

}
export default Favorite;