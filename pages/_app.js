import Navbar from '../components/Navbar'
import Footer from './Footer'


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return<>
<Navbar />
 <Component {...pageProps} />

 

 </> 
}

export default MyApp
