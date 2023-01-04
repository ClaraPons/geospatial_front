import { MapContextProvider } from './contexts/Map'

import MapProvider from './components/MapProvider'

const App = () => {
  return (
    <MapContextProvider>
        <MapProvider />
    </MapContextProvider>
  )
}

export default App;