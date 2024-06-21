const FALL_IMG = "/img/fall.jpg";
const SPRING_IMG = "/img/spring.jpg";
const SUMMER_IMG = "/img/summer.jpg";
const WINTER_IMG = "/img/winter.jpg";

const KEEPGOING_IMG = "/img/keep-going.jpg";
const FEAR_IMG = "/img/fear.jpg";

const _SUBJECT = [
    { 
        num: 1,
        topic: "Home",
        description:"subject_1 on me",
        img:`url('${SPRING_IMG}')`,
        link: '/'
    },
    { num: 2, topic: "Stack",     description:"subject_2 on me", img:`url('${SUMMER_IMG}')`, link: '/stack'},
    { num: 3, topic: "Write", description:"subject_3 will be", img:`url('${FALL_IMG}')`, link: '/write'},
    { num: 4, topic: "About Me", description:"let me introduce my self if you interested me CLICK", img:`url('${WINTER_IMG}')`, link: '/about'}
]

const _SIDE = [
    {num: 1, img: KEEPGOING_IMG},
    {num: 1, img: FEAR_IMG},
]

// export {FALL_IMG, SPRING_IMG, SUMMER_IMG, WINTER_IMG, KEEPGOING_IMG}
export {_SUBJECT, _SIDE};