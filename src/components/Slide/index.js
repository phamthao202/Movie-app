import React from "react";
import { Carousel } from "react-bootstrap";
import MovieList from "../MovieList";
export default function Slide({ list }) {
  if (!list || list.length == 0) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280${list[0].backdrop_path}`}
            alt="First slide"
          />
          {console.log(list[0].backdrop_path)}
          <Carousel.Caption>
            <h3>{list[0].title}</h3>
            <p>{list[0].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280${list[1].backdrop_path}`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{list[1].title}</h3>
            <p>{list[1].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280${list[2].backdrop_path}`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{list[2].title}</h3>
            <p>
            {list[2].overview}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
