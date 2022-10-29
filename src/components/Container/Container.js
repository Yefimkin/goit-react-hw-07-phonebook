import PropTypes from 'prop-types';
import styles from './Container.module.css'

const Container = ({ children }) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;