import './styles.css';
type Props = {
  name?: string;
};
const ButtonIcon = ({ name }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn">
        <h6>{name}</h6>
      </button>
    </div>
  );
};

export default ButtonIcon;
