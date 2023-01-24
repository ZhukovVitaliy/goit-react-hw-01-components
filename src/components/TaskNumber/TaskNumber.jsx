import PropTypes from 'prop-types';
import css from './TaskNumber.module.css';

export const TaskNumber = ({ text }) => {
  return <p className={css.p}>{text}</p>;
};

TaskNumber.prototype = {
  text: PropTypes.string.isRequired,
};
