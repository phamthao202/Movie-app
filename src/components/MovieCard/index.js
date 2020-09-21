import React from "react";
import { Card, Button, Badge, Modal } from "react-bootstrap";
import YouTube from "@u-wave/react-youtube";
const MovieCard = ({ movie, genreList, handleShow, handleClose, show, trailerShow,trailerKey }) => {
  if (genreList == null || genreList.length < 1) return <div>loading</div>;

  return (
    <div>
      <Card style={{ width: "18rem", height: "42rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.vote_average}</Card.Text>
          <Card.Text>
            {movie.genre_ids.map((id) => {
              return (
                <Badge variant="warning" className="m-1">
                  {genreList.find((item) => item.id == id).name}
                </Badge>
              );
            })}
          </Card.Text>
          <Button variant="primary" onClick={()=>trailerShow(movie.id) }>
            Trailer
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <YouTube video={trailerKey} autoplay />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
