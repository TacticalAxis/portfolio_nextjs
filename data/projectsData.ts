import { v4 as uuidv4 } from 'uuid';

export interface ProjectImage {
    id: string;
    title: string;
    img: string;
}

export interface TechDetails {
    title: string;
    techs: string[];
}

export interface ProjectDetails {
    id: string;
    details: string;
}

export interface CompanyInfo {
    id: string;
    title: string;
    details: string;
}

export interface ProjectInfo {
    clientHeading?: string;
    companyInfo?: CompanyInfo[];
    objectivesHeading: string;
    objectivesDetails: string;
    technologies: TechDetails[];
    projectDetailsHeading: string;
    projectDetails: ProjectDetails[];
}

export interface ProjectHeader {
    title: string;
    publishDate: string;
    tags: string;
}

export interface ProjectData {
    id: number;
    title: string;
    url: string;
    category: string;
    img: string;
    projectHeader: ProjectHeader;
    projectImages: ProjectImage[];
    projectInfo: ProjectInfo;
}

export const projectsData: ProjectData[] = [
    {
        id: 1,
        title: 'Chrono.ly',
        url: 'https://chrono.ly',
        category: 'Website',
        img: '/images/projects/chronoly.jpg',
        projectHeader: {
            title: 'Chrono.ly Time Tracker for Freelancers',
            publishDate: '01/2023',
            tags: 'Web Application/VSCode Extension',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'Chronoly Landing Page',
                img: '/images/projects/chronoly/image1.png',
            },
            {
                id: uuidv4(),
                title: 'Automated Code Time Tracking',
                img: '/images/projects/chronoly/image2.png',
            },
            {
                id: uuidv4(),
                title: 'Chronoly FAQ Page',
                img: '/images/projects/chronoly/image3.png',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'The objective of this project is to create a time tracking application for freelancers so they can easily track their time spent on projects, and generate invoices for their clients.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Next.js',
                        'TypeScript',
                        'tRPC',
                        'Prisma',
                        'TailwindCSS',
                        'NextAuth.js',
                        'VSCode Extension API',
                        'NestJS',
                        'MongoDB',
                        'Docker',
                        'AWS',
                        'Figma'
                    ],
                },
            ],
            projectDetailsHeading: 'Proposal',
            projectDetails: [
                {
                    id: uuidv4(),
                    details: 'Chrono.ly is a time tracking application for freelancers. It is a VSCode Plugin + Website Companion that allows users to track their time spent on projects, and generate invoices for their clients. It also has a VSCode extension that allows users to track their time spent on projects directly from their code editor.',
                },
                {
                    id: uuidv4(),
                    details: 'The website is built with Next.js, TypeScript, and TailwindCSS. The backend is built with Next.js API Routes, tRPC, and Prisma. (This is the T3 stack).',
                }
            ],
        },
    },
    {
        id: 2,
        title: 'Speed Database',
        url: '',
        category: 'Website',
        img: '/images/ui-project-1.jpg',
        projectHeader: {
            title: 'The SPEED Database',
            publishDate: '08/2023',
            tags: 'Web Application',
        },
        projectImages: [],
        projectInfo: {
            clientHeading: 'Tony Clear',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails: 'The objective is to build a database of articles and other resources related to the SPEED framework. The database will be searchable by keyword, and will be able to be filtered by category, author, and other metadata.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Next.js',
                        'TypeScript',
                        'tRPC',
                        'Prisma',
                        'TailwindCSS',
                        'NextAuth.js',
                        'NestJS',
                        'MongoDB',
                        'Figma'
                    ],
                },
            ],
            projectDetailsHeading: 'Project Description',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'The SPEED database is a searchable database of articles and other resources related different software development practices such as TDD, etc. The database will be searchable by keyword, and will be able to be filtered by category, author, and other metadata. The website will be built with Using the T3 stack (Next.js, TypeScript, tRPC, Prisma, TailwindCSS, and NextAuth.js). The database will be stored on MongoDB Atlas.',
                },
            ],
        },
    },
    {
        id: 4,
        title: 'iFridge',
        url: 'https://ifrid.ge',
        category: 'PWA',
        img: '/images/ui-project-1.jpg',
        projectHeader: {
            title: 'iFridge - Portable Inventory & Recipe Generator',
            publishDate: '07/2022',
            tags: 'Web Application',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'iFridge Landing Page',
                img: '/images/projects/ifridge/image1.png',
            },
            {
                id: uuidv4(),
                title: 'Inventory System',
                img: '/images/projects/ifridge/image2.png',
            },
            {
                id: uuidv4(),
                title: 'Recipe Generation',
                img: '/images/projects/ifridge/image3.png',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails: 'The objective is to build a web application that allows users to track their food inventory, and generate recipes based on the ingredients they have in their fridge.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'React',
                        'JavaScript',
                        'ExpressJS',
                        'Firebase',
                        'Bootstrap',
                    ],
                },
            ],
            projectDetailsHeading: 'Project Description',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'iFridge is a web application that allows users to track their food inventory, and generate recipes based on the ingredients they have in their fridge. The website is built with React, JavaScript, ExpressJS, Firebase, and Bootstrap. This project was made as part of the Software Development Practice paper at the Auckland University of Technology.',
                }
            ],
        },
    },
    {
        id: 5,
        title: 'Ramen NFT Collectibles',
        url: 'https://ramennft.nathandsouza.com',
        category: 'NFT Project',
        img: '/images/projects/ramennft/image1.png',
        projectHeader: {
            title: 'Ramen NFT Collectibles',
            publishDate: '12/2021',
            tags: 'NFT Project',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'RamenNFT Landing Page',
                img: '/images/projects/ramennft/image1.png',
            },
            {
                id: uuidv4(),
                title: 'RamenNFT Collectibles',
                img: '/images/projects/ramennft/image2.png',
            },
            {
                id: uuidv4(),
                title: 'RamenNFT Minting Process',
                img: '/images/projects/ramennft/image3.png',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'The objective of RamenNFT was to create a community-based NFT project that would allow users to customise and mint their own NFTs, trade them with other users.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Solidity',
                        'Web3',
                        'Truffle',
                        'Blockchain'
                    ],
                },
            ],
            projectDetailsHeading: 'Project Description',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'RamenNFT is a community-based NFT project that allows users to customise and mint their own NFTs, and trade them with other users within the RamenNFT community. The website was build with basic HTML, JavaScript, and using the Bootstrap framework, but the backend was built using Solidity, Web3, and Truffle for local development. The NFTs never reached the minting stage, but the project was a great learning experience for me to learn about the blockchain, and how to build a decentralised application.',
                }
            ],
        },
    },
    {
        id: 6,
        title: 'StudyGrove Community',
        url: 'https://studygrove.nathandsouza.com',
        category: 'Website',
        img: '/images/projects/studygrove/image1.png',
        projectHeader: {
            title: 'StudyGrove - Online Study Communication Platform (Concept)',
            publishDate: '03/2021',
            tags: 'Web Application',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'StudyGrove Landing Page',
                img: '/images/projects/studygrove/image1.png',
            },
            {
                id: uuidv4(),
                title: 'StudyGrove Feed Page',
                img: '/images/projects/studygrove/image2.png',
            },
            {
                id: uuidv4(),
                title: 'StudyGrove Groups Page',
                img: '/images/projects/studygrove/image3.png',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'The objective of StudyGrove was to create a web application that would allow students to communicate with each other, and share resources with each other.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript'
                    ],
                },
            ],
            projectDetailsHeading: 'Project Description',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'StudyGrove is a web application that allows students to communicate with each other, share resources, and talk about assignments and other topics for certain papers. Students would be able to login with their AUT ID, as this concept was built specifically for educational use. The website was built with basic HTML, CSS, and JavaScript. This project concept was made as part of the Mahitahi paper at the Auckland University of Technology.',
                }
            ],
        },
    },
    {
        id: 7,
        title: 'ICT Fundamentals Project',
        url: 'https://comp501.nathandsouza.com',
        category: 'Website',
        img: '/images/projects/ictfundamentals/image1.png',
        projectHeader: {
            title: 'ICT Fundamentals',
            publishDate: '03/2021',
            tags: 'Web Application',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'ICT Fundamentals Binary Basics',
                img: '/images/projects/ictfundamentals/image1.png',
            },
            {
                id: uuidv4(),
                title: 'ICT Fundamentals Testing Different OSes',
                img: '/images/projects/ictfundamentals/image2.png',
            },
            {
                id: uuidv4(),
                title: 'ICT Fundamentals Testing YOLOv3 Image Recognition',
                img: '/images/projects/ictfundamentals/image3.png',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'The objective of this project was to create a web application that would allow students to learn about the basics of IT, learn about different operating systems, and image recognition.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'ICT Fundamentals is a web application that allows students to learn about the basics of IT, learn about different operating systems, and image recognition. The website was built with basic HTML and CSS. This project was made as part of the Computing Technology in Society paper at the Auckland University of Technology.',
                }
            ],
        },
    },
    {
        id: 8,
        title: 'Freelance Java Developer',
        url: 'https://www.fiverr.com/users/nathand256',
        category: 'Freelancing',
        img: '/images/projects/freelance/image1.png',
        projectHeader: {
            title: 'Freelance Java Developer',
            publishDate: '12/2020',
            tags: 'Freelancing',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'Freelancing Overview',
                img: '/images/projects/freelancing/image1.png',
            },
            {
                id: uuidv4(),
                title: 'Freelancing Orders',
                img: '/images/projects/freelancing/image2.png',
            },
            {
                id: uuidv4(),
                title: 'Freelancing Earnings',
                img: '/images/projects/freelancing/image3.png',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'The objective of starting out in freelancing was to learn about programming under pressure, and to learn how to work with clients.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Java',
                        'Minecraft',
                    ],
                },
            ],
            projectDetailsHeading: 'Project Description',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'I started out in freelancing by creating Minecraft plugins for clients. I learned a lot about programming under pressure, and how to work with clients. I also learned how to manage my time, and how to work on multiple projects at once. I earned many positive reviews from clients, and I was able to build a good reputation for myself as a freelance Java developer.',
                }
            ],
        },
    },
    {
        id: 9,
        title: 'The Auckland Transport Bot',
        url: 'https://github.com/TacticalAxis/auckland-transport',
        category: 'Discord Bot',
        img: '/images/projects/auckland-transport/atimage.png',
        projectHeader: {
            title: 'Auckland Transport Discord Bot',
            publishDate: 'August 2nd, 2021',
            tags: 'Discord Bot',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'Google Health Platform',
                img: '/images/projects/auckland-transport/atbot.png',
            },
        ],
        projectInfo: {
            objectivesHeading: 'Objective',
            objectivesDetails:
                'The objective of this project was to create a Discord bot that would allow users to access Auckland Transport\'s real-time vehicle and bus stop information. Since Discord is supported on many platforms, this bot is available on those same platforms.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Python',
                        'Rest APIs',
                        'Discord'
                    ],
                },
            ],
            projectDetailsHeading: 'Project Description',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'While this bot is still in alpha development, the first preview is now functional with a working command: /locate',
                },
                {
                    id: uuidv4(),
                    details:
                        "The aim of this Discord Bot is to provide users on the Discord platform a way to access Auckland Transport's real-time vehicle and bus stop information. Since Discord is supported on many platforms, this bot is available on those same platforms.",
                },
                {
                    id: uuidv4(),
                    details:
                        'Since this bot is currently in a very early development stage, it is not available to the public to be added to their personal servers.',
                },
                {
                    id: uuidv4(),
                    details:
                        'Through the use of the Vehicle ID system (i.e. AMP129 - train, or RT1303 - bus), using this in combination with the /locate command on a server with this bot, it displays the relevant information for that vehicle.',
                },
                {
                    id: uuidv4(),
                    details:
                        'Both buses and trains show the route short name (i.e EAST - train, or 95C - bus), the route description, current location, speed, and next-stop information. This is only available for buses and trains, as they go from stop to stop, since ferries travel from a departure location directly to an arrival location. The next-stop information shows the stop number, location, and estimated time of arrival.',
                },
            ],
        },
    },
]
