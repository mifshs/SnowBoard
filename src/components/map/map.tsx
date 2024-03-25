import './map.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon1 from '../../img/map_img/icon1.png';
import icon2 from '../../img/map_img/icon2.png';
import icon3 from '../../img/map_img/icon3.png';

const Map: React.FC = () => {
  const coordinates: { [key: string]: [number, number] } = {
    point1: [55.1653, 61.4306],
    point2: [55.1545, 61.3603],
    point3: [55.1753, 61.4352]
  };

  const customIcon1 = L.icon({
    iconUrl: icon1,
    iconSize: [30, 30],
  });

  const customIcon2 = L.icon({
    iconUrl: icon2,
    iconSize: [30, 30],
  });

  const customIcon3 = L.icon({
    iconUrl: icon3,
    iconSize: [30, 30],
  });

  return (
    <div className="mapp">
      <div className="MapContainer">
        <MapContainer
          center={coordinates['point1']}
          zoom={12}
          zoomControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Object.entries(coordinates).map(([point, coord], index) => (
            <Marker key={index} position={coord} icon={index === 0 ? customIcon1 : index === 1 ? customIcon2 : customIcon3}>
              <Popup>{point}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
            <div className="map_element">
                <div className="up_element">
                  Location of our Hotelos
                </div>
                <div className="und_element">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                </div>
                    <div className="form">
                      <input className='input' type="email" placeholder='Enter you email' />
                      <button className='button'>Contact</button>
                    </div>
            </div>
    </div>
  );
};

export default Map;