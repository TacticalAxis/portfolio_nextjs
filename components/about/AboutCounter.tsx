import React, { useRef } from 'react';
import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

interface CounterItemProps {
    title: string;
    counter: JSX.Element;
    measurement: string;
}

function AboutCounter() {
    const experienceCounterRef = useRef<HTMLSpanElement>(null);
    const githubStarsCounterRef = useRef<HTMLSpanElement>(null);
    const feedbackCounterRef = useRef<HTMLSpanElement>(null);
    const projectsCounterRef = useRef<HTMLSpanElement>(null);

    useCountUp({ ref: experienceCounterRef, end: 12, duration: 2 });
    useCountUp({ ref: githubStarsCounterRef, end: 20, duration: 2 });
    useCountUp({ ref: feedbackCounterRef, end: 92, duration: 2 });
    useCountUp({ ref: projectsCounterRef, end: 77, duration: 2 });

    return (
        <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
            <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
                <CounterItem
                    title="Years of experience"
                    counter={<span ref={experienceCounterRef} />}
                    measurement=""
                />

                <CounterItem
                    title="Stars on GitHub"
                    counter={<span ref={githubStarsCounterRef} />}
                    measurement="k+"
                />

                <CounterItem
                    title="Positive feedback"
                    counter={<span ref={feedbackCounterRef} />}
                    measurement="%"
                />

                <CounterItem
                    title="Projects completed"
                    counter={<span ref={projectsCounterRef} />}
                    measurement="%"
                />
            </div>
        </div>
    );
}

export default AboutCounter;
