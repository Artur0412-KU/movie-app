import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import AddFavourite from './AddFavourite';

export default function MovieList(props) {
  const imageStyle = {
    width: 200,
    height: 300,
    objectFit: 'cover',
  }

  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <Card key={index} cover={<img src={movie.Poster} style={imageStyle} alt={movie.Title} />} style = {{width: 200}}>
          <Meta title={movie.Title} description={movie.Year} />
          <FavouriteComponent onClick={() => props.handleFavouritesClick(movie)} />
        </Card>
      ))}
    </>
  );
}

