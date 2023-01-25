import PropTypes from 'prop-types';
import css from './StatList.module.css';
import { getRandomHexColor } from 'utils';

export const StatList = ({ label, percentage }) => {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
