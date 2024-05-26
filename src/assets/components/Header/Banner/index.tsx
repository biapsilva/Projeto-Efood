import { ImgBanner } from './styles'

import bannerImg from '../../../images/heroImgPerfil.png'

const Banner = () => (
  <div className="container">
    <ImgBanner style={{ backgroundImage: `url(${bannerImg})` }}>
      <h3>Italiana</h3>
      <h1>La Dolce Vita Trattoria</h1>
    </ImgBanner>
  </div>
)
export default Banner