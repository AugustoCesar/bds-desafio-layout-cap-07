import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Digite sua busca"
      />
      <div>
        <ButtonIcon name="buscar" />
      </div>
    </div>
  );
};

export default Search;