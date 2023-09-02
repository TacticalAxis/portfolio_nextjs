import { motion } from 'framer-motion'
import React from 'react'
import AboutMeBio from '../components/about/AboutMeBio'
import PagesMetaHead from '../components/PagesMetaHead'

const About: React.FC = () => {
    return (
        <div>
            <PagesMetaHead title="About Me" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.7,
                    delay: 0.15,
                }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio />

                {/* Work Experience Section */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
                        Work Experience
                    </h2>

                    <div className="mb-8 text-ternary-dark dark:text-ternary-light text-lg">
                        <h3 className="text-lg font-medium mb-2">
                            Python Developer / Data Analyst
                        </h3>
                        <p>
                            Contract - Auto Parts Industrial NZ, Auckland, New
                            Zealand
                        </p>
                        <p className="mt-2">
                            Designed a client-server style python program to
                            streamline the process of finding parts accurately
                            for panel beaters based on their quotes downloaded
                            from PartsTrader.
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>
                                Leveraged Python SQLAlchemy and PostgreSQL to
                                manage and store part data. This meant creating
                                a robust and scalable database system that
                                allowed for efficient data retrieval and
                                storage.
                            </li>
                            <li>
                                Implemented advanced NLP techniques using Spacy
                                and SentenceTransformers to determine text
                                similarity, enhancing the accuracy of part
                                identification based on the panel beaters&#39;
                                quotes with over 46,000 part codes.
                            </li>
                            <li>
                                Utilised Selenium in conjunction with
                                BeautifulSoup to extract data from various
                                websites. This was done together with proxies to
                                ensure integrity and reliability when extracting
                                the data.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8 text-ternary-dark dark:text-ternary-light text-lg">
                        <h3 className="text-lg font-medium mb-2">
                            Raspberry Pi Development Assistant
                        </h3>
                        <p className="">
                            Farmgate Security, Auckland, New Zealand
                        </p>
                        <p className="">
                            Building a barrier system that uses ANPR, Raspberry
                            Pi, and Security Cameras to allow/deny access to
                            rural farms
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>
                                Engineered IoT systems through the development
                                of Python programs on Raspberry Pi systems,
                                enabling hardware interaction via GPIO and
                                network interfaces.
                            </li>
                            <li>
                                Delivered a robust administration and management
                                portal by utilizing the Python Flask framework.
                                Incorporated Bootstrap, HTML, CSS, and
                                JavaScript, resulting in improved web
                                functionality and user experience.
                            </li>
                            <li>
                                Efficiently managed data within a PostgreSQL
                                Database Environment through the application of
                                Python SQLAlchemy, enhancing data manipulation
                                and overall database performance.
                            </li>
                            <li>
                                Mentored new joiners into the team at Farmgate
                                Security
                            </li>
                            <li>
                                Communicated with the team lead and other
                                programmers about project requirements
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8 text-ternary-dark dark:text-ternary-light text-lg">
                        <h3 className="text-lg font-medium mb-2">
                            Club Treasurer
                        </h3>
                        <p className="">
                            AUT Cyber Security Club, Auckland, New Zealand
                        </p>
                        <p className="">
                            Hosted beginner hacking events, demonstrating
                            malicious tools and techniques for damaging
                            unprotected targets
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>
                                Attended and encouraged members to attend
                                cybersecurity events
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8 text-ternary-dark dark:text-ternary-light text-lg">
                        <h3 className="text-lg font-medium mb-2">
                            Freelance Java Developer
                        </h3>
                        <p className="">Fiverr, Remote</p>
                        <p className="">Understanding customer requirements and
                                converting this into customised Minecraft
                                Plugins developed using the Java Programming
                                language</p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>
                                24 5-star ratings and gained several returning
                                customers
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Education Section */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
                        Education
                    </h2>
                    <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                        <strong>
                            Bachelor of Computer and Information Science
                        </strong>
                        <br />
                        Auckland University of Technology
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
                        Interpersonal Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-ternary-dark dark:text-ternary-light text-lg">
                        <p>Problem Solving</p>
                        <p>Mentorship</p>
                        <p>Communication</p>
                        <p>Listening</p>
                        <p>Taking Action</p>
                        <p>Teamwork</p>
                    </div>
                </section>

                
                {/* Skills Section */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-ternary-dark dark:text-ternary-light text-lg">
                        <p>Java</p>
                        <p>Python</p>
                        <p>PHP</p>
                        <p>C</p>
                        <p>React/JS</p>
                        <p>MongoDB</p>
                        <p>PostgreSQL</p>
                        <p>HTTP</p>
                        <p>RTSP</p>
                        <p>SSH</p>
                        <p>SFTP</p>
                        <p>Powershell</p>
                        <p>Linux</p>
                        <p>Websockets</p>
                        <p>Stripe Payments</p>
                        <p>Virtualisation</p>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold mb-6 text-ternary-dark dark:text-ternary-light">
                        Certifications
                    </h2>
                    <div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                        <strong>CCNA - Introduction to Networks</strong>
                        <br />
                        Cisco, 2021
                    </div>
                    <div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                        <strong>
                            CCNA - Switching, Routing, and Wireless Essentials
                        </strong>
                        <br />
                        Cisco, 2022
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

export default About
