import React from 'react';
import "./Services.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Services = () => {
    const { projects } = useAuth();
    return (
        <div className="container py-5 text-white">
            <ScrollAnimation animateIn='fadeInLeft'
                animateOut='fadeOut'>
                <h1 className="my-3 fw-bold text-center">Projects</h1>
                <div className="row m-0 ">
                    {
                        projects.map(project =>

                            <div
                                key={project.id}
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto py-3  text-center rounded "
                            >

                                <div className="hover service-1 m-2 rounded">
                                    <img className="w-100" src={project.img} alt="" />
                                    <div className="p-3">
                                        <h3 className="fw-bold">{project.name}</h3>
                                        <span className="limit-4">{project.details}</span>
                                        <div className="my-2">
                                            <Link to={`/project/${project.id}`} className="mx-auto btn btn-primary d-inline " variant="primary" >
                                                Details
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>

            </ScrollAnimation>
        </div>
    );
};

export default Services;