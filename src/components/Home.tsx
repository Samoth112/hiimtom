import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Grid from './Grid';

export default function Home(): React.ReactElement {
  return(
    <section className='home'>
      <Grid className='home__grid'>
        <Route path="/">
          <section className="home__main">
            <Grid className="home__main-grid">
              <Switch>
                <Route path="/projects">
                   <section className="home__main-close">
                      <Link to="/">
                        <div></div>
                        <div></div>
                      </Link>
                    </section>
                    <section className="home__projects">
                      <p>Biblio<span className="red">.</span></p>
                      <p>
                        I first started building Biblio during bootcamp, but the idea started back during my days as a book editor. It struck me that
                        books spend most of their times on our shelves, having been read once then left to live out the rest of their days as furniture. Meanwhile,
                        there are communities where access to books can help close the achievement gap between low-income and well-funded school districts.
                        So Biblio is my attempt at trying to get our unread books into the hands of people who want to read them.
                      </p>
                      <p>
                        The app is a React/Redux front end with a RESTful API built on Rails. To stay in line with a single-page-app design, I used React Router
                        to take care of navigation, and to add structure to the whole project, I developed a design system based on reusable components, CSS Grid, and BEM methodolgy.
                        As the project evolves, please check my blog for a more detailed look into my code.
                      </p>
                  </section>
                </Route>
                <Route path="/">
                  <section className="home__greeting">
                    <p>Hi<span className="red">.</span> I'm Tom<span className="red">.</span></p>
                    <p>
                      I'm a full stack web developer working in React/Redux, Typescript, and Rails<span className="red">.</span><span className="yellow"> Check out my project, <a href="https://biblio-lite.netlify.app/">Biblio</a></span><span className="red-period">.</span>
                    </p>
                  </section>
                </Route>
              </Switch>
              <section className="home__menu">
                <Grid className="home__menu-grid">
                  <Switch>
                    <Route path="/menu">
                      <section className="home__main-close">
                        <Link to="/">
                            <div></div>
                            <div></div>
                        </Link>
                      </section>
                      <section className="home__menu-list">
                        <ul>
                          <li><Link to="/projects">Biblio</Link></li>
                          <li><a href="https://github.com/Samoth112">Github</a></li>
                          <li><Link to="/">About</Link></li>
                        </ul>
                      </section>
                    </Route>
                    <Route path="/">
                      <section className="home__menu-hamburger">
                        <Link to="/menu">
                          <div></div>
                          <div></div>
                          <div></div>
                        </Link>
                        <p>menu</p>
                      </section>
                    </Route>
                  </Switch>
                </Grid>
              </section>
            </Grid>
          </section>
          <section className="home__menu-selection">
            <img src="https://i.imgur.com/hbQuUUp.png" />
          </section>
        </Route>
      </Grid>
    </section>
  )
}