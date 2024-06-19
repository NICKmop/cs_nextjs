import Slider from '@/components/(home)/home-slider';
import Nav from '@/components/(home)/home-nav';
import styles from './style/home.module.css';


export default function Home() {
    return (
        <div id={styles.main}>
            <Slider />
            <Nav />
        </div>
    )
}