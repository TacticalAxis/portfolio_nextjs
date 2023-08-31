import { motion } from 'framer-motion';
import React from 'react';
// import AboutClients from '../components/about/AboutClients';
// import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import PagesMetaHead from '../components/PagesMetaHead';

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
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.7,
                    delay: 0.15,
                }}
                exit={{ opacity: 0 }}
            >
                {/* <AboutCounter /> */}
            </motion.div>

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
                {/* <AboutClients /> */}
            </motion.div>
        </div>
    );
}

export default About;
