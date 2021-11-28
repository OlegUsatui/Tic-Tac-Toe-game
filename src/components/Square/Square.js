import css from "./Square.module.css";

const Square = ({ value, onClick, index }) => {
  return (
    <button className={css.square} onClick={() => onClick(index)}>
      {value}
    </button>
  );
};

export default Square;
