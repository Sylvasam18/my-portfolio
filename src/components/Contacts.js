import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_olAIQJc4r6CHdoiTSe80N";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const form = useRef();

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
            setSuccessMessage("Form sent successfully. I'll contact you as soon as possible.");
        }).catch(err => console.error(`Something went wrong ${err}`));
    };
    return (
        <div id="contacts" className='contacts'>
            <div className='text-center'>
            <h1>Contact me</h1>
            <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible</p>
            <span className='success-message'>{successMessage}</span>
            </div>
            <div className='container'>
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <div className='text-center'>
                        <input 
                        type='text'
                        className='form-control'
                        placeholder='Name'
                        name='name'
                        {...register("name", { required: true })}
                        />
                        {errors.name && <span className='error-message'>Please enter your name</span>}
                        <div className='line'></div>
                        </div>
                          <div className='text-center'>
                          <input 
                        type='number'
                        className='form-control'
                        placeholder='Phone Number'
                        name='phone'
                        {...register("phone", { required: true })}

                        />
                        {errors.phone && <span className='error-message'>Your phone number is required</span>}

                        <div className='line'></div>
                          </div>

                        <div className='text-center'>
                        <input 
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        {...register("email", { required: true})}

                        />
                        {errors.email && <span className='error-message'>A valid email is required</span>}

                        <div className='line'></div>
                        </div>

                        <div className='text-center'>
                        <input 
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                        name='subject'
                        {...register("subject", { required: true })}

                        />
                        {errors.subject&& <span className='error-message'>You forgot to enter the subject</span>}

                        <div className='line'></div>

                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                    <div className='text-center'>
                    <textarea 
                        type='text'
                        className='form-control'
                        placeholder='Please give a little description about the project'
                        name='description'
                        {...register("description", { required: true })}

                        ></textarea>
                        {errors.description && <span className='error-message'>A description of your project is required</span>}

                        <div className='line'></div>
                    </div>
                        <button className='btn-main-offer contact-btn' type='submit'>Contact me</button>
                    </div>

                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
