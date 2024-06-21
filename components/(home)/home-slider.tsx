"use client";
import styles from './styles/home-slider.module.css';
import Item from "./home-item";
import { _SUBJECT } from '../../app/constant.ts';
import { getMiddlePath } from '@/app/middleware.ts';

export default function Slider() {
    getMiddlePath();

    try {
        for (let i = 0; i < _SUBJECT.length; i++) {
            let temp :{ 
                num: number;
                topic: string;
                description: string;
                img: string;
                link: string;
            } = {
                num: 0, topic: '', description: '', img: '', link: ''
            };

            if(globalThis?.sessionStorage.getItem('currentPath') == _SUBJECT[i].link){
                // console.log(_SUBJECT[i]);
                temp = _SUBJECT[0];
                _SUBJECT[0] = _SUBJECT[i];
                _SUBJECT[i] = temp;
            }
        }
        
    } catch (err){}
    return (
        <ul id='slider' className={styles.slider}>
            {_SUBJECT.map((item, index) => 
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