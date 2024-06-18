import Link from 'next/link';
import styles from './styles/home-item.module.css';

interface itemType {
    topic: string,
    description: string,
    img: string,
    link: string
}

export default function Item({topic, description, img, link}: itemType) {
    // console.log(link);
    
    return(
        // <li className='item' style={{ backgroundImage: img }}>
        <li id='item' className={styles.item} style={{ backgroundImage: img }}>
            <div className={styles.content}>
                <h2 className={styles.title}>{topic}</h2>
                <p className={styles.description}>{description}</p>
                <Link prefetch className={styles.button} href={link}>Info More</Link>
            </div>
        </li>
    ) 
}