import classes from "./MeetupItem.module.css";
import Card from "./Card";
import { useContext } from 'react';
import Fav from "./favorites-context";
function MeetUpItem(props) {
  const Favx = useContext(Fav);

const Itemf = Favx.itemIsFavorite(props.id);
  function Changefav(){
    if(Itemf){
      Favx.removeFavorite(props.id)
    }else{
      Favx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }

  }
  return (
    <li className= {classes.item}>
      <Card>
      <div className= {classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className= {classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>

      <div className= {classes.actions}>  
        <button onClick={Changefav}>{Itemf ? 'Remove from Favorites' : 'To Favorites'}</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
