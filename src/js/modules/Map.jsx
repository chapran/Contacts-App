import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

let Map = ({ latitude, longitude, onDragEnd }) => (
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{
      lat: +latitude,
      lng: +longitude
    }}
  >
    <Marker position={{
      lat: +latitude,
      lng: +longitude
    }}
      draggable={!!onDragEnd}
      onDragEnd={onDragEnd}
    />
  </GoogleMap>
);


Map = withScriptjs(withGoogleMap(Map));

Map.defaultProps = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2lvjWXtbEyh9iYZi5j9i0DuQe2oPyT-U&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
}

export default Map;
