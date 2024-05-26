import { BrowserRouter } from 'react-router-dom'
import Footer from './assets/components/Footer'
import Rotas from './routes'
import { GlobalCSS } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      {/* <ModalPoupap /> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
