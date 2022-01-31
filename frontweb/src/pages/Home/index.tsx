import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div className="home-content-container-text">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="base-card home-card-btn">
        <div className="home-btn-container">
          <Link to="/catalog">
            <ButtonIcon name="VER CATÁLOGO" />
          </Link>
        </div>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
