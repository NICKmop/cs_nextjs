"use client";

import styles from './styles/home-nav.module.css';

export default function Nav(){

    const onClickNav = (btn: any) => {
        const items = document.querySelectorAll('#item');

        btn.target.matches('.next') && document.querySelector('#slider')?.append(items[0])
        btn.target.matches('.prev') && document.querySelector('#slider')?.prepend(items[items.length-1]);
    }

    return <nav className={styles.nav}>
        <button className={`${styles.btn} prev`} onClick={(target) => onClickNav(target)}>prev</button>
        <button className={`${styles.btn} next`} onClick={(target) => onClickNav(target)}>next</button>
    </nav>
}