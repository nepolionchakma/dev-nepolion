
import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Project.css"
const Project = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const { projectId } = useParams();
    const { projects } = useAuth();
    const project = projects.find(project => project.id === projectId);

    return (

        <div className="text-white container py-3">

            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                <div ><img className="w-100 p-2" src={project.img1} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img2} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img3} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img4} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img5} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img6} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img7} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img8} alt="" /></div>
                <div ><img className="w-100 p-2" src={project.img9} alt="" /></div>
            </Carousel>
            <div className="p-3 ">

                {project.extra} <span className="fw-bold text-warning"> ({project.name}) </span>
                <p className="m-0 text-muted">{project.details}</p>
                <br />
                <span className="fw-bold">Features :</span>
                <p className="m-0">● {project.feature}</p>
                <p className="m-0">● {project.feature1}</p>
                <p className="m-0">● {project.feature2}</p>
                <span className="fw-bold">Technology Used :</span> {project.use}
                <div>
                    <a href={project.live} className="btn btn-success m-2" target="_blank" rel="noreferrer noopener">Live</a>
                    <a href={project.client} className="btn btn-success m-2" target="_blank" rel="noreferrer noopener">Client</a>
                    <a href={project.server} className="btn btn-success m-2" target="_blank" rel="noreferrer noopener">Server</a>
                </div>
            </div>
        </div>
    );
};

export default Project;