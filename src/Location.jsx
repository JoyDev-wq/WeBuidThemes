import React from 'react'
import {GoogleMap, LoadScript} from "@react-google-maps/api"


const style = {
  width:"100%",
  height:"300px"
}
const center = {
    lat: 22.572645,
    lng: 88.363892
}
const Location = () => { 

  return (
    <LoadScript googleMapsApiKey='AIzaSyAu7oZveTKlSrft7CU148ur2hjfl0aRtHM'>
        <GoogleMap mapContainerStyle={style}
        center={center}
        zoom={14}
        >
        </GoogleMap>
    </LoadScript>
  );
};

export default Location;
// AIzaSyAu7oZveTKlSrft7CU148ur2hjfl0aRtHM