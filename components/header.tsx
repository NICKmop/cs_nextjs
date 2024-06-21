import Link from 'next/link';
import { _SUBJECT } from "@/app/constant";
import styles from './style/header.module.css';
import { SiAboutdotme, SiWritedotas } from 'react-icons/si';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { BsStack } from 'react-icons/bs';

function setTopic(topic:string) {
    switch (topic) {
        case 'Stack':
            return <BsStack />;
        case 'Write':
            return <SiWritedotas />;
        case 'Home':
            return <RiHomeOfficeFill />;
        case 'About Me':
            return <SiAboutdotme />;
        default:
            break;
    }
}

export default function Header() {
    return <div className={styles.header}>
        <ul>
            {_SUBJECT.map((topic,index) => 
                <div>
                    {setTopic(topic.topic)}
                    <Link
                        key={index}
                        href={topic.link}
                    >
                    {topic.topic}</Link>
                </div>
                
            )}
        </ul>
    </div>
}