import styles from './style/about.module.css';
import { KEEPGOING_IMG } from '../../constant';
import Link from 'next/link';

export async function getMyinfo() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return ;
}

export default function About(){
    let info = getMyinfo();

    return(
        <div className={styles.main} style={{backgroundImage: `url('${KEEPGOING_IMG}')`}}>
            <div className={styles.header}>
                <ul>
                    <Link href='/'>subject_1</Link>
                    <Link href='#'>subject_2</Link>
                    <Link href='#'>subject_3</Link>
                    <Link href='/about'>About</Link>
                </ul>
            </div>
            <div className={styles.content}>
                CONTENT
            </div>
            <div className={styles.footer}>
                FOOTER
            </div>
        </div>
    )
}