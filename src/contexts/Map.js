import { createContext, useEffect, useState } from "react";

const MapContext = createContext({})

const MapContextProvider = ({ children }) => {
    const [toilets, setToilets] = useState([])
    const [location, setLocation] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
              setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              })
              getToilets(position.coords.latitude, position.coords.longitude)
            },
            () => {
              setLocation({
                lat: 48.8567879,
                lng: 2.3510768
              })
              getToilets(48.8567879, 2.3510768)
            }
          )
    }, [])

    const getToilets = async (lat, lng) => {

        const request = await fetch(`http://localhost:5000/toilets?latitude=${lat}&longitude=${lng}&r=1`);
        const response = await request.json();
        // console.log(response)
        setToilets(response)
        return response;
    };    

    // console.log(location)

    const value = {
        toilets, 
        location, 
        zoom: 15, 
    }

    return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export { MapContext, MapContextProvider }