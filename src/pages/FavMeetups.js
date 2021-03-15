import React, { useContext  } from "react";
import MeetupList from '../components/MeetupList'

import FavoritesContext from '../store/favorites-context'

export default function FavMeetups() {
  const favs = useContext(FavoritesContext)
  

  return (
    <section>
      <h1>My Favorite Spots</h1>
      <MeetupList data={favs.favorites}/>
    </section>
  );
}
