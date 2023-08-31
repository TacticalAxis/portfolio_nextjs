import React, { FormEvent, useState } from 'react'
import Button from '../reusable/Button'
import FormInput from '../reusable/FormInput'

function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const requestContact = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        }

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(() => {
            setFormSubmitted(true);
        });
    }

    if (formSubmitted) {
        return (
            <div className="w-full lg:w-1/2">
                <div className="leading-loose">
                    <div className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-center">
                        <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                            Thanks.<br/><br/>I&rsquo;ll be in touch as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full lg:w-1/2">
            <div className="leading-loose">
                <form
                    onSubmit={requestContact}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                    autoComplete='off'
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                        Contact Form
                    </p>

                    <FormInput
                        inputLabel="Full Name"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Your Name"
                        ariaLabelName="Name"
                    />
                    <FormInput
                        inputLabel="Email"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Your email"
                        ariaLabelName="Email"
                    />
                    <FormInput
                        inputLabel="Subject"
                        labelFor="subject"
                        inputType="text"
                        inputId="subject"
                        inputName="subject"
                        placeholderText="Subject"
                        ariaLabelName="Subject"
                    />

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols={14}
                            rows={6}
                            aria-label="Message"
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                            <Button
                                title="Send Message"
                                aria-label="Send Message"
                            />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
