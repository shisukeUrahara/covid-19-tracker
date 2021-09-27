import { useEffect } from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
// import { showDataOnMap } from "./util";

function Map({ center, zoom }) {
  useEffect(() => {}, [center[0], zoom]);
  console.log("**@ map component , center is , ", center, " zoom is , ", zoom);
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {showDataOnMap(countries, casesType)} */}
      </LeafletMap>
    </div>
  );
}

export default Map;
