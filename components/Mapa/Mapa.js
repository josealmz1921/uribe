import { useState } from 'react';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const Mapa = () => {

  const containerStyle = {
    // width: '100%',
    height: '40vh'
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyDRd9OVrtU1vfI_Ezcrj5Ced4NKns3BJvo"
  // })

  const center = {
    lat: 19.3939754, lng: -99.1748682
  };

  const defaultCenter = {
    lat: 37.772,
    lng: -122.214
  }

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  const [zoom] = useState(15);


  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDRd9OVrtU1vfI_Ezcrj5Ced4NKns3BJvo">
          <GoogleMap
            id="map"
            center={center}
            zoom={zoom}
            mapContainerStyle={containerStyle}
          >
            {/*  Marker component */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
    </>
  );
}

export default Mapa;