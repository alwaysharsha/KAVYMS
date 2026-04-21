import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const TempleMap = ({ temples }) => {
  const mapRef = useRef(null)

  const templesWithCoords = temples.filter(temple => {
    if (!temple.gps) return false
    const coords = temple.gps.split(',')
    return coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])
  })

  const center = templesWithCoords.length > 0
    ? templesWithCoords[0].gps.split(',').map(coord => parseFloat(coord.trim()))
    : [20.5937, 78.9629]

  useEffect(() => {
    if (mapRef.current && templesWithCoords.length > 0) {
      const bounds = templesWithCoords.map(temple => {
        const [lat, lng] = temple.gps.split(',').map(coord => parseFloat(coord.trim()))
        return [lat, lng]
      })
      
      if (bounds.length > 1) {
        mapRef.current.fitBounds(bounds, { padding: [50, 50] })
      }
    }
  }, [templesWithCoords])

  if (templesWithCoords.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-xl text-gray-600">
          No temples with GPS coordinates found for the selected filters.
        </p>
        <p className="text-gray-500 mt-2">
          Try adjusting your filters or switch to List View.
        </p>
      </div>
    )
  }

  return (
    <div className="card p-0 overflow-hidden" style={{ height: '600px' }}>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {templesWithCoords.map((temple) => {
          const [lat, lng] = temple.gps.split(',').map(coord => parseFloat(coord.trim()))
          
          return (
            <Marker key={temple.id} position={[lat, lng]}>
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-lg text-secondary mb-2">
                    {temple.locality || 'Temple Location'}
                  </h3>
                  {temple.state && (
                    <p className="text-sm">
                      <span className="font-semibold">State:</span> {temple.state}
                    </p>
                  )}
                  {temple.district && (
                    <p className="text-sm">
                      <span className="font-semibold">District:</span> {temple.district}
                    </p>
                  )}
                  {temple.country && (
                    <p className="text-sm">
                      <span className="font-semibold">Country:</span> {temple.country}
                    </p>
                  )}
                  {temple.address && (
                    <p className="text-sm mt-2">
                      <span className="font-semibold">Address:</span> {temple.address}
                    </p>
                  )}
                  <a
                    href={`https://www.google.com/maps?q=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary-light transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default TempleMap
