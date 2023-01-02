import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return<>
<Navbar />
 <Component {...pageProps} />
 <Footer />
 </> 
}

export default MyApp
