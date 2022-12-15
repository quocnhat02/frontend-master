import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="card">
      <div className="poster">
        <img
          src={
            props.poster_path
              ? API_IMG + props.poster_path
              : 'https://plus.unsplash.com/premium_photo-1670917243492-712ce3634244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          alt={props.title}
        />
      </div>

      <div className="info">
        <p className="title">{props.title}</p>
        <p className="vote">{props.vote_average}</p>
      </div>

      <div className="overview">
        <h2 className="title_overview">Overview</h2>
        <h3>{props.overview}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
