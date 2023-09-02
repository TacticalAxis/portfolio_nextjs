import Image from 'next/image'
import { useState } from 'react'
import { aboutMeData } from '../../data/aboutMeData'

interface BioData {
    id: number | string
    bio: string
}

function AboutMeBio() {
    const [aboutMe, setAboutMe] = useState<BioData[]>(aboutMeData)

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <Image
                    src="/images/profile.jpeg"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    alt="Profile Image"
                />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.map((bio) => (
                    <p
                        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                        key={bio.id}
                    >
                        {bio.bio}
                        <br />
                    </p>
                ))}

                <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                    With a software development journey that took off in 2015
                    and entering the commercial space in 2021 as a freelancer, I
                    have since developed a strong foundation as a programmer. I
                    have developed many applications for a variety of purposes,
                    including:
                </p>

                {/* bullet points */}
                <ul className="list-disc pl-5 mt-2 mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                    <li>
                        designing a system for panel beaters to identify and
                        locate vehicle parts through semantic text similarity
                    </li>
                    <li>
                        using IoT devices to build a prototype barrier system
                        for rural farms and management portal to supplement
                        maintenance for them
                    </li>
                    <li>
                        understanding requirements and writing Java plugins
                        (implemented into Minecraft servers) for many customers
                        as a freelancer
                    </li>
                    <li>
                        building many websites (frontend and backend), using web
                        technologies like React and NextJS, and backend
                        frameworks like NestJS and Express
                    </li>
                    <li>
                        building personal projects and collaborating with other
                        people through version control, and open sourcing many
                        of my projects on GitHub
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMeBio
