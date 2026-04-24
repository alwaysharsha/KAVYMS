import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { X } from 'lucide-react'
import { SHEET_URLS } from '../config/sheets'

const AnnouncementBanner = () => {
  const [messages, setMessages] = useState([])
  const [dismissedMessages, setDismissedMessages] = useState(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(SHEET_URLS.ANNOUNCEMENTS)
      const csvText = await response.text()

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log('Raw announcements data:', results.data)
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          const validMessages = results.data
            .filter(row => {
              const messageText = row['Notification Message'] || row.Message || ''
              if (!messageText || !messageText.trim()) return false

              const order = parseInt(row.Order)
              if (isNaN(order) || order < 1 || order > 4) return false

              if (row.Expiry && row.Expiry.trim()) {
                const expiryDate = new Date(row.Expiry)
                expiryDate.setHours(0, 0, 0, 0)
                if (today > expiryDate) return false
              }

              return true
            })
            .sort((a, b) => {
              const orderA = parseInt(a.Order) || 999
              const orderB = parseInt(b.Order) || 999
              return orderA - orderB
            })
            .map((row, index) => ({
              id: index,
              message: (row['Notification Message'] || row.Message || '').trim(),
              order: parseInt(row.Order),
              dismissible: (row.Dismiss || '').toLowerCase() === 'yes',
            }))
            // Keep only first message for each order
            .reduce((acc, msg) => {
              const orderExists = acc.some(m => m.order === msg.order)
              if (!orderExists) {
                acc.push(msg)
              }
              return acc
            }, [])

          console.log('Valid announcements:', validMessages)
          setMessages(validMessages)
          setLoading(false)
        },
        error: (error) => {
          console.error('Failed to load announcements:', error)
          setLoading(false)
        }
      })
    } catch (err) {
      console.error('Fetch error for announcements:', err)
      setLoading(false)
    }
  }

  const handleDismiss = (messageId) => {
    setDismissedMessages(prev => new Set([...prev, messageId]))
  }

  const getColorClasses = (order) => {
    const colors = {
      1: 'bg-primary-600 hover:bg-primary-700',
      2: 'bg-primary-500 hover:bg-primary-600',
      3: 'bg-secondary-600 hover:bg-secondary-700',
      4: 'bg-secondary-500 hover:bg-secondary-600'
    }
    return colors[order] || colors[1]
  }

  const visibleMessages = messages.filter(msg => !dismissedMessages.has(msg.id))

  if (visibleMessages.length === 0 && !loading) {
    console.warn('No announcements to display')
    return null
  }

  return (
    <div className="space-y-2 w-full px-4 py-3">
      {visibleMessages.map((msg) => (
        <div
          key={msg.id}
          className={`w-full ${getColorClasses(msg.order)} text-white px-5 py-3.5 flex items-center justify-center gap-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
        >
          <p className="text-center text-sm font-semibold flex-1">{msg.message}</p>
          {msg.dismissible && (
            <button
              onClick={() => handleDismiss(msg.id)}
              className="flex-shrink-0 p-1.5 rounded-md transition-all duration-200 opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-20"
              aria-label="Dismiss message"
            >
              <X size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default AnnouncementBanner
