import './Card_Item.css';

const Card = (props) => {
  const cssClasses = props.className;
  return <div className={'card-item ' + cssClasses}>{props.children}</div>;
};

export default Card;
