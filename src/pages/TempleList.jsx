import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import TempleFilters from '../components/TempleFilters'
import TempleCard from '../components/TempleCard'
import TempleMap from '../components/TempleMap'
import { MapIcon, List, Loader2 } from 'lucide-react'
import { SHEET_URLS } from '../config/sheets'

const TempleList = () => {
  const [temples, setTemples] = useState([])
  const [filteredTemples, setFilteredTemples] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [viewMode, setViewMode] = useState('list')
  const [filters, setFilters] = useState({
    country: '',
    state: '',
    district: '',
    locality: '',
    search: ''
  })

  useEffect(() => {
    fetchTempleData()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [temples, filters])

  const fetchTempleData = async () => {
    try {
      setLoading(true)
      const response = await fetch(SHEET_URLS.TEMPLES)
      const csvText = await response.text()
      
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const processedData = results.data.map((row, index) => ({
            id: index,
            country: row.Country || '',
            state: row.State || '',
            district: row.District || '',
            locality: row.Locality || '',
            address: row.Address || '',
            gps: row['GPS Co-ordinates'] || ''
          }))
          setTemples(processedData)
          setFilteredTemples(processedData)
          setLoading(false)
        },
        error: (error) => {
          setError('Failed to load temple data. Please try again later.')
          setLoading(false)
          console.error('CSV parsing error:', error)
        }
      })
    } catch (err) {
      setError('Failed to fetch temple data. Please check your internet connection.')
      setLoading(false)
      console.error('Fetch error:', err)
    }
  }

  const applyFilters = () => {
    let filtered = temples

    if (filters.country) {
      filtered = filtered.filter(temple => 
        temple.country.toLowerCase().includes(filters.country.toLowerCase())
      )
    }

    if (filters.state) {
      filtered = filtered.filter(temple => 
        temple.state.toLowerCase().includes(filters.state.toLowerCase())
      )
    }

    if (filters.district) {
      filtered = filtered.filter(temple => 
        temple.district.toLowerCase().includes(filters.district.toLowerCase())
      )
    }

    if (filters.locality) {
      filtered = filtered.filter(temple => 
        temple.locality.toLowerCase().includes(filters.locality.toLowerCase())
      )
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(temple =>
        temple.country.toLowerCase().includes(searchLower) ||
        temple.state.toLowerCase().includes(searchLower) ||
        temple.district.toLowerCase().includes(searchLower) ||
        temple.locality.toLowerCase().includes(searchLower) ||
        temple.address.toLowerCase().includes(searchLower)
      )
    }

    setFilteredTemples(filtered)
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const resetFilters = () => {
    setFilters({
      country: '',
      state: '',
      district: '',
      locality: '',
      search: ''
    })
  }

  const getUniqueValues = (field) => {
    return [...new Set(temples.map(temple => temple[field]).filter(Boolean))].sort()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="animate-spin h-16 w-16 text-primary mx-auto mb-4" />
          <p className="text-xl text-gray-600">Loading temple data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="card bg-red-50 border-2 border-red-300 text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchTempleData}
            className="btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-secondary mb-8">
          KAVYMS Temples Directory
        </h1>

        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              viewMode === 'list'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <List size={20} />
            List View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              viewMode === 'map'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <MapIcon size={20} />
            Map View
          </button>
        </div>

        <TempleFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
          countries={getUniqueValues('country')}
          states={getUniqueValues('state')}
          districts={getUniqueValues('district')}
          localities={getUniqueValues('locality')}
        />

        <div className="mb-6 text-center">
          <p className="text-lg text-gray-600">
            Showing <span className="font-bold text-primary">{filteredTemples.length}</span> of{' '}
            <span className="font-bold text-secondary">{temples.length}</span> temples
          </p>
        </div>

        {viewMode === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemples.length > 0 ? (
              filteredTemples.map((temple) => (
                <TempleCard key={temple.id} temple={temple} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600">No temples found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="btn-primary mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          <TempleMap temples={filteredTemples} />
        )}
      </div>
    </div>
  )
}

export default TempleList
