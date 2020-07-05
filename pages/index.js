import React, {Component} from 'react'
import Head from 'next/head'

export default class Index extends Component {

    render() {
        return (
            <div id="App">
                <Head>
                    <title>Frontend Mentor | manage-landing-page</title>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>
                </Head>
                <main id="main-content">
                    <div className="mobilenav">
                        <ul className="mobilenav__list">
                            <li className="mobilenav__item">
                                <a href="#" className="mobilenav__link">Pricing</a>
                            </li>
                            <li className="mobilenav__item">
                                <a href="#" className="mobilenav__link">Product</a>
                            </li>
                            <li className="mobilenav__item">
                                <a href="#" className="mobilenav__link">About Us</a>
                            </li>
                            <li className="mobilenav__item">
                                <a href="#" className="mobilenav__link">Careers</a>
                            </li>
                            <li className="mobilenav__item">
                                <a href="#" className="mobilenav__link">Community</a>
                            </li>
                        </ul>
                    </div>


                    <header className="header">
                        <div className="container">

                            <nav className="nav">
                                <img src="/static/images/logo.svg" alt="manage logo" className="nav__logo"/>

                                <ul className="nav__list">
                                    <li className="nav__item">
                                        <a href="#" className="nav__link">Pricing</a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#" className="nav__link">Product</a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#" className="nav__link">About Us</a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#" className="nav__link">Careers</a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#" className="nav__link">Community</a>
                                    </li>
                                </ul>

                                <a href="#" className="btn">Get Started</a>
                                {/* <button className="menu">
            <svg className="footer__icon open">
              <use xlink:href='./images/sprite.svg#icon-menu'></use>
            </svg>
            <svg className="footer__icon close">
              <use xlink:href='./images/sprite.svg#icon-close'></use>
            </svg>
          </button> */} </nav>

                            <div className="header__hero">
                                <div className="header__content">
                                    <h1 className="header__title">
                                        Bring everyone together to build better products.
                                    </h1>
                                    <p className="desc u-mb-2">
                                        Manage makes it simple for software teams to plan day-to-day 
                                                tasks while keeping the larger team goals in view.
                                    </p>
                                    <a href="#" className="btn">Get Started</a>
                                </div>

                                <div className="header__cover">
                                    <img src="/static/images/illustration-intro.svg" alt="" className="header__img"/>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="services u-py-3">
                        <div className="container">
                            <div className="services__content">
                                <h2 className="title u-mb-1">
                                    What’s different about Manage?
                                </h2>
                                <p className="desc">
                                    Manage provides all the functionality your team needs, without 
                                    the complexity. Our software is tailor-made for modern digital 
                                    product teams.
                                </p>
                            </div>

                            <div className="services__items">
                                <div className="item">
                                    <span className="item__number">01</span>
                                    <h3 className="item__title">
                                        Track company-wide progress
                                    </h3>
                                    <div className="item__text">
                                        <p className="desc">
                                            See how your day-to-day tasks fit into the wider vision. Go from 
                                            tracking progress at the milestone level all the way done to the 
                                            smallest of details. Never lose sight of the bigger picture again.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <span className="item__number">02</span>
                                    <h3 className="item__title">
                                        Advanced built-in reports
                                    </h3>
                                    <div className="item__text">
                                        <p className="desc">
                                            Set internal delivery estimates and track progress toward company 
                                            goals. Our customisable dashboard helps you build out the reports 
                                            you need to keep key stakeholders informed.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <span className="item__number">03</span>
                                    <h3 className="item__title">
                                        Everything you need in one place
                                    </h3>
                                    <div className="item__text">
                                        <p className="desc">
                                            Stop jumping from one service to another to communicate, store files, 
                                            track tasks and share documents. Manage offers an all-in-one team 
                                            productivity solution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="testimonials">
                        <h2 className="title u-centered u-mb-3">
                            What they’ve said
                        </h2>
                        <div className="slider">
                            <div className="testimony">
                                <img src="/static/images/avatar-anisha.png" alt="user" className="testimony__img"/>
                                <h4 className="testimony__name">Anisha Li</h4>
                                <p className="desc">
                                    “Manage has supercharged our team’s workflow. The ability to maintain 
                                                visibility on larger milestones at all times keeps everyone motivated.”
                                </p>
                            </div>
                            <div className="testimony">
                                <img src="/static/images/avatar-ali.png" alt="user" className="testimony__img"/>
                                <h4 className="testimony__name">Ali Bravo</h4>
                                <p className="desc">
                                    “We have been able to cancel so many other subscriptions since using 
                                                Manage. There is no more cross-channel confusion and everyone is much 
                                                more focused.”
                                </p>
                            </div>
                            <div className="testimony">
                                <img src="/static/images/avatar-richard.png" alt="user" className="testimony__img"/>
                                <h4 className="testimony__name">Richard Watts</h4>
                                <p className="desc">
                                    “Manage allows us to provide structure and process. It keeps us organized 
                                                and focused. I can’t stop recommending them to everyone I talk to!”
                                </p>
                            </div>
                            <div className="testimony">
                                <img src="/static/images/avatar-shanai.png" alt="user" className="testimony__img"/>
                                <h4 className="testimony__name">Shanai Gough</h4>
                                <p className="desc">
                                    “Their software allows us to track, manage and collaborate on our projects 
                                                from anywhere. It keeps the whole team in-sync without being intrusive.”
                                </p>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="navBtn btn1"></button>
                            <button className="navBtn btn2"></button>
                            <button className="navBtn btn3"></button>
                            <button className="navBtn btn4"></button>
                        </div>
                        <a href="#" className="btn">Get Started</a>
                    </section>

                    <section className="info u-py-4">
                        <div className="container">
                            <h2 className="title">
                                Simplify how your team works today.
                            </h2>
                            <a href="#" className="btn">Get Started</a>
                        </div>
                    </section>

                    <footer className="footer u-py-3">
                        <div className="container">
                            <img src="/static/images/logo.svg" alt="footer logo" className="footer__logo"/> 
            {/* <ul className="footer__social">
            <li className="footer__item">
              <a href="#" className="footer__link">
                <svg className="footer__icon">
                  <use xlink:href='./images/sprite.svg#icon-facebook'></use>
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                <svg className="footer__icon">
                  <use xlink:href='./images/sprite.svg#icon-youtube'></use>
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                <svg className="footer__icon">
                  <use xlink:href='./images/sprite.svg#icon-twitter'></use>
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                <svg className="footer__icon">
                  <use xlink:href='./images/sprite.svg#icon-pinterest'></use>
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                <svg className="footer__icon">
                  <use xlink:href='./images/sprite.svg#icon-instagram'></use>
                </svg>
              </a>
            </li>
          
          </ul> */}

                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Home</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Pricing</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Products</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">About Us</a>
                                </li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Careers</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Community</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Privacy Policy</a>
                                </li>
                            </ul>

                            <form action="#" className="form">
                                <input type="email" className="form__input" placeholder="Update in your inbox..."/>
                                <button className="btn">Go</button>
                            </form>
                            <p className="footer__note">
                                Copyright 2020. All Rights Reserved
                            </p>
                        </div>


                    </footer>
                </main>
            </div>
        )
    }
}
