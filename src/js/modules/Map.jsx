import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      location: undefined
    }
    this.toggleLocationDetails = this.toggleLocationDetails.bind(this);
  }

  toggleLocationDetails() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  getLocationData(lat, lng) {
    const latlng = new google.maps.LatLng(lat, lng);
    const geocoder = new google.maps.Geocoder();
    const geocodePromise = new Promise((resolve, reject) => {
      geocoder.geocode({ 'latLng': latlng }, (results, status) => {
        if (status == 'OK') {
          resolve(results[2].formatted_address)
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
          resolve(undefined);
        }
      });
    })

    geocodePromise.then(location => {
      this.setState({
        location
      })
    })
  }

  // TODO: bug with editing page reload
  componentDidMount() {
    this.getLocationData(this.props.latitude, this.props.longitude);
  }

  componentWillReceiveProps(nextProps) {
    this.getLocationData(nextProps.latitude, nextProps.longitude);
  }

  render() {
    const { latitude, longitude, onDragEnd } = this.props;
    return (
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{
          lat: +latitude,
          lng: +longitude
        }}
      >
        <Marker
          position={{
            lat: +latitude,
            lng: +longitude
          }}
          draggable={!!onDragEnd}
          onDragEnd={onDragEnd}
          onClick={this.toggleLocationDetails}
        >
          {this.state.isOpen &&
            <InfoWindow onCloseClick={this.toggleLocationDetails}>
              <h3>{this.state.location || 'Sorry, location not found.'}</h3>
            </InfoWindow>}
        </Marker>
      </GoogleMap>
    );
  }
}


Map = withScriptjs(withGoogleMap(Map));

Map.defaultProps = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmx6KYQHUd4rhuWkAiJIEPgOsdzNcDhy4&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
}

export default Map;
