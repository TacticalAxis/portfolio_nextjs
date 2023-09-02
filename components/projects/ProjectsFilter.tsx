import React, { ChangeEvent } from 'react'
import { projectsData } from '@/data/projectsData';

const selectOptions = Array.from(new Set(projectsData.map(project => project.category)));

interface ProjectsFilterProps {
    setSelectProject: (value: string) => void
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
    setSelectProject,
}) => {
    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value
        if (selectedValue === 'all') {
            // Handle the case where "All Projects" is selected
            setSelectProject('')
        } else {
            setSelectProject(selectedValue)
        }
    }

    return (
        <select
            aria-label="Filter Projects"
            onChange={handleOnChange}
            className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
        >
            <option value="all" className="text-sm sm:text-md">
                All
            </option>

            {selectOptions.map((option) => (
                <option
                    className="text-normal sm:text-md"
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    )
}

export default ProjectsFilter
