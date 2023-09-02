import React from 'react';
import { FiMapPin, FiMail } from 'react-icons/fi';

interface Contact {
    id: number;
    name: string;
    link: string;
    icon: JSX.Element;
}

const contacts: Contact[] = [
    {
        id: 1,
        name: 'Auckland, New Zealand',
        link: 'https://www.google.com/maps/place/Auckland',
        icon: <FiMapPin />,
    },
    {
        id: 2,
        name: 'nathand1278@gmail.com',
        link: 'mailto:nathand1278@gmail.com',
        icon: <FiMail />,
    },
];

const ContactDetails: React.FC = () => {
    return (
        <div className="w-full lg:w-1/2">
            <div className="text-left max-w-xl px-6">
                <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                    Contact details
                </h2>
                <ul>
                    {contacts.map((contact) => (
                        <li className="flex " key={contact.id}>
                            <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                                {contact.icon}
                            </i>
                            <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                <a href={contact.link} target='_blank' rel="noopener noreferrer">{contact.name}</a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactDetails;
