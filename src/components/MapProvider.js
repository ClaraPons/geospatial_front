import { useContext, useEffect } from 'react'
import { MapContext } from '../contexts/Map'

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { Icon } from 'leaflet'

// import MapContent from './MapContent'

import 'leaflet/dist/leaflet.css'

const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconSize: [20, 35]
})

const Map = () => {
    const {toilets, location, zoom} = useContext(MapContext)

    if (!location) {
        return <p>loading</p>
    }
    return(
        <>
            {location ? (
                <MapContainer center={[location.lat, location.lng]} zoom={zoom} style={{height: '100vh'}}>
                        <TileLayer 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        {/* {toilets.map(toilet => {
                        return (
                            <Marker
                            icon={markerIcon}
                            >
                            <Tooltip>
                                <p>{toilet.address}</p>
                            </Tooltip>
                            </Marker>
                        )
                        })} */}
                </MapContainer>
            ) : (
                <>Pas de location</>
            )}
        </>
    )
}

export default Map