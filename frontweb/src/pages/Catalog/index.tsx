import ProductCard from 'components/ProductCard';
import Search from 'components/Search';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container catalog-container">
      <div className="base-card product-card">
        <Search />
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
