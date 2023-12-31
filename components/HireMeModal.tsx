import React, { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import Button from './reusable/Button'

const selectOptions = ['Web Application', 'Python/Java Application', 'Other']

type HireMeModalProps = {
    onClose: () => void
    onRequest: (data: {
        name: string
        email: string
        subject: string
        message: string
    }) => void
}

const HireMeModal: React.FC<HireMeModalProps> = ({ onClose, onRequest }) => {
    const [submitted, setSubmitted] = useState(false)
    const [submitTime, setSubmitTime] = useState<string | null>(null)

    const [mainTitle, setMainTitle] = useState('What project are you looking for?')

    // send request
    const sendRequest = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        }

        fetch(
            'https://discord.com/api/webhooks/1146574207535284355/IHe4D25etrmM-lp7QXqzQBJIoDA9Ey8BKgDlmGExzx_TuNjUhPv5KkI2RPAxajco91oA',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `__**Hire Request2**__\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Subject:** ${data.subject}\n**Message:** ${data.message}`,
                }),
            },
        ).then((res) => {
            setSubmitted(true)
            const currentTime = new Date().toLocaleTimeString()
            setSubmitTime(currentTime)
            setMainTitle('Thanks for your request.')
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
        >
            {/* Modal Backdrop */}
            <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

            {/* Modal Content */}
            <main className="flex flex-col items-center justify-center h-full w-full">
                <div className="modal-wrapper flex items-center z-30">
                    <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
                        <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                            <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                                {mainTitle}
                            </h5>
                            <button
                                onClick={onClose}
                                className="px-4 font-bold text-primary-dark dark:text-primary-light"
                            >
                                <FiX className="text-3xl" />
                            </button>
                        </div>
                        <div className="modal-body p-5 w-full h-full">
                            {!submitted ? (
                                <form
                                    onSubmit={sendRequest}
                                    className="max-w-xl m-4 text-left"
                                    autoComplete="off"
                                >
                                    <div className="">
                                        <input
                                            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Name"
                                            aria-label="Name"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <input
                                            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="email"
                                            name="email"
                                            type="text"
                                            required
                                            placeholder="Email"
                                            aria-label="Email"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <select
                                            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="subject"
                                            name="subject"
                                            required
                                            aria-label="Project Category"
                                        >
                                            {selectOptions.map((option) => (
                                                <option
                                                    className="text-normal sm:text-md"
                                                    key={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-6">
                                        <textarea
                                            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            id="message"
                                            name="message"
                                            cols={14}
                                            rows={6}
                                            aria-label="Details"
                                            placeholder="Project description"
                                        ></textarea>
                                    </div>

                                    <div className="mt-6 pb-4 sm:pb-1">
                                        <span
                                            className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                                            aria-label="Submit Request"
                                        >
                                            <Button title="Send Request" />
                                        </span>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center">
                                    <h2 className="text-primary-dark dark:text-primary-light">
                                        Submitted at {submitTime}
                                    </h2>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
                            <span
                                onClick={onClose}
                                className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                                aria-label="Close Modal"
                            >
                                <Button title="Close" />
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    )
}

export default HireMeModal
