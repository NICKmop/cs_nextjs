"use client";
import Link from 'next/link';
import styles from './styles/home-item.module.css';
import { motion } from 'framer-motion';

interface itemType {
    topic: string,
    description: string,
    img: string,
    link: string
}

export default function Item({topic, description, img, link}: itemType) {

    return(
        <motion.li 
            initial={{ x: "0%" }}
            animate={{ x:0 }}
            exit={{ x: "-100%" }}
            transition={{duration: 1 }}
            id='item' className={styles.item} style={{ backgroundImage: img }}>
        {/* <li id='item' className={styles.item} style={{ backgroundImage: img }}> */}
            <div className={styles.content}>
                <h2 className={styles.title}>{topic}</h2>
                <p className={styles.description}>{description}</p>
                <Link prefetch className={styles.button} href={link}>Info More</Link>
            </div>
        {/* </li> */}
        </motion.li>
    ) 
}