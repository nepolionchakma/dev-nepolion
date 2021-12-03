import React from 'react';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./About.css"
import Profile from "../../Images/profile.jpg"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <div className="container">
                    <h1 className="my-5 fw-bold text-center text-white">About Me</h1>
                    <div className="row m-0 ">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 m-auto ">

                            <div className="p-4  d-flex justify-content-center align-items-center">
                                <img className="w-75 img-thumbnail rounded-circle" src={Profile} alt="" />
                            </div>
                            <div className="text-white text-center">
                                <a href="https://github.com/nepolionchakma"> <FontAwesomeIcon icon={faGithub} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3 text-decoration-none" /></a>
                                <a href="https://www.linkedin.com/in/nepolionchakma/"> <FontAwesomeIcon icon={faLinkedin} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3 text-decoration-none" /></a>
                            </div>
                            <div className="hover text-center">
                                {/* <Link to="./resume.pdf" target="_blank" rel="noreferrer noopener"
                                    className="inline-block text-white fw-bold d-inline nav-link btn btn-success rounded" download>Resume <FontAwesomeIcon icon={faFileDownload} /></Link> */}
                                <Link to="./resume.pdf" target="_blank" rel="noreferrer noopener" className="btn btn-success text-decoration-none" download>Resume <FontAwesomeIcon icon={faFileDownload} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12 py-4">

                            <div className="p-4 text-white color-2 rounded row">
                                <div className="p-4 my-auto col-lg-6  col-md-6 col-sm-6 col-12 text-white">

                                    <div className="my-auto">
                                        <p className="m-0 hover">Front-End Developer with a proven
                                            ability to collaborate effectively with
                                            senior developers while spending
                                            extra time to be mentored. Enjoy
                                            working closely with team members
                                            to ensure workloads are effectively
                                            redirected to bottlenecks and
                                            personally picking up the slack when
                                            necessary. With a passion for both
                                            personal growth and for software
                                            development, I attended a 1000+ hour
                                            coding bootcamp to learn new
                                            languages while sharpening existing
                                            skills. Ready to apply my passion for
                                            coding to a talented engineering
                                            team to develop quality solutions.</p>

                                    </div>
                                </div>
                                <div className="col-lg-6  col-md-6 col-sm-6 col-12">
                                    <div className="my-3">
                                        <div>
                                            <div className="hover">
                                                <span className="mx-auto d-inline">HTML/CSS</span>
                                            </div>
                                            <div className="progress">

                                                <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div className="hover">
                                                <span className="mx-auto d-inline">React JS</span>
                                            </div>
                                            <div className="progress">

                                                <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90</div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div className="hover">
                                                <span className="mx-auto d-inline">JavaScript</span>
                                            </div>
                                            <div className="progress">

                                                <div className="progress-bar bg-primary progress-bar-striped" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div className="hover">
                                                <span className="mx-auto d-inline">Node JS</span>
                                            </div>
                                            <div className="progress">

                                                <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div className="hover">
                                                <span className="mx-auto d-inline">MongoDB</span>
                                            </div>
                                            <div className="progress">

                                                <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "55%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div className="hover">
                                                <span className="mx-auto d-inline">WordPress</span>
                                            </div>
                                            <div className="progress">

                                                <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default About;