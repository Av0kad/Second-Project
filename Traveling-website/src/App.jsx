import Nav from './Components/Nav/Nav'
import './App.css'
import Header from './Components/Header/Header'
import Memories from './Components/Memories/Memories'
import Trips from './Components/Trips/Trips'
import Search from './Components/Search/Search'
import About from './Components/About/About'
import Testimonial from './Components/Testimonial/Testimonial'
import Destination from './Components/Destination/Destination'
import CTA from './Components/CallToAction/CTA'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div className='main'>
        <Nav />
        <Header />
        <Memories />
      </div>
        <Trips />
        <Search/>
        <div className='main'>
        <About/>
        </div>
        <Testimonial/>
        <Destination/>
        <div className="main">
        <CTA/>
        </div>
        <Footer/>

    </>
  )
}

export default App
