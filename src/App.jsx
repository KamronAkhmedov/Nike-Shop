import Header from './components/Header'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Shop from './components/Shop'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className="bg-white text-tertiary overflow-x-hidden ">
      <Header />
      <Nav />
      <Hero />
      <Featured />
      <About />
      <Shop />
      <Subscription />
      <Footer />
    </main>
  )
}

export default App
