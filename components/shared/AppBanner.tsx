import { motion } from 'framer-motion'
import { FiArrowDownCircle } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import Image from 'next/image'

const AppBanner: React.FC = () => {
    const [activeTheme] = useThemeSwitcher()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center items-center mt-12"
        >
            <div className="w-full md:w-1/2 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="mx-auto w-48 h-48 sm:w-60 sm:h-60 rounded-full shadow-lg"
                >
                    <Image
                        src={`/images/profile.png`}
                        alt="Nathan Dsouza"
                        className="w-full h-full rounded-full"
                        priority={true}
                        width={1000}
                        height={1000}
                    />
                    <div
                        className={`absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-${
                            activeTheme === 'dark' ? 'ternary-dark' : 'primary-light'
                        } to-${
                            activeTheme === 'dark' ? 'ternary-dark' : 'primary-light'
                        } opacity-75`}
                    ></div>
                </motion.div>

                <br />
                <br />

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-ternary-dark dark:text-primary-light"
                >
                    Nathan Dsouza
                </motion.h1>
                <br />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal text-gray-500 dark:text-gray-200"
                >
                    Programmer &#183; Musician &#183; Car Enthusiast
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center mt-12 mb-6"
                >
                    <a
                        download="Nathan-CV.pdf"
                        href="/files/Nathan-CV.pdf"
                        className="font-general-medium flex justify-center items-center w-36 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="Download Resume"
                    >
                        <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                        <span className="text-sm sm:text-lg duration-100">
                            Download CV
                        </span>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default AppBanner
