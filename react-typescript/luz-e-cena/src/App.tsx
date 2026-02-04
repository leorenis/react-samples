import Header from './components/Header'
import Banner from './components/Banner'
import MovieSection from './components/MovieSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


function App() {

  return (
  <>
    <Header />
    <Banner src='./banner.png' alt='Onde a realidade encontra a fantasia!' />
    <MovieSection />
    <Banner src="./combo.png" alt="Combo" />
    <Newsletter />
    <Footer />
  </>
  )
}

export default App
