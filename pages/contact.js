import React from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="page__container">
      <div className="contact">
        <div className="contact__info">
          <h1>
            Cool , lets transform your project idea into your dream website
          </h1>
          <p>Start your project today and get a fair estimation</p>

          <div className="contact__img">
            <img src="/contact.svg" alt="" />
          </div>
        </div>

        <div className="contact__form">
          <form
            name="contact-form"
            action="contact/?success=true"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Getting in touch!</h1>
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="form__control">
              <input
                type="text"
                className="input-text"
                name="name"
                {...register('Name', { required: true, max: 30, min: 3 })}
              />
              <span className="floating-text">Name: *</span>
            </div>
            <div className="form__control">
              <input
                type="email"
                className="input-text test"
                name="email"
                {...register('Email', {
                  required: true,
                  min: 5,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                })}
              />
              <span className="floating-text">Email: *</span>
            </div>

            <p className="service__label">
              In what service are you interested *
            </p>

            <select {...register('Service', { required: true })}>
              <option value="Website">Website</option>
              <option value="E-shop"> E-shop</option>
              <option value="Web Application "> Web Application </option>
              <option value="SEO"> SEO</option>
              <option value="Digital Marketing"> Digital Marketing</option>
              <option value="IT Related">IT Related</option>
              <option value="Request Demo"> Request Demo</option>
            </select>

            <div className="form__options"></div>
            <div className="form__control">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                {...register('Message', { required: true, min: 3 })}
              ></textarea>
              <span className="floating-text">Message: *</span>
            </div>

            <button type="submit" className="btn form__btn">
              <h2>Send</h2>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
