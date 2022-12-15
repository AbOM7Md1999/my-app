import { createContext, useState } from "react";

const Fav = createContext({
  favorites: [],
  totalfavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavContextProvider(props) {
    const [userfav,setuserfav] = useState([]);

    function addfav(Fav){
        setuserfav((prevuserfav) => {
            return prevuserfav.concat(Fav)});
    }

    function remfav(Favid){
        setuserfav((prevuserfav) => {
            return prevuserfav.filter(meetup => meetup.id !== Favid)});

    }

    function itemisfav(Favid){
        
            return userfav.some(meetup => meetup.id === Favid);

    }

    const context ={
        favorites: userfav,
        totalfavorites: userfav.length,
        addFavorite: addfav,
        removeFavorite: remfav,
        itemIsFavorite: itemisfav
    };
  
  return <FavContextProvider value = {context}>
      {props.children}
      </FavContextProvider>;
}

export default Fav;