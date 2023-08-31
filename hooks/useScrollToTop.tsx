import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const useScrollToTop: React.FC = () => {
    const [showScroll, setShowScroll] = useState<boolean>(false);

    const scrollToTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollToTop);
        }
        
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', scrollToTop);
            }
        }
    }, [showScroll]);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <FiChevronUp
                className="scrollToTop"
                onClick={backToTop}
                style={{
                    height: 40,
                    width: 40,
                    padding: 7,
                    borderRadius: 50,
                    right: 50,
                    bottom: 50,
                    display: showScroll ? 'flex' : 'none',
                }}
            />
        </>
    );
}

export default useScrollToTop;
