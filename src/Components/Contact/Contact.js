import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { TextField, FormHelperText, Box, Button } from '@mui/material';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Send Successfully, Thank You.")

        emailjs.sendForm('gmail', 'portfolio', form.current, 'user_Vdq6cw6v58oS4ztuLSfrc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="container" id="contact">
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <h1 className="my-5 fw-bold text-center text-white">Get in Touch</h1>
                <div className="row m-0">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 my-4 text-white">
                        <h3 className="fw-bold">Let's talk about everything!</h3>
                        <p>Don't like forms? Send me an email.</p>
                        <img className="w-100 my-3 " src="https://i.ibb.co/fFN3kW5/world-map-png-35423.png" alt="" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12  my-3 text-white">
                        <form ref={form} onSubmit={sendEmail}>
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                className="text-white"
                            >

                                <TextField sx={{ m: 1 }} fullWidth id="name" label="Name" variant="outlined" name="name" required />
                                <TextField sx={{ m: 1 }} fullWidth id="email" label="Email" variant="outlined" name="email" required />
                                <TextField sx={{ m: 1 }} fullWidth id="phone" label="Phone" variant="outlined" name="phone" required />
                                <TextField sx={{ m: 1 }} fullWidth id="subject" label="Subject" variant="outlined" name="subject" required />
                                <TextField sx={{ m: 1 }} fullWidth multiline maxRows={4} aria-label="minimum height"
                                    minRows={3} id="message" label="Message" variant="outlined" name="message" required />

                                <FormHelperText id="my-helper-text"></FormHelperText>
                                <Button sx={{ m: 1 }} type="submit" variant="contained">Submit</Button>
                            </Box>
                        </form>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default Contact;