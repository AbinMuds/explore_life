import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/The_Empire_State_Building_%2812%29.jpg/449px-The_Empire_State_Building_%2812%29.jpg?20200421163444",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/The_Empire_State_Building_%2812%29.jpg/449px-The_Empire_State_Building_%2812%29.jpg?20200421163444",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "u2",
  },
];
function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(
    (places) => places.creator === userId
  );
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
