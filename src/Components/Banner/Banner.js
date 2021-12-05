import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faFileDownload, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"
import Profile from "../../Images/Profile.png"
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Banner = () => {

    return (
        <div>
            <div id="tsparticles"></div>
            <div className="py-5 banner text">
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOut='fadeOut'>
                    <div className="container">
                        <div className="justify-content-center my-4 text-white row mx-auto">
                            <div className="col-lg-3 d-flex justify-content-end col-md-6 col-sm-6 col-10 mb-3">
                                <img className="d-flex justify-content-center w-100  img-thumbnail rounded" src={Profile} alt="" />
                            </div>
                            <div className="col-lg-5  col-md-6 col-sm-6 col-12 my-auto">
                                <h3 className="my-2">Hi,</h3>
                                <h2 className="my-2 fs-1 fw-bold">I'm <span className="text-succes">Nepolion Chakma</span></h2>
                                <strong className="fs-3 text-warning">
                                    <Typewriter
                                        options={{
                                            strings: ['React Developer', 'Fornt-End Developer', 'Full-Stack Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </strong>

                                <div className="text-white">
                                    <a href="https://github.com/nepolionchakma"> <FontAwesomeIcon icon={faGithub} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3" /></a>
                                    <a href="https://www.linkedin.com/in/nepolionchakma/"> <FontAwesomeIcon icon={faLinkedin} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3 text-decoration-none" /></a>
                                    <a className="text-decoration-none text-danger" href="mailto:nepolionchakma.nc@gmail.com"><FontAwesomeIcon icon={faMailBulk} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3" /></a>
                                    {/* <Link to="/contact"> <FontAwesomeIcon icon={faMailBulk} target="_blank" rel="noreferrer noopener" className="text-white fs-2 m-3" /></Link> */}
                                </div>
                                <div className="">
                                    <Link to="./resume.pdf" target="_blank" rel="noreferrer noopener"
                                        className="inline-block text-white fw-bold d-inline nav-link btn btn-success" download>Resume <FontAwesomeIcon icon={faFileDownload} /></Link>
                                    <Link as={HashLink} to="/explore" className="inline-block text-white fw-bold d-inline mx-2 nav-link btn btn-success">Explore Me <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                                </div>
                                <p className="my-4">You can reach out me if You need any help in making a website for you or your business.</p>
                            </div>

                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

    );
};

export default Banner;