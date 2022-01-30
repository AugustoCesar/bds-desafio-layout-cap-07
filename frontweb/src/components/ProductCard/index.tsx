import './styles.css';

import CarImg from 'assets/images/car.png';
import ButtonIcon from 'components/ButtonIcon';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={CarImg} alt="Nome do carro" />
      </div>
      <div className="card-bottom-container">
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <ButtonIcon name='COMPRAR' />
      </div>
    </div>
  );
};

export default ProductCard;
