"use client";
import styles from './style/about.module.css';
import { _SUBJECT, _SIDE } from '../../constant';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About(){
    return(
        <motion.div 
            initial={{ x: "0%" }}
            animate={{ x:0 }}
            exit={{ x: "-100%" }}
            transition={{duration: 1 }}
            className={styles.main} style={{backgroundImage: `${_SUBJECT[3].img}`}}>
            <motion.div 
                animate={{ 
                    scale: [0, 0, 0, 1, 1],
                    rotate: [0, 25, 25, 25, 0],
                }}
                className={styles.content}>
                <div className={styles.infoCard}>
                    <div className={styles.photo}>
                        <div>
                            <Image 
                                src={_SIDE[1].img} 
                                alt='i am fear on the futer'
                                width={335}
                                height={190}
                            />
                        </div>
                        <hr />
                        <div>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolorem sint reprehenderit atque consectetur sapiente nulla perspiciatis omnis ad labore? Recusandae quaerat delectus ipsa voluptate atque, doloribus dolore hic qui!</span>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.contact_info}>
                            <div>
                                <span><h3>ELECTONIC MAIL</h3></span>
                                <span>dlckdtjq153@gmail.com</span>
                            </div>
                            <hr />
                            <div>
                                <span><h3>PHONE NUMBER</h3></span>
                                <span>010-XXXX-XXXX</span>
                            </div>
                            <hr />
                            <div>
                                <span><h3>CONTACT TIME</h3></span>
                                <span>pm 6:00 ~ pm 11: 00</span>
                            </div>
                            <hr />
                            <div>
                                <span><h3>CONTRY</h3></span>
                                <span>KOREA</span>
                            </div>
                        </div>
                        <div className={styles.contact_message}>
                            <form action="#" method='post'>
                                <h2>GET IN TOUCH WITH US  :)</h2>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id='name' name='name'/>
                                </div>
                                <div>
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="email" id='email' name='email'/>
                                </div>
                                <div>
                                    <label htmlFor="phone">PHONE NUMBER</label>
                                    <input type="text" id='phone' name='phone'/>
                                </div>
                                <div>
                                    <label htmlFor="message">MESSAGE</label>
                                    <input type="text" id='message' name='message'/>
                                </div>
                                <button>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}