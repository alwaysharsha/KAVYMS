import { MapPin, Navigation } from 'lucide-react'

const TempleCard = ({ temple }) => {
  const openInMaps = () => {
    if (temple.gps) {
      const [lat, lng] = temple.gps.split(',').map(coord => coord.trim())
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank')
    }
  }

  return (
    <div className="card hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {temple.country}
        </div>
        {temple.gps && (
          <button
            onClick={openInMaps}
            className="text-secondary hover:text-primary transition-colors"
            title="Open in Google Maps"
          >
            <Navigation size={20} />
          </button>
        )}
      </div>

      <h3 className="text-xl font-bold text-secondary mb-2">
        {temple.locality || 'Temple Location'}
      </h3>

      <div className="space-y-2 text-gray-700">
        {temple.state && (
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
            <div>
              <span className="font-semibold">State:</span> {temple.state}
            </div>
          </div>
        )}

        {temple.district && (
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
            <div>
              <span className="font-semibold">District:</span> {temple.district}
            </div>
          </div>
        )}

        {temple.address && (
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
            <div>
              <span className="font-semibold">Address:</span> {temple.address}
            </div>
          </div>
        )}

        {temple.gps && (
          <div className="text-sm text-gray-500 mt-3 pt-3 border-t border-gray-200">
            <span className="font-semibold">GPS:</span> {temple.gps}
          </div>
        )}
      </div>

      {temple.gps && (
        <button
          onClick={openInMaps}
          className="w-full mt-4 bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          View on Map
        </button>
      )}
    </div>
  )
}

export default TempleCard
