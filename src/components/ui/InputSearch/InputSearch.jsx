import { SearchIcon } from 'src/assets/icons/SearchIcon.jsx';

import styles from './InputSearch.module.scss';

export function InputSearch({ className, placeholder }) {
    return (
        <div className={`${styles.inputSearch} ${className}`}>
            <input className={styles.input} type="text" placeholder={placeholder} />
            <SearchIcon className={styles.icon} />
        </div>
    );
}
