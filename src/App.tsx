import { Hero } from './components/Hero'
import { InvitationMessage } from './components/InvitationMessage'
import { PhotoGallery } from './components/PhotoGallery'
import { CoupleInfo } from './components/CoupleInfo'
import { Countdown } from './components/Countdown'
import { Location } from './components/Location'
import { AccountInfo } from './components/AccountInfo'
import { ShareFooter } from './components/ShareFooter'
import './App.css'

function App() {
  return (
    <div className="invitation">
      <Hero />
      <main className="invitation-main">
        <InvitationMessage />
        <PhotoGallery />
        <Countdown />
        <CoupleInfo />
        <Location />
        <AccountInfo />
      </main>
      <ShareFooter />
    </div>
  )
}

export default App
