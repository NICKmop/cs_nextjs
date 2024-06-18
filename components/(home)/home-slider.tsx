import styles from './styles/home-slider.module.css';
import Item from "./home-item";
import { FALL_IMG, SPRING_IMG, SUMMER_IMG, WINTER_IMG} from '../../app/constant.ts';
// "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')"
export default function Slider() {
    const subject = [
        { topic: "subject_1", description:"subject_1 on me", img:`url('${SPRING_IMG}')`, link: '/'},
        { topic: "subject_2", description:"subject_2 on me", img:`url('${SUMMER_IMG}')`, link: '#'},
        { topic: "subject_3", description:"subject_3 will be", img:`url('${FALL_IMG}')`, link: '#'},
        { topic: "Abount Me", description:"let me introduce my self if you interested me CLICK", img:`url('${WINTER_IMG}')`, link: '/about'}
    ]

    return (
        <ul id='slider' className={styles.slider}>
            {subject.map((item, index) => 
                <Item 
                    key={index}
                    topic={item.topic} 
                    description={item.description} 
                    img={item.img} 
                    link={item.link}
                />
            )}
        </ul>
    )   
}