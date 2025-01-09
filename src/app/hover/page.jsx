// app/components/Card.js
// import styles from './Card.module.css';

const Card = ({title, content}) => {
  return (
    <div className="card bg-blue-400">
      <div className="cardContent">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardText">{content}</p>
        <button className="moreInfoBtn">More Info</button>
     </div>
    </div>
  );
};

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string,
// };

// Card.defaultProps = {
//   imageUrl: '',
// };

export default Card;
