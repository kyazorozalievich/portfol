import React from 'react';
import me from '../../assets/image/me.jpg'
import scss from './About.module.scss'

const About = () => {
    // Internet
    function motionWeb() {
        window.open(`https://motion.kg/kg`)
    }
    // 

    return (
        <div className={scss.about}>
            <div className={scss.container}>
            <div className={scss.aboutAll}>

                <div className={scss.aboutText}>
                    <div className={scss.aboutMe}>
                    <h5>01.</h5>
                    <h1 className='poppins'>Обо Мне</h1>
                    <hr/>
                    </div>

                    <div className={scss.aboutDescription}>
                        <p>Привет меня зовут Кыяз, я начинающий Айти программист. Мне нравится создавать айти продукты, в настоящее время я работаю над web разроботками, а так же делал разные проекты например как: Продуктовые, Медицинские, Кино проекты и т.д  </p>
                        <p>Я планирую создавать интересные продукты чтобы узнал весь Мир. Я продолжу свой путь в айти сфере пока не изучу все языки Айти, это только начало моей истории. В дальнейшее время я покорю весь мир своим знанием</p>
                        <p>Хочу рассказать коротко о том как я учился, какие были трудности в учебе. Я учился в айти Академии <span onClick={()=> motionWeb()}>Motion Web LLC</span>, в первую очередь не когда не теряй надежду если даже не получается , не когда не сдавайтесь стремитесь к своей цели. Без трудностей не достигнешь к успеху</p>
                    </div>
                </div>
                <img src={me} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default About;