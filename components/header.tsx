import Link from 'next/link';
import { _SUBJECT } from "@/app/constant";
import styles from './style/header.module.css';

export default function Header() {
    
    return <div className={styles.header}>
        <ul>
            {_SUBJECT.map((topic,index) => 
                <Link 
                    key={index} 
                    href={topic.link}
                >
                {topic.topic}</Link>
            )}
        </ul>
    </div>
}