import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({filter, onChange})  {
    return (
        <label>
            Filter names
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Enter name"
                value={filter}
                className={styles.input}
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
