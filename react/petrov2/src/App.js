import React from 'react';
import './sass/main.scss';
import images from './assets';
import { PopupForm } from './components';

function App() {
  return (
    <body>
    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
        <label for="nav-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="" className="navigation__link">Обо мне</a>
                </li>
                <li className="navigation__item">
                    <a href="" className="navigation__link">Услуги</a>
                </li>
                <li className="navigation__item">
                    <a href="" className="navigation__link">Галерея</a>
                </li>
                <li className="navigation__item">
                    <a href="" className="navigation__link">Отзывы</a>
                </li>
                <li className="navigation__item">
                    <a href="" className="navigation__link">Контакты</a>
                </li>
            </ul>
        </nav>
    </div>

    <header className="header">
        <div className="header__logo-box">
            <p className="header__logo">Petrov Showman</p>
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Александр Петров</span>
                <span className="heading-primary--sub">Ведущийи</span>
            </h1>

            <a href="#" className="btn btn--white btn--animated">Забронировать дату</a>
        </div>
    </header>

    <main>
        <section className="section-about">
            <div className="u-senter-text u-margin-bottom-5">
                <h2 className="heading-secondary">Обо мне</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-1">Профессиональный ведущий в могилёве и не только</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Aenean in felis sodales, sollicitudin
                        neque sit amet, pretium neque. Ut tortor dolor, tincidunt id leo quis, tincidunt maximus nibh.
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-1">Превращу обычную пьянку в фееричное шоу</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Aenean in felis sodales, sollicitudin
                        neque sit amet, pretium neque.
                    </p>

                    <a href="#" className="btn-text">Подробнее &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={images.img1} alt="about_photo_1" className="composition__photo composition__photo--p1"/>
                        <img src={images.img2} alt="about_photo_2" className="composition__photo composition__photo--p2"/>
                        <img src={images.img3} alt="about_photo_3" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-features">

            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-world feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-1">Интересные конкурсы</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla ultrices egestas fermentum
                        </p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-todo feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-1">Супер программа</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla ultrices egestas fermentum
                        </p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-accelerator feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-1">Море позитива</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla ultrices egestas fermentum
                        </p>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-star feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-1">Неистовое веселье</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla ultrices egestas fermentum
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <section className="section-amenities" id="section-amenities">
            <div className="u-senter-text u-margin-bottom-5">
                <h2 className="heading-secondary">Мои услуги</h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <div className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    Корпоративы
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>Ништяк 1</li>
                                    <li>Ништяк 2</li>
                                    <li>Ништяк 3</li>
                                    <li>Ништяк 4</li>
                                    <li>Ништяк 5</li>
                                </ul>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Всего</p>
                                    <p className="card__price-value">123BYN</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Заказать сейчас</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <div className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    Банкеты
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>Ништяк 1</li>
                                    <li>Ништяк 2</li>
                                    <li>Ништяк 3</li>
                                    <li>Ништяк 4</li>
                                    <li>Ништяк 5</li>
                                </ul>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Всего</p>
                                    <p className="card__price-value">123BYN</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Заказать сейчас</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <div className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    Свадьбы
                                </span>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>Ништяк 1</li>
                                    <li>Ништяк 2</li>
                                    <li>Ништяк 3</li>
                                    <li>Ништяк 4</li>
                                    <li>Ништяк 5</li>
                                </ul>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Всего</p>
                                    <p className="card__price-value">123BYN</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Забронировать сейчас</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-stories">
            <div className="u-senter-text u-margin-bottom-5">
                <h2 className="heading-secondary heading-secondary--white">Отзывы клиентов</h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src="https://sun9-23.userapi.com/c850520/v850520196/182c3e/3Kj-ocQtCkE.jpg?ava=1" alt="" className="story__image" />
                        <figcaption className="story__caption">Сергей Шерстнёв</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-1">
                            Лучший ведущий на всём свете
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla ultrices egestas fermentum ulla ultrices egestas fermentum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum Nulla ultrices
                            egestas fermentum ulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla ultrices egestas fermentum
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src="https://sun9-24.userapi.com/c857232/v857232582/97467/AeDhjUBabIo.jpg?ava=1" alt="" className="story__image" />
                        <figcaption className="story__caption">Дмитрий Соколовский</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-1">
                            Лучший ведущий на всём свете
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nulla ultrices egestas fermentum ulla ultrices egestas fermentum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nulla ultrices egestas fermentum Nulla ultrices
                            egestas fermentum ulla ultrices egestas fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla ultrices egestas fermentum
                        </p>
                    </div>
                </div>
            </div>
            <div className="u-senter-text u-margin-top-little">
                <a href="#stories" className="btn btn--green">смотреть все</a>
            </div>
        </section>

        <section className="section-calendar">
            <div className="u-senter-text u-margin-bottom-5">
                <h2 className="heading-secondary">Мои услуги</h2>
            </div>
        </section>
    </main>

    <footer className="footer">
        <div className="footer__logo-box">
            <p className="footer__logo header__logo">Petrov Showman</p>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">Обо мне</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Услуги</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Галерея</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Отзывы</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Front-end development:
                    <a href="#" className="footer__link">Дмитрий Соколовский</a>
                    <br/> Powered by
                    <a href="#" className="footer__link">React, Google Firebase</a>
                    &copy; 2020
                </p>
            </div>
        </div>
    </footer>

    <div className="popup" id="popup">
        <a href="#section-amenities" className="popup__link">
            &times;
        </a>
        <PopupForm />
    </div>
    <div className="popup" id="stories">
        <a href="#section-amenities" className="popup__link">
            &times;
        </a>
        <h1>Hello</h1>
    </div>
  </body>
  )
}

export default App;