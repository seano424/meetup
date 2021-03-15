import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import FavoritesContext from "../store/favorites-context";

export default function MeetupItem(props) {
  const favCntx = useContext(FavoritesContext);
  const itemIsFav = favCntx.itemIsFavorite(props.data.id);

  const favoritesHandler = () => {
    if (itemIsFav) {
      favCntx.removeFavorite(props.data.id);
    } else {
      favCntx.addFavorite({
        id: props.data.id,
        title: props.data.title,
        url: props.data.url,
      });
    }
    console.log(itemIsFav);
  };

  return (
    <>
      <Card style={{width: '22rem'}} className="bg-dark text-white" key={props.data.id}>
        <Card.Img
          style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "left center",
          }}
          src={props.data.url}
          alt={props.data.title}
          rounded="true"
        />
        <Card.ImgOverlay>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div className="mb-3" onClick={favoritesHandler}>
        {itemIsFav ? (
          <FavoriteSharpIcon style={{ color: "red" }} />
          ) : (
          <FavoriteBorderIcon />
        )}
      </div>
    </>
  );
}
