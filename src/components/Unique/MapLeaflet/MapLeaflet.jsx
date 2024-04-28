import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import locationIcon from "../../../assets/logos/location.png";

const MapLeaflet = () => {
  const position = [35.5881, -82.5515];
  const customIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [60, 60],
  });

  return (
    <MapContainer
      className="h-40 rounded-lg"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon} >
        <Popup>
        223 Craftsman Lane, Asheville, North Carolina
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
