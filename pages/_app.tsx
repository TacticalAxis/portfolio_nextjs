import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import DefaultLayout from '../components/layout/DefaultLayout'
import UseScrollToTop from '../hooks/useScrollToTop'

import type { AppProps } from 'next/app'

const EntryPoint: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AnimatePresence>
            <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
                <UseScrollToTop />
            </div>
        </AnimatePresence>
    )
}

export default EntryPoint
