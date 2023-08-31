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
        title: 'Auckland Transport Bot',
        url: 'auckland-transport-discord-bot',
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
    {
        id: 2,
        title: 'Ramen NFT Collectibles',
        url: 'ramen-nft',
        category: 'NFT Project',
        img: '/images/mobile-project-2.jpg',
        projectHeader: {
            title: 'Phoenix Digital Agency',
            publishDate: 'Jul 26, 2021',
            tags: 'Mobile Application',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'Phoenix Digital Agency',
                img: '/images/ui-project-1.jpg',
            },
            {
                id: uuidv4(),
                title: 'Phoenix Digital Agency',
                img: '/images/web-project-2.jpg',
            },
            {
                id: uuidv4(),
                title: 'Phoenix Digital Agency',
                img: '/images/mobile-project-2.jpg',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [
                {
                    id: uuidv4(),
                    title: 'Name',
                    details: 'Company Ltd',
                },
                {
                    id: uuidv4(),
                    title: 'Services',
                    details: 'UI Design & Frontend Development',
                },
                {
                    id: uuidv4(),
                    title: 'Website',
                    details: 'https://company.com',
                },
                {
                    id: uuidv4(),
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Some Project',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'TailwindCSS',
                        'AdobeXD',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'Some project details',
                },
            ],
        },
    },
    {
        id: 3,
        title: 'Project Management UI',
        url: 'project-management-ui',
        category: 'UI/UX Design',
        img: '/images/ui-project-1.jpg',
        projectHeader: {
            title: 'Project Management UI',
            publishDate: 'Jul 26, 2021',
            tags: 'UI / Frontend',
        },
        projectImages: [
            {
                id: uuidv4(),
                title: 'Kabul Project Management UI',
                img: '/images/ui-project-1.jpg',
            },
            {
                id: uuidv4(),
                title: 'Kabul Project Management UI',
                img: '/images/web-project-2.jpg',
            },
            {
                id: uuidv4(),
                title: 'Kabul Project Management UI',
                img: '/images/mobile-project-2.jpg',
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfo: [
                {
                    id: uuidv4(),
                    title: 'Name',
                    details: 'Company Ltd',
                },
                {
                    id: uuidv4(),
                    title: 'Services',
                    details: 'UI Design & Frontend Development',
                },
                {
                    id: uuidv4(),
                    title: 'Website',
                    details: 'https://company.com',
                },
                {
                    id: uuidv4(),
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'some objective',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'TailwindCSS',
                        'AdobeXD',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: uuidv4(),
                    details:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
                }
            ],
        },
    }
]
