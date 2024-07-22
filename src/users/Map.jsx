import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const FooMap = () => {
    const map = useMap();
    return null;
}


const Map = () => {
    const position = [34.840, -82.384]

    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> // console.log('map')
    )
};

export default Map