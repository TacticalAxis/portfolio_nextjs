import React from 'react'
import Image from 'next/image'
import { FiChrome, FiClock, FiExternalLink, FiTag } from 'react-icons/fi'
import PagesMetaHead from '../../components/PagesMetaHead'
import { projectsData } from '../../data/projectsData'
// import RelatedProjects from '../../components/projects/RelatedProjects'
import { GetServerSideProps } from 'next'
import { ProjectData } from '../../data/projectsData'
import Link from 'next/link'

interface ProjectSingleProps {
    project: ProjectData
}

const ProjectSingle: React.FC<ProjectSingleProps> = (props) => {
    return (
        <div className="container mx-auto">
            <PagesMetaHead title={props.project.title} />

            {/* Header */}
            <div>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {props.project.projectHeader.title}
                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                            {props.project.projectHeader.publishDate}
                        </span>
                    </div>

                    <div className="flex items-center">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                            {props.project.projectHeader.tags}
                        </span>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                {props.project.projectImages.map((project: any) => {
                    return (
                        <div className="mb-10 sm:mb-0" key={project.id}>
                            <Image
                                src={project.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={project.title}
                                key={project.id}
                                width={1200}
                                height={900}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Info */}
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    {/* Single project client details */}
                    {/* <div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info : any ) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												href="https://nathandsouza.com"
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div> */}

                    {/* project Link */}
                    { props.project.url && (
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            Project Link
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            <Link href={props.project.url} target="_blank">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    <FiExternalLink className="w-4 h-4 inline-block mr-2" />
                                    Visit
                                    </span>
                            </Link>
                        </p>
                    </div>
                    )}

                    {/* Single project objectives */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {props.project.projectInfo.objectivesHeading}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {props.project.projectInfo.objectivesDetails}
                        </p>
                    </div>

                    {/* Single project technologies */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {props.project.projectInfo.technologies[0].title}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {props.project.projectInfo.technologies[0].techs.map(
                                (tech: any) => {
                                    return (
                                        <span
                                            key={tech}
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                        >
                                            {tech}
                                        </span>
                                    )
                                },
                            )}
                        </p>
                    </div>
                </div>

                {/*  Single project right section details */}
                <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {props.project.projectInfo.projectDetailsHeading}
                    </p>
                    {props.project.projectInfo.projectDetails.map(
                        (details: any) => {
                            return (
                                <p
                                    key={details.id}
                                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                                >
                                    {details.details}
                                </p>
                            )
                        },
                    )}
                </div>
            </div>

            {/* <RelatedProjects /> */}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query
    return {
        props: {
            project: projectsData.filter(
                (project) => project.id === parseInt(id as string),
            )[0],
        },
    }
}

export default ProjectSingle
