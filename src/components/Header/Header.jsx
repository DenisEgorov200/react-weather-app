// eslint-disable-next-line no-unused-vars
import React from 'react';

import { InputSearch } from 'src/components/ui/InputSearch/InputSearch.jsx';
import { MenuBurger } from 'src/components/ui/MenuBurger/MenuBurger.jsx';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer}`}>
                <h1 className={styles.title}>Weather</h1>
                <div className={styles.headerInfo}>
                    <InputSearch
                        className={styles.headerInput}
                        placeholder={'Enter city name ...'}
                    />
                    <MenuBurger />
                </div>
            </div>
        </header>
    );
};
