import React, { useState } from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Modal } from 'react-bootstrap';

const Blogs = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="container py-5 text-white" id="blogs">
            <h1 className="my-5 fw-bold text-center">Latest Posts</h1>
            <div className="row m-0 ">

                <div className="col-lg-4 col-md-6 col-sm-6 col-12  py-3 rounded ">
                    <ScrollAnimation animateIn='fadeInLeft'
                        animateOut='fadeOut'>
                        <div className=" service-1 hover m-2 rounded">
                            <img className="w-100" src="https://bolby-react.vercel.app/images/blog/1.svg" alt="" />
                            <div className="p-4">
                                <h3 className="my-3 fw-bold">Full-Stack Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                            </div>
                            <>
                                <div className="pb-4">
                                    <Button className="d-flex justify-content-center m-auto" variant="primary" onClick={() => setShow(true)}>
                                        More
                                    </Button>

                                    <Modal
                                        show={show}
                                        onHide={() => setShow(false)}
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                More
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                                ipsam atque a dolores quisquam quisquam adipisci possimus
                                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                                deleniti rem!
                                            </p>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12  py-3 rounded ">
                    <ScrollAnimation animateIn='fadeInLeft'
                        animateOut='fadeOut'>
                        <div className=" service-1 hover m-2 rounded">
                            <img className="w-100" src="https://bolby-react.vercel.app/images/blog/2.svg" alt="" />
                            <div className="p-4">
                                <h3 className="my-3 fw-bold">Fornt-End Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                            </div>
                            <>
                                <div className="pb-4">
                                    <Button className="d-flex justify-content-center m-auto" variant="primary" onClick={() => setShow(true)}>
                                        More
                                    </Button>

                                    <Modal
                                        show={show}
                                        onHide={() => setShow(false)}
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                More
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                                ipsam atque a dolores quisquam quisquam adipisci possimus
                                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                                deleniti rem!
                                            </p>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12  py-3 rounded ">
                    <ScrollAnimation animateIn='fadeInLeft'
                        animateOut='fadeOut'>
                        <div className=" service-1 hover m-2 rounded">
                            <img className="w-100" src="https://bolby-react.vercel.app/images/blog/3.svg" alt="" />
                            <div className="p-4">
                                <h3 className="my-3 fw-bold">Back-End Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor.</p>
                            </div>
                            <>
                                <div className="pb-4">
                                    <Button className="d-flex justify-content-center m-auto" variant="primary" onClick={() => setShow(true)}>
                                        More
                                    </Button>

                                    <Modal
                                        show={show}
                                        onHide={() => setShow(false)}
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                More
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                                ipsam atque a dolores quisquam quisquam adipisci possimus
                                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                                deleniti rem!
                                            </p>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default Blogs;