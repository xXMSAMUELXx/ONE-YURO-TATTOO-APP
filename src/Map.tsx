import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./styles/map-styles.css";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDg7dNuR85i7Iba3Wv5rBo917MqBxDaXoY",
  });

  if (!isLoaded) return <div>Is Loading...</div>;

  return <Map />;
}

const center = { lat: 44.25507, lng: -88.40491 };

function Map() {
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
