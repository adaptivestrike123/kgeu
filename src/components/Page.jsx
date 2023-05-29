import React from 'react';
import imageOne from"../images/image1.png";
import imageTwo from"../images/image2.jpg";
import imageThree from"../images/image3.jpg";
import imageFour from"../images/image4.png";
import imageFive from"../images/image5.jpg";
import imageSix from"../images/image6.png";
import imageSeven from"../images/image7.jpg";
import imageEight from"../images/image8.png";
import { Link } from 'react-router-dom';

export const Page = () => {
    return (
        <div className='page'>
            <div className='container'>
                <div className='page-align'>
                    <div className='page-item'>
                        <Link to={"/kgeu/1"}>
                            <img src={imageOne} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/1"}>
                            <h1>Воспитатель - это по любви</h1>
                        </Link>
                        <br></br>
                        <p>Когда говорят воспитатель, в голове сразу появляется картина женщины с маленькими детьми. В привычном понимании воспитатель -это человек, участвующий в жизни детей только в дошкольный период, однако существуют такие ребята, которые нуждаются в воспитатель до окончания школы, иногда даже больше...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/2"}>
                            <img src={imageTwo} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/2"}>
                            <h1>ОТКУДА ВЗЯЛАСЬ СПЕЦИАЛЬНОСТЬ ПО РЕКЛАМЕ В ТЕХНИЧЕСКОМ ВУЗЕ?</h1>
                        </Link>
                        <br></br>
                        <p>Миннуллина Элина Борисовна - заведующая кафедрой «Философия и медиа коммуникации» в Казанском государственном энергетическом университете...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/3"}>
                            <img src={imageThree} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/3"}>
                            <h1>ВРЕД И ПОЛЬЗА ВЕЙПОВ И ЭЛЕКТРОННЫХ СИГАРЕТ</h1>
                        </Link>
                        <br></br>
                        <p>Криницкий Степан Матвеевич- детский врач психиатр-нарколог, заместитель главного врача, по детской наркологии в Республиканском клиническом наркологическом диспансере...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/4"}>
                            <img src={imageFour} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/4"}>
                            <h1>ПУТЬ ЧЕМПИОНА</h1>
                        </Link>
                        <br></br>
                        <p>Синхронное катание — разновидность фигурного катания, где спортсмены соревнуются в командах, выполняя различные элементы под музыку. Оно зародилось в 1990-е годы, а чемпионаты мира Международным союзом конькобежцев (ISU) проводятся с 2000 года...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/5"}>
                            <img src={imageFive} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/5"}>
                            <h1>“САМОЕ ВАЖНОЕ — ЖЕЛАНИЕ ПОМОГАТЬ ЛЮДЯМ”: ГОЛОС СПАСЕНИЯ НА ДРУГОМ КОНЦЕ ПРОВОДА</h1>
                        </Link>
                        <br></br>
                        <p>Трудности профессии оператора службы 112, с чем могут столкнуться и как с этим можно бороться. Какими качествами должен обладать оператор?</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/6"}>
                            <img src={imageSix} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/6"}>
                            <h1>«МЫ В НЕКОТОРОМ РОДЕ КОЛДУНЫ, МЫ УЧИМСЯ ВОСПРОИЗВОДИТЬ ЖИЗНЬ И ОТВЕТНЫЕ СТИХИИ У ЛЮДЕЙ. ЭТО МАГИЯ»</h1>
                        </Link>
                        <br></br>
                        <p>Казанский режиссер Влад Петров – бывший корреспондент новостей на телекомпании «Эфир». Однажды ему подвернулась возможность взять интервью у людей, работавших с Андреем Тарковским – любимым режиссером Петрова – этот момент стал толчком к его будущей страсти к кинопроизводству...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/7"}>
                            <img src={imageSeven} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/7"}>
                            <h1>ПРАВДА О ВИЧ</h1>
                        </Link>
                        <br></br>
                        <p>Интервью с сопредседателем регионального штаба ОНФ в Нижегородской области, а также главным врачом ГБУЗНО «Нижегородский областной центр по профилактике и...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    <div className='page-item'>
                        <Link to={"/kgeu/8"}>
                            <img src={imageEight} alt=''></img>
                        </Link>
                        <Link className='link' to={"/kgeu/8"}>
                            <h1>СРАЖАЮЩИЕСЯ ЗА РОДИНУ</h1>
                        </Link>
                        <br></br>
                        <p>Уроженка города Мариуполь, Елена Викторовна Субботина прошла путь от инженера-электрика до журналиста и работает сейчас в Министерстве информации ДНР в...</p>
                        <div className='button-read'>Читать далее...</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

