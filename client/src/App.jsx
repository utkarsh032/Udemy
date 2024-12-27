import './App.css'
import BonusBanner from './components/BonusBanner'
import Navbar from './components/Navbar'
import { NavMenu } from './components/NavMenu'
import OfferCard from './components/OfferCard'

function App() {
  return (
    <>
      <OfferCard />
      <Navbar />
      <NavMenu />
      <BonusBanner />
      <h1>Udemy</h1>
    </>
  )
}

export default App
