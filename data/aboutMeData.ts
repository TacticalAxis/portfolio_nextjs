import { v4 as uuidv4 } from 'uuid';

interface AboutMeItem {
    id: string;
    bio: string;
}

export const aboutMeData: AboutMeItem[] = [
    {
        id: uuidv4(),
        bio: 'I\'m a Bachelor of Computer and Information Science student with a strong focus on software-development: skilled in Java, Python, PHP, and C. With a track record of problem-solving, mentorship, and teamwork, I\'m eager to excel in any role and contribute with my unique perspective and strong communication skills, and love sharing my knowledge.',
    }
];
