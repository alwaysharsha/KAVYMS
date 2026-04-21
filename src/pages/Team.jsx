import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { User, Loader2, ChevronDown, ChevronUp } from 'lucide-react'

const convertToDirectImageUrl = (url) => {
  if (!url) return ''
  
  const trimmedUrl = url.trim()
  
  // Google Drive URL conversion
  if (trimmedUrl.includes('drive.google.com')) {
    let fileId = null
    
    // Format 1: https://drive.google.com/file/d/FILE_ID/view
    const match1 = trimmedUrl.match(/\/file\/d\/([^\/\?]+)/)
    if (match1) {
      fileId = match1[1]
    }
    
    // Format 2: https://drive.google.com/open?id=FILE_ID
    if (!fileId) {
      const match2 = trimmedUrl.match(/[?&]id=([^&]+)/)
      if (match2) {
        fileId = match2[1]
      }
    }
    
    // Format 3: Already in uc?export format
    if (!fileId && trimmedUrl.includes('uc?export=view')) {
      return trimmedUrl
    }
    
    if (fileId) {
      // Use Google Drive thumbnail API which works better for embedding
      // This generates a thumbnail that can be embedded without CORS issues
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`
    }
  }
  
  // Return original URL if not Google Drive or already in correct format
  return trimmedUrl
}

const TeamMemberCard = ({ member }) => {
  const [imageError, setImageError] = useState(false)
  const [useIframe, setUseIframe] = useState(false)
  const directImageUrl = convertToDirectImageUrl(member.photoUrl)
  const hasValidPhoto = directImageUrl && directImageUrl.length > 0 && !imageError
  
  // Extract file ID for iframe method
  const fileIdMatch = member.photoUrl?.match(/\/file\/d\/([^\/\?]+)/) || member.photoUrl?.match(/[?&]id=([^&]+)/)
  const fileId = fileIdMatch ? fileIdMatch[1] : null

  return (
    <div className="card text-center hover:shadow-xl transition-shadow duration-200">
      {hasValidPhoto && !useIframe ? (
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src={directImageUrl}
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-4 border-primary"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            onError={() => setUseIframe(true)}
          />
        </div>
      ) : hasValidPhoto && useIframe && fileId ? (
        <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
          <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            className="w-full h-full scale-150"
            style={{ border: 'none', pointerEvents: 'none' }}
            title={member.name}
          />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-primary to-secondary w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
          <User size={64} className="text-white" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-secondary mb-2">
        {member.name}
      </h3>
      <p className="text-lg font-semibold text-primary mb-3">
        {member.role}
      </p>
      {member.description && (
        <p className="text-gray-600">
          {member.description}
        </p>
      )}
      {member.year && !member.currentTeam && (
        <p className="text-sm text-gray-500 mt-2">
          {member.year}
        </p>
      )}
    </div>
  )
}

const Team = () => {
  const [currentTeam, setCurrentTeam] = useState([])
  const [pastTeams, setPastTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showPastTeams, setShowPastTeams] = useState(false)

  const TEAM_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1o7ap8DtkO5SDTEzBp_7hzcW2k1zobTdYWls5coWBeuA/export?format=csv'

  useEffect(() => {
    fetchTeamData()
  }, [])

  const fetchTeamData = async () => {
    try {
      setLoading(true)
      const response = await fetch(TEAM_SHEET_URL)
      const csvText = await response.text()
      
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const processedData = results.data.map((row, index) => {
            const photoUrl = row['Photo URL'] || row.PhotoURL || row['Photo Url'] || row['photo url'] || row.Photo || ''
            return {
              id: index,
              name: row.Name || '',
              role: row.Role || '',
              description: row.Description || '',
              photoUrl: photoUrl.trim(),
              currentTeam: (row['Current Team'] || '').toLowerCase() === 'yes',
              year: row.Year || row.Period || ''
            }
          })

          const current = processedData.filter(member => member.currentTeam)
          const past = processedData.filter(member => !member.currentTeam)
          
          const pastByYear = past.reduce((acc, member) => {
            const year = member.year || 'Unknown Period'
            if (!acc[year]) acc[year] = []
            acc[year].push(member)
            return acc
          }, {})

          setCurrentTeam(current)
          setPastTeams(pastByYear)
          setLoading(false)
        },
        error: (error) => {
          setError('Failed to load team data. Please try again later.')
          setLoading(false)
          console.error('CSV parsing error:', error)
        }
      })
    } catch (err) {
      setError('Failed to fetch team data. Please check your internet connection.')
      setLoading(false)
      console.error('Fetch error:', err)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="animate-spin h-16 w-16 text-primary mx-auto mb-4" />
          <p className="text-xl text-gray-600">Loading team data...</p>
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
            onClick={fetchTeamData}
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
          Our Team
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="card text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our dedicated team of volunteers works tirelessly to serve the KAVYMS community. Each member brings unique skills and unwavering commitment to preserving our heritage and connecting devotees worldwide.
            </p>
          </div>
        </div>

        {currentTeam.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              Current Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {currentTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </>
        )}

        {Object.keys(pastTeams).length > 0 && (
          <div className="max-w-6xl mx-auto mt-12">
            <button
              onClick={() => setShowPastTeams(!showPastTeams)}
              className="w-full card bg-gradient-to-r from-secondary/10 to-primary/10 hover:shadow-lg transition-shadow duration-200 flex items-center justify-between"
            >
              <h2 className="text-3xl font-bold text-secondary">
                Past Teams
              </h2>
              {showPastTeams ? (
                <ChevronUp size={32} className="text-secondary" />
              ) : (
                <ChevronDown size={32} className="text-secondary" />
              )}
            </button>

            {showPastTeams && (
              <div className="mt-8 space-y-12">
                {Object.entries(pastTeams)
                  .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
                  .map(([year, members]) => (
                    <div key={year}>
                      <h3 className="text-2xl font-bold text-center text-primary mb-6">
                        {year}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((member) => (
                          <TeamMemberCard key={member.id} member={member} />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        <div className="max-w-4xl mx-auto mt-12">
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              We welcome volunteers who are passionate about serving the community. If you would like to contribute your time and skills, please reach out to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
