import React, {Component} from "react";
import Header from "../Components/Header";
import "./Home.css";
import styles from "./Home.css"
import img1 from '../images/jpg/child_listen.jpg'
import img2 from '../images/svg/Ellipse-orange.svg'
import img3 from '../images/svg/Ellipse2.svg'
import img4 from '../images/svg/Ellipse_fouth_big.svg'
import img5 from '../images/svg/Ellipse_fouth_midle.svg'
import img6 from '../images/svg/Ellipse_fouth_small.svg'
import img7 from '../images/svg/Ellipse.svg'
import img8 from '../images/svg/strelka.svg'
import img9 from '../images/svg/Vector-strelka.svg'
import img10 from '../images/jpg/teacher-explaining-to-pupils-new-things.jpg'
import img11 from '../images/jpg/modern-techniques-of-learning-at-school.jpg'
import img12 from '../images/jpg/mother-kid-first-school-day-side-view.jpg'
import img13 from '../images/jpg/teamwork-over-the-teacher-s-laptop.jpg'
import img14 from '../images/jpg/happy-little-girl-making-video-call-while-having-online-class-over-laptop.jpg'
import img15 from '../images/jpg/portrait-of-happy-smiling-female-wearing-casual-attire-helping-her-daughter-with-lessons-woman-looking-at-her-child-with-love-sitting-at-table-with-books-and-laptop.jpg'


import { checkAuth, fetchWithAuth, getUserClass, getUserData } from "../api";
import MySlider from "../Components/MySlider";

export default class Home extends Component{
    render(){
        return(          
            <div>            
                {<Header/>}
                <div class="page">
                    <div class="introdution">
                        <div class="introdution_container container">
                            <div class="introdution_text">
                                <h1>Платформа для назначения и выполнения заданий</h1>
                            </div>
                            <div class="introdution_pic">
                                <div class="romb">
                                    <img src={img1}/>
                                </div>
                            </div>
                            <div class="back_romb">
                                <div class="back_romb_content"></div>
                            </div>
                            <img class="orange-ellipse1 ellipse" src={img2}/>
                            <img class="blue-ellipse1 ellipse" src={img3}/>
                            <div class="rectangle1">
                                <div class="rectangle1_content"></div>
                            </div>
                            <div class="arcs">
                                <img src={img4} style={{width: "63px;", height: "63px;"}}/>
                                <img src={img5} style={{width: "47px;", height: "47px;"}}/>
                                <img src={img6} style={{width: "30px;", height: "30px;"}}/>
                            </div>
                            <img class="elipse1" src={img7}/>
                            <img class="strelka" src={img8}/>
                        </div>
                    </div>
                    <div class="more-edukid">
                        <div class="container">
                            <div class="more-edukid-container">
                                <a href="/home">Edukid</a>
                                <p>Сервис <span class="selected-text">EduKid</span> создан для ускорения и облегчения привычных нам процессов, речь о домашних заданиях. Можно быстро назначать и выполнять работы в формате текста, фото, видео, аудио. Отслеживайте успеваемость и создавайте рейтинги учеников. Создавайте тетради с полезными материалами и делитесь ими.</p>
                            </div>
                        </div>
                    </div>
                    <div class="audience">
                        <div class="audience_decor">
                            <div class="trapecia_container container">
                                <div class="trapecia">
                                    <div class="big-triangle"></div>
                                    <div class="trapecia_body">
                                        <div class="top-triangle">
                                            <div class="small-triangle"></div>
                                            <img src={img9}/>
                                        </div>
                                    </div>
                                </div>				
                            </div>
                            <div class="audience_decor_left"></div>
                            <div class="audience_decor_right"></div>
                        </div>
                        <div class="audience_container container">
                            <div class="for_who_title">
                                <h2>Преимущества</h2>
                            </div>
                            <div class="for_who_content">
                                <div class="for_who_content_container for_who_first" style={{alignSelf: "flex-end"}}>
                                    <img src={img10}/>
                                    <div class="for_who_content_text">
                                        <h3>Для учителей</h3>
                                        <p>Возможность создания собственных тестов и использование имеющихся на сайте. Автоматическая проверка тестов. Выявление проблемных тем для дальнейшей работы над ними.</p>
                                    </div>
                                </div>
                                <div class="for_who_content_container" style={{alignSelf: "center"}}>
                                    <img src={img11}/>
                                    <div class="for_who_content_text">
                                        <h3>Для учеников</h3>
                                        <p>Возможность закрепить или получить знания по необходимым темам</p>
                                    </div>
                                </div>
                                <div class="for_who_content_container">
                                    <img src={img12}/>
                                    <div class="for_who_content_text">
                                        <h3>Для родителей</h3>
                                        <p>Информирование о содержании учебно-воспитательного процесса ребенка.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class= "audience-more">
                        <div class="container">
                            <h2>Возможности</h2>
                            <div class="more_content">
                                <div class="more_content_container">
                                    <div style={{flex: "1 1", maxWidth: "50%"}}>
                                        <img src={img13}/>
                                    </div>
                                    <div class="more_text_container">
                                        <h3>Для преподавателей</h3>
                                        <ul>
                                            <li>Возможность быстро и легко проверять домашние задания</li>
                                            <li>Не нужно таскать огромные стопки тетрадей</li>
                                            <li>Возможность создавать неограниченное количество классов</li>
                                            <li>Удобная таблица с успеваемостью учеников</li>
                                            <li>Возможность увидеть рейтинг класса</li>
                                            <li>Быстрое назначение домашнего задания</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="more_content_container">
                                    <div style={{flex: "1 1" ,maxWidth: "50%"}}>
                                        <img src={img14}/>
                                    </div>
                                    <div class="more_text_container">
                                        <h3>Для учеников</h3>
                                        <ul>
                                            <li>Можно больше не носить с собой тетради с домашними работами</li>
                                            <li>Удобная таблица с личной успеваемостью</li>
                                            <li>Возможность создания шпаргалок с быстрым доступом к ним</li>
                                            <li>Удобная таблица с личной успеваемостью</li>
                                            <li>Возможность увидеть рейтинг класса</li>
                                            <li>Возможность посмотреть работу, за которую стоит определенная оценка</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="more_content_container">
                                    <div style={{flex: "1 1", maxWidth: "50%"}}>
                                        <img src={img15}/>
                                    </div>
                                    <div class="more_text_container">
                                        <h3>Для  родителей</h3>
                                        <ul>
                                            <li>Возможность увидеть успеваемость ребёнка</li>
                                            <li>Отслеживание выполнения работ</li>
                                            <li>Возможность увидеть задания ребёнка</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MySlider/>
                </div>
            </div>
        )
    }
}
{/* <div class="swiper container">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="capabilities_content_container">
                                    <h3>Автопроверка тестов</h3>
                                    <p>При создании теста вы сможете подключить автопроверку по фотографиям. Сервис сам распознает ответы и выставит оценку по вашим критериям.</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="capabilities_content_container">
                                    <h3>Конструктор <br/> тестов и <br/>заданий</h3>
                                    <p>Создавайте задания разных форматов: тесты, кроссворды, задания на поиск ошибок в тексте или заполнение пропусков. Используйте аудио- и визуальные материалы, таблицы.</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="capabilities_content_container">
                                    <h3>Умные уведомления</h3>
                                    <p>Настройте уведомления об оценках, домашних заданиях или приближающихся сроках и выберете куда хотите получать сообщения.</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="capabilities_content_container">
                                    <h3>Режим чтения</h3>
                                    <p class="selected-p">При задании дз где нужно что-либо прочитать у преподавателей будет возможность добавить файл с текстом или книгой, а у ученика в удобном режиме прочитать то, что задано в соответствии с СанПиН</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> */}