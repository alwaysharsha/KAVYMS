import Navbar from './Navbar'
import Footer from './Footer'
import AnnouncementBanner from './AnnouncementBanner'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-background-light via-white to-background-light">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-10"
        style={{
          backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2DOIP.-S0UYEy4HqUgyM9vmXiYzwHaF3%3Fpid%3DApi&f=1&ipt=7bc3305c152a4e0105fbde68dbac5e57bd4b24319872991d32966c7c46c1ea01&ipo=images')`,
          filter: 'grayscale(30%) blur(1px)',
        }}
      />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
